import React from "react";
import Image from "next/image";
import { AmazonButton } from "./AmazonButton";
import { PinterestSaveButton } from "./PinterestSaveButton";
import { ProductItem } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { getPinterestImageAttributes } from "@/lib/pinterest";
import { Sparkles, Check, Palette } from "lucide-react";

interface EditorialProductCardProps {
  product: ProductItem;
  rank?: number;
  guideSlug: string;
}

export const EditorialProductCard: React.FC<EditorialProductCardProps> = ({
  product,
  rank,
  guideSlug,
}) => {
  const pageUrl = `${siteConfig.url}/${guideSlug}#product-${product.asin}`;
  const pinAttrs = getPinterestImageAttributes({
    title: product.name,
    description: product.summary,
    imageUrl: product.imageUrl,
    pageUrl,
    keywords: [product.brand, "AmazonFinds", "Aesthetic", "Lifestyle"],
  });

  return (
    <article className="group editorial-card overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent-lavender)]/70 rounded-3xl p-5 sm:p-8 space-y-6 shadow-sm hover:shadow-2xl hover:shadow-[var(--accent-lavender)]/15 transition-all duration-300">
      {/* HEADER WITH BADGE & RANK */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {rank && (
            <span className="w-8 h-8 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] text-xs font-black flex items-center justify-center shadow-md">
              0{rank}
            </span>
          )}
          {product.badge && (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--accent-lavender-light)] text-[var(--accent-lavender)] border border-[var(--accent-lavender)]/30 text-xs font-extrabold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{product.badge}</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--card-border)] text-xs font-extrabold text-[var(--text-primary)]">
            {product.priceClass || "$$"}
          </span>
          {product.rating && (
            <span className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--card-border)] text-xs font-bold text-[var(--text-primary)]">
              ★ {product.rating}
              {product.reviewCount && (
                <span className="text-[var(--text-muted)] font-normal ml-1">
                  ({(product.reviewCount / 1000).toFixed(1)}k)
                </span>
              )}
            </span>
          )}
        </div>
      </div>

      {/* MAIN GRID: IMAGE LEFT, DETAILS RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* IMAGE BOX */}
        <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--card-border)]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 450px"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            {...pinAttrs}
          />
          <PinterestSaveButton
            url={pageUrl}
            media={product.imageUrl}
            description={`${product.name} — ${product.summary}`}
          />
        </div>

        {/* DETAILS COLUMN */}
        <div className="lg:col-span-7 space-y-5 flex flex-col justify-between h-full">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
              {product.brand}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-lavender)] transition-colors leading-tight font-editorial">
              {product.name}
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {product.summary}
            </p>
          </div>

          {/* EDITORIAL REVIEWS & PERFECT FOR */}
          {(product.whyWeLoveIt || product.perfectFor) && (
            <div className="space-y-3 pt-2">
              {product.whyWeLoveIt && (
                <div className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--card-border)] space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--accent-lavender)] block">
                    Why We Love It
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                    {product.whyWeLoveIt}
                  </p>
                </div>
              )}

              {product.perfectFor && (
                <div className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--card-border)] space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--text-muted)] block">
                    Perfect For
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed italic">
                    {product.perfectFor}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* HIGHLIGHTS & COLORS */}
          <div className="space-y-3 pt-2">
            {product.highlights && product.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.highlights.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[var(--bg-secondary)] text-xs font-medium text-[var(--text-secondary)] border border-[var(--card-border)]"
                  >
                    <Check className="w-3.5 h-3.5 text-[var(--accent-lavender)]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            )}

            {product.availableColors && product.availableColors.length > 0 && (
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                <Palette className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <span className="text-xs font-semibold text-[var(--text-muted)]">
                  Colors:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.availableColors.map((color, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-lg bg-[var(--bg-secondary)] text-[11px] font-semibold text-[var(--text-primary)] border border-[var(--card-border)]"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* MOBILE-RESPONSIVE FULL-WIDTH CTA BUTTON */}
          <div className="pt-4 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="text-xs text-[var(--text-muted)]">
              <span className="font-semibold text-[var(--text-primary)]">
                Verified Prime Pick
              </span>{" "}
              — Free shipping &amp; easy returns on Amazon
            </div>
            <div className="w-full sm:w-auto">
              <AmazonButton
                asin={product.asin}
                productName={product.name}
                overrideUrl={product.amazonUrlOverride}
                customText="Check Price on Amazon"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--accent-pink)] hover:bg-[#b85c74] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[var(--accent-pink)]/25 hover:shadow-xl hover:shadow-[var(--accent-pink)]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center block sm:inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
