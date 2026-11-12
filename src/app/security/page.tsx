import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, FileCheck2, Eye } from "lucide-react";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "Security and Responsible AI | SourceWorx",
  description:
    "Least access, in-path policy enforcement and tamper-evident evidence by default. Architected for SOC 2, ISO 27001, HIPAA and India DPDP.",
  keywords: ["secure enterprise AI"],
};

const TRUST_PRINCIPLES = [
  {
    icon: Lock,
    title: "Least access.",
    body: "Agents and users see only the data their role and task require.",
  },
  {
    icon: ShieldCheck,
    title: "In-path enforcement.",
    body: "Policies are checked as each request runs, so they can't be bypassed.",
  },
  {
    icon: FileCheck2,
    title: "Evidence by default.",
    body: "Tamper-evident lineage of what ran, on what data, and why.",
  },
  {
    icon: Eye,
    title: "Your data stays yours.",
    body: "No customer data is used to train shared models.",
  },
];

const COMPLIANCE_POSTURE = [
  {
    framework: "SOC 2",
    status: "Architected for the SOC 2 trust services criteria",
  },
  {
    framework: "ISO 27001",
    status: "Architected for ISO 27001",
  },
  {
    framework: "HIPAA",
    status: "Architected for HIPAA; BAA available for US healthcare deployments",
  },
  {
    framework: "EU AI Act, NIST AI RMF",
    status: "Framework-mapped evidence packs from Singularity",
  },
  {
    framework: "India DPDP Act",
    status: "Data processing agreements and India-region hosting",
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
  .sw-row:hover { background-color: rgba(124, 92, 252, 0.03); }

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
        dark ? "text-[#B6ACFF]" : "text-trust-deep"
      }`}
    >
      <span className="mr-2">{index}</span>
      <span className={dark ? "text-white/25" : "text-slate-300"}>/</span>
      <span className="ml-2">{label}</span>
    </span>
  );
}

export default function SecurityPage() {
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
          className="sw-drift pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#7C5CFC]/[0.10] blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="sw-drift pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-teal/[0.06] blur-[120px]"
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
            <span className="text-white/80">Security</span>
          </nav>

          <div className="mt-14 max-w-4xl">
            <div
              className="sw-hero-rise flex flex-wrap items-center gap-3"
              style={{ animationDelay: "80ms" }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B6ACFF]/30 bg-[#B6ACFF]/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#B6ACFF]">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                TrustWorx · Security
              </span>
            </div>

            <h1
              className="sw-hero-rise mt-8 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-[60px]"
              style={{ animationDelay: "160ms" }}
            >
              Governed by design,{" "}
              <span className="bg-gradient-to-r from-teal to-[#B6ACFF] bg-clip-text text-transparent">
                not by afterthought.
              </span>
            </h1>

            <p
              className="sw-hero-rise mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
              style={{ animationDelay: "240ms" }}
            >
              Every AI action in a SourceWorx product runs through a governed path, so
              security evidence is a by-product of normal operation, not a quarterly
              scramble.
            </p>

            <div
              className="sw-hero-rise mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/contact?interest=TrustWorx+%C2%B7+Singularity"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#5ec7b8] hover:shadow-xl hover:shadow-black/20"
              >
                <span>Request our security pack</span>
                <ArrowRight className="sw-arrow h-4 w-4" />
              </Link>
              <Link
                href="/governance"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06]"
              >
                <span>More in TrustWorx</span>
              </Link>
            </div>

            {/* Framework strip */}
            <div
              className="sw-hero-scale mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
              style={{ animationDelay: "440ms" }}
            >
              <div className="flex flex-wrap items-stretch divide-x divide-white/[0.06]">
                {COMPLIANCE_POSTURE.slice(0, 4).map((row, i) => (
                  <div key={row.framework} className="flex-1 basis-1/2 px-4 py-4 sm:basis-1/4 sm:px-5">
                    <div className="font-mono text-[10px] tabular-nums text-white/30">
                      0{i + 1}
                    </div>
                    <div className="mt-1 font-display text-sm font-semibold text-white">
                      {row.framework}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/[0.06] px-5 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                  + India DPDP Act · status shared under NDA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 01 — TRUST PRINCIPLES (paper, hairline 2x2 grid)                  */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="01" label="Trust principles" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Four principles, enforced at runtime.
            </h2>
          </div>

          <div className="sw-reveal mt-16 grid grid-cols-1 border-l border-t border-slate-200 sm:grid-cols-2">
            {TRUST_PRINCIPLES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="sw-cell group border-b border-r border-slate-200 p-8 sm:p-10 lg:p-12"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white">
                      <Icon className="h-5 w-5 text-trust-deep" />
                    </div>
                    <span className="sw-num font-mono text-xs font-semibold tabular-nums text-slate-300">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 02 — COMPLIANCE POSTURE (ink, editorial table)                    */}
      {/* ================================================================ */}
      <section className="relative bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="02" label="Data handling & compliance" dark />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Regional hosting, sovereignty rules{" "}
              <span className="text-white/40">and encryption.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Regional hosting with sovereignty rules that keep regulated workloads
              in-region. Encryption in transit and at rest.
            </p>
          </div>

          {/* Table — hairlines, no boxes */}
          <div className="sw-reveal mt-14 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="w-[36%] pb-4 pr-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Framework
                  </th>
                  <th className="pb-4 pl-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Posture
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPLIANCE_POSTURE.map((row, idx) => (
                  <tr
                    key={row.framework}
                    className="group border-b border-white/[0.06] last:border-b-0"
                  >
                    <td className="py-6 pr-6 align-top">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[11px] tabular-nums text-white/25">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-base font-semibold text-white">
                          {row.framework}
                        </span>
                      </div>
                    </td>
                    <td className="relative py-6 pl-6 align-top text-[15px] leading-relaxed text-white/65">
                      <span
                        className="absolute inset-y-0 left-0 w-px bg-teal/30"
                        aria-hidden="true"
                      />
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="sw-reveal mt-8 max-w-3xl text-[11px] leading-relaxed text-white/35">
            Current certification status is shared under NDA during evaluation.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 03 — RESPONSIBLE AI & REVIEW TEAM (paper, split)                  */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="03" label="Responsible AI" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Built for the people who audit it.
            </h2>
          </div>

          <div className="sw-reveal mt-16 grid grid-cols-1 border-y border-slate-200 md:grid-cols-2 md:divide-x md:divide-slate-200">
            <div className="py-10 md:pr-12 sm:py-14 lg:py-16">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-trust-deep">
                Responsible AI
              </span>
              <p className="mt-6 text-lg leading-relaxed text-ink sm:text-xl lg:text-2xl">
                Human approval for consequential actions, evaluation and regression
                testing before changes ship, and a clear record of which model made
                which decision.
              </p>
            </div>
            <div className="border-t border-slate-200 py-10 md:border-t-0 md:pl-12 sm:py-14 lg:py-16">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
                For your review team
              </span>
              <p className="mt-6 text-lg leading-relaxed text-ink sm:text-xl lg:text-2xl">
                Security overview, data processing agreement template, sub-processor
                list, and a contact for security questionnaires.
              </p>
            </div>
          </div>

          <div className="sw-reveal mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact?interest=TrustWorx+%C2%B7+Singularity"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-ink-soft"
            >
              <span>Request our security pack</span>
              <ArrowRight className="sw-arrow h-4 w-4" />
            </Link>
            <span className="text-sm text-slate-500">
              or&nbsp;
              <Link
                href="/governance"
                className="font-medium text-trust-deep underline-offset-4 hover:underline"
              >
                explore the full TrustWorx platform
              </Link>
            </span>
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}