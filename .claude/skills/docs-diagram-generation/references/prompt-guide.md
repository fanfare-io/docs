# Fanfare Docs Diagram Prompt Guide

## Reusable Prompt Block

```text
Create a clean, developer-facing informational diagram for Fanfare SDK documentation. This is a public docs image, so it should feel polished, concise, and easy to scan. Use a dark documentation-style theme inspired by the Fanfare brand: near-black charcoal background, slightly lighter panels, subtle thin borders, off-white text, muted gray secondary labels, and a restrained purple accent color for key outlines, arrows, labels, or highlights.

The style should be minimal, modern, and documentation-oriented. It should feel like a premium SaaS developer docs diagram that fits naturally on a dark-themed Mintlify documentation page. Prioritize clarity over decoration. Use strong spacing, clean typography, rounded rectangles, simple connector routing, and balanced composition.

Use little to no glow; keep the visual language closer to a crisp product documentation diagram than a hero graphic. Avoid heavy gradients, elaborate flourishes, decorative particles, 3D effects, neon excess, marketing-style hero visuals, unnecessary icons, low-contrast text, or tiny labels.
```

## Prompt Checklist

Include:

- Page or section where the diagram will appear.
- Exact concept the diagram should teach.
- Exact labels the image must contain.
- Node order and branch logic.
- Which node, if any, should be visually emphasized.
- Public-safety constraints.

Avoid:

- Asking for screenshots of products or dashboards unless the screenshot exists.
- Asking the model to invent private implementation detail.
- Long prose inside nodes.
- Connector labels rendered as badge-like bubbles.

## Prompt Shape

```text
[Reusable prompt block]

Diagram content:
- Title: "<title>"
- Subtitle: "<subtitle>"
- Layout: horizontal flow | top-down flow | decision tree | two-lane comparison | compact architecture
- Nodes: <ordered node labels>
- Connectors: <arrow and branch behavior>
- Emphasis: <which node/path is highlighted>

Public-safety constraints:
- Do not include <specific sensitive details to avoid>.
- Keep this at public integration-contract level.
```
