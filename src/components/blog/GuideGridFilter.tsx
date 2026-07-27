"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GuideItem } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import { getPinterestImageAttributes } from "@/lib/pinterest";

interface GuideGridFilterProps {
  guides: GuideItem[];
  categories: { slug: string; name: string }[];
}

export const GuideGridFilter: React.FC<GuideGridFilterProps> = ({
  guides,
  categories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredGuides =
    selectedCategory === "all"
      ? guides
      : guides.filter((g) => g.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
            selectedCategory === "all"
              ? "bg-[var(--text-primary)] text-[var(--bg-page)] shadow-xs"
              : "bg-[var(--card-bg)] text-[var(--text-secondary)] hover:bg-[var(--card-hover)] border border-[var(--card-border)]"
          }`}
        >
          All Collections ({guides.length})
        </button>

        {categories.map((cat) => {
          const count = guides.filter((g) => g.category === cat.slug).length;
          if (count === 0) return null;

          return (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat.slug
                  ? "bg-[var(--text-primary)] text-[var(--bg-page)] shadow-xs"
                  : "bg-[var(--card-bg)] text-[var(--text-secondary)] hover:bg-[var(--card-hover)] border border-[var(--card-border)]"
              }`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Grid of Guides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGuides.map((guide) => {
          const pinAttrs = getPinterestImageAttributes({
            title: guide.title,
            description: guide.description,
            imageUrl: guide.heroImage,
            pageUrl: `https://veritaspicks.com/${guide.slug}`,
          });

          return (
            <Link
              key={guide.slug}
              href={`/${guide.slug}`}
              className="group flex flex-col rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden hover:border-[var(--text-muted)]/40 transition-all duration-300 shadow-xs"
            >
              <div className="relative w-full h-64 overflow-hidden bg-white dark:bg-[var(--card-bg)]">
                <Image
                  src={guide.heroImage}
                  alt={guide.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  {...pinAttrs}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--text-primary)] text-[var(--bg-page)] shadow-sm">
                    {guide.categoryName}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] mb-2">
                    <span>{guide.publishedAt}</span>
                    <span>•</span>
                    <span>{guide.readingTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-editorial group-hover:underline transition-colors leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] mt-2.5 line-clamp-3 leading-relaxed">
                    {guide.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--card-border)]/60 flex items-center justify-between text-xs font-semibold text-[var(--text-primary)]">
                  <span>Read Issue</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
