"use client";

import React, { useEffect, useState } from "react";
import { ListFilter } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TOCHeading[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  headings,
}) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -65% 0%" }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  return (
    <aside className="sticky top-24 bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-3xl max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4">
        <ListFilter className="w-4 h-4" />
        <span>In This Guide</span>
      </div>

      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              "block text-xs leading-relaxed transition-colors duration-150 border-l-2 pl-3 py-1",
              heading.level === 3 ? "ml-3" : "",
              activeId === heading.id
                ? "border-[var(--accent-blue)] text-[var(--accent-blue)] font-semibold"
                : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            )}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  );
};
