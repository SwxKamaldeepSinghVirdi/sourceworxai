import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { RoomOSLockup } from "@/components/BrandMarks";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "RoomOS AI | The Room That Thinks, Speaks and Acts",
  description:
    "RoomOS AI turns meetings into governed outcomes: AI Boardroom, War Room, Deal Room and multilingual rooms that end in owned, approved actions.",
  keywords: [
    "AI meeting room platform",
    "AI boardroom assistant",
    "incident war room AI",
    "multilingual meeting translation",
    "meeting action items to ServiceNow",
  ],
};

const PROBLEMS = [
  {
    title: "Commitments lose ownership.",
    detail:
      "Discussion rarely becomes structured tasks with clear owners and follow-through.",
  },
  {
    title: "Context stays scattered.",
    detail:
      "CRM, ITSM, projects, documents and past meetings hold disconnected knowledge.",
  },
  {
    title: "Participation has friction.",
    detail:
      "Global teams navigate language barriers and accessibility needs.",
  },
  {
    title: "Transcripts are not enough.",
    detail:
      "You need governance, privacy and ROI, not another meeting transcript.",
  },
];

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Understand",
    detail:
      "Capture intent, context and participants. Retrieve only the business information each person is authorised to see.",
  },
  {
    num: "02",
    title: "Assist",
    detail:
      "Support multilingual dialogue with grounded insights and recommendations, each with a source.",
  },
  {
    num: "03",
    title: "Execute",
    detail:
      "Turn approved decisions into ServiceNow workflows, owned tasks and measurable outcomes.",
  },
];

const EXPERIENCES = [
  {
    name: "AI Boardroom · executive chief of staff",
    promise: "A chief of staff for executive meetings",
    bullets: [
      "Prepare: agenda, KPIs, prior commitments and risks, compiled before you sit down",
      "Support: grounded answers; blockers and decisions surfaced as you talk",
      "Capture: owner, deadline, evidence and approvals for every commitment",
      "Follow through: tasks drafted for confirmation, with completion and time-to-decision measured",
    ],
  },
  {
    name: "Universal Language · real-time multilingual meetings",
    promise: "Meet in any language without losing context",
    bullets: [
      "Each attendee chooses: live captions or private translated audio",
      "Your terminology stays intact: approved glossaries keep the language of your business",
      "Notes keep their source: multilingual notes trace back to the original words",
      "Consent first: accessibility options run only with participant consent",
    ],
  },
  {
    name: "Autonomous War Room · incident command",
    promise: "A live command centre for critical incidents",
    bullets: [
      "Trigger and gather: a critical incident opens the room with affected services, recent changes and prior fixes",
      "Collaborate: spoken questions answered with source links",
      "Orchestrate: actions recommended, owners assigned, approved workflows started",
      "Communicate: stakeholder updates and an auditable timeline",
    ],
  },
  {
    name: "AI Deal Room · CRM-aware selling",
    promise: "Customer conversations become pipeline",
    bullets: [
      "Arrive informed: account briefs from authorised CRM, proposals and history",
      "Answer with approved facts: references, product facts and pricing on demand",
      "Coach privately: seller prompts stay private, never broadcast",
      "Keep the opportunity current: objections, buying signals and next steps drafted for review",
    ],
  },
  {
    name: "Intelligent Workplace · self-managing rooms",
    promise: "The room reports and fixes its own issues",
    bullets: [
      "Sense: supported room devices report health, occupancy and environment",
      "Respond: repeated faults become incidents automatically; plain-language reporting with guided fixes",
      "Optimise: privacy-conscious utilisation patterns help right-size workplace capacity",
    ],
  },
];

const ACTION_SEQUENCE = [
  { step: "01", name: "Enter", detail: "An executive starts an authorised AI session." },
  { step: "02", name: "Ask", detail: "\"What are the top three risks to this week's go-live?\"" },
  { step: "03", name: "Explain", detail: "The answer cites project and incident records." },
  { step: "04", name: "Decide", detail: "Escalate a blocker and assign two actions." },
  { step: "05", name: "Confirm", detail: "The assistant restates the exact changes and asks for approval." },
  { step: "06", name: "Execute", detail: "ServiceNow updates, each with an audit trail." },
];

