import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ShieldCheck, Award, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our independent product testing methodology, our editorial team, and our commitment to honest, Wirecutter-style reviews.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-4 border-b border-[var(--card-border)] pb-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
          About {siteConfig.name}
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          We are an independent product review publication dedicated to helping you buy the right gear the first time—without hype, sponsored fluff, or pay-to-play endorsements.
        </p>
      </div>

      <div className="space-y-8 text-base text-[var(--text-secondary)] leading-relaxed">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Our Mission
        </h2>
        <p>
          In a world flooded with AI-generated affiliate spam, fake customer reviews, and influencer marketing, finding honest advice has never been harder. Our goal is simple: test products in the real world, measure performance with objective metrics, and recommend only the items we use in our own homes and offices.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] space-y-2">
            <ShieldCheck className="w-6 h-6 text-amber-500" />
            <h3 className="font-bold text-[var(--text-primary)]">
              100% Independent
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              We never accept money from brands for favorable reviews or placement on our lists.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] space-y-2">
            <Award className="w-6 h-6 text-amber-500" />
            <h3 className="font-bold text-[var(--text-primary)]">
              Lab & Field Tested
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              We measure decibels, latency, battery endurance, and long-term durability over months of use.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] space-y-2">
            <Users className="w-6 h-6 text-amber-500" />
            <h3 className="font-bold text-[var(--text-primary)]">
              Reader Supported
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              We earn commissions through retail affiliate links at zero additional cost to you.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[var(--text-primary)] pt-6">
          How We Make Money
        </h2>
        <p>
          {siteConfig.name} is a participant in the Amazon Services LLC Associates Program. When you click a retail link on our site and make a purchase, we may earn a small affiliate commission.
        </p>
        <p>
          This commission never increases the price you pay, and it is the sole revenue source that funds our testing equipment, sample purchases, and editorial staff. Because we only earn a commission if you keep the product, our financial incentive is 100% aligned with recommending reliable products that you will love.
        </p>

        <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] space-y-3">
          <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span>Our Editorial Promise</span>
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• If a product fails during long-term testing, we update our review and remove our recommendation.</li>
            <li>• We always highlight both pros and cons—no product is perfect.</li>
            <li>• We never let advertising or affiliate commission rates dictate which products we test.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
