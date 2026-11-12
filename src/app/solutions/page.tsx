import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  PILLARS,
  ALL_SOLUTION_SUMMARIES,
  PillarId,
} from "@/data/solutions";
import { StatusChip } from "@/components/StatusChip";
import { RoomOSLockup, ZTDLogo, SingularityMark } from "@/components/BrandMarks";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions by Outcome | SourceWorx",
  description:
    "Nine products in three pillars: GrowthWorx industry apps, FlowWorx delivery platforms and TrustWorx governance with Singularity.",
  keywords: ["enterprise AI solutions"],
};

const PILLAR_ORDER: PillarId[] = ["growth", "productivity", "governance"];

const PILLAR_CODES: Record<PillarId, string> = {
  growth: "GW",
  productivity: "FW",
  governance: "TW",
};

type SolutionSummary = (typeof ALL_SOLUTION_SUMMARIES)[PillarId][number];

/* ------------------------------------------------------------------ */
/* Motion + micro-interaction layer                                   */
/* ------------------------------------------------------------------ */
const ANIMATION_CSS = `
  @keyframes sw-blur-in {
    from { opacity: 0; filter: blur(10px); transform: translate3d(0, 16px, 0); }
    to   { opacity: 1; filter: blur(0);   transform: translate3d(0, 0, 0); }
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
  a:hover .sw-arrow, a:focus-visible .sw-arrow { transform: translate3d(3px, 0, 0); }

  .sw-chip {
    transition: background-color 350ms ease, border-color 350ms ease, color 350ms ease;
  }

  .sw-row { transition: background-color 450ms ease; }
  .sw-row:hover { background-color: rgba(20, 184, 166, 0.03); }

  .sw-solution {
    transition: background-color 450ms ease;
  }
  .sw-solution:hover { background-color: rgba(15, 23, 42, 0.012); }

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
/* Solution logo renderer                                             */
/* ------------------------------------------------------------------ */
function SolutionLogo({ sol }: { sol: SolutionSummary }) {
  if (sol.logoType === "roomos") {
    return <RoomOSLockup variant="light" className="text-2xl" />;
  }
  if (sol.logoType === "ztd") {
    return <ZTDLogo variant="light" />;
  }
  if (sol.logoType === "singularity") {
    return <SingularityMark variant="light" />;
  }
  return (
    <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
      {sol.name}
    </h3>
  );
}

/* ------------------------------------------------------------------ */
/* Pillar header — chapter divider with strong pillar identity        */
/* ------------------------------------------------------------------ */
function PillarHeader({
  pillar,
  count,
}: {
  pillar: (typeof PILLARS)[PillarId];
  count: number;
}) {
  return (
    <div>
      {/* Accent hairline */}
      <div
        className="h-[3px] w-full"
        style={{ backgroundColor: pillar.accentHex }}
        aria-hidden="true"
      />

      <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em]"
            style={{ color: pillar.textHex }}
          >
            <span className="tabular-nums">
              {String(pillar.number).padStart(2, "0")}
            </span>
            <span className="text-slate-300">/</span>
            <span>{pillar.subtitle}</span>
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {pillar.name}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {pillar.tagline}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
            {String(count).padStart(2, "0")} solutions
          </span>
          <Link
            href={pillar.href}
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            style={{ color: pillar.textHex }}
          >
            <span>Explore {pillar.name}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SolutionsIndexPage() {
  const totalSolutions =
    ALL_SOLUTION_SUMMARIES.growth.length +
    ALL_SOLUTION_SUMMARIES.productivity.length +
    ALL_SOLUTION_SUMMARIES.governance.length;

  return (
    <div className="bg-[#FAFAF9]">
      <style dangerouslySetInnerHTML={{ __html: ANIMATION_CSS }} />

      {/* ================================================================ */}
      {/* 00 — HERO (ink, with 3-pillar catalog preview)                    */}
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
          {/* Status ribbon */}
          <div className="sw-fade-in flex flex-wrap items-center gap-4 border-b border-white/[0.06] pb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
            <span className="flex items-center gap-2">
              <span className="sw-pulse h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
              <span className="text-white/70">SourceWorx</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>Catalog</span>
            <span aria-hidden="true">·</span>
            <span>
              {String(totalSolutions).padStart(2, "0")} products across{" "}
              {String(PILLAR_ORDER.length).padStart(2, "0")} pillars
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
            <span className="text-white/70">Solutions</span>
          </nav>

          <div className="mt-14 max-w-4xl">
            <h1
              className="sw-blur-in font-display text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-[64px]"
              style={{ animationDelay: "120ms" }}
            >
              Three pillars.{" "}
              <span className="bg-gradient-to-r from-teal to-[#5B8DEF] bg-clip-text text-transparent">
                Every product built to move one number.
              </span>
            </h1>

            <p
              className="sw-blur-in mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
              style={{ animationDelay: "240ms" }}
            >
              GrowthWorx applications bring in revenue. FlowWorx platforms make delivery
              faster and sharper. TrustWorx keeps every model and agent visible,
              controlled and provable. All of it runs on one governed foundation.
            </p>
          </div>

          {/* Three-pillar catalog preview */}
          <div
            className="sw-blur-in mt-16 grid grid-cols-1 gap-4 md:grid-cols-3"
            style={{ animationDelay: "380ms" }}
          >
            {PILLAR_ORDER.map((pid) => {
              const pillar = PILLARS[pid];
              const list = ALL_SOLUTION_SUMMARIES[pid];
              return (
                <div
                  key={pid}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[10px] tabular-nums text-white/30">
                      {String(pillar.number).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full"
                      style={{ backgroundColor: pillar.accentHex }}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                      {String(list.length).padStart(2, "0")} products
                    </span>
                  </div>
                  <a
                    href={`#pillar-${pid}`}
                    className="mt-3 block font-display text-xl font-semibold tracking-tight text-white transition-colors hover:text-teal"
                  >
                    {pillar.name}
                  </a>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                    {pillar.subtitle}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {list.map((sol) => (
                      <a
                        key={sol.slug}
                        href={`#solution-${sol.slug}`}
                        className="sw-chip rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[11px] text-white/70 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                      >
                        {sol.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 01 — PILLARS & SOLUTIONS (paper)                                  */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {PILLAR_ORDER.map((pid, pillarIdx) => {
            const pillar = PILLARS[pid];
            const list = ALL_SOLUTION_SUMMARIES[pid];
            const code = PILLAR_CODES[pid];

            return (
              <div
                key={pid}
                id={`pillar-${pid}`}
                className={`scroll-mt-24 ${pillarIdx > 0 ? "mt-24 sm:mt-32" : ""}`}
              >
                <div className="sw-reveal">
                  <PillarHeader pillar={pillar} count={list.length} />
                </div>

                {/* Solutions — editorial rows with pillar accent spine */}
                <div className="sw-reveal mt-12">
                  {list.map((sol, idx) => (
                    <article
                      key={sol.slug}
                      id={`solution-${sol.slug}`}
                      className="sw-solution scroll-mt-24 border-t border-slate-200 last:border-b"
                    >
                      <div
                        className="border-l-2 py-12 pl-6 sm:py-14 sm:pl-8"
                        style={{ borderLeftColor: pillar.accentHex }}
                      >
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                          {/* Left column */}
                          <div className="lg:col-span-5">
                            {/* Header: code · sector · status */}
                            <div className="flex flex-wrap items-center gap-3">
                              <span
                                className="font-mono text-[11px] font-semibold tabular-nums tracking-wider"
                                style={{ color: pillar.textHex }}
                              >
                                {code}·{String(idx + 1).padStart(2, "0")}
                              </span>
                              <span aria-hidden="true" className="h-3 w-px bg-slate-200" />
                              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                                {sol.sector}
                              </span>
                              <StatusChip status={sol.status} compact />
                            </div>

                            {/* Logo / name */}
                            <div className="mt-6">
                              <SolutionLogo sol={sol} />
                            </div>

                            {/* Description */}
                            <p className="mt-4 text-base leading-relaxed text-slate-600">
                              {sol.shortDescription}
                            </p>

                            {/* Moves callout */}
                            <div
                              className="mt-6 border-l-2 pl-4"
                              style={{ borderLeftColor: pillar.accentHex }}
                            >
                              <div
                                className="font-mono text-[10px] uppercase tracking-[0.18em]"
                                style={{ color: pillar.textHex }}
                              >
                                Moves
                              </div>
                              <p className="mt-1.5 text-sm font-medium leading-relaxed text-ink">
                                {sol.whatItMoves}
                              </p>
                            </div>

                            {/* Pricing + View details */}
                            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                                {sol.pricingModel}
                              </span>
                              <Link
                                href={sol.href}
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-teal-deep"
                              >
                                <span>View details</span>
                                <ArrowRight className="sw-arrow h-4 w-4" />
                              </Link>
                            </div>
                          </div>

                          {/* Right column: capabilities */}
                          <div className="border-t border-slate-200 pt-6 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                              Key capabilities
                            </div>
                            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                              {sol.highlights.slice(0, 8).map((feat) => (
                                <li
                                  key={feat}
                                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="mt-[9px] h-px w-3 shrink-0"
                                    style={{ backgroundColor: pillar.accentHex }}
                                  />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Closing box — custom build CTA */}
          <div className="sw-reveal mt-24 sm:mt-32">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 sm:p-12">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal-deep">
                    Custom build
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                    Don&apos;t see your use case? We build that too.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                    Most of our solutions started as a single client build. Tell us the
                    revenue or efficiency number you want to move and we&apos;ll build it
                    in 90 days, in whichever pillar it belongs.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:justify-self-end">
                  <Link
                    href="/platform#build"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-ink-soft"
                  >
                    <span>Build with us</span>
                    <ArrowRight className="sw-arrow h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}