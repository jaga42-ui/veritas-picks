"use client";

import React from "react";
import { ExternalLink, ShoppingBag } from "lucide-react";
import { buildAmazonUrl, AFFILIATE_CONFIG } from "@/config/affiliate";
import { cn } from "@/lib/utils";

interface AmazonButtonProps {
  asin: string;
  productName: string;
  className?: string;
  variant?: "primary" | "secondary" | "minimal";
  customText?: string;
  overrideUrl?: string;
}

export const AmazonButton: React.FC<AmazonButtonProps> = ({
  asin,
  productName,
  className,
  variant = "primary",
  customText,
  overrideUrl,
}) => {
  const amazonUrl = buildAmazonUrl(asin, undefined, overrideUrl);

  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-3.5 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-[var(--card-bg)] hover:bg-[var(--card-hover)] text-[var(--text-primary)] border border-[var(--card-border)] px-5 py-3 text-sm",
    minimal:
      "text-[#0071e3] hover:text-[#0077ed] underline text-sm font-semibold p-0 hover:no-underline",
  };

  return (
    <a
      href={amazonUrl}
      target="_blank"
      rel="sponsored noopener noreferrer"
      aria-label={`Check price on Amazon for ${productName}`}
      data-pin-nopin="true"
      className={cn(baseStyles, variants[variant], className)}
    >
      <ShoppingBag className="w-4 h-4 shrink-0" />
      <span>{customText || AFFILIATE_CONFIG.amazonButtonText}</span>
      <ExternalLink className="w-3.5 h-3.5 opacity-80 shrink-0" />
    </a>
  );
};
