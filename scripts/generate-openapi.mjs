#!/usr/bin/env node
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { parseArgs } from "node:util";

const OUTPUT_DIR = "api/openapi";
const DOCS_CONFIG_PATH = "docs.json";
const METHODS = ["get", "post", "put", "patch", "delete", "options", "head"];
const METHOD_ORDER = new Map(METHODS.map((method, index) => [method, index]));
const PUBLIC_OMITTED_SCHEMA_FIELDS = new Set([
  "botScore",
  "deviceFingerprint",
  "fingerprint",
  "lastRiskAssessmentAt",
  "riskAssessment",
  "riskScore",
  "source",
]);

const genericJsonValueSchema = {
  anyOf: [
    { type: "string" },
    { type: "number" },
    { type: "integer" },
    { type: "boolean" },
    { type: "null" },
    { type: "array", items: {} },
    { type: "object", additionalProperties: {} },
  ],
};

const environments = {
  local: {
    admin: "http://localhost:4800/openapi",
    consumer: "http://localhost:4802/openapi",
    checkout: "http://localhost:4805/openapi",
    beacon: "http://localhost:4803/openapi",
  },
  staging: {
    admin: "https://admin.staging.fanfare.io/api/openapi",
    consumer: "https://consumer.staging.fanfare.io/api/openapi",
    checkout: "https://checkout.staging.fanfare.io/api/openapi",
    beacon: "https://beacon.staging.fanfare.io/api/openapi",
  },
  production: {
    admin: "https://admin.fanfare.io/api/openapi",
    consumer: "https://consumer.fanfare.io/api/openapi",
    checkout: "https://checkout.fanfare.io/api/openapi",
    beacon: "https://beacon.fanfare.io/api/openapi",
  },
};

const services = {
  admin: {
    title: "Admin API",
    output: "admin-api.json",
    productionBaseUrl: "https://admin.fanfare.io/api",
    localBaseUrl: "http://localhost:4800",
    overviewPage: "api/admin-api/overview",
    extraPages: ["api/admin-api/loyalty"],
    navGroup: "Admin API",
    hiddenOperations: new Set(["post /organizations"]),
    securitySchemes: {
      SecretKeyAuth: {
        type: "http",
        scheme: "bearer",
        description: "Fanfare secret key. Keep secret credentials on your server.",
      },
    },
    security: [{ SecretKeyAuth: [] }],
    groups: [
      { group: "Analytics", match: pathStartsWith("/analytics") },
      { group: "Organizations", match: pathStartsWith("/organizations") },
      {
        group: "Experiences",
        pages: ["api/admin-api/experiences"],
        match: anyPathStartsWith("/experiences", "/experience-pages"),
      },
      { group: "Consumers", match: pathStartsWith("/consumers") },
      { group: "Audiences", match: pathStartsWith("/audiences") },
      { group: "Products", match: anyPathStartsWith("/products", "/variant-options") },
      {
        group: "Distributions",
        pages: ["api/admin-api/distributions"],
        match: anyPathStartsWith(
          "/sequences",
          "/waitlists",
          "/auctions",
          "/draws",
          "/queues",
          "/timed-releases",
          "/appointments",
          "/announcements",
          "/scheduled-events"
        ),
      },
    ],
  },
  consumer: {
    title: "Consumer API",
    output: "consumer-api.json",
    productionBaseUrl: "https://consumer.fanfare.io/api",
    localBaseUrl: "http://localhost:4802",
    overviewPage: "api/consumer-api/overview",
    extraPages: ["api/consumer-api/loyalty"],
    navGroup: "Consumer API",
    securitySchemes: {
      PublishableKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "X-Publishable-Key",
        description: "Browser-safe publishable key for client-side consumer requests.",
      },
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        description: "Consumer access token or server-side secret key, depending on the endpoint.",
      },
    },
    groups: [
      { group: "Auth", match: pathStartsWith("/auth") },
      { group: "Consumers", match: pathStartsWith("/consumers") },
      { group: "Experiences", match: pathStartsWith("/experiences") },
      { group: "Queues", match: pathStartsWith("/queues") },
      { group: "Auctions", match: pathStartsWith("/auctions") },
      { group: "Draws", match: pathStartsWith("/draws") },
      { group: "Appointments", match: pathStartsWith("/appointments") },
      { group: "Timed Releases", match: pathStartsWith("/timed-releases") },
      { group: "Waitlists", match: pathStartsWith("/waitlists") },
      { group: "Organizations", match: pathStartsWith("/organizations") },
      { group: "Loyalty", match: pathStartsWith("/loyalty") },
    ],
  },
  checkout: {
    title: "Checkout API",
    output: "checkout-api.json",
    productionBaseUrl: "https://checkout.fanfare.io/api",
    localBaseUrl: "http://localhost:4805",
    overviewPage: "api/checkout-api/overview",
    navGroup: "Checkout API",
    securitySchemes: {
      CheckoutSecretKeyAuth: {
        type: "http",
        scheme: "bearer",
        description: "Fanfare secret key. Keep secret credentials on your server.",
      },
    },
    security: [{ CheckoutSecretKeyAuth: [] }],
    groups: [
      { group: "Checkout", match: pathStartsWith("/checkout") },
      { group: "Payments", match: pathStartsWith("/payments") },
    ],
  },
  beacon: {
    title: "Beacon API",
    output: "beacon-api.json",
    productionBaseUrl: "https://beacon.fanfare.io/api",
    localBaseUrl: "http://localhost:4803",
    overviewPage: "api/beacon-api/overview",
    navGroup: "Beacon API",
    securitySchemes: {
      BeaconPublishableKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "X-Publishable-Key",
        description: "Browser-safe publishable key for client-side event collection.",
      },
    },
    security: [{ BeaconPublishableKeyAuth: [] }],
    groups: [{ group: "Events", match: pathStartsWith("/events") }],
  },
};

