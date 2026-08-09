/**
 * Extract plain text from Portable Text blocks
 */
export function extractTextFromPortableText(blocks: any[]): string {
  if (!Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      if (block._type === "block" && Array.isArray(block.children)) {
        return block.children
          .map((child: any) => (child._type === "span" ? child.text : ""))
          .join("");
      }
      return "";
    })
    .join(" ");
}

/**
 * Convert Portable Text to simple string for display
 */
export function portableTextToString(blocks: any): string {
  if (typeof blocks === "string") return blocks;
  if (Array.isArray(blocks)) return extractTextFromPortableText(blocks);
  return "";
}
