# Generated Diagram Prompt Manifest

Use one consistent visual system for every asset: dark docs background, charcoal panels, thin borders and connectors, restrained purple accent, crisp sans-serif text, little or no glow, flat product documentation diagram, no 3D, no neon, no marketing art. Keep all labels exactly as listed.

For this batch, the final assets are generated deterministically from styled SVG
into WebP by `docs-maintenance/generate-diagram-assets.mjs`. Use these prompts
as the content contract and art-direction reference if regenerating with an
image model later.

## Candidate Prompts

### `images/concepts/journey-mental-model.webp`
- Goal: Explain the SDK mental model at a public contract level.
- Labels: `Your app`, `Fanfare SDK`, `JourneyView`
- Prompt: Create a concise horizontal diagram showing Your app connected to the Fanfare SDK, which exposes a JourneyView with current public state and valid actions; use the shared Fanfare docs style.
- Public-safety note: Do not include implementation internals, tokens, private endpoint names, or state-machine internals.

### `images/concepts/browser-sdk-fit.webp`
- Goal: Show how the browser SDK fits between the product page, Fanfare API, and backend checkout handoff.
- Labels: `Product page`, `Fanfare SDK`, `Fanfare API`, `Backend`, `Checkout`
- Prompt: Create a public architecture diagram showing Product page to Fanfare SDK to Fanfare API, with a backend checkout handoff after admission; use the shared Fanfare docs style.
- Public-safety note: Keep the backend handoff conceptual; do not show secrets, token payloads, or validation mechanics.

### `images/concepts/platform-overview.webp`
- Goal: Show how consumers enter a Fanfare experience, follow audience-based access paths, and continue to checkout.
- Labels: `Consumers`, `Experience`, `VIP`, `General`, `Waitlist`, `Checkout`
- Prompt: Create a clean public docs flow diagram with Consumers entering a central Experience panel, branching into VIP, General, and Waitlist paths, then converging into Checkout; use the shared Fanfare docs style with short labels and simple arrows.
- Public-safety note: Shows only public routing concepts; do not include rule logic, priority values, IDs, tokens, or enforcement details.

### `images/concepts/consumer-journey.webp`
- Goal: Summarize the consumer journey from discovery through completed purchase.
- Labels: `Discover`, `Participate`, `Get access`, `Purchase`
- Prompt: Create a four-step horizontal journey diagram for a consumer moving from Discover to Participate to Get access to Purchase; use the shared Fanfare docs style with numbered charcoal panels and restrained purple progress accents.
- Public-safety note: Keep the journey conceptual; do not depict identifiers, grant payloads, fraud checks, or operational states.

### `images/concepts/experience-schedule.webp`
- Goal: Explain that an experience contains sequences, and sequences contain distributions with lifecycle states.
- Labels: `Experience`, `Sequence`, `Distribution`, `Upcoming`, `Active`, `Ended`
- Prompt: Create a nested schedule model diagram with Experience as the outer container, Sequence panels inside it, Distribution cards inside sequences, and small state chips for Upcoming, Active, and Ended; use the shared Fanfare docs style.
- Public-safety note: Avoid dates, timing thresholds, scheduler mechanics, database fields, or internal state names.

### `images/concepts/access-path-priority.webp`
- Goal: Show VIP, early access, and general access being considered in priority order.
- Labels: `Priority`, `VIP`, `Early access`, `General`, `Access path`
- Prompt: Create a vertical priority ladder diagram where VIP, Early access, and General feed into one Access path outcome; use the shared Fanfare docs style with a subtle purple priority rail.
- Public-safety note: Do not include numeric priorities, exact evaluation rules, eligibility tests, or bypass mechanics.

### `images/concepts/audience-rule-logic.webp`
- Goal: Clarify that AND requires all conditions while OR allows either group.
- Labels: `AND`, `All conditions`, `OR`, `Either group`, `Audience`
- Prompt: Create a split comparison diagram with an AND panel showing multiple conditions joining into Audience, and an OR panel showing either group leading into Audience; use the shared Fanfare docs style with concise labels.
- Public-safety note: Use generic condition shapes only; do not expose customer attributes, segmentation thresholds, or real eligibility examples.

