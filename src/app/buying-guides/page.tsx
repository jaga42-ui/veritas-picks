import React from "react";
import Link from "next/link";
import { getAllGuides } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { PinterestGrid, PinterestGridItem } from "@/components/ui/PinterestGrid";
import { Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Editorial Collections & Lifestyle Issues | Veritas Picks",
  description:
    "Browse our complete archive of Pinterest-inspired fashion edits, Scandinavian bedroom makeovers, and luxury-looking Amazon discoveries.",
};

export default async function CollectionsIndexPage() {
  const guides = await getAllGuides();

  const gridItems: PinterestGridItem[] = guides.map((guide, idx) => ({
    title: guide.title,
    subtitle: guide.description,
    imageUrl: guide.heroImage,
    href: `/${guide.slug}`,
    categoryName: guide.categoryName,
    aspectRatio: idx % 3 === 0 ? "vertical" : idx % 2 === 0 ? "square" : "landscape",
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* HEADER */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Archive</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-editorial text-[var(--text-primary)]">
          Editorial Collections
        </h1>

        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Explore all {guides.length} lifestyle issues. Curated for aesthetic living, Scandinavian minimalism, and quiet luxury fashion on an Amazon budget.
        </p>
      </div>

      {/* CATEGORY FILTER PILLS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-[var(--card-border)]">
        <Link
          href="/buying-guides"
          className="shrink-0 px-5 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] text-xs font-bold uppercase tracking-wider"
        >
          All Issues ({guides.length})
        </Link>
        {siteConfig.categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="shrink-0 px-4 py-2.5 rounded-full bg-[var(--card-bg)] hover:bg-[var(--card-hover)] border border-[var(--card-border)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* PINTEREST MASONRY GRID OF ALL 18 COLLECTIONS */}
      <PinterestGrid items={gridItems} columns={3} />
    </div>
  );
}
