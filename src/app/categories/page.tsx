import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getAllGuides } from "@/lib/content";
import { Sparkles, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "All 18 Lifestyle & Fashion Categories | Veritas Picks",
  description:
    "Browse our 18 curated editorial categories across women's fashion, Scandinavian bedroom inspiration, Amazon viral finds, and quiet luxury accessories.",
};

export default async function CategoriesDirectoryPage() {
  const allGuides = await getAllGuides();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Index</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-editorial text-[var(--text-primary)]">
          All 18 Categories
        </h1>

        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Explore our complete directory of Pinterest-inspired lifestyle categories. Every section is curated for aesthetic living, timeless tailoring, and functional design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.categories.map((cat) => {
          const count = allGuides.filter((g) => g.category === cat.slug).length;
          return (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:bg-[var(--card-hover)] transition-all duration-300 flex flex-col justify-between h-56 shadow-xs hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] px-3.5 py-1.5 rounded-full bg-white dark:bg-[#121214] border border-[var(--card-border)]">
                  {count} {count === 1 ? "Issue" : "Issues"}
                </span>

                <div className="p-2 rounded-full bg-white dark:bg-[#1c1c1e] border border-[var(--card-border)] text-[var(--text-primary)] group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-page)] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] font-editorial group-hover:underline">
                  {cat.name}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                  {cat.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
