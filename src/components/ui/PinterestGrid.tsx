import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PinterestSaveButton } from "@/components/affiliate/PinterestSaveButton";
import { getPinterestImageAttributes } from "@/lib/pinterest";
import { ArrowUpRight, Sparkles } from "lucide-react";

export interface PinterestGridItem {
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
  categoryName: string;
  aspectRatio?: "vertical" | "square" | "landscape";
}

interface PinterestGridProps {
  items: PinterestGridItem[];
  columns?: 2 | 3 | 4;
}

export const PinterestGrid: React.FC<PinterestGridProps> = ({
  items,
  columns = 3,
}) => {
  if (!items || items.length === 0) {
    return (
      <div className="w-full text-center py-16 px-4 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)]">
        <p className="text-base font-editorial text-[var(--text-primary)]">
          No editorial guides published in this section yet.
        </p>
        <p className="text-xs text-[var(--text-secondary)] mt-2">
          Our editors are currently curating new selections. Check back soon.
        </p>
      </div>
    );
  }

  const gridClass =
    columns === 4
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      : columns === 2
      ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";

  return (
    <div className={gridClass}>
      {items.map((item, idx) => {
        const heightClass =
          item.aspectRatio === "vertical"
            ? "h-[380px] sm:h-[460px]"
            : item.aspectRatio === "square"
            ? "h-[300px] sm:h-[340px]"
            : "h-[280px] sm:h-[320px]";

        const pinAttrs = getPinterestImageAttributes({
          title: item.title,
          description: item.subtitle,
          imageUrl: item.imageUrl,
          pageUrl: `https://veritaspicks.com${item.href}`,
        });

        return (
          <div
            key={idx}
            className="group relative flex flex-col rounded-3xl overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent-lavender)]/60 shadow-xs hover:shadow-2xl hover:shadow-[var(--accent-lavender)]/15 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div
              className={`relative w-full ${heightClass} bg-[var(--bg-secondary)] overflow-hidden`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                {...pinAttrs}
              />
              <PinterestSaveButton
                url={`https://veritaspicks.com${item.href}`}
                media={item.imageUrl}
                description={`${item.title} — ${item.subtitle}`}
              />

              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--accent-lavender-light)] text-[var(--accent-lavender)] border border-[var(--accent-lavender)]/30 shadow-sm backdrop-blur-md">
                  <Sparkles className="w-3 h-3" />
                  <span>{item.categoryName}</span>
                </span>
              </div>
            </div>

            <div className="p-5 flex items-start justify-between gap-3 bg-[var(--card-bg)]">
              <div className="space-y-1.5">
                <Link
                  href={item.href}
                  className="font-extrabold text-base sm:text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-lavender)] transition-colors line-clamp-2 leading-snug"
                >
                  {item.title}
                </Link>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              <Link
                href={item.href}
                className="shrink-0 p-2.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--card-border)] text-[var(--text-primary)] group-hover:bg-[var(--accent-lavender)] group-hover:text-white transition-all shadow-xs"
                aria-label={`View ${item.title}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
