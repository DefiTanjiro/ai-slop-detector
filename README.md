# AI Slop Detector

A skill for Claude Code, Claude.ai, Cursor, and other [Agent Skills](https://agentskills.io)–compatible agents that catches "AI slop" — the generic visual, structural, and writing defaults that make websites, decks, UI, images, and copy read as templated AI output instead of something made for a specific product or brand.

[![skills.sh](https://skills.sh/b/<your-github-username>/ai-slop-detector)](https://skills.sh/<your-github-username>/ai-slop-detector)

## What it does

- **While creating** a landing page, app UI, slide deck, poster, README, marketing copy, cover letter, or blog post, the agent checks its own output against the checklist before presenting it, and deliberately breaks the most common defaults instead of reaching for them.
- **On request**, it audits an existing design, screenshot, deck, image, or piece of writing and reports back which patterns are present, where, and how to fix them.

Covers ~100 patterns across 20 categories: palette & background, typography, layout & card style, hero-section formula, iconography, UI decoration, motion, content structure, fabricated content & social proof, generic CTAs, decorative mismatch, rhetorical inversion ("it's not just X, it's Y"), sentence rhythm, stock phrases & transitions, word choice, structural padding, unsourced authority, fake human voice, AI image/photo artifacts, and presentation decks. See [`references/patterns.md`](references/patterns.md) for the full list.

## Install

```bash
npx skills add <your-github-username>/ai-slop-detector
```

Or point an agent at it directly without installing:

```bash
npx skills use DefiTanjiro/ai-slop-detector | claude
```

## Credit

The original 100-pattern list this skill is built on was compiled by **okaashish**. This repo restructures it into an installable, actionable skill with fixes for each pattern.

## License

MIT
