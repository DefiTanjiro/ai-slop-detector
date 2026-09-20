# AI Slop Pattern Checklist

Each item is numbered 1–100 for citation in audits. "Instead" is the deliberate choice that displaces the default — not a rule to follow mechanically, but the kind of thing that should replace the default once you notice it's about to appear.

## Contents

1. Palette & Background (1, 9, 10, 20)
2. Typography (2, 3, 21)
3. Layout & Card Style (5, 11, 13, 14, 15, 29, 38, 47, 48)
4. Hero Section Formula (8, 18, 19)
5. Iconography (6, 22, 23, 24, 25)
6. UI Decoration (7, 26, 27, 28)
7. Motion (30, 31)
8. Content Structure (4, 16, 32, 33, 34, 35, 36, 37)
9. Fabricated Content & Social Proof (17, 41, 42, 43, 44, 45, 46)
10. Generic CTAs & Copy (39, 40)
11. Decorative Mismatch (12, 49, 50)
12. Rhetorical Inversion (51, 52, 53, 54, 55)
13. Sentence & Structure Rhythm (56, 57, 58, 59, 89)
14. Stock Phrases, Openers & Transitions (60–70)
15. Word Choice (71, 72, 73)
16. Structural Padding & Fake Depth (74, 75, 76, 77, 82, 83)
17. Unsourced Authority & Fake Balance (78, 79, 80, 81)
18. Fake Human Voice (84, 85, 86, 87, 88)
19. AI Image/Photo Artifacts (90–99)
20. Presentation Decks (100)

---

## 1. Palette & Background

| # | Pattern | Instead |
|---|---------|---------|
| 1 | Cream/light background + black text + amber accent | Pull the accent from the actual brand or product; if none exists, pick one deliberately and justify it in one line |
| 9 | Purple-to-blue gradient hero background | Solid color, a real product photo/screenshot, or a gradient drawn from the brand's actual palette |
| 10 | Dark background with neon purple glow | Use glow/neon only if the product is genuinely in that space (gaming, crypto, nightlife) — otherwise a plain dark or light theme |
| 20 | Faded grid pattern behind the hero | Leave it plain, or use an element tied to the product (a real diagram, a real texture) |

## 2. Typography

