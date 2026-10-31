# Motion

Motion is the last pass. A screen that needs animation to look finished is not finished.

## 1. Should it move at all?

| How often the user sees it | Decision |
| --- | --- |
| Many times a day (shortcuts, command palette, list navigation, tab switches) | No animation |
| Tens of times a day (hover, selection) | Instant or nearly instant color change |
| Occasionally (modals, drawers, toasts, menus) | Standard, short animation |
| Rarely (onboarding, first success, a milestone) | May add delight |

Valid reasons to move: showing where something came from or went, indicating a state
change, explaining a relationship, giving feedback on an action, avoiding a jarring jump.
"It looks cool" is not a reason on anything seen often.

## 2. What to remove

- `animate-pulse`, `animate-ping`, breathing glows and shimmer on things that are not live
  or loading (#132).
- Floating loops, parallax, elements that drift on scroll.
- `transition-all` and `transition: all` (#131).
- Hover scale or lift on cards (#133).
- Bounce and overshoot on plain UI (#134).
- The same fade-and-rise on every section (#30).
- Everything flying in from a different direction on load.

## 3. What to keep or add

- **Hover:** a quick color or surface change, 120-180ms.
- **Press:** `transform: scale(0.97)` on `:active`, 100-160ms ease-out.
- **Menus and popovers:** fade and rise a few pixels from the trigger, scaling from
  `transform-origin` at the trigger. Never from `scale(0)`; start at 0.95-0.97.
- **Modals:** centered origin, 200-300ms, with a dimming scrim.
- **Changed numbers:** tween the value, keep digits tabular so nothing jitters.
- **Page load:** at most one entrance, a short fade and rise of the main content with a
  small stagger (40-60ms, six items at most).
- **One signature move** per page if the direction calls for it, tied to the idea.

## 4. Timing and easing

- Interface motion stays under 300ms. A 180ms dropdown feels faster than a 400ms one.
- Enter and exit: strong ease-out, `cubic-bezier(0.22, 1, 0.36, 1)`.
- Movement on screen: `cubic-bezier(0.77, 0, 0.175, 1)`.
- Never `ease-in` for interface motion: it delays the moment the user is watching.
- One curve family across the product.

## 5. Properties

Animate `transform` and `opacity`. Name them: `transition-colors`,
`transition-[transform,opacity]`, `transition: opacity 160ms, transform 160ms`. Never animate
width, height, top, left, margins or large blurs; they stutter on weak devices.

## 6. Interruptible and gesture-driven

- Never lock input during a transition. A closing sheet the user grabs again follows the
  finger.
- Animate from the current on-screen value, not the target, when interrupted.
- Gesture-driven motion (drag, swipe, sheets) uses springs that carry velocity, not CSS
  keyframes.

## 7. Reduced motion

Every animation has a `prefers-reduced-motion` path that keeps the content and drops the
travel. Content must never stay hidden if a script or an animation fails. Decorative loops
stop. Autoplaying motion longer than five seconds needs a pause control.
