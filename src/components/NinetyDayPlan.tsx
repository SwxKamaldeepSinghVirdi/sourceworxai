import React from "react";
import { Check } from "lucide-react";
import { NINETY_DAY_PLAN } from "@/data/site-content";

export function NinetyDayPlan({
  dark = false,
}: {
  dark?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      {NINETY_DAY_PLAN.map((phase, idx) => (
        <div
          key={phase.month}
          className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-7 ${
            dark
              ? "border-white/10 bg-[#0F1B38] text-white"
              : "border-slate-200/90 bg-white text-[#0b1b36] shadow-[0_1px_3px_rgba(11,27,54,0.04)]"
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider ${
                  dark
                    ? "bg-white/10 text-[#38D0DE]"
                    : "bg-[#E6F5F2] text-[#0B7A6E]"
                }`}
              >
                {phase.month}
              </span>
              <span className="font-mono text-xs font-medium tabular-nums text-slate-400">
                0{idx + 1} / 03
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl font-bold tracking-tight">
              {phase.stage}
            </h3>
            <ul className="mt-5 space-y-3 border-t border-slate-100/80 pt-5">
              {phase.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      dark ? "text-[#38D0DE]" : "text-[#0D9488]"
                    }`}
                    aria-hidden="true"
                  />
                  <span className={dark ? "text-slate-200" : "text-slate-600"}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

