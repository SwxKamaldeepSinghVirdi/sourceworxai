import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SingularityMark } from "@/components/BrandMarks";
import { GovernedPathDiagram } from "@/components/GovernedPathDiagram";
import { NinetyDayPlan } from "@/components/NinetyDayPlan";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "Singularity | The Operating Platform for Enterprise AI",
  description:
    "One AI estate, one governed path, one continuous loop. Map, sense, direct, prove and evolve every model, agent and tool. Any model, any cloud.",
  keywords: [
    "enterprise AI operating platform",
    "AI governance platform",
    "model routing",
    "AI audit trail",
    "agent governance",
  ],
};

const MARKET_QUESTIONS = [
  {
    q: "What is actually running?",
    qDetail: "Nobody has the map.",
    a: "Most enterprises can't name every agent, model and tool live in their business, or who owns each one.",
  },
  {
    q: "What is it costing?",
    qDetail: "Spend outruns oversight.",
    a: "Token cost compounds across teams with no attribution, routing or budgets. Finance can't see it, let alone contain it.",
  },
  {
    q: "Can we prove it's compliant?",
    qDetail: "Risk grows unmeasured.",
    a: "The EU AI Act, NIST AI RMF and sector rules demand inventory, evidence and safeguards, with real penalties.",
  },
];

const WHY_NOW = [
  {
    title: "Shadow AI and a new attack surface.",
    detail:
      "Unsanctioned copilots touch sensitive data. Prompt injection and leakage are board-level risks.",
  },
  {
    title: "AI cost is scaling non-linearly.",
    detail:
      "Token spend compounds across teams with no attribution, routing or budgets.",
  },
  {
    title: "Regulation has arrived.",
    detail:
      "The EU AI Act, NIST AI RMF and sector rules now demand inventory, evidence and safeguards.",
  },
  {
    title: "Boards want accountability.",
    detail:
      "Leaders must prove AI is safe, compliant and worth the spend, with numbers, not assurances.",
  },
];

const LOOP_ACTIONS = [
  {
    action: "Map",
    covers: "the AI estate",
    what: "Scan, classify, register and flag every agent, model, tool and workload, including shadow AI and EU AI Act risk tier.",
  },
  {
    action: "Sense",
    covers: "what is happening",
    what: "Real-time telemetry, correlated across systems, users and workflows to detect anomalies, drift and emerging risk.",
  },
  {
    action: "Direct",
    covers: "what should happen",
    what: "Route, enforce policy and supervise the plan in-path, on a unified context layer of identity, data, activity and policy.",
  },
  {
    action: "Prove",
    covers: "what happened",
    what: "Measure quality, cost and outcomes with full lineage, so audit is a by-product of every run.",
  },
  {
    action: "Evolve",
    covers: "what happens next",
    what: "Guardrail events and results feed back into policy and routing, so the estate gets safer and cheaper.",
  },
];

const OUTCOMES = [
  {
    title: "Visibility.",
    detail:
      "One live registry of every agent, model, tool and workload, with owner, data touched and lifecycle state.",
  },
  {
    title: "Governance.",
    detail:
      "Policy enforced in the execution path, including sovereignty rules that keep regulated workloads in-region.",
  },
  {
    title: "Economics.",
    detail:
      "Cost attributed by team and use case, with routing to the cheapest model that still clears the quality and risk bar.",
  },
  {
    title: "Trust.",
    detail:
      "Tamper-evident lineage and framework-mapped evidence packs for auditors, on demand.",
  },
  {
    title: "Progress.",
    detail:
      "Evaluation and regression guards, so changes are tested before they reach production.",
  },
  {
    title: "Delivered with partners.",
    detail:
      "Lands through systems integrators and telecom partners, inside the estates teams already run.",
  },
];

