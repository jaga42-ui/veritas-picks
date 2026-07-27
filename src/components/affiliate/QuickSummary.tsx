"use client";

import React from "react";
import { Sparkles, Check } from "lucide-react";
import { AffiliateProduct } from "@/config/affiliate";
import { AmazonButton } from "./AmazonButton";

interface QuickSummaryProps {
  title?: string;
  summaryText: string;
  topPick?: AffiliateProduct;
}

export const QuickSummary: React.FC<QuickSummaryProps> = ({
  title = "Quick Recommendation",
  summaryText,
  topPick,
}) => {
  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border-2 border-[var(--card-border)] relative overflow-hidden shadow-xs">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-blue)] mb-3">
        <Sparkles className="w-4 h-4" />
        <span>Executive Summary</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
        {title}
      </h3>

      <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] mb-6">
        {summaryText}
      </p>

      {topPick && (
        <div className="bg-white dark:bg-[var(--card-bg)] p-5 rounded-2xl border border-[var(--card-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)]">
              Our #1 Recommendation
            </span>
            <div className="font-bold text-lg text-[var(--text-primary)]">
              {topPick.name}
            </div>
            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>{topPick.pros[0]}</span>
            </div>
          </div>

          <AmazonButton
            asin={topPick.asin}
            productName={topPick.name}
            overrideUrl={topPick.amazonUrlOverride}
            customText="Check Amazon Price"
          />
        </div>
      )}
    </div>
  );
};
