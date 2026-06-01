# Fanfare Documentation

This repository contains the public Fanfare documentation site.

## Development

```bash
pnpm install
pnpm dev
```

View the local preview at `http://localhost:3000`.

## OpenAPI Reference

API reference specs are generated from the Fanfare service OpenAPI output and committed as static files under `api/openapi/`.

The preferred local flow is to export raw specs from `fanfare-mono`, then let this repo filter and format them for Mintlify:

```bash
# From fanfare-mono
pnpm openapi:export --output ../docs/tmp/openapi-raw

# From this repo
node scripts/generate-openapi.mjs --env local \
  --admin-url tmp/openapi-raw/admin-api.raw.json \
  --consumer-url tmp/openapi-raw/consumer-api.raw.json \
  --checkout-url tmp/openapi-raw/checkout-api.raw.json \
  --beacon-url tmp/openapi-raw/beacon-api.raw.json

pnpm check:openapi
pnpm build
pnpm broken-links
```

You can also generate from running local services when you want to inspect the hosted `/docs` pages directly. Start services with OpenAPI explicitly enabled:

```bash
OPENAPI_ENABLED=1 pnpm -F @fanfare-io/admin-app dev
OPENAPI_ENABLED=1 pnpm -F @fanfare-io/consumer-app dev
OPENAPI_ENABLED=1 pnpm -F @fanfare-io/checkout-app dev
OPENAPI_ENABLED=1 pnpm -F @fanfare-io/beacon-app dev
```

Then refresh the docs specs:

```bash
pnpm generate:openapi:local
pnpm check:openapi
pnpm build
pnpm broken-links
```

The generator applies a public allowlist before writing specs. Internal routes such as health checks, support tools, kill switches, reconciliation routes, and provider webhooks are not published. The sync workflow in `fanfare-mono` uses the exporter flow and opens a docs PR when API-related changes land.

## Publishing changes

Install our GitHub app from your [dashboard](https://dashboard.mintlify.com/settings/organization/github-app) to propagate changes from your repo to your deployment. Changes are deployed to production automatically after pushing to the default branch.

## Need help?

### Troubleshooting

- If your dev environment isn't running: Run `mint update` to ensure you have the most recent version of the CLI.
- If a page loads as a 404: Make sure you are running in a folder with a valid `docs.json`.

### Resources
- [Mintlify documentation](https://mintlify.com/docs)
