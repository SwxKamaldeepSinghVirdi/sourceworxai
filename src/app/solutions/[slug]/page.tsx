import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { GROWTH_SOLUTIONS, getGrowthSolutionBySlug } from "@/data/solutions";
import { StatusChip } from "@/components/StatusChip";
import { ClosingCta } from "@/components/ClosingCta";

export function generateStaticParams() {
  return GROWTH_SOLUTIONS.map((sol) => ({ slug: sol.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getGrowthSolutionBySlug(slug);
  if (!solution) {
    return { title: "Solution Not Found | SourceWorx" };
  }
  return {
    title: solution.seo.title,
    description: solution.seo.description,
    keywords: [solution.seo.primaryKeyword, ...solution.seo.secondaryKeywords],
  };
}

const WHY_SOURCEWORX = [
  {
    title: "Built with real clients.",
    body: "Hardened in live operations, not designed in a lab.",
  },
  {
    title: "Yours to brand.",
    body: "Configurable to your workflows, available under your own name.",
  },
  {
    title: "Governed by default.",
    body: "Every AI feature runs on our governed foundation, with a full audit trail.",
  },
  {
    title: "Live in weeks.",
    body: "Rolled out through the 90-day engagement plan.",
  },
];

/* ------------------------------------------------------------------ */
/* Self-contained motion + micro-interaction layer.                   */
/* ------------------------------------------------------------------ */
const ANIMATION_CSS = `
  @keyframes sw-rise {
    from { opacity: 0; transform: translate3d(0, 24px, 0); }
    to   { opacity: 1; transform: translate3d(0, 0, 0); }
  }
  @keyframes sw-fade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes sw-scale-in {
    from { opacity: 0; transform: scale(0.98); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes sw-drift {
    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
    50%      { transform: translate3d(28px, -20px, 0) scale(1.06); }
  }

  .sw-hero-rise { opacity: 0; animation: sw-rise 900ms cubic-bezier(0.22, 1, 0.36, 1) both; }
  .sw-hero-fade { opacity: 0; animation: sw-fade 1400ms ease both; }
  .sw-hero-scale { opacity: 0; animation: sw-scale-in 1100ms cubic-bezier(0.22, 1, 0.36, 1) both; }
  .sw-drift { animation: sw-drift 22s ease-in-out infinite; }

  .sw-arrow { transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1); }
  a:hover .sw-arrow, a:focus-visible .sw-arrow { transform: translate3d(3px, 0, 0); }

  .sw-row { transition: background-color 450ms ease; }
  .sw-row:hover { background-color: rgba(13, 148, 136, 0.035); }

  .sw-row-dark { transition: background-color 450ms ease; }
  .sw-row-dark:hover { background-color: rgba(255, 255, 255, 0.025); }

  .sw-num { transition: color 450ms ease, transform 450ms cubic-bezier(0.22, 1, 0.36, 1); }
  .group:hover .sw-num { color: #0D9488; }
  .group:hover .sw-num--dark { color: #5EEAD4; }

  .sw-rule { transform-origin: left; transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1); }
  .group:hover .sw-rule { transform: scaleX(1); }

  @supports (animation-timeline: view()) {
    .sw-reveal {
      opacity: 0;
      animation: sw-rise linear both;
      animation-timeline: view();
      animation-range: entry 5% cover 22%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sw-hero-rise, .sw-hero-fade, .sw-hero-scale, .sw-drift, .sw-reveal {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
    .sw-arrow, .sw-num { transition: none !important; }
  }
`;

export default async function GrowthSolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getGrowthSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="bg-[#FAFAF9]">
      <style dangerouslySetInnerHTML={{ __html: ANIMATION_CSS }} />

      {/* ================================================================ */}
      {/* 00 — HERO (ink)                                                   */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-[#0A0F1C]">
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
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="sw-drift pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-teal-500/[0.10] blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-10 lg:px-8 lg:pb-32">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="sw-hero-fade flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40"
          >
            <Link href="/" className="transition-colors hover:text-white">
              SourceWorx
            </Link>
            <span className="text-white/20">/</span>
            <Link href="/growth" className="transition-colors hover:text-white">
              GrowthWorx
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/80">{solution.name}</span>
          </nav>

          <div className="mt-16 grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left column */}
            <div className="lg:col-span-7">
              <div
                className="sw-hero-rise flex flex-wrap items-center gap-2"
                style={{ animationDelay: "80ms" }}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-teal-300">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-teal-400"
                    aria-hidden="true"
                  />
                  GrowthWorx
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
                  {solution.sector}
                </span>
                <span className="inline-flex rounded-full bg-white/95 p-[2px]">
                  <StatusChip status={solution.status} compact />
                </span>
              </div>

              <h1
                className="sw-hero-rise mt-8 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
                style={{ animationDelay: "160ms" }}
              >
                {solution.headline}
              </h1>

              <p
                className="sw-hero-rise mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
                style={{ animationDelay: "240ms" }}
              >
                {solution.intro}
              </p>

              <div
                className="sw-hero-rise mt-10 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "320ms" }}
              >
                <Link
                  href={`/contact?interest=GrowthWorx+%C2%B7+industry+applications`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0A0F1C] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-xl hover:shadow-black/20"
                >
                  <span>Request a walkthrough</span>
                  <ArrowRight className="sw-arrow h-4 w-4" />
                </Link>
                <Link
                  href="/growth"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06]"
                >
                  <span>More in GrowthWorx</span>
                </Link>
              </div>
            </div>

            {/* Right card */}
            <div className="lg:col-span-5">
              <div
                className="sw-hero-scale rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8"
                style={{ animationDelay: "440ms" }}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-teal-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  What it moves
                </span>
                <p className="mt-6 font-display text-lg font-medium leading-snug text-white sm:text-xl">
                  {solution.whatItMoves}
                </p>
                <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                  <div className="flex items-start gap-3 text-sm text-white/60">
                    <Layers className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                    <span>Live in weeks via 90-day rollout</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-white/60">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                    <span>Governed by default with audit trail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 01 — PROBLEM (paper, editorial numbered list)                     */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal-700">
              <span className="mr-2">01</span>
              <span className="text-stone-400">/</span>
              <span className="ml-2">The problem</span>
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-[#0A0F1C] sm:text-4xl lg:text-5xl">
              What gets in the way today
            </h2>
          </div>

          <div className="sw-reveal mt-16">
            {solution.problems.map((problem, idx) => (
              <div
                key={problem.title}
                className="sw-row group border-t border-stone-200 last:border-b"
              >
                <div className="grid grid-cols-[auto_1fr] gap-6 py-10 sm:gap-12 sm:py-14">
                  <span className="sw-num pt-1 font-mono text-sm font-medium tabular-nums text-stone-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-[#0A0F1C] sm:text-2xl lg:text-3xl">
                      {problem.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
                      {problem.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 02 — CAPABILITIES (ink, numbered rows)                            */}
      {/* ================================================================ */}
      <section className="relative bg-[#0A0F1C] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal-400">
              <span className="mr-2">02</span>
              <span className="text-white/30">/</span>
              <span className="ml-2">What it does</span>
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {solution.name}, end to end
            </h2>
          </div>

          <div className="sw-reveal mt-16">
            {solution.capabilities.map((cap, idx) => (
              <div
                key={cap.area}
                className="sw-row-dark border-t border-white/[0.08] last:border-b"
              >
                <div className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
                  <div className="lg:col-span-2">
                    <span className="sw-num sw-num--dark font-display text-4xl font-bold tracking-tight text-white/10 sm:text-5xl">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="lg:col-span-10 lg:grid lg:grid-cols-2 lg:gap-12">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {cap.area}
                    </h3>
                    <ul className="mt-6 space-y-3 lg:mt-0">
                      {cap.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-3 text-base leading-relaxed text-white/65"
                        >
                          <span
                            className="mt-3 h-px w-4 shrink-0 bg-teal-400"
                            aria-hidden="true"
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 03 — WHO / HOW (paper, split)                                     */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal-700">
              <span className="mr-2">03</span>
              <span className="text-stone-400">/</span>
              <span className="ml-2">Fit</span>
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-[#0A0F1C] sm:text-4xl lg:text-5xl">
              Who it&apos;s for and how to start
            </h2>
          </div>

          <div className="sw-reveal mt-16 grid grid-cols-1 border-y border-stone-200 md:grid-cols-2 md:divide-x md:divide-stone-200">
            <div className="py-10 md:pr-12 sm:py-14 lg:py-16">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal-700">
                Who it&apos;s for
              </span>
              <p className="mt-6 text-lg leading-relaxed text-[#0A0F1C] sm:text-xl lg:text-2xl">
                {solution.whoItIsFor}
              </p>
            </div>
            <div className="border-t border-stone-200 py-10 md:border-t-0 md:pl-12 sm:py-14 lg:py-16">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone-500">
                How to get it
              </span>
              <p className="mt-6 text-lg leading-relaxed text-[#0A0F1C] sm:text-xl lg:text-2xl">
                {solution.howToGetIt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 04 — WHY SOURCEWORX (paper, hairline 2x2 grid)                    */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal-700">
              <span className="mr-2">04</span>
              <span className="text-stone-400">/</span>
              <span className="ml-2">Why SourceWorx</span>
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-[#0A0F1C] sm:text-4xl lg:text-5xl">
              Built to ship, not to demo
            </h2>
          </div>

          <div className="sw-reveal mt-14 grid grid-cols-1 border-l border-t border-stone-200 sm:grid-cols-2">
            {WHY_SOURCEWORX.map((item, idx) => (
              <div
                key={item.title}
                className="group border-b border-r border-stone-200 p-8 transition-colors duration-500 hover:bg-stone-100/60 sm:p-10 lg:p-12"
              >
                <span className="sw-num font-display text-3xl font-bold tracking-tight text-stone-300 sm:text-4xl">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-[#0A0F1C] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-stone-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}