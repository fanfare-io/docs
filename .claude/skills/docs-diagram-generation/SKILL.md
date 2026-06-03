---
name: docs-diagram-generation
description: Generate or refine public Fanfare documentation diagrams for Mintlify docs. Use when replacing Markdown/ASCII diagrams, creating SDK/API/concepts workflow images, reviewing diagram style, or producing image prompts for Fanfare docs pages.
---

# Docs Diagram Generation

Use this skill when Fanfare docs need polished static diagrams that replace
ASCII art, Mermaid-like sketches, workflow diagrams, or conceptual state
models.

## Workflow

1. Read the target MDX section and identify the exact public concept the image
   must communicate.
2. Check `references/style-guide.md` for visual constraints.
3. Check `references/prompt-guide.md` for the reusable prompt block and prompt
   checklist.
4. Keep the diagram public-safe: describe customer-facing integration contracts,
   not enforcement internals, thresholds, secret values, scoring, retry
   schedules, cache keys, token contents, or operational controls.
5. Prefer generated bitmap/WebP assets for docs presentation. For diagrams with
   many exact labels, use deterministic SVG/canvas/HTML rendering before
   converting to WebP so text can be reviewed.
6. Verify every generated diagram at full size and in the Mintlify page where it
   appears. Check label legibility, arrow routing, text overlap, dark/light mode
   contrast, and that connector labels do not look like stray UI controls.

## Placement

- Place reusable docs diagrams under `images/<area>/...webp`.
- Use clear alt text that describes the concept, not the image style.
- Replace only the diagram block; preserve surrounding explanatory copy unless
  the copy becomes redundant.
- If an image is speculative or depends on unconfirmed product behavior, do not
  publish it without product review.

## Verification

Run the standard docs checks after placement:

```bash
eval "$(fnm env --use-on-cd)" && fnm use && pnpm build
eval "$(fnm env --use-on-cd)" && fnm use && pnpm broken-links
git diff --check
```
