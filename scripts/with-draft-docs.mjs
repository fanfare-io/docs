import { spawn } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const DOCS_JSON_PATH = "docs.json";
const MINTIGNORE_PATH = ".mintignore";
const DRAFTS_PATH = "docs.drafts.json";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function insertDraftTabs(publicConfig, draftConfig) {
  const tabs = publicConfig.navigation?.tabs;
  const draftTabs = draftConfig.navigation?.tabs ?? [];
  if (!Array.isArray(tabs) || draftTabs.length === 0) {
    return publicConfig;
  }

  const resourcesIndex = tabs.findIndex((tab) => tab.tab === "Resources");
  const insertAt = resourcesIndex === -1 ? tabs.length : resourcesIndex;
  const nextTabs = [...tabs.slice(0, insertAt), ...draftTabs, ...tabs.slice(insertAt)];

  return {
    ...publicConfig,
    navigation: {
      ...publicConfig.navigation,
      tabs: nextTabs,
    },
  };
}

function removeDraftIgnores(mintignore, draftConfig) {
  const unignore = new Set(draftConfig.unignore ?? []);
  return mintignore
    .split("\n")
    .filter((line) => !unignore.has(line.trim()))
    .join("\n")
    .replace(/\n*$/, "\n");
}

const separatorIndex = process.argv.indexOf("--");
const command = separatorIndex === -1 ? process.argv.slice(2) : process.argv.slice(separatorIndex + 1);

if (command.length === 0) {
  console.error("Usage: node scripts/with-draft-docs.mjs -- <command>");
  process.exit(1);
}

const originalDocsJson = readFileSync(DOCS_JSON_PATH, "utf8");
const originalMintignore = readFileSync(MINTIGNORE_PATH, "utf8");
let restored = false;

function restore() {
  if (restored) return;
  writeFileSync(DOCS_JSON_PATH, originalDocsJson);
  writeFileSync(MINTIGNORE_PATH, originalMintignore);
  restored = true;
}

const publicConfig = JSON.parse(originalDocsJson);
const draftConfig = readJson(DRAFTS_PATH);
const draftDocsConfig = insertDraftTabs(publicConfig, draftConfig);

writeFileSync(DOCS_JSON_PATH, `${JSON.stringify(draftDocsConfig, null, 2)}\n`);
writeFileSync(MINTIGNORE_PATH, removeDraftIgnores(originalMintignore, draftConfig));

const child = spawn(command[0], command.slice(1), {
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  restore();
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});

process.on("SIGINT", () => {
  restore();
  process.exit(130);
});

process.on("SIGTERM", () => {
  restore();
  process.exit(143);
});
