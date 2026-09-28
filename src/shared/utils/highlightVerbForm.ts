export type HighlightSegment = {
  text: string;
  matched: boolean;
};

/**
 * Splits a sentence into segments so the UI can highlight the verb form it
 * demonstrates. Matching is whole-word and case-insensitive, and supports
 * slash-separated variants (e.g. "was/were") by highlighting whichever
 * variant actually appears in the sentence.
 */
export function highlightVerbForm(sentence: string, form: string): HighlightSegment[] {
  const variants = form
    .split(/[/,]/)
    .map((variant) => variant.trim())
    .filter(Boolean);

  if (!variants.length) {
    return [{ text: sentence, matched: false }];
  }

  const pattern = variants
    .map((variant) => variant.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const matcher = new RegExp(`\\b(?:${pattern})\\b`, "gi");

  const segments: HighlightSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = matcher.exec(sentence)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ text: sentence.slice(lastIndex, match.index), matched: false });
    }
    segments.push({ text: match[0], matched: true });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < sentence.length) {
    segments.push({ text: sentence.slice(lastIndex), matched: false });
  }

  return segments;
}
