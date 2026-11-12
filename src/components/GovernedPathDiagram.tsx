"use client";

import React, { useState } from "react";
import { GOVERNED_PATH_STEPS } from "@/data/site-content";
import { ShieldCheck } from "lucide-react";

export function GovernedPathDiagram({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = GOVERNED_PATH_STEPS[selectedIdx];
  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 ${
        isDark
          ? "border-white/15 bg-[#0F172A] text-white"
          : "border-slate-200/90 bg-white text-[#0b1b36] shadow-[0_1px_3px_rgba(11,27,54,0.04)]"
      }`}
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p
            className={`font-mono text-xs font-semibold uppercase tracking-wider ${
              isDark ? "text-[#38D0DE]" : "text-[#0B7A6E]"
            }`}
          >
            8-stage execution sequence
          </p>
          <p className={`mt-1 text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Every request walks the same path — all eight stages visible end to end.
          </p>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 self-start rounded-full border px-3 py-1 font-mono text-[11px] font-semibold ${
            isDark
              ? "border-white/15 bg-white/10 text-slate-200"
              : "border-[#CBECE7] bg-[#F4FBFA] text-[#0B7A6E]"
          }`}
        >
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          No bypass possible
        </span>
      </div>

      {/* Horizontal stepper */}
      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
        {GOVERNED_PATH_STEPS.map((item, idx) => {
          const active = idx === selectedIdx;
          return (
            <button
              key={item.step}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`group flex flex-col justify-between rounded-xl border p-3.5 text-left transition-all ${
                active
                  ? isDark
                    ? "border-[#38D0DE] bg-[#16223B] text-white shadow-sm"
                    : "border-[#0b1b36] bg-[#0b1b36] text-white shadow-sm"
                  : isDark
                    ? "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25 hover:bg-white/[0.06]"
                    : "border-slate-200 bg-[#F8FAFC] text-[#0b1b36] hover:border-slate-300 hover:bg-slate-100/70"
              }`}
            >
              <span
                className={`font-mono text-[11px] font-bold tabular-nums ${
                  active
                    ? "text-[#38D0DE]"
                    : isDark
                      ? "text-slate-400"
                      : "text-slate-400"
                }`}
              >
                {item.step}
              </span>
              <span className="mt-2.5 text-xs font-semibold leading-snug">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active step readout */}
      <div
        className={`mt-5 rounded-xl border p-5 ${
          isDark
            ? "border-white/10 bg-black/25"
            : "border-slate-200/80 bg-[#F8FAFC]"
        }`}
      >
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-3">
          <span
            className={`shrink-0 font-mono text-xs font-bold uppercase tracking-wider ${
              isDark ? "text-[#38D0DE]" : "text-[#0B7A6E]"
            }`}
          >
            Stage {selected.step}
          </span>
          <span className="font-display text-base font-bold">
            {selected.name}
          </span>
        </div>
        <p className={`mt-2 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          {selected.detail}
        </p>
      </div>

      <p className={`mt-4 text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
        One request, one governed path. Nothing reaches a model or a system of action without passing through, so governance can&apos;t be bypassed and what happens flows straight back into the loop.
      </p>
    </div>
  );
}

