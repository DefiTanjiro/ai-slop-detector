# Copy

<!-- scan:ignore-file: this file quotes tells as examples -->

Words are design content. Copy can make work feel as templated as any gradient. This file
covers interface copy, page copy, long-form writing and product documents.

## 1. Facts first

- Every number, quote, customer, review, source and claim must come from the user or a
  source you can name. Nothing else is stated as fact (#41-#46, #78-#80).
- When a section needs proof you do not have, ask. If you must proceed, leave a visible
  placeholder such as `[customer quote, pending approval]` and list it in the report.
- Sample content is fine where the brief leaves gaps (menu items, room names, mock rows) so
  a design is seen at full density. Label it in the report as sample content to replace.
- Never invent a first-person story (#87).

## 2. Interface copy

- **Name things the way users think.** "Notifications", not "webhook config".
- **Buttons say what happens.** "Save changes", "Send invoice", "Create workspace", not
  "Submit", "Continue" or "OK" (#128). The action keeps its name through the flow: "Publish"
  produces "Published".
- **Titles name the context.** The page, the period, the account. No greetings (#124).
- **No exclamation marks** in interface text (#125).
- **Changes state their comparison:** "+12% vs last month", "3 fewer than last week" (#126).
- **Short labels:** "Search", not "Search anything..." (#127). Placeholders show an example
  input and end with `…`.
- **No trailing periods** on labels, buttons, headings and captions. Paragraphs keep them.
- **Errors** say what happened and how to fix it, in the interface's voice. They do not
  apologize and are never vague. They do not repeat the button label.
- **Empty states** are an invitation to act: why it is empty, and the one action that fills it.
- **Loading text** ends with an ellipsis character: "Saving…".
- **Numerals for counts:** "8 projects". Pluralize correctly: "1 member", not "1 members".
- **Sentence case** everywhere unless the brand documents otherwise.
- **Plain section names** (#129). "Pricing", not "The investment".

## 3. Page copy

**Write the argument before the layout.** List the page as claims, one line per section,
each with its proof:

```
Hero: [what it is, for whom] - proof: [the product itself, shown]
Section 2: [claim] - proof: [real number / real screenshot / real quote]
Section 3: [claim] - proof: [...]
```

Delete any section that has no claim. This replaces the stock order of hero, logos, three
features, testimonial, pricing and CTA (#137).

**Headlines:**

- Two lines or fewer at every width (#113). About five words, around 32 characters, is safe.
- Say what the product does for whom, with this product's nouns. If a competitor's name
  fits, rewrite it.
- No styled accent word (#2, #21).
- One supporting sentence under the headline says plainly what the thing is.
- One primary action, named for what it does (#39).

**Statements:** a large intro sentence or quote stays at statement size and runs to about 25
words. Larger than that, it is a headline and the two-line rule applies.

## 4. Long-form writing

Applies to posts, articles, newsletters, cover letters and READMEs.

1. **Open with the point.** No scene-setting (#69, #70), no "Here's the thing" (#63).
2. **One claim per paragraph,** with its evidence. Cut paragraphs that repeat (#76).
3. **State things directly.** No "not X, but Y" inversions (#51-#55).
4. **Plain words** (#71, #72). "Use", not "leverage". "Help", not "empower".
5. **Vary rhythm** (#57-#59). A short sentence after two long ones. Paragraphs of different
   lengths.
6. **No triplets by reflex** (#56). Two items or four are fine when that is what exists.
7. **Punctuation:** periods and commas. Em dashes rarely (#73). Few colons as headings (#74).
8. **Bold sparingly** (#75): only what a scanning reader must not miss.
9. **End on a next step or a decision,** not a summary of the opening (#83) or an
   inspirational line (#84).

### LinkedIn and social posts

- First line says what happened or what you made, plainly. No contrarian bait (#88), no
  "I used to think" (#87) unless true.
- Short paragraphs are fine; one-line dramatic fragments in a row are not (#89).
- Credit people and sources by name.
- Two or three relevant hashtags at most.

### Cover letters

- Specific to the company and role: name something real about them.
- Who you are, why you fit this role, what you did that others cannot claim, each with a
  concrete result the candidate actually achieved.
- No "I am excited to apply", no "passionate", no "dynamic team".

## 5. Product documents

PRDs, proposals, specs, release notes and status updates have their own slop.

| Tell | Instead |
| --- | --- |
| "Seamless experience", "robust platform", "scalable solution" | The mechanism: "loads in under 1s on 4G", "handles 2,000 req/s per node" (real numbers only) |
| Goals with no metric: "improve engagement" | A metric, a baseline and a target: "weekly active editors from 340 to 500 by Q2" |
| Every section has exactly three bullets | As many as the content has |
| Invented market sizes, adoption figures, competitor data | Sourced figures with the source named, or a stated assumption marked as such |
| "Users want X" with no evidence | Who said it, how many, where: "6 of 9 interviewed admins" |
| Risks section of generic risks ("timeline", "scope creep") | The specific risks of this project, each with an owner and a mitigation |
| Feature lists with no user or job | User story or job: who, what they do, what changes for them |
| Release notes that celebrate: "We're thrilled to unveil..." | What changed, who it affects, what to do: "Exports now include tax IDs. Re-run last month's export if you filed with it" |
| Executive summary that repeats the document | The decision needed, the recommendation, the cost of not deciding |
| Uniform tables of "Pros / Cons" balanced 3 and 3 (#81) | The real trade-off, lopsided if it is |

## 6. Micro-typography

- `…` not `...`; curly quotes in prose, straight quotes in code.
- Non-breaking spaces in `10 MB`, `⌘ K` and brand names that must not wrap.
- `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs.
- Tabular figures wherever numbers are compared.
