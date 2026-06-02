# Missing Functionality and Drift Inventory

Generated from a local docs scan on 2026-06-01.

This is a repository maintenance inventory for docs that are missing, marked as coming soon, or likely stale against the current SDK/API contracts. It is excluded from Mintlify publishing by `.mintignore`.

## Summary

| Category | Count |
| --- | ---: |
| Files with `TODO: MISSING_FUNCTIONALITY`, `Coming Soon`, or `coming soon` | 35 |
| Missing/coming-soon markers | 100 |
| Files with stale SDK/API pattern hits | 34 |
| Stale SDK/API pattern hits | 186 |

Scan commands:

```bash
rg -n "TODO: MISSING_FUNCTIONALITY|Coming Soon|coming soon" . -g "*.mdx"
rg -n "@fanfare/(react|sdk|solid)|@waitify-io/fanfare-sdk|cdn\\.fanfare\\.io/sdk/v1|Fanfare\\.init|renderExperience|routing_sequence|no_sequence_available|availableActions|sequenceStage|admittanceToken|admittanceExpiresAt" . -g "*.mdx"
```

## Highest-Priority Drift

| Area | Evidence | Recommended task |
| --- | --- | --- |
| SDK package names | 32 files still mention old package names or old `@fanfare/*` aliases; 34 files have stale SDK/API pattern hits overall | Rewrite remaining SDK examples to current `@fanfare-io/fanfare-sdk-*` packages |
| Public journey state | Legacy `routing_sequence`, `no_sequence_available`, `availableActions`, and raw `sequenceStage` patterns remain in older guides | Convert examples to `JourneyView`, `journeyStage`, and `view.sequence.stage` |
| Admission handoff naming | Older guides still reference `admittanceToken` / `admittanceExpiresAt` | Update to public `admissionGrant` / `admissionGrantExpiresAt` contract |
| Headless integration | `guides/integration-patterns/headless-integration.mdx` has the densest stale SDK hits | Rewrite against `initFanfare`, `sdk.journeys.get()`, `journey.view$` |
| Getting started package docs | `getting-started/installation.mdx`, `quickstart.mdx`, `configuration.mdx`, and `testing.mdx` still use old package names | Treat as one getting-started SDK cleanup PR |
| Checkout overview | `guides/checkout-integration/checkout-overview.mdx` still mixes stale SDK package names and admission fields | Align with current handoff/admission docs and checkout examples |

## Missing Functionality by Area

| Area | Files | Recommended task |
| --- | --- | --- |
| Landing pages | `landing-pages/**` | Decide which landing-page features are real now, then replace coming-soon pages with supported workflows or remove public pages |
| Third-party integrations | `integrations/analytics/**`, `integrations/marketing/**`, `integrations/webhooks/**`, `integrations/social/**`, `integrations/e-commerce/woocommerce.mdx` | Split by provider family; avoid publishing implementation claims until each provider path is confirmed |
| Payments | `integrations/payments/paypal.mdx`, `integrations/payments/stripe.mdx` | Confirm supported payment integration surface and replace placeholders with real setup steps |
| Messaging | `integrations/messaging/sendgrid.mdx` | Confirm messaging provider support and whether docs should describe direct integration or webhook-driven integration |
| SDK examples | `guides/integration-patterns/**`, `guides/use-cases/**`, `guides/authentication/**` | Refresh examples against the current SDK docs; prioritize package names and `JourneyView` before polishing |
| Dashboard integrations settings | `dashboard/settings/integrations.mdx` | Replace placeholder integrations UI once current settings surface is confirmed |

## Missing/Coming-Soon Counts by File

