// Case study `content` is authored as plain text with a small set of markers:
//   "## Heading"          -> section heading
//   "### 1. Step title"   -> a numbered step (consecutive steps render as a group)
//   "- item"              -> a bullet list (every line in the block starts with "- ")
//   anything else          -> a plain paragraph
// This keeps the DB column a simple string while still letting the case study
// page render real structure instead of one undifferentiated block of text.

type Step = { number: string; title: string; body: string };

export type ContentBlock =
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "steps"; steps: Step[] };

function parseBlock(raw: string): ContentBlock {
  const block = raw.trim();

  if (block.startsWith("## ")) {
    return { kind: "heading", text: block.slice(3).trim() };
  }

  if (block.startsWith("### ")) {
    const [firstLine, ...rest] = block.split("\n");
    const match = firstLine.match(/^###\s*(\d+)\.\s*(.+)$/);
    return {
      kind: "steps",
      steps: [
        {
          number: match?.[1] ?? "",
          title: match?.[2] ?? firstLine.replace(/^###\s*/, "").trim(),
          body: rest.join(" ").trim(),
        },
      ],
    };
  }

  const lines = block.split("\n").map((l) => l.trim());
  if (lines.length > 0 && lines.every((l) => l.startsWith("- "))) {
    return { kind: "list", items: lines.map((l) => l.slice(2).trim()) };
  }

  return { kind: "paragraph", text: block.replace(/\n/g, " ") };
}

// Groups consecutive numbered-step blocks into a single `steps` block so the
// page can render them as one card grid instead of separate sections.
export function parseCaseStudyContent(content: string): ContentBlock[] {
  const rawBlocks = content
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);

  const blocks = rawBlocks.map(parseBlock);
  const grouped: ContentBlock[] = [];

  for (const block of blocks) {
    const last = grouped[grouped.length - 1];
    if (block.kind === "steps" && last?.kind === "steps") {
      last.steps.push(...block.steps);
    } else {
      grouped.push(block);
    }
  }

  return grouped;
}

export type ComparisonRow = { metric: string; before: string; after: string };

// `results` rows are authored as { metric, value } where value is
// "Before state → After state". Splits it into a clean before/after pair for
// the comparison table; falls back gracefully if a row has no arrow.
export function parseComparisonRows(results: { metric: string; value: string }[]): ComparisonRow[] {
  return results.map((r) => {
    const [before, after] = r.value.split(" → ");
    return { metric: r.metric, before: before?.trim() ?? r.value, after: after?.trim() ?? "" };
  });
}
