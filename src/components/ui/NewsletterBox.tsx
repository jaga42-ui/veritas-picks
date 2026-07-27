"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export const NewsletterBox: React.FC<{ compact?: boolean }> = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="my-10 p-8 rounded-3xl bg-[var(--text-primary)] text-[var(--bg-page)] relative overflow-hidden shadow-lg">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-white mb-2">
          <Mail className="w-6 h-6" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          The Best Deals & Tested Picks, In Your Inbox
        </h3>

        <p className="text-sm sm:text-base leading-relaxed text-white/80 max-w-lg mx-auto">
          Join 45,000+ smart shoppers. We send one curated email every Friday with newly tested gear, price drops, and zero spam.
        </p>

        {submitted ? (
          <div className="mt-6 p-4 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center gap-2 text-sm font-semibold">
            <CheckCircle2 className="w-5 h-5" />
            <span>You&apos;re on the list! Check your inbox for confirmation.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address for weekly newsletter"
              className="w-full px-5 py-3.5 rounded-xl bg-white text-[var(--text-primary)] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[var(--text-primary)] hover:bg-[var(--accent-lavender)] text-[var(--bg-page)] hover:text-white font-semibold text-sm transition-all duration-200 shrink-0 shadow-md"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[11px] text-white/50 pt-2">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};