const TRUST_ITEMS = [
  {
    title: "Consent.",
    detail: "Session indicators, recording permissions and retention controls.",
  },
  {
    title: "Identity.",
    detail: "SSO, role-based access and per-source permissions.",
  },
  {
    title: "Human control.",
    detail: "Confirmation gates before any consequential action.",
  },
  {
    title: "Data protection.",
    detail: "Encryption, data-residency review and data loss prevention.",
  },
  {
    title: "Auditability and safety.",
    detail: "Grounded answers, action logs and prompt-injection defence.",
  },
  {
    title: "Governed by Singularity.",
    detail: "Every AI step runs on the SourceWorx governed path.",
  },
];

const PILOT_MEASURES = [
  {
    measure: "Action quality",
    detail: "Correct owner, due date, workflow and approval",
  },
  {
    measure: "Time saved",
    detail: "Preparation, documentation, follow-up and incident coordination",
  },
  {
    measure: "Response quality",
    detail: "Grounded accuracy, citations and terminology fidelity",
  },
  {
    measure: "Room experience",
    detail: "Latency, audio quality and accessibility",
  },
  {
    measure: "Business value",
    detail: "Time to resolution, pipeline impact, cost per room and per action",
  },
];

const PILOT_PHASES = [
  {
    num: "01",
    window: "Days 1–30",
    title: "Establish foundations",
    detail:
      "Device access, technical discovery, voice prototype, consent and security architecture.",
  },
  {
    num: "02",
    window: "Days 31–60",
    title: "Connect and test",
    detail:
      "ServiceNow sandbox, enterprise grounding, action approval and demo flows.",
  },
  {
    num: "03",
    window: "Days 61–90",
    title: "Benchmark value",
    detail:
      "Run two pilots, AI Boardroom and War Room. Benchmark results and build the ROI case.",
  },
];

/* ------------------------------------------------------------------ */
/* Motion + micro-interaction layer                                   */
/* ------------------------------------------------------------------ */
const ANIMATION_CSS = `
  @keyframes sw-rise {
    from { opacity: 0; transform: translate3d(0, 24px, 0); }
    to   { opacity: 1; transform: translate3d(0, 0, 0); }
  }
  @keyframes sw-fade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes sw-scale-in {
    from { opacity: 0; transform: scale(0.98); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes sw-drift {
    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
    50%      { transform: translate3d(28px, -20px, 0) scale(1.06); }
  }
  @keyframes sw-dot {
    0%, 100% { opacity: 0.35; transform: scale(1); }
    50%      { opacity: 1;    transform: scale(1.15); }
  }

  .sw-hero-rise { opacity: 0; animation: sw-rise 900ms cubic-bezier(0.22, 1, 0.36, 1) both; }
  .sw-hero-fade { opacity: 0; animation: sw-fade 1400ms ease both; }
  .sw-hero-scale { opacity: 0; animation: sw-scale-in 1100ms cubic-bezier(0.22, 1, 0.36, 1) both; }
  .sw-drift { animation: sw-drift 22s ease-in-out infinite; }
  .sw-dot-pulse { animation: sw-dot 3.2s ease-in-out infinite; }

  .sw-arrow { transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1); }
  a:hover .sw-arrow, a:focus-visible .sw-arrow { transform: translate3d(3px, 0, 0); }

  .sw-row { transition: background-color 450ms ease; }
  .sw-row:hover { background-color: rgba(13, 148, 136, 0.035); }

  .sw-row-dark { transition: background-color 450ms ease; }
  .sw-row-dark:hover { background-color: rgba(255, 255, 255, 0.025); }

  .sw-num { transition: color 450ms ease; }
  .group:hover .sw-num { color: #0D9488; }
  .group:hover .sw-num--dark { color: #6FD3C4; }

  @supports (animation-timeline: view()) {
    .sw-reveal {
      opacity: 0;
      animation: sw-rise linear both;
      animation-timeline: view();
      animation-range: entry 5% cover 22%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sw-hero-rise, .sw-hero-fade, .sw-hero-scale, .sw-drift, .sw-dot-pulse, .sw-reveal {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
    .sw-arrow, .sw-num { transition: none !important; }
  }
`;

