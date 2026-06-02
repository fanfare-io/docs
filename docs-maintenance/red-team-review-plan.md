# Public Docs Red-Team Review Plan

This plan defines how to review the public Fanfare docs before customer onboarding. It focuses on customer-facing correctness, link behavior, public-safety boundaries, and rendered quality.

## Goals

- Confirm every public docs section renders and links correctly.
- Remove or flag public content that exposes internal implementation detail, anti-abuse signals, private operational behavior, or unsupported functionality.
- Keep generated API docs focused on the integration contract rather than internal service structure.
- Produce clear follow-up issues for policy-sensitive fields or product decisions that should not be resolved by docs edits alone.

## Review Lanes

| Lane | Scope | Primary risks | Reviewer output |
| --- | --- | --- | --- |
| Global navigation and chrome | `docs.json`, rendered top nav, footer, global anchors | stale external destinations, nonfunctional status/support/GitHub links, confusing duplicate Dashboard/Get Started links | broken or questionable links with recommended destination/removal |
| Documentation and Guides | `getting-started/**`, `concepts/**`, `guides/**` | stale flows, placeholders, unsupported functionality, public-sensitive implementation details, weak onboarding path | severity-ranked content and link findings |
| SDK | `sdk/**`, SDK images, examples | incorrect state model, stale i18n/theming/slots API, unsafe handling of grants/tokens, broken examples | contract drift and customer-DX findings |
| API Reference | `api/**`, `api/openapi/**`, `scripts/generate-openapi.mjs` | internal schema fields, unsafe auth examples, broken generated routes, hidden Try Now state, confusing operation labels | schema/content findings plus generator fixes where safe |
| Dashboard | `dashboard/**` | placeholder screenshots, stale UI workflow, unsupported settings/integrations, visible Coming Soon claims | image/workflow inventory and rollout-status findings |
| Resources and Security | `resources/**` | overly detailed security/abuse docs, support links, policy promises, troubleshooting leakage | public-safety findings and policy-review items |
| Draft-gated areas | `integrations/**`, `landing-pages/**`, `.mintignore`, `docs.json`, `docs.drafts.json` | draft pages leaking into public nav/search, missing rollout status, unfinished pages visible without draft mode | public/draft visibility findings |

## Global Link Checks

Initial rendered global links observed on the API reference page, and the remediation policy for this PR:

| Label | Current target | Review status |
| --- | --- | --- |
| API Status | `https://status.fanfare.io/` | Removed until a public status page is confirmed. |
| GitHub | `https://github.com/waitify-io` | Updated to the current public docs repo, `https://github.com/fanfare-io/docs`. |
| Support | `mailto:support@fanfare.io` | Updated to the internal docs support page, `/resources/support/contact`, so users stay in the docs flow first. |
| Dashboard | `https://app.fanfare.io/` | Needs product confirmation that this is the right customer dashboard destination. |
| Get Started | `https://app.fanfare.io/signup` | Needs product confirmation that public docs should send users directly to signup. |

## Agent Assignments

Run reviewers in parallel with read-only instructions first. Each reviewer should produce severity-ranked findings, exact file:line evidence, suggested fixes, and a NOT OBSERVED section.

1. Documentation and Guides reviewer
   - Scope: `getting-started/**`, `concepts/**`, `guides/**`
   - Checks: onboarding path, broken links, unsupported claims, placeholders, public-sensitive content.

2. SDK and API reviewer
   - Scope: `sdk/**`, `api/**`, `api/openapi/**`, `scripts/generate-openapi.mjs`
   - Checks: generated route behavior, schema sensitivity, auth examples, hidden Try Now, SDK examples, state/i18n/theming accuracy.

3. Dashboard and Resources reviewer
   - Scope: `dashboard/**`, `resources/**`, top/global anchors
   - Checks: placeholder images, support/security tone, stale dashboard workflows, security leakage.

4. Draft visibility reviewer
   - Scope: `.mintignore`, `docs.json`, `docs.drafts.json`, `integrations/**`, `landing-pages/**`
   - Checks: draft-only pages hidden in public mode, available/preview/roadmap language, links from public pages into hidden docs.

## Automated Gates

Run these before merging any red-team fix batch:

- `pnpm build`
- `pnpm broken-links`
- `pnpm check:openapi`
- `git diff --check`
- Static scan for public-sensitive generated fields:
  - `secretKey`
  - `botScore`
  - `deviceFingerprint`
  - `fingerprint`
  - `riskAssessment`
  - `riskScore`
  - `lastRiskAssessmentAt`
  - `valkey`
  - `db_list`
  - `sync_source`
- Browser sample of representative pages from every public tab.

## Fix Now vs Earmark

Fix immediately when:

- A link is broken or points to an obviously stale public destination.
- A public page contains `TODO: MISSING_FUNCTIONALITY`, `IMAGE_PLACEHOLDER`, or visible placeholder copy outside a draft-gated area.
- A generated API schema exposes clearly internal implementation detail or anti-abuse signals.
- A rendered page has duplicate titles, 404/500 behavior, or disabled/unsafe API playground affordances.

Earmark for review when:

- A field may be part of the customer contract but also has privacy/security implications.
- A page describes roadmap/coming-soon functionality that may be intentionally previewed.
- A support/status/dashboard destination depends on business ownership rather than docs implementation.
- A security page requires policy language or legal/compliance sign-off.

## Current Follow-Up Review Items

- ENG-908 tracks remaining policy-sensitive public API schema fields:
  - Beacon telemetry fields such as `ipAddress`, `userAgent`, and geo fields.
  - Consumer scoring fields such as `activityScore`, `purchaseFrequencyScore`, and `monetaryScore`.
  - Generic `Internal server error` wording in generated specs.
- `docs-maintenance/image-placeholders.md` tracks image and workflow placeholder replacement.
- `docs-maintenance/missing-functionality.md` tracks Coming Soon, TODO, and rollout-status drift.

## Completion Criteria

The red-team pass is complete when:

- All reviewer findings are triaged as fixed, intentionally deferred, or converted into Linear tasks.
- Global links are either verified as intended public destinations or updated/removed.
- Public mode hides draft-only integration and landing-page pages.
- API docs pass generated schema sensitivity checks and rendered sample checks.
- `pnpm build`, `pnpm broken-links`, `pnpm check:openapi`, and `git diff --check` pass.
- PR checks pass on GitHub.
