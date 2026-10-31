# App screens

A page is read and scrolled. An app screen is worked in: dashboards, admin and analytics
views, settings, billing, inboxes, queues, wallets, editors. People look at it for hours, so
the chrome stays quiet and the data carries the color.

Quiet borders, small labels and repeated panels are normal here. Gradients, glows, icons in
tinted squares, rainbow charts and invented vanity numbers are not.

## 1. Before building

- **Inventory the data and the jobs.** What does the user come to this screen to find out or
  to do? List the real entities, fields and actions.
- **Name the screen's one question.** "How much did we bill this month and who is late?"
  The largest figure on the screen answers it.
- **Use real-looking data.** Names, amounts and dates that are plausible and add up. A total
  equals the sum of its rows.

## 2. Shell

- Persistent left sidebar, 240-280 wide: account or workspace switcher at the top, grouped
  links with icons in one column, a clear active state (surface step plus hairline, not a
  glow), collapse support, settings and help anchored at the bottom.
- The page title names the context: the page name or the period ("October 2026"), never a
  greeting (#124).
- Tabs, filters and the date range sit together under the title, in one row.
- Never shrink an app into a narrow centered column. It fills the viewport, capped around
  1440-1600.

## 3. Where things open

| Need | Component |
| --- | --- |
| Simple, non-blocking context (display options, profile menu) | Popover, anchored to its trigger |
| Short blocking task on the same page (create, edit, confirm) | Modal. Advanced settings collapsed by default |
| Feedback on an async or destructive action | Toast, with undo where possible |
| Permanent or deep detail (a record, an invoice) | New page with breadcrumbs or a clear back button |
| Parallel work without losing the list | Side sheet |

## 4. KPIs

- Only show the figures this view answers (#140). Often each figure belongs at the head of
  the panel that explains it, not in a separate row.
- When there is a row: three or four per row, matching the grid. One shared container split by
  hairlines often reads better than one card per figure.
- Each KPI: a label, the figure, and optionally a change. Nothing else: no icon circle, no
  sparkline, no tinted tile (#115).
- The answer figure leads: about 30-36px and at least 1.3 times its siblings (18-24px).
- Figures use `tabular-nums` and one format across the screen.

### Deltas

- State the comparison in words: "vs last month", "in the last 30 days".
- **Color means good or bad, not up or down.** Latency, errors, cost and churn are better
  when they fall. A bad change gets the negative color; a good one gets positive or grey.
- Zero or undefined change is grey. When the previous value was zero, write "+4 (new)", not
  "+100%". With nothing to compare, show a grey dash.

## 5. Charts

| Question | Chart |
| --- | --- |
| How did it change over time? | Line (area only for one series) |
| Which is bigger? | Bars, sorted, horizontal when labels are long |
| What share of the whole? | One stacked bar, or a ranked list with thin bars. Pie only with five or fewer slices and one dominant |
| Are we on track for one goal? | Progress bar |
| Fewer than four data points | A figure, not a chart |
| More than 15 categories | A table with inline bars |

- One main chart, clearly the biggest thing on the screen. Anything else showing data is
  smaller and different in kind, such as a ranked list or a short table (#116).
- One accent per chart, on what matters (this month, the tracked line). Everything else in
  neutral steps. Several hues only when series must be told apart, and one still leads (#117).
- Muted grid, small readable tick labels, first and last labels kept at every width.
- Hover shows exact values; neighbouring marks dim.
- Same bar width across related charts.

## 6. Tables and lists

- Rows 36-44 tall, one height for all rows. Headers aligned with their values.
- Numbers right-aligned in tabular figures. Text left-aligned.
- Separate rows with a hairline or a background step, not both.
- Plain values: "Unknown", real names, not internal codes.
- Inline bars live in the column they measure. Empty columns are hidden.
- Multi-select checkboxes. Selecting rows reveals a bulk-action bar with the count and the
  actions; it stays out of the way until then.
- Row actions appear on hover and focus, and always on touch.

### Status pills

- One status mark per row. A tag and a badge saying the same thing is a duplicate.
- Pale tint with dark text of the same hue, 20-24 tall, 12px text.
- A saturated fill only for the one rare state that needs action. When many rows carry it,
  switch to a small dot with an ink label.
- Pills never shrink: `flex: none; white-space: nowrap`.

## 7. States

Design every list, table, chart and form in each state (#139):

- **Empty:** an icon or small illustration, one sentence on why it is empty, one action that
  fills it. No fake data.
- **Loading:** skeletons shaped like the real content. Spinners only inside buttons.
- **Error:** visibly an error, says what happened and how to fix it. Its copy does not repeat
  the button label. Errors do not apologize.
- **Partial:** some data missing. Show what exists and mark the gap.

## 8. Forms and settings

- Labels above fields, always visible. Placeholders show an example, not the label.
- Limits that remain (password rules, file size) sit next to the field, tied with
  `aria-describedby`.
- Inline validation after the field is left, not on every keystroke.
- Group settings by what the user wants to change, not by how the system stores it.
- Destructive settings live at the bottom, separated, with confirmation or undo.

## 9. Small screens

- Complex charts become lists or simpler charts. No text below 11px.
- Tabs become a select. Wide tables scroll with an edge fade, or drop low-value columns.
- The sidebar becomes a drawer behind one menu button.
- Filters wrap cleanly; grids stay even.

## 10. Dark mode

Review it on its own, not as an inversion. Check muted text contrast, chart lines and fills,
and that each ramp step stays distinct. Depth comes from surface steps, not shadows.
Set `color-scheme: dark`.
