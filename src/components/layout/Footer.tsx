import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { affiliateConfig } from "@/config/affiliate";
import { Camera, Bookmark, Rss, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#111111] border-t border-[var(--card-border)] pt-20 pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* TOP EDITORIAL ENDING ROW: BRAND PHILOSOPHY & MANIFESTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 justify-between pb-12 border-b border-[var(--card-border)]">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-extrabold tracking-tight font-editorial text-[var(--text-primary)]">
                Veritas<span className="font-light italic ml-0.5 text-[var(--accent-lavender)]">Picks</span>
              </span>
            </Link>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
              An independent digital lifestyle magazine dedicated to the art of everyday discovery. 
              We curate Scandinavian minimalism, timeless capsule wardrobe staples, and aesthetic home 
              objects that elevate daily rituals.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
              <span>New York &bull; Stockholm &bull; Tokyo</span>
            </div>
            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--card-border)] hover:border-[var(--accent-pink)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-pink)] transition-all tactile-btn"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--card-border)] hover:border-[var(--accent-pink)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-pink)] transition-all tactile-btn"
              >
                <Bookmark className="w-4 h-4" />
              </a>
              <a
                href="/rss.xml"
                aria-label="RSS Feed"
                className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--card-border)] hover:border-[var(--accent-pink)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-pink)] transition-all tactile-btn"
              >
                <Rss className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* RIGHT: EDITORIAL CATEGORY INDEX IN 3 COLUMNS */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[var(--text-primary)]">
                Fashion &amp; Beauty
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
                <li><Link href="/categories/fashion" className="hover:text-[var(--accent-pink)] transition-colors">Women&apos;s Fashion</Link></li>
                <li><Link href="/categories/beauty" className="hover:text-[var(--accent-pink)] transition-colors">Beauty</Link></li>
                <li><Link href="/categories/jewelry" className="hover:text-[var(--accent-pink)] transition-colors">Jewelry</Link></li>
                <li><Link href="/categories/handbags" className="hover:text-[var(--accent-pink)] transition-colors">Handbags</Link></li>
                <li><Link href="/categories/shoes" className="hover:text-[var(--accent-pink)] transition-colors">Shoes</Link></li>
                <li><Link href="/categories/accessories" className="hover:text-[var(--accent-pink)] transition-colors">Accessories</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[var(--text-primary)]">
                Home &amp; Spaces
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
                <li><Link href="/categories/home-decor" className="hover:text-[var(--accent-pink)] transition-colors">Home Decor</Link></li>
                <li><Link href="/categories/bedroom-inspiration" className="hover:text-[var(--accent-pink)] transition-colors">Bedroom Inspiration</Link></li>
                <li><Link href="/categories/organization" className="hover:text-[var(--accent-pink)] transition-colors">Organization</Link></li>
                <li><Link href="/categories/kitchen-finds" className="hover:text-[var(--accent-pink)] transition-colors">Kitchen Finds</Link></li>
                <li><Link href="/categories/college-essentials" className="hover:text-[var(--accent-pink)] transition-colors">College Essentials</Link></li>
                <li><Link href="/categories/wellness" className="hover:text-[var(--accent-pink)] transition-colors">Wellness</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[var(--text-primary)]">
                Editorial Journal
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
                <li><Link href="/buying-guides" className="hover:text-[var(--accent-pink)] transition-colors flex items-center gap-1"><span>Editorial Guides</span> <ArrowUpRight className="w-3 h-3" /></Link></li>
                <li><Link href="/best-picks" className="hover:text-[var(--accent-pink)] transition-colors flex items-center gap-1"><span>Curated Wishlists</span> <ArrowUpRight className="w-3 h-3" /></Link></li>
                <li><Link href="/categories/amazon-viral-finds" className="hover:text-[var(--accent-pink)] transition-colors">Amazon Viral Finds</Link></li>
                <li><Link href="/categories/travel" className="hover:text-[var(--accent-pink)] transition-colors">Travel Essentials</Link></li>
                <li><Link href="/categories/gift-guides" className="hover:text-[var(--accent-pink)] transition-colors">Gift Guides</Link></li>
                <li><Link href="/about" className="hover:text-[var(--accent-pink)] transition-colors">Editorial Manifesto</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL & FTC COMPLIANCE ROW IN ELEGANT TYPOGRAPHY */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[var(--text-muted)] leading-relaxed">
          <p className="max-w-xl font-light italic">
            {affiliateConfig.defaultDisclosure}
          </p>

          <div className="flex flex-wrap items-center gap-6 font-medium">
            <Link href="/about" className="hover:text-[var(--text-primary)] transition-colors">About &amp; Methodology</Link>
            <Link href="/editorial-ethics" className="hover:text-[var(--text-primary)] transition-colors">Editorial Ethics</Link>
            <Link href="/affiliate-disclosure" className="hover:text-[var(--text-primary)] transition-colors">Affiliate Disclosure</Link>
            <Link href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">Privacy Policy</Link>
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