/* ------------------------------------------------------------------ */
/* Shared editorial primitives                                       */
/* ------------------------------------------------------------------ */
function ChapterMark({
  index,
  label,
  dark = false,
}: {
  index: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
        dark ? "text-teal" : "text-flow-deep"
      }`}
    >
      <span className="mr-2">{index}</span>
      <span className={dark ? "text-white/25" : "text-slate-300"}>/</span>
      <span className="ml-2">{label}</span>
    </span>
  );
}

export default function RoomOSPage() {
  return (
    <div className="bg-[#FAFAF9]">
      <style dangerouslySetInnerHTML={{ __html: ANIMATION_CSS }} />

      {/* ================================================================ */}
      {/* 00 — HERO (ink)                                                   */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-flow-dark text-white">
        {/* Grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at 50% 0%, black 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 0%, black 40%, transparent 75%)",
          }}
        />
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="sw-drift pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-teal/[0.10] blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-10 lg:px-8 lg:pb-32">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="sw-hero-fade flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40"
          >
            <Link href="/" className="transition-colors hover:text-white">
              SourceWorx
            </Link>
            <span className="text-white/20">/</span>
            <Link href="/productivity" className="transition-colors hover:text-white">
              FlowWorx
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/80">RoomOS AI</span>
          </nav>

          <div className="mt-14 max-w-4xl">
            <div
              className="sw-hero-rise flex flex-wrap items-center gap-3"
              style={{ animationDelay: "80ms" }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                FlowWorx · AI for Productivity
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                <RoomOSLockup variant="dark" className="text-sm" />
              </span>
            </div>

            <h1
              className="sw-hero-rise mt-8 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-[64px]"
              style={{ animationDelay: "160ms" }}
            >
              The room that thinks, speaks, decides{" "}
              <span className="bg-gradient-to-r from-teal to-[#9DB9F5] bg-clip-text text-transparent">
                and acts.
              </span>
            </h1>

            <p
              className="sw-hero-rise mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
              style={{ animationDelay: "240ms" }}
            >
              RoomOS AI turns meetings into governed business outcomes. It understands who is
              in the room and what they need, answers from authorised business data in any
              language, and turns approved decisions into owned tasks and workflows in the
              systems you already run.
            </p>

            <div
              className="sw-hero-rise mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/contact?interest=FlowWorx+%C2%B7+RoomOS+AI+pilot"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#5ec7b8] hover:shadow-xl hover:shadow-black/20"
              >
                <span>Scope a 90-day pilot</span>
                <ArrowRight className="sw-arrow h-4 w-4" />
              </Link>
              <a
                href="#experiences"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06]"
              >
                <span>See the five experiences</span>
              </a>
            </div>

            {/* Meta strip */}
            <div
              className="sw-hero-scale mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-4"
              style={{ animationDelay: "440ms" }}
            >
              {[
                { k: "Rooms", v: "5 experiences" },
                { k: "Rollout", v: "90-day pilot" },
                { k: "Systems", v: "ServiceNow-native" },
                { k: "Governance", v: "Singularity" },
              ].map((m) => (
                <div
                  key={m.k}
                  className="border-r border-white/[0.06] px-4 py-5 last:border-r-0 sm:px-5"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                    {m.k}
                  </div>
                  <div className="mt-1.5 text-sm font-semibold text-white/90">
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 01 — PROBLEM (paper, numbered editorial rows)                     */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="01" label="The problem" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Meetings produce talk.{" "}
              <span className="text-slate-400">Your systems need accountable action.</span>
            </h2>
          </div>

          <div className="sw-reveal mt-16">
            {PROBLEMS.map((p, idx) => (
              <div key={p.title} className="sw-row group border-t border-slate-200 last:border-b">
                <div className="grid grid-cols-[auto_1fr] gap-6 py-10 sm:gap-12 sm:py-14">
                  <span className="sw-num pt-1 font-mono text-sm font-medium tabular-nums text-slate-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl lg:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 02 — HOW IT WORKS (ink, three big steps)                          */}
      {/* ================================================================ */}
      <section className="relative bg-flow-dark py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="02" label="How it works" dark />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Understand. Assist. Execute.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              Every conversation runs the same governed path — from context, to grounded
              assistance, to approved action in the systems of record.
            </p>
          </div>

          <div className="sw-reveal mt-16 grid grid-cols-1 border-t border-white/[0.08] md:grid-cols-3">
            {HOW_IT_WORKS.map((step, idx) => (
              <div
                key={step.num}
                className={`group relative py-10 md:py-14 ${
                  idx < HOW_IT_WORKS.length - 1
                    ? "border-b border-white/[0.08] md:border-b-0 md:border-r"
                    : ""
                } md:px-8 ${idx === 0 ? "md:pl-0" : ""} ${
                  idx === HOW_IT_WORKS.length - 1 ? "md:pr-0" : ""
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="sw-num sw-num--dark font-display text-4xl font-bold tabular-nums text-white/10 sm:text-5xl">
                    {step.num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
                    {step.title}
                  </span>
                </div>
                <p className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="sw-reveal mt-12 flex items-start gap-3 rounded-xl border border-teal/25 bg-teal/[0.06] px-5 py-4">
            <span className="sw-dot-pulse mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
            <p className="text-sm font-medium text-white/80">
              Human approval connects a useful answer to an accountable action.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 03 — EXPERIENCES (paper, editorial chapter list)                  */}
      {/* ================================================================ */}
      <section id="experiences" className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="03" label="Five experiences, one platform" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              One platform for every room that matters.
            </h2>
          </div>

          <div className="sw-reveal mt-16">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.name}
                className="sw-row group border-t border-slate-200 last:border-b"
              >
                <div className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
                  <div className="lg:col-span-4">
                    <span className="sw-num font-display text-4xl font-bold tabular-nums tracking-tight text-slate-200 sm:text-5xl">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-flow-deep">
                      {exp.name}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                      {exp.promise}
                    </h3>
                  </div>
                  <div className="lg:col-span-8">
                    <ul className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                      {exp.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-700"
                        >
                          <span
                            className="mt-2.5 h-px w-4 shrink-0 bg-teal"
                            aria-hidden="true"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* "One platform" as a footer callout */}
          <div className="sw-reveal mt-12 rounded-2xl border border-flow-deep/20 bg-flow-tint/40 p-8 sm:p-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-flow-deep">
                  One platform
                </span>
                <p className="mt-3 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  Reusable connectors, workflows and governance across all five experiences.
                </p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-700">
                  Every experience shares the same grounding, approval gates and audit
                  trail, governed by Singularity. Start with one room and add the rest
                  without rebuilding.
                </p>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end">
                <Link
                  href="/contact?interest=FlowWorx+%C2%B7+RoomOS+AI+pilot"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-ink-soft"
                >
                  <span>See it in a pilot</span>
                  <ArrowRight className="sw-arrow h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 04 — ACTION SEQUENCE (ink, connected timeline)                    */}
      {/* ================================================================ */}
      <section className="bg-flow-dark py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="04" label="See it in action" dark />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              An executive incident review
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              From entering the room to a ServiceNow update with an audit trail — every
              step is grounded, approved and observable.
            </p>
          </div>

          <div className="sw-reveal mt-16">
            {ACTION_SEQUENCE.map((item, idx) => (
              <div
                key={item.step}
                className="sw-row-dark group relative grid grid-cols-[auto_1fr_auto] items-start gap-6 border-t border-white/[0.08] py-8 last:border-b sm:gap-10 sm:py-10"
              >
                <span className="sw-num sw-num--dark pt-0.5 font-mono text-sm font-semibold tabular-nums text-white/40">
                  {item.step}
                </span>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-8">
                  <span className="min-w-[100px] font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {item.name}
                  </span>
                  <p className="max-w-2xl text-[15px] leading-relaxed text-white/60">
                    {item.detail}
                  </p>
                </div>
                <span className="hidden items-center gap-2 sm:flex">
                  <span className="h-px w-6 bg-white/10" aria-hidden="true" />
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      idx === ACTION_SEQUENCE.length - 1 ? "bg-teal" : "bg-white/20"
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 05 — TRUST (paper, hairline grid)                                 */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="05" label="Enterprise trust" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Trust designed in, not bolted on.
            </h2>
          </div>

          <div className="sw-reveal mt-14 grid grid-cols-1 border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.title}
                className="group border-b border-r border-slate-200 p-8 transition-colors duration-500 hover:bg-stone-100/60 sm:p-10"
              >
                <Shield className="h-5 w-5 text-flow-deep" />
                <h3 className="mt-6 font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 06 — PILOT (paper, timeline + table)                              */}
      {/* ================================================================ */}
      <section className="bg-[#FAFAF9] pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-3xl">
            <ChapterMark index="06" label="Prove it with us" />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              A 90-day pilot, measured in business outcomes.
            </h2>
          </div>

          {/* Phases timeline */}
          <div className="sw-reveal mt-16">
            {PILOT_PHASES.map((phase) => (
              <div
                key={phase.num}
                className="sw-row group grid grid-cols-1 gap-4 border-t border-slate-200 py-8 last:border-b sm:grid-cols-12 sm:gap-8 sm:py-10"
              >
                <div className="sm:col-span-3">
                  <span className="sw-num font-mono text-sm font-semibold tabular-nums text-slate-400">
                    {phase.num}
                  </span>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-flow-deep">
                    {phase.window}
                  </p>
                </div>
                <div className="sm:col-span-3">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    {phase.title}
                  </h3>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
                    {phase.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Measures table */}
          <div className="sw-reveal mt-16">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                What the pilot evaluates
              </h3>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:inline">
                {String(PILOT_MEASURES.length).padStart(2, "0")} measures
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/70">
                    <th className="w-16 px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      #
                    </th>
                    <th className="px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Measure
                    </th>
                    <th className="px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      What the pilot evaluates
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  {PILOT_MEASURES.map((row, idx) => (
                    <tr
                      key={row.measure}
                      className="transition-colors duration-300 hover:bg-stone-100/40"
                    >
                      <td className="px-6 py-5 font-mono text-xs tabular-nums text-slate-400">
                        {String(idx + 1).padStart(2, "0")}
                      </td>
                      <td className="px-6 py-5 font-semibold text-ink">
                        {row.measure}
                      </td>
                      <td className="px-6 py-5 text-slate-600">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 07 — FOCUSED PILOT CTA (ink)                                      */}
      {/* ================================================================ */}
      <section className="bg-flow-dark py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <ChapterMark index="07" label="Start now" dark />
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Start with a focused pilot.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                Pick one experience, prove the outcome, then expand — without rebuilding
                the platform underneath.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="border-l-2 border-teal/60 pl-5">
                  <p className="font-display text-base font-semibold text-white">
                    AI Boardroom
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    Validate grounded executive support and approved action capture.
                  </p>
                </div>
                <div className="border-l-2 border-teal/60 pl-5">
                  <p className="font-display text-base font-semibold text-white">
                    War Room
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    Validate incident context and governed workflow orchestration.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end">
              <Link
                href="/contact?interest=FlowWorx+%C2%B7+RoomOS+AI+pilot"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-xl hover:shadow-black/20"
              >
                <span>Agree pilot scope and sponsor</span>
                <ArrowRight className="sw-arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}