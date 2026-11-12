import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RESOURCE_CARDS, LAUNCH_ARTICLES } from "@/data/site-content";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "Resources and Insights | SourceWorx",
  description:
    "Solution briefs, whitepapers and notes on running AI for growth, productivity and governance in production.",
  keywords: ["enterprise AI insights"],
};

/* ------------------------------------------------------------------ */
/* Motion + micro-interaction layer                                   */
/* ------------------------------------------------------------------ */
const ANIMATION_CSS = `
  @keyframes sw-blur-in {
    from { opacity: 0; filter: blur(10px); transform: translate3d(0, 16px, 0); }
    to   { opacity: 1; filter: blur(0);    transform: translate3d(0, 0, 0); }
  }
  @keyframes sw-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes sw-drift {
    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
    50%      { transform: translate3d(28px, -20px, 0) scale(1.06); }
  }
  @keyframes sw-pulse-dot {
    0%, 100% { opacity: 0.55; box-shadow: 0 0 0 0 rgba(20, 184, 166, 0); }
    50%      { opacity: 1;    box-shadow: 0 0 0 4px rgba(20, 184, 166, 0.12); }
  }

  .sw-blur-in { opacity: 0; animation: sw-blur-in 1000ms cubic-bezier(0.22, 1, 0.36, 1) both; }
  .sw-fade-in { opacity: 0; animation: sw-fade-in 1600ms ease both; }
  .sw-drift   { animation: sw-drift 22s ease-in-out infinite; }
  .sw-pulse   { animation: sw-pulse-dot 2600ms ease-in-out infinite; }

  .sw-arrow { transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1); }
  .group:hover .sw-arrow, a:hover .sw-arrow, a:focus-visible .sw-arrow {
    transform: translate3d(3px, 0, 0);
  }

  .sw-art-link { transition: color 400ms ease; }
  .sw-art-link:hover { color: #0D9488; }

  .sw-art-rule { transition: background-color 400ms ease; }
  .sw-art-link:hover .sw-art-rule { background-color: #0D9488; }

  .sw-featured:hover .sw-featured-title { color: #0D9488; }
  .sw-featured-title { transition: color 350ms ease; }

  .sw-index-row { transition: background-color 450ms ease; }
  .sw-index-row:hover { background-color: rgba(255, 255, 255, 0.025); }

  @supports (animation-timeline: view()) {
    .sw-reveal {
      opacity: 0;
      animation: sw-blur-in linear both;
      animation-timeline: view();
      animation-range: entry 5% cover 22%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sw-blur-in, .sw-fade-in, .sw-drift, .sw-pulse, .sw-reveal {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
      filter: none !important;
    }
    .sw-arrow { transition: none !important; }
  }
`;

