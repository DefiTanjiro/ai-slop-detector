#!/usr/bin/env node
// ai-slop-detector scan: a static first pass over source and copy.
// Usage: node scan.mjs <file-or-folder> [...more] [--json] [--min L|M|H]
// It finds candidates, not verdicts. Read each hit in context before changing anything.
// Ignore a line with "scan:ignore" in it, or a whole file with "scan:ignore-file".

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname, relative } from "node:path";

const CODE = new Set([".html", ".htm", ".css", ".scss", ".js", ".jsx", ".ts", ".tsx", ".vue", ".svelte", ".astro"]);
const COPY = new Set([".md", ".mdx", ".txt"]);
const MARKUP = new Set([".html", ".htm", ".jsx", ".tsx", ".vue", ".svelte", ".astro"]);
const SKIP_DIRS = new Set(["node_modules", ".git", "dist", "build", ".next", ".nuxt", "out", "coverage", ".taste-skill"]);
const RANK = { L: 1, M: 2, H: 3 };

// where: "code" = code files, "markup" = markup files, "copy" = every file
const RULES = [
  // Palette and surfaces
  { p: 9, s: "M", where: "code", re: /\b(from|via|to)-(purple|violet|indigo|fuchsia)-\d{2,3}\b|linear-gradient\([^)]*(#8b5cf6|#7c3aed|#6366f1|#a855f7|#6d28d9|purple|violet)/i, msg: "Purple or violet gradient" },
  { p: 21, s: "M", where: "code", re: /bg-clip-text|background-clip:\s*text/i, msg: "Gradient text" },
  { p: 105, s: "M", where: "code", re: /shadow-\[0_0_\d+px_rgba|drop-shadow-\[|box-shadow:[^;]*0\s+0\s+\d+px\s+rgba\((?!0,\s*0,\s*0)/i, msg: "Colored glow" },
  { p: 101, s: "M", where: "code", re: /#f4f1ea|#d97757/i, msg: "Cream or terracotta third-wave color" },
  { p: 11, s: "L", where: "code", re: /backdrop-blur|backdrop-filter:\s*blur/i, msg: "Blur: keep only for overlays above scrolling content" },
  // Type
  { p: 3, s: "M", where: "code", re: /uppercase[^"'`]*tracking-(wide|wider|widest|\[)|tracking-(wide|wider|widest|\[)[^"'`]*uppercase/i, msg: "Uppercase tracked label" },
  { p: 107, s: "L", where: "code", re: /\bfont-(black|extrabold)\b|font-weight:\s*(800|900)/i, msg: "Weight 800-900" },
  { p: 110, s: "M", where: "markup", re: /font-mono[^"'`]*(text-(xs|\[1[01]px\])|uppercase|tracking)|(text-xs|uppercase|tracking-\w+)[^"'`]*font-mono/i, msg: "Monospace used as a label voice" },
  { p: 108, s: "L", where: "code", re: /text-(xs|sm)[^"'`]*tracking-(tight|tighter)|tracking-(tight|tighter)[^"'`]*text-(xs|sm)/i, msg: "Negative tracking on small text" },
  // Components
  { p: 118, s: "H", where: "markup", re: /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u, msg: "Emoji in interface markup" },
  { p: 22, s: "M", where: "markup", re: /<(Sparkles?|WandSparkles)\b|\bSparkles?Icon\b/, msg: "Sparkle icon" },
  { p: 23, s: "M", where: "markup", re: /<(Wand2?|MagicWand)\b/, msg: "Magic wand icon" },
  { p: 24, s: "M", where: "markup", re: /<(Brain|BrainCircuit|BrainCog)\b/, msg: "Brain icon" },
  { p: 25, s: "M", where: "markup", re: /<Rocket\b/, msg: "Rocket icon" },
  { p: 112, s: "L", where: "markup", re: /→\s*<\/(a|button|Link)>|→\s*["'`]\s*\}?\s*<\/(a|button|Link)>/, msg: "Arrow appended to a link or button" },
  { p: 111, s: "L", where: "markup", re: />[^<]*\w\s·\s\w[^<]*</, msg: "Middle-dot meta string" },
  { p: 36, s: "M", where: "markup", re: /most popular/i, msg: "\"Most Popular\" label: real usage data behind it?" },
  // Motion and code
  { p: 131, s: "L", where: "code", re: /\btransition-all\b|transition:\s*all\b/, msg: "transition-all" },
  { p: 132, s: "M", where: "code", re: /\banimate-(pulse|ping)\b/, msg: "Looping pulse: is it live or loading?" },
  { p: 134, s: "L", where: "code", re: /\banimate-bounce\b|\bease-in\b(?!-out)/, msg: "Bounce or ease-in on UI" },
  { p: 133, s: "L", where: "code", re: /hover:(scale-|-translate-y-)/, msg: "Hover scale or lift" },
  { p: 30, s: "L", where: "code", re: /whileInView|data-aos=|ScrollReveal|\bfade-?up\b/, msg: "Scroll reveal: on every section?" },
  { p: null, s: "L", where: "code", re: /\b-?(?:m|p)[trblxy]?-\[(\d+)px\]|\b(?:gap(?:-[xy])?|space-[xy]|top|left|right|bottom|h|w)-\[(\d+)px\]/, msg: "Off-grid spacing value (tokens.md: 4px grid)", check: (m) => { const n = parseInt(m.match(/\[(\d+)px/)[1], 10); return n > 2 && n % 4 !== 0; } },
  // Interface copy
  { p: 124, s: "M", where: "copy", re: /welcome back,?\s/i, msg: "Greeting headline" },
  { p: 125, s: "L", where: "markup", re: />[^<>{}]*\w!{1,2}\s*</, msg: "Exclamation mark in UI text" },
  { p: 127, s: "L", where: "markup", re: /placeholder=["'][^"']*\.\.\.["']/i, msg: "Wordy placeholder ending in ..." },
  { p: 130, s: "M", where: "copy", re: /lorem ipsum|\$?123,456|\bjohn doe\b|\bjane doe\b|\[X\]/i, msg: "Fake-looking mock data" },
  { p: 39, s: "M", where: "markup", re: />\s*(Get started|Learn more|Start building today)\s*</i, msg: "Generic CTA label" },
  { p: 129, s: "M", where: "copy", re: /field notes|quietly trusted|on our desks/i, msg: "Performative section label" },
  { p: 26, s: "M", where: "copy", re: /\bAI[- ]powered\b/i, msg: "\"AI-powered\" label" },
  // Fabrication
  { p: 41, s: "H", where: "copy", re: /\b\d{1,3}(,\d{3})*\s*\+\s*(happy\s+)?(teams|users|customers|companies|developers|businesses|creators)\b|\b10x (faster|better|more)\b/i, msg: "Round stat: is it real and sourced?" },
  { p: 17, s: "H", where: "copy", re: /\b(trusted|loved|used) by (teams|thousands|leading|the world)/i, msg: "\"Trusted by\" claim: real customers with permission?" },
  { p: 78, s: "H", where: "copy", re: /\b(experts (say|agree|believe)|studies (show|suggest)|research (shows|suggests)|researchers (have )?found)\b/i, msg: "Unsourced authority" },
  // Writing
  { p: 51, s: "M", where: "copy", re: /\bnot just\b|\bit'?s not about\b|\bmore than just\b|\bdoesn'?t just\b/i, msg: "\"Not X, but Y\" inversion" },
  { p: 60, s: "M", where: "copy", re: /\bwhether you'?re an?\b/i, msg: "\"Whether you're a...\" opener" },
  { p: 63, s: "L", where: "copy", re: /here'?s the thing|the best part\?|the result\?|why does this matter\?|let'?s break it down|\bat its core\b/i, msg: "Stock transition" },
  { p: 69, s: "M", where: "copy", re: /in today'?s (digital|fast|ever|modern)|in an increasingly/i, msg: "Scene-setting opener" },
  { p: 71, s: "M", where: "copy", re: /\b(delve[sd]?|delving|underscores?|underscored|pivotal|intricate|tapestry|realm)\b/i, msg: "Overused model word" },
  { p: 72, s: "M", where: "copy", re: /\b(unlock|unleash|elevate|revolutioni[sz]e|seamless(ly)?|robust|supercharge|effortless(ly)?|game[- ]chang(er|ing)|cutting[- ]edge|all[- ]in[- ]one)\b/i, msg: "Hype word" },
  { p: 77, s: "M", where: "copy", re: /,\s*(highlighting|underscoring|fostering|showcasing)\b/i, msg: "Fake-depth tail clause" },
  { p: 86, s: "M", where: "copy", re: /\b(lowkey|no cap|kinda|ngl)\b/i, msg: "Forced slang" },
  { p: 87, s: "H", where: "copy", re: /\bI used to think\b/i, msg: "Confession opener: is it true?" },
  { p: 88, s: "M", where: "copy", re: /\beveryone (is|'s) (doing|getting) .{1,30} wrong\b/i, msg: "Contrarian hook" },
  { p: 56, s: "L", where: "copy", re: /\b[A-Z][a-z]{2,12}\.\s+[A-Z][a-z]{2,12}\.\s+[A-Z][a-z]{2,12}\./, msg: "Triplet fragments" },
];

function walk(target, out) {
  const st = statSync(target);
  if (st.isDirectory()) {
    for (const name of readdirSync(target)) {
      if (SKIP_DIRS.has(name) || name.startsWith(".")) continue;
      walk(join(target, name), out);
    }
  } else {
    const ext = extname(target).toLowerCase();
    if (CODE.has(ext) || COPY.has(ext)) out.push(target);
  }
  return out;
}

function applies(rule, ext) {
  if (rule.where === "copy") return true;
  if (rule.where === "markup") return MARKUP.has(ext);
  return CODE.has(ext);
}

function scanFile(file) {
  const ext = extname(file).toLowerCase();
  const text = readFileSync(file, "utf8");
  if (text.includes("scan:ignore-file")) return [];
  const isCopy = COPY.has(ext);
  const hits = [];
  let fenced = false;
  let dashes = [];
  text.split("\n").forEach((raw, i) => {
    if (isCopy && /^\s*(```|~~~)/.test(raw)) { fenced = !fenced; return; }
    if (fenced || raw.includes("scan:ignore")) return;
    // In copy files, ignore inline code spans.
    const line = isCopy ? raw.replace(/`[^`]*`/g, "") : raw;
    for (const rule of RULES) {
      if (!applies(rule, ext)) continue;
      const m = line.match(rule.re);
      if (!m) continue;
      if (rule.check && !rule.check(m[0])) continue;
      hits.push({ file, line: i + 1, pattern: rule.p, severity: rule.s, message: rule.msg, match: m[0].trim().slice(0, 60) });
    }
    if (line.includes("\u2014")) dashes.push(i + 1);
  });
  // #73: flag em dashes only when they are a habit, three or more per file.
  if (dashes.length >= 3) {
    hits.push({ file, line: dashes[0], pattern: 73, severity: "M", message: `${dashes.length} em dashes (lines ${dashes.slice(0, 8).join(", ")}${dashes.length > 8 ? ", ..." : ""})`, match: "\u2014" });
  }
  return hits;
}

const args = process.argv.slice(2);
const json = args.includes("--json");
const minIdx = args.indexOf("--min");
const min = minIdx >= 0 ? RANK[args[minIdx + 1]?.toUpperCase()] ?? 1 : 1;
const targets = args.filter((a, i) => !a.startsWith("--") && !(minIdx >= 0 && i === minIdx + 1));
if (targets.length === 0) {
  console.error("Usage: node scan.mjs <file-or-folder> [...] [--json] [--min L|M|H]");
  process.exit(2);
}

const files = targets.flatMap((t) => walk(t, []));
const hits = files.flatMap(scanFile).filter((h) => RANK[h.severity] >= min);

if (json) {
  console.log(JSON.stringify({ files: files.length, hits }, null, 2));
} else {
  const cwd = process.cwd();
  for (const h of hits) {
    const ref = h.pattern ? `#${h.pattern}` : "tokens";
    console.log(`${relative(cwd, h.file)}:${h.line}  ${ref} ${h.severity}  ${h.message}  "${h.match}"`);
  }
  const count = (s) => hits.filter((h) => h.severity === s).length;
  const distinct = new Set(hits.map((h) => h.pattern).filter(Boolean)).size;
  console.log(`\n${files.length} files, ${hits.length} hits (H ${count("H")}, M ${count("M")}, L ${count("L")}), ${distinct} distinct patterns.`);
  console.log("These are candidates. Check each in context, then triage: heavy, light or none.");
}
process.exit(hits.some((h) => RANK[h.severity] >= 2) ? 1 : 0);
