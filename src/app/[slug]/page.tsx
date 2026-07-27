import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getAllGuides, getGuideBySlug } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { siteConfig } from "@/config/site";
import { EditorialProductCard } from "@/components/affiliate/EditorialProductCard";
import { PinterestSaveButton } from "@/components/affiliate/PinterestSaveButton";
import { PinterestGrid, PinterestGridItem } from "@/components/ui/PinterestGrid";
import {
  Sparkles,
  Heart,
  Calendar,
  User,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const guides = await getAllGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) return {};

  const pageUrl = `${siteConfig.url}/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: pageUrl,
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      authors: [guide.author],
      images: [
        {
          url: guide.heroImage,
          width: 1000,
          height: 1500,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [guide.heroImage],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) notFound();

  const allGuides = await getAllGuides();
  const relatedGuides = allGuides
    .filter((g) => g.slug !== guide.slug && g.category === guide.category)
    .slice(0, 3);
  const fallbackGuides = allGuides.filter((g) => g.slug !== guide.slug).slice(0, 3);
  const displayedRelated = relatedGuides.length > 0 ? relatedGuides : fallbackGuides;

  const relatedGridItems: PinterestGridItem[] = displayedRelated.map((g) => ({
    title: g.title,
    subtitle: g.description,
    imageUrl: g.heroImage,
    href: `/${g.slug}`,
    categoryName: g.categoryName,
    aspectRatio: "vertical",
  }));

  const pageUrl = `${siteConfig.url}/${guide.slug}`;

  // JSON-LD Article + FAQPage Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: [guide.heroImage],
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    author: {
      "@type": "Person",
      name: guide.author,
      jobTitle: guide.authorRole || "Editor",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.png`,
      },
    },
  };

  const faqSchema =
    guide.faqs && guide.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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
        <Link
          href={`/categories/${guide.category}`}
          className="hover:text-[var(--text-primary)] uppercase tracking-wider"
        >
          {guide.categoryName}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[var(--text-primary)] truncate max-w-xs sm:max-w-md font-semibold">
          {guide.title}
        </span>
      </nav>

      {/* EDITORIAL MAGAZINE HEADER */}
      <header className="max-w-4xl mx-auto space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{guide.categoryName} Edit</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] font-editorial leading-[1.12]">
          {guide.title}
        </h1>

        <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
          {guide.description}
        </p>

        {/* BYLINE & EDITORIAL CREDENTIALS */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-[var(--text-muted)] border-y border-[var(--card-border)] py-4">
          <div className="flex items-center gap-2 text-[var(--text-primary)]">
            <User className="w-4 h-4" />
            <span>
              By <strong>{guide.author}</strong> —{" "}
              <em className="text-[var(--text-secondary)] font-normal">
                {guide.authorRole || "Editor-in-Chief"}
              </em>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Updated {guide.updatedAt}</span>
          </div>

          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Editor Vetted &amp; Wear-Tested</span>
          </div>
        </div>
      </header>

      {/* 1000x1500 VERTICAL PINTEREST HERO IMAGE WITH PIN BUTTON */}
      <div className="max-w-3xl mx-auto">
        <div className="relative w-full h-[480px] sm:h-[700px] rounded-3xl overflow-hidden bg-white dark:bg-[var(--card-bg)] border border-[var(--card-border)] shadow-xl">
          <Image
            src={guide.heroImage}
            alt={guide.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            data-pin-nopin="false"
            data-pin-title={
              guide.pinterestTitles?.[0] || guide.title
            }
            data-pin-description={
              guide.pinterestDescriptions?.[0] || guide.description
            }
            data-pin-url={pageUrl}
          />
          <PinterestSaveButton
            url={pageUrl}
            media={guide.heroImage}
            description={`${guide.title} — ${guide.description}`}
          />
        </div>
      </div>

      {/* EDITOR'S NOTES & STYLE NOTES CALLOUT BOX */}
      {(guide.editorNotes || guide.styleNotes) && (
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white dark:bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>Editor&apos;s Testing Notes &amp; Styling Secrets</span>
          </div>

          {guide.editorNotes && (
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              <strong className="text-[var(--text-primary)]">Our Methodology:</strong>{" "}
              {guide.editorNotes}
            </p>
          )}

          {guide.styleNotes && (
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed italic">
              &ldquo;{guide.styleNotes}&rdquo;
            </p>
          )}
        </div>
      )}

      {/* CURATED PRODUCTS FEED (EDITORIAL LIFESTYLE CARDS) */}
      <section className="max-w-4xl mx-auto space-y-12">
        <div className="border-b border-[var(--card-border)] pb-4 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-editorial">
            The Curated Selection ({guide.products.length} Favorites)
          </h2>
          <span className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider">
            Verified Amazon Finds
          </span>
        </div>

        <div className="space-y-10">
          {guide.products.map((prod, idx) => (
            <div key={prod.asin} id={`product-${prod.asin}`}>
              <EditorialProductCard
                product={prod}
                rank={idx + 1}
                guideSlug={guide.slug}
              />
            </div>
          ))}
        </div>
      </section>

      {/* MDX EDITORIAL ARTICLE BODY */}
      <section className="max-w-4xl mx-auto prose dark:prose-invert prose-lg text-[var(--text-secondary)] prose-headings:text-[var(--text-primary)] prose-headings:font-editorial prose-a:text-[var(--text-primary)]">
        <MDXRemote source={guide.content} />
      </section>

      {/* FAQ SECTION */}
      {guide.faqs && guide.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto space-y-6 pt-12 border-t border-[var(--card-border)]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-editorial">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {guide.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[var(--card-bg)] border border-[var(--card-border)] space-y-2"
              >
                <h3 className="font-bold text-base sm:text-lg text-[var(--text-primary)]">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* RELATED COLLECTIONS (MASONRY PINTEREST GRID) */}
      <section className="max-w-7xl mx-auto pt-16 border-t border-[var(--card-border)] space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-editorial">
            More {guide.categoryName} Inspiration
          </h2>
          <Link
            href="/buying-guides"
            className="text-sm font-bold text-[var(--text-primary)] hover:underline"
          >
            Explore All Collections &rarr;
          </Link>
        </div>

        <PinterestGrid items={relatedGridItems} columns={3} />
      </section>
    </article>
  );
}