/* ------------------------------------------------------------------ */
/* Section index rail                                                 */
/* ------------------------------------------------------------------ */
function SectionIndex({
  num,
  label,
  dark = false,
}: {
  num: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`font-mono text-[11px] font-semibold uppercase tracking-[0.22em] ${
          dark ? "text-teal" : "text-teal-deep"
        }`}
      >
        {num}
      </span>
      <span
        aria-hidden="true"
        className={`h-px w-8 ${dark ? "bg-teal/40" : "bg-teal-deep/30"}`}
      />
      <span
        className={`font-mono text-[11px] font-medium uppercase tracking-[0.22em] ${
          dark ? "text-white/45" : "text-slate-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function ResourcesPage() {
  const totalEntries = LAUNCH_ARTICLES.length + RESOURCE_CARDS.length;

  return (
    <div className="bg-[#FAFAF9]">
      <style dangerouslySetInnerHTML={{ __html: ANIMATION_CSS }} />

      {/* ================================================================ */}
      {/* 00 — HERO (ink, publication issue cover)                          */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-ink text-white">
        {/* Grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at 50% 0%, black 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 0%, black 40%, transparent 75%)",
          }}
        />
        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="sw-drift pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-teal/[0.10] blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="sw-drift pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#5B8DEF]/[0.06] blur-[120px]"
          style={{ animationDelay: "-8s" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-10 lg:px-8 lg:pb-32">
          {/* Publication ribbon */}
          <div className="sw-fade-in flex flex-wrap items-center gap-4 border-b border-white/[0.06] pb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
            <span className="flex items-center gap-2">
              <span className="sw-pulse h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
              <span className="text-white/70">SourceWorx Press</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>Vol. 02 · Issue 01</span>
            <span aria-hidden="true">·</span>
            <span>{String(totalEntries).padStart(2, "0")} entries</span>
            <span aria-hidden="true" className="ml-auto hidden sm:inline">
              Updated regularly
            </span>
          </div>

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="sw-fade-in mt-6 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/35"
            style={{ animationDelay: "60ms" }}
          >
            <Link href="/" className="transition-colors hover:text-white">
              SourceWorx
            </Link>
            <span aria-hidden="true" className="text-white/20">/</span>
            <span className="text-white/70">Resources</span>
          </nav>

          <div className="mt-14 max-w-4xl">
            <h1
              className="sw-blur-in font-display text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-[64px]"
              style={{ animationDelay: "120ms" }}
            >
              Guides, briefs and notes for{" "}
              <span className="bg-gradient-to-r from-teal to-[#5B8DEF] bg-clip-text text-transparent">
                running AI in production.
              </span>
            </h1>

            <p
              className="sw-blur-in mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
              style={{ animationDelay: "240ms" }}
            >
              Field notes from engagements, security reviews and 90-day pilots — plus the
              briefs and whitepapers we hand to buyers, architects and audit teams.
            </p>
          </div>

          {/* Featured article preview — a table of contents */}
          <div
            className="sw-blur-in mt-16 grid grid-cols-1 gap-3 sm:grid-cols-3"
            style={{ animationDelay: "380ms" }}
          >
            {LAUNCH_ARTICLES.map((post, i) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="group rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] tabular-nums text-white/30">
                    ESS·{String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden="true" className="h-3 w-px bg-white/15" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-teal">
                    {post.type}
                  </span>
                  <ArrowRight className="sw-arrow ml-auto h-3.5 w-3.5 text-white/30 transition-colors group-hover:text-teal" />
                </div>
                <p className="mt-4 font-display text-sm font-semibold leading-snug tracking-tight text-white sm:text-base">
                  {post.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 01 — FEATURED INSIGHTS (paper, magazine 3-up)                     */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <SectionIndex num="01" label="Featured insights" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Notes from{" "}
              <span className="text-slate-400">the practice.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We publish what we learn on live engagements — what breaks, what holds, and
              what the numbers actually say.
            </p>
          </div>

          <div className="sw-reveal mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
            {LAUNCH_ARTICLES.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="sw-featured group flex flex-col justify-between"
              >
                <div>
                  {/* Article head: number · type · read arrow */}
                  <div className="sw-art-rule h-[2px] w-full bg-slate-200" aria-hidden="true" />

                  <div className="mt-6 flex items-baseline justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-sm font-semibold tabular-nums text-slate-400">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden="true" className="h-3 w-px bg-slate-300" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal-deep">
                        {post.type}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                      Essay
                    </span>
                  </div>

                  <h3 className="sw-featured-title mt-6 font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                    {post.summary}
                  </p>
                </div>

                {/* Footer: byline + read */}
                <div className="mt-8 border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                        By
                      </span>
                      <span className="text-sm font-medium text-ink">{post.byline}</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-teal-deep">
                      Read
                      <ArrowRight className="sw-arrow h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 02 — LIBRARY (ink, editorial index)                               */}
      {/* ================================================================ */}
      <section className="relative bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <SectionIndex num="02" label="Library" dark />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Briefs, whitepapers{" "}
              <span className="text-white/40">and guides.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              The documents we actually hand over during evaluation — solution briefs,
              architecture notes and security packs.
            </p>
          </div>

          {/* Editorial index */}
          <div className="sw-reveal mt-16">
            {/* Header row */}
            <div className="hidden border-b border-white/10 pb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35 sm:grid sm:grid-cols-12 sm:gap-6">
              <div className="sm:col-span-2">Code</div>
              <div className="sm:col-span-2">Type</div>
              <div className="sm:col-span-6">Title</div>
              <div className="sm:col-span-2 text-right">Status</div>
            </div>

            {/* Rows */}
            {RESOURCE_CARDS.map((card, idx) => {
              const code = `R·${String(idx + 1).padStart(2, "0")}`;

              return (
                <div
                  key={card.title}
                  className="sw-index-row grid grid-cols-1 gap-3 border-b border-white/[0.06] py-6 sm:grid-cols-12 sm:items-start sm:gap-6 sm:py-8"
                >
                  {/* Code + mobile type */}
                  <div className="flex items-baseline justify-between sm:col-span-2 sm:block">
                    <span className="font-mono text-[11px] font-semibold tabular-nums text-white/40">
                      {code}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-teal sm:hidden">
                      {card.type}
                    </span>
                  </div>

                  {/* Type (desktop only) */}
                  <div className="hidden sm:col-span-2 sm:block">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
                      {card.type}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="sm:col-span-6">
                    <h3 className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/50 sm:text-[14px]">
                      {card.line}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="flex justify-start sm:col-span-2 sm:justify-end">
                    {card.href ? (
                      <Link
                        href={card.href}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors duration-300 hover:text-teal/80"
                      >
                        <span>{card.status}</span>
                        <ArrowRight className="sw-arrow h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                        {card.status}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Footer of index */}
            <div className="mt-6 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
              <span>
                {String(RESOURCE_CARDS.length).padStart(2, "0")} entries in library
              </span>
              <span className="hidden sm:inline">Vol. 02 · Issue 01</span>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}