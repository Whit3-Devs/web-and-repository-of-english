/**
 * Verb forms can list accepted variants separated by "/" (e.g. "got/gotten",
 * "was/were"). These helpers keep that parsing in one place.
 */
export function splitVerbFormVariants(form: string): string[] {
  return form
    .split(/[/,]/)
    .map((variant) => variant.trim())
    .filter(Boolean);
}

/** Formats a form for display, spacing out variants: "got/gotten" -> "got / gotten". */
export function formatVerbForm(form: string): string {
  return splitVerbFormVariants(form).join(" / ");
}
