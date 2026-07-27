import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Editorial Ethics & Testing Standards",
  description:
    "Our strict editorial ethics policy, conflict-of-interest guidelines, and commitment to objective testing.",
};

export default function EditorialEthicsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-4 border-b border-[var(--card-border)] pb-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Editorial Ethics" },
          ]}
        />
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Editorial Ethics & Standards
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          How we maintain complete independence between our editorial recommendations and affiliate revenue.
        </p>
      </div>

      <div className="space-y-8 text-base text-[var(--text-secondary)] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            1. Separation of Editorial and Advertising
          </h2>
          <p>
            Our editorial team operates with complete autonomy. Writers, editors, and lab testers do not know the commission rates of the products they review, nor do they communicate with affiliate managers or advertisers regarding product scores.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            2. How We Procure Test Units
          </h2>
          <p>
            We acquire products for testing through three primary methods:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Retail Purchase:</strong> Whenever possible, we purchase products at standard retail prices anonymously to ensure we receive the same quality as a regular consumer.
            </li>
            <li>
              <strong>Manufacturer Samples:</strong> Occasionally, we accept temporary review samples from manufacturers for time-sensitive launches. These samples are either returned after evaluation or donated.
            </li>
            <li>
              <strong>No Pre-Review Conditions:</strong> We never agree to pre-review copy approval, guaranteed ratings, or promotional requirements in exchange for testing samples.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            3. Error Correction and Long-Term Updates
          </h2>
          <p>
            Products change over time. Firmware updates can improve battery life, or manufacturing defects can surface months after launch. We revisit our top recommendations regularly and update our guides with timestamps whenever rankings change.
          </p>
        </section>
      </div>
    </div>
  );
}
