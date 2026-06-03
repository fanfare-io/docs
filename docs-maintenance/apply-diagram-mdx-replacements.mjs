import { readFileSync, writeFileSync } from "node:fs";

function replaceFirstCodeBlockAfter(file, marker, replacement) {
  const original = readFileSync(file, "utf8");
  const markerIndex = original.indexOf(marker);
  if (markerIndex === -1) throw new Error(`${file}: missing marker ${marker}`);

  const prefixEnd = markerIndex + marker.length;
  const prefix = original.slice(0, prefixEnd);
  const rest = original.slice(prefixEnd);

  const codeBlockMatch = /\n\n```[\s\S]*?\n```/.exec(rest);
  if (!codeBlockMatch) {
    console.log(`skip ${file}: no code block after ${marker}`);
    return;
  }

  const beforeBlock = rest.slice(0, codeBlockMatch.index);
  if (beforeBlock.includes("![")) {
    console.log(`skip ${file}: image already present after ${marker}`);
    return;
  }

  const next = `${rest.slice(0, codeBlockMatch.index)}\n\n${replacement}${rest.slice(
    codeBlockMatch.index + codeBlockMatch[0].length
  )}`;

  writeFileSync(file, prefix + next);
  console.log(`updated ${file}: ${marker}`);
}

function replaceCartReservation(file) {
  const original = readFileSync(file, "utf8");
  const replacement =
    "![Cart reservation timeline comparing no reservation with a protected reservation hold.](/images/guides/cart-reservation-timeline.webp)";
  const next = original.replace(
    /\n\n```\nTimeline without reservation:[\s\S]*?```\n\nWith reservation:\n\n```\nTimeline with reservation:[\s\S]*?```/,
    `\n\n${replacement}`
  );
  if (next === original) {
    if (original.includes(replacement)) {
      console.log(`skip ${file}: reservation timeline image already present`);
      return;
    }
    throw new Error(`${file}: cart reservation block not replaced`);
  }
  writeFileSync(file, next);
  console.log(`updated ${file}: reservation timelines`);
}

