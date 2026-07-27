import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck } from "lucide-react";

interface AuthorCardProps {
  authorName?: string;
  role?: string;
  bio?: string;
  date?: string;
  readingTime?: string;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({
  authorName = siteConfig.author.name,
  role = siteConfig.author.role,
  bio = siteConfig.author.bio,
  date,
  readingTime,
}) => {
  return (
    <div className="my-10 p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[var(--text-primary)] text-[var(--bg-page)] flex items-center justify-center font-bold text-lg shrink-0">
          VT
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-base text-[var(--text-primary)]">
              {authorName}
            </span>
            <span className="text-xs bg-[var(--tag-bg)] text-[var(--text-secondary)] px-2.5 py-0.5 rounded-full font-medium">
              {role}
            </span>
          </div>
          <p className="text-xs leading-relaxed text-[var(--text-secondary)] mt-1.5 max-w-xl">
            {bio}
          </p>
          {(date || readingTime) && (
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mt-2">
              {date && <span>Updated {date}</span>}
              {date && readingTime && <span>•</span>}
              {readingTime && <span>{readingTime}</span>}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-start sm:items-end gap-1.5 border-t sm:border-t-0 pt-4 sm:pt-0 w-full sm:w-auto border-[var(--card-border)]">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Verified Editorial Standard</span>
        </div>
        <Link
          href="/about#testing-methodology"
          className="text-xs text-[var(--accent-blue)] underline font-medium hover:text-[var(--accent-hover)]"
        >
          Our Testing Methodology
        </Link>
      </div>
    </div>
  );
};
