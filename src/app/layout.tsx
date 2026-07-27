import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { AppWrapper } from "@/components/layout/AppWrapper";
import { getAllGuides } from "@/lib/content";
import { SearchItem } from "@/components/search/SearchModal";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F3" },
    { media: "(prefers-color-scheme: dark)", color: "#131412" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Pinterest lifestyle",
    "Amazon finds",
    "Scandinavian home",
    "Old Money aesthetic",
    "aesthetic bedroom",
    "curated favorites",
    "quiet luxury",
  ],
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const guides = await getAllGuides();

  // Prepare client-side search index
  const searchItems: SearchItem[] = [
    ...guides.map((g) => ({
      id: g.slug,
      title: g.title,
      description: g.description,
      href: `/${g.slug}`,
      type: "guide" as const,
      category: g.categoryName,
    })),
    ...siteConfig.categories.map((cat) => ({
      id: `cat-${cat.slug}`,
      title: `${cat.name} Editorial Collection`,
      description: cat.description,
      href: `/categories/${cat.slug}`,
      type: "category" as const,
    })),
    ...guides.flatMap((g) =>
      g.products.map((p) => ({
        id: `prod-${p.asin}`,
        title: p.name,
        description: `${p.brand} • ${p.priceClass} Tier • ${p.summary.slice(0, 70)}...`,
        href: `/${g.slug}#product-${p.asin}`,
        type: "product" as const,
        badge: p.badge,
        category: g.categoryName,
      }))
    ),
  ];

  // Organization & Website JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.png`,
        },
        description: siteConfig.description,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${sans.variable} ${editorial.variable} min-h-screen antialiased bg-[var(--bg-page)] text-[var(--text-primary)] font-sans`}
      >
        <AppWrapper searchItems={searchItems}>{children}</AppWrapper>
      </body>
    </html>
  );
}
