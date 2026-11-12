import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ClosingCta({
  heading = "Grow with AI. Run on AI. Govern every bit of it.",
  body = "Start with a briefing. We will map your goal to a pillar, a solution and a 90-day plan.",
  buttonLabel = "Request a briefing",
  href = "/contact",
}: {
  heading?: string;
  body?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="border-t border-[#DCEFED] bg-gradient-to-br from-[#F4FBFA] via-white to-[#E6F5F2]/80 text-[#0b1b36]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-8 rounded-3xl border border-[#CBECE7] bg-white/90 p-8 shadow-sm backdrop-blur-sm sm:p-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CBECE7] bg-[#F4FBFA] px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0B7A6E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0D9488]" aria-hidden="true" />
              Start with a briefing
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#0b1b36] sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              {body}
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#009990] to-[#00746B] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#00857A]/20 transition-all hover:-translate-y-0.5 hover:from-[#00857D] hover:to-[#00635B]"
            >
              <span>{buttonLabel}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