const { values } = parseArgs({
  options: {
    env: { type: "string", short: "e", default: "local" },
    service: { type: "string", short: "s", default: "all" },
    "admin-url": { type: "string" },
    "consumer-url": { type: "string" },
    "checkout-url": { type: "string" },
    "beacon-url": { type: "string" },
    "skip-nav": { type: "boolean", default: false },
    help: { type: "boolean", short: "h" },
  },
});

if (values.help) {
  printHelp();
  process.exit(0);
}

const selectedEnvironment = environments[values.env];
if (!selectedEnvironment) {
  fail(`Unknown environment "${values.env}". Expected one of: ${Object.keys(environments).join(", ")}`);
}

const selectedServices = resolveSelectedServices(values.service);

await mkdir(OUTPUT_DIR, { recursive: true });

const generated = [];
for (const serviceName of selectedServices) {
  const service = services[serviceName];
  const url = values[`${serviceName}-url`] ?? selectedEnvironment[serviceName];
  const spec = await fetchSpec(serviceName, url);
  const normalized = normalizeSpec(serviceName, service, spec, values.env);
  const outputPath = `${OUTPUT_DIR}/${service.output}`;

  await writeFile(outputPath, `${JSON.stringify(normalized, null, 2)}\n`, "utf8");
  generated.push({ serviceName, service, spec: normalized, outputPath });
  process.stdout.write(`Wrote ${outputPath}\n`);
}

if (!values["skip-nav"]) {
  await updateDocsConfig(generated);
  process.stdout.write(`Updated ${DOCS_CONFIG_PATH}\n`);
}

function pathStartsWith(prefix) {
  return (path) => path === prefix || path.startsWith(`${prefix}/`);
}

function anyPathStartsWith(...prefixes) {
  return (path) => prefixes.some((prefix) => pathStartsWith(prefix)(path));
}

function resolveSelectedServices(value) {
  if (value === "all") {
    return Object.keys(services);
  }

  const names = value
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);

  for (const name of names) {
    if (!services[name]) {
      fail(`Unknown service "${name}". Expected one of: all, ${Object.keys(services).join(", ")}`);
    }
  }

  if (names.length === 0) {
    fail("No services selected");
  }

  return names;
}

