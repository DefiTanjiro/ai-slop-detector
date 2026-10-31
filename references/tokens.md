# Tokens

Starting values for each pass. If the project already has a good system, keep its values
and only fix how they are used. These are starting points, not a house style: the
direction moves them.

Adapted from unslop by Damir Sokolovsky (https://github.com/heydamir/unslop), CC BY 4.0.
Changes: reorganized, merged with motion values from Emil Kowalski's animation standards,
added OKLCH guidance and app-screen KPI values. This file remains under CC BY 4.0.

## Spacing

Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128. Any multiple of 4 is fine (28,
104). A 2px nudge inside a small control is fine.

| Use | Value |
| --- | --- |
| Inside a control | 4-12 |
| Between related items (rows in a list) | 2-8 |
| Between groups (a label and its list, two cards) | 12-24 |
| Between sections in an app | 32-64 |
| Between sections on a landing page | 80-128 desktop, 48-64 mobile |
| Row heights | 32 compact, 36 default, 40-44 touch |
| Card padding | 20-24; compact panels and sidebars 16 |
| Page edge | 24-32 desktop, 16-20 mobile |

Rules: same thing, same size. Space inside a group is smaller than space between groups.
Replace one-off values such as `mt-[13px]` with steps from the scale.

## App layout

- Sidebar 240-280 wide; content fluid, capped around 1440-1600; page padding 24-32.
- Top bar or page header 56-64 tall.
- Navigation rows 32-36 tall with 2-4 between them. A section label sits 24 below the
  previous group and 8 above its own items.
- Main chart: at least two thirds of the content width, 280-360 tall.

## Neutral ramps

Apps and dashboards: keep surfaces nearly grey. People look at them for hours; the content
carries the color. Landing pages may tint surfaces further toward the world.

### Dark

| Role | Graphite | Warm | Ink |
| --- | --- | --- | --- |
| Deepest (sidebar) | #0f0f10 | #12110f | #07080d |
| Page | #141415 | #161513 | #0b0d14 |
| Card | #19191b | #1c1a18 | #11141c |
| Raised (active row, input) | #232325 | #262421 | #1a1e28 |
| Hairline | primary text at 8% | primary text at 8% | primary text at 8% |
| Primary text | #ededed | #efe9de | #eef0f5 |
| Secondary text | #a1a1a6 | #aaa398 | #a3a9b8 |
| Muted text and icons | #85858b | #8a847a | #7a8296 |

### Light

| Role | Graphite | Warm | Ink |
| --- | --- | --- | --- |
| Page | #fafafa | #f7f4ee | #f5f7fa |
| Card | #ffffff | #fdfbf7 | #ffffff |
| Raised | #f4f4f5 | #efe9df | #eceff4 |
| Hairline | primary text at 8% | primary text at 8% | primary text at 8% |
| Primary text | #171717 | #1f1b16 | #111827 |
| Secondary text | #525252 | #5e554a | #4b5565 |
| Muted text and icons | #737373 | #7b7266 | #6b7487 |

The warm light ramp sits close to #101. Use it only when the world is truly warm (paper,
wood, food, craft), and pair it with an accent from that world, never terracotta by default.

Muted text is for meta and captions; keep it near 4.5:1 on its surface. Body text uses
primary or secondary.

Semantic, toned to sit inside a ramp: positive #4cc38a dark, #16a34a light; negative
#e5484d dark, #dc2626 light.

**OKLCH.** When building your own ramp, write it in `oklch(L C H)`. Keep C (chroma) below
about 0.02 for neutrals so surfaces never read as a color. Equal L steps look like equal
brightness steps, and the hue does not drift as you lighten or darken.

## Accent

- Keep a real brand color.
- Without one, take it from the world: warm worlds suit ember, coral or ochre; cool worlds
  cobalt, teal or sky; natural worlds moss or sage. Avoid violet and indigo unless the brand
  really is that color, and avoid terracotta on cream (#101).
- Text on the accent reaches 4.5:1. Darken the accent or use dark text if it does not.
- The accent covers a few percent of the screen: the primary action, the selection, one key figure.

## Type

| Character | Interface family | Optional partner |
| --- | --- | --- |
| Precise, technical, calm | Geist, IBM Plex Sans, Inter (if chosen on purpose) | Geist Mono, IBM Plex Mono, JetBrains Mono for code and data |
| Warm, friendly, human | Instrument Sans, DM Sans, Figtree | Instrument Serif or Newsreader, hero headline only |
| Editorial, literary | Instrument Sans or Inter | Newsreader, Fraunces for headlines |
| Playful, bold | Space Grotesk, Bricolage Grotesque | none, or a mono for code |

| Use | Size | Line height | Weight |
| --- | --- | --- | --- |
| Small labels, meta | 12 | 16 | 400 |
| Captions, secondary | 13-14 | 20 | 400 |
| Body, nav items | 14-16 app, 16-20 page | 1.45-1.6 | 400-500 |
| Card figures | 24-32 | 1 | 500, tabular |
| Page title (app) | 24-32 | 1.15 | 500 |
| Hero headline | 56-72 desktop, 36-44 mobile | 1.0-1.08 | 400-600 |

- Letter spacing 0 under 16px (slightly positive is fine for small muted text). From 40px,
  -0.02em; from 56px, -0.03em.
- Text measure 45-75 characters. Cap with `max-width: 65ch`.
- Five sizes per page at most. Two weights do most of the work.

## Radius

| Element | Radius |
| --- | --- |
| Keycap, tag, small button | 4-6 |
| Row, input, button | 8-10 |
| Card | 12-16 |
| Panel, window | 14-20 |

Nested radius: inner = outer minus the padding between them, never below 4. A 16px card
with 8px padding holds 8px items. Alternatively choose square corners, or fully round
buttons, once for the whole product.

## Icons

One set (the project's own, otherwise lucide or phosphor), 16 or 18px, stroke 1.5, the
color of the secondary or muted text role, fixed 8-10px gap to the label.

## Depth

- Dark: surface steps plus a hairline. An active row may carry
  `inset 0 1px 0 rgba(255,255,255,0.12)`.
- Light: `0 1px 2px rgba(0,0,0,0.05)` for small things, `0 8px 24px rgba(0,0,0,0.06)` for
  things that truly float (menus, dialogs). Nothing at rest gets a shadow by default.

## Buttons

- Hero 44-48 tall, navigation 32-36, side padding 16-20.
- Primary on dark: an off-white from the ramp with dark text, or the accent.
- Primary on light: primary text color as fill with white text, or the accent.
- Secondary: raised surface with a hairline.

## Motion values

| Use | Duration |
| --- | --- |
| Press, hover, toggle | 100-180ms |
| Tooltip, small popover | 125-200ms |
| Dropdown, select, menu | 150-250ms |
| Modal, drawer, sheet | 200-500ms |
| Stagger between items | 40-60ms, six items at most |

Curves: enter and exit `cubic-bezier(0.22, 1, 0.36, 1)`; on-screen movement
`cubic-bezier(0.77, 0, 0.175, 1)`; drawers `cubic-bezier(0.32, 0.72, 0, 1)`. Never
`ease-in` for interface motion. Rise distance 6-12px. Press scale 0.97-0.98.