### `images/concepts/audience-routing.webp`
- Goal: Show audiences mapped to access paths with a general fallback.
- Labels: `VIP audience`, `Loyalty audience`, `General access`, `Fallback`, `Access path`
- Prompt: Create a public docs routing diagram where VIP audience and Loyalty audience connect to Access path panels, with General access shown as the fallback route; use the shared Fanfare docs style.
- Public-safety note: Avoid audience matching internals, ranking values, customer data, or rule examples that could reveal targeting logic.

### `images/concepts/consumer-identity-levels.webp`
- Goal: Explain the public identity progression from guest to verified.
- Labels: `Guest`, `Registered`, `Verified`, `Quick entry`, `Can receive notifications`, `Higher trust`
- Prompt: Create a horizontal progression diagram from Guest to Registered to Verified, with concise captions under each level; use the shared Fanfare docs style.
- Public-safety note: Do not include fraud signals, risk scoring, verification providers, or enforcement details.

### `images/concepts/progressive-profiling.webp`
- Goal: Show progressive collection of consumer information.
- Labels: `1 Entry`, `Guest access`, `2 Join`, `Request email`, `3 Access`, `Request phone`, `4 Checkout`, `Full profile`
- Prompt: Create a two-row progressive collection diagram showing information requested only as consumers move deeper into the journey; use the shared Fanfare docs style.
- Public-safety note: Do not include required fields, validation rules, data retention, or internal identity-linking mechanics.

### `images/concepts/product-sync-flow.webp`
- Goal: Show store product updates syncing into Fanfare and keeping experiences current.
- Labels: `Product updated`, `Your store`, `Fanfare`, `Inventory webhook`, `Experience shows updated info`
- Prompt: Create a product sync diagram where a product update in Your store syncs to Fanfare, with inventory webhook keeping the experience view current; use the shared Fanfare docs style.
- Public-safety note: Do not include webhook payloads, platform credentials, polling schedules, or inventory reconciliation internals.

### `images/concepts/realtime-queue-updates.webp`
- Goal: Show queue status changing for the consumer.
- Labels: `Queue status`, `Position #47`, `Estimated wait: 3 min`, `47 / 200`, `Position #12`, `Estimated wait: 45 sec`, `12 / 200`
- Prompt: Create a before-and-after queue status diagram showing a consumer's position moving from 47 to 12 as updates arrive; use the shared Fanfare docs style with simple progress bars.
- Public-safety note: Do not include queue ranking formulas, guarantees, update intervals, or capacity algorithms.

### `images/concepts/realtime-auction-updates.webp`
- Goal: Show an auction bid state changing from winning to outbid.
- Labels: `Winning`, `High bid 150.00`, `Your bid 150.00`, `Outbid`, `High bid 175.00`, `Place new bid`
- Prompt: Create a before-and-after auction status diagram showing a winning bidder becoming outbid and seeing a prompt to respond; use the shared Fanfare docs style.
- Public-safety note: Avoid bid validation rules, extension thresholds, reserve values, payment details, or competitive tactics.

### `images/concepts/realtime-update-flow.webp`
- Goal: Explain real-time updates without exposing transport or infrastructure internals.
- Labels: `Browser`, `Shows position`, `Check`, `Fanfare`, `Public state`, `Updated view`, `Position changed`
- Prompt: Create a high-level update flow where the browser checks Fanfare public state and renders an updated journey view; use the shared Fanfare docs style.
- Public-safety note: Do not include transport mechanics, polling intervals, cache keys, retry thresholds, or backend topology.

### `images/concepts/distributions/consumer-journey.webp`
- Goal: Show the distribution-level consumer path from joining through purchase completion.
- Labels: `Join`, `Participate`, `Get access`, `Purchase`
- Prompt: Create a four-step distribution journey diagram from Join to Participate to Get access to Purchase; use the shared Fanfare docs style with simple connector arrows and compact panels.
- Public-safety note: Keep this as a user-facing concept; do not include grants, queue position math, or validation mechanics.

### `images/concepts/distributions/choice-tree.webp`
- Goal: Help readers choose between queue, draw, appointment, and timed release distribution types.
- Labels: `Choose distribution`, `Queue`, `Draw`, `Appointment`, `Timed release`
- Prompt: Create a simple decision-tree overview with Choose distribution at the root and four clean branches to Queue, Draw, Appointment, and Timed release; use the shared Fanfare docs style.
- Public-safety note: Do not include operational criteria, capacity thresholds, anti-abuse rules, or implementation details.

### `images/concepts/distributions/queue-flow.webp`
- Goal: Show the public queue flow from joining to checkout access.
- Labels: `Join`, `Wait`, `Front of queue`, `Checkout access`
- Prompt: Create a left-to-right queue flow diagram where consumers Join, Wait, reach Front of queue, and receive Checkout access; use the shared Fanfare docs style with a thin purple progress line.
- Public-safety note: Do not show queue scoring, position formulas, timing thresholds, or admission mechanics.

### `images/concepts/distributions/queue-journey.webp`
- Goal: Show the consumer-facing queue states from outside the line to completion.
- Labels: `Not in line`, `In queue`, `Access granted`, `Complete`
- Prompt: Create a compact state journey diagram for queue consumers moving from Not in line to In queue to Access granted to Complete; use the shared Fanfare docs style.
- Public-safety note: Avoid queue internals, wait-time guarantees, ranking details, or grant payloads.

### `images/concepts/distributions/draw-lifecycle.webp`
- Goal: Show the draw lifecycle from entry through completion.
- Labels: `Entry period`, `Selection`, `Notify winner`, `Complete`
- Prompt: Create a draw lifecycle timeline with Entry period, Selection, Notify winner, and Complete as four balanced stages; use the shared Fanfare docs style with subtle purple emphasis on Selection.
- Public-safety note: Do not include selection algorithms, odds, randomization details, thresholds, or notification internals.

### `images/concepts/distributions/draw-journey.webp`
- Goal: Show the consumer-facing draw path, including selected and not selected outcomes.
- Labels: `Not entered`, `Entered`, `Selected`, `Not selected`, `Complete`
- Prompt: Create a draw consumer journey diagram where Not entered leads to Entered, then branches to Selected or Not selected, with Selected continuing to Complete; use the shared Fanfare docs style.
- Public-safety note: Avoid odds, eligibility scoring, selection mechanics, and specific rejection reasons.

### `images/concepts/distributions/auction-lifecycle.webp`
- Goal: Explain the auction lifecycle from bidding through reserve decision.
- Labels: `Bidding`, `Extended`, `Ended`, `Reserve met?`, `Result`
- Prompt: Create an auction lifecycle diagram with Bidding leading to optional Extended, then Ended, then a Reserve met? decision leading to Result; use the shared Fanfare docs style with clear decision shape.
- Public-safety note: Keep reserve handling conceptual; do not include reserve amounts, extension thresholds, bid validation rules, or timing mechanics.

### `images/concepts/distributions/auction-journey.webp`
- Goal: Show a bidder journey through winning, outbid, won, or lost states.
- Labels: `Not bidding`, `Winning`, `Outbid`, `Won`, `Lost`, `Complete`
- Prompt: Create an auction consumer journey diagram where Not bidding leads into active states Winning and Outbid, then resolves to Won or Lost, with Won continuing to Complete; use the shared Fanfare docs style.
- Public-safety note: Do not show bid increments, timing rules, reserve values, payment details, or competitive tactics.

### `images/concepts/distributions/appointment-lifecycle.webp`
- Goal: Show the appointment lifecycle from slot browsing through completion.
- Labels: `View slots`, `Book`, `Confirm`, `Check in`, `Complete`
- Prompt: Create a five-step appointment lifecycle diagram from View slots to Book to Confirm to Check in to Complete; use the shared Fanfare docs style with simple calendar-like panels.
- Public-safety note: Avoid slot inventory internals, booking lock timing, attendee identifiers, or check-in validation details.

### `images/concepts/distributions/appointment-journey.webp`
- Goal: Show consumer appointment states, including cancellation.
- Labels: `Viewing`, `Booked`, `Reminder`, `Check in`, `Complete`, `Cancelled`
- Prompt: Create an appointment consumer journey diagram where Viewing leads to Booked, then Reminder and Check in, ending at Complete, with Cancelled shown as a side outcome; use the shared Fanfare docs style.
- Public-safety note: Do not include reminder timing, cancellation policy mechanics, user IDs, or verification details.

### `images/concepts/distributions/timed-release-lifecycle.webp`
- Goal: Show timed release moving from countdown to checkout access.
- Labels: `Countdown`, `Release opens`, `Instant access`, `Checkout window`
- Prompt: Create a timed release lifecycle timeline from Countdown to Release opens to Instant access to Checkout window; use the shared Fanfare docs style with restrained purple on the release moment.
- Public-safety note: Do not include exact clock thresholds, capacity rules, anti-bot controls, or token details.

### `images/concepts/distributions/timed-release-journey.webp`
- Goal: Show the consumer journey for timed release access and checkout.
- Labels: `Waiting`, `Access granted`, `Checkout`, `Complete`
- Prompt: Create a simple timed release journey diagram from Waiting to Access granted to Checkout to Complete; use the shared Fanfare docs style with compact labels and thin arrows.
- Public-safety note: Avoid checkout-window timing, grant values, validation logic, or scarcity mechanics.

### `images/concepts/distributions/waitlist-lifecycle.webp`
- Goal: Explain the waitlist lifecycle from interest capture to conversion.
- Labels: `Interest`, `Waiting`, `Opens`, `Notify`, `Convert`
- Prompt: Create a waitlist lifecycle diagram with Interest, Waiting, Opens, Notify, and Convert as sequential stages; use the shared Fanfare docs style with muted panels and a restrained purple notification accent.
- Public-safety note: Do not show ranking rules, notification batches, eligibility scoring, or conversion thresholds.

### `images/concepts/distributions/waitlist-journey.webp`
- Goal: Show waitlist consumer states, including conversion and non-conversion.
- Labels: `Not signed up`, `Waiting`, `Notified`, `Convert`, `No conversion`
- Prompt: Create a waitlist consumer journey diagram where Not signed up leads to Waiting and Notified, then branches to Convert or No conversion; use the shared Fanfare docs style.
- Public-safety note: Avoid exposing waitlist ordering, notification timing, user data, or re-entry mechanics.

### `images/guides/checkout-flow.webp`
- Goal: Show the safe checkout integration shape from experience entry through admission completion.
- Labels: `Experience`, `Participate`, `Access granted`, `Server check`, `Place order`, `Complete`
- Prompt: Create a checkout integration flow diagram from Experience to Participate to Access granted, then to Server check, Place order, and Complete; use the shared Fanfare docs style with customer backend implied only by the Server check panel.
- Public-safety note: Do not show grant contents, endpoint paths, secrets, validation algorithms, order IDs, or replay mechanics.

### `images/guides/admission-grant-lifecycle.webp`
- Goal: Show the public admission grant lifecycle without exposing implementation details.
- Labels: `Created`, `Checkout window`, `Used`, `Expired`, `Invalid`
- Prompt: Create an admission lifecycle state diagram where Created enters Checkout window, then resolves to Used or Expired, with Invalid shown as a terminal state; use the shared Fanfare docs style.
- Public-safety note: Avoid token structure, expiration values, revocation logic, endpoint details, or validation steps.

