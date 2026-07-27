export interface AffiliateProduct {
  id: string;
  name: string;
  brand: string;
  asin: string;
  priceClass: "Budget" | "Mid-Range" | "Premium" | "Luxury";
  rating: number;
  reviewCount: number;
  badge?: "Best Overall" | "Best Budget" | "Upgrade Pick" | "Staff Pick" | "Runner Up";
  imageUrl: string;
  summary: string;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  amazonUrlOverride?: string;
}

export const AFFILIATE_CONFIG = {
  amazonAssociateTag: process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || "veritaspicks-20",
  amazonDomain: "www.amazon.com",
  defaultDisclosure:
    "Veritas Picks is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you. We test and review products independently.",
  shortDisclosure: "Reader-supported. When you buy through our links, we may earn a commission.",
  amazonButtonText: "Check Price on Amazon",
};

export const affiliateConfig = AFFILIATE_CONFIG;


/**
 * Builds an affiliate-tagged Amazon URL from an ASIN or custom URL.
 */
export function buildAmazonUrl(asin: string, customTag?: string, overrideUrl?: string): string {
  if (overrideUrl) {
    return overrideUrl;
  }
  const tag = customTag || AFFILIATE_CONFIG.amazonAssociateTag;
  return `https://${AFFILIATE_CONFIG.amazonDomain}/dp/${asin}?tag=${encodeURIComponent(tag)}&linkCode=ogi&th=1&psc=1`;
}

/**
 * Validates ASIN format (10-character alphanumeric)
 */
export function isValidAsin(asin: string): boolean {
  return /^[B0-9][A-Z0-9]{9}$/.test(asin);
}
