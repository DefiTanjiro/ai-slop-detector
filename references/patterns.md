# AI Slop Patterns

<!-- scan:ignore-file: this file quotes tells as examples -->

Numbered for citation. Numbers 1-100 are stable from v1; 101-140 were added in v2. Never
renumber: audits and issues refer to these numbers.

**Severity**

- **H** (high): a problem on its own. Dishonest, broken, or the strongest single tells. Always fix.
- **M** (medium): a clear tell. Two or three together make a piece read as generated.
- **L** (low): only matters in clusters, or as a sign that nobody made a decision.

**Detect** notes show what `scripts/scan.mjs` looks for, or what to look for by eye.

Tells are dated. Each wave of fixes becomes the next default (see #101). Treat this list as a
registry to keep current, not a style guide. The instead column describes a procedure, not a
replacement product, because "use X instead" lists become the next wave of tells.

## Contents

1. Palette and background (1, 9, 10, 20)
2. Typography (2, 3, 21)
3. Layout and card style (5, 11, 13, 14, 15, 29, 38, 47, 48)
4. Hero formula (8, 18, 19)
5. Iconography (6, 22-25)
6. UI decoration (7, 26-28)
7. Motion (30, 31)
8. Content structure (4, 16, 32-37)
9. Fabricated content and social proof (17, 41-46)
10. Generic CTAs (39, 40)
11. Decorative mismatch (12, 49, 50)
12. Rhetorical inversion (51-55)
13. Sentence and structure rhythm (56-59, 89)
14. Stock phrases and openers (60-70)
15. Word choice (71-73)
16. Padding and fake depth (74-77, 82, 83)
17. Unsourced authority and fake balance (78-81)
18. Fake human voice (84-88)
19. Image and photo artifacts (90-99)
20. Decks (100)
21. Third-wave palettes and editorial cosplay (101-106)
22. Type and meta tells (107-113)
23. Component tells (114-123)
24. Interface copy (124-130)
25. Motion and code tells (131-135)
26. Structure and substance (136-140)

---

## 1. Palette and background

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 1 | Cream or off-white ground, black text, amber or yellow buttons | M | Take the accent from the product's world or real brand. Neutrals tinted toward that world |
| 9 | Purple-to-blue or violet-to-pink gradient hero | M | Flat ground, a real product view, or one image from the product's world |
| 10 | Dark ground with neon purple glow | M | A tinted dark ramp, depth from surface steps, no glow |
| 20 | Faded grid or dot pattern behind the hero | L | Plain ground, or a texture that comes from the product's material |

## 2. Typography

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 2 | One word of the headline in huge italic serif | M | One face, one color. Let the words carry the emphasis |
| 3 | Tiny ALL-CAPS tracked eyebrow label above every heading | M | Fold the information into the heading or the first sentence, or delete it |
| 21 | Gradient text on the "important" word | M | Solid primary text color |

## 3. Layout and card style

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 5 | Cards inside cards inside cards | M | One level of container. Group with space and tone steps |
| 11 | Glass cards: blur, translucency, white inner highlight | M | Opaque surface one tone step from the ground. Blur only for overlays above scrolling content |
| 13 | Bento grid for ordinary information | L | A composition that fits the content: a list, a table, one large item and a few small ones |
| 14 | The same large radius on every element | L | Radius by size with nested math (tokens.md), or square, decided once |
| 15 | Every card: 1px border plus soft grey shadow | L | One treatment. On dark, tone steps. On light, a hairline or a small neutral shadow |
| 29 | Icon in a rounded tinted square on top of every card | M | Drop the icon, or use a plain line icon inline with the title where it aids scanning |
| 38 | Four-column SaaS footer regardless of site size | L | Size the footer to the real links. A closing statement with the name is often enough |
| 47 | Huge empty whitespace used to look "premium" | M | Make the main thing larger, or carry the full content. One deliberate rest per page |
| 48 | Identical vertical spacing between every section | L | Gaps inside sections clearly smaller than gaps between them; vary by weight of section |

## 4. Hero formula

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 8 | Centered stack: badge, headline, subhead, two buttons, picture below | M | An asymmetric split, a scene, or text over a large product view. One primary action |
| 18 | Fake dashboard of grey bars floating in a browser frame | H | A real screenshot, or a coded preview with plausible data showing the one thing the headline promises |
| 19 | That dashboard tilted in 3D for no reason | L | Present it flat, cropped close on the part that proves the claim |

## 5. Iconography

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 6 | Line icons attached to every list item, label and heading | L | Icons only where they help scanning: navigation, actions, dense lists |
| 22 | Sparkle icon next to anything AI | M | Name what the feature does. Show its output |
| 23 | Magic wand for AI | M | Same |
| 24 | Brain for "intelligence" | M | Same |
| 25 | Rocket for "growth" or "launch" | M | A real number with its comparison, or nothing |

## 6. UI decoration

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 7 | Terminal window on a product that has nothing to do with code | M | Show the product's real output |
| 26 | Green dot labelled "AI powered" or "Live" with no live state behind it | M | Show a status only when something is actually live |
| 27 | Decorative command bar that does nothing | M | Make it work or remove it |
| 28 | Pills and badges everywhere | L | Badges only for real distinct states. Counts and meta as quiet text |

## 7. Motion

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 30 | Every section fades and rises on scroll | L | One entrance on load, or one signature move. See motion.md |
| 31 | Everything grows on hover | L | Color or surface change on hover; tiny scale-down on press |

**Detect:** `animate-`, `whileInView`, `data-aos`, `hover:scale-`, `transform: scale(1.0x)` on `:hover`.

## 8. Content structure

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 4 | Every process becomes exactly three steps | L | As many steps as the process really has |
| 16 | Three feature cards straight under the hero | M | The number of features worth showing, composed by importance |
| 32 | Text-left/image-right, then flipped, forever | L | A different composition for each neighbouring section |
| 33 | Exactly three benefits | L | Let the content set the count |
| 34 | Exactly three testimonials | L | Real testimonials only, however many exist |
| 35 | Exactly three pricing tiers | L | Tiers that match the real model. Show what the next tier unlocks and real discounts |
| 36 | Middle tier labelled "Most Popular" | M | Only with real usage data behind it |
| 37 | FAQ accordion with no real questions | L | Only questions people actually ask, answered fully |

## 9. Fabricated content and social proof

Always H. These are not style problems; they are false statements.

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 17 | "Trusted by" logo strip of famous brands | H | Real customers with permission, or no strip |
| 41 | Round invented stats: "10,000+ happy teams", "10x faster" | H | A real, sourced number, or none. Ask the user |
| 42 | Testimonial from "Sarah, Product Manager" | H | A real quote with a real name, or no section yet |
| 43 | Stock or generated headshots on testimonials | H | Real photos with permission, or initials, or nothing |
| 44 | Decorative charts with meaningless data | H | Real data, or a clearly labelled illustrative example |
| 45 | Fake product UI in place of the real one | H | The real interface, even if less polished |
| 46 | Feature cards for features that do not exist | H | Shipped features only, or clearly marked "planned" |

## 10. Generic CTAs

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 39 | "Get started" as the label everywhere | M | Name what happens: "Create a workspace", "Book a table" |
| 40 | "Start building today" with no product meaning | M | Tie the action to the product's real outcome |

## 11. Decorative mismatch

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 12 | Glowing blobs behind sections | M | Remove. Plain ground or one real visual |
| 49 | Floating 3D sphere, cube or crystal that means nothing | M | One concrete object or scene from the product's world |
| 50 | SaaS design language on something that is not SaaS | M | Visual language from what the thing is: a restaurant, a studio, a hut |

## 12. Rhetorical inversion

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 51 | "It's not just X. It's Y." | M | State Y directly |
| 52 | "It's not about X. It's about Y." | M | Same |
| 53 | "That's not X. That's Y." | M | Same |
| 54 | "More than just X..." | M | Same |
| 55 | "It doesn't just X. It Y." | M | Same |

**Detect:** `not just`, `not about`, `more than just`, `doesn't just`.

## 13. Sentence and structure rhythm

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 56 | Triplets: "Fast. Simple. Powerful." | M | One specific sentence |
| 57 | Every paragraph the same length | L | Length follows how much the point needs |
| 58 | Every sentence the same cadence | L | Mix short and long on purpose |
| 59 | Every bullet starts with the same grammar | L | Vary construction; parallel only where it helps comparison |
| 89 | Constant dramatic fragments: "No fluff. Just results." | M | Use the device once, if at all |

## 14. Stock phrases and openers

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 60 | "Whether you're a founder, creator, or marketer..." | M | Address the actual reader |
| 61 | Fake ranges: "From productivity to creativity" | L | Say exactly what is covered |
| 62 | Rhetorical question answered immediately | L | State the point |
| 63 | "Here's the thing." | L | Cut |
| 64 | "The best part?" | L | Cut |
| 65 | "The result?" | L | Cut |
| 66 | "Why does this matter?" | L | Cut |
| 67 | "Let's break it down." | L | Cut |
| 68 | "At its core..." | L | Cut |
| 69 | "In today's digital landscape..." | M | Open with the point |
| 70 | "In an increasingly fast-paced world..." | M | Same |

## 15. Word choice

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 71 | delve, underscore, pivotal, intricate, landscape, tapestry, realm | M | Plain, specific words |
| 72 | unlock, elevate, revolutionize, seamless, robust, supercharge, effortless, game-changing, cutting-edge, all-in-one | M | Describe the mechanism or the outcome |
| 73 | An em dash every few sentences | M | Periods and commas. An occasional dash, not a habit |

## 16. Padding and fake depth

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 74 | Colon headings: "The problem:" "The solution:" "The result:" | L | Headings that fit the argument |
| 75 | Random bold words in every paragraph | L | Bold only what someone scanning must not miss |
| 76 | The same idea repeated with synonyms | L | Cut the repeat |
| 77 | "highlighting...", "underscoring...", "fostering..." tails | M | Make the point or cut the clause |
| 82 | Every section ends with its own mini-conclusion | L | End when the point is made |
| 83 | Conclusion repeats the introduction | L | End with a next step or a decision |

## 17. Unsourced authority and fake balance

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 78 | "Experts say" with no expert | H | Name the source or drop the claim |
| 79 | "Studies show" with no study | H | Same |
| 80 | Precise statistics with no source | H | Same |
| 81 | Perfectly balanced pros and cons when reality is lopsided | M | Let the analysis show the real asymmetry |

## 18. Fake human voice

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 84 | Ending on an inspirational "Because..." line | L | End when the point is made |
| 85 | Forced slang to sound human | M | The register of the rest of the piece |
| 86 | "honestly", "lowkey", "kinda", "no cap" in corporate copy | M | Same |
| 87 | Invented confessions: "I used to think X too" | H | First person only when it is true |
| 88 | Fake contrarian hook: "Everyone is doing X wrong" | M | Only if the piece delivers the argument |

## 19. Image and photo artifacts

| # | Pattern | Sev | Instead or tell |
| --- | --- | --- | --- |
| 90 | Plastic, poreless skin | M | Texture, asymmetry, small imperfections |
| 91 | Everything in golden-hour light | L | Light that matches the setting and time |
| 92 | Perfect central symmetry | L | Natural asymmetry |
| 93 | Everyone attractive in the same way | M | Real variation in age, build and features |
| 94 | Cinematic background blur on mundane scenes | L | Depth of field that fits the context |
| 95 | Orange-and-teal grading | L | Natural color for the scene |
| 96 | Glossy surfaces on matte materials | L | Finish true to the material |
| 97 | Reflections that do not match the scene | M | Physically consistent reflections |
| 98 | Fingers, straps, glasses or jewellery melting at contact points | H | Regenerate or crop |
| 99 | Background objects that repeat or merge | M | Regenerate or crop |

Also: text, fake buttons or logos baked into a generated image (real text belongs in the page),
and an image with a hard edge on a page of a different color (match or mask the edge).

## 20. Decks

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 100 | Every slide the same layout, rhythm and visual decisions | M | A layout per slide job: data, quote, timeline, comparison, statement |

---

## 21. Third-wave palettes and editorial cosplay

The published fix for purple slop was "warm it up and make it editorial". Models adopted the
fix wholesale, and it became the most recognizable generated look of 2025-2026.

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 101 | Cream ground (near #F4F1EA) with terracotta, rust or clay accent (near #D97757) and a serif display | M | A ground and accent from this product's world. Warmth from stone, wood, a photograph or a full warm field |
| 102 | Near-black ground with one acid-green or vermilion accent | M | A tinted dark ramp and an accent from the world |
| 103 | Broadsheet cosplay: hairlines on every section, zero radius, dense columns | M | Structure from space and tone. Rules only where they separate data |
| 104 | Many near-identical tints for text ("five lavenders") | L | Three text roles from one neutral ramp |
| 105 | Colored glows and colored shadows | M | Depth from surface steps; small neutral shadows on light themes only |
| 106 | Accent on everything, so nothing leads | M | The accent on the primary action, the selection and one key figure |

**Detect:** `#f4f1ea`, `#d97757`, `shadow-[0_0_`, `drop-shadow` with rgba color, `box-shadow` with a saturated color.

## 22. Type and meta tells

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 107 | Headings at weight 800-900 | L | 400-600; hierarchy from size and color |
| 108 | Negative letter spacing on small text | L | Zero or slightly positive under 16px. Tighten only display sizes |
| 109 | Mixed number formats, proportional digits in tables | L | One format, `tabular-nums` |
| 110 | Monospace as a "technical voice" for labels and captions | M | The text face. Mono only for code and aligned data |
| 111 | Meta strings joined with middle dots: "Design · Build · Ship" | L | Plain sentence or separate fields |
| 112 | "→" appended to every link and button; "WORD — fragment" labels | L | The label alone. An arrow only where it signals navigation away |
| 113 | Headline longer than two lines at any width | M | About five words, ~32 characters. The rest goes in the subhead |

**Detect:** `font-black`, `font-extrabold`, `tracking-tight` on `text-xs`/`text-sm`, `font-mono` on labels, `→` in button text, ` · ` in meta strings.

## 23. Component tells

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 114 | Index numbering 01 / 02 / 03 on content that is not a sequence | M | Order by position or scale. A real `<ol>` when it is a sequence |
| 115 | Stat cards stuffed with sparklines, icon circles or mini bars | M | Label, figure, change with its comparison |
| 116 | Equal cards side by side, each with the same chart or layout | M | One main chart, smaller items of a different kind, varied widths |
| 117 | Rainbow bars in one series; glowing or pill-shaped bars | M | One series in neutral steps, the accent on the bar that matters |
| 118 | Emoji as nav icons, bullets, labels or status | H | One line-icon set, a small status dot, or nothing |
| 119 | "PRO", "New ✨", "Beta 🚀" badges everywhere | M | Remove, or one quiet text badge where it is true |
| 120 | Logo as a gradient tile with a sparkle, a glossy orb or a gradient wordmark | M | The name in the main face plus a flat one-color mark |
| 121 | Floating blurred pill navigation on a plain page | L | A plain bar: name, a few links, one action |
| 122 | Pulsing dot on something that is not live | M | Static, or remove |
| 123 | Effect components as decoration: meteor showers, starfields, sparkle particles, rainbow or travelling neon borders, glitch text, magnetic buttons, cursor followers, hover spotlights, morphing blobs | M | Remove. See components.md for when one is earned |

**Detect:** emoji characters in JSX/HTML text, `rounded-full` on everything, `animate-ping`, `backdrop-blur` on nav, `bg-gradient-to` on logo.

## 24. Interface copy

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 124 | Greeting headline: "Welcome back, Sam! 👋" | M | Name the context: the page, the period, the account |
| 125 | Exclamation marks in interface text | L | Plain statements |
| 126 | A change with no reference: "+12%!!" | L | "+12% vs last month" |
| 127 | Wordy placeholders: "Search anything..." | L | "Search", or an example of the expected input |
| 128 | Vague action labels ("Submit", "Continue", "OK"), or the action renamed through the flow | L | The verb that happens. "Publish" leads to "Published" |
| 129 | Performative section labels: "Field notes", "Quietly trusted by", "On our desks" | M | Plain names for what the section holds |
| 130 | Fake-looking mock data: "$123,456", "[X]", "John Doe", lorem ipsum | M | Plausible names and numbers that add up |

**Detect:** `!` in UI strings, `Welcome back`, `...` in placeholders, `lorem`, `123,456`, `John Doe`.

## 25. Motion and code tells

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 131 | `transition-all`; animating width, height, top, left or margins | L | Name the properties. Animate transform and opacity |
| 132 | `animate-pulse`, `animate-ping` or breathing glows on things that are not live | M | Static. Skeletons pulse only while loading |
| 133 | Cards that scale or lift on hover | L | A surface or border step on hover |
| 134 | Bounce or overshoot on plain UI; `ease-in` on interface motion | L | One strong ease-out curve |
| 135 | Animation on actions used constantly (command palette, shortcuts, list navigation) | L | No animation for anything used many times a day |

**Detect:** `transition-all`, `transition: all`, `animate-pulse`, `animate-ping`, `animate-bounce`, `hover:scale`, `ease-in` not followed by `-out`.

## 26. Structure and substance

| # | Pattern | Sev | Instead |
| --- | --- | --- | --- |
| 136 | Avoidance aesthetic: tells removed, nothing put in their place, a thin page | H | Scale, full content, real pictures, a field of color, one live thing |
| 137 | Stock section order: hero, logos, features, testimonial, pricing, CTA | M | The order of the argument: one claim per section with its proof |
| 138 | Distinctive first screen, then stock blocks | M | Carry the direction into pricing, FAQ and footer |
| 139 | Missing states: empty, error, loading, focus, disabled | M | Every list, form and control designed in every state |
| 140 | Generic row of four KPI cards on top of every page | M | Only the figures this view answers. Often each figure leads its own panel |
