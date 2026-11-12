import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ZTDLogo } from "@/components/BrandMarks";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "ZTD Zero Touch Deployment | AI Platform Migration",
  description:
    "A vendor-neutral, AI-accelerated framework SIs run to deploy and migrate CRM and workflow platforms. Discover to go-live, expert-approved.",
  keywords: [
    "AI platform migration",
    "CRM migration framework",
    "SI delivery accelerator",
    "AI implementation for systems integrators",
  ],
};

const PROBLEMS = [
  {
    title: "Discovery on repeat.",
    detail:
      "Requirements and source-system discovery are manual, and redone at every phase.",
  },
  {
    title: "Scarce specialists.",
    detail:
      "Certified skills are hard to hire on both the source and target platforms.",
  },
  {
    title: "Fixed price, manual delivery.",
    detail:
      "Customers want fixed-scope programmes; manual delivery makes the margins fragile.",
  },
];

const COMPARISON_ROWS = [
  {
    dimension: "Direction",
    vendor: "Into the vendor's own platform",
    ztd: "Any source to any target your practice supports",
  },
  {
    dimension: "Assessment",
    vendor: "Built to make the switch look easy",
    ztd: "Neutral view of what to move, redesign or retire",
  },
  {
    dimension: "Who runs it",
    vendor: "Vendor-hosted experience",
    ztd: "Your team, inside your methodology",
  },
  {
    dimension: "Covers",
    vendor: "Migration only",
    ztd: "Greenfield deployments, re-implementations and migrations",
  },
];

const LIFECYCLE_STAGES = [
  {
    stage: "1",
    name: "Discover",
    detail:
      "Read the source platform's data model, processes, customisations and integrations.",
  },
  {
    stage: "2",
    name: "Map",
    detail:
      "Map objects, fields and logic to the target; flag what to simplify or retire.",
  },
  {
    stage: "3",
    name: "Specify",
    detail: "AI-run workshops produce business and functional requirements.",
  },
  {
    stage: "4",
    name: "Plan",
    detail:
      "Requirements become user stories, sprint plans and resource allocations.",
  },
  {
    stage: "5",
    name: "Build and move",
    detail:
      "Generate configuration, workflows and code to best practice, and migrate data.",
  },
  {
    stage: "6",
    name: "Test and go live",
    detail:
      "Generated test cases, data reconciliation and defect prediction before cutover.",
  },
];

const PRACTICE_PILLARS = [
  {
    title: "Multi-model AI engine.",
    detail:
      "Generative AI, agentic AI and retrieval over your platform knowledge, working together.",
  },
  {
    title: "Expert oversight built in.",
    detail:
      "Every AI output routes to your certified consultants before it moves on.",
  },
  {
    title: "Governed by Singularity.",
    detail:
      "Every AI step runs on a governed path with an audit trail your customer can inspect.",
  },
  {
    title: "Licensed per practice.",
    detail:
      "Annual partner licence or per-engagement pricing, so you can sell programmes as fixed-scope offers.",
  },
];

const ZTD_STATS = [
  { figure: "~50%", label: "faster delivery" },
  { figure: "~30%", label: "lower implementation cost" },
  { figure: "~40%", label: "less dependence on scarce specialists" },
  { figure: "2 weeks", label: "to a proof of concept on one module" },
];

const GET_STARTED_STEPS = [
  {
    num: "01",
    name: "Briefing",
    detail: "See the framework on a sample migration or deployment.",
  },
  {
    num: "02",
    name: "Proof of concept",
    detail: "Two weeks on one module, with your team.",
  },
  {
    num: "03",
    name: "Partner licence",
    detail: "Roll ZTD into your practice's standard delivery.",
  },
];