| Count | File |
| ---: | --- |
| 8 | `landing-pages/templates/custom-templates.mdx` |
| 7 | `landing-pages/publishing/analytics.mdx` |
| 6 | `dashboard/settings/integrations.mdx` |
| 6 | `landing-pages/publishing/domains.mdx` |
| 5 | `landing-pages/getting-started.mdx` |
| 5 | `landing-pages/publishing/preview.mdx` |
| 4 | `landing-pages/customization/countdown.mdx` |
| 4 | `landing-pages/customization/forms.mdx` |
| 4 | `landing-pages/templates/gallery.mdx` |
| 3 | `integrations/webhooks/zapier.mdx` |
| 3 | `landing-pages/customization/branding.mdx` |
| 3 | `landing-pages/customization/media.mdx` |
| 2 | `concepts/distributions/exclusive.mdx` |
| 2 | `getting-started/next-steps.mdx` |
| 2 | `integrations/analytics/google-analytics.mdx` |
| 2 | `integrations/analytics/mixpanel.mdx` |
| 2 | `integrations/analytics/segment.mdx` |
| 2 | `integrations/e-commerce/woocommerce.mdx` |
| 2 | `integrations/marketing/hubspot.mdx` |
| 2 | `integrations/marketing/klaviyo.mdx` |
| 2 | `integrations/marketing/mailchimp.mdx` |
| 2 | `integrations/messaging/sendgrid.mdx` |
| 2 | `integrations/payments/paypal.mdx` |
| 2 | `integrations/social/facebook.mdx` |
| 2 | `integrations/social/instagram.mdx` |
| 2 | `integrations/webhooks/custom-webhooks.mdx` |
| 2 | `integrations/webhooks/make.mdx` |
| 2 | `landing-pages/customization/content-blocks.mdx` |
| 2 | `landing-pages/customization/editor.mdx` |
| 2 | `landing-pages/overview.mdx` |
| 2 | `landing-pages/publishing/seo.mdx` |
| 1 | `dashboard/audiences/overview.mdx` |
| 1 | `getting-started/deployment.mdx` |
| 1 | `getting-started/first-experience.mdx` |
| 1 | `getting-started/installation.mdx` |
| 1 | `integrations/payments/stripe.mdx` |

## Stale SDK/API Pattern Counts by File

| Count | File |
| ---: | --- |
| 39 | `getting-started/installation.mdx` |
| 23 | `guides/integration-patterns/headless-integration.mdx` |
| 12 | `getting-started/quickstart.mdx` |
| 11 | `getting-started/testing.mdx` |
| 9 | `guides/authentication/anonymous-consumers.mdx` |
| 9 | `guides/checkout-integration/checkout-overview.mdx` |
| 6 | `getting-started/configuration.mdx` |
| 5 | `guides/authentication/identified-consumers.mdx` |
| 5 | `resources/best-practices/testing.mdx` |
| 4 | `getting-started/introduction.mdx` |
| 4 | `guides/authentication/consumer-linking.mdx` |
| 4 | `guides/integration-patterns/ssr-integration.mdx` |
| 5 | `guides/use-cases/appointment-booking.mdx` |
| 5 | `guides/use-cases/event-ticketing.mdx` |
| 5 | `guides/use-cases/flash-sale.mdx` |
| 5 | `guides/use-cases/product-launch.mdx` |
| 3 | `api/overview.mdx` |
| 3 | `getting-started/deployment.mdx` |
| 3 | `guides/advanced/error-handling.mdx` |
| 4 | `guides/advanced/real-time-updates.mdx` |
| 4 | `guides/use-cases/limited-edition.mdx` |
| 3 | `resources/best-practices/performance.mdx` |
| 2 | `guides/checkout-integration/cart-reservation.mdx` |
| 1 | `api/authentication.mdx` |
| 1 | `dashboard/settings/api-keys.mdx` |
| 1 | `guides/authentication/jwt-tokens.mdx` |
| 3 | `guides/integration-patterns/mobile-webview.mdx` |
| 1 | `landing-pages/customization/countdown.mdx` |
| 1 | `landing-pages/getting-started.mdx` |
| 1 | `landing-pages/publishing/analytics.mdx` |
| 1 | `landing-pages/templates/gallery.mdx` |
| 1 | `resources/support/changelog.mdx` |
| 1 | `resources/troubleshooting/common-issues.mdx` |
| 1 | `resources/troubleshooting/sdk-errors.mdx` |

## Detailed Missing/Coming-Soon Inventory

