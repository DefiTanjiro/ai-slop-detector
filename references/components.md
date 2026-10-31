# Components

What to replace slop components with, which functional patterns to reach for, and which
effect components to treat as tells unless the product earns them.

## 1. Slop component, replacement

| Slop component | Pattern | Replace with |
| --- | --- | --- |
| Three icon-topped feature cards | #16, #29 | A composition by importance: one large feature with its real UI, smaller ones as a list |
| Centered hero with badge and two CTAs | #8 | Asymmetric split or scene; one primary action, one quiet secondary link |
| Logo strip of famous brands | #17 | Real customers with permission, or one specific, sourced proof point, or nothing |
| Testimonial carousel | #34, #42 | One real quote, large, with name, role and company; or no section |
| Four KPI cards with icons and sparklines | #115, #140 | Figures at the head of the panels they explain, or one hairline-split strip |
| Pricing with "Most Popular" | #35, #36 | Tiers from the real model, what each next tier adds, real discounts, a custom tier for high limits |
| FAQ accordion of invented questions | #37 | Real questions, full answers, searchable when there are many |
| Gradient avatar initials circle | #9 | Account switcher: name, workspace, popover menu |
| Glowing "AI" badge | #22, #119 | The feature's name, and a view of its output |
| Floating blurred pill nav | #121 | Plain bar: name, three to five links, one action |
| Floating blobs and orbs behind sections | #12, #49 | Nothing, or one real visual where it helps |
| Fake dashboard in a tilted browser frame | #18, #19 | A coded preview of the one screen the headline promises, flat, cropped close |
| Decorative command bar | #27 | A working command palette for power users, or nothing |

## 2. Functional patterns worth reaching for

These earn their place because they change what the user can do or understand.

- **Bulk-action bar:** appears when rows are selected, shows the count and the actions,
  disappears when the selection clears.
- **Undo toast:** for destructive or reversible actions, a toast with an undo button and a
  visible countdown that pauses on hover. Better than a confirmation modal for most deletes.
- **Optimistic UI:** toggles, deletes and quick edits show the result immediately and roll
  back with a message if the server fails.
- **Stateful buttons:** idle, loading, success and error in the same footprint, without the
  layout jumping.
- **Copy feedback:** the copy button changes to a check and "Copied" for about two seconds.
- **Origin-aware popovers:** menus and popovers grow from their trigger and flip when there
  is no room. Modals stay centered.
- **Command palette:** for products used many times a day. Opens without animation.
- **Inline validation:** errors next to the field, focus moves to the first error on submit.
- **Skeletons:** shaped like the real content, only while loading.
- **Empty state with one action:** says why it is empty and how to fill it.
- **Side sheet:** for detail views that should not lose the list behind them.
- **Drag to confirm:** only for high-stakes, irreversible actions, with a keyboard alternative.
- **Live data with a pause:** a live chart or feed has a pause control and a clear "live" state
  that is actually live.

## 3. Effect components: the watchlist

Component libraries ship these, and models add them because they look impressive in a demo.
On most products they are #123. Each is acceptable only when the condition on the right is
true, and even then once per page.

| Effect | Acceptable when |
| --- | --- |
| Meteor showers, starfields, warp speed | The product is about space, astronomy or night sky |
| Sparkle particles | Celebrating a rare, real milestone the user achieved |
| Confetti or party poppers | A rare first-time success (first payment received, first deploy) |
| Rainbow or travelling neon borders | Almost never. A brand whose identity is literally that |
| Glitch text | The product is about glitches, security incidents or retro computing |
| Matrix-style glyph rain | Never as decoration. Glyph art made from the product's own material can work as the one moment |
| Magnetic buttons, cursor followers | A creative portfolio where the cursor is part of the work |
| Hover spotlight on cards | Never on a grid of cards. Possibly on one showcase object |
| Morphing blobs and orbs | Never as decoration (#12, #49) |
| 3D tilt on hover | A single physical product shot, not cards |
| Liquid or gooey menus and toggles | A playful brand that commits to it everywhere, not one widget |
| Text scramble or typewriter reveals | One headline, once, with reduced-motion fallback |
| Particle dissolve on delete | Never on a frequent action |

Rule of thumb: if the effect would look the same on a competitor's site, it is decoration.

## 4. Logos and marks

- The product name set in the main typeface, plus a simple mark in one solid color.
- A slop logo (gradient tile, sparkle, glossy orb, emoji) gets redrawn flat: the wordmark
  alone, or a simple glyph from the product's idea.
- Never rename the product, even when the name contains "AI".
