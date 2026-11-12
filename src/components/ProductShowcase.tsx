"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { RoomOSLockup, ZTDLogo, SingularityMark } from "./BrandMarks";
import { StatusChip } from "./StatusChip";
import { GROWTH_SOLUTIONS } from "@/data/solutions";

type ShowcaseTab = "growth" | "roomos" | "ztd" | "singularity";

const TABS: { id: ShowcaseTab; label: string; tag: string }[] = [
  { id: "growth", label: "GrowthWorx Apps", tag: "Pillar 01" },
  { id: "roomos", label: "RoomOS AI", tag: "Pillar 02" },
  { id: "ztd", label: "ZTD Migration", tag: "Pillar 02" },
  { id: "singularity", label: "Singularity", tag: "Pillar 03" },
];

const ROOMOS_SEQUENCE = [
  { step: "01", name: "Enter", detail: "An executive starts an authorised AI session." },
  { step: "02", name: "Ask", detail: "\"What are the top three risks to this week's go-live?\"" },
  { step: "03", name: "Explain", detail: "The answer cites project and incident records." },
  { step: "04", name: "Decide", detail: "Escalate a blocker and assign two actions." },
  { step: "05", name: "Confirm", detail: "The assistant restates the exact changes and asks for approval." },
  { step: "06", name: "Execute", detail: "ServiceNow updates, each with an audit trail." },
];

const ZTD_STAGES = [
  { stage: "1", name: "Discover", desc: "Read the source platform's data model, processes, customisations and integrations." },
  { stage: "2", name: "Map", desc: "Map objects, fields and logic to the target; flag what to simplify or retire." },
  { stage: "3", name: "Specify", desc: "AI-run workshops produce business and functional requirements." },
  { stage: "4", name: "Plan", desc: "Requirements become user stories, sprint plans and resource allocations." },
  { stage: "5", name: "Build and move", desc: "Generate configuration, workflows and code to best practice, and migrate data." },
  { stage: "6", name: "Test and go live", desc: "Generated test cases, data reconciliation and defect prediction before cutover." },
];

const SINGULARITY_LOOP = [
  { action: "1 · Map", scope: "the AI estate", desc: "Scan, classify, register and flag every agent, model, tool and workload, including shadow AI and EU AI Act risk tier." },
  { action: "2 · Sense", scope: "what is happening", desc: "Real-time telemetry, correlated across systems, users and workflows to detect anomalies, drift and emerging risk." },
  { action: "3 · Direct", scope: "what should happen", desc: "Route, enforce policy and supervise the plan in-path, on a unified context layer of identity, data, activity and policy." },
  { action: "4 · Prove", scope: "what happened", desc: "Measure quality, cost and outcomes with full lineage, so audit is a by-product of every run." },
  { action: "5 · Evolve", scope: "what happens next", desc: "Guardrail events and results feed back into policy and routing, so the estate gets safer and cheaper." },
];

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("growth");

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Tab bar */}
      <div
        className="flex flex-wrap border-b border-slate-200 bg-slate-50/70 px-3 pt-3 sm:px-6"
        role="tablist"
        aria-label="SourceWorx product showcase"
      >
        {TABS.map((tab) => {
          const active = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveTab(tab.id)}
              className={`mr-1 rounded-t-lg border-x border-t px-4 py-2.5 text-left transition-colors ${
                active
                  ? "border-slate-200 bg-white text-ink"
                  : "border-transparent bg-transparent text-slate-600 hover:text-ink"
              }`}
            >
              <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {tab.tag}
              </span>
              <span className="block text-sm font-semibold">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab panel */}
      <div className="p-6 sm:p-8" role="tabpanel">
        {activeTab === "growth" && (
          <div>
            <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-deep">
                  GrowthWorx · Industry AI Applications
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold text-ink">
                  Built with real clients, configurable to your workflows.
                </h3>
              </div>
              <Link
                href="/growth"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-deep hover:underline"
              >
                <span>Explore GrowthWorx</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {GROWTH_SOLUTIONS.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  className="group flex flex-col justify-between rounded-lg border border-slate-200 p-4 transition-colors hover:border-teal-deep"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {sol.sector}
                      </span>
                      <StatusChip status={sol.status} compact />
                    </div>
                    <h4 className="mt-2 font-display text-base font-bold text-ink group-hover:text-teal-deep">
                      {sol.name}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600">
                      {sol.shortDescription}
                    </p>
                  </div>
                  <div className="mt-4 rounded-md bg-teal-tint px-3 py-2 text-xs font-medium text-ink">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-teal-deep">
                      What it moves:{" "}
                    </span>
                    {sol.whatItMoves}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeTab === "roomos" && (
          <div>
            <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
              <div>
                <RoomOSLockup variant="light" className="text-2xl" />
                <p className="mt-1 text-sm text-slate-600">
                  See it in action: an executive incident review from spoken question to governed execution.
                </p>
              </div>
              <Link
                href="/solutions/roomos"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-flow-deep hover:underline"
              >
                <span>See all five RoomOS experiences</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ROOMOS_SEQUENCE.map((item) => (
                <div
                  key={item.step}
                  className="rounded-lg border border-slate-200 bg-slate-50/60 p-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-flow-deep">
                      {item.step}
                    </span>
                    <span className="font-display text-sm font-bold text-ink">
                      {item.name}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-flow/25 bg-flow-tint/60 px-4 py-3 text-xs text-ink">
              <span className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="h-4 w-4 text-flow-deep" />
                Human approval connects a useful answer to an accountable action.
              </span>
              <span className="font-mono font-bold text-flow-deep">
                90-day pilot · AI Boardroom &amp; War Room
              </span>
            </div>
          </div>
        )}

        {activeTab === "ztd" && (
          <div>
            <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
              <div>
                <ZTDLogo variant="light" />
                <p className="mt-2 text-sm text-slate-600">
                  One lifecycle, from source to go-live. Context carries forward so discovery is never redone.
                </p>
              </div>
              <Link
                href="/solutions/ztd"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-flow-deep hover:underline"
              >
                <span>Explore ZTD framework</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ZTD_STAGES.map((item) => (
                <div
                  key={item.stage}
                  className="rounded-lg border border-slate-200 p-4"
                >
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-flow-deep">
                    Stage {item.stage}
                  </span>
                  <h4 className="mt-1 font-display text-base font-bold text-ink">
                    {item.name}
                  </h4>
                  <p className="mt-1.5 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Directional targets: ~50% faster delivery · ~30% lower implementation cost · ~40% less dependence on scarce specialists · 2 weeks to a proof of concept on one module. Directional targets based on the framework&apos;s design and pilot experience, not guarantees.
            </p>
          </div>
        )}

        {activeTab === "singularity" && (
          <div>
            <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
              <div>
                <SingularityMark variant="light" />
                <p className="mt-2 text-sm text-slate-600">
                  Map · Sense · Direct · Prove · Evolve. Five actions, run in order on one governed path.
                </p>
              </div>
              <Link
                href="/solutions/singularity"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-trust-deep hover:underline"
              >
                <span>Explore Singularity</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-5">
              {SINGULARITY_LOOP.map((item) => (
                <div
                  key={item.action}
                  className="rounded-lg border border-slate-200 bg-trust-tint/25 p-4"
                >
                  <span className="font-mono text-xs font-bold text-trust-deep">
                    {item.action}
                  </span>
                  <p className="mt-0.5 text-xs font-semibold text-ink">
                    {item.scope}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Directional targets: 2–5× faster time to value · 20–40% lower AI operating cost · 50%+ reduction in AI risk exposure. Directional targets from product design and early deployments, not guarantees.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

