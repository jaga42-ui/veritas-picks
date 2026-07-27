import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { affiliateConfig } from "@/config/affiliate";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#111111] border-t border-[var(--card-border)] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* TOP ROW: BRAND & DESCRIPTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 justify-between">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight font-editorial text-[var(--text-primary)]">
                Veritas<span className="font-light italic ml-0.5">Picks</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="pt-2 text-xs text-[var(--text-muted)]">
              <span>Curated in New York &bull; Minimalist Living</span>
            </div>
          </div>

          {/* RIGHT: 18 CATEGORIES INDEX IN 3 COLUMNS */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Fashion &amp; Beauty
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                <li><Link href="/categories/fashion" className="hover:text-[var(--text-primary)]">Women&apos;s Fashion</Link></li>
                <li><Link href="/categories/beauty" className="hover:text-[var(--text-primary)]">Beauty</Link></li>
                <li><Link href="/categories/jewelry" className="hover:text-[var(--text-primary)]">Jewelry</Link></li>
                <li><Link href="/categories/handbags" className="hover:text-[var(--text-primary)]">Handbags</Link></li>
                <li><Link href="/categories/shoes" className="hover:text-[var(--text-primary)]">Shoes</Link></li>
                <li><Link href="/categories/accessories" className="hover:text-[var(--text-primary)]">Accessories</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Home &amp; Organization
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                <li><Link href="/categories/home-decor" className="hover:text-[var(--text-primary)]">Home Decor</Link></li>
                <li><Link href="/categories/bedroom-inspiration" className="hover:text-[var(--text-primary)]">Bedroom Inspiration</Link></li>
                <li><Link href="/categories/organization" className="hover:text-[var(--text-primary)]">Organization</Link></li>
                <li><Link href="/categories/kitchen-finds" className="hover:text-[var(--text-primary)]">Kitchen Finds</Link></li>
                <li><Link href="/categories/college-essentials" className="hover:text-[var(--text-primary)]">College Essentials</Link></li>
                <li><Link href="/categories/wellness" className="hover:text-[var(--text-primary)]">Wellness</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Lifestyle &amp; Discovery
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                <li><Link href="/categories/amazon-viral-finds" className="hover:text-[var(--text-primary)]">Amazon Viral Finds</Link></li>
                <li><Link href="/categories/travel" className="hover:text-[var(--text-primary)]">Travel Essentials</Link></li>
                <li><Link href="/categories/gift-guides" className="hover:text-[var(--text-primary)]">Gift Guides</Link></li>
                <li><Link href="/categories/lifestyle" className="hover:text-[var(--text-primary)]">Lifestyle</Link></li>
                <li><Link href="/categories/seasonal-trends" className="hover:text-[var(--text-primary)]">Seasonal Trends</Link></li>
                <li><Link href="/categories/holiday-collections" className="hover:text-[var(--text-primary)]">Holiday Collections</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL & FTC COMPLIANCE ROW */}
        <div className="pt-8 border-t border-[var(--card-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p className="max-w-xl text-center md:text-left leading-relaxed">
            {affiliateConfig.defaultDisclosure}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/about" className="hover:text-[var(--text-primary)]">About &amp; Methodology</Link>
            <Link href="/editorial-ethics" className="hover:text-[var(--text-primary)]">Editorial Ethics</Link>
            <Link href="/affiliate-disclosure" className="hover:text-[var(--text-primary)]">Affiliate Disclosure</Link>
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
