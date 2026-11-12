import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Layers, TrendingUp } from "lucide-react";

/**
 * Architectural system schematic for the Home Hero.
 * Shows how GrowthWorx, FlowWorx, and TrustWorx connect over one governed path.
 */
export function HeroSchematic() {
  return (
    <div
      className="rounded-xl border border-white/15 bg-[#0F1B38] p-5 text-white sm:p-6"
      role="img"
      aria-label="SourceWorx — the 360° AI company for growth, productivity and governance"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-300">
            SourceWorx 360° Architecture
          </span>
        </div>
        <span className="font-mono text-[11px] font-bold text-teal">
          90-DAY DELIVERY
        </span>
      </div>

      {/* Three pillars stacked cleanly with structural links */}
      <div className="mt-4 space-y-3">
        <Link
          href="/growth"
          className="group block rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-teal/60 hover:bg-white/[0.06]"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-teal/15 text-teal">
                <TrendingUp className="h-4 w-4" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-teal">
                    01 · GrowthWorx
                  </span>
                  <span className="text-xs text-slate-400">AI for Growth</span>
                </div>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  6 industry applications in live operations
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal" />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {[
              "Specialty care",
              "Services finance",
              "Export CRM",
              "Fix My Fit",
              "Impact analytics",
              "Patient report studio",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded border border-white/10 bg-[#0A142E] px-2 py-0.5 text-[11px] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>

        <Link
          href="/productivity"
          className="group block rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-flow/60 hover:bg-white/[0.06]"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-flow/15 text-[#9DB9F5]">
                <Layers className="h-4 w-4" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#9DB9F5]">
                    02 · FlowWorx
                  </span>
                  <span className="text-xs text-slate-400">
                    AI for Productivity
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  RoomOS AI &amp; ZTD Zero Touch Deployment
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#9DB9F5]" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div className="rounded border border-white/10 bg-[#0A142E] px-2.5 py-1.5 text-slate-300">
              Meetings → owned tasks
            </div>
            <div className="rounded border border-white/10 bg-[#0A142E] px-2.5 py-1.5 text-slate-300">
              SI migration &amp; deployment
            </div>
          </div>
        </Link>

        <Link
          href="/governance"
          className="group block rounded-lg border border-trust/40 bg-trust/[0.08] p-4 transition-colors hover:border-trust hover:bg-trust/[0.14]"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-trust/20 text-[#C4B8FF]">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#C4B8FF]">
                    03 · TrustWorx
                  </span>
                  <span className="text-xs text-slate-300">AI Governance</span>
                </div>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  Singularity · One governed path underneath
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-slate-200">
            {["Map", "Sense", "Direct", "Prove", "Evolve"].map((step, i) => (
              <React.Fragment key={step}>
                <span className="rounded bg-[#0A142E] px-2 py-0.5">
                  {step}
                </span>
                {i < 4 && (
                  <span className="text-slate-500" aria-hidden="true">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Link>
      </div>

      {/* Bottom foundation bar */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3.5 text-[11px] text-slate-400">
        <span>Any model · Any cloud · Any agent</span>
        <span className="font-mono text-slate-300">
          EU AI Act · NIST AI RMF · SOC 2 · ISO 27001
        </span>
      </div>
    </div>
  );
}

