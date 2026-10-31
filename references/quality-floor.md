# Quality floor

Slop is not only how things look. A beautiful page with no focus states, broken forms and a
layout that jumps is still generated work. Every page and app screen meets this floor
without announcing it.

Summarized from Vercel's Web Interface Guidelines
(https://github.com/vercel-labs/web-interface-guidelines). Read the source for the full,
current list.

## Interactive states

Every button, input, link and interactive card has: default, hover, pressed, focus-visible,
disabled, and loading where an action is async. States stay inside the palette, and hover,
pressed and focus increase contrast rather than reduce it.

## Accessibility

- Semantic HTML first: `<button>` for actions, `<a>` for navigation, `<label>` for fields,
  `<table>` for tables. No `<div onClick>`.
- Icon-only buttons have `aria-label`. Decorative icons have `aria-hidden="true"`.
- Images have `alt` (empty for decorative ones).
- One `h1`, headings in order, a skip link on long pages.
- Async updates (toasts, validation) announce through `aria-live="polite"`.
- Text contrast at least 4.5:1, large text 3:1. Check muted text and dark mode separately.
- Everything works by keyboard in reading order.

## Focus

- Visible focus on every interactive element via `:focus-visible`.
- Never `outline: none` without a replacement ring.
- Sticky headers and overlays never cover the focused element.

## Forms

- Correct input `type`, `inputmode`, `name` and `autocomplete`.
- Never block paste.
- Labels are clickable; checkbox and label share one hit target.
- Submit stays enabled until the request starts; show a spinner during it.
- Errors inline next to the field; focus the first error on submit.
- Warn before leaving with unsaved changes.

## Content resilience

- Text containers handle short, average and very long content: truncate, clamp or wrap.
- Flex children that hold text get `min-width: 0`.
- Empty arrays and empty strings render an empty state, not broken UI.
- Dates and numbers through `Intl.DateTimeFormat` and `Intl.NumberFormat`. Switch relative
  times ("3 days ago") to absolute dates after about a week.

## Layout and images

- `<img>` has explicit width and height. Below-the-fold images lazy load; the hero image
  loads with high priority.
- No horizontal page scroll on phones. Full-bleed layouts respect safe-area insets.
- Layout with flex and grid, not JavaScript measurement.

## State and navigation

- Filters, tabs, pagination and open panels are reflected in the URL.
- Links are real links (middle-click and Cmd/Ctrl-click work).
- Destructive actions have confirmation or an undo window, never an immediate irreversible
  effect.

## Theming

- `color-scheme: dark` on dark themes. `<meta name="theme-color">` matches the background.
- Native `<select>` gets explicit background and text colors.

## Motion

- `prefers-reduced-motion` respected. No `transition: all`. See motion.md.
