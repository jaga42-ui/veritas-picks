"use client";

import React from "react";
import Image from "next/image";
import { Star, Check } from "lucide-react";
import { AffiliateProduct } from "@/config/affiliate";
import { AmazonButton } from "./AmazonButton";

interface ComparisonTableProps {
  products: AffiliateProduct[];
  title?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  products,
  title = "Compare Our Top Picks",
}) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="my-10 overflow-hidden rounded-3xl bg-white dark:bg-[#121214] border border-[var(--card-border)] shadow-sm">
      <div className="p-6 bg-[var(--card-bg)] border-b border-[var(--card-border)] flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg text-[var(--text-primary)]">
            {title}
          </h3>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            Side-by-side spec comparison and testing scores
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-[var(--card-border)] text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
              <th className="py-4 px-6 w-1/4">Product</th>
              <th className="py-4 px-4 w-1/6">Award Badge</th>
              <th className="py-4 px-4 w-1/6">Rating</th>
              <th className="py-4 px-4 w-1/4">Top Benefit</th>
              <th className="py-4 px-6 w-1/6 text-right">Price Check</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--card-border)] text-sm">
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-[var(--card-bg)]/50 transition-colors"
              >
                {/* Product Col */}
                <td className="py-4 px-6 font-medium text-[var(--text-primary)]">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] shrink-0 flex items-center justify-center p-1">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        sizes="48px"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[var(--text-primary)]">
                        {product.name}
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        {product.brand} • {product.priceClass}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Badge Col */}
                <td className="py-4 px-4">
                  {product.badge ? (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[var(--text-primary)] text-[var(--bg-page)]">
                      {product.badge}
                    </span>
                  ) : (
                    <span className="text-xs text-[var(--text-muted)]">
                      Recommended
                    </span>
                  )}
                </td>

                {/* Rating Col */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>{product.rating.toFixed(1)}</span>
                    <span className="text-[var(--text-muted)] font-normal">
                      / 5.0
                    </span>
                  </div>
                </td>

                {/* Benefit Col */}
                <td className="py-4 px-4 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="line-clamp-2">
                      {product.pros[0] || product.summary}
                    </span>
                  </div>
                </td>

                {/* Action Col */}
                <td className="py-4 px-6 text-right">
                  <AmazonButton
                    asin={product.asin}
                    productName={product.name}
                    overrideUrl={product.amazonUrlOverride}
                    variant="minimal"
                    customText="Check Price"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
