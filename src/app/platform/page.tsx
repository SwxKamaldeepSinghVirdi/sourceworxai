import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FoundationDiagram } from "@/components/FoundationDiagram";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "One Governed AI Foundation | SourceWorx Platform",
  description:
    "Governed AI path, any model and cloud, multi-tenant white-label core and integrations. Custom AI builds across growth, productivity and governance.",
  keywords: [
    "custom AI development company",
    "AI application development India",
    "AI agent development",
    "white-label AI platform",
  ],
};

const FOUNDATION_LAYERS = [
  {
    layer: "Governed AI path",
    gives:
      "Identity, policy, routing, verification and audit, powered by Singularity",
  },
  {
    layer: "Any model, any cloud",
    gives:
      "The right model for cost, quality and residency, without rewrites",
  },
  {
    layer: "Application core",
    gives: "Multi-tenant, white-label, role-based, multi-organisation",
  },
  {
    layer: "Integrations",
    gives: "SaaS apps, data platforms, messaging, telephony, billing",
  },
];

const BUILD_OFFERS = [
  {
    pillar: "GrowthWorx · AI for Growth",
    short: "GrowthWorx",
    accent: "#48B8A8",
    textAccent: "#157A68",
    offerTitle: "Industry applications.",
    offerBody:
      "AI applications for a specific industry, built to win revenue and grow without adding headcount.",
    includes: [
      "Healthcare, IT services, trade, retail, education, dental",
      "Branded ordering, matchmaking and follow-up",
      "Your own vertical, live in 90 days",
    ],
  },
  {
    pillar: "FlowWorx · AI for Productivity",
    short: "FlowWorx",
    accent: "#5B8DEF",
    textAccent: "#2F5FC4",
    offerTitle: "Delivery platforms.",
    offerBody:
      "Platforms that take the slow, manual parts out of delivery, with experts approving every stage.",
    includes: [
      "RoomOS AI",
      "Platform deployment and migration with ZTD",
      "Agents inside existing workflows",
    ],
  },
  {
    pillar: "TrustWorx · AI Governance",
    short: "TrustWorx",
    accent: "#8B7BFF",
    textAccent: "#5B46C9",
    offerTitle: "Governance builds.",
    offerBody:
      "The control layer for the AI you already run, delivered on Singularity.",
    includes: [
      "AI estate mapping and risk tiering",
      "Policy, routing and guardrails in-path",
      "Framework-mapped evidence for audit",
    ],
  },
];

const WHY_BUILD = [
  {
    title: "We start from working software.",
    body: "Many engagements begin from an industry solution, so you configure instead of commissioning.",
  },
  {
    title: "Fixed-scope, outcome-led.",
    body: "The 90-day plan with agreed success metrics, not open-ended time and materials.",
  },
  {
    title: "Governed by default.",
    body: "Every AI step is logged, routed and auditable, so reviews move faster.",
  },
  {
    title: "Yours to own.",
    body: "Clear IP terms up front. Run it yourselves, or have us operate it.",
  },
];

const PARTNERS = [
  {
    code: "SI",
    name: "Systems integrators.",
    detail:
      "License ZTD for your practice, deliver Singularity deployments, and resell our industry solutions.",
  },
  {
    code: "TELCO",
    name: "Telecom and cloud providers.",
    detail:
      "Offer governed AI to enterprise and mid-market customers with the metered billing you already run.",
  },
];