| Source | Area | Marker excerpt | Recommended action |
| --- | --- | --- | --- |
| `concepts/distributions/exclusive.mdx:174` | concepts/guides | 1. See "Coming Soon" page | classify rollout status and replace placeholder wording |
| `concepts/distributions/exclusive.mdx:280` | concepts/guides | ### Coming Soon Page | classify rollout status and replace placeholder wording |
| `getting-started/installation.mdx:256` | getting started | TODO: MISSING_FUNCTIONALITY marker | replace stale setup placeholder with current public path |
| `landing-pages/overview.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/overview.mdx:92` | landing pages | ### Coming Soon | decide live vs roadmap; rewrite or hide from public nav |
| `getting-started/deployment.mdx:109` | getting started | TODO: MISSING_FUNCTIONALITY marker | replace stale setup placeholder with current public path |
| `landing-pages/getting-started.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/getting-started.mdx:14` | landing pages | **Coming Soon** | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/getting-started.mdx:50` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/getting-started.mdx:62` | landing pages | Landing Page (coming soon) | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/getting-started.mdx:95` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/templates/gallery.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/templates/gallery.mdx:14` | landing pages | **Coming Soon** | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/templates/gallery.mdx:279` | landing pages | ## Industry-Specific Templates (Coming Soon) | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/templates/gallery.mdx:281` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/analytics.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/analytics.mdx:14` | landing pages | **Coming Soon** | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/analytics.mdx:110` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/analytics.mdx:268` | landing pages | ### Funnel Analysis (Coming Soon) | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/analytics.mdx:270` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/analytics.mdx:286` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/analytics.mdx:313` | landing pages | ## Analytics Dashboard (Coming Soon) | decide live vs roadmap; rewrite or hide from public nav |
| `getting-started/next-steps.mdx:92` | getting started | TODO: MISSING_FUNCTIONALITY marker | replace stale setup placeholder with current public path |
| `getting-started/next-steps.mdx:98` | getting started | <Callout type="info">Example projects are coming soon. Check the [changelog](/changelog) for updates.</Callout> | replace stale setup placeholder with current public path |
| `landing-pages/templates/custom-templates.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/templates/custom-templates.mdx:14` | landing pages | **Coming Soon** | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/templates/custom-templates.mdx:56` | landing pages | ## Creating Custom Templates (Coming Soon) | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/templates/custom-templates.mdx:58` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/templates/custom-templates.mdx:124` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/templates/custom-templates.mdx:225` | landing pages | // Import endpoint (coming soon) | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/templates/custom-templates.mdx:266` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/templates/custom-templates.mdx:331` | landing pages | ## Template API (Coming Soon) | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/preview.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/preview.mdx:82` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/preview.mdx:89` | landing pages | <Info>Shareable preview links are coming soon. Until then, use screen recordings or arrange live demo sessions.</Info> | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/preview.mdx:229` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/preview.mdx:244` | landing pages | ### Coming Soon | decide live vs roadmap; rewrite or hide from public nav |
| `integrations/analytics/mixpanel.mdx:8` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/analytics/mixpanel.mdx:14` | integrations | <Callout type="warning">**Coming Soon**: Mixpanel integration is planned for a future release.</Callout> | confirm provider support; rewrite as supported setup or roadmap |
| `landing-pages/customization/media.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/media.mdx:225` | landing pages | ### Upload Management (Coming Soon) | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/media.mdx:227` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/branding.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/branding.mdx:74` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/branding.mdx:98` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/domains.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/domains.mdx:14` | landing pages | **Coming Soon** | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/domains.mdx:42` | landing pages | ## Custom Domains (Coming Soon) | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/domains.mdx:44` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/domains.mdx:101` | landing pages | ### Custom Domains (Coming Soon) | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/domains.mdx:153` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `integrations/marketing/mailchimp.mdx:8` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/marketing/mailchimp.mdx:14` | integrations | <Callout type="warning">**Coming Soon**: The Mailchimp integration is under development.</Callout> | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/analytics/segment.mdx:8` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/analytics/segment.mdx:14` | integrations | <Callout type="warning">**Coming Soon**: Segment integration is planned for a future release.</Callout> | confirm provider support; rewrite as supported setup or roadmap |
| `landing-pages/customization/countdown.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/countdown.mdx:18` | landing pages | 2. **Countdown Section** - Standalone countdown block for landing pages (coming soon) | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/countdown.mdx:52` | landing pages | ## Countdown Section (Coming Soon) | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/countdown.mdx:54` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/content-blocks.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/content-blocks.mdx:14` | landing pages | **Coming Soon** | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/seo.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/publishing/seo.mdx:205` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `integrations/payments/stripe.mdx:261` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/analytics/google-analytics.mdx:8` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/analytics/google-analytics.mdx:14` | integrations | <Callout type="warning">**Coming Soon**: Google Analytics integration is planned for a future release.</Callout> | confirm provider support; rewrite as supported setup or roadmap |
| `landing-pages/customization/editor.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/editor.mdx:203` | landing pages | - Background images (coming soon) | decide live vs roadmap; rewrite or hide from public nav |
| `integrations/marketing/hubspot.mdx:8` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/marketing/hubspot.mdx:14` | integrations | <Callout type="warning">**Coming Soon**: The HubSpot integration is under development.</Callout> | confirm provider support; rewrite as supported setup or roadmap |
| `landing-pages/customization/forms.mdx:6` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/forms.mdx:14` | landing pages | **Coming Soon** | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/forms.mdx:243` | landing pages | ## Coming Soon: Custom Forms | decide live vs roadmap; rewrite or hide from public nav |
| `landing-pages/customization/forms.mdx:245` | landing pages | TODO: MISSING_FUNCTIONALITY marker | decide live vs roadmap; rewrite or hide from public nav |
| `integrations/payments/paypal.mdx:8` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/payments/paypal.mdx:14` | integrations | <Callout type="warning">**Coming Soon**: PayPal integration is planned for a future release.</Callout> | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/marketing/klaviyo.mdx:109` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/marketing/klaviyo.mdx:300` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/e-commerce/woocommerce.mdx:8` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/e-commerce/woocommerce.mdx:14` | integrations | <Callout type="warning">**Coming Soon**: The WooCommerce integration is under development.</Callout> | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/social/instagram.mdx:187` | integrations | "caption": "Exciting new drop coming soon! #launch #exclusive" | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/social/instagram.mdx:390` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `dashboard/settings/integrations.mdx:34` | dashboard | ### Coming Soon | align settings UI docs with supported integrations |
| `dashboard/settings/integrations.mdx:38` | dashboard | / **Mailchimp** / Marketing / Coming Soon / | align settings UI docs with supported integrations |
| `dashboard/settings/integrations.mdx:39` | dashboard | / **Segment** / CDP / Coming Soon / | align settings UI docs with supported integrations |
| `dashboard/settings/integrations.mdx:40` | dashboard | / **HubSpot** / CRM / Coming Soon / | align settings UI docs with supported integrations |
| `dashboard/settings/integrations.mdx:41` | dashboard | / **Salesforce** / CRM / Coming Soon / | align settings UI docs with supported integrations |
| `dashboard/settings/integrations.mdx:52` | dashboard | / **Coming Soon** / Not yet available / | align settings UI docs with supported integrations |
| `integrations/messaging/sendgrid.mdx:8` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/messaging/sendgrid.mdx:14` | integrations | <Callout type="warning">**Coming Soon**: SendGrid integration is planned for a future release.</Callout> | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/webhooks/make.mdx:8` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/webhooks/make.mdx:14` | integrations | <Callout type="warning">**Coming Soon**: The Make integration is under development.</Callout> | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/webhooks/zapier.mdx:8` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/webhooks/zapier.mdx:14` | integrations | <Callout type="warning">**Coming Soon**: The Zapier integration is under development.</Callout> | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/webhooks/zapier.mdx:68` | integrations | 1. Use [Custom Webhooks](/integrations/webhooks/custom-webhooks) (coming soon) | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/social/facebook.mdx:8` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/social/facebook.mdx:14` | integrations | <Callout type="warning">**Coming Soon**: Direct Facebook Page integration is planned for a future release.</Callout> | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/webhooks/custom-webhooks.mdx:8` | integrations | TODO: MISSING_FUNCTIONALITY marker | confirm provider support; rewrite as supported setup or roadmap |
| `integrations/webhooks/custom-webhooks.mdx:15` | integrations | **Coming Soon**: Custom webhook configuration is under development. This page documents the planned functionality. | confirm provider support; rewrite as supported setup or roadmap |
| `dashboard/audiences/overview.mdx:270` | dashboard | Additional integrations coming soon: | align settings UI docs with supported integrations |

## Recommended Linear Task Grouping

Create grouped tasks rather than one ticket per file:

1. SDK getting-started package and state-model cleanup.
2. Headless / SSR / SPA / mobile integration pattern cleanup.
3. Checkout and admission handoff cleanup.
4. Use-case example cleanup for product launch, flash sale, appointment booking, event ticketing, and limited edition flows.
5. Landing page docs rollout decision and rewrite.
6. Third-party integration provider docs rollout decision and rewrite.
7. Dashboard screenshot and generated-image replacement pass.

## Verification Gates

- Source-of-truth check against `fanfare-mono` package names and exported SDK types.
- `rg` scans above should show reduced or intentional remaining hits after each cleanup PR.
- `pnpm build` must pass.
- `pnpm broken-links` must pass.
- Public safety review should confirm docs do not expose private enforcement details, thresholds, internal scoring mechanics, or customer data.
