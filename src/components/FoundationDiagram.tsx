"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const INPUT_APPS = [
  "Healthcare · Care operations",
  "IT Services · Finance",
  "Export Trade · CRM",
  "Retail · Fix My Fit",
  "FlowWorx · RoomOS AI & ZTD",
  "Custom client verticals",
];

const LOOP_NODES = ["Map", "Sense", "Direct", "Prove", "Evolve"];

export function FoundationDiagram() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-deep">
          Execution Architecture
        </span>
        <span className="font-mono text-xs text-slate-500">
          Any model · Any cloud · Multi-tenant core
        </span>
      </div>

      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
        {/* Left: Industry applications */}
        <div className="space-y-2 lg:col-span-4">
          <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Applications &amp; platforms
          </p>
          {INPUT_APPS.map((app, i) => (
            <motion.div
              key={app}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-ink"
            >
              <span>{app}</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            </motion.div>
          ))}
        </div>

        {/* Center: One governed path */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border-2 border-ink bg-ink p-5 text-white">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-teal">
              One Governed Path · Singularity
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Identity, policy, routing, verification &amp; audit
            </p>
            <div className="mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-5">
              {LOOP_NODES.map((node, idx) => (
                <motion.div
                  key={node}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.25, delay: idx * 0.06 }}
                  className="rounded border border-white/15 bg-white/5 px-1.5 py-2 text-center"
                >
                  <span className="block font-mono text-[9px] text-teal">
                    0{idx + 1}
                  </span>
                  <span className="mt-0.5 block text-[11px] font-semibold text-white">
                    {node}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 font-mono text-[10px] text-slate-300">
              <span>Policy in-path</span>
              <span>Model router</span>
              <span>Lineage log</span>
            </div>
          </div>
        </div>

        {/* Right: In production */}
        <div className="lg:col-span-3">
          <div className="rounded-xl border border-teal/40 bg-teal-tint p-5">
            <div className="flex items-center gap-2 text-teal-deep">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                In production
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold text-ink">
              Measurable outcomes with full audit evidence
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
              <li>• Live in 90 days</li>
              <li>• Faster security review</li>
              <li>• Attributed AI spend</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

