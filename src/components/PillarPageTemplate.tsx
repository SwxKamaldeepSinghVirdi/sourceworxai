import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PILLARS, ALL_SOLUTION_SUMMARIES, PillarId } from "@/data/solutions";
import { StatusChip } from "./StatusChip";
import { RoomOSLockup, ZTDLogo, SingularityMark } from "./BrandMarks";

interface BuildWithUsItem {
  title: string;
  description: string;
}

interface ExtraLinkItem {
  name: string;
  sector: string;
  shortDescription: string;
  href: string;
  linkLabel: string;
}

export function PillarPageTemplate({
  pillarId,
  eyebrow,
  headline,
  intro,
  buildItems,
  extraLinks = [],
}: {
  pillarId: PillarId;
  eyebrow: string;
  headline: string;
  intro: string;
  buildItems: BuildWithUsItem[];
  extraLinks?: ExtraLinkItem[];
}) {
  const pillar = PILLARS[pillarId];
  const solutions = ALL_SOLUTION_SUMMARIES[pillarId];
  const otherPillars = (Object.keys(PILLARS) as PillarId[])
    .filter((id) => id !== pillarId)
    .map((id) => PILLARS[id]);

  const accentBorder =
    pillarId === "growth"
      ? "border-teal"
      : pillarId === "productivity"
      ? "border-flow"
      : "border-trust";

  const accentTextDark =
    pillarId === "growth"
      ? "text-teal"
      : pillarId === "productivity"
      ? "text-[#9DB9F5]"
      : "text-[#B6ACFF]";

  const accentTextLight =
    pillarId === "growth"
      ? "text-teal-deep"
      : pillarId === "productivity"
      ? "text-flow-deep"
      : "text-trust-deep";

  const accentBgSoft =
    pillarId === "growth"
      ? "bg-teal-tint"
      : pillarId === "productivity"
      ? "bg-flow-tint"
      : "bg-trust-tint";

  return (
    <div>
      {/* Dark Page Header */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className={`font-mono text-xs font-bold uppercase tracking-widest ${accentTextDark}`}>
              {eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {headline}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              {intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#5ec7b8]"
              >
                <span>Request a briefing</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                <span>See the solutions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What it moves */}
      <section className="border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className={`font-mono text-xs font-bold uppercase tracking-wider ${accentTextLight}`}>
                What it moves
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                The numbers we build to.
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Every engagement in this pillar starts by agreeing which of these we are accountable for.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
              {pillar.whatItMoves.map((metric) => (
                <div
                  key={metric}
                  className={`flex items-start gap-3 rounded-lg border border-slate-200 border-l-4 ${accentBorder} bg-white p-4`}
                >
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accentTextLight}`} />
                  <span className="text-sm font-medium text-ink">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className={`font-mono text-xs font-bold uppercase tracking-wider ${accentTextLight}`}>
              {pillar.name} · Solutions
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink">
              Ready to deploy in {pillar.name}.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {solutions.map((sol) => (
              <Link
                key={sol.slug}
                href={sol.href}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-ink"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                      {sol.sector}
                    </span>
                    <StatusChip status={sol.status} />
                  </div>
                  <div className="mt-3">
                    {sol.logoType === "roomos" ? (
                      <RoomOSLockup variant="light" className="text-xl" />
                    ) : sol.logoType === "ztd" ? (
                      <ZTDLogo variant="light" />
                    ) : sol.logoType === "singularity" ? (
                      <SingularityMark variant="light" />
                    ) : (
                      <h3 className="font-display text-xl font-bold text-ink group-hover:text-teal-deep">
                        {sol.name}
                      </h3>
                    )}
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {sol.shortDescription}
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className={`rounded-lg ${accentBgSoft} p-3.5`}>
                    <span className={`block font-mono text-[10px] font-bold uppercase tracking-wider ${accentTextLight}`}>
                      What it moves
                    </span>
                    <p className="mt-1 text-sm font-medium text-ink">
                      {sol.whatItMoves}
                    </p>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${accentTextLight}`}>
                    <span>View solution</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}

            {extraLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-6 transition-colors hover:border-ink hover:bg-white"
              >
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                    {item.sector}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.shortDescription}
                  </p>
                </div>
                <span className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${accentTextLight}`}>
                  <span>{item.linkLabel}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Build with us */}
      <section className="border-t border-slate-200 bg-slate-50/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className={`font-mono text-xs font-bold uppercase tracking-wider ${accentTextLight}`}>
                Build with us
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink">
                What we build in this pillar.
              </h2>
            </div>
            <Link
              href="/platform#build"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-teal-deep"
            >
              <span>See our platform foundation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {buildItems.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <span className={`font-mono text-xs font-bold ${accentTextLight}`}>
                  0{idx + 1}
                </span>
                <h3 className="mt-2 font-display text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part of a 360 practice */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Part of a 360° practice.
            </h2>
            <p className="mt-2 text-base text-slate-600">
              {pillar.name} works best alongside the other two pillars, on the same governed foundation.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {otherPillars.map((other) => (
              <Link
                key={other.id}
                href={other.href}
                className="group flex items-start justify-between gap-4 rounded-xl border border-slate-200 p-6 transition-colors hover:border-ink"
              >
                <div>
                  <span
                    className="font-mono text-xs font-bold uppercase tracking-wider"
                    style={{ color: other.textHex }}
                  >
                    {other.number} · {other.name} · {other.subtitle}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {other.summary}
                  </p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-ink" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