### `images/guides/cart-reservation-timeline.webp`
- Goal: Contrast checkout without reservation against checkout protected by a reservation hold.
- Labels: `No reservation`, `Out of stock`, `Reservation hold`, `Checkout protected`
- Prompt: Create a two-lane timeline comparison: top lane No reservation leading to Out of stock, bottom lane Reservation hold leading to Checkout protected; use the shared Fanfare docs style with restrained contrast and short labels.
- Public-safety note: Do not include hold durations, inventory quantities, race conditions, or reservation implementation details.

### `images/guides/order-completion-flow.webp`
- Goal: Show the order completion sequence after a successful payment.
- Labels: `Payment successful`, `Create order`, `Complete admission`, `Webhooks`, `Confirmation`
- Prompt: Create a five-step order completion flow from Payment successful to Create order to Complete admission to Webhooks to Confirmation; use the shared Fanfare docs style.
- Public-safety note: Avoid endpoint paths, order identifiers, webhook payloads, retry policies, and admission internals.

### `images/guides/payment-processing-flow.webp`
- Goal: Show admission validation before payment completion and retry on failure.
- Labels: `Admitted`, `Checkout page`, `Create payment`, `Validate admission`, `Retry on failure`, `Complete order`
- Prompt: Create a payment processing flow where an admitted consumer reaches checkout, payment creation validates admission, success completes the order, and failure allows retry; use the shared Fanfare docs style.
- Public-safety note: Do not show token contents, payment provider secrets, validation algorithms, or replay-sensitive details.

### `images/guides/anonymous-consumer-flow.webp`
- Goal: Show anonymous guest session behavior.
- Labels: `Consumer visit`, `Check session`, `Restore session`, `Create guest`, `Participate`
- Prompt: Create a session flow where a consumer visit checks for an existing session, restores it when present or creates a guest when absent, then participates; use the shared Fanfare docs style.
- Public-safety note: Do not show cookie names, session identifiers, token lifetimes, or storage internals.

### `images/guides/identified-consumer-flow.webp`
- Goal: Show identified authentication with a verification code.
- Labels: `Start auth`, `Enter contact`, `Request code`, `Receive code`, `Verify`, `Session created`
- Prompt: Create an OTP-style authentication flow from starting auth through contact entry, code request, code receipt, verification, and session creation; use the shared Fanfare docs style.
- Public-safety note: Do not include provider details, OTP lengths, delivery safeguards, rate limits, or abuse controls.

### `images/guides/jwt-token-flow.webp`
- Goal: Show server-side auth without exposing server credentials.
- Labels: `Browser SDK`, `Login`, `Your API`, `Exchange`, `Fanfare API`, `Fanfare session`, `Admission grant`, `Checkout`, `Validate`
- Prompt: Create a server-side auth flow showing Browser SDK to Your API, exchange with Fanfare API, Fanfare session, admission grant, checkout, and validation; use the shared Fanfare docs style.
- Public-safety note: Do not include JWT structure, secrets, token payloads, endpoint paths, or validation implementation details.

### `images/guides/ssr-integration-shape.webp`
- Goal: Show the high-level SSR integration boundary between server rendering, client experience, handoff, and checkout.
- Labels: `Server route`, `SSR page`, `Fanfare boundary`, `Handoff API`, `Checkout`
- Prompt: Create an SSR integration architecture diagram where Server route renders an SSR page, the client-side Fanfare boundary connects to a Handoff API, then proceeds to Checkout; use the shared Fanfare docs style.
- Public-safety note: Avoid framework-specific secrets, API payload details, auth mechanics, endpoint paths, or session internals.

### `images/guides/mobile-webview-flow.webp`
- Goal: Show the mobile WebView integration shape across native app, WebView, SDK, bridge, and checkout/backend.
- Labels: `Native app`, `WebView page`, `SDK view`, `JS bridge`, `Checkout`, `Backend`
- Prompt: Create a mobile WebView architecture diagram with Native app containing a WebView page and SDK view, connected through a JS bridge to Checkout and Backend; use the shared Fanfare docs style.
- Public-safety note: Do not include bridge message formats, auth tokens, native identifiers, or backend endpoint details.

