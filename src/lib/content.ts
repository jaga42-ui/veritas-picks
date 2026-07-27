import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { siteConfig } from "@/config/site";

export interface ProductItem {
  name: string;
  brand: string;
  asin: string;
  priceClass: "$" | "$$" | "$$$";
  rating?: number;
  reviewCount?: number;
  imageUrl: string;
  summary: string;
  description?: string;
  whyWeLoveIt?: string;
  perfectFor?: string;
  highlights?: string[];
  availableColors?: string[];
  badge?: string;
  pros: string[];
  cons: string[];
  amazonUrlOverride?: string;
}

export interface ProductWithGuide extends ProductItem {
  guideSlug: string;
  categoryName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BuyingGuideFrontmatter {
  title: string;
  slug: string;
  description: string;
  heroImage: string;
  category: string;
  categoryName: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorRole?: string;
  featured?: boolean;
  editorNotes?: string;
  styleNotes?: string;
  pinterestTitles?: string[];
  pinterestDescriptions?: string[];
  pinterestKeywords?: string[];
  products: ProductItem[];
  faqs?: FAQItem[];
}

export interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

export interface BuyingGuide extends BuyingGuideFrontmatter {
  frontmatter: BuyingGuideFrontmatter;
  content: string;
  readingTime: string;
  headings: TOCHeading[];
}

export type GuideItem = BuyingGuide;
export type GuideData = BuyingGuide;

const guidesDirectory = path.join(process.cwd(), "src/content/guides");

function ensureDirectory() {
  if (!fs.existsSync(guidesDirectory)) {
    fs.mkdirSync(guidesDirectory, { recursive: true });
  }
}

export function extractHeadings(content: string): TOCHeading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TOCHeading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/\[.*?\]\(.*?\)/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    headings.push({ id, text, level });
  }

  return headings;
}

export function getGuideSlugs(): string[] {
  ensureDirectory();
  const files = fs.readdirSync(guidesDirectory);
  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getGuideBySlug(slug: string): BuyingGuide | null {
  ensureDirectory();
  const cleanSlug = slug.replace(/\.mdx?$/, "");
  const mdxPath = path.join(guidesDirectory, `${cleanSlug}.mdx`);
  const mdPath = path.join(guidesDirectory, `${cleanSlug}.md`);

  let fullPath = mdxPath;
  if (!fs.existsSync(mdxPath)) {
    if (fs.existsSync(mdPath)) {
      fullPath = mdPath;
    } else {
      return null;
    }
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const rawFrontmatter = data as Partial<BuyingGuideFrontmatter>;
  const readingTime = calculateReadingTime(content);
  const headings = extractHeadings(content);

  const categorySlug = rawFrontmatter.category || "lifestyle";
  const categoryInfo = siteConfig.categories.find((c) => c.slug === categorySlug);

  const pinterestTitles =
    rawFrontmatter.pinterestTitles && rawFrontmatter.pinterestTitles.length > 0
      ? rawFrontmatter.pinterestTitles
      : [
          rawFrontmatter.title || "Editorial Edit",
          `${rawFrontmatter.title || "Editorial"} — Aesthetic Amazon Finds`,
          `Curated ${categoryInfo?.name || "Lifestyle"} Essentials Worth Saving`,
          `Timeless & Minimalist: ${rawFrontmatter.title || ""}`,
          `Editor's Pick: ${rawFrontmatter.title || ""}`,
        ];

  const pinterestDescriptions =
    rawFrontmatter.pinterestDescriptions &&
    rawFrontmatter.pinterestDescriptions.length > 0
      ? rawFrontmatter.pinterestDescriptions
      : [
          rawFrontmatter.description || "Curated editorial favorites.",
          `Discover curated luxury-looking Amazon finds and minimalist inspiration for ${categoryInfo?.name || "lifestyle"}.`,
          `Save this aesthetic editorial wishlist of timeless favorites and viral finds.`,
          `Scandinavian minimalism meets everyday luxury in our curated guide.`,
          `High-end looks without the designer price tag. Pin your favorite picks now.`,
        ];

  const frontmatter: BuyingGuideFrontmatter = {
    title: rawFrontmatter.title || "Untitled Collection",
    slug: cleanSlug,
    description: rawFrontmatter.description || "",
    heroImage: rawFrontmatter.heroImage || "",
    category: categorySlug,
    categoryName: rawFrontmatter.categoryName || categoryInfo?.name || "Editorial Edit",
    publishedAt: rawFrontmatter.publishedAt || "2026-07-27",
    updatedAt: rawFrontmatter.updatedAt || rawFrontmatter.publishedAt || "2026-07-27",
    author: rawFrontmatter.author || "Elena Rostova",
    authorRole: rawFrontmatter.authorRole || "Editor-in-Chief",
    featured: rawFrontmatter.featured || false,
    editorNotes: rawFrontmatter.editorNotes,
    styleNotes: rawFrontmatter.styleNotes,
    pinterestTitles,
    pinterestDescriptions,
    pinterestKeywords: rawFrontmatter.pinterestKeywords || [],
    products: rawFrontmatter.products || [],
    faqs: rawFrontmatter.faqs || [],
  };

  return {
    ...frontmatter,
    frontmatter,
    content,
    readingTime,
    headings,
  };
}

export function getAllGuides(): BuyingGuide[] {
  const slugs = getGuideSlugs();
  const guides = slugs
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is BuyingGuide => g !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    );

  return guides;
}

export function getAllProducts(): ProductWithGuide[] {
  const guides = getAllGuides();
  const products: ProductWithGuide[] = [];

  for (const guide of guides) {
    for (const prod of (guide.products || [])) {
      products.push({
        ...prod,
        guideSlug: guide.slug,
        categoryName: guide.categoryName,
      });
    }
  }

  return products;
}

export function getGuidesByCategory(categorySlug: string): BuyingGuide[] {
  return getAllGuides().filter((guide) => guide.category === categorySlug);
}

export function getFeaturedGuides(limit = 6): BuyingGuide[] {
  const all = getAllGuides();
  const featured = all.filter((guide) => guide.featured);
  return (featured.length > 0 ? featured : all).slice(0, limit);
}

export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 220;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

export function getCategoryInfo(categorySlug: string) {
  return (
    siteConfig.categories.find((c) => c.slug === categorySlug) || {
      name: "Lifestyle Collection",
      slug: categorySlug,
      description: "Curated aesthetic Amazon finds and everyday inspiration.",
      iconName: "Sparkles",
      heroImage:
        "https://images.unsplash.com/photo-1513094735237-8f2a6d010483?auto=format&fit=crop&w=1200&q=80",
    }
  );
}