const replacements = [
  [
    "concepts/distributions/auction.mdx",
    "## How Auctions Work",
    "![Auction lifecycle diagram showing bidding, extension, auction end, reserve decision, and result.](/images/concepts/distributions/auction-lifecycle.webp)",
  ],
  [
    "concepts/distributions/auction.mdx",
    "## Consumer Journey",
    "![Auction consumer journey showing not bidding, winning, outbid, won, lost, and complete states.](/images/concepts/distributions/auction-journey.webp)",
  ],
  [
    "concepts/distributions/appointment.mdx",
    "## How Appointments Work",
    "![Appointment lifecycle diagram showing view slots, book, confirm, check in, and complete.](/images/concepts/distributions/appointment-lifecycle.webp)",
  ],
  [
    "concepts/distributions/appointment.mdx",
    "## Consumer Journey",
    "![Appointment consumer journey showing viewing, booked, reminder, check in, complete, and cancelled.](/images/concepts/distributions/appointment-journey.webp)",
  ],
  [
    "concepts/distributions/instant.mdx",
    "## How Timed Releases Work",
    "![Timed release lifecycle diagram showing countdown, release opens, instant access, and checkout window.](/images/concepts/distributions/timed-release-lifecycle.webp)",
  ],
  [
    "concepts/distributions/instant.mdx",
    "## Consumer Journey",
    "![Timed release consumer journey showing waiting, access granted, checkout, and complete.](/images/concepts/distributions/timed-release-journey.webp)",
  ],
  [
    "concepts/distributions/exclusive.mdx",
    "## How Waitlists Work",
    "![Waitlist lifecycle diagram showing interest, waiting, opening, notification, and conversion.](/images/concepts/distributions/waitlist-lifecycle.webp)",
  ],
  [
    "concepts/distributions/exclusive.mdx",
    "## Consumer Journey",
    "![Waitlist consumer journey showing not signed up, waiting, notified, convert, and no conversion.](/images/concepts/distributions/waitlist-journey.webp)",
  ],
  [
    "guides/checkout-integration/checkout-overview.mdx",
    "## The Checkout Flow",
    "![Checkout flow diagram showing experience entry, participation, access granted, server check, order placement, and completion.](/images/guides/checkout-flow.webp)",
  ],
  [
    "guides/checkout-integration/checkout-overview.mdx",
    "### Grant Lifecycle",
    "![Admission lifecycle diagram showing created, checkout window, used, expired, and invalid states.](/images/guides/admission-grant-lifecycle.webp)",
  ],
  [
    "guides/integration-patterns/ssr-integration.mdx",
    "## Integration Shape",
    "![SSR integration shape showing server route, SSR page, browser Fanfare boundary, handoff API, and checkout.](/images/guides/ssr-integration-shape.webp)",
  ],
  [
    "guides/integration-patterns/mobile-webview.mdx",
    "## Architecture",
    "![Mobile WebView flow showing native app, WebView page, SDK view, JavaScript bridge, checkout, and backend.](/images/guides/mobile-webview-flow.webp)",
  ],
  [
    "guides/platform-integrations/custom-platform.mdx",
    "## Architecture Overview",
    "![Custom platform architecture showing frontend SDK, backend API, database, and Fanfare platform APIs.](/images/guides/custom-platform-architecture.webp)",
  ],
  [
    "api/webhooks/overview.mdx",
    "## How Webhooks Work",
    "![Webhook delivery flow showing Fanfare event delivery, webhook endpoint processing, success, and retry.](/images/api/webhook-delivery-flow.webp)",
  ],
  [
    "guides/advanced/webhooks-guide.mdx",
    "## Webhook Architecture",
    "![Webhook delivery flow showing Fanfare event delivery, webhook endpoint processing, success, and retry.](/images/api/webhook-delivery-flow.webp)",
  ],
  [
    "resources/best-practices/scalability.mdx",
    "## Understanding Traffic Patterns",
    "![Traffic pattern diagram showing pre-launch rise, launch peak, and sale traffic over time.](/images/resources/traffic-pattern.webp)",
  ],
  [
    "resources/best-practices/scalability.mdx",
    "### Separate Landing Pages",
    "![Scalability architecture showing customer CDN product page, Fanfare widget, and checkout backed by the customer backend.](/images/resources/scalability-architecture.webp)",
  ],
  [
    "dashboard/experiences/experience-lifecycle.mdx",
    "## Schedule Model",
    "![Experience lifecycle diagram showing configure, scheduled, upcoming, active, ended, and killed states.](/images/dashboard/experience-lifecycle.webp)",
  ],
  [
    "concepts/consumers.mdx",
    "## Consumer Identity Levels",
    "![Consumer identity levels diagram showing guest, registered, and verified progression.](/images/concepts/consumer-identity-levels.webp)",
  ],
  [
    "concepts/consumers.mdx",
    "## Progressive Collection",
    "![Progressive collection diagram showing guest entry, email collection, phone collection, and checkout profile collection.](/images/concepts/progressive-profiling.webp)",
  ],
  [
    "concepts/products.mdx",
    "### How Sync Works",
    "![Product sync flow showing store product updates syncing to Fanfare and inventory webhooks keeping the experience current.](/images/concepts/product-sync-flow.webp)",
  ],
  [
    "concepts/real-time.mdx",
    "### Waiting in a Queue",
    "![Queue status update diagram showing a consumer position moving from 47 to 12 as updates arrive.](/images/concepts/realtime-queue-updates.webp)",
  ],
  [
    "concepts/real-time.mdx",
    "### Bidding in an Auction",
    "![Auction status update diagram showing a winning bid changing to an outbid state.](/images/concepts/realtime-auction-updates.webp)",
  ],
  [
    "concepts/real-time.mdx",
    "## How It Works (Simplified)",
    "![Real-time update flow diagram showing the browser checking public state and rendering the latest journey view.](/images/concepts/realtime-update-flow.webp)",
  ],
  [
    "guides/authentication/anonymous-consumers.mdx",
    "## How Anonymous Authentication Works",
    "![Anonymous consumer flow diagram showing session check, restore or create guest, and participate.](/images/guides/anonymous-consumer-flow.webp)",
  ],
  [
    "guides/authentication/identified-consumers.mdx",
    "## Authentication Flow",
    "![Identified consumer flow diagram showing contact entry, OTP request, code receipt, verification, and session creation.](/images/guides/identified-consumer-flow.webp)",
  ],
  [
    "guides/authentication/jwt-tokens.mdx",
    "## Authentication Architecture",
    "![Server-side authentication flow diagram showing browser SDK, backend exchange, Fanfare session, admission grant, and checkout validation.](/images/guides/jwt-token-flow.webp)",
  ],
  [
    "guides/checkout-integration/order-completion.mdx",
    "## The Completion Flow",
    "![Order completion flow diagram showing payment success, order creation, admission completion, webhooks, and customer confirmation.](/images/guides/order-completion-flow.webp)",
  ],
  [
    "guides/checkout-integration/payment-processing.mdx",
    "## Payment Flow Architecture",
    "![Payment processing flow diagram showing admitted checkout, admission validation, payment completion, and retry on failure.](/images/guides/payment-processing-flow.webp)",
  ],
  [
    "resources/security/overview.mdx",
    "### Data Flow Security",
    "![Security data flow diagram showing encrypted transport from consumer devices through Fanfare to customer systems.](/images/resources/security-data-flow.webp)",
  ],
];

for (const [file, marker, replacement] of replacements) {
  replaceFirstCodeBlockAfter(file, marker, replacement);
}

replaceCartReservation("guides/checkout-integration/cart-reservation.mdx");
