"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PILLARS, ALL_SOLUTION_SUMMARIES } from "@/data/solutions";
import { StatusChip } from "@/components/StatusChip";

type PillarId = "growth" | "productivity" | "governance";
type Pillar = (typeof PILLARS)["growth"];
type SolutionSummary = (typeof ALL_SOLUTION_SUMMARIES)["growth"][number];

const TABS: { id: PillarId; pillarLabel: string; label: string }[] = [
  { id: "growth", pillarLabel: "Pillar 01", label: "GrowthWorx" },
  { id: "productivity", pillarLabel: "Pillar 02", label: "FlowWorx" },
  { id: "governance", pillarLabel: "Pillar 03", label: "TrustWorx" },
];

/* ── Shared card for a single app / platform ──────────────────── */
function SolutionCard({
  solution,
  accent,
  href,
}: {
  solution: SolutionSummary;
  accent: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/70 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0D9488]/40 hover:shadow-[0_24px_48px_-26px_rgba(13,148,136,0.35)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-1.5">
          <span
            className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: accent }}
            aria-hidden="true"
          />
          <span className="min-w-0 pt-0.5 font-mono text-[9px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-slate-500">
            {solution.sector}
          </span>
        </div>
        <StatusChip status={solution.status} compact />
      </div>

      <h5 className="mt-4 font-display text-[17px] font-bold tracking-tight text-[#0b1b36] transition-colors group-hover:text-[#0B7A6E]">
        {solution.name}
      </h5>

      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600">
        {solution.shortDescription}
      </p>

      <div className="mt-4 border-t border-slate-100 pt-3">
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#0B7A6E]">
          What it moves
        </p>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-700">
          {solution.whatItMoves}
        </p>
      </div>
    </Link>
  );
}

/* ── Panel shell (same header treatment for all 3 pillars) ────── */
function PillarPanel({
  pillar,
  eyebrow,
  headline,
  ctaLabel,
  children,
}: {
  pillar: Pillar;
  eyebrow: string;
  headline: string;
  ctaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_24px_60px_-40px_rgba(11,27,54,0.35)]">
      <div
        className="flex flex-col gap-5 border-b border-slate-100 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8"
        style={{ background: `linear-gradient(140deg, ${pillar.tintHex} 0%, #ffffff 75%)` }}
      >
        <div>
          <p
            className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: pillar.textHex }}
          >
            {eyebrow}
          </p>
          <p className="mt-2 max-w-xl font-display text-xl font-bold tracking-tight text-[#0b1b36] sm:text-[22px]">
            {headline}
          </p>
        </div>
        <Link
          href={pillar.href}
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#0b1b36] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#13294B]"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      {children}
    </div>
  );
}

/* ── Pillar 01 · GrowthWorx ───────────────────────────────────── */
function GrowthPanel() {
  const pillar = PILLARS.growth;
  const apps = ALL_SOLUTION_SUMMARIES.growth;

  return (
    <PillarPanel
      pillar={pillar}
      eyebrow="GrowthWorx · Industry AI Applications"
      headline="Built with real clients, configurable to your workflows."
      ctaLabel="Explore GrowthWorx"
    >
      <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
        {apps.map((app) => (
          <SolutionCard
            key={app.slug}
            solution={app}
            accent={pillar.accentHex}
            href={app.href}
          />
        ))}
      </div>
    </PillarPanel>
  );
}

/* ── Pillar 02 · FlowWorx (RoomOS + ZTD) ──────────────────────── */
function ProductivityPanel() {
  const pillar = PILLARS.productivity;
  const platforms = ALL_SOLUTION_SUMMARIES.productivity;

  return (
    <PillarPanel
      pillar={pillar}
      eyebrow="FlowWorx · Delivery Platforms"
      headline="Same processes, fewer hand-offs, measurably better quality."
      ctaLabel="Explore FlowWorx"
    >
      <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 sm:p-8">
        {platforms.map((p) => (
          <SolutionCard
            key={p.slug}
            solution={p}
            accent={pillar.accentHex}
            href={p.href}
          />
        ))}
      </div>

      <div className="border-t border-slate-100 bg-[#FAFBFC] p-6 sm:p-8">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          What FlowWorx moves
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {pillar.whatItMoves.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-700"
            >
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0"
                style={{ color: pillar.accentHex }}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </PillarPanel>
  );
}

/* ── Pillar 03 · TrustWorx (Singularity) ──────────────────────── */
function GovernancePanel() {
  const pillar = PILLARS.governance;
  const platforms = ALL_SOLUTION_SUMMARIES.governance;

  return (
    <PillarPanel
      pillar={pillar}
      eyebrow="TrustWorx · AI Governance"
      headline="See it, control it, prove it — on one governed path."
      ctaLabel="Explore TrustWorx"
    >
      <div className="grid grid-cols-1 gap-4 p-6 sm:p-8">
        {platforms.map((p) => (
          <SolutionCard
            key={p.slug}
            solution={p}
            accent={pillar.accentHex}
            href={p.href}
          />
        ))}
      </div>

      <div className="border-t border-slate-100 bg-[#FAFBFC] p-6 sm:p-8">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          What TrustWorx moves
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {pillar.whatItMoves.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-700"
            >
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0"
                style={{ color: pillar.accentHex }}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </PillarPanel>
  );
}

/* ── Tabbed walkthrough: three pillars ────────────────────────── */
export function ProductWalkthrough() {
  const [activeTab, setActiveTab] = useState<PillarId>("growth");

  return (
    <div>
      <div
        role="tablist"
        aria-label="Product walkthrough by pillar"
        className="grid grid-cols-1 gap-2 rounded-2xl border border-slate-200/80 bg-white/70 p-1.5 backdrop-blur sm:grid-cols-3"
      >
        {TABS.map((tab) => {
          const pillar = PILLARS[tab.id];
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-start gap-1 rounded-xl px-4 py-3 text-left transition-all ${
                isActive
                  ? "bg-[#0b1b36] shadow-[0_10px_30px_-14px_rgba(11,27,54,0.5)]"
                  : "hover:bg-slate-50"
              }`}
            >
              <span className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em]">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: pillar.accentHex }}
                  aria-hidden="true"
                />
                <span className={isActive ? "text-slate-300" : "text-slate-400"}>
                  {tab.pillarLabel}
                </span>
              </span>
              <span
                className={`text-sm font-semibold ${
                  isActive ? "text-white" : "text-[#0b1b36]"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5">
        {activeTab === "growth" && <GrowthPanel />}
        {activeTab === "productivity" && <ProductivityPanel />}
        {activeTab === "governance" && <GovernancePanel />}
      </div>
    </div>
  );
}

export default ProductWalkthrough;