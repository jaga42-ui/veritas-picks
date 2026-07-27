"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, BookOpen, Tag, Award, ArrowUpRight } from "lucide-react";

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: "guide" | "category" | "product";
  category?: string;
  badge?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: SearchItem[];
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  items,
}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? items.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          (item.category &&
            item.category.toLowerCase().includes(query.toLowerCase()))
      )
    : items.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/50 backdrop-blur-xs">
      <div className="w-full max-w-2xl rounded-3xl bg-[var(--bg-page)] border border-[var(--card-border)] shadow-2xl overflow-hidden animate-in fade-in duration-200">
        {/* Search Header Input */}
        <div className="p-4 border-b border-[var(--card-border)] flex items-center gap-3">
          <Search className="w-5 h-5 text-[var(--text-muted)] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search buying guides, categories, or top products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)] text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-sm text-[var(--text-muted)]">
              No results found for &ldquo;{query}&rdquo;. Try another keyword like &ldquo;keyboard&rdquo; or &ldquo;espresso&rdquo;.
            </div>
          ) : (
            <div>
              <div className="text-xs uppercase font-semibold text-[var(--text-muted)] px-3 mb-2">
                {query ? "Search Results" : "Popular Searches"}
              </div>
              <div className="space-y-1.5">
                {filtered.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-[var(--card-bg)] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[var(--card-bg)] group-hover:bg-white dark:group-hover:bg-[#2c2c2e] flex items-center justify-center text-[var(--text-secondary)] border border-[var(--card-border)]">
                        {item.type === "guide" && <BookOpen className="w-4 h-4" />}
                        {item.type === "category" && <Tag className="w-4 h-4" />}
                        {item.type === "product" && <Award className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[var(--text-primary)] flex items-center gap-2">
                          <span>{item.title}</span>
                          {item.badge && (
                            <span className="text-[10px] uppercase tracking-wider bg-[var(--text-primary)] text-[var(--bg-page)] px-2 py-0.5 rounded-full font-bold">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-[var(--text-muted)] line-clamp-1">
                          {item.description}
                        </div>
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Footer */}
        <div className="p-3 bg-[var(--card-bg)] border-t border-[var(--card-border)] flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span>Search across 10+ categories and editorial buying guides</span>
          <span>Veritas Picks</span>
        </div>
      </div>
    </div>
  );
};
