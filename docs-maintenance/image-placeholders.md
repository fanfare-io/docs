# Image and Diagram Inventory

Generated from a local docs scan on 2026-06-01.

This is a repository maintenance inventory for replacing placeholder screenshots, adding workflow diagrams, and deciding where generated docs imagery should be used. It is excluded from Mintlify publishing by `.mintignore`.

## Summary

| Category | Count |
| --- | ---: |
| Files with `IMAGE_PLACEHOLDER` blocks | 31 |
| `IMAGE_PLACEHOLDER` blocks | 153 |
| Existing generated SDK images | 7 |
| Files with diagram/workflow-looking text | 67 |

Scan commands:

```bash
rg -n "IMAGE_PLACEHOLDER" . -g "*.mdx"
rg -n "[─│┌┐└┘├┤┬┴┼→←↑↓]|workflow|state model|decision tree|diagram" . -g "*.mdx"
find images -maxdepth 3 -type f | sort
```

## Existing Generated Images

These are already present under `images/sdk/` and should be treated as the style reference for future diagrams.

| Asset | Likely page |
| --- | --- |
| `images/sdk/choose-your-path-workflow.webp` | SDK path selection |
| `images/sdk/component-layering.webp` | Component layering |
| `images/sdk/gates-auth-flow.webp` | Gates and auth |
| `images/sdk/journey-state-model.webp` | Journey state |
| `images/sdk/public-contract-boundary.webp` | Public/private contract boundary |
| `images/sdk/sdk-mental-model.webp` | SDK mental model |
| `images/sdk/testing-workflow.webp` | SDK testing workflow |

## Highest-Value Diagram Candidates

These should be handled before broad screenshot replacement because they improve comprehension without requiring a live dashboard screenshot pass.

| Area | Candidate | Suggested asset |
| --- | --- | --- |
| SDK / integration choice | Existing choose-your-path workflow | Keep current asset; verify placement and sizing on first SDK page |
| SDK / state model | `sdk/core/journey-state.mdx` | Already has image; use as style baseline |
| SDK / gates | `sdk/core/gates-and-auth.mdx` | Already has image; use as style baseline |
| Experience routing | `concepts/experiences.mdx` sequence examples | Decision tree for sequence priority and eligibility |
| Audience routing | `concepts/audiences.mdx` access-path eligibility | Simple flow: consumer -> access path -> audience/access code -> distribution |
| Distribution timing | `dashboard/experiences/experience-lifecycle.mdx` | Diagram for distribution-derived timing states |
| Platform integration | Shopify / WooCommerce / custom platform guides | Client -> SDK -> admission grant -> cart/checkout handoff |
| Landing pages | `landing-pages/getting-started.mdx` | Creation and publishing workflow once feature docs are real |

## Placeholder Counts by File

| Count | File |
| ---: | --- |
| 11 | `dashboard/getting-started.mdx` |
| 9 | `dashboard/audiences/import-consumers.mdx` |
| 9 | `dashboard/experiences/overview.mdx` |
| 8 | `dashboard/audiences/overview.mdx` |
| 8 | `dashboard/experiences/configure-appointment.mdx` |
| 8 | `dashboard/experiences/create-experience.mdx` |
| 8 | `dashboard/experiences/experience-analytics.mdx` |
| 8 | `dashboard/overview.mdx` |
| 7 | `dashboard/billing/overview.mdx` |
| 7 | `dashboard/experiences/configure-auction.mdx` |
| 6 | `dashboard/audiences/create-audience.mdx` |
| 6 | `dashboard/audiences/membership-rules.mdx` |
| 5 | `dashboard/analytics/overview.mdx` |
| 5 | `dashboard/experiences/configure-lottery.mdx` |
| 5 | `dashboard/experiences/configure-queue.mdx` |
| 5 | `dashboard/settings/branding.mdx` |
| 4 | `dashboard/consumers/consumer-activity.mdx` |
| 4 | `dashboard/consumers/consumer-details.mdx` |
| 4 | `dashboard/settings/integrations.mdx` |
| 4 | `dashboard/settings/organization.mdx` |
| 3 | `dashboard/analytics/reports.mdx` |
| 3 | `dashboard/consumers/overview.mdx` |
| 3 | `dashboard/settings/api-keys.mdx` |
| 3 | `dashboard/settings/team-members.mdx` |
| 3 | `getting-started/deployment.mdx` |
| 2 | `dashboard/settings/overview.mdx` |
| 1 | `getting-started/configuration.mdx` |
| 1 | `getting-started/first-experience.mdx` |
| 1 | `getting-started/introduction.mdx` |
| 1 | `getting-started/quickstart.mdx` |
| 1 | `getting-started/testing.mdx` |

## Detailed Placeholder Inventory

| Source | Asset kind | Target page or component | What it needs to show | Annotation notes |
| --- | --- | --- | --- | --- |
| `getting-started/first-experience.mdx:18` | sanitized screenshot | Fanfare Dashboard - Create Experience | The experience creation form with name, description, and type selection | - |
| `getting-started/quickstart.mdx:169` | sanitized screenshot | QueueWidget in waiting state | The default queue widget showing position and estimated wait time | - |
| `getting-started/testing.mdx:223` | sanitized screenshot | Fanfare Dashboard - Test Environment Toggle | How to switch between test and live environments in the dashboard | - |
| `getting-started/deployment.mdx:123` | sanitized screenshot | Fanfare Dashboard - Webhook Configuration | The webhook setup page with endpoint URL and event selection | - |
| `getting-started/deployment.mdx:216` | sanitized screenshot | Fanfare Dashboard - Domain Settings | The domain allowlist configuration | - |
| `getting-started/deployment.mdx:475` | sanitized screenshot | Fanfare Dashboard - Analytics Overview | The main analytics dashboard with key metrics | - |
| `dashboard/analytics/reports.mdx:41` | sanitized screenshot | /app/reports or analytics section | Report generation interface with options | Label the report type selector and parameters |
| `dashboard/analytics/reports.mdx:85` | sanitized screenshot | Report date picker | Custom date range selector with calendar | Highlight start and end date fields |
| `dashboard/analytics/reports.mdx:170` | sanitized screenshot | Report scheduling dialog | Schedule configuration with frequency and delivery options | Label frequency and delivery method fields |
| `dashboard/experiences/configure-lottery.mdx:26` | sanitized screenshot | /app/experiences/create?type=DRAW | Draw creation form with all fields visible | Number the main sections of the form |
| `dashboard/experiences/configure-lottery.mdx:43` | sanitized screenshot | /app/experiences/create?type=DRAW | Entry period configuration section | Label entry start, entry end, and draw time fields |
| `dashboard/experiences/configure-lottery.mdx:66` | sanitized screenshot | /app/experiences/create?type=DRAW | Draw configuration section | Label number of winners and selection method |
| `dashboard/experiences/configure-lottery.mdx:113` | sanitized screenshot | /app/experiences/{experienceId} | Draw results showing winners and alternates | Highlight winner list and status indicators |
| `dashboard/experiences/configure-lottery.mdx:223` | sanitized screenshot | /app/experiences/{experienceId} | Example draw experience detail page | None needed |
| `getting-started/introduction.mdx:153` | sanitized screenshot | Fanfare Dashboard - API Keys section | Location of organizationId and publishableKey in the dashboard settings | - |
| `getting-started/configuration.mdx:99` | sanitized screenshot | Fanfare Dashboard - API Keys settings | Where to find organizationId and publishableKey | - |
| `dashboard/analytics/overview.mdx:20` | sanitized screenshot | /app/dashboard | Dashboard analytics panel with key metrics and charts | Label the main metric cards and chart areas |
| `dashboard/analytics/overview.mdx:42` | sanitized screenshot | /app/dashboard | KPI metric cards at top of dashboard | Highlight each metric card |
| `dashboard/analytics/overview.mdx:86` | sanitized screenshot | /app/dashboard | Time period selector dropdown | Show the available options |
| `dashboard/analytics/overview.mdx:131` | sanitized screenshot | /app/dashboard | Entry timeline chart | Highlight trend line and data points |
| `dashboard/analytics/overview.mdx:171` | sanitized screenshot | /app/dashboard | Experience calendar with scheduled events | Highlight different experience types by color |
| `dashboard/experiences/create-experience.mdx:16` | sanitized screenshot | /app/experiences/create | Experience creation page with type selection | Highlight the four type options |
| `dashboard/experiences/create-experience.mdx:42` | sanitized screenshot | /app/experiences/create | Basic information section of the form | Label each field |
| `dashboard/experiences/create-experience.mdx:63` | sanitized screenshot | /app/experiences/create | Product selector dropdown or search field | Show the product dropdown expanded |
| `dashboard/experiences/create-experience.mdx:87` | sanitized screenshot | /app/experiences/create | Audience selector with dropdown options | Show audience dropdown |
| `dashboard/experiences/create-experience.mdx:113` | sanitized screenshot | /app/experiences/create | Date/time pickers for start and end dates | Label start date, end date, and time zone |
| `dashboard/experiences/create-experience.mdx:136` | sanitized screenshot | /app/experiences/create | Inventory configuration fields | Label quantity and limit fields |
| `dashboard/experiences/create-experience.mdx:168` | sanitized screenshot | /app/experiences/create | Form with validation errors displayed | Point to error messages |
| `dashboard/experiences/create-experience.mdx:187` | sanitized screenshot | /app/experiences/create | Bottom of form with Create Experience button | Highlight the Create button |
| `dashboard/settings/api-keys.mdx:14` | sanitized screenshot | /app/settings/api-keys or developer section | API keys management interface | Highlight the create key button and key list |
| `dashboard/settings/api-keys.mdx:44` | sanitized screenshot | API key creation dialog | Create API key form with name and type fields | Label the form fields |
| `dashboard/settings/api-keys.mdx:99` | sanitized screenshot | API keys list | Key row with action menu expanded | Show action options |
| `dashboard/settings/overview.mdx:14` | sanitized screenshot | /app/settings | Settings index page with section cards | Label each settings section |
| `dashboard/settings/overview.mdx:46` | sanitized screenshot | /app/settings | Individual settings card | Label card components |
| `dashboard/experiences/configure-auction.mdx:26` | sanitized screenshot | /app/experiences/create?type=AUCTION | Auction creation form with all fields visible | Number the main sections of the form |
| `dashboard/experiences/configure-auction.mdx:49` | sanitized screenshot | /app/experiences/create?type=AUCTION | Auction type selector | Label each auction type option |
| `dashboard/experiences/configure-auction.mdx:62` | sanitized screenshot | /app/experiences/create?type=AUCTION | Pricing configuration section | Label reserve price, starting bid, and bid increment fields |
| `dashboard/experiences/configure-auction.mdx:105` | sanitized screenshot | /app/experiences/create?type=AUCTION | Soft close configuration | Label extension settings |
| `dashboard/experiences/configure-auction.mdx:128` | sanitized screenshot | /app/settings/payments | Stripe connect section showing connected status | Highlight the connection status |
| `dashboard/experiences/configure-auction.mdx:158` | sanitized screenshot | /app/experiences/create?type=AUCTION | Bidder requirements section | None needed |
| `dashboard/experiences/configure-auction.mdx:249` | sanitized screenshot | /app/experiences/{experienceId} | Example auction experience detail page | None needed |
| `dashboard/settings/integrations.mdx:14` | sanitized screenshot | /app/settings/integrations | Integrations grid showing available and connected integrations | Label active and available integrations |
| `dashboard/settings/integrations.mdx:54` | sanitized screenshot | /app/settings/integrations | Integration card with status badge | Highlight the status indicator |
| `dashboard/settings/integrations.mdx:85` | sanitized screenshot | /app/settings/integrations (Klaviyo sheet) | Klaviyo configuration sheet with API key field | Highlight the API key input |
| `dashboard/settings/integrations.mdx:168` | sanitized screenshot | /app/audiences | Audience with Klaviyo sync source indicator | Highlight the sync source badge |
| `dashboard/settings/branding.mdx:14` | sanitized screenshot | /app/settings/brand | Brand settings form with logo upload and color options | Label the main sections |
| `dashboard/settings/branding.mdx:36` | sanitized screenshot | /app/settings/brand | Color picker for brand colors | Highlight color selection options |
| `dashboard/settings/branding.mdx:77` | sanitized screenshot | /app/settings/brand | Logo upload area with preview | Highlight upload zone and preview |
| `dashboard/settings/branding.mdx:122` | sanitized screenshot | /app/settings/brand | Email settings section with sender fields | Label each email field |
| `dashboard/settings/branding.mdx:205` | sanitized screenshot | /app/settings/brand | Preview panel showing branded experience | Highlight the preview area |
| `dashboard/experiences/configure-appointment.mdx:26` | sanitized screenshot | /app/experiences/create?type=APPOINTMENT | Appointment creation form with all fields visible | Number the main sections of the form |
| `dashboard/experiences/configure-appointment.mdx:43` | sanitized screenshot | /app/experiences/create?type=APPOINTMENT | Schedule configuration section | Label date range, time slots, and recurring options |
| `dashboard/experiences/configure-appointment.mdx:64` | sanitized screenshot | /app/experiences/create?type=APPOINTMENT | Time slot settings | Label slot duration, start times, and buffer settings |
| `dashboard/experiences/configure-appointment.mdx:93` | sanitized screenshot | /app/experiences/create?type=APPOINTMENT | Weekly schedule grid | Show different days with different availability |
| `dashboard/experiences/configure-appointment.mdx:116` | sanitized screenshot | /app/experiences/create?type=APPOINTMENT | Location selection or configuration | None needed |
| `dashboard/experiences/configure-appointment.mdx:152` | sanitized screenshot | /app/experiences/create?type=APPOINTMENT | Cancellation and rescheduling settings | Label cancellation window and rescheduling toggle |
| `dashboard/experiences/configure-appointment.mdx:263` | sanitized screenshot | /app/experiences/{experienceId} | Example appointment experience detail page | None needed |
| `dashboard/experiences/configure-appointment.mdx:280` | sanitized screenshot | /app/experiences/{experienceId} | Calendar view of appointments | Show booked and available slots |
| `dashboard/experiences/overview.mdx:14` | sanitized screenshot | /app/experiences | Experiences list with multiple experiences in different states (draft, active, completed) | Highlight the Create Experience button and status indicators |
| `dashboard/experiences/overview.mdx:36` | sanitized screenshot | /app/experiences | Empty state with four experience type cards | Label each card with the experience type |
| `dashboard/experiences/overview.mdx:69` | sanitized screenshot | /app/experiences | Experiences table with search field active and sorting applied | Highlight search field and sortable column headers |
| `dashboard/experiences/overview.mdx:91` | sanitized screenshot | /app/experiences | Experiences with different status badges visible | Circle different status badges |
| `dashboard/experiences/overview.mdx:144` | sanitized screenshot | /app/experiences/{experienceId} | Experience detail page with header, timeline, and sections | Label the main sections (Header, Timeline, Section Cards, Sequences) |
| `dashboard/experiences/overview.mdx:167` | sanitized screenshot | /app/experiences/{experienceId}/design | Design studio interface with theme customization | None needed |
| `dashboard/experiences/overview.mdx:194` | sanitized screenshot | /app/experiences/{experienceId}/settings | Settings page with SDK integration panel | Highlight the code snippet section |
| `dashboard/experiences/overview.mdx:212` | sanitized screenshot | /app/experiences/{experienceId} | Sequences table with multiple sequences | Highlight priority numbers and add sequence button |
| `dashboard/experiences/overview.mdx:238` | sanitized screenshot | /app/experiences/{experienceId} | Delete confirmation dialog | Highlight the confirm button |
| `dashboard/billing/overview.mdx:14` | sanitized screenshot | /app/billing | Billing page with current plan and usage metrics | Label the plan card, usage section, and management options |
| `dashboard/billing/overview.mdx:38` | sanitized screenshot | /app/billing | Current plan card with details | Highlight plan name and price |
| `dashboard/billing/overview.mdx:68` | sanitized screenshot | /app/billing | Trial banner with countdown | Highlight days remaining and upgrade button |
| `dashboard/billing/overview.mdx:93` | sanitized screenshot | /app/billing | Usage breakdown cards with progress bars | Highlight usage percentages and limits |
| `dashboard/billing/overview.mdx:124` | sanitized screenshot | /app/billing/usage | Detailed usage charts by metric | Highlight the time period selector and charts |
| `dashboard/billing/overview.mdx:147` | sanitized screenshot | /app/billing | Payment method section showing card details | Highlight last 4 digits and manage button |
| `dashboard/billing/overview.mdx:268` | sanitized screenshot | /app/billing | Cancellation section with cancel button | Highlight the cancel option |
| `dashboard/experiences/experience-analytics.mdx:17` | sanitized screenshot | /app/dashboard | Dashboard analytics panel with key metrics | Label the main metric cards |
| `dashboard/experiences/experience-analytics.mdx:59` | sanitized screenshot | /app/experiences/{experienceId} | Queue-specific analytics dashboard | Highlight queue position chart and completion funnel |
| `dashboard/experiences/experience-analytics.mdx:89` | sanitized screenshot | /app/experiences/{experienceId} | Queue funnel visualization | Show conversion rates between stages |
| `dashboard/experiences/experience-analytics.mdx:110` | sanitized screenshot | /app/experiences/{experienceId} | Draw-specific analytics | Highlight entry timeline and winner confirmation stats |
| `dashboard/experiences/experience-analytics.mdx:141` | sanitized screenshot | /app/experiences/{experienceId} | Auction-specific analytics with bid history | Highlight bid chart and price progression |
| `dashboard/experiences/experience-analytics.mdx:174` | sanitized screenshot | /app/experiences/{experienceId} | Appointment-specific analytics | Highlight booking calendar and utilization chart |
| `dashboard/experiences/experience-analytics.mdx:216` | sanitized screenshot | /app/dashboard | Time period selector | Show dropdown options |
| `dashboard/experiences/experience-analytics.mdx:252` | sanitized screenshot | /app/experiences/{experienceId} | Export options dialog | Show format and date range options |
| `dashboard/overview.mdx:14` | sanitized screenshot | /app/dashboard | Full dashboard view with sidebar navigation visible, analytics panels, and experiences calendar | Highlight sidebar navigation, main content area, and user menu |
| `dashboard/overview.mdx:44` | sanitized screenshot | /app/dashboard | Sidebar in both expanded and collapsed states (side by side comparison) | Highlight the sidebar trigger button |
| `dashboard/overview.mdx:64` | sanitized screenshot | /app/dashboard | Analytics panel toggle between "Attribution" and "Segmentation" views | Highlight the view toggle buttons |
| `dashboard/overview.mdx:92` | sanitized screenshot | /app/dashboard | Experiences calendar showing multiple experiences across different dates | Point out experience status indicators and date navigation |
| `dashboard/overview.mdx:111` | sanitized screenshot | /app/dashboard | Empty state with quick action cards for creating experiences, audiences, and products | None needed |
| `dashboard/overview.mdx:129` | sanitized screenshot | /app/experiences | Title bar with breadcrumbs showing "Experiences" | Label the title and breadcrumb elements |
| `dashboard/overview.mdx:149` | sanitized screenshot | /app/dashboard | User menu expanded showing account options | Highlight sign out and organization options |
| `dashboard/overview.mdx:164` | sanitized screenshot | /app/dashboard | Alert banner showing a subscription warning (e.g., trial ending soon) | None needed |
| `dashboard/settings/organization.mdx:14` | sanitized screenshot | /app/settings/organization | Organization settings form with fields | Label the form sections |
| `dashboard/settings/organization.mdx:36` | sanitized screenshot | /app/settings/organization | Company details section of the form | Highlight the company name field |
| `dashboard/settings/organization.mdx:86` | sanitized screenshot | /app/settings/organization | Timezone selector dropdown | Show the dropdown options |
| `dashboard/settings/organization.mdx:121` | sanitized screenshot | /app/settings/organization | Save and Cancel buttons at form bottom | Highlight the Save button |
| `dashboard/audiences/create-audience.mdx:16` | sanitized screenshot | /app/audiences/create | Audience creation form with initial fields | Highlight the form sections |
| `dashboard/audiences/create-audience.mdx:37` | sanitized screenshot | /app/audiences/create | Basic information fields filled in | Label each field |
| `dashboard/audiences/create-audience.mdx:89` | sanitized screenshot | /app/audiences/create | Dynamic audience with rules being configured | Highlight the rule builder |
| `dashboard/audiences/create-audience.mdx:118` | sanitized screenshot | /app/audiences/create | Rule builder with multiple conditions | Label field, operator, value, and logic components |
| `dashboard/audiences/create-audience.mdx:137` | sanitized screenshot | /app/audiences/create | Static audience with member search | Show search field and add button |
| `dashboard/audiences/create-audience.mdx:193` | sanitized screenshot | /app/audiences/create | Bottom of form with Create button | Highlight the Create button |
| `dashboard/experiences/configure-queue.mdx:25` | sanitized screenshot | /app/experiences/create?type=QUEUE | Queue creation form with all fields visible | Number the main sections of the form |
| `dashboard/experiences/configure-queue.mdx:50` | sanitized screenshot | /app/experiences/create?type=QUEUE | Entry window configuration section | Label start time, end time fields |
| `dashboard/experiences/configure-queue.mdx:81` | sanitized screenshot | /app/experiences/create?type=QUEUE | Inventory settings section | Label quantity fields |
| `dashboard/experiences/configure-queue.mdx:107` | sanitized screenshot | /app/experiences/create?type=QUEUE | Timeout configuration fields | None needed |
| `dashboard/experiences/configure-queue.mdx:209` | sanitized screenshot | /app/experiences/{experienceId} | Example queue experience detail page with the above configuration | None needed |
| `dashboard/settings/team-members.mdx:14` | sanitized screenshot | /app/settings/organization | Team members section or link to team management | Highlight the team members link |
| `dashboard/settings/team-members.mdx:63` | sanitized screenshot | Team management interface | Invite member dialog with email and role fields | Label the email field and role selector |
| `dashboard/settings/team-members.mdx:105` | sanitized screenshot | Team management interface | Team members list with multiple users | Highlight role badges and action menus |
| `dashboard/getting-started.mdx:18` | sanitized screenshot | /auth/sign-in | Sign-in form with email and password fields | None needed |
| `dashboard/getting-started.mdx:33` | sanitized screenshot | /auth/organization-setup | Organization setup wizard | Highlight required fields |
| `dashboard/getting-started.mdx:55` | sanitized screenshot | /app/dashboard | Empty dashboard state with quick actions | Point to the three quick action cards |
| `dashboard/getting-started.mdx:80` | sanitized screenshot | /app/settings/organization | Organization settings form with fields filled in | Highlight save button |
| `dashboard/getting-started.mdx:101` | sanitized screenshot | /app/settings/brand | Brand settings form showing color pickers and logo upload | Highlight theme color options |
| `dashboard/getting-started.mdx:130` | sanitized screenshot | /app/products/create | Product creation form | Highlight required fields (name, description) |
| `dashboard/getting-started.mdx:159` | sanitized screenshot | /app/audiences/create | Audience creation form with rule builder | Highlight rule configuration section |
| `dashboard/getting-started.mdx:188` | sanitized screenshot | /app/experiences/create | Experience type selection cards | Highlight the four experience type options |
| `dashboard/getting-started.mdx:209` | sanitized screenshot | /app/experiences/create?type=QUEUE | Queue creation form with all fields | Number the steps in the form |
| `dashboard/getting-started.mdx:233` | sanitized screenshot | /app/billing/plans | Pricing plans comparison | None needed |
| `dashboard/getting-started.mdx:256` | sanitized screenshot | /app/settings/integrations | Integrations grid showing available connections | None needed |
| `dashboard/audiences/import-consumers.mdx:25` | sanitized screenshot | /app/audiences/import | Import wizard starting screen | Highlight file upload area |
| `dashboard/audiences/import-consumers.mdx:87` | sanitized screenshot | /app/audiences/import | File upload step with drag-drop zone | Show the drop zone and browse button |
| `dashboard/audiences/import-consumers.mdx:107` | sanitized screenshot | /app/audiences/import | Field mapping interface | Show column mapping dropdowns |
| `dashboard/audiences/import-consumers.mdx:128` | sanitized screenshot | /app/audiences/import | Audience configuration options | Label each option |
| `dashboard/audiences/import-consumers.mdx:146` | sanitized screenshot | /app/audiences/import | Import review summary | Highlight row count and validation status |
| `dashboard/audiences/import-consumers.mdx:165` | sanitized screenshot | /app/audiences/import | Import progress view | Show progress bar and counts |
| `dashboard/audiences/import-consumers.mdx:194` | sanitized screenshot | /app/audiences/import | Duplicate handling options | Label each option |
| `dashboard/audiences/import-consumers.mdx:222` | sanitized screenshot | /app/audiences/import/klaviyo | Klaviyo list selection | Show list dropdown and sync options |
| `dashboard/audiences/import-consumers.mdx:269` | sanitized screenshot | /app/audiences/import | Import results with error download option | Highlight the download errors button |
| `dashboard/consumers/consumer-details.mdx:14` | sanitized screenshot | /app/customers/{customerId} | Consumer detail page with header and metrics cards | Label the main sections (header, metrics grid, timeline) |
| `dashboard/consumers/consumer-details.mdx:50` | sanitized screenshot | /app/customers/{customerId} | RFM radar chart in the header | Label the three dimensions |
| `dashboard/consumers/consumer-details.mdx:73` | sanitized screenshot | /app/customers/{customerId} | Customer value metric card | Highlight LTV amount and percentile bar |
| `dashboard/consumers/consumer-details.mdx:201` | sanitized screenshot | /app/customers/{customerId} | Sync source information on consumer detail | Highlight sync status and source |
| `dashboard/audiences/membership-rules.mdx:19` | sanitized screenshot | /app/audiences/{audienceId} | Rules tab on audience detail page showing configured rules | Label the rule components |
| `dashboard/audiences/membership-rules.mdx:40` | sanitized screenshot | /app/audiences/create | Single rule being configured with field, operator, and value | Label each component |
| `dashboard/audiences/membership-rules.mdx:162` | sanitized screenshot | /app/audiences/create | Multiple rules combined with AND logic | Highlight AND indicator between rules |
| `dashboard/audiences/membership-rules.mdx:185` | sanitized screenshot | /app/audiences/create | Multiple rules combined with OR logic | Highlight OR indicator between rules |
| `dashboard/audiences/membership-rules.mdx:212` | sanitized screenshot | /app/audiences/create | Rules organized into groups | Show group containers and logic between groups |
| `dashboard/audiences/membership-rules.mdx:297` | sanitized screenshot | /app/audiences/create | Rule preview showing matching consumers | Highlight the preview count and sample list |
| `dashboard/audiences/overview.mdx:14` | sanitized screenshot | /app/audiences | Audiences list with multiple audiences showing different types and member counts | Highlight the Create button and audience type indicators |
| `dashboard/audiences/overview.mdx:37` | sanitized screenshot | /app/audiences | Empty state with audience creation options | Label each creation option |
| `dashboard/audiences/overview.mdx:73` | sanitized screenshot | /app/audiences | Audiences table with actions menu expanded on one row | Highlight the actions menu |
| `dashboard/audiences/overview.mdx:92` | sanitized screenshot | /app/audiences/{audienceId} | Audience detail showing group membership | Highlight the group indicator |
| `dashboard/audiences/overview.mdx:114` | sanitized screenshot | /app/audiences | Create button dropdown showing all options | None needed |
| `dashboard/audiences/overview.mdx:155` | sanitized screenshot | /app/audiences/{audienceId} | Audience detail page with tabs visible | Label the Overview, Members, and Rules tabs |
| `dashboard/audiences/overview.mdx:183` | sanitized screenshot | /app/experiences/create | Audience selector in experience form with multiple selections | Show the multi-select behavior |
| `dashboard/audiences/overview.mdx:218` | sanitized screenshot | /app/audiences/{audienceId} | Delete confirmation dialog | Highlight warning about deletion impact |
| `dashboard/consumers/overview.mdx:14` | sanitized screenshot | /app/customers | Consumers list with multiple consumer records showing names, emails, and status | Highlight the Create button and search functionality |
| `dashboard/consumers/overview.mdx:47` | sanitized screenshot | /app/customers | Search bar with search results | Highlight the search input field |
| `dashboard/consumers/overview.mdx:75` | sanitized screenshot | /app/customers/create | Consumer creation form with fields | Label the form fields |
| `dashboard/consumers/consumer-activity.mdx:14` | sanitized screenshot | /app/customers/{customerId} | Activity timeline section showing various events | Label event types and timestamps |
| `dashboard/consumers/consumer-activity.mdx:53` | sanitized screenshot | /app/customers/{customerId} | Expanded timeline event with details | Highlight event components |
| `dashboard/consumers/consumer-activity.mdx:117` | sanitized screenshot | /app/customers/{customerId} | Timeline filter dropdown | Show filter options |
| `dashboard/consumers/consumer-activity.mdx:164` | sanitized screenshot | /app/customers/{customerId} | Purchase event in timeline | Highlight order details and amount |

## Recommended Task Grouping

1. SDK and concept diagrams: keep these as generated WebP assets following the existing dark docs style.
2. Dashboard screenshot pass: capture sanitized demo/test UI using seeded demo data after the latest dashboard build is confirmed on `master`.
3. Experience configuration screenshots: queue, draw, auction, appointment, creation wizard, lifecycle.
4. Audience and consumer screenshots: audience list, rules, import, consumer profiles, activity timeline.
5. Settings and billing screenshots: API keys, branding, integrations, organization, team, billing.

## Verification Gates

- `rg -n "IMAGE_PLACEHOLDER" . -g "*.mdx"` should drop for each replacement batch.
- `pnpm build` must pass.
- `pnpm broken-links` must pass.
- Public docs review should confirm screenshots do not expose real customer data, sensitive IDs, internal thresholds, or private operational controls.