### `images/guides/custom-platform-architecture.webp`
- Goal: Show the high-level custom platform integration layers.
- Labels: `Your platform`, `Frontend`, `SDK`, `Backend`, `API`, `Database`, `Fanfare`, `Consumer API`, `Admin API`, `Webhooks`
- Prompt: Create a two-zone architecture diagram with Your platform on one side and Fanfare on the other, showing frontend SDK, backend API, database, Consumer API, Admin API, and Webhooks; use the shared Fanfare docs style.
- Public-safety note: Avoid private endpoints, credentials, auth details, database schema, or operational controls.

### `images/api/webhook-delivery-flow.webp`
- Goal: Explain webhook delivery at a public contract level, including retry on failure.
- Labels: `Fanfare event`, `Webhook endpoint`, `Process event`, `Success`, `Retry`
- Prompt: Create a webhook delivery flow where Fanfare event sends to Webhook endpoint, then Process event branches to Success or Retry; use the shared Fanfare docs style with thin connectors and a small retry loop.
- Public-safety note: Avoid signing secrets, retry schedules, failure thresholds, payload internals, or operational controls.

### `images/resources/scalability-architecture.webp`
- Goal: Show a scalable customer integration shape across CDN page, Fanfare widget, and customer checkout backend.
- Labels: `Customer CDN`, `Product page`, `Fanfare widget`, `Checkout page`, `Customer backend`
- Prompt: Create a scalability architecture diagram where Customer CDN serves Product page with a Fanfare widget, then routes eligible customers to Checkout page backed by Customer backend; use the shared Fanfare docs style.
- Public-safety note: Do not include traffic volumes, cache rules, origin details, rate limits, or infrastructure internals.

### `images/resources/traffic-pattern.webp`
- Goal: Show launch traffic rising before open, peaking, and settling.
- Labels: `Traffic`, `Time`, `Launch`, `Sale`, `Peak`
- Prompt: Create a simple traffic-over-time chart showing pre-launch growth, a launch peak, and post-launch sale traffic; use the shared Fanfare docs style.
- Public-safety note: Do not include capacity numbers, thresholds, load-shedding behavior, or alerting details.

### `images/resources/security-data-flow.webp`
- Goal: Show encrypted transport among consumer devices, Fanfare, and customer systems.
- Labels: `Consumer device`, `TLS 1.3`, `Fanfare platform`, `Your systems`, `encrypted response`, `webhook or API call`
- Prompt: Create a security data flow diagram showing encrypted transport between Consumer device, Fanfare platform, and Your systems; use the shared Fanfare docs style.
- Public-safety note: Keep this at public security posture level; do not include network topology, controls, keys, trust boundaries, or implementation internals.

### `images/dashboard/experience-lifecycle.webp`
- Goal: Show the dashboard lifecycle from configuration through scheduled and terminal states.
- Labels: `Configure`, `Scheduled`, `Upcoming`, `Active`, `Ended`, `Killed`
- Prompt: Create an experience lifecycle diagram where Configure leads to Scheduled, then Upcoming, Active, and Ended, with Killed shown as a terminal exception state; use the shared Fanfare docs style.
- Public-safety note: Keep states public-facing; do not show admin permissions, kill triggers, operational thresholds, or internal state transitions.

## Defer Or Combine Candidates

- Consider combining `images/concepts/consumer-journey.webp` with `images/concepts/distributions/consumer-journey.webp` if the pages can tolerate one shared journey asset; the labels differ only by `Discover` versus `Join`.
- Consider combining `queue-flow.webp` and `queue-journey.webp` only if one queue asset is enough; otherwise keep both because one explains system flow and the other explains consumer state.
- Consider deferring `auction-lifecycle.webp` if reserve or extension visuals prove hard to keep public-safe; the prompt should remain conceptual and avoid thresholds.
- Consider deferring `admission-grant-lifecycle.webp` if reviewers want to avoid emphasizing grants visually; the safer checkout-flow asset can cover the public integration shape without token-like detail.
