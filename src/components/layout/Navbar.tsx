"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Search,
  ChevronDown,
  Sparkles,
  Menu,
  X,
  Home,
  Compass,
  Grid,
  BookOpen,
} from "lucide-react";

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <>
      {/* TOP STICKY LAVENDER GLASS HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white/85 dark:bg-[#1A1128]/90 backdrop-blur-xl border-b border-[var(--card-border)] transition-all duration-300 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LEFT: BRAND & LAVENDER TAG */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight font-editorial text-[var(--text-primary)] group-hover:text-[var(--accent-lavender)] transition-colors">
                  Veritas<span className="font-light italic ml-0.5">Picks</span>
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent-pink)] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[var(--text-muted)]">
                    Soft Rosewater &amp; Lavender Edit
                  </span>
                </div>
              </div>
            </Link>

            {/* CENTER: DESKTOP MAGAZINE NAVIGATION */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/buying-guides"
                className="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-pink)] transition-colors nav-link-underline py-1"
              >
                Editorial Guides
              </Link>
              <Link
                href="/best-picks"
                className="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-pink)] transition-colors nav-link-underline py-1"
              >
                Curated Wishlists
              </Link>

              {/* MEGA MENU: CATEGORIES */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-pink)] transition-colors py-1 nav-link-underline"
                >
                  <span>Categories</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {megaMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[580px] bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl shadow-2xl p-6 grid grid-cols-3 gap-3 z-50">
                    {siteConfig.categories.slice(0, 15).map((category) => (
                      <Link
                        key={category.slug}
                        href={`/categories/${category.slug}`}
                        className="flex items-center gap-2.5 p-2.5 rounded-2xl hover:bg-[var(--card-hover)] hover:text-[var(--accent-lavender)] transition-all group"
                      >
                        <span className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-lavender)] truncate">
                          {category.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-lavender)] transition-colors"
              >
                About
              </Link>
            </nav>

            {/* RIGHT: INSTANT SEARCH TRIGGER & PIN SAVED SHORTCUT */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenSearch}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--accent-lavender)] hover:text-white text-[var(--text-secondary)] text-sm font-medium border border-[var(--card-border)] transition-all shadow-xs"
                aria-label="Search curated finds"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search picks...</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold rounded bg-white/50 dark:bg-black/40 text-[var(--text-muted)] border border-[var(--card-border)]">
                  ⌘K
                </kbd>
              </button>

              {/* MOBILE HAMBURGER MENU BUTTON */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--accent-lavender)] hover:text-white md:hidden transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE SLIDE-DOWN MAGAZINE DRAWER */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--card-border)] bg-[var(--card-bg)] px-6 py-6 space-y-6 shadow-xl">
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/buying-guides"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold text-sm hover:bg-[var(--accent-lavender)] hover:text-white transition-all"
              >
                <BookOpen className="w-4 h-4 text-[var(--accent-lavender)]" />
                <span>Editorial Guides</span>
              </Link>
              <Link
                href="/best-picks"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold text-sm hover:bg-[var(--accent-lavender)] hover:text-white transition-all"
              >
                <Sparkles className="w-4 h-4 text-[var(--accent-lavender)]" />
                <span>Wishlist Feeds</span>
              </Link>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                Explore Categories
              </h3>
              <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                {siteConfig.categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/categories/${cat.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent-lavender)] truncate"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE iOS-STYLE STICKY BOTTOM NAVIGATION BAR */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#1A1128]/95 backdrop-blur-xl border-t border-[var(--card-border)] py-2 px-4 flex items-center justify-around md:hidden shadow-2xl"
        aria-label="Mobile bottom navigation"
      >
        <Link
          href="/"
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-2xl text-[var(--text-secondary)] hover:text-[var(--accent-lavender)] active:scale-95 transition-all"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight">Home</span>
        </Link>

        <Link
          href="/best-picks"
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-2xl text-[var(--text-secondary)] hover:text-[var(--accent-lavender)] active:scale-95 transition-all"
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight">Explore</span>
        </Link>

        <button
          type="button"
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center w-12 h-12 -mt-4 rounded-full bg-gradient-to-tr from-[var(--accent-lavender)] to-[#D98880] text-white shadow-lg active:scale-90 transition-transform"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>

        <Link
          href="/categories"
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-2xl text-[var(--text-secondary)] hover:text-[var(--accent-lavender)] active:scale-95 transition-all"
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight">Topics</span>
        </Link>

        <Link
          href="/buying-guides"
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-2xl text-[var(--text-secondary)] hover:text-[var(--accent-lavender)] active:scale-95 transition-all"
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight">Guides</span>
        </Link>
      </nav>
    </>
  );
};
