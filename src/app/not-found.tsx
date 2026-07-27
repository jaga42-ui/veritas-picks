import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Search } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-8">
      <div className="w-16 h-16 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center mx-auto text-[var(--text-primary)] shadow-sm">
        <Search className="w-8 h-8 text-[var(--text-muted)]" />
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Page Not Found
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
          The review or product guide you are looking for has been moved or no longer exists.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[var(--text-primary)] text-[var(--bg-page)] font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/buying-guides"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[var(--card-bg)] hover:bg-[var(--card-hover)] text-[var(--text-primary)] border border-[var(--card-border)] font-semibold text-sm transition-all"
        >
          <BookOpen className="w-4 h-4 text-amber-500" />
          <span>Browse All Guides</span>
        </Link>
      </div>
    </div>
  );
}
