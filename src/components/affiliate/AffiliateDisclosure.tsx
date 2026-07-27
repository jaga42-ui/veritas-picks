import React from "react";
import Link from "next/link";
import { Info, ShieldCheck } from "lucide-react";
import { AFFILIATE_CONFIG } from "@/config/affiliate";

export const AffiliateDisclosure: React.FC<{ compact?: boolean }> = ({
  compact = false,
}) => {
  if (compact) {
    return (
      <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] py-2">
        <Info className="w-3.5 h-3.5 shrink-0" />
        <span>{AFFILIATE_CONFIG.shortDisclosure}</span>
        <Link
          href="/affiliate-disclosure"
          className="underline hover:text-[var(--text-primary)] transition-colors ml-1"
        >
          Why trust us?
        </Link>
      </div>
    );
  }

  return (
    <div className="my-6 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[var(--text-secondary)]">
      <div className="flex items-start sm:items-center gap-2.5">
        <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
        <div>
          <span className="font-semibold text-[var(--text-primary)] mr-1.5">
            Independent Editorial Review:
          </span>
          <span>
            We buy, test, and research every product independently. When you purchase via our links, we may earn an affiliate commission at no extra cost to you.
          </span>
        </div>
      </div>
      <Link
        href="/affiliate-disclosure"
        className="font-medium underline hover:text-[var(--text-primary)] transition-colors whitespace-nowrap shrink-0"
      >
        Read Full Disclosure
      </Link>
    </div>
  );
};
