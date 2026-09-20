---
name: ai-slop-detector
description: >-
  Detect, avoid, and flag "AI slop" — the generic visual, structural, and
  writing patterns that make websites, decks, UI, images, and copy read as
  templated AI output rather than something made for this specific product
  or brand. Use this proactively any time you are designing or writing
  something visual or persuasive — a landing page, app UI, slide deck,
  poster, README, marketing copy, cover letter, blog post, or social caption
  — even if the user never says "AI slop": check the work against this
  skill's checklist before presenting it, and deliberately break the most
  common defaults (cream/black/amber palettes, purple-gradient heroes,
  three-of-everything structures, "It's not just X, it's Y" phrasing, stock
  testimonials, sparkle/brain/rocket icons). Also use this whenever asked to
  review, critique, audit, rate, or give feedback on an existing website,
  design, screenshot, deck, image, or piece of writing for looking generic,
  templated, "AI-generated," or "like every other SaaS site."
---

# AI Slop Detector

## What this is

"AI slop" is rarely one bad choice — it's what shows up when work reaches for the reflexive default instead of a decision made for *this* product, brand, or argument. A cream background, three feature cards, and "It's not just X, it's Y" aren't wrong on their own; they're suspicious in combination, because they're what gets reached for first when nothing pushes toward something more specific. This skill catalogs ~100 of those reflexive defaults — visual design, UI, copywriting, and AI-generated imagery — so they can be caught before shipping, or named when reviewing someone else's work.

No pattern here is banned. The point isn't to avoid every item mechanically (swapping amber for teal while keeping the identical hero formula fixes nothing) — it's to notice when several are stacking up and make an actual choice instead.

## Two ways to use this

### 1. While creating something — do this automatically, without being asked

Whenever building a landing page, app UI, slide deck, poster, README, cover letter, blog post, marketing copy, or any other visual or persuasive artifact:

- **Before starting**, anchor on one or two real, specific things about this product/brand/argument — an actual brand color, a real constraint, a real audience detail, a genuine differentiator. Let that drive the choices instead of retrofitting personality onto a template afterward.
- **Before presenting the result**, scan it against whichever categories in `references/patterns.md` apply to what was built (visual work → Palette/Layout/Iconography/Hero categories; UI → also Motion/UI Decoration; copy → the writing categories; generated photos/images → Image Artifacts; slide decks → also Presentation Decks) and deliberately break at least the two or three highest-frequency defaults that would otherwise appear by default — see the shortlist below.
- **Never fabricate content to fill a template.** No invented stats, testimonials, "Trusted by" logos, or feature claims for things that don't exist. If real data or testimonials aren't available, say so and either drop the section or mark it as a placeholder (e.g. `[testimonial pending]`) instead of inventing one.

### 2. When asked to review or audit something

When asked to check, review, critique, grade, or give feedback on a design, screenshot, deck, image, or piece of writing for looking generic, templated, or AI-generated — or when something is pasted with "does this feel like AI slop?" or similar:

1. Open `references/patterns.md` and focus on the categories relevant to the medium (visual design/UI → Palette, Layout, Iconography, Hero Formula, Motion, UI Decoration; copy/writing → the rhetoric, rhythm, and fabrication categories; a generated photo/illustration → Image Artifacts; a slide deck → also Presentation Decks).
2. Go through the actual content and note only the patterns genuinely present — don't force a match that isn't really there.
3. Report using the format below.

## Highest-signal defaults (worth knowing without opening the reference file)

- **Palette:** cream/white background + black text + amber accent, or a purple-to-blue gradient hero
- **Hero:** centered headline + eyebrow badge + two CTA buttons + a slightly-3D-tilted dashboard mockup
- **Structure:** everything sorted into exactly three (benefits, testimonials, pricing tiers, feature cards), with the middle pricing tier marked "Most Popular"
- **Icons:** sparkle or magic-wand for "AI," a brain for "smart," a rocket for "growth"
- **Copy:** "It's not just X, it's Y" and its siblings; unnamed "experts say" / "studies show"; opening with "In today's [adjective] landscape/world"
- **Fabrication:** round invented stats ("10,000+ happy teams"), a generic "Sarah, Product Manager" testimonial, stock headshots, a "Trusted by" logo strip for brands with no real relationship to the product

Three or more of these showing up together is enough to read as templated, regardless of how polished any individual section is.

## Audit output format

Use this shape when reporting findings (skip the table for a one- or two-pattern finding — just say so directly):

```
## AI-Slop Read: [what was reviewed]

**Overall:** [1–2 sentences — does this read as templated, and what's mainly responsible]

| # | Pattern | Where it shows up | Fix |
|---|---------|--------------------|-----|
| 8 | Centered hero + badge + headline + two CTAs | Hero section | ... |

**Top fixes, in order of impact:**
1. ...
2. ...
```

Cite patterns by the `#` used in `references/patterns.md` so they're traceable back to the checklist.

## Calibration

- Presence isn't the tell — clustering and frequency are. A three-tier pricing table is often the genuinely right structure; the problem is when *everything* defaults to three with no reason behind it.
- Context can make an item on the list the correct choice — a real analytics product should show a real dashboard screenshot. The pattern is a *fake* one standing in for a real one, not the screenshot itself.
- Judgment beats mechanical compliance: the goal is a piece of work that reads like someone made specific decisions, not one that avoids every listed item while keeping the same underlying formula.

## Reference

`references/patterns.md` holds the full ~100-item checklist, grouped into: Palette & Background, Typography, Layout & Card Style, Hero Section Formula, Iconography, UI Decoration, Motion, Content Structure, Fabricated Content & Social Proof, Generic CTAs, Decorative Mismatch, Rhetorical Inversion, Sentence & Structure Rhythm, Stock Phrases & Transitions, Word Choice, Structural Padding, Unsourced Authority & Fake Balance, Fake Human Voice, AI Image/Photo Artifacts, and Presentation Decks.
