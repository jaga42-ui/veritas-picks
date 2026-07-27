import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Veritas Picks",
  description:
    "How Veritas Picks protects reader privacy and handles analytics and affiliate links with transparency.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-10">
      <div className="space-y-4 border-b border-[var(--card-border)] pb-8">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent-pink)]">
          Legal &amp; Privacy
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-editorial">
          Privacy Policy
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          At Veritas Picks, reader trust and privacy are foundational to our editorial mission.
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)] font-editorial">
            1. Information Collection &amp; Analytics
          </h2>
          <p>
            We collect minimal, aggregated analytics to understand which editorial guides and categories are most helpful to our readership. We do not sell personal data to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)] font-editorial">
            2. Affiliate Tracking &amp; Cookies
          </h2>
          <p>
            When you click on an affiliate link (such as Amazon or independent retailers) on Veritas Picks, a temporary cookie or tracking token may be used by the merchant to attribute the referral. This tracking is handled anonymously by the respective merchant according to their privacy policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)] font-editorial">
            3. Newsletter Communications
          </h2>
          <p>
            If you subscribe to the Veritas Picks editorial newsletter, your email address is used solely for delivering our curated weekly issues and editorial announcements. You may unsubscribe at any time via the link at the bottom of every issue.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)] font-editorial">
            4. Contact
          </h2>
          <p>
            For privacy inquiries or data requests, please contact our editorial desk at <strong className="text-[var(--text-primary)]">privacy@veritaspicks.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