/* ------------------------------------------------------------------ */
/* Motion + technical-drawing micro-interaction layer                 */
/* ------------------------------------------------------------------ */
const ANIMATION_CSS = `
  @keyframes sw-blur-in {
    from { opacity: 0; filter: blur(10px); transform: translate3d(0, 14px, 0); }
    to   { opacity: 1; filter: blur(0);   transform: translate3d(0, 0, 0); }
  }
  @keyframes sw-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes sw-trace {
    0%   { transform: scaleX(0); transform-origin: left; }
    60%  { transform: scaleX(1); transform-origin: left; }
    100% { transform: scaleX(1); transform-origin: left; }
  }
  @keyframes sw-pulse-dot {
    0%, 100% { opacity: 0.6; box-shadow: 0 0 0 0 rgba(20, 184, 166, 0); }
    50%      { opacity: 1;   box-shadow: 0 0 0 4px rgba(20, 184, 166, 0.12); }
  }
  @keyframes sw-scan {
    0%   { transform: translate3d(0, -100%, 0); }
    100% { transform: translate3d(0, 100vh, 0); }
  }

  .sw-blur-in { opacity: 0; animation: sw-blur-in 1000ms cubic-bezier(0.22, 1, 0.36, 1) both; }
  .sw-fade-in { opacity: 0; animation: sw-fade-in 1600ms ease both; }
  .sw-pulse   { animation: sw-pulse-dot 2600ms ease-in-out infinite; }

  .sw-scanline {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(20,184,166,0.35), transparent);
    animation: sw-scan 9s linear infinite;
    pointer-events: none;
  }

  /* Registration crosshair in top-right of cards */
  .sw-register { position: relative; }
  .sw-register::after {
    content: "";
    position: absolute;
    top: 10px; right: 10px;
    width: 10px; height: 10px;
    background:
      linear-gradient(to right, var(--reg, rgba(255,255,255,0.25)) 0, var(--reg, rgba(255,255,255,0.25)) 100%) center / 10px 1px no-repeat,
      linear-gradient(to bottom, var(--reg, rgba(255,255,255,0.25)) 0, var(--reg, rgba(255,255,255,0.25)) 100%) center / 1px 10px no-repeat;
    opacity: 0.35;
    transition: opacity 400ms ease;
    pointer-events: none;
  }
  .sw-register:hover::after { opacity: 0.9; }

  /* Pillar card: accent tint on hover + colored top edge */
  .sw-pillar {
    position: relative;
    overflow: hidden;
    transition: border-color 500ms ease, background-color 500ms ease;
    border: 1px solid rgba(255,255,255,0.08);
  }
  .sw-pillar::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 30% 0%, color-mix(in srgb, var(--pillar-accent) 8%, transparent), transparent 65%);
    opacity: 0;
    transition: opacity 500ms ease;
    pointer-events: none;
  }
  .sw-pillar:hover::before { opacity: 1; }
  .sw-pillar:hover { border-color: color-mix(in srgb, var(--pillar-accent) 40%, transparent); }

  .sw-arrow { transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1); }
  a:hover .sw-arrow, a:focus-visible .sw-arrow { transform: translate3d(3px, 0, 0); }

  .sw-row { transition: background-color 450ms ease; }
  .sw-row:hover { background-color: rgba(20, 184, 166, 0.03); }
  .sw-row-dark { transition: background-color 450ms ease; }
  .sw-row-dark:hover { background-color: rgba(255, 255, 255, 0.025); }

  @supports (animation-timeline: view()) {
    .sw-reveal {
      opacity: 0;
      animation: sw-blur-in linear both;
      animation-timeline: view();
      animation-range: entry 5% cover 22%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sw-blur-in, .sw-fade-in, .sw-pulse, .sw-scanline, .sw-reveal {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
      filter: none !important;
    }
    .sw-arrow { transition: none !important; }
  }
`;

/* ------------------------------------------------------------------ */
/* Section index rail — used as the header pattern for every section */
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