const IMPACT_STATS = [
  { figure: "2–5×", label: "faster time to value" },
  { figure: "20–40%", label: "lower AI operating cost" },
  { figure: "50%+", label: "reduction in AI risk exposure" },
  { figure: "3×", label: "higher productivity with trusted, AI-native workflows" },
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
  .sw-row:hover { background-color: rgba(124, 92, 252, 0.03); }

  .sw-row-dark { transition: background-color 450ms ease; }
  .sw-row-dark:hover { background-color: rgba(255, 255, 255, 0.025); }

  .sw-cell { transition: background-color 450ms ease; }
  .sw-cell:hover { background-color: rgba(124, 92, 252, 0.03); }

  .sw-num { transition: color 450ms ease; }
  .group:hover .sw-num { color: #7C5CFC; }
  .group:hover .sw-num--dark { color: #22D3EE; }

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
        dark ? "text-[#22D3EE]" : "text-trust-deep"
      }`}
    >
      <span className="mr-2">{index}</span>
      <span className={dark ? "text-white/25" : "text-slate-300"}>/</span>
      <span className="ml-2">{label}</span>
    </span>
  );
}

export default function SingularityPage() {
  return (
    <div className="bg-[#FAFAF9]">
      <style dangerouslySetInnerHTML={{ __html: ANIMATION_CSS }} />

      {/* ================================================================ */}
      {/* 00 — HERO (ink)                                                   */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-singularity text-white">
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
        {/* Ambient glow — cyan + purple */}
        <div
          aria-hidden="true"
          className="sw-drift pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#7C5CFC]/[0.12] blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="sw-drift pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#22D3EE]/[0.08] blur-[120px]"
          style={{ animationDelay: "-8s" }}
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
            <Link href="/governance" className="transition-colors hover:text-white">
              TrustWorx
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/80">Singularity</span>
          </nav>

          <div className="mt-14 max-w-4xl">
            <div
              className="sw-hero-rise flex flex-wrap items-center gap-3"
              style={{ animationDelay: "80ms" }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7C5CFC]/30 bg-[#7C5CFC]/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#B6ACFF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE]" aria-hidden="true" />
                TrustWorx · AI Governance
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                <SingularityMark variant="dark" />
              </span>
            </div>

            <h1
              className="sw-hero-rise mt-8 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-[60px]"
              style={{ animationDelay: "160ms" }}
            >
              One AI estate. One governed path.{" "}
              <span className="bg-gradient-to-r from-[#22D3EE] to-[#7C5CFC] bg-clip-text text-transparent">
                One continuous loop.
              </span>
            </h1>

            <p
              className="sw-hero-rise mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
              style={{ animationDelay: "240ms" }}
            >
              Singularity is the operating platform for enterprise AI. It brings every agent,
              model and tool into one view, runs every request through the same policy-enforced
              path, and turns what happens into evidence and improvement. Any model, any cloud,
              any agent.
            </p>

            <div
              className="sw-hero-rise mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/contact?interest=TrustWorx+%C2%B7+Singularity"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#7C5CFC] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#7C5CFC]/20"
              >
                <span>Request a briefing</span>
                <ArrowRight className="sw-arrow h-4 w-4" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06]"
              >
                <span>See how it works</span>
              </a>
            </div>

            {/* Signature loop strip */}
            <div
              className="sw-hero-scale mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
              style={{ animationDelay: "440ms" }}
            >
              <div className="flex flex-wrap items-stretch divide-x divide-white/[0.06]">
                {LOOP_ACTIONS.map((action, i) => (
                  <div key={action.action} className="flex-1 basis-1/2 px-4 py-4 sm:basis-1/5 sm:px-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] tabular-nums text-white/30">
                        0{i + 1}
                      </span>
                      <span className="font-display text-sm font-semibold text-white">
                        {action.action}
                      </span>
                    </div>
                    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                      {action.covers}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 01 — MARKET (paper, numbered editorial rows)                      */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="01" label="The market" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Enterprise AI went from pilots to production{" "}
              <span className="text-slate-400">all at once.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Agents moved into every function in under two years, but the safeguards, visibility
              and economics never caught up. The gap shows up as shadow AI, unmanaged cost and
              compliance exposure.
            </p>
          </div>

          <div className="sw-reveal mt-16">
            {MARKET_QUESTIONS.map((item, idx) => (
              <div key={item.q} className="sw-row group border-t border-slate-200 last:border-b">
                <div className="grid grid-cols-[auto_1fr] gap-6 py-10 sm:gap-12 sm:py-14">
                  <span className="sw-num pt-1 font-mono text-sm font-medium tabular-nums text-slate-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl lg:text-3xl">
                      {item.q}{" "}
                      <span className="text-slate-400">— {item.qDetail}</span>
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 02 — WHY NOW (ink, hairline 2x2 grid + callout)                   */}
      {/* ================================================================ */}
      <section className="relative bg-singularity py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="02" label="Why now" dark />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Four forces turning AI governance{" "}
              <span className="text-white/40">from optional to urgent.</span>
            </h2>
          </div>

          <div className="sw-reveal mt-16 grid grid-cols-1 border-t border-white/[0.08] sm:grid-cols-2">
            {WHY_NOW.map((item, idx) => (
              <div
                key={item.title}
                className={`sw-row-dark group border-b border-white/[0.08] py-10 sm:py-12 ${
                  idx % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                } ${idx % 2 === 0 ? "sm:border-r sm:border-r-white/[0.08]" : ""}`}
              >
                <span className="sw-num sw-num--dark font-mono text-xs font-semibold tabular-nums text-white/30">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/60">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Callout with brand gradient hairline */}
          <div className="sw-reveal relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/60 to-transparent"
            />
            <p className="text-[15px] font-medium leading-relaxed text-white/80 sm:text-base">
              You can&apos;t govern what you&apos;ve never mapped, sensed, directed or proven.
              Governance-first tools skip the early steps, so they stay dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 03 — HOW IT WORKS (ink, 5 loop actions + diagram)                 */}
      {/* ================================================================ */}
      <section
        id="how-it-works"
        className="relative bg-singularity pb-20 text-white sm:pb-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl border-t border-white/[0.08] pt-20 sm:pt-28">
            <ChapterMark index="03" label="How it works" dark />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Map · Sense · Direct · Prove · Evolve.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Five actions, run in order on one governed path. A loop that never stops.
            </p>
          </div>

          {/* 5-column loop with hairline separators — not cards */}
          <div className="sw-reveal mt-14">
            <div className="grid grid-cols-1 border-t border-white/[0.08] sm:grid-cols-5">
              {LOOP_ACTIONS.map((item, idx) => (
                <div
                  key={item.action}
                  className={`sw-row-dark group relative border-b border-white/[0.08] py-8 sm:py-10 sm:pb-10 ${
                    idx < LOOP_ACTIONS.length - 1
                      ? "sm:border-r sm:border-r-white/[0.08]"
                      : ""
                  } ${idx > 0 ? "sm:pl-6" : ""} ${idx < LOOP_ACTIONS.length - 1 ? "sm:pr-6" : ""}`}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="sw-num sw-num--dark font-mono text-[11px] tabular-nums text-white/30">
                      0{idx + 1}
                    </span>
                    <span className="font-display text-lg font-semibold tracking-tight text-white">
                      {item.action}
                    </span>
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#22D3EE]">
                    {item.covers}
                  </div>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-white/55">
                    {item.what}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="sw-reveal mt-14">
            <GovernedPathDiagram variant="dark" />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 04 — OUTCOMES (paper, hairline 3x2 grid)                          */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="04" label="Outcomes" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Five outcomes. One platform.
            </h2>
          </div>

          <div className="sw-reveal mt-16 grid grid-cols-1 border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {OUTCOMES.map((item, idx) => (
              <div
                key={item.title}
                className="sw-cell group border-b border-r border-slate-200 p-8 sm:p-10 lg:p-12"
              >
                <span className="sw-num font-mono text-xs font-semibold tabular-nums text-slate-300">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 05 — IMPACT (ink, full-width stats band)                          */}
      {/* ================================================================ */}
      <section className="relative bg-singularity py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal mb-12 max-w-3xl">
            <ChapterMark index="05" label="Anticipated impact" dark />
            <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Directional targets, not guarantees.
            </h2>
          </div>

          <div className="sw-reveal grid grid-cols-2 border-t border-white/[0.08] sm:grid-cols-4">
            {IMPACT_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-8 sm:py-10 ${
                  i < IMPACT_STATS.length - 1
                    ? "border-r border-white/[0.08] pr-6"
                    : ""
                } ${i > 0 ? "pl-6" : ""} ${
                  i < 2 ? "border-b border-white/[0.08] sm:border-b-0" : ""
                }`}
              >
                <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {stat.figure}
                </p>
                <p className="mt-3 text-[12px] font-medium uppercase leading-snug tracking-[0.08em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="sw-reveal mt-8 max-w-3xl text-[11px] leading-relaxed text-white/35">
            Directional targets from product design and early deployments, not guarantees.
            Actual results depend on scope and are shared under NDA.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 06 — DEPLOYMENT PLAN (paper)                                      */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="06" label="Deployment plan" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              From first conversation to production in 90 days.
            </h2>
          </div>

          <div className="sw-reveal mt-14">
            <NinetyDayPlan />
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}