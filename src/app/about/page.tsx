import React from "react";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PROOF_TILES, LEADERSHIP_TEAM } from "@/data/site-content";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "About SourceWorx | The 360° AI Company",
  description:
    "SourceWorx builds AI for growth, AI for productivity and AI governance on one governed foundation. Built in India, for the enterprise everywhere.",
  keywords: [
    "AI company India",
    "enterprise AI startup",
    "AI software company Bengaluru",
    "governed AI",
  ],
};

const WHY_CHOOSE = [
  {
    title: "The full circle.",
    body: "Growth, productivity and governance from one accountable team, not three vendors.",
  },
  {
    title: "Working software first.",
    body: "Most engagements start from a product, not a blank page.",
  },
  {
    title: "Agnostic by design.",
    body: "Any model, any cloud, any agent framework.",
  },
  {
    title: "Governed from day one.",
    body: "Every AI step is logged, routed and auditable.",
  },
  {
    title: "Outcome-led.",
    body: "We agree the number before we build.",
  },
  {
    title: "Built with partners.",
    body: "Delivered through systems integrators and telecom partners.",
  },
];

const VALUES = [
  {
    title: "Open by default.",
    body: "We build on open standards so customers are never locked in.",
  },
  {
    title: "Agnostic by design.",
    body: "Any model, any cloud, any agent framework.",
  },
  {
    title: "Outcomes over demos.",
    body: "We agree the number first, then build what moves it.",
  },
  {
    title: "Governed from day one.",
    body: "Safeguards live in the path, not in a slide.",
  },
  {
    title: "Built with partners.",
    body: "We grow through the integrators and providers our customers already trust.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-teal">
              About SourceWorx
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About SourceWorx: the 360° AI company
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              SourceWorx builds AI that grows the business, AI that makes delivery faster and sharper, and the platform that keeps all of it governed. We work in three pillars, GrowthWorx, FlowWorx and TrustWorx, and every product we ship runs on one governed foundation.
            </p>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="border-b border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-teal-deep">
            SourceWorx at a glance
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {PROOF_TILES.map((tile) => (
              <div key={tile.label} className="border-l-2 border-teal pl-4">
                <p className="font-display text-3xl font-bold text-ink">
                  {tile.figure}
                </p>
                <p className="mt-1 text-sm text-slate-600">{tile.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our story & Why enterprises choose */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-teal-deep">
                Our story
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink">
                Born from real operational software.
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  SourceWorx started by building AI software for real operations: a care platform for specialty providers, finance operations for an IT services firm, a CRM for an export house, an online tailoring brand. Each build taught us the same thing. AI only pays off when it moves a business number, and it only keeps paying off when someone can see, control and prove what it does.
                </p>
                <p>
                  So we organised the company around that lesson. GrowthWorx turns our client builds into industry applications that win revenue. FlowWorx gives delivery teams platforms such as RoomOS AI and ZTD that take the manual work out of programmes. TrustWorx, with Singularity at its core, governs every model and agent on one path. Three pillars, one company, the full circle.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-teal-deep">
                Why enterprises choose SourceWorx
              </p>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {WHY_CHOOSE.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 p-5"
                  >
                    <h3 className="font-display text-base font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        id="leadership"
        className="scroll-mt-20 border-t border-slate-200 bg-slate-50/70 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-teal-deep">
              Leadership
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink">
              Meet the team building SourceWorx.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP_TEAM.map((person) => (
              <div
                key={person.name}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                {/* Square portrait placeholder on Ink Navy background */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-ink font-display text-xl font-bold text-teal"
                    aria-hidden="true"
                  >
                    {person.initials}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">
                      {person.name}
                    </h3>
                    <p className="font-mono text-xs font-medium text-teal-deep">
                      {person.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section
        id="vision"
        className="scroll-mt-20 border-t border-slate-200 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-teal-deep">
            Vision, Mission and Values
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">
            Our Vision and Mission
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-ink p-8 text-white">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                Our vision
              </span>
              <p className="mt-3 font-display text-xl font-bold leading-snug sm:text-2xl">
                A world where every enterprise runs AI as reliably, safely and measurably as it runs its core business systems.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-ink">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-deep">
                Our mission
              </span>
              <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                Put AI to work across the full circle of the enterprise: growing revenue, raising the speed and quality of delivery, and governing every model and agent, on open, model-agnostic platforms that run on the infrastructure customers already own.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-display text-2xl font-bold text-ink">
              Our values
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {VALUES.map((val) => (
                <div
                  key={val.title}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <Check className="h-4 w-4 text-teal-deep" />
                  <h4 className="mt-3 font-display text-base font-bold text-ink">
                    {val.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {val.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}