| # | Pattern | Instead |
|---|---------|---------|
| 2 | One word of the headline in huge italic serif | Full headline in one consistent weight/style; if emphasis is needed, use color or size, not a random font swap |
| 3 | Tiny ALL-CAPS eyebrow label above every heading | Only add one where it does real work (a section name that isn't obvious from the heading itself) |
| 21 | Gradient text on the "important" word | Bold or a color from the existing palette, not a rainbow effect that doesn't recur anywhere else |

## 3. Layout & Card Style

| # | Pattern | Instead |
|---|---------|---------|
| 5 | Cards nested inside cards inside more cards | Flatten to one level; use spacing/dividers instead of nested containers |
| 11 | Glassmorphism cards everywhere | Use it only where translucency serves a real purpose (an overlay on imagery), not as default card styling |
| 13 | Bento grids for plain, non-comparative information | Use a bento grid only when the content actually varies in size/importance; otherwise a simple list or table |
| 14 | Every corner has the identical large border-radius | Vary radius by element hierarchy, or pick one modest radius and use it with intent |
| 15 | Every card: 1px border + soft drop shadow | Pick one treatment (border OR shadow) based on the background, not both by default |
| 29 | Icon-in-rounded-square at the top of every feature card | Vary the layout per card, or drop the icon where it doesn't add information |
| 38 | Four-column generic SaaS footer | Size the footer to what the site actually needs — a small product may need two columns, not four |
| 47 | Huge empty whitespace used to fake "premium" | Whitespace should follow content density, not substitute for having enough real content |
| 48 | Every section has near-identical vertical spacing | Vary spacing to reflect section importance and content length |

## 4. Hero Section Formula

| # | Pattern | Instead |
|---|---------|---------|
| 8 | Centered hero: eyebrow badge + headline + two CTA buttons | Vary structure by what the product needs — one CTA, a form, a video, asymmetric layout |
| 18 | Fake dashboard screenshot floating in a browser mockup | Use a real screenshot of the actual product, or skip the visual if none exists yet |
| 19 | That dashboard mockup tilted slightly in 3D for no reason | Present flat unless the tilt communicates something (e.g. genuinely showing depth/stacking) |

## 5. Iconography

| # | Pattern | Instead |
|---|---------|---------|
| 6 | Lucide-style line icons attached to absolutely everything | Use icons only where they aid scanning, not as decoration on every list item |
| 22 | Sparkle icon next to anything AI-related | Name the capability plainly; let the copy do the work instead of a glyph |
| 23 | Magic-wand icon to represent AI | Same — describe the actual function |
| 24 | Brain icon to represent "intelligence" | Same |
| 25 | Rocket icon to represent "growth" | Same, or use an actual chart/number if growth is the claim |

## 6. UI Decoration

| # | Pattern | Instead |
|---|---------|---------|
| 7 | Random terminal window shown for a product that has nothing to do with code | Only show a terminal if the product is a CLI/dev tool |
| 26 | Tiny green dot labeled "AI powered" or "Live" with no real status behind it | Only show a live indicator if it reflects an actual live state |
| 27 | Decorative command bar that isn't actually functional | Either make it functional or leave it out |
| 28 | Pills and badges scattered everywhere | Reserve badges for genuinely distinct states (new, beta, sold out) |

## 7. Motion

| # | Pattern | Instead |
|---|---------|---------|
| 30 | Every section fades upward on scroll | Use scroll animation sparingly, tied to content that benefits from a reveal |
| 31 | Everything grows ~5% on hover | Reserve hover feedback for actually-interactive elements, and vary the treatment |

## 8. Content Structure

| # | Pattern | Instead |
|---|---------|---------|
| 4 | Every process becomes exactly 3 steps | Use however many steps the process actually has |
| 16 | Three feature cards immediately under the hero | Let the number of features reflect the actual number worth highlighting |
| 32 | Left-text/right-image, then right-text/left-image, forever | Break the alternation where the content doesn't need it |
| 33 | Exactly three benefits | Same — let the real content set the count |
| 34 | Exactly three testimonials | Same |
| 35 | Exactly three pricing tiers | Same, unless three genuinely reflects the pricing model |
| 36 | Middle pricing tier labeled "Most Popular" | Only label it if that's actually true (real usage data) |
| 37 | FAQ accordion added whether or not the product needs one | Only include an FAQ if there are real recurring questions to answer |

## 9. Fabricated Content & Social Proof

These are the most important to avoid outright — they're not just stylistic tells, they're dishonest.

| # | Pattern | Instead |
|---|---------|---------|
| 17 | Grey "Trusted by" logo strip with suspiciously impressive brands | Only show real logos with real permission; otherwise omit the section |
| 41 | Fake round-number stats ("10,000+ happy teams") | Use a real number, or omit the stat entirely |
| 42 | Generic testimonial attributed to "Sarah, Product Manager" | Use a real quote with a real name, or don't include a testimonial section yet |
| 43 | Stock-looking headshots paired with testimonials | Same — don't manufacture a person to go with fabricated praise |
| 44 | Decorative analytics graphs showing meaningless data | Show a real chart or a clearly-labeled illustrative placeholder |
| 45 | Fake product UI substituted for an actual screenshot | Use the real interface, even if it's less polished |
| 46 | Feature cards describing capabilities the product doesn't actually have | Only list real, shipped (or clearly labeled "coming soon") features |

## 10. Generic CTAs & Copy

| # | Pattern | Instead |
|---|---------|---------|
| 39 | "Get Started" as the CTA everywhere, with no product-specific meaning | Name the actual action ("Start your free trial," "Create your first project") |
| 40 | "Start building today" with no connection to what's actually being built | Tie the CTA copy to the specific product/outcome |

## 11. Decorative Mismatch

| # | Pattern | Instead |
|---|---------|---------|
| 12 | Random glowing blobs behind sections | Remove, or replace with imagery that relates to the content |
| 49 | Floating 3D sphere/abstract shape that means nothing | Same |
| 50 | Full SaaS design language applied to a product that isn't SaaS | Match visual language to what the product actually is |

## 12. Rhetorical Inversion ("not X, but Y" family)

| # | Pattern | Instead |
|---|---------|---------|
| 51 | "It's not just X. It's Y." | State the claim directly: "X does Y" |
| 52 | "It's not about X. It's about Y." | Same |
| 53 | "That's not X. That's Y." | Same |
| 54 | "More than just X…" | Same |
| 55 | "It doesn't just X. It Y." | Same |

## 13. Sentence & Structure Rhythm

| # | Pattern | Instead |
|---|---------|---------|
| 56 | Everything collapsed into three one-word/short-phrase beats ("Fast. Simple. Powerful.") | Write a real sentence when a real sentence is what's needed |
| 57 | Every paragraph suspiciously the same length | Vary paragraph length based on how much a point actually needs |
| 58 | Every sentence has the same rhythm/cadence | Mix short and long sentences deliberately |
| 59 | Every bullet starts with the same grammatical structure | Vary construction; don't force parallelism where it isn't natural |
| 89 | Constant dramatic one-line fragments ("No fluff. No complexity. Just results.") | Use this device sparingly, not as the default cadence |

## 14. Stock Phrases, Openers & Transitions

| # | Pattern | Instead |
|---|---------|---------|
| 60 | "Whether you're a founder, creator, or marketer…" | Address the actual audience directly, or skip the framing device |
| 61 | Fake ranges ("From productivity to creativity") | Be specific about what's actually covered |
| 62 | Asking a rhetorical question and immediately answering it | State the point directly |
| 63 | "Here's the thing." | Cut it — go straight to the point |
| 64 | "The best part?" | Same |
| 65 | "The result?" | Same |
| 66 | "Why does this matter?" | Same |
| 67 | "Let's break it down." | Same |
| 68 | "At its core…" | Same |
| 69 | "In today's digital landscape…" | Open with the actual point, not a scene-setting cliché |
| 70 | "In an increasingly fast-paced world…" | Same |

## 15. Word Choice

| # | Pattern | Instead |
|---|---------|---------|
| 71 | Overusing "delve," "underscore," "pivotal," "intricate," "landscape" | Use plainer, more specific words |
| 72 | "Unlock," "elevate," "revolutionize," "seamless," "robust" as default verbs/adjectives | Describe the actual mechanism or outcome instead |
| 73 | Em dashes every few sentences | Vary punctuation — periods, commas, occasional em dash, not as a tic |

## 16. Structural Padding & Fake Depth

| # | Pattern | Instead |
|---|---------|---------|
| 74 | Colon headings every few lines ("The problem:" "The solution:" "The result:") | Use prose or headings suited to the actual structure of the argument |
| 75 | Random bold words scattered through every paragraph | Bold only what's genuinely load-bearing, sparingly |
| 76 | Saying the same thing again with different synonyms | Cut the restatement |
| 77 | Padding with "highlighting…," "underscoring…," "fostering…" to fake depth | Make the actual point instead of gesturing at one |
| 82 | Every section ends with its own mini-conclusion | Let sections end when the point is made |
| 83 | The conclusion repeats the introduction almost word-for-word | Have the conclusion add something (a next step, a synthesis), not a rehash |

## 17. Unsourced Authority & Fake Balance

| # | Pattern | Instead |
|---|---------|---------|
| 78 | "Experts say" with no named expert | Name the source, or drop the claim |
| 79 | "Studies show" with no named study | Same |
| 80 | Very specific statistics with no source | Same |
| 81 | Perfectly balanced pros and cons even when reality is messier | Let the analysis reflect actual asymmetry where it exists |

## 18. Fake Human Voice

| # | Pattern | Instead |
|---|---------|---------|
| 84 | Ending with an inspirational "Because…" sentence | End when the point is made |
| 85 | Forced slang suddenly appearing to seem "human" | Match the register the rest of the piece actually uses |
| 86 | Random "honestly," "lowkey," "kinda," "no cap" dropped into corporate copy | Same |
| 87 | Fake personal confessions ("I used to think X too") when there's no real personal voice behind the piece | Only use first-person anecdote if it's real |
| 88 | Fake contrarian hooks ("Everyone is doing X wrong") without a real argument behind them | Only use a contrarian frame if the piece actually delivers on it |

## 19. AI Image/Photo Artifacts

Relevant when generating or reviewing photorealistic images/illustrations of people or scenes.

| # | Pattern | Instead / tell |
|---|---------|-----------------|
| 90 | Plastic, poreless skin on generated people | Real skin has texture, asymmetry, minor imperfections |
| 91 | Every photo somehow in golden-hour lighting | Match lighting to the actual setting and time implied |
| 92 | Everything perfectly centered and symmetrical | Real compositions have natural asymmetry |
| 93 | Everyone generically attractive in exactly the same way | Real people vary in appearance, age, and features |
| 94 | Extremely blurred cinematic background for mundane, everyday situations | Match depth-of-field to context; not everything is a film still |
| 95 | Random orange-and-teal movie-grade color grading | Use natural, scene-appropriate color |
| 96 | Objects rendered glossy when the material should be matte | Match surface finish to the actual material |
| 97 | Reflections that don't match what's actually in the scene | Check reflections are physically consistent |
| 98 | Glasses, straps, jewelry, fingers, or objects melting where they touch | Check contact points render coherently |
| 99 | Background objects that repeat, merge, or make no physical sense | Check background geometry is coherent |

## 20. Presentation Decks

| # | Pattern | Instead |
|---|---------|---------|
| 100 | Different slides that all use the identical layout, rhythm, and visual decisions | Vary layout by content type — a data slide, a quote slide, and a timeline slide shouldn't look interchangeable |
