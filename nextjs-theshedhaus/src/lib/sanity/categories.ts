export function getPrimaryCategory(
  category: string | string[] | null | undefined,
  fallback?: string,
): string | undefined {
  if (Array.isArray(category)) {
    return category.find(Boolean) || fallback;
  }

  return category || fallback;
}
