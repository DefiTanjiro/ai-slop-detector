# AI Slop Detector

A skill for Claude Code, Codex, Cursor and any agent that reads `SKILL.md` files. It finds,
fixes and prevents AI slop: the default patterns that make websites, dashboards, decks,
images and writing look machine-made.

[![skills.sh](https://skills.sh/b/DefiTanjiro/ai-slop-detector)](https://skills.sh/DefiTanjiro/ai-slop-detector)

```bash
npx skills add DefiTanjiro/ai-slop-detector
```

## What it does

Most anti-slop prompts are a list of things to avoid. Remove every tell from a page and put
nothing in its place, and you get a thin page that still looks generated. This skill does
both halves:

1. **Sets a direction from the product itself** before any pixel: what it does, its character,
   the world it belongs to, the one moment that gets the richness, one signature detail.
2. **Triages** existing work as heavy, light or no slop, and leaves good work alone.
3. **Fixes in a fixed order** (spacing, color, icons, copy, type, layout, details, visuals,
   motion) with exact values for each pass.
4. **Checks** against 140 numbered patterns, a quality floor for accessibility and states, and
   a scored critique of the render.

It covers landing pages, app screens and dashboards, slide decks, posters, generated images,
and writing: posts, cover letters, READMEs, and product documents like PRDs and release notes.

## Use it

Ask in your own words:

```
Audit this landing page for AI slop
Unslop the dashboard in src/app/billing
Write a LinkedIn post about our launch
Review this PRD for generated-sounding writing
```

While building anything visual or persuasive, the agent applies it on its own.

Audits come back as a table of pattern numbers, locations and fixes:

```
Verdict: heavy. Purple gradients, emoji icons and invented stats carry most of it.

| #   | Pattern                        | Where             | Fix                                  |
| 9   | Purple-to-blue gradient hero   | Hero background   | Flat ground from the direction       |
| 115 | Sparklines in stat cards       | KPI row           | Label, figure, change vs last month  |
| 41  | "10,000+ teams"                | Hero subhead      | Real sourced number, or remove       |
```

## The scanner

A static first pass over code and copy, no dependencies, Node 18+:

```bash
node scripts/scan.mjs src/          # HTML, CSS, JSX, TSX, Vue, Svelte, Astro, Markdown
node scripts/scan.mjs README.md --min M
node tests/run.mjs                  # fixture tests
```

It flags 45 tells (gradient text, `transition-all`, emoji in markup, uppercase tracked labels,
`not just X` inversions, hype words, unsourced stats) with pattern numbers. Its hits are
candidates; the agent reads each in context before changing anything.

## What's inside

| File | Holds |
| --- | --- |
| `SKILL.md` | Modes, triage, direction, pass order, conflict rules, report format |
| `references/patterns.md` | 140 numbered patterns with severity, fix and detect notes |
| `references/direction.md` | Inventory, five lines, idea sentence, generic and competitor tests |
| `references/tokens.md` | Spacing, ramps, type scale, radius, depth, motion values |
| `references/app-screens.md` | Shell, routing, KPIs, deltas, charts, tables, states |
| `references/components.md` | Slop components and their replacements; effect watchlist |
| `references/motion.md` | When to animate, timing, easing, reduced motion |
| `references/copy.md` | Interface copy, page argument, long-form, product docs |
| `references/quality-floor.md` | Accessibility, focus, forms, resilience |
| `references/critique.md` | Look passes, scoring, round budget |
| `scripts/scan.mjs` | Static scanner |
| `evals/prompts.md` | Four before-and-after test prompts |

## Credits

Built on the work of okaashish (the original 100 patterns), Damir Sokolovsky's
[unslop](https://github.com/heydamir/unslop), Leon Lin's
[taste-skill](https://github.com/Leonxlnx/taste-skill), Anthropic's frontend-design skill,
Vercel's Web Interface Guidelines, Emil Kowalski, kubre, Jakub Krehel and EasyUI. Details and
licences in [CREDITS.md](CREDITS.md).

## License

MIT, except `references/tokens.md`, which adapts CC BY 4.0 material and stays under CC BY 4.0.
