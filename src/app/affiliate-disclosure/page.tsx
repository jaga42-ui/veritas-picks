import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Our FTC compliance disclosure and explanation of our Amazon affiliate partnership.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-4 border-b border-[var(--card-border)] pb-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Affiliate Disclosure" },
          ]}
        />
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Affiliate Disclosure & FTC Compliance
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Full transparency on our retail affiliate partnerships and how our site is funded.
        </p>
      </div>

      <div className="space-y-8 text-base text-[var(--text-secondary)] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Amazon Associates Program Disclosure
          </h2>
          <p>
            {siteConfig.name} is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated international Amazon marketplaces.
          </p>
          <p>
            As an Amazon Associate, we earn from qualifying purchases. Whenever you follow a link on our website to an online retailer like Amazon and make a purchase, we may receive a small percentage of the transaction cost as commission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Does This Cost You Extra?
          </h2>
          <p>
            <strong>No.</strong> Your price remains identical whether you purchase a product through our affiliate link or navigate directly to the retailer on your own. Affiliate commissions are paid by the retailer out of their profit margin.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Why Affiliate Links Make Us Better
          </h2>
          <p>
            Unlike traditional publications that rely on banner ads or sponsored posts, our affiliate model aligns our financial success with your long-term satisfaction. If we recommend a poor product and you return it, we earn nothing. We are incentivized exclusively to recommend high-quality gear that stands the test of time.
          </p>
        </section>
      </div>
    </div>
  );
}
