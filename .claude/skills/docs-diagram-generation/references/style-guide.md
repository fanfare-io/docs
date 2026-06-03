# Fanfare Docs Diagram Style Guide

## Visual Tone

- Clean, modern, premium, restrained.
- Developer documentation first; brand expression second.
- Flat product documentation diagram, not hero art.
- Little to no glow.

## Theme

- Background: near-black / charcoal.
- Panels: slightly lighter dark fills.
- Borders: thin, subtle, precise.
- Accent: restrained purple for key outlines, arrows, labels, and highlights.
- Text: off-white primary text with muted gray secondary text.

Approximate palette:

```text
Background: #07070B / #0A0A10
Panel fill: #11111A / #151522
Panel border: #2A2A3A
Primary text: #F4F1FF
Secondary text: #A6A1B5
Muted labels: #7E788F
Primary accent: #A855F7 / #B46CFF
```

## Diagram Rules

- Use rounded rectangles for nodes.
- Keep connector lines thin and direct.
- Use subtle arrowheads.
- Make decision nodes visually distinct, but not decorative.
- Use uppercase micro-labels such as `DECISION`, `STATE`, `EVENT`, or `RECOMMENDATION`.
- Keep labels short enough to read after Mintlify scales the image.
- Put connector labels near arrows as plain text, not large badge pills.
- Keep generous spacing around arrowheads, labels, and card edges.

## Avoid

- Heavy gradients.
- 3D effects.
- Neon/cyberpunk treatments.
- Decorative particles, bokeh, or abstract background ornaments.
- Marketing-style hero art.
- Dense labels.
- Operational thresholds, secret values, scoring rules, retry schedules, token
  payloads, cache keys, or internals that could help abuse the platform.