async function fetchSpec(serviceName, source) {
  if (!source.startsWith("http://") && !source.startsWith("https://")) {
    process.stdout.write(`Reading ${serviceName} from ${source}\n`);
    return JSON.parse(await readFile(source, "utf8"));
  }

  process.stdout.write(`Fetching ${serviceName} from ${source}\n`);
  const response = await fetch(source, { headers: { Accept: "application/json" } });

  if (!response.ok) {
    fail(`Failed to fetch ${serviceName} OpenAPI spec from ${source}: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

function normalizeSpec(serviceName, service, spec, env) {
  const filteredPaths = filterPaths(serviceName, service, spec.paths ?? {});
  const pathCount = Object.keys(filteredPaths).length;

  if (pathCount === 0) {
    fail(`${serviceName} OpenAPI spec has no publishable paths after filtering`);
  }

  const normalized = stripInternalFields(sanitizeLocalDefs(spec));
  normalized.info = {
    ...normalized.info,
    title: `Fanfare ${service.title}`,
  };
  normalized.servers = buildServers(service, env);
  normalized.components = {
    ...(normalized.components ?? {}),
    ...(service.securitySchemes ? { securitySchemes: service.securitySchemes } : {}),
  };
  if (service.security) {
    normalized.security = service.security;
  }
  normalized.paths = stripInternalFields(sanitizeLocalDefs(filteredPaths));

  return sortObject(normalized);
}

function filterPaths(serviceName, service, paths) {
  const filtered = {};

  for (const [path, pathItem] of Object.entries(paths)) {
    const matchingGroup = service.groups.find((group) => group.match(path));
    if (!matchingGroup || !pathItem || typeof pathItem !== "object") {
      continue;
    }

    const operations = {};
    for (const method of METHODS) {
      const operation = pathItem[method];
      if (
        !operation ||
        operation.hide === true ||
        operation["x-internal"] === true ||
        isHiddenPublicOperation(service, method, path)
      ) {
        continue;
      }

      operations[method] = withMintEndpointMetadata(serviceName, method, path, {
        ...operation,
        tags: [matchingGroup.group],
      });
    }

    if (Object.keys(operations).length > 0) {
      filtered[path] = operations;
    }
  }

  if (Object.keys(filtered).length === 0) {
    process.stderr.write(`No paths matched the public allowlist for ${serviceName}\n`);
  }

  return filtered;
}

function isHiddenPublicOperation(service, method, path) {
  return service.hiddenOperations?.has(`${method} ${path}`) ?? false;
}

function withMintEndpointMetadata(serviceName, method, path, operation) {
  const title = humanizeEndpoint(method, path);
  return {
    ...operation,
    "x-mint": {
      ...(operation["x-mint"] ?? {}),
      href: endpointHref(serviceName, method, path),
      metadata: {
        ...(operation["x-mint"]?.metadata ?? {}),
        title,
        sidebarTitle: title,
      },
    },
  };
}

function humanizeEndpoint(method, path) {
  return method.toUpperCase() + " " + path;
}

function endpointHref(serviceName, method, path) {
  const slug = path
    .replace(/^\//, "")
    .replace(/\{([^}]+)\}/g, "by-$1")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();

  return "/api-reference/" + serviceName + "-" + slug + "/" + method.toLowerCase();
}

function buildServers(service, env) {
  if (env === "local") {
    return [
      { url: service.localBaseUrl, description: "Local development" },
      { url: service.productionBaseUrl, description: "Production" },
    ];
  }

  return [
    { url: service.productionBaseUrl, description: "Production" },
    { url: service.localBaseUrl, description: "Local development" },
  ];
}

function sanitizeLocalDefs(value) {
  if (Array.isArray(value)) {
    return value.map((entry) => sanitizeLocalDefs(entry));
  }

  if (value && typeof value === "object") {
    if (
      "$ref" in value &&
      typeof value.$ref === "string" &&
      value.$ref.startsWith("#/$defs/")
    ) {
      return genericJsonValueSchema;
    }

    const next = {};
    for (const [key, entry] of Object.entries(value)) {
      next[key] = sanitizeLocalDefs(entry);
    }
    return next;
  }

  return value;
}

function stripInternalFields(value) {
  if (Array.isArray(value)) {
    return value.map((entry) => stripInternalFields(entry));
  }

  if (value && typeof value === "object") {
    const next = {};
    for (const [key, entry] of Object.entries(value)) {
      if (key === "hide" || key === "x-internal" || PUBLIC_OMITTED_SCHEMA_FIELDS.has(key)) {
        continue;
      }
      if (key === "required" && Array.isArray(entry)) {
        next[key] = entry.filter((field) => !PUBLIC_OMITTED_SCHEMA_FIELDS.has(field));
        continue;
      }
      next[key] = stripInternalFields(entry);
    }
    return next;
  }

  return value;
}

function sortObject(value) {
  if (Array.isArray(value)) {
    return value.map((entry) => sortObject(entry));
  }

  if (value && typeof value === "object") {
    return Object.keys(value)
      .sort(compareObjectKeys)
      .reduce((acc, key) => {
        acc[key] = sortObject(value[key]);
        return acc;
      }, {});
  }

  return value;
}

function compareObjectKeys(left, right) {
  const leftMethod = METHOD_ORDER.get(left);
  const rightMethod = METHOD_ORDER.get(right);

  if (leftMethod !== undefined && rightMethod !== undefined) {
    return leftMethod - rightMethod;
  }

  if (leftMethod !== undefined) {
    return -1;
  }

  if (rightMethod !== undefined) {
    return 1;
  }

  return left.localeCompare(right);
}

async function updateDocsConfig(generated) {
  const config = JSON.parse(await readFile(DOCS_CONFIG_PATH, "utf8"));
  delete config.openapi;
  config.api = {
    openapi: generated.map(({ outputPath }) => outputPath),
    playground: {
      display: "simple",
    },
    examples: {
      languages: ["bash", "javascript", "python", "go"],
      defaults: "required",
    },
    params: {
      expanded: "closed",
    },
  };

  const apiReferenceTab = config.navigation.tabs.find((tab) => tab.tab === "API Reference");
  if (!apiReferenceTab) {
    fail("Could not find API Reference tab in docs.json");
  }

  const existingGroups = new Map(apiReferenceTab.groups.map((group) => [group.group, group]));
  const overviewGroup = existingGroups.get("Overview") ?? {
    group: "Overview",
    pages: ["api/overview", "api/authentication", "api/errors", "api/rate-limiting", "api/pagination"],
  };
  const webhooksGroup = existingGroups.get("Webhooks");

  const generatedGroups = generated.map(({ service, spec, outputPath }) => ({
    group: service.navGroup,
    pages: [service.overviewPage, ...(service.extraPages ?? []), ...buildNavigationGroups(service, spec, outputPath)],
  }));

  apiReferenceTab.groups = [overviewGroup, ...generatedGroups];
  if (webhooksGroup) {
    apiReferenceTab.groups.push(webhooksGroup);
  }

  await writeFile(DOCS_CONFIG_PATH, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}

function buildNavigationGroups(service, spec, outputPath) {
  const byTag = new Map();

  for (const [path, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const method of METHODS) {
      const operation = pathItem[method];
      if (!operation) {
        continue;
      }

      const tag = operation.tags?.[0] ?? "Endpoints";
      const pages = byTag.get(tag) ?? [];
      pages.push(`${outputPath} ${method.toUpperCase()} ${path}`);
      byTag.set(tag, pages);
    }
  }

  return Array.from(byTag.entries())
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([group, pages]) => {
      const staticPages = service.groups.find((entry) => entry.group === group)?.pages ?? [];
      return { group, pages: [...staticPages, ...pages.sort(compareEndpointPages)] };
    });
}

function compareEndpointPages(left, right) {
  const [, leftMethod, leftPath] = left.match(/ (GET|POST|PUT|PATCH|DELETE|OPTIONS|HEAD) (.+)$/) ?? [];
  const [, rightMethod, rightPath] = right.match(/ (GET|POST|PUT|PATCH|DELETE|OPTIONS|HEAD) (.+)$/) ?? [];

  if (leftPath !== rightPath) {
    return leftPath.localeCompare(rightPath);
  }

  return (METHOD_ORDER.get(leftMethod?.toLowerCase()) ?? 99) - (METHOD_ORDER.get(rightMethod?.toLowerCase()) ?? 99);
}

function printHelp() {
  process.stdout.write(`Generate public OpenAPI specs for the Fanfare docs site.

Usage:
  node scripts/generate-openapi.mjs [options]

Options:
  -e, --env <env>             local, staging, or production. Default: local
  -s, --service <services>    all or comma-separated services: admin,consumer,checkout,beacon
  --admin-url <source>        Override the admin OpenAPI URL or JSON file path
  --consumer-url <source>     Override the consumer OpenAPI URL or JSON file path
  --checkout-url <source>     Override the checkout OpenAPI URL or JSON file path
  --beacon-url <source>       Override the beacon OpenAPI URL or JSON file path
  --skip-nav                  Do not update docs.json navigation
  -h, --help                  Show this help

Local generation expects the services to run with OPENAPI_ENABLED=1.
`);
}

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(1);
}
