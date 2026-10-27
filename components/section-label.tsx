import { cn } from "@/lib/utils";

/** 小号等宽章节标签，例如「§ 01 · 关于 / About」 */
export function SectionLabel({
  index,
  zh,
  en,
  className,
}: {
  index: string;
  zh: string;
  en: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
        className,
      )}
    >
      <span>( {index === "§" ? "" : `${index} · `}{zh} / {en} )</span>
    </p>
  );
}