/* ------------------------------------------------------------------ */
/* Motion + micro-interaction layer                                   */
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

  .sw-cell { transition: background-color 450ms ease; }
  .sw-cell:hover { background-color: rgba(13, 148, 136, 0.03); }

  .sw-cell-dark { transition: background-color 450ms ease; }
  .sw-cell-dark:hover { background-color: rgba(255, 255, 255, 0.03); }

  .sw-num { transition: color 450ms ease; }
  .group:hover .sw-num { color: #0D9488; }
  .group:hover .sw-num--dark { color: #6FD3C4; }

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

/* ------------------------------------------------------------------ */
/* Chapter marker helper                                              */
/* ------------------------------------------------------------------ */
function ChapterMark({
  index,
  label,
  dark = false,
}: {
  index: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
        dark ? "text-teal" : "text-flow-deep"
      }`}
    >
      <span className="mr-2">{index}</span>
      <span className={dark ? "text-white/25" : "text-slate-300"}>/</span>
      <span className="ml-2">{label}</span>
    </span>
  );
}

export default function ZTDPage() {
  return (
    <div className="bg-[#FAFAF9]">
      <style dangerouslySetInnerHTML={{ __html: ANIMATION_CSS }} />

      {/* ================================================================ */}
      {/* 00 — HERO (ink)                                                   */}
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
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="sw-drift pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-teal/[0.10] blur-[120px]"
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
            <Link href="/productivity" className="transition-colors hover:text-white">
              FlowWorx
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/80">ZTD</span>
          </nav>

          <div className="mt-14 max-w-4xl">
            <div
              className="sw-hero-rise flex flex-wrap items-center gap-3"
              style={{ animationDelay: "80ms" }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                FlowWorx · AI for Productivity
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                <ZTDLogo variant="dark" />
              </span>
            </div>

            <h1
              className="sw-hero-rise mt-8 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-[60px]"
              style={{ animationDelay: "160ms" }}
            >
              Deploy and migrate enterprise platforms{" "}
              <span className="bg-gradient-to-r from-teal to-[#9DB9F5] bg-clip-text text-transparent">
                without starting from scratch.
              </span>
            </h1>

            <p
              className="sw-hero-rise mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
              style={{ animationDelay: "240ms" }}
            >
              ZTD is an AI-accelerated framework your delivery teams use to deploy new CRM
              and workflow platforms, and to migrate customers between them. It reads the
              source, carries that context through design, build and test, and keeps your
              experts approving every stage.
            </p>

            <div
              className="sw-hero-rise mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/contact?interest=FlowWorx+%C2%B7+ZTD+for+my+SI+practice"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#5ec7b8] hover:shadow-xl hover:shadow-black/20"
              >
                <span>Talk to us about a partner licence</span>
                <ArrowRight className="sw-arrow h-4 w-4" />
              </Link>
              <a
                href="#framework"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06]"
              >
                <span>See the framework</span>
              </a>
            </div>

            {/* Stats strip */}
            <div
              className="sw-hero-scale mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-4"
              style={{ animationDelay: "440ms" }}
            >
              {ZTD_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`px-5 py-6 sm:px-6 sm:py-7 ${
                    i < ZTD_STATS.length - 1 ? "border-r border-white/[0.06]" : ""
                  } ${i < 2 ? "border-b border-white/[0.06] sm:border-b-0" : ""}`}
                >
                  <p className="font-display text-2xl font-bold tracking-tight text-teal sm:text-3xl">
                    {stat.figure}
                  </p>
                  <p className="mt-1.5 text-[11px] font-medium uppercase leading-snug tracking-[0.08em] text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="sw-hero-fade mt-4 text-[11px] text-white/35"
              style={{ animationDelay: "700ms" }}
            >
              Directional targets based on the framework&apos;s design and pilot experience,
              not guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 01 — PROBLEM (paper, numbered editorial rows)                     */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="01" label="The problem" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Platform programmes are slow, costly{" "}
              <span className="text-slate-400">and talent-hungry.</span>
            </h2>
          </div>

          <div className="sw-reveal mt-16">
            {PROBLEMS.map((p, idx) => (
              <div key={p.title} className="sw-row group border-t border-slate-200 last:border-b">
                <div className="grid grid-cols-[auto_1fr] gap-6 py-10 sm:gap-12 sm:py-14">
                  <span className="sw-num pt-1 font-mono text-sm font-medium tabular-nums text-slate-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl lg:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 02 — WHY NEUTRAL (ink, comparison table)                          */}
      {/* ================================================================ */}
      <section className="relative bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="02" label="Why neutral matters" dark />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built for the SI, not for the platform vendor.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Platform vendors now ship migration tools of their own, each designed to bring
              customers onto its own platform. Your customers need an honest view of what to
              move, simplify or retire, and you need one delivery method across every platform
              you implement.
            </p>
          </div>

          {/* Comparison table — editorial on dark */}
          <div className="sw-reveal mt-14 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="w-[28%] pb-4 pr-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Dimension
                  </th>
                  <th className="pb-4 pr-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Vendor migration tools
                  </th>
                  <th className="pb-4 pl-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-teal">
                    ZTD
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr
                    key={row.dimension}
                    className="group border-b border-white/[0.06] last:border-b-0"
                  >
                    <td className="py-6 pr-6 align-top">
                      <span className="font-display text-sm font-semibold text-white">
                        {row.dimension}
                      </span>
                    </td>
                    <td className="py-6 pr-6 align-top text-sm leading-relaxed text-white/40">
                      {row.vendor}
                    </td>
                    <td className="relative py-6 pl-6 align-top text-sm leading-relaxed text-white">
                      <span
                        className="absolute inset-y-0 left-0 w-px bg-teal/40"
                        aria-hidden="true"
                      />
                      {row.ztd}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 03 — FRAMEWORK (paper, 6 numbered cells)                          */}
      {/* ================================================================ */}
      <section id="framework" className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="03" label="One lifecycle, source to go-live" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Six connected stages with expert sign-off.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Each stage carries context into the next, so discovery is never redone and
              nothing ships without expert sign-off.
            </p>
          </div>

          <div className="sw-reveal mt-16 grid grid-cols-1 border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {LIFECYCLE_STAGES.map((item) => (
              <div
                key={item.stage}
                className="sw-cell group relative border-b border-r border-slate-200 p-8 sm:p-10 lg:p-12"
              >
                <div className="flex items-start justify-between">
                  <span className="sw-num font-display text-5xl font-bold tabular-nums leading-none tracking-tight text-slate-200">
                    0{item.stage}
                  </span>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-flow-deep">
                    Stage
                  </span>
                </div>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {item.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 04 — PRACTICE (ink, pillars + restated stats)                     */}
      {/* ================================================================ */}
      <section className="relative bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="04" label="Inside your practice" dark />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              One engine. Your experts. Full governance.
            </h2>
          </div>

          <div className="sw-reveal mt-16 grid grid-cols-1 border-t border-white/[0.08] sm:grid-cols-2">
            {PRACTICE_PILLARS.map((item, idx) => (
              <div
                key={item.title}
                className={`sw-row-dark group border-b border-white/[0.08] py-10 sm:py-12 ${
                  idx % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                } ${idx >= 2 ? "" : "sm:border-r sm:border-r-white/[0.08]"}`}
              >
                <span className="sw-num sw-num--dark font-mono text-xs font-semibold tabular-nums text-white/30">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-white/60">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 05 — GET STARTED (paper, 3 numbered steps + CTA)                  */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="05" label="Get started" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Three steps to your first ZTD programme.
            </h2>
          </div>

          <div className="sw-reveal mt-16 grid grid-cols-1 border-t border-slate-200 md:grid-cols-3">
            {GET_STARTED_STEPS.map((item, idx) => (
              <div
                key={item.num}
                className={`group border-b border-slate-200 py-10 md:py-12 ${
                  idx < GET_STARTED_STEPS.length - 1
                    ? "md:border-r md:border-r-slate-200 md:pr-10"
                    : ""
                } ${idx > 0 ? "md:pl-10" : ""}`}
              >
                <span className="sw-num font-display text-4xl font-bold tabular-nums tracking-tight text-slate-200 sm:text-5xl">
                  {item.num}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {item.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="sw-reveal mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact?interest=FlowWorx+%C2%B7+ZTD+for+my+SI+practice"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-ink-soft"
            >
              <span>Talk to us about a partner licence</span>
              <ArrowRight className="sw-arrow h-4 w-4" />
            </Link>
            <span className="text-sm text-slate-500">
              or&nbsp;
              <a href="#framework" className="font-medium text-flow-deep underline-offset-4 hover:underline">
                revisit the framework
              </a>
            </span>
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}