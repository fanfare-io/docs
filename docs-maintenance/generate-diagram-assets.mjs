import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import process from "node:process";
import sharp from "sharp";

const root = process.cwd();
const width = 1774;
const height = 887;

const colors = {
  bg: "#07070B",
  panel: "#11111A",
  panel2: "#151522",
  border: "#2A2A3A",
  borderStrong: "#45445A",
  text: "#F4F1FF",
  muted: "#A6A1B5",
  dim: "#7E788F",
  accent: "#A855F7",
  accentSoft: "#B46CFF",
};

const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

function wrapWords(value, maxChars = 14) {
  const words = String(value).split(/\s+/);
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function textBlock(x, y, value, opts = {}) {
  const {
    size = 34,
    weight = 600,
    color = colors.text,
    anchor = "middle",
    maxChars = 16,
    lineHeight = Math.round(size * 1.22),
    uppercase = false,
    letterSpacing = 0,
  } = opts;
  const raw = uppercase ? String(value).toUpperCase() : String(value);
  const lines = raw.includes("\n") ? raw.split("\n") : wrapWords(raw, maxChars);
  const firstY = y - ((lines.length - 1) * lineHeight) / 2;
  return `<text x="${x}" y="${firstY}" text-anchor="${anchor}" dominant-baseline="middle" font-family="Inter, Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="${size}" font-weight="${weight}" letter-spacing="${letterSpacing}" fill="${color}">${lines
    .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${esc(line)}</tspan>`)
    .join("")}</text>`;
}

function titleBlock(title, subtitle) {
  return `
    ${textBlock(88, 86, title, {
      size: 26,
      weight: 700,
      color: colors.accentSoft,
      anchor: "start",
      uppercase: true,
      maxChars: 80,
      letterSpacing: 2,
    })}
    ${
      subtitle
        ? textBlock(88, 132, subtitle, {
            size: 30,
            weight: 500,
            color: colors.muted,
            anchor: "start",
            maxChars: 72,
          })
        : ""
    }`;
}

function card(x, y, w, h, label, opts = {}) {
  const { sublabel, accent = false, decision = false, small = false } = opts;
  const radius = decision ? 36 : 26;
  const fill = accent ? colors.panel2 : colors.panel;
  const border = accent ? colors.accentSoft : colors.borderStrong;
  const labelSize = small ? 28 : 34;
  const subSize = small ? 21 : 24;
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="${fill}" stroke="${border}" stroke-width="${accent ? 2 : 1.4}" />
    ${textBlock(x + w / 2, y + h / 2 - (sublabel ? 18 : 0), label, {
      size: labelSize,
      weight: 700,
      color: accent ? colors.text : colors.text,
      maxChars: Math.max(9, Math.floor(w / 18)),
    })}
    ${
      sublabel
        ? textBlock(x + w / 2, y + h / 2 + 42, sublabel, {
            size: subSize,
            weight: 500,
            color: colors.muted,
            maxChars: Math.max(12, Math.floor(w / 15)),
          })
        : ""
    }`;
}

function chip(x, y, label, opts = {}) {
  const { accent = false, w = 150 } = opts;
  return `
    <rect x="${x}" y="${y}" width="${w}" height="48" rx="24" fill="${accent ? "#1D132A" : "#101018"}" stroke="${accent ? colors.accent : colors.border}" stroke-width="1.2" />
    ${textBlock(x + w / 2, y + 25, label, {
      size: 19,
      weight: 700,
      color: accent ? colors.accentSoft : colors.muted,
      maxChars: 20,
      uppercase: true,
      letterSpacing: 1,
    })}`;
}

function arrow(x1, y1, x2, y2, opts = {}) {
  const { label, dashed = false, color = colors.accent, width: strokeWidth = 3 } = opts;
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  return `
    <path d="M ${x1} ${y1} L ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" ${dashed ? 'stroke-dasharray="8 10"' : ""} marker-end="url(#arrow)" />
    ${
      label
        ? `<rect x="${midX - 78}" y="${midY - 34}" width="156" height="38" rx="19" fill="${colors.bg}" stroke="${colors.border}" stroke-width="1" />${textBlock(
            midX,
            midY - 14,
            label,
            { size: 17, weight: 700, color: colors.muted, maxChars: 18, uppercase: true, letterSpacing: 1 }
          )}`
        : ""
    }`;
}

function pathArrow(d, opts = {}) {
  const { dashed = false, color = colors.accent, width: strokeWidth = 3 } = opts;
  return `<path d="${d}" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" ${
    dashed ? 'stroke-dasharray="8 10"' : ""
  } marker-end="url(#arrow)" />`;
}

function shell(title, subtitle, content) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="${colors.accent}" />
    </marker>
    <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
      <path d="M 42 0 L 0 0 0 42" fill="none" stroke="#171722" stroke-width="1" opacity="0.38" />
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="${colors.bg}" />
  <rect width="${width}" height="${height}" fill="url(#grid)" opacity="0.2" />
  <rect x="40" y="40" width="${width - 80}" height="${height - 80}" rx="34" fill="none" stroke="${colors.border}" stroke-width="1.2" />
  ${titleBlock(title, subtitle)}
  ${content}
