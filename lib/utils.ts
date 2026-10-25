export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** 将 "*高亮*" 语法拆成片段 */
export function splitEmphasis(text: string) {
  return text.split(/(\*[^*]+\*)/g).map((part) =>
    part.startsWith("*") && part.endsWith("*")
      ? { text: part.slice(1, -1), em: true }
      : { text: part, em: false },
  );
}
