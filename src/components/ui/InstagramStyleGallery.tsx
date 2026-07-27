import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, Sparkles } from "lucide-react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
    caption: "Old money aesthetic staples on Amazon",
    href: "/best-old-money-outfit-ideas-amazon",
  },
  {
    url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80",
    caption: "Cozy Scandinavian bedroom inspiration",
    href: "/best-30-cozy-bedroom-essentials",
  },
  {
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    caption: "Viral beauty shelfie aesthetic",
    href: "/best-20-viral-beauty-products",
  },
  {
    url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
    caption: "Everyday minimalist gold jewelry stack",
    href: "/best-minimalist-jewelry-amazon",
  },
  {
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    caption: "Neutral apartment decor & stoneware",
    href: "/best-neutral-home-decor-finds",
  },
  {
    url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    caption: "Luxury-looking woven handbags",
    href: "/best-luxury-looking-handbags-amazon",
  },
];

export const InstagramStyleGallery: React.FC = () => {
  return (
    <section className="py-16 border-t border-[var(--card-border)] bg-white dark:bg-[#131412]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Daily Style & Inspiration</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] font-editorial">
              Follow Our Daily Pinterest & Instagram Moodboards
            </h2>
            <p className="text-base text-[var(--text-secondary)]">
              Tag <strong className="text-[var(--text-primary)]">#VeritasPicks</strong> to feature your everyday Amazon aesthetic.
            </p>
          </div>

          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--card-bg)] hover:bg-[var(--card-hover)] text-[var(--text-primary)] text-xs font-bold uppercase tracking-wider border border-[var(--card-border)] transition-colors"
          >
            <Camera className="w-4 h-4" />
            <span>@veritaspicks</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((img, idx) => (
            <Link
              key={idx}
              href={img.href}
              className="group relative h-48 sm:h-64 rounded-2xl overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] block"
            >
              <Image
                src={img.url}
                alt={img.caption}
                fill
                sizes="(max-width: 768px) 50vw, 200px"
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-[11px] font-medium text-white line-clamp-2 leading-tight">
                  {img.caption}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
