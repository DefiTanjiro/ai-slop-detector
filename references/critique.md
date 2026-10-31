# Critique

Passing the checklist means nothing banned is present. It does not mean the work is good.
Critique the render, not the code: you wrote the code and will read your intentions into it.
A screenshot only shows what is there.

## 1. Capture

When you can run or open the work, take screenshots at desktop (1440), tablet (768) and
phone (390) widths, in light and dark if both exist. Include menus, dialogs, empty and
error states. Hide dev overlays and toasts. Without a browser, critique from the code and say
so in the report.

## 2. Look passes

Make each pass on its own.

1. **One second, then five.** Glance and look away: what did you see? There should be one
   answer. Then read the first screen as a stranger for five seconds: what is this, who is it
   for, what do I do next?
2. **Squint.** Blur until text becomes grey bars. Two or three large masses with clear size
   differences, or many medium ones where nothing leads?
3. **Cover the logo.** Could this belong to a competitor or another industry? Does the
   direction reach pricing, FAQ and footer, or does it stop after the first screen (#138)?
4. **Edges.** Count the distinct left edges of text blocks down the page. Two or three, reused
   on purpose, is composed. Six means things were placed one at a time.
5. **Space.** Related things close, unrelated far. Gaps between sections clearly larger than
   inside them. Any accidental hole, especially where decoration was removed (#136)?
6. **Type.** Decisive jump from body to headline? More than five sizes? Orphan words? Lines
   over 75 characters?
7. **Color.** Name the proportions: what holds most of the surface, what supports, where the
   accent is. An accent in ten places means nothing (#106).
8. **Sameness.** One word per section's layout (split, list, grid, statement, full-bleed). The
   same word twice in a row, or three times on the page, is the template showing (#32, #100).
9. **Substance.** Does every section deliver its information completely? Would the visitor
   leave knowing what they came for?
10. **Phone.** Its own composition, or the desktop squeezed? Anything running off the edge?
11. **States.** Open every menu, empty state and error. Do they exist and look designed (#139)?

## 3. Score

Score 1-10 on four criteria and weight them:

| Criterion | Weight | Asks |
| --- | --- | --- |
| Direction | 30% | Does it belong to this product? Would the competitor test fail? |
| Craft | 30% | Spacing, type, color, alignment, states |
| Clarity | 25% | Five-second test, hierarchy, actions named for what they do |
| Substance | 15% | Real, complete content; nothing invented |

**Caps:** any H-severity pattern still present caps the score at 6. Any fabricated proof caps
it at 4. A first screen that fails the five-second test caps it at 6.

## 4. Verify before fixing

When findings come from a scan, a second model or an earlier round, check each against the
evidence and mark it:

- **Confirmed:** fix it.
- **Partly:** fix the part that holds.
- **False:** the evidence does not show it. Record why and move on.
- **Artifact:** caused by the capture (a dev overlay, a stale cache, a toast). Not a page bug.

## 5. Loop

Write the top problems before fixing anything. Fix five to ten per round, worst first.
Re-capture and check the other theme and widths for regressions.

**Round budget: three.** Stop when the score meets the finish line or the budget is spent.
If it is spent and the bar is not met, report the score, the open findings and what each would
cost to fix. Do not start another round without the user's approval.

## 6. Write it down

```
Round 2: score 7.4 (direction 8, craft 7, clarity 8, substance 6)
Fixed: #113 hero headline cut to 5 words; #115 sparklines removed from stat cards
Open: #136 pricing section thin, needs real plan details from user
False: scan flagged #110 on <code> blocks, mono is correct there
```