export default function PlatformPage() {
  return (
    <div className="bg-[#FAFAF9]">
      <style dangerouslySetInnerHTML={{ __html: ANIMATION_CSS }} />

      {/* ================================================================ */}
      {/* 00 — HERO (dark, dot-grid + scan)                                 */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-ink text-white">
        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse at 30% 0%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 30% 0%, black 30%, transparent 75%)",
          }}
        />
        {/* Ambient scanline */}
        <div aria-hidden="true" className="sw-scanline" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 lg:pb-28">
          {/* Status ribbon */}
          <div className="sw-fade-in flex flex-wrap items-center gap-4 border-b border-white/[0.06] pb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
            <span className="flex items-center gap-2">
              <span className="sw-pulse h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
              <span className="text-white/70">SYS OK</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>SourceWorx · Platform</span>
            <span aria-hidden="true">·</span>
            <span>v2.4 · one foundation</span>
            <span aria-hidden="true" className="ml-auto hidden sm:inline">©</span>
            <span className="hidden text-white/30 sm:inline">EST · SINCE 2023</span>
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
            <span className="text-white/70">Platform</span>
          </nav>

          <div className="mt-14 max-w-4xl">
            <h1
              className="sw-blur-in font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-[68px]"
              style={{ animationDelay: "120ms" }}
            >
              One governed foundation{" "}
              <span className="bg-gradient-to-r from-teal to-[#5B8DEF] bg-clip-text text-transparent">
                under all three pillars.
              </span>
            </h1>

            <p
              className="sw-blur-in mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
              style={{ animationDelay: "260ms" }}
            >
              Growth solutions, productivity solutions and client builds all run on the
              same platform: governed AI in the execution path, model routing across any
              provider, and a multi-tenant, white-label application core. It&apos;s why
              our software ships in weeks and passes security review faster.
            </p>

            <div
              className="sw-blur-in mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "400ms" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#5ec7b8] hover:shadow-xl hover:shadow-black/20"
              >
                <span>Request a briefing</span>
                <ArrowRight className="sw-arrow h-4 w-4" />
              </Link>
              <a
                href="#build"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06]"
              >
                <span>Build with us</span>
              </a>
            </div>

            {/* Three pillars strip */}
            <div
              className="sw-blur-in mt-16 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
              style={{ animationDelay: "540ms" }}
            >
              <div className="flex items-stretch divide-x divide-white/[0.06]">
                {BUILD_OFFERS.map((offer, i) => (
                  <div key={offer.short} className="flex-1 px-4 py-5 sm:px-6">
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: offer.accent }}
                      />
                      <span className="font-mono text-[10px] tabular-nums text-white/30">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="mt-2 font-display text-sm font-semibold text-white sm:text-base">
                      {offer.short}
                    </div>
                    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                      {offer.offerTitle.replace(/\.$/, "")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 01 — FOUNDATION (paper, annotated figure)                         */}
      {/* ================================================================ */}
      <section className="relative bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <SectionIndex num="01" label="Foundation · FIG. 01" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Every application runs through{" "}
              <span className="text-slate-400">the same governed path.</span>
            </h2>
          </div>

          {/* Split: diagram left, layer legend right */}
          <div className="sw-reveal mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Diagram with corner registration marks */}
            <div className="lg:col-span-7">
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-teal-deep/50"
                />
                <span
                  aria-hidden="true"
                  className="absolute -right-2 -top-2 h-4 w-4 border-r border-t border-teal-deep/50"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-teal-deep/50"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-teal-deep/50"
                />
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <FoundationDiagram />
                </div>
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                FIG. 01 — the four-layer foundation
              </p>
            </div>

            {/* Layer legend — numbered editorial rows */}
            <div className="lg:col-span-5">
              <div className="flex items-baseline justify-between border-b border-slate-200 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Layers
                </span>
                <span className="font-mono text-[10px] tabular-nums text-slate-400">
                  04 / 04
                </span>
              </div>
              {FOUNDATION_LAYERS.map((row, idx) => (
                <div
                  key={row.layer}
                  className="sw-row group border-b border-slate-200 py-6 last:border-b-0"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] font-medium tabular-nums text-slate-400">
                      L{String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
                        {row.layer}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                        {row.gives}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 02 — BUILD WITH US (dark, spec-sheet pillars)                     */}
      {/* ================================================================ */}
      <section
        id="build"
        className="relative scroll-mt-20 bg-ink py-20 text-white sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <SectionIndex num="02" label="Build with us · SPEC" dark />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              When nothing off the shelf fits,{" "}
              <span className="text-white/40">we build it.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              You get a working application, not a slide deck — on the same governed
              foundation as our own products.
            </p>
          </div>

          <div className="sw-reveal mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
            {BUILD_OFFERS.map((offer, idx) => (
              <article
                key={offer.pillar}
                className="sw-pillar sw-register rounded-2xl p-6 sm:p-8"
                style={
                  {
                    "--pillar-accent": offer.accent,
                    "--reg": offer.accent,
                  } as React.CSSProperties
                }
              >
                {/* Ghost numeral */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[120px] font-bold leading-none tracking-tighter"
                  style={{
                    color: `color-mix(in srgb, ${offer.accent} 14%, transparent)`,
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: offer.accent }}
                    />
                    <span
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: offer.accent }}
                    >
                      {offer.pillar.split(" · ")[0]}
                    </span>
                  </div>
                  <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
                    {offer.pillar.split(" · ")[1]}
                  </span>

                  <h3 className="mt-8 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {offer.offerTitle}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">
                    {offer.offerBody}
                  </p>

                  <div className="mt-8 border-t border-white/[0.08] pt-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                      Includes
                    </span>
                    <ul className="mt-3 space-y-2.5">
                      {offer.includes.map((inc) => (
                        <li
                          key={inc}
                          className="flex items-start gap-3 text-[13.5px] leading-relaxed text-white/70"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[7px] h-2.5 w-px shrink-0"
                            style={{ backgroundColor: offer.accent }}
                          />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 03 — WHY BUILD (paper, technical table)                           */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <SectionIndex num="03" label="Why clients build with us · CHECK" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Working software,{" "}
              <span className="text-slate-400">not slide decks.</span>
            </h2>
          </div>

          <div className="sw-reveal mt-16">
            <div className="flex items-baseline justify-between border-b border-slate-200 pb-3">
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Ref
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Principle
                </span>
              </div>
              <span className="font-mono text-[10px] tabular-nums text-slate-400">
                04 / 04
              </span>
            </div>

            {WHY_BUILD.map((item, idx) => (
              <div
                key={item.title}
                className="sw-row group grid grid-cols-1 gap-3 border-b border-slate-200 py-8 sm:grid-cols-12 sm:gap-8 sm:py-10"
              >
                <div className="sm:col-span-1">
                  <span className="font-mono text-[11px] font-medium tabular-nums text-slate-400">
                    W{String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    {item.title}
                  </h3>
                </div>
                <div className="sm:col-span-7">
                  <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 04 — PARTNERS (dark, split with center marker)                    */}
      {/* ================================================================ */}
      <section
        id="partners"
        className="relative scroll-mt-20 bg-ink py-20 text-white sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <SectionIndex num="04" label="Partners · CHANNEL" dark />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built to be sold and delivered{" "}
              <span className="text-white/40">by partners.</span>
            </h2>
          </div>

          <div className="sw-reveal relative mt-16 grid grid-cols-1 gap-8 border-t border-white/[0.08] md:grid-cols-2 md:gap-16">
            {/* Center divider with a marker */}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/[0.08] md:block"
            />
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-0 hidden -translate-x-1/2 -translate-y-1/2 md:block"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              </span>
            </span>

            {PARTNERS.map((item) => (
              <div key={item.code} className="sw-row-dark group py-10 sm:py-14">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-teal">
                    {item.code}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-6 bg-white/15 transition-all duration-500 group-hover:w-10 group-hover:bg-teal/60"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {item.name}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/60 sm:text-base">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="sw-reveal mt-16 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact?interest=Partnering"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-xl hover:shadow-black/20"
            >
              <span>Become a partner</span>
              <ArrowRight className="sw-arrow h-4 w-4" />
            </Link>
            <span className="text-sm text-white/40">
              or&nbsp;
              <Link
                href="/contact"
                className="font-medium text-teal underline-offset-4 hover:underline"
              >
                talk to us about a build
              </Link>
            </span>
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}