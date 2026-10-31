---
name: ai-slop-detector
description: >-
  Find, fix and prevent AI slop: the default patterns that make websites, app
  screens, dashboards, decks, posters, images and writing look machine-made.
  Use it proactively whenever you build or write anything visual or persuasive
  (landing page, dashboard, UI component, slide deck, poster, README, product
  doc, marketing copy, cover letter, LinkedIn post), and whenever someone asks
  to review, audit, polish, unslop or redesign something that looks generic,
  templated, vibecoded or AI-generated. It sets a product-specific direction
  first, triages how much to change, fixes in a fixed pass order with concrete
  values, and reports every finding by pattern number.
license: MIT (references/tokens.md adapts CC BY 4.0 material, see CREDITS.md)
metadata:
  version: 2.0.0
  author: DefiTanjiro
---

# AI Slop Detector

Slop is a default nobody chose. A cream page with an amber button, three icon cards, a
gradient word in the headline and "It's not just X, it's Y" each look fine alone. Together <!-- scan:ignore -->
they say the work came from the average of everything a model has seen.

This skill does two jobs, and both are required:

1. **Remove the tells.** The numbered checklist in `references/patterns.md` (140 patterns).
2. **Add what the tells were standing in for.** A direction taken from the product itself,
   real content, one memorable moment. A page with every tell removed and nothing added is
   thin, and thin loses to busy in blind tests. That failure has its own number: #136.

## Pick the mode

| Mode | When | Steps |
| --- | --- | --- |
| Create | Building or writing something new | Direction, build with the passes, Check |
| Audit | "Review", "audit", "check", "does this look AI-made" | Triage, Report. Change nothing |
| Fix | "Fix", "polish", "unslop", "clean up", "redesign" | Triage, Direction, Passes, Check, Report |

In Create mode, run this skill silently: the user sees better work, not a lecture.

## Know the material

Decide what you are working on, because the rules differ.

| Material | Examples | Load |
| --- | --- | --- |
| Page | Landing page, marketing site, portfolio, one-pager, poster | patterns 1-50, 101-123, 136-138; direction, tokens, components, motion |
| App screen | Dashboard, admin, settings, table view, inbox, wallet | patterns 1-50, 101-140; direction, tokens, app-screens, components, motion |
| Writing | Post, article, cover letter, README, PRD, proposal | patterns 51-89, 124-130; copy |
| Deck | Slides, pitch deck | patterns 1-50, 100, 114; copy |
| Image | Generated photo, illustration, hero visual | patterns 90-99 |

Every build of a page or app screen also meets `references/quality-floor.md`.

## Step 1: Triage (Audit and Fix)

Go through the patterns for the material and list each one you find: number, name, where it
lives. Look at a render or screenshot when you can, not only the code. Run
`node <skill folder>/scripts/scan.mjs <path>` on source files when Node is available; it catches the code
and copy tells. Then classify honestly:

- **Heavy:** many patterns across color, type, icons and copy. Run the full Fix.
- **Light:** mostly designed, a few patterns left. Fix only what the audit found. Keep the
  palette, type, layout and visual. Bigger ideas go in the report as suggestions.
- **None:** say so plainly. Offer two or three refinements with exact values and apply them
  only if the user agrees. Never change a good screen just to make it different.

## Step 2: Direction (Create and Fix)

Write five lines before touching anything. Details and examples in `references/direction.md`.

- **Product:** what it does and for whom, one plain sentence.
- **Character:** two or three concrete words. Banned: clean, modern, sleek, minimal,
  premium, seamless. They describe every template. <!-- scan:ignore -->
- **World:** the place or material the product belongs to. It sets the neutral tint, the
  accent and the visual.
- **Moment:** the one place that gets rich color, material or motion. Everything else stays quiet.
- **Signature:** one small detail only this product would have, used consistently.

Then run two tests from `direction.md`. The **generic test**: would a similar prompt for a
similar product land in the same place? Change whatever would. The **competitor test**: put
the nearest competitor's name in the headline. If it still fits, push harder.

If the product has a real brand (logo, color, typeface that is not itself a tell), keep it
and build around it.

In Fix mode, show the triage and direction and wait for a yes before editing, unless the
user said to just do it.

## Step 3: Passes, in order

Finish each pass across the whole piece before starting the next.

**Visual work** (values in `tokens.md`):

1. **Spacing.** 4px grid, equal things equal, tighter inside groups than between them.
2. **Color.** One tinted neutral ramp, three text roles, one accent used rarely. No hue gradients.
3. **Icons.** One set, one size, one stroke, colored by text role. Remove emoji and decoration.
4. **Copy.** Plain words that only fit this product. Real labels. See `copy.md`.
5. **Type.** Chosen for the character. Few sizes, weights 400 to 600, sentence case.
6. **Layout.** Keep the content and order. Fix alignment, proportion and the first screen.
7. **Details.** Nested radius, charts, stat cards, states. See `app-screens.md`, `components.md`.
8. **Visuals.** Replace filler with the product itself or one image from its world.
9. **Motion.** Only motion that explains something. See `motion.md`.

Spacing comes first because everything reads differently once the rhythm is right. Copy
comes before type because the length of a headline decides its size. Visuals and motion
come last because they must fit a screen that already works without them.

**Writing** (rules in `copy.md`):

1. **Facts.** Remove every invented number, quote, source and claim. Ask for the real ones.
2. **Argument.** One claim per section, each with its proof. Cut sections with no claim.
3. **Stock language.** Remove patterns 51-77 and 124-130.
4. **Rhythm.** Vary sentence and paragraph length. Break forced parallel structure.
5. **Voice.** Match the reader and the user's own register. No fake confessions or slang.

**Decks:** decide each slide's job (data, quote, timeline, comparison, statement) and give
each job its own layout. Neighbouring slides never share a layout by default (#100).

## Step 4: Check

- Re-scan the patterns for the material. Anything still present gets fixed or explained.
- Meet `references/quality-floor.md`: focus, states, contrast, semantics.
- Run `<skill folder>/scripts/scan.mjs` again on the changed files.
- Look at the render with the passes in `references/critique.md`, at most three rounds.
- Template test: swap the product name for a competitor's. If the result still fits, push the
  direction in the copy, the visual and the signature.
- Remove one accessory: the least necessary decoration still on the page.

## Rules that override taste

- **Never fabricate.** No invented stats, testimonials, logos, quotes, features, sources or
  reviews. If real ones are missing, ask, or leave a visible placeholder and list it in the report.
- **Keep the product.** Features, content, section order and a real brand stay unless the user
  asks otherwise. Placeholder content that means nothing may become content that does.
- **No swaps.** Never replace removed decoration with new decoration or the next trend
  (glass, grain, bento, neon, cream and terracotta).
- **Fill, don't empty.** Space freed by removal gets scale, full content, a real picture or a
  field of flat color. One deliberate rest per page at most.
- **The brief wins.** If the user explicitly asks for a look on this list, build it and mention
  the pattern once. Do not argue twice.

## When sources disagree

| Topic | Rule |
| --- | --- |
| Monospace | For code and aligned data columns only. Never as a "technical voice" for labels (#110) |
| Numbering 01/02/03 | Only when the content is a real sequence (#114) |
| Hairlines | Fine in tables, sidebars and forms. A tell when every section is ruled (#103) |
| Glass and blur | Only for an overlay that floats above scrolling content. Never as card style (#11) |
| Case | Sentence case by default. Keep a brand's documented convention |
| Inter, Lucide, shadcn | Fine when chosen on purpose. A tell only when nobody chose them |
| Three of something | Fine when the content has three. A tell when everything has three (#4, #33-35) |

## Report format

Audit:

```
## Slop read: [what was reviewed]
Verdict: heavy | light | none. [One sentence on what is mainly responsible.]

| # | Pattern | Where | Fix |
| --- | --- | --- | --- |
| 113 | Headline over two lines | Hero h1 at 390px | Cut to 5 words, move the rest to the subhead |

Top fixes, in order of impact:
1. ...
```

Fix: the five direction lines, a few lines per pass on what changed, claims you could not
verify and removed or kept as placeholders, and what you chose not to change.

Cite by number so findings trace back to `references/patterns.md`.

## Reference map

| File | Read it when |
| --- | --- |
| `references/patterns.md` | Every run. The 140 numbered patterns with severity and fixes |
| `references/direction.md` | Writing the five lines, the generic and competitor tests |
| `references/tokens.md` | Exact values for spacing, color, type, radius, depth, motion |
| `references/app-screens.md` | Dashboards, tables, KPIs, charts, routing, states |
| `references/components.md` | Replacing slop components; the effect-component watchlist |
| `references/motion.md` | Deciding whether and how anything moves |
| `references/copy.md` | Interface copy, page argument, long-form writing, product docs |
| `references/quality-floor.md` | Accessibility, focus, forms, states, performance |
| `references/critique.md` | Looking at a render, scoring, round budget, verifying findings |
| `scripts/scan.mjs` | Static scan of HTML, CSS, JSX, Vue, Svelte and Markdown for tells |

Sources and licences are in `CREDITS.md`.
