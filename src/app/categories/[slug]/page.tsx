import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getAllGuides, getAllProducts } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { PinterestGrid, PinterestGridItem } from "@/components/ui/PinterestGrid";
import { EditorialProductCard } from "@/components/affiliate/EditorialProductCard";
import { Sparkles, ChevronRight } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return siteConfig.categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = siteConfig.categories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.name} — Editorial Edit & Amazon Finds | Veritas Picks`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = siteConfig.categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const allGuides = await getAllGuides();
  const categoryGuides = allGuides.filter((g) => g.category === slug);

  const allProducts = await getAllProducts();
  const categoryProducts = allProducts.filter((p) =>
    categoryGuides.some((g) => g.slug === p.guideSlug)
  );

  const gridItems: PinterestGridItem[] = categoryGuides.map((g, idx) => ({
    title: g.title,
    subtitle: g.description,
    imageUrl: g.heroImage,
    href: `/${g.slug}`,
    categoryName: g.categoryName,
    aspectRatio: idx % 2 === 0 ? "vertical" : "landscape",
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* BREADCRUMBS */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-medium">
        <Link href="/" className="hover:text-[var(--text-primary)]">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/buying-guides" className="hover:text-[var(--text-primary)]">
          Collections
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[var(--text-primary)] font-bold">{category.name}</span>
      </nav>

      {/* CATEGORY HERO */}
      <header className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Category</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-editorial text-[var(--text-primary)]">
          {category.name}
        </h1>

        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          {category.description}
        </p>
      </header>

      {/* CATEGORY MOODBOARDS (PINTEREST MASONRY GRID) */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-editorial">
            Editorial Issues &amp; Guides ({categoryGuides.length})
          </h2>
        </div>

        {categoryGuides.length > 0 ? (
          <PinterestGrid items={gridItems} columns={3} />
        ) : (
          <div className="p-12 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] text-center space-y-3">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              New Issue Arriving Soon
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Our editors are currently testing and curating new finds for {category.name}. Check back this week!
            </p>
          </div>
        )}
      </section>

      {/* CATEGORY CURATED FAVORITES (EDITORIAL PRODUCT CARDS) */}
      {categoryProducts.length > 0 && (
        <section className="space-y-8 pt-12 border-t border-[var(--card-border)]">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-editorial">
              Top {category.name} Finds
            </h2>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Editor Vetted
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryProducts.slice(0, 6).map((prod, idx) => (
              <EditorialProductCard
                key={prod.asin}
                product={prod}
                rank={idx + 1}
                guideSlug={prod.guideSlug}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
