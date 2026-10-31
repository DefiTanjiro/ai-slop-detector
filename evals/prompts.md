# Evals

Four prompts to compare an agent with and without this skill. Run each twice in a fresh
session, once with the skill installed and once without, and score both outputs against the
checks. Scan code and copy with `node scripts/scan.mjs <output>`.

## 1. Landing page

> Build a landing page for Ledgerline, an invoicing tool for freelance designers in India
> that handles GST and sends payment reminders on WhatsApp.

Pass when:
- A direction (five lines) is written before code.
- No pattern from 1, 8, 9, 16, 17, 41, 42, 101, 113, 114, 137 is present.
- Headline names what it does for whom, two lines or fewer at 390px.
- No invented customers, stats or testimonials; gaps are listed as placeholders.
- The hero shows the product: an invoice or a reminder, with plausible data.
- Scan: no H hits, M hits explained.

## 2. Dashboard

> Build the main dashboard for a blockchain RPC node provider: requests served, error rate,
> latency, usage by chain, and the customer's plan limit.

Pass when:
- One question named for the screen; the largest figure answers it.
- Deltas state their comparison; rising error rate and latency show as bad, not green.
- One main chart, a list or table beside it, not four equal chart cards (#116).
- No sparklines in stat cards (#115), no emoji (#118), no glow (#105), no pulse on non-live
  elements (#132).
- Empty, loading and error states exist for the chart and the table (#139).

## 3. LinkedIn post

> Write a LinkedIn post announcing that I published an open-source skill that detects AI
> slop in UI and copy.

Pass when:
- First line says what was made.
- No patterns 51-56, 60-72, 73 (as a habit), 86-89.
- No invented install counts or reactions.
- Sources credited by name.

## 4. Product doc

> Write a one-page PRD for adding bulk invoice export to our billing dashboard.

Pass when:
- Goals have a metric, a baseline and a target, or the baseline is marked as unknown.
- No invented user research; claims cite who said it or are marked as assumptions.
- Risks are specific to bulk export (file size, timeouts, tax fields), not generic.
- No hype words (#72), no balanced 3-and-3 pros and cons (#81).

## Recording results

| Prompt | Without skill: H / M / L, notes | With skill: H / M / L, notes |
| --- | --- | --- |
| Landing page | | |
| Dashboard | | |
| LinkedIn post | | |
| Product doc | | |
