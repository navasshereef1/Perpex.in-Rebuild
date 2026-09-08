import Link from "next/link";
import type { ContentBlock } from "@/lib/richContent";
import { parseInlineLinks } from "@/lib/richContent";

function InlineText({ text }: { text: string }) {
  const segments = parseInlineLinks(text);
  return (
    <>
      {segments.map((seg, i) =>
        seg.href ? (
          <Link key={i} href={seg.href} className="font-medium text-navy-900 underline decoration-cyan-400 decoration-2 underline-offset-2 hover:text-cyan-600">
            {seg.text}
          </Link>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}

export default function RichContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.kind === "heading") {
          return (
            <h2
              key={i}
              className="mt-14 font-display text-2xl font-bold tracking-[-0.02em] text-navy-900 first:mt-0 md:text-3xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.kind === "paragraph") {
          return (
            <p key={i} className="mt-5 text-lg leading-relaxed text-navy-600">
              <InlineText text={block.text} />
            </p>
          );
        }
        if (block.kind === "list") {
          return (
            <ul key={i} className="mt-5 list-disc space-y-2 pl-5 text-lg leading-relaxed text-navy-600 marker:text-cyan-500">
              {block.items.map((item) => (
                <li key={item}>
                  <InlineText text={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (block.kind === "table") {
          return (
            <div key={i} className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-navy-900/[0.06]">
              <table className="w-full min-w-[480px] text-left text-[15px]">
                <thead>
                  <tr className="border-b border-line bg-mist">
                    {block.headers.map((h) => (
                      <th key={h} className="px-5 py-3 font-medium text-navy-900">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {block.rows.map((row, r) => (
                    <tr key={r} className="border-b border-line last:border-0">
                      {row.map((cell, c) => (
                        <td
                          key={c}
                          className={`px-5 py-4 align-top ${c === 0 ? "font-medium text-navy-900" : "text-navy-600"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <div key={i} className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {block.steps.map((step) => (
              <div key={step.number || step.title} className="border-t border-line pt-6">
                {step.number && (
                  <span className="font-display text-sm font-semibold text-cyan-500">
                    {step.number.padStart(2, "0")}
                  </span>
                )}
                <h3 className="mt-2 font-display text-lg font-semibold tracking-[-0.01em] text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-600">
                  <InlineText text={step.body} />
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}
