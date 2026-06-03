# Generated Diagram Plan

This working plan tracks public documentation diagrams that can be generated as
polished static assets. It excludes dashboard screenshots and draft-gated
landing page / integration content.

The assets are generated deterministically from styled SVG into WebP by
`docs-maintenance/generate-diagram-assets.mjs`. This keeps text crisp,
reviewable, and repeatable while preserving the image-based docs presentation.

## Style

- Dark documentation background with charcoal panels.
- Thin borders and crisp connector lines.
- Restrained purple accents for labels, highlights, and arrows.
- Clear, legible sans-serif text.
- Little to no glow; product documentation diagram, not hero art.
- No sensitive internals, operational thresholds, or exploit-enabling details.

## Candidate Assets

| Asset | Page | Replaces / supports | Must show |
| --- | --- | --- | --- |
| `images/concepts/journey-mental-model.webp` | `getting-started/introduction.mdx` | Journey mental model diagram | Your app, Fanfare SDK, and JourneyView as the public state/action boundary. |
| `images/concepts/browser-sdk-fit.webp` | `getting-started/introduction.mdx` | Browser SDK fit diagram | Product page, SDK, Fanfare API, and backend checkout handoff. |
| `images/concepts/platform-overview.webp` | `concepts/overview.mdx` | How Fanfare Works diagram | Consumers flow into an experience with VIP, general, and waitlist paths, then proceed to checkout. |
| `images/concepts/consumer-journey.webp` | `concepts/overview.mdx` | Consumer journey diagram | Discover, participate, get access, complete purchase. |
| `images/concepts/experience-schedule.webp` | `concepts/experiences.mdx` | Experience schedule model | Experience contains sequences; sequences contain distributions with upcoming, active, ended states. |
| `images/concepts/access-path-priority.webp` | `concepts/experiences.mdx` | Access paths diagram | VIP, early access, and general access evaluated by priority. |
| `images/concepts/consumer-identity-levels.webp` | `concepts/consumers.mdx` | Consumer identity levels diagram | Guest, registered, and verified identity progression. |
| `images/concepts/progressive-profiling.webp` | `concepts/consumers.mdx` | Progressive collection diagram | Guest entry, email collection, phone collection, and checkout profile collection. |
| `images/concepts/audience-rule-logic.webp` | `concepts/audiences.mdx` | AND / OR rule examples | AND requires all conditions; OR allows either group. |
| `images/concepts/audience-routing.webp` | `concepts/audiences.mdx` | Audience access-path diagram | VIP audience, loyalty audience, fallback general access. |
| `images/concepts/product-sync-flow.webp` | `concepts/products.mdx` | Product sync diagram | Store product update syncing to Fanfare and inventory webhook keeping experience data current. |
| `images/concepts/realtime-queue-updates.webp` | `concepts/real-time.mdx` | Queue status update diagram | Queue position and estimated wait changing as updates arrive. |
| `images/concepts/realtime-auction-updates.webp` | `concepts/real-time.mdx` | Auction status update diagram | Winning bid state becoming outbid with a prompt to respond. |
| `images/concepts/realtime-update-flow.webp` | `concepts/real-time.mdx` | Real-time update flow diagram | Browser checks public Fanfare state and updates the journey view. |
| `images/concepts/distributions/consumer-journey.webp` | `concepts/distributions/overview.mdx` | Distribution journey diagram | Join, participate, get access, complete purchase. |
| `images/concepts/distributions/choice-tree.webp` | `concepts/distributions/overview.mdx` | Distribution choice tree | Queue vs draw vs appointment vs timed release decision tree. |
| `images/concepts/distributions/queue-flow.webp` | `concepts/distributions/queue.mdx` | Queue flow diagram | Consumers join, wait, reach front, receive checkout access. |
| `images/concepts/distributions/queue-journey.webp` | `concepts/distributions/queue.mdx` | Queue consumer journey | Not in line, in queue, access granted, complete. |
| `images/concepts/distributions/draw-lifecycle.webp` | `concepts/distributions/lottery.mdx` | Draw lifecycle diagram | Entry period, selection, winner notification, completion. |
| `images/concepts/distributions/draw-journey.webp` | `concepts/distributions/lottery.mdx` | Draw consumer journey | Not entered, entered, won or not selected, complete. |
| `images/concepts/distributions/auction-lifecycle.webp` | `concepts/distributions/auction.mdx` | Auction lifecycle diagram | Bidding period, auto-extend, auction ends, reserve met decision. |
| `images/concepts/distributions/auction-journey.webp` | `concepts/distributions/auction.mdx` | Auction consumer journey | Not bidding, winning/outbid, won/lost, complete. |
| `images/concepts/distributions/appointment-lifecycle.webp` | `concepts/distributions/appointment.mdx` | Appointment lifecycle diagram | View slots, book, confirmation, check-in, completed. |
| `images/concepts/distributions/appointment-journey.webp` | `concepts/distributions/appointment.mdx` | Appointment consumer journey | Viewing, booked, reminder/check-in, complete or cancelled. |
| `images/concepts/distributions/timed-release-lifecycle.webp` | `concepts/distributions/instant.mdx` | Timed release lifecycle diagram | Countdown, release opens, instant access, checkout window. |
| `images/concepts/distributions/timed-release-journey.webp` | `concepts/distributions/instant.mdx` | Timed release consumer journey | Waiting, access granted, checkout, complete. |
| `images/concepts/distributions/waitlist-lifecycle.webp` | `concepts/distributions/exclusive.mdx` | Waitlist lifecycle diagram | Interest capture, waiting, distribution opens, notification, conversion. |
| `images/concepts/distributions/waitlist-journey.webp` | `concepts/distributions/exclusive.mdx` | Waitlist consumer journey | Not signed up, waiting, notified, convert or do not convert. |
| `images/guides/checkout-flow.webp` | `guides/checkout-integration/checkout-overview.mdx` | Checkout flow diagram | Enter experience, participate, admitted with grant, validate grant, place order, complete admission. |
| `images/guides/admission-grant-lifecycle.webp` | `guides/checkout-integration/checkout-overview.mdx` | Grant lifecycle diagram | Created, valid during checkout window, used or expired, invalid. |
| `images/guides/cart-reservation-timeline.webp` | `guides/checkout-integration/cart-reservation.mdx` | Reservation timelines | Contrast no reservation causing out-of-stock with reservation hold protecting checkout. |
| `images/guides/order-completion-flow.webp` | `guides/checkout-integration/order-completion.mdx` | Order completion flow diagram | Payment success, order creation, admission completion, webhooks, and confirmation. |
| `images/guides/payment-processing-flow.webp` | `guides/checkout-integration/payment-processing.mdx` | Payment processing flow diagram | Admitted checkout, admission validation, complete order, and retry path. |
| `images/guides/anonymous-consumer-flow.webp` | `guides/authentication/anonymous-consumers.mdx` | Anonymous authentication flow diagram | Session check, restore or create guest, and participate. |
| `images/guides/identified-consumer-flow.webp` | `guides/authentication/identified-consumers.mdx` | Identified authentication flow diagram | Contact entry, code request, receipt, verification, and session creation. |
| `images/guides/jwt-token-flow.webp` | `guides/authentication/jwt-tokens.mdx` | Server-side authentication flow diagram | Browser SDK, backend exchange, Fanfare session, admission grant, and checkout validation. |
| `images/guides/ssr-integration-shape.webp` | `guides/integration-patterns/ssr-integration.mdx` | SSR integration diagram | Server route, SSR product page, client Fanfare boundary, handoff API, checkout. |
| `images/guides/mobile-webview-flow.webp` | `guides/integration-patterns/mobile-webview.mdx` | Mobile WebView architecture | Native app, first-party WebView page, SDK journey view, JS bridge, native checkout/backend. |
| `images/guides/custom-platform-architecture.webp` | `guides/platform-integrations/custom-platform.mdx` | Custom platform architecture diagram | Frontend SDK, backend API, database, and Fanfare platform APIs. |
| `images/api/webhook-delivery-flow.webp` | `api/webhooks/overview.mdx` | Webhook delivery diagram | Fanfare sends event to webhook endpoint; server processes; retry on failure. |
| `images/resources/traffic-pattern.webp` | `resources/best-practices/scalability.mdx` | Launch traffic pattern chart | Traffic rising before launch, peaking, and settling during sale traffic. |
| `images/resources/scalability-architecture.webp` | `resources/best-practices/scalability.mdx` | Scalability architecture diagram | Product page on customer CDN, Fanfare widget, checkout page on customer backend. |
| `images/resources/security-data-flow.webp` | `resources/security/overview.mdx` | Security data flow diagram | Encrypted transport between consumer device, Fanfare, and customer systems. |
| `images/dashboard/experience-lifecycle.webp` | `dashboard/experiences/experience-lifecycle.mdx` | Experience lifecycle diagram | Configure experience, distributions scheduled, upcoming/active/ended/killed. |

## Verification

- Inspect every generated image for text correctness and visual consistency.
- Confirm each image communicates only public concepts.
- Replace only the corresponding ASCII diagram blocks, preserving explanatory
  text around them.
- Run `pnpm build` and `pnpm broken-links`.
