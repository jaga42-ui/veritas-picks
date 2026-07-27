import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllGuides, getAllProducts } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { PinterestGrid, PinterestGridItem } from "@/components/ui/PinterestGrid";
import { InstagramStyleGallery } from "@/components/ui/InstagramStyleGallery";
import { EditorialProductCard } from "@/components/affiliate/EditorialProductCard";
import { NewsletterBox } from "@/components/ui/NewsletterBox";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

export default async function HomePage() {
  const allGuides = await getAllGuides();
  const allProducts = await getAllProducts();

  // Pick top guides for featured hero & grids
  const featuredGuide = allGuides[0] || null;
  const trendingGuides = allGuides.slice(1, 10);
  const viralProducts = allProducts.slice(0, 4);
  const swipeableProducts = allProducts.slice(0, 8);

  // Prepare items for Pinterest Grid
  const trendingGridItems: PinterestGridItem[] = trendingGuides.map((guide, idx) => ({
    title: guide.title,
    subtitle: guide.description,
    imageUrl: guide.heroImage,
    href: `/${guide.slug}`,
    categoryName: guide.categoryName,
    aspectRatio:
      idx % 4 === 0
        ? "vertical"
        : idx % 2 === 0
        ? "square"
        : "landscape",
  }));

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors">
      {/* 1. LAVENDER MESH HERO BANNER WITH SUBTLE SCANDINAVIAN ATMOSPHERE */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[var(--card-border)] lavender-mesh-bg">
        {/* Extremely subtle editorial Scandinavian interior texture (6% opacity) */}
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none mix-blend-multiply dark:mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80"
            alt="Scandinavian Minimal Interior Atmosphere"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-pink-light)] text-[var(--accent-pink)] border border-[var(--accent-pink)]/30 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-4 h-4 text-[var(--accent-pink)]" />
              <span>Soft Rosewater &amp; Lavender Edit • Daily Curated Finds</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08] font-editorial">
              The Art of Everyday{" "}
              <span className="italic font-light text-[var(--accent-lavender)]">
                Discovery.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto font-normal">
              Curated Scandinavian minimalism, old-money wardrobe staples, and aesthetic
              home decor that look like luxury—thoughtfully evaluated, researched, and
              styled by our editorial team.
            </p>

            {/* QUICK EXPLORE CTAs WITH AESOP TACTILE FEEL */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/best-picks"
                className="px-8 py-3.5 rounded-full bg-[var(--accent-pink)] hover:bg-[#b85c74] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[var(--accent-pink)]/25 tactile-btn"
              >
                Explore Curated Wishlists
              </Link>
              <Link
                href="/buying-guides"
                className="px-8 py-3.5 rounded-full bg-[var(--card-bg)] hover:bg-[var(--card-hover)] text-[var(--text-primary)] border border-[var(--card-border)] hover:border-[var(--accent-pink)]/50 font-bold text-sm uppercase tracking-wider tactile-btn"
              >
                Browse Editorial Guides
              </Link>
            </div>
          </div>

          {/* 2. MOBILE & DESKTOP HORIZONTAL SWIPEABLE 18-CATEGORY PILL BAR */}
          <div className="mt-12 sm:mt-16 pt-6 border-t border-[var(--card-border)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                Browse by Lifestyle Theme
              </span>
              <Link
                href="/categories"
                className="text-xs font-bold text-[var(--accent-pink)] hover:underline flex items-center gap-1"
              >
                <span>All 18 Categories</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              {siteConfig.categories.map((cat, idx) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className={`shrink-0 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border ${
                    idx === 0
                      ? "bg-[var(--accent-pink)] text-white border-[var(--accent-pink)] shadow-md shadow-[var(--accent-pink)]/20"
                      : "bg-[var(--card-bg)] text-[var(--text-secondary)] border-[var(--card-border)] hover:border-[var(--accent-pink)]/60 hover:text-[var(--accent-pink)] hover:bg-[var(--card-hover)]"
                  }`}
                >
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW: VIRAL ON PINTEREST THIS WEEK (HORIZONTAL SWIPEABLE CAROUSEL FOR MOBILE EXPLORATION) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[var(--card-border)]">
        <div className="flex items-end justify-between mb-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent-lavender)]">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Trending Now</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-editorial">
              Viral on Pinterest This Week
            </h2>
          </div>
          <Link
            href="/best-picks"
            className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-[var(--accent-lavender)] hover:underline"
          >
            <span>See Full Wishlist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* SWIPEABLE CAROUSEL */}
        <div className="flex items-stretch gap-5 overflow-x-auto no-scrollbar pb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          {swipeableProducts.map((prod, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[320px] shrink-0 group rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent-lavender)] overflow-hidden shadow-xs hover:shadow-2xl hover:shadow-[var(--accent-lavender)]/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative w-full h-56 bg-[var(--bg-secondary)] overflow-hidden">
                <Image
                  src={prod.imageUrl}
                  alt={prod.name}
                  fill
                  sizes="320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[var(--accent-lavender-light)] text-[var(--accent-lavender)] text-[10px] font-extrabold uppercase tracking-wider border border-[var(--accent-lavender)]/30">
                    {prod.badge || "Trending Pick"}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-[var(--card-bg)]/90 text-xs font-extrabold text-[var(--text-primary)] shadow-sm">
                    {prod.priceClass || "$$"}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3 flex flex-col justify-between flex-1">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    {prod.brand}
                  </span>
                  <h3 className="font-bold text-base text-[var(--text-primary)] group-hover:text-[var(--accent-lavender)] transition-colors line-clamp-2 leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                    {prod.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--card-border)]">
                  <Link
                    href={`/${prod.guideSlug || "best-college-dorm-essentials"}`}
                    className="w-full py-2.5 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--accent-lavender)] text-[var(--text-primary)] hover:text-white text-xs font-extrabold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Explore Review</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EDITORIAL COVER STORY CARD */}
      {featuredGuide && (
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-lavender)]">
              ★ Cover Feature
            </span>
            <span className="text-xs font-medium text-[var(--text-muted)]">
              {featuredGuide.readingTime}
            </span>
          </div>

          <Link
            href={`/${featuredGuide.slug}`}
            className="group relative block rounded-3xl overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent-lavender)] shadow-sm hover:shadow-2xl hover:shadow-[var(--accent-lavender)]/15 transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
              {/* IMAGE COLUMN */}
              <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] lg:min-h-full bg-[var(--bg-secondary)] overflow-hidden">
                <Image
                  src={featuredGuide.heroImage}
                  alt={featuredGuide.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-4 py-1.5 rounded-full bg-white/95 dark:bg-[#1a1128]/95 text-[var(--text-primary)] text-xs font-extrabold uppercase tracking-wider shadow-md">
                    {featuredGuide.categoryName}
                  </span>
                </div>
              </div>

              {/* TEXT COLUMN */}
              <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-muted)]">
                    <span>{featuredGuide.author}</span>
                    <span>•</span>
                    <span>{featuredGuide.publishedAt}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-lavender)] transition-colors leading-tight font-editorial">
                    {featuredGuide.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {featuredGuide.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--card-border)] flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[var(--accent-lavender)] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>Read Editorial Edit</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="text-xs text-[var(--text-muted)] font-semibold">
                    {featuredGuide.products?.length || 4} Curated Picks
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* 5. PINTEREST MASONRY DISCOVERY FEED */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--card-border)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent-lavender)]">
              Pinterest Inspiration Feed
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] font-editorial">
              Endless Aesthetic Inspiration.
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl">
              Scroll through our curated editorial moodboards, Scandinavian room
              transforms, and old-money wardrobe capsule edits.
            </p>
          </div>

          <Link
            href="/buying-guides"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--card-bg)] hover:bg-[var(--accent-lavender)] hover:text-white text-[var(--text-primary)] font-bold text-xs uppercase tracking-wider border border-[var(--card-border)] transition-all shadow-xs shrink-0 tactile-btn"
          >
            <span>View All Editorial Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <PinterestGrid items={trendingGridItems} columns={3} />
      </section>

      {/* 6. EDITORS' CURATED AMAZON ESSENTIALS GRID */}
      <section className="py-16 sm:py-24 bg-[var(--bg-secondary)] border-t border-b border-[var(--card-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent-lavender)]">
                Curated &amp; Evaluated
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-editorial">
                Shop The Editor&apos;s Desk.
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl">
                The exact luxury-looking Amazon finds thoughtfully evaluated by our editors—from
                waffle-weave bedding to TSA biometric safes.
              </p>
            </div>

            <Link
              href="/best-picks"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-lavender)] hover:bg-[#6D34CC] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
            >
              <span>See Complete Wishlist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-8">
            {viralProducts.map((product, idx) => (
              <EditorialProductCard
                key={product.asin}
                product={product}
                rank={idx + 1}
                guideSlug={product.guideSlug || "best-college-dorm-essentials"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. INSTAGRAM / PINTEREST VISUAL MOODBOARD GALLERY */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InstagramStyleGallery />
      </section>

      {/* 8. LAVENDER FROSTED NEWSLETTER SIGNUP */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-tr from-[var(--bg-secondary)] via-white dark:via-[#1a1128] to-[var(--accent-lavender-light)] border border-[var(--card-border)] p-8 sm:p-12 shadow-md">
          <NewsletterBox />
        </div>
      </section>
    </div>
  );
}
