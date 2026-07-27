export interface PinterestImageProps {
  title: string;
  description: string;
  imageUrl: string;
  pageUrl?: string;
  pinId?: string;
  keywords?: string[];
}

/**
 * Returns HTML data-pin-* attributes to be applied to any <img> or Next/Image tag
 * so Pinterest's official browser extension / rich pin crawler reads optimized metadata.
 */
export function getPinterestImageAttributes({
  title,
  description,
  imageUrl,
  pageUrl = "https://veritaspicks.com",
  pinId,
  keywords,
}: PinterestImageProps) {
  const keywordString = keywords && keywords.length > 0
    ? ` #${keywords.join(" #")}`
    : "";

  const fullDescription = `${description} | ${title}${keywordString}`;

  return {
    "data-pin-description": fullDescription.trim(),
    "data-pin-url": pageUrl,
    "data-pin-media": imageUrl,
    ...(pinId && { "data-pin-id": pinId }),
    "data-pin-nopin": "false",
  };
}

/**
 * Builds a direct Pinterest Save button link (creates a Pin modal dialog on Pinterest)
 */
export function buildPinterestShareUrl({
  url,
  media,
  description,
}: {
  url: string;
  media: string;
  description: string;
}): string {
  const params = new URLSearchParams({
    url,
    media,
    description,
  });
  return `https://www.pinterest.com/pin/create/button/?${params.toString()}`;
}

/**
 * Formats a collection of 5 Pinterest titles and 5 Pinterest descriptions
 * for editorial display and social metadata.
 */
export function getPinterestPinVariations(
  titles: string[],
  descriptions: string[]
): { title: string; description: string }[] {
  const maxLength = Math.max(titles.length, descriptions.length, 1);
  const variations: { title: string; description: string }[] = [];

  for (let i = 0; i < maxLength; i++) {
    variations.push({
      title: titles[i % titles.length] || "Veritas Picks Lifestyle Collection",
      description:
        descriptions[i % descriptions.length] ||
        "Discover aesthetic Amazon lifestyle finds and editorial inspiration.",
    });
  }

  return variations;
}
