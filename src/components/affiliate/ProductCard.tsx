"use client";

import React from "react";
import Image from "next/image";
import { Star, CheckCircle2, XCircle, Award } from "lucide-react";
import { AffiliateProduct } from "@/config/affiliate";
import { AmazonButton } from "./AmazonButton";
import { getPinterestImageAttributes } from "@/lib/pinterest";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: AffiliateProduct;
  index?: number;
  className?: string;
  guideUrl?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  guideUrl,
}) => {
  const pinAttributes = getPinterestImageAttributes({
    title: `${product.badge ? `[${product.badge}] ` : ""}${product.name} Review`,
    description: `${product.summary} Tested & recommended by Veritas Picks.`,
    imageUrl: product.imageUrl,
    pageUrl: guideUrl,
  });

  return (
    <div
      id={`product-${product.asin}`}
      className={cn(
        "my-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden transition-all duration-300 hover:border-[var(--text-muted)]/40 shadow-xs",
        className
      )}
    >
      {/* Badge Header */}
      {product.badge && (
        <div className="bg-[var(--text-primary)] text-[var(--bg-page)] px-6 py-2.5 flex items-center justify-between text-xs font-semibold tracking-wide uppercase">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{product.badge}</span>
          </div>
          <span className="opacity-80">Our #1 Pick</span>
        </div>
      )}

      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Product Image Column with Pinterest Attributes */}
          <div className="md:col-span-5 flex flex-col items-center justify-center bg-white dark:bg-[#121214] rounded-2xl p-6 border border-[var(--card-border)] relative group">
            <div className="relative w-full h-64 sm:h-72 flex items-center justify-center overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={`${product.name} - ${product.badge || "Product Review"}`}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                {...pinAttributes}
              />
            </div>
            <div className="mt-4 w-full flex items-center justify-between text-xs text-[var(--text-muted)] px-1">
              <span>ASIN: {product.asin}</span>
              <span className="font-semibold px-2 py-0.5 rounded bg-[var(--card-bg)] text-[var(--text-primary)]">
                {product.priceClass} Tier
              </span>
            </div>
          </div>

          {/* Product Specs & Review Column */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)]">
                  {product.brand}
                </span>
                <div className="flex items-center gap-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-full text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{product.rating.toFixed(1)}</span>
                  <span className="font-normal opacity-70">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
                {product.name}
              </h3>

              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {product.summary}
              </p>
            </div>

            {/* Quick Specs Grid */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="bg-white dark:bg-[#121214] p-4 rounded-2xl border border-[var(--card-border)]">
                <h4 className="text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)] mb-2.5">
                  Key Specifications
                </h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between border-b border-[var(--card-border)]/50 pb-1"
                    >
                      <span className="text-[var(--text-muted)]">{key}:</span>
                      <span className="font-medium text-[var(--text-primary)]">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pros & Cons Lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Why We Love It</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold mt-0.5">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Trade-Offs</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  {product.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold mt-0.5">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <AmazonButton
                asin={product.asin}
                productName={product.name}
                overrideUrl={product.amazonUrlOverride}
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
