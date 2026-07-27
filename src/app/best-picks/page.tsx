import React from "react";
import Link from "next/link";
import { getAllProducts } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { EditorialProductCard } from "@/components/affiliate/EditorialProductCard";
import { Bookmark, Filter } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Editorial Wishlist — Curated Amazon Favorites | Veritas Picks",
  description:
    "Explore our complete directory of editor-vetted, wear-tested Amazon fashion, Scandinavian bedroom decor, and aesthetic lifestyle favorites.",
};

export default async function WishlistPage() {
  const products = await getAllProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* EDITORIAL HEADER */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] text-xs font-bold uppercase tracking-wider">
          <Bookmark className="w-3.5 h-3.5" />
          <span>Master Curated Directory</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-editorial text-[var(--text-primary)]">
          The Wishlist
        </h1>

        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Our living directory of {products.length}+ luxury-looking Amazon discoveries. Every piece is vetted for drape, material durability, and minimalist design.
        </p>
      </div>

      {/* CATEGORIES PILLS FILTER BAR */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-[var(--card-border)]">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5 mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>Categories:</span>
        </span>
        <Link
          href="/best-picks"
          className="shrink-0 px-4 py-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] text-xs font-bold"
        >
          All Favorites
        </Link>
        {siteConfig.categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="shrink-0 px-4 py-2 rounded-full bg-[var(--card-bg)] hover:bg-[var(--card-hover)] border border-[var(--card-border)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* WISHLIST GRID OF EDITORIAL PRODUCT CARDS */}
      {products.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)]">
          <p className="text-base font-editorial text-[var(--text-primary)]">
            No products listed in our wishlists yet.
          </p>
          <p className="text-xs text-[var(--text-secondary)] mt-2">
            Our editorial desk is actively testing new finds.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((prod, idx) => (
            <EditorialProductCard
              key={prod.asin}
              product={prod}
              rank={idx + 1}
              guideSlug={prod.guideSlug}
            />
          ))}
        </div>
      )}
    </div>
  );
}
