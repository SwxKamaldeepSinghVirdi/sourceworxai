import React from "react";
import { SolutionStatus } from "@/data/solutions";

const STATUS_STYLES: Record<SolutionStatus, string> = {
  "Available now":
    "bg-emerald-50 text-emerald-800 border-emerald-200",
  "Early access":
    "bg-blue-50 text-blue-800 border-blue-200",
  "Tailored build":
    "bg-amber-50 text-amber-800 border-amber-200",
  Platform:
    "bg-slate-100 text-slate-800 border-slate-200",
};

const DOT_STYLES: Record<SolutionStatus, string> = {
  "Available now": "bg-emerald-600",
  "Early access": "bg-blue-600",
  "Tailored build": "bg-amber-600",
  Platform: "bg-slate-600",
};

export function StatusChip({
  status,
  compact = false,
}: {
  status: SolutionStatus;
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-mono font-bold uppercase tracking-wider ${
        compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]"
      } ${STATUS_STYLES[status]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${DOT_STYLES[status]}`}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}