</svg>`;
}

function renderFlow({ title, subtitle, steps, accentIndex = 1, sideOutcome }) {
  const gap = steps.length > 4 ? 28 : 42;
  const x0 = 100;
  const total = width - x0 * 2;
  const cardW = (total - gap * (steps.length - 1)) / steps.length;
  const cardH = 168;
  const y = 365;
  const cards = steps
    .map((step, index) =>
      card(x0 + index * (cardW + gap), y, cardW, cardH, step.label, {
        sublabel: step.sub,
        accent: index === accentIndex,
        small: steps.length > 5,
      })
    )
    .join("");
  const arrows = steps
    .slice(0, -1)
    .map((_, index) => {
      const x = x0 + index * (cardW + gap);
      return arrow(x + cardW + 10, y + cardH / 2, x + cardW + gap - 10, y + cardH / 2);
    })
    .join("");
  const side = sideOutcome
    ? `
      ${card(width - 388, 622, 240, 114, sideOutcome.label, { small: true })}
      ${pathArrow(`M ${width - 470} 456 C ${width - 410} 532 ${width - 395} 586 ${width - 280} 622`, { dashed: true, color: colors.muted, width: 2.2 })}
    `
    : "";
  return shell(title, subtitle, cards + arrows + side);
}

function renderBranch({ title, subtitle, start, middle, outcomes, final }) {
  const content = `
    ${card(98, 355, 260, 158, start, { accent: true })}
    ${arrow(368, 434, 505, 434)}
    ${card(520, 355, 300, 158, middle, { decision: true })}
    ${outcomes
      .map((outcome, index) => {
        const y = 235 + index * 165;
        return `
          ${pathArrow(`M 820 434 C 920 434 930 ${y + 76} 1030 ${y + 76}`)}
          ${card(1045, y, 250, 132, outcome, { small: true, accent: index === 0 })}
          ${final ? pathArrow(`M 1295 ${y + 76} C 1395 ${y + 76} 1390 434 1490 434`, { color: index === 0 ? colors.accent : colors.muted }) : ""}
        `;
      })
      .join("")}
    ${final ? card(1505, 355, 180, 158, final, { small: true }) : ""}
  `;
  return shell(title, subtitle, content);
}

function renderPlatformOverview() {
  return shell(
    "Platform overview",
    "Consumers enter public access paths before checkout.",
    `
      ${card(650, 166, 475, 112, "Consumers", { accent: true })}
      ${arrow(887, 282, 887, 340)}
      <rect x="160" y="340" width="1454" height="296" rx="30" fill="${colors.panel}" stroke="${colors.accentSoft}" stroke-width="2" />
      ${textBlock(887, 400, "Experience", { size: 44, weight: 800, uppercase: true, letterSpacing: 1, maxChars: 24 })}
      ${card(240, 455, 360, 120, "VIP", { sublabel: "Draw", small: true })}
      ${card(708, 455, 360, 120, "General", { sublabel: "Queue", small: true })}
      ${card(1176, 455, 360, 120, "Waitlist", { sublabel: "Notify when available", small: true })}
      ${arrow(887, 638, 887, 696)}
      ${card(612, 700, 550, 112, "Checkout", { sublabel: "Purchase", accent: false })}
    `
  );
}

function renderExperienceSchedule() {
  return shell(
    "Experience schedule",
    "Experience timing is derived from distribution timing.",
    `
      <rect x="122" y="225" width="1530" height="515" rx="32" fill="${colors.panel}" stroke="${colors.borderStrong}" stroke-width="1.5" />
      ${chip(170, 260, "Experience", { accent: true, w: 190 })}
      <rect x="214" y="335" width="610" height="315" rx="28" fill="${colors.panel2}" stroke="${colors.border}" stroke-width="1.4" />
      ${chip(250, 370, "Sequence", { w: 160 })}
      ${card(292, 455, 410, 112, "Distribution", { small: true, accent: true })}
      <rect x="950" y="335" width="520" height="315" rx="28" fill="${colors.panel2}" stroke="${colors.border}" stroke-width="1.4" />
      ${chip(990, 370, "States", { w: 140 })}
      ${chip(1010, 468, "Upcoming", { w: 154 })}
      ${chip(1178, 468, "Active", { accent: true, w: 130 })}
      ${chip(1322, 468, "Ended", { w: 122 })}
      ${arrow(724, 511, 950, 511)}
    `
  );
}

function renderPriority() {
  const rows = [
    ["VIP", "Access path"],
    ["Early access", "Access path"],
    ["General", "Access path"],
  ];
  return shell(
    "Access path priority",
    "Higher-priority public paths are considered before fallback paths.",
    `
      <path d="M 310 240 L 310 675" stroke="${colors.accent}" stroke-width="5" stroke-linecap="round" />
      ${textBlock(310, 202, "Priority", { size: 24, color: colors.accentSoft, weight: 800, uppercase: true, letterSpacing: 1 })}
      ${rows
        .map(([left, right], index) => {
          const y = 275 + index * 155;
          return `
            ${card(425, y, 335, 112, left, { accent: index === 0, small: true })}
            ${arrow(772, y + 56, 950, y + 56)}
            ${card(970, y, 335, 112, right, { small: true })}
          `;
        })
        .join("")}
      ${chip(245, 292, "1", { accent: true, w: 130 })}
      ${chip(245, 447, "2", { w: 130 })}
      ${chip(245, 602, "3", { w: 130 })}
    `
  );
}

function renderRuleLogic() {
  return shell(
    "Audience rule logic",
    "AND narrows membership; OR allows either group to qualify.",
    `
      <rect x="116" y="250" width="715" height="445" rx="28" fill="${colors.panel}" stroke="${colors.borderStrong}" />
      ${chip(160, 286, "AND", { accent: true, w: 120 })}
      ${card(190, 390, 205, 92, "Condition", { small: true })}
      ${card(190, 515, 205, 92, "Condition", { small: true })}
      ${arrow(410, 436, 548, 500)}
      ${arrow(410, 561, 548, 500)}
      ${card(570, 446, 205, 112, "Audience", { accent: true, small: true })}
      ${textBlock(468, 650, "All conditions", { size: 24, color: colors.muted, maxChars: 22 })}

      <rect x="943" y="250" width="715" height="445" rx="28" fill="${colors.panel}" stroke="${colors.borderStrong}" />
      ${chip(987, 286, "OR", { accent: true, w: 110 })}
      ${card(1018, 390, 205, 92, "Group A", { small: true })}
      ${card(1018, 515, 205, 92, "Group B", { small: true })}
      ${arrow(1238, 436, 1376, 500)}
      ${arrow(1238, 561, 1376, 500)}
      ${card(1398, 446, 205, 112, "Audience", { accent: true, small: true })}
      ${textBlock(1295, 650, "Either group", { size: 24, color: colors.muted, maxChars: 22 })}
    `
  );
}

function renderAudienceRouting() {
  return shell(
    "Audience routing",
    "Audience membership can select a public path; general access is the fallback.",
    `
      ${card(120, 235, 300, 120, "VIP audience", { small: true, accent: true })}
      ${card(120, 400, 300, 120, "Loyalty audience", { small: true })}
      ${card(120, 565, 300, 120, "General access", { small: true })}
      ${arrow(432, 295, 685, 295)}
      ${arrow(432, 460, 685, 460)}
      ${arrow(432, 625, 685, 625, { color: colors.muted })}
      ${card(705, 235, 355, 120, "Access path", { sublabel: "VIP", small: true })}
      ${card(705, 400, 355, 120, "Access path", { sublabel: "Loyalty", small: true })}
      ${card(705, 565, 355, 120, "Fallback", { sublabel: "General", small: true })}
      ${pathArrow("M 1080 295 C 1250 295 1250 460 1400 460")}
      ${pathArrow("M 1080 460 L 1400 460")}
      ${pathArrow("M 1080 625 C 1250 625 1250 460 1400 460", { color: colors.muted })}
      ${card(1420, 380, 235, 160, "Journey view", { small: true, accent: true })}
    `
  );
}

function renderChoiceTree() {
  return shell(
    "Choose distribution",
    "Match the public participation model to the customer experience.",
    `
      ${card(708, 190, 360, 112, "Choose distribution", { accent: true })}
      ${pathArrow("M 888 304 C 888 365 398 350 398 440")}
      ${pathArrow("M 888 304 C 888 365 725 350 725 440")}
      ${pathArrow("M 888 304 C 888 365 1052 350 1052 440")}
      ${pathArrow("M 888 304 C 888 365 1379 350 1379 440")}
      ${card(260, 445, 275, 132, "Queue", { sublabel: "Order matters", small: true })}
      ${card(587, 445, 275, 132, "Draw", { sublabel: "Equal chance", small: true })}
      ${card(914, 445, 275, 132, "Appointment", { sublabel: "Specific time", small: true })}
      ${card(1241, 445, 275, 132, "Timed release", { sublabel: "Instant access", small: true })}
    `
  );
}

function renderCartReservation() {
  return shell(
    "Cart reservation",
    "A reservation hold protects admitted checkout from sell-through.",
    `
      <rect x="120" y="240" width="1534" height="188" rx="28" fill="${colors.panel}" stroke="${colors.borderStrong}" />
      ${chip(164, 278, "No reservation", { w: 210 })}
      ${card(438, 278, 250, 104, "Admitted", { small: true })}
      ${arrow(700, 330, 940, 330, { color: colors.muted })}
      ${card(960, 278, 250, 104, "Checkout", { small: true })}
      ${arrow(1222, 330, 1385, 330, { color: colors.muted })}
      ${card(1405, 278, 170, 104, "Out of stock", { small: true })}

      <rect x="120" y="500" width="1534" height="188" rx="28" fill="${colors.panel}" stroke="${colors.accentSoft}" stroke-width="1.5" />
      ${chip(164, 538, "Reservation hold", { accent: true, w: 250 })}
      ${card(438, 538, 250, 104, "Admitted", { small: true })}
      ${arrow(700, 590, 940, 590)}
      ${card(960, 538, 250, 104, "Reserved", { small: true, accent: true })}
      ${arrow(1222, 590, 1385, 590)}
      ${card(1405, 538, 190, 104, "Checkout protected", { small: true })}
    `
  );
}

function renderWebhook() {
  return shell(
    "Webhook delivery",
    "Events are delivered to your endpoint; failures retry.",
    `
      ${card(145, 360, 280, 135, "Fanfare event", { accent: true, small: true })}
      ${arrow(438, 428, 635, 428, { label: "POST" })}
      ${card(655, 360, 305, 135, "Webhook endpoint", { small: true })}
      ${arrow(973, 428, 1175, 428)}
      ${card(1195, 360, 280, 135, "Process event", { small: true })}
      ${pathArrow("M 1335 498 C 1335 590 1195 604 1110 604")}
      ${card(920, 548, 180, 112, "Success", { small: true, accent: true })}
      ${pathArrow("M 1478 428 C 1590 428 1592 610 1460 610", { color: colors.muted, dashed: true })}
      ${card(1285, 548, 180, 112, "Retry", { small: true })}
    `
  );
}

function renderNestedPlatform() {
  return shell(
    "Custom platform architecture",
    "Keep browser SDK, server validation, and order data in clear layers.",
    `
      <rect x="110" y="215" width="740" height="460" rx="30" fill="${colors.panel}" stroke="${colors.borderStrong}" />
      ${chip(150, 250, "Your platform", { accent: true, w: 210 })}
      ${card(170, 370, 180, 112, "Frontend", { sublabel: "SDK", small: true })}
      ${card(410, 370, 180, 112, "Backend", { sublabel: "API", small: true })}
      ${card(650, 370, 150, 112, "Database", { small: true })}
      ${arrow(358, 426, 402, 426)}
      ${arrow(598, 426, 642, 426)}
      <rect x="925" y="215" width="740" height="460" rx="30" fill="${colors.panel}" stroke="${colors.borderStrong}" />
      ${chip(965, 250, "Fanfare", { accent: true, w: 150 })}
      ${card(985, 370, 180, 112, "Consumer API", { small: true })}
      ${card(1225, 370, 180, 112, "Admin API", { small: true })}
      ${card(1465, 370, 150, 112, "Webhooks", { small: true })}
      ${pathArrow("M 350 520 C 530 720 1040 720 1075 492")}
      ${pathArrow("M 500 492 C 570 640 1420 650 1538 492", { color: colors.muted })}
    `
  );
}

function renderSSR() {
  return shell(
    "SSR integration shape",
    "Server-render the page; mount Fanfare in a browser-only boundary.",
    `
      ${card(110, 355, 260, 140, "Server route", { small: true })}
      ${arrow(384, 425, 565, 425)}
      ${card(585, 355, 260, 140, "SSR page", { small: true })}
      ${arrow(859, 425, 1040, 425)}
      ${card(1060, 355, 300, 140, "Fanfare boundary", { accent: true, small: true })}
      ${pathArrow("M 1210 498 C 1210 610 980 635 875 635")}
      ${card(635, 575, 240, 120, "Handoff API", { small: true })}
      ${arrow(888, 635, 1085, 635)}
      ${card(1105, 575, 230, 120, "Checkout", { small: true })}
    `
  );
}

function renderMobile() {
  return shell(
    "Mobile WebView flow",
    "Reuse the web SDK while native code owns navigation and checkout.",
    `
      <rect x="130" y="230" width="640" height="430" rx="30" fill="${colors.panel}" stroke="${colors.borderStrong}" />
      ${chip(174, 270, "Native app", { accent: true, w: 170 })}
      <rect x="215" y="350" width="470" height="210" rx="26" fill="${colors.panel2}" stroke="${colors.border}" />
      ${textBlock(450, 400, "WebView page", { size: 34, weight: 700, maxChars: 18 })}
      ${card(315, 455, 270, 82, "SDK view", { small: true, accent: true })}
      ${arrow(770, 445, 980, 445, { label: "Bridge" })}
      ${card(1000, 370, 240, 120, "JS bridge", { small: true })}
      ${pathArrow("M 1244 430 C 1340 370 1390 350 1500 350")}
      ${pathArrow("M 1244 470 C 1340 535 1390 560 1500 560")}
      ${card(1515, 292, 190, 116, "Checkout", { small: true })}
      ${card(1515, 502, 190, 116, "Backend", { small: true })}
    `
  );
}

function renderScalability() {
  return shell(
    "Scalability architecture",
    "Keep heavy product traffic cached and route admitted customers onward.",
    `
      ${card(120, 350, 300, 150, "Customer CDN", { sublabel: "Product page", accent: true, small: true })}
      ${arrow(435, 425, 665, 425)}
      ${card(685, 350, 300, 150, "Fanfare widget", { sublabel: "Access flow", small: true })}
      ${arrow(1000, 425, 1230, 425)}
      ${card(1250, 350, 300, 150, "Checkout page", { sublabel: "Customer backend", small: true })}
      ${textBlock(887, 630, "Static product pages stay cacheable; checkout sees qualified traffic.", {
        size: 28,
        weight: 500,
        color: colors.muted,
        maxChars: 70,
      })}
    `
  );
}

function renderTrafficPattern() {
  return shell(
    "Traffic pattern",
    "Launch traffic rises before opening, peaks, then settles during the sale.",
    `
      <path d="M 210 650 L 1510 650" stroke="${colors.borderStrong}" stroke-width="2" marker-end="url(#arrow)" />
      <path d="M 250 680 L 250 250" stroke="${colors.borderStrong}" stroke-width="2" marker-end="url(#arrow)" />
      ${textBlock(250, 210, "Traffic", { size: 24, color: colors.muted, weight: 700, maxChars: 20 })}
      ${textBlock(1530, 690, "Time", { size: 24, color: colors.muted, weight: 700, maxChars: 20 })}
      <path d="M 275 635 C 430 565 500 455 640 340 C 760 240 875 255 990 350 C 1110 450 1190 470 1450 472" fill="none" stroke="${colors.accent}" stroke-width="6" stroke-linecap="round" />
      <path d="M 640 650 L 640 305" stroke="${colors.border}" stroke-width="1.5" stroke-dasharray="8 10" />
      <path d="M 1030 650 L 1030 380" stroke="${colors.border}" stroke-width="1.5" stroke-dasharray="8 10" />
      ${card(530, 675, 220, 90, "Launch", { accent: true, small: true })}
      ${card(930, 675, 220, 90, "Sale", { small: true })}
      ${chip(845, 250, "Peak", { accent: true, w: 120 })}
    `
  );
}

function renderDashboardLifecycle() {
  return shell(
    "Experience lifecycle",
    "Configured distributions drive the visible experience states.",
    `
      ${card(135, 350, 230, 130, "Configure", { small: true })}
      ${arrow(378, 415, 565, 415)}
      ${card(585, 350, 230, 130, "Scheduled", { small: true, accent: true })}
      ${pathArrow("M 815 415 C 915 415 910 275 1010 275")}
      ${pathArrow("M 815 415 L 1010 415")}
      ${pathArrow("M 815 415 C 915 415 910 555 1010 555")}
      ${card(1030, 215, 230, 120, "Upcoming", { small: true })}
      ${card(1030, 355, 230, 120, "Active", { small: true, accent: true })}
      ${card(1030, 495, 230, 120, "Ended", { small: true })}
      ${pathArrow("M 1265 415 C 1395 415 1395 645 1510 645", { color: colors.muted, dashed: true })}
      ${card(1405, 605, 210, 104, "Killed", { small: true })}
    `
  );
}

function renderAdmissionGrant() {
  return shell(
    "Admission lifecycle",
    "The public integration treats admission as a short-lived checkout state.",
    `
      ${card(160, 355, 220, 132, "Created", { small: true })}
      ${arrow(392, 421, 600, 421)}
      ${card(620, 355, 300, 132, "Checkout window", { accent: true, small: true })}
      ${pathArrow("M 924 421 C 1035 421 1040 305 1160 305")}
      ${pathArrow("M 924 421 C 1035 421 1040 535 1160 535", { color: colors.muted })}
      ${card(1180, 245, 220, 120, "Used", { small: true })}
      ${card(1180, 475, 220, 120, "Expired", { small: true })}
      ${pathArrow("M 1405 305 C 1510 305 1510 420 1600 420")}
      ${pathArrow("M 1405 535 C 1510 535 1510 420 1600 420", { color: colors.muted })}
      ${card(1498, 365, 190, 112, "Invalid", { small: true })}
    `
  );
}

function renderAuctionJourney() {
  return shell(
    "Auction journey",
    "Bidders move between winning and outbid before final outcome.",
    `
      ${card(130, 360, 235, 120, "Not bidding", { small: true })}
      ${arrow(378, 420, 570, 420)}
      ${card(590, 315, 250, 120, "Winning", { accent: true, small: true })}
      ${card(590, 500, 250, 120, "Outbid", { small: true })}
      ${pathArrow("M 715 438 C 715 470 715 470 715 494", { color: colors.muted })}
      ${pathArrow("M 840 558 C 930 558 930 370 1038 370")}
      ${pathArrow("M 840 374 C 930 374 930 558 1038 558", { color: colors.muted })}
      ${card(1058, 310, 220, 120, "Won", { accent: true, small: true })}
      ${card(1058, 498, 220, 120, "Lost", { small: true })}
      ${arrow(1290, 370, 1468, 370)}
      ${card(1488, 310, 190, 120, "Complete", { small: true })}
    `
  );
}

function renderWaitlistJourney() {
  return shell(
    "Waitlist journey",
    "Notification can lead to conversion or no conversion.",
    `
      ${card(115, 365, 250, 120, "Not signed up", { small: true })}
      ${arrow(378, 425, 585, 425)}
      ${card(605, 365, 250, 120, "Waiting", { small: true })}
      ${arrow(868, 425, 1075, 425)}
      ${card(1095, 365, 250, 120, "Notified", { accent: true, small: true })}
      ${pathArrow("M 1345 425 C 1445 425 1435 330 1530 330")}
      ${pathArrow("M 1345 425 C 1445 425 1435 520 1530 520", { color: colors.muted })}
      ${card(1480, 270, 205, 120, "Convert", { small: true })}
      ${card(1480, 460, 205, 120, "No conversion", { small: true })}
    `
  );
}

function renderPlatformMental() {
  return shell(
    "Browser SDK fit",
    "Your app renders public journey state and hands off admitted customers.",
    `
      ${card(125, 350, 255, 140, "Product page", { sublabel: "Your app", small: true })}
      ${arrow(394, 420, 610, 420)}
      ${card(630, 350, 255, 140, "Fanfare SDK", { accent: true, small: true })}
      ${arrow(899, 420, 1115, 420)}
      ${card(1135, 350, 255, 140, "Fanfare API", { small: true })}
      ${pathArrow("M 758 492 C 758 625 1030 650 1160 650")}
      ${card(1180, 590, 255, 120, "Backend", { sublabel: "Checkout", small: true })}
      ${textBlock(887, 615, "after admitted", { size: 20, color: colors.dim, weight: 700, uppercase: true, letterSpacing: 1 })}
    `
  );
}

function renderIntroJourney() {
  return shell(
    "Journey mental model",
    "The SDK exposes current public state and valid actions.",
    `
      ${card(185, 355, 310, 150, "Your app", { sublabel: "Product UI", small: true })}
      ${arrow(510, 430, 720, 430)}
      ${card(740, 355, 310, 150, "Fanfare SDK", { sublabel: "Valid actions", accent: true, small: true })}
      ${arrow(1065, 430, 1275, 430)}
      ${card(1295, 355, 310, 150, "JourneyView", { sublabel: "Ready / gated / routed", small: true })}
    `
  );
}

function progressBar(x, y, w, fillRatio, label) {
  const fillW = Math.max(0, Math.min(w, w * fillRatio));
  return `
    <rect x="${x}" y="${y}" width="${w}" height="32" rx="16" fill="#0B0B12" stroke="${colors.border}" />
    <rect x="${x}" y="${y}" width="${fillW}" height="32" rx="16" fill="${colors.accent}" opacity="0.82" />
    ${textBlock(x + w + 78, y + 17, label, { size: 20, color: colors.muted, weight: 700, maxChars: 16 })}
  `;
}

function renderConsumerIdentity() {
  return shell(
    "Consumer identity levels",
    "Consumers can start with low friction and add trust as needed.",
    `
      ${card(150, 350, 350, 155, "Guest", { sublabel: "No account needed", small: true })}
      ${arrow(512, 428, 700, 428)}
      ${card(720, 350, 350, 155, "Registered", { sublabel: "Email or phone", accent: true, small: true })}
      ${arrow(1082, 428, 1270, 428)}
      ${card(1290, 350, 350, 155, "Verified", { sublabel: "Confirmed identity", small: true })}
      ${textBlock(325, 575, "Quick entry", { size: 24, color: colors.muted, weight: 600, maxChars: 22 })}
      ${textBlock(895, 575, "Can receive notifications", { size: 24, color: colors.muted, weight: 600, maxChars: 28 })}
      ${textBlock(1465, 575, "Higher trust", { size: 24, color: colors.muted, weight: 600, maxChars: 22 })}
    `
  );
}

function renderProgressiveProfiling() {
  return shell(
    "Progressive collection",
    "Ask for more information only when the consumer has a reason to provide it.",
    `
      ${chip(210, 260, "1 Entry", { accent: true, w: 160 })}
      ${card(410, 232, 270, 105, "Guest access", { small: true })}
      ${arrow(695, 284, 875, 284)}
      ${chip(895, 260, "2 Join", { w: 150 })}
      ${card(1085, 232, 300, 105, "Request email", { small: true })}

      ${chip(210, 510, "3 Access", { w: 170 })}
      ${card(410, 482, 270, 105, "Request phone", { small: true })}
      ${arrow(695, 534, 875, 534)}
      ${chip(895, 510, "4 Checkout", { accent: true, w: 195 })}
      ${card(1125, 482, 300, 105, "Full profile", { small: true })}
      ${pathArrow("M 1235 340 C 1235 410 545 410 545 478", { color: colors.muted, dashed: true })}
    `
  );
}

function renderProductSync() {
  return shell(
    "Product sync",
    "Product and inventory changes stay aligned between your store and Fanfare.",
    `
      ${card(160, 315, 300, 145, "Product updated", { sublabel: "Your store", accent: true, small: true })}
      ${arrow(475, 388, 720, 388, { label: "Sync" })}
      ${card(740, 315, 300, 145, "Product updated", { sublabel: "Fanfare", small: true })}
      ${pathArrow("M 460 468 C 570 625 790 650 900 512", { color: colors.muted })}
      ${card(735, 565, 310, 120, "Inventory webhook", { small: true })}
      ${pathArrow("M 1052 625 C 1225 625 1260 460 1380 460")}
      ${card(1380, 385, 245, 120, "Experience shows updated info", { small: true })}
    `
  );
}

function renderRealtimeQueue() {
  return shell(
    "Queue position updates",
    "Consumers see position and wait estimates move without refreshing.",
    `
      <rect x="155" y="285" width="620" height="300" rx="30" fill="${colors.panel}" stroke="${colors.borderStrong}" />
      ${chip(205, 325, "Queue status", { accent: true, w: 190 })}
      ${textBlock(225, 405, "Position #47", { size: 34, weight: 800, anchor: "start", maxChars: 22 })}
      ${textBlock(225, 455, "Estimated wait: 3 min", { size: 26, color: colors.muted, weight: 500, anchor: "start", maxChars: 30 })}
      ${progressBar(225, 505, 330, 0.36, "47 / 200")}

      ${arrow(795, 435, 990, 435, { label: "Updates" })}

      <rect x="1010" y="285" width="620" height="300" rx="30" fill="${colors.panel}" stroke="${colors.accentSoft}" stroke-width="1.5" />
      ${chip(1060, 325, "Queue status", { accent: true, w: 190 })}
      ${textBlock(1080, 405, "Position #12", { size: 34, weight: 800, anchor: "start", maxChars: 22 })}
      ${textBlock(1080, 455, "Estimated wait: 45 sec", { size: 26, color: colors.muted, weight: 500, anchor: "start", maxChars: 30 })}
      ${progressBar(1080, 505, 330, 0.82, "12 / 200")}
    `
  );
}

function renderRealtimeAuction() {
  return shell(
    "Auction bid updates",
    "Bidders see when the high bid changes and can respond.",
    `
      <rect x="165" y="270" width="600" height="330" rx="30" fill="${colors.panel}" stroke="${colors.accentSoft}" stroke-width="2" />
      ${chip(220, 320, "Auction status", { accent: true, w: 215 })}
      ${textBlock(465, 410, "Winning", { size: 44, weight: 800, maxChars: 18 })}
      ${textBlock(465, 520, "High bid 150.00\nYour bid 150.00\n2:34 left", {
        size: 32,
        weight: 600,
        color: colors.muted,
        maxChars: 28,
        lineHeight: 39,
      })}
      ${arrow(790, 430, 990, 430, { label: "Outbid" })}
      <rect x="1015" y="270" width="600" height="330" rx="30" fill="${colors.panel}" stroke="${colors.borderStrong}" stroke-width="1.4" />
      ${chip(1070, 320, "Auction status", { accent: true, w: 215 })}
      ${textBlock(1315, 410, "Outbid", { size: 44, weight: 800, maxChars: 18 })}
      ${textBlock(1315, 520, "High bid 175.00\nYour bid 150.00\nPlace new bid", {
        size: 32,
        weight: 600,
        color: colors.muted,
        maxChars: 28,
        lineHeight: 39,
      })}
    `
  );
}

function renderRealtimeUpdateFlow() {
  return shell(
    "Update flow",
    "The browser refreshes public state and renders the latest journey view.",
    `
      ${card(160, 315, 325, 145, "Browser", { sublabel: "Shows position", small: true })}
      ${arrow(500, 388, 750, 388, { label: "Check" })}
      ${card(770, 315, 325, 145, "Fanfare", { sublabel: "Public state", accent: true, small: true })}
      ${pathArrow("M 770 480 C 650 620 510 620 415 480", { color: colors.muted, dashed: true })}
      ${card(1205, 315, 325, 145, "Updated view", { sublabel: "Position changed", small: true })}
      ${arrow(1110, 388, 1190, 388)}
      ${textBlock(605, 610, "reconnects and resumes after interruptions", {
        size: 24,
        color: colors.muted,
        weight: 500,
        maxChars: 46,
      })}
    `
  );
}

function renderAnonymousConsumerFlow() {
  return shell(
    "Anonymous consumer flow",
    "Guest sessions let consumers participate with minimal friction.",
    `
      ${card(115, 340, 250, 125, "Consumer visit", { accent: true, small: true })}
      ${arrow(378, 402, 560, 402)}
      ${card(580, 340, 260, 125, "Check session", { decision: true, small: true })}
      ${pathArrow("M 840 402 C 945 402 930 285 1040 285")}
      ${pathArrow("M 840 402 C 945 402 930 520 1040 520", { color: colors.muted })}
      ${card(1060, 225, 260, 120, "Restore session", { small: true })}
      ${card(1060, 460, 260, 120, "Create guest", { small: true })}
      ${pathArrow("M 1320 285 C 1440 285 1430 402 1530 402")}
      ${pathArrow("M 1320 520 C 1440 520 1430 402 1530 402", { color: colors.muted })}
      ${card(1470, 342, 210, 120, "Participate", { small: true })}
    `
  );
}

function renderIdentifiedConsumerFlow() {
  return shell(
    "Identified consumer flow",
    "Email or phone verification creates a recoverable consumer session.",
    `
      ${card(110, 350, 230, 125, "Start auth", { small: true })}
      ${arrow(352, 412, 425, 412)}
      ${card(445, 350, 230, 125, "Enter contact", { small: true })}
      ${arrow(687, 412, 760, 412)}
      ${card(780, 350, 230, 125, "Request code", { accent: true, small: true })}
      ${arrow(1022, 412, 1095, 412)}
      ${card(1115, 350, 230, 125, "Receive code", { small: true })}
      ${arrow(1357, 412, 1430, 412)}
      ${card(1450, 350, 210, 125, "Verify", { small: true })}
      ${arrow(1555, 486, 1555, 565)}
      ${card(1410, 585, 290, 115, "Session created", { small: true })}
    `
  );
}

function renderJwtTokenFlow() {
  return shell(
    "Server-side auth flow",
    "Your backend exchanges identity context without exposing server credentials.",
    `
      ${card(115, 330, 235, 130, "Browser SDK", { small: true })}
      ${arrow(365, 395, 545, 395, { label: "Login" })}
      ${card(565, 330, 255, 130, "Your API", { accent: true, small: true })}
      ${arrow(835, 395, 1015, 395, { label: "Exchange" })}
      ${card(1035, 330, 255, 130, "Fanfare API", { small: true })}
      ${pathArrow("M 1035 470 C 900 610 475 610 350 470", { color: colors.muted })}
      ${card(495, 565, 270, 115, "Fanfare session", { small: true })}
      ${arrow(780, 622, 980, 622)}
      ${card(1000, 565, 270, 115, "Admission grant", { small: true })}
      ${arrow(1285, 622, 1470, 622, { label: "Checkout" })}
      ${card(1490, 565, 205, 115, "Validate", { small: true })}
    `
  );
}

function renderOrderCompletion() {
  return renderFlow({
    title: "Order completion",
    subtitle: "Complete Fanfare admission after your order succeeds.",
    steps: [
      { label: "Payment successful" },
      { label: "Create order" },
      { label: "Complete admission" },
      { label: "Webhooks" },
      { label: "Confirmation" },
    ],
    accentIndex: 2,
  });
}

function renderPaymentProcessing() {
  return shell(
    "Payment processing",
    "Validate admission before charging, then complete or let the customer retry.",
    `
      ${card(115, 340, 235, 125, "Admitted", { accent: true, small: true })}
      ${arrow(365, 402, 545, 402)}
      ${card(565, 340, 235, 125, "Checkout page", { small: true })}
      ${arrow(815, 402, 995, 402)}
      ${card(1015, 340, 245, 125, "Create payment", { small: true })}
      ${arrow(1275, 402, 1430, 402)}
      ${card(1300, 340, 250, 125, "Validate admission", { small: true })}
      ${pathArrow("M 1485 468 C 1485 520 1485 535 1485 575")}
      ${card(1355, 595, 260, 110, "Complete order", { small: true, accent: true })}
      ${pathArrow("M 1405 468 C 1360 555 1230 595 1160 620", { color: colors.muted, dashed: true })}
      ${card(900, 595, 260, 110, "Retry on failure", { small: true })}
      ${pathArrow("M 900 650 C 735 650 710 540 690 480", { color: colors.muted, dashed: true })}
    `
  );
}

function renderSecurityDataFlow() {
  return shell(
    "Data flow security",
    "Traffic uses encrypted transport between consumer, Fanfare, and your systems.",
    `
      ${card(125, 350, 300, 150, "Consumer device", { small: true })}
      ${arrow(440, 425, 720, 425, { label: "TLS 1.3" })}
      ${card(740, 350, 300, 150, "Fanfare platform", { accent: true, small: true })}
      ${arrow(1055, 425, 1335, 425, { label: "TLS 1.3" })}
      ${card(1355, 350, 300, 150, "Your systems", { small: true })}
      ${pathArrow("M 740 505 C 600 630 410 625 285 505", { color: colors.muted })}
      ${textBlock(510, 635, "encrypted response", { size: 22, color: colors.muted, weight: 700, maxChars: 28 })}
      ${textBlock(1198, 545, "webhook or API call", { size: 22, color: colors.muted, weight: 700, maxChars: 28 })}
    `
  );
}

const diagrams = [
  ["images/concepts/consumer-identity-levels.webp", renderConsumerIdentity()],
  ["images/concepts/progressive-profiling.webp", renderProgressiveProfiling()],
  ["images/concepts/product-sync-flow.webp", renderProductSync()],
  ["images/concepts/platform-overview.webp", renderPlatformOverview()],
  [
    "images/concepts/consumer-journey.webp",
    renderFlow({
      title: "Consumer journey",
      subtitle: "A public, customer-facing path from discovery to purchase.",
      steps: [
        { label: "Discover" },
        { label: "Participate" },
        { label: "Get access" },
        { label: "Purchase" },
      ],
      accentIndex: 2,
    }),
  ],
  ["images/concepts/experience-schedule.webp", renderExperienceSchedule()],
  ["images/concepts/access-path-priority.webp", renderPriority()],
  ["images/concepts/audience-rule-logic.webp", renderRuleLogic()],
  ["images/concepts/audience-routing.webp", renderAudienceRouting()],
  [
    "images/concepts/distributions/consumer-journey.webp",
    renderFlow({
      title: "Distribution journey",
      subtitle: "Every distribution moves the consumer toward a public outcome.",
      steps: [{ label: "Join" }, { label: "Participate" }, { label: "Get access" }, { label: "Purchase" }],
      accentIndex: 2,
    }),
  ],
  ["images/concepts/distributions/choice-tree.webp", renderChoiceTree()],
  [
    "images/concepts/distributions/queue-flow.webp",
    renderFlow({
      title: "Queue flow",
      subtitle: "Consumers join, wait, reach the front, and receive checkout access.",
      steps: [{ label: "Join" }, { label: "Wait" }, { label: "Front of queue" }, { label: "Checkout access" }],
      accentIndex: 2,
    }),
  ],
  [
    "images/concepts/distributions/queue-journey.webp",
    renderFlow({
      title: "Queue journey",
      subtitle: "Consumer-facing queue states stay simple and recoverable.",
      steps: [{ label: "Not in line" }, { label: "In queue" }, { label: "Access granted" }, { label: "Complete" }],
      accentIndex: 2,
    }),
  ],
  [
    "images/concepts/distributions/draw-lifecycle.webp",
    renderFlow({
      title: "Draw lifecycle",
      subtitle: "Entry closes before selection and winner notification.",
      steps: [{ label: "Entry period" }, { label: "Selection" }, { label: "Notify winner" }, { label: "Complete" }],
      accentIndex: 1,
    }),
  ],
  [
    "images/concepts/distributions/draw-journey.webp",
    renderBranch({
      title: "Draw journey",
      subtitle: "A draw resolves to selected or not selected.",
      start: "Not entered",
      middle: "Entered",
      outcomes: ["Selected", "Not selected"],
      final: "Complete",
    }),
  ],
  [
    "images/concepts/distributions/auction-lifecycle.webp",
    renderFlow({
      title: "Auction lifecycle",
      subtitle: "Bidding can extend before an auction resolves to a result.",
      steps: [{ label: "Bidding" }, { label: "Extended" }, { label: "Ended" }, { label: "Reserve met?" }, { label: "Result" }],
      accentIndex: 3,
    }),
  ],
  [
    "images/concepts/distributions/auction-journey.webp",
    renderAuctionJourney(),
  ],
  [
    "images/concepts/distributions/appointment-lifecycle.webp",
    renderFlow({
      title: "Appointment lifecycle",
      subtitle: "Slot selection leads to confirmation and fulfillment.",
      steps: [{ label: "View slots" }, { label: "Book" }, { label: "Confirm" }, { label: "Check in" }, { label: "Complete" }],
      accentIndex: 2,
    }),
  ],
  [
    "images/concepts/distributions/appointment-journey.webp",
    renderFlow({
      title: "Appointment journey",
      subtitle: "A booking can complete normally or end in cancellation.",
      steps: [{ label: "Viewing" }, { label: "Booked" }, { label: "Reminder" }, { label: "Check in" }, { label: "Complete" }],
      accentIndex: 1,
      sideOutcome: { label: "Cancelled" },
    }),
  ],
  [
    "images/concepts/distributions/timed-release-lifecycle.webp",
    renderFlow({
      title: "Timed release lifecycle",
      subtitle: "Access opens at release time and continues through checkout.",
      steps: [{ label: "Countdown" }, { label: "Release opens" }, { label: "Instant access" }, { label: "Checkout window" }],
      accentIndex: 1,
    }),
  ],
  [
    "images/concepts/distributions/timed-release-journey.webp",
    renderFlow({
      title: "Timed release journey",
      subtitle: "Consumers wait for access, then proceed to checkout.",
      steps: [{ label: "Waiting" }, { label: "Access granted" }, { label: "Checkout" }, { label: "Complete" }],
      accentIndex: 1,
    }),
  ],
  [
    "images/concepts/distributions/waitlist-lifecycle.webp",
    renderFlow({
      title: "Waitlist lifecycle",
      subtitle: "Interest capture stays passive until access opens.",
      steps: [{ label: "Interest" }, { label: "Waiting" }, { label: "Opens" }, { label: "Notify" }, { label: "Convert" }],
      accentIndex: 3,
    }),
  ],
  [
    "images/concepts/distributions/waitlist-journey.webp",
    renderWaitlistJourney(),
  ],
  [
    "images/guides/checkout-flow.webp",
    renderFlow({
      title: "Checkout flow",
      subtitle: "Hand admitted customers to a trusted server boundary before order completion.",
      steps: [
        { label: "Experience" },
        { label: "Participate" },
        { label: "Access granted" },
        { label: "Server check" },
        { label: "Place order" },
        { label: "Complete" },
      ],
      accentIndex: 3,
    }),
  ],
  ["images/guides/admission-grant-lifecycle.webp", renderAdmissionGrant()],
  ["images/guides/cart-reservation-timeline.webp", renderCartReservation()],
  ["images/guides/ssr-integration-shape.webp", renderSSR()],
  ["images/guides/mobile-webview-flow.webp", renderMobile()],
  ["images/guides/custom-platform-architecture.webp", renderNestedPlatform()],
  ["images/api/webhook-delivery-flow.webp", renderWebhook()],
  ["images/resources/traffic-pattern.webp", renderTrafficPattern()],
  ["images/resources/security-data-flow.webp", renderSecurityDataFlow()],
  ["images/resources/scalability-architecture.webp", renderScalability()],
  ["images/dashboard/experience-lifecycle.webp", renderDashboardLifecycle()],
  ["images/concepts/journey-mental-model.webp", renderIntroJourney()],
  ["images/concepts/browser-sdk-fit.webp", renderPlatformMental()],
  ["images/concepts/realtime-queue-updates.webp", renderRealtimeQueue()],
  ["images/concepts/realtime-auction-updates.webp", renderRealtimeAuction()],
  ["images/concepts/realtime-update-flow.webp", renderRealtimeUpdateFlow()],
  ["images/guides/anonymous-consumer-flow.webp", renderAnonymousConsumerFlow()],
  ["images/guides/identified-consumer-flow.webp", renderIdentifiedConsumerFlow()],
  ["images/guides/jwt-token-flow.webp", renderJwtTokenFlow()],
  ["images/guides/order-completion-flow.webp", renderOrderCompletion()],
  ["images/guides/payment-processing-flow.webp", renderPaymentProcessing()],
];

for (const [assetPath, svg] of diagrams) {
  const out = join(root, assetPath);
  mkdirSync(dirname(out), { recursive: true });
  await sharp(Buffer.from(svg)).webp({ quality: 92 }).toFile(out);
  console.log(assetPath);
}
