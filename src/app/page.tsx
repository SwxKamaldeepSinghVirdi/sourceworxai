import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCheck,
  Cpu,
  Filter,
  Fingerprint,
  Layers,
  Lock,
  Plug,
  Rocket,
  Route,
  ScrollText,
  ShieldCheck,
  Zap,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HOME_FAQS } from "@/data/site-content";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "SourceWorx | The 360° AI Company for the Enterprise",
  description:
    "AI for growth, AI for productivity and AI governance from one company. Industry AI apps, RoomOS AI, ZTD and Singularity, live in 90 days.",
};

// ── Data ──────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    name: "GrowthWorx",
    subtitle: "AI for Growth",
    summary: "Industry AI applications built with real clients and ready for yours. Each one opens a new revenue channel, converts more of the demand you already have, or lets you grow without growing headcount.",
    color: "#00B2FF",
    tint: "rgba(0, 178, 255, 0.08)",
    apps: ["Specialty care operations", "Services finance", "Export growth CRM", "Fix My Fit", "Programme impact analytics", "Patient report studio"],
  },
  {
    name: "FlowWorx",
    subtitle: "AI for Productivity",
    summary: "Platforms that take the slow, manual, specialist-heavy parts out of the work your teams already do. Same processes, fewer hand-offs, measurably better quality.",
    color: "#004EFF",
    tint: "rgba(0, 78, 255, 0.08)",
    apps: ["RoomOS AI", "ZTD · Zero Touch Deployment"],
  },
  {
    name: "TrustWorx",
    subtitle: "AI Governance",
    summary: "Growth and productivity only last if AI stays accountable. Singularity maps every model and agent, enforces policy where each request runs, and turns every run into evidence for boards, auditors and regulators.",
    color: "#0D9488",
    tint: "rgba(13, 148, 136, 0.08)",
    apps: ["Singularity"],
  },
];

const WALKTHROUGH_APPS = [
  { industry: "Healthcare", status: "Available now", name: "Specialty care operations", desc: "Run home-visit and long-term care end to end.", impact: "Take on more patients and centres without growing the admin team." },
  { industry: "IT and professional services", status: "Available now", name: "Services finance", desc: "Timesheet to invoice to payroll, in one flow.", impact: "Invoices raised straight from timesheets, so cash comes in sooner." },
  { industry: "Export and trade", status: "Available now", name: "Export growth CRM", desc: "Win international buyers for the exporters you serve.", impact: "More buyer matches per exporter, and market reports clients pay for." },
  { industry: "Retail · made-to-measure", status: "Early access", name: "Fix My Fit", desc: "Take tailoring orders online, under your own brand.", impact: "A new online revenue channel, and repeat orders from saved measurements." },
  { industry: "Education and CSR", status: "Tailored build", name: "Programme impact analytics", desc: "Prove what an education programme changes.", impact: "Outcome evidence that helps win the next round of funding." },
  { industry: "Dental", status: "Tailored build", name: "Patient report studio", desc: "Consented, branded reports after every consultation.", impact: "More consultations turn into accepted treatment plans." },
];

const MONTHS = [
  { month: "Month 1", title: "Foundation", points: ["Agree the growth or productivity metric that defines success", "Stand up the governed path and model routing", "Connect first data sources and security safeguards"] },
  { month: "Month 2", title: "Build and validate", points: ["Ship the working application to pilot users", "Measure outcomes against the agreed metrics", "Iterate on real feedback"] },
  { month: "Month 3", title: "Scale and embed", points: ["Expand to more teams and use cases", "Switch on cost, quality and governance monitoring", "Hand over a roadmap for enterprise scale"] },
];

type GovernedStage = { title: string; body: string; accent: string; icon: LucideIcon; };

const GOVERNED_STAGES: GovernedStage[] = [
  { title: "Identity", body: "SSO, role-based access and per-source authorisation. Who is asking — human or agent — is proven before anything else runs.", accent: "#0D9488", icon: Fingerprint },
  { title: "Pre-check", body: "Policy, safety and budget are checked before a single token is spent. Unsafe or out-of-policy requests stop here, not later.", accent: "#0EA5E9", icon: Filter },
  { title: "Planner", body: "The request is decomposed into a step-by-step, reviewable plan. That plan becomes the reference the rest of the path is judged against.", accent: "#6366F1", icon: Route },
  { title: "Grounding", body: "Retrieval is restricted to sources this identity is allowed to see. Every fact that enters the prompt carries its source with it.", accent: "#8B5CF6", icon: BookOpen },
  { title: "Router", body: "The cheapest capable model is chosen per step, with fallbacks in place. Cost, latency and quality are traded explicitly, not by accident.", accent: "#D946EF", icon: Cpu },
  { title: "Tools", body: "Every tool call is scoped, logged and reversible. An agent can only act inside the boundary its identity and policy allow.", accent: "#F43F5E", icon: Plug },
  { title: "Verifier", body: "Output is checked against the plan, the policy and the source of truth. Anything that fails is rerouted, retried or blocked.", accent: "#F59E0B", icon: CheckCheck },
  { title: "Audit", body: "Every stage is written to an immutable, board-ready record. It is the same evidence auditors and regulators ask for, already assembled.", accent: "#10B981", icon: ScrollText },
];

const PRINCIPLES_DATA = [
  { title: "Governed from day one.", body: "Guardrails, lineage and audit live in the execution path, not bolted on after launch." },
  { title: "Agnostic by design.", body: "Any model, any cloud, any framework. No customer has to bet on one vendor." },
  { title: "Outcomes over demos.", body: "Every build is tied to a growth or productivity number agreed before we start." },
  { title: "Build once, reuse well.", body: "What we learn in one engagement makes the next faster and safer." },
  { title: "Built with partners.", body: "We scale through systems integrators and telecom partners." },
];

// ── Styles ──────────────────────────────────────────────────────────────────

const CSS = `
@keyframes fadeUp { from { opacity: 0; transform: translate3d(0, 28px, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@keyframes floatDelayed { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
@keyframes pulseGlow { 0%, 100% { opacity: 0.35; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.14); } }
@keyframes shimmerText { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
@keyframes iconBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }

.hero-word { opacity: 0; animation: fadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
.float-card { animation: float 5s ease-in-out infinite; }
.float-card-delayed { animation: floatDelayed 5.5s ease-in-out infinite; animation-delay: 1s; }
.glow-pulse { animation: pulseGlow 9s ease-in-out infinite; }
.icon-bob { animation: iconBob 3.2s ease-in-out infinite; }

.shimmer-teal {
  background: linear-gradient(90deg, #0D9488 0%, #38D0DE 50%, #0D9488 100%);
  background-size: 200% auto;
  -webkit-background-clip: text; 
  background-clip: text; 
  color: transparent;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  white-space: nowrap; 
  animation: shimmerText 7s linear infinite;
}

.lift {
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}
.lift:hover { transform: translateY(-4px); }

/* ── Premium Senior Designer System ─────────────────────────────────────── */
.sw-home {
  --bg-base: #F8FAFC;
  --bg-white: #FFFFFF;
  --ink: #0B1B36;
  --ink-soft: #334155;
  --muted: #64748B;
  --rule: #E2E8F0;
  --rule-strong: #CBD5E1;
  --cyan: #00B2FF;
  --teal: #0D9488;
  --blue: #004EFF;
  
  /* Soft Mesh Gradients */
  --mesh-1: radial-gradient(at 0% 0%, rgba(0, 178, 255, 0.05) 0px, transparent 50%),
             radial-gradient(at 100% 0%, rgba(13, 148, 136, 0.05) 0px, transparent 50%),
             radial-gradient(at 100% 100%, rgba(0, 78, 255, 0.03) 0px, transparent 50%);
  --mesh-2: radial-gradient(at 100% 100%, rgba(0, 178, 255, 0.04) 0px, transparent 50%),
             radial-gradient(at 0% 100%, rgba(13, 148, 136, 0.04) 0px, transparent 50%);
}
.sw-home *, .sw-home *::before, .sw-home *::after { box-sizing: border-box; }

@keyframes sw-fade { from { opacity: 0; transform: translate3d(0, 20px, 0); } to { opacity: 1; transform: none; } }
@keyframes sw-pulse { 0%, 100% { opacity: .3; transform: scale(.8); } 50% { opacity: 1; transform: scale(1); } }
@keyframes sw-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }

/* Sections */
.sw-section { position: relative; }
.sw-section--base { background-color: var(--bg-base); background-image: var(--mesh-1); }
.sw-section--white { background-color: var(--bg-white); }
.sw-section--base, .sw-section--white { border-top: 1px solid var(--rule); }

/* Typography */
.sw-eyebrow {
  display: inline-flex; align-items: center; gap: .65rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: .7rem; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
  color: var(--teal);
}
.sw-eyebrow__dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--cyan);
  animation: sw-pulse 2.6s ease-in-out infinite;
  box-shadow: 0 0 8px var(--cyan);
}

.sw-h2 {
  margin-top: 1.25rem; font-size: clamp(2rem, 3.5vw, 2.85rem);
  line-height: 1.08; letter-spacing: -.035em; font-weight: 800; color: var(--ink);
}
.sw-h2 em { font-style: normal; color: var(--teal); }
.sw-lede { margin-top: 1.25rem; max-width: 34rem; font-size: 1.05rem; line-height: 1.7; color: var(--muted); font-weight: 450; }

.sw-head { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 3rem; }
@media (min-width: 768px) {
  .sw-head { flex-direction: row; align-items: flex-end; justify-content: space-between; }
  .sw-head > :first-child { max-width: 40rem; }
}

/* Glass Panels */
.sw-glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

/* Pillars */
.sw-pillars { display: grid; gap: 1.5rem; }
.sw-pillar-card {
  position: relative; display: flex; flex-direction: column; padding: 2.25rem;
  border-radius: 20px; overflow: hidden;
  background: var(--bg-white);
  border: 1px solid var(--rule);
  box-shadow: 0 4px 20px -5px rgba(11, 27, 54, 0.03);
  transition: transform .5s cubic-bezier(.16,1,.3,1), border-color .4s, box-shadow .4s;
}
.sw-pillar-card:hover {
  transform: translateY(-4px);
  border-color: var(--c);
  box-shadow: 0 20px 40px -15px rgba(0, 178, 255, 0.15);
}
.sw-pillar-card__glow {
  position: absolute; top: 0; left: 0; right: 0; height: 4px;
  background: var(--c); opacity: 0.8;
}
.sw-pillar-card__bg {
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(circle at 100% 0%, var(--tint) 0%, transparent 60%);
}
.sw-pillar-card__head { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; position: relative; z-index: 1; }
.sw-pillar-card__icon {
  display: flex; align-items: center; justify-content: center;
  width: 3.5rem; height: 3.5rem; border-radius: 14px;
  background: var(--bg-white); border: 1px solid var(--rule);
  box-shadow: 0 4px 12px rgba(11, 27, 54, 0.04); color: var(--c);
  transition: transform .4s cubic-bezier(.16,1,.3,1);
}
.sw-pillar-card:hover .sw-pillar-card__icon { transform: scale(1.08); }
.sw-pillar-card__name { font-size: 1.5rem; font-weight: 800; letter-spacing: -.03em; color: var(--ink); line-height: 1.1; }
.sw-pillar-card__tag {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: .65rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
  padding: .35rem .6rem; border-radius: 6px; display: inline-block; margin-top: .4rem;
  background: var(--tint); color: var(--c); border: 1px solid var(--c)30;
}
.sw-pillar-card__summary { font-size: .95rem; line-height: 1.7; color: var(--ink-soft); position: relative; z-index: 1; }
.sw-pillar-card__chips { margin-top: 1.75rem; display: flex; flex-wrap: wrap; gap: .5rem; position: relative; z-index: 1; }
.sw-chip {
  font-size: .75rem; font-weight: 600; letter-spacing: .02em;
  padding: .4rem .75rem; border-radius: 99px; border: 1px solid var(--rule); color: var(--ink-soft); background: var(--bg-base);
  text-decoration: none; transition: all .3s cubic-bezier(.16,1,.3,1);
}
.sw-chip:hover { border-color: var(--c); color: var(--c); background: var(--bg-white); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.04); }

/* Callout */
.sw-callout {
  position: relative; margin-top: 2.5rem; padding: 2.5rem; border-radius: 20px;
  background: var(--ink); color: #E2E8F0; box-shadow: 0 20px 40px -10px rgba(11, 27, 54, 0.2); overflow: hidden;
}
.sw-callout::before {
  content: "360°"; position: absolute; right: -1rem; bottom: -3rem;
  font-size: 9rem; font-weight: 900; letter-spacing: -.06em; color: var(--cyan); opacity: 0.08;
  pointer-events: none; user-select: none; line-height: 1;
}
.sw-callout__label {
  display: inline-block; font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: .7rem; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
  color: var(--cyan); padding-bottom: 1rem; position: relative;
}
.sw-callout__label::after {
  content: ""; position: absolute; left: 0; bottom: 0; width: 2rem; height: 2px;
  background: var(--cyan); transform-origin: left; animation: sw-draw .9s .3s cubic-bezier(.16,1,.3,1) both;
}
.sw-callout p { margin-top: 1rem; font-size: 1rem; line-height: 1.7; position: relative; z-index: 1; }
.sw-callout strong { color: #fff; font-weight: 700; }

/* Bento App Grid */
.sw-app-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
@media (min-width: 768px) { .sw-app-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .sw-app-grid { grid-template-columns: repeat(3, 1fr); } }

.sw-app-card {
  background: var(--bg-white); border: 1px solid var(--rule); border-radius: 16px; padding: 2rem;
  display: flex; flex-direction: column; transition: transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s;
}
.sw-app-card:hover { transform: translateY(-4px); box-shadow: 0 16px 30px -10px rgba(0, 178, 255, 0.1); border-color: var(--rule-strong); }
.sw-app-card__top { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem; }
.sw-app-card__industry { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .65rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--teal); }
.sw-app-card__status { 
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .6rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; 
  color: var(--blue); padding: .25rem .5rem; background: rgba(0, 78, 255, 0.08); border-radius: 6px; white-space: nowrap; border: 1px solid rgba(0, 78, 255, 0.15);
}
.sw-app-card__status[data-status="Early access"] { color: #D97706; background: #FEF3C7; border-color: #FDE68A; }
.sw-app-card__status[data-status="Tailored build"] { color: var(--muted); background: var(--bg-base); border-color: var(--rule); }
.sw-app-card__name { font-size: 1.25rem; font-weight: 800; color: var(--ink); letter-spacing: -.02em; }
.sw-app-card__desc { font-size: .9rem; line-height: 1.6; color: var(--muted); margin-top: .5rem; }
.sw-app-card__divider { height: 1px; background: var(--rule); margin: 1.5rem 0; }
.sw-app-card__impact-label { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .65rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-soft); }
.sw-app-card__impact { font-size: .9rem; line-height: 1.6; color: var(--ink); font-weight: 500; margin-top: .4rem; }

/* Timeline & Execution */
.sw-month-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-bottom: 3rem; }
@media (min-width: 768px) { .sw-month-grid { grid-template-columns: repeat(3, 1fr); } }

.sw-month-card { background: var(--bg-white); border: 1px solid var(--rule); border-radius: 16px; padding: 2rem; position: relative; box-shadow: 0 4px 20px -5px rgba(11, 27, 54, 0.03); }
.sw-month-card::before { content: ""; position: absolute; top: 0; left: 2rem; right: 2rem; height: 3px; background: var(--rule-strong); border-radius: 0 0 3px 3px; transition: background .3s; }
.sw-month-card:hover::before { background: var(--cyan); }
.sw-month-card__month { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .75rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--cyan); }
.sw-month-card__title { font-size: 1.25rem; font-weight: 800; color: var(--ink); margin-top: .5rem; margin-bottom: 1.5rem; }
.sw-month-card__list { display: flex; flex-direction: column; gap: 1rem; }
.sw-month-card__item { display: flex; align-items: flex-start; gap: .75rem; font-size: .9rem; line-height: 1.5; color: var(--ink-soft); }
.sw-month-card__item svg { flex-shrink: 0; margin-top: .15rem; width: 1.1rem; height: 1.1rem; color: var(--teal); }

.sw-execution-box { background: var(--bg-white); border: 1px solid var(--rule); border-radius: 20px; overflow: hidden; box-shadow: 0 12px 40px -15px rgba(0,178,255,0.1); }
.sw-execution-head { display: flex; flex-direction: column; gap: 1rem; border-bottom: 1px solid var(--rule); padding: 2rem; background: var(--bg-base); }
@media (min-width: 640px) { .sw-execution-head { flex-direction: row; align-items: flex-end; justify-content: space-between; } }
.sw-execution-badge {
  display: inline-flex; align-items: center; gap: .5rem; padding: .5rem 1rem;
  background: var(--bg-white); border: 1px solid var(--rule-strong); border-radius: 99px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .7rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--ink);
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.sw-execution-grid { display: grid; grid-template-columns: 1fr; gap: 1px; background: var(--rule); }
@media (min-width: 640px) { .sw-execution-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .sw-execution-grid { grid-template-columns: repeat(4, 1fr); } }

.sw-execution-node { background: var(--bg-white); padding: 2rem; display: flex; flex-direction: column; transition: background .3s; }
.sw-execution-node:hover { background: var(--bg-base); }
.sw-execution-node__icon { width: 2.5rem; height: 2.5rem; border-radius: 10px; background: var(--bg-base); border: 1px solid var(--rule); display: flex; align-items: center; justify-content: center; color: var(--c); margin-bottom: 1.25rem; transition: transform .3s; }
.sw-execution-node:hover .sw-execution-node__icon { transform: scale(1.1); border-color: var(--c); }
.sw-execution-node__title { font-size: 1rem; font-weight: 800; color: var(--ink); letter-spacing: -.01em; }
.sw-execution-node__body { font-size: .85rem; line-height: 1.6; color: var(--muted); margin-top: .5rem; }

/* Principles */
.sw-principles { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
@media (min-width: 640px) { .sw-principles { grid-template-columns: repeat(2, 1fr); } }
.sw-principle { 
  padding: 2.25rem; border-radius: 16px; background: var(--bg-white); border: 1px solid var(--rule); 
  transition: all .4s cubic-bezier(.16,1,.3,1); position: relative; overflow: hidden;
}
.sw-principle::before { content: ""; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--cyan); opacity: 0; transition: opacity .4s; }
.sw-principle:hover { border-color: var(--rule-strong); box-shadow: 0 10px 30px -10px rgba(0, 178, 255, 0.08); transform: translateY(-2px); }
.sw-principle:hover::before { opacity: 1; }
.sw-principle__title { font-size: 1.15rem; font-weight: 800; color: var(--ink); display: flex; align-items: center; gap: .75rem; }
.sw-principle__body { margin-top: .6rem; font-size: .95rem; line-height: 1.7; color: var(--muted); }

/* Buttons */
.sw-btn { display: inline-flex; align-items: center; gap: .5rem; padding: .85rem 1.5rem; font-size: .9rem; font-weight: 700; text-decoration: none; border-radius: 10px; transition: all .35s cubic-bezier(.16,1,.3,1); }
.sw-btn--ink { background: var(--ink); color: #fff; box-shadow: 0 4px 12px rgba(11,27,54,0.15); }
.sw-btn--ink:hover { background: #13294B; box-shadow: 0 8px 24px rgba(11,27,54,0.25); transform: translateY(-1px); }
.sw-btn--outline { border: 1px solid var(--rule-strong); color: var(--ink); background: var(--bg-white); }
.sw-btn--outline:hover { border-color: var(--cyan); color: var(--teal); box-shadow: 0 8px 20px -8px rgba(0,178,255,0.15); transform: translateY(-1px); }
.sw-btn svg { transition: transform .35s cubic-bezier(.16,1,.3,1); }
.sw-btn:hover svg { transform: translateX(3px); }

/* Reveal Animations */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .sw-reveal { animation: sw-fade linear both; animation-timeline: view(); animation-range: entry 8% cover 30%; }
  }
}

@media (prefers-reduced-motion: reduce) {
  .sw-home *, .sw-home *::before, .sw-home *::after { animation-duration: .001ms !important; animation-iteration-count: 1 !important; transition-duration: .001ms !important; }
  .shimmer-teal { -webkit-text-fill-color: currentColor !important; color: inherit !important; background: none !important; }
}
`;

function GrowthWorxLogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gw-bar-grad" x1="4" y1="6" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00F5D4" /><stop offset="100%" stopColor="#009E8E" />
        </linearGradient>
      </defs>
      <rect x="4" y="25" width="6.5" height="10" rx="2" fill="url(#gw-bar-grad)" />
      <rect x="13" y="19" width="6.5" height="16" rx="2" fill="url(#gw-bar-grad)" />
      <rect x="22" y="13" width="6.5" height="22" rx="2" fill="url(#gw-bar-grad)" />
      <rect x="31" y="6" width="6.5" height="29" rx="2" fill="url(#gw-bar-grad)" />
    </svg>
  );
}

function FlowWorxLogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="fw-stack-grad" x1="20" y1="4" x2="20" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00B2FF" /><stop offset="100%" stopColor="#004EFF" />
        </linearGradient>
      </defs>
      <path d="M20 5.5L33.5 13L20 20.5L6.5 13L20 5.5Z" stroke="url(#fw-stack-grad)" strokeWidth="3.6" strokeLinejoin="round" />
      <path d="M6.5 20L20 27.5L33.5 20" stroke="url(#fw-stack-grad)" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 26.8L20 34.3L33.5 26.8" stroke="url(#fw-stack-grad)" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrustWorxLogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tw-shield-grad" x1="20" y1="4" x2="20" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00B2FF" /><stop offset="100%" stopColor="#004EFF" />
        </linearGradient>
      </defs>
      <path d="M20 4.5L7.5 9.5V18.8C7.5 26.6 12.8 33.1 20 35.5C27.2 33.1 32.5 26.6 32.5 18.8V9.5L20 4.5Z" stroke="url(#tw-shield-grad)" strokeWidth="3.4" strokeLinejoin="round" />
      <path d="M14.2 19.8L18.2 23.8L26.2 15.8" stroke="url(#tw-shield-grad)" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  const logobyPillar: Record<string, (p: { className?: string }) => JSX.Element> = {
    GrowthWorx: GrowthWorxLogoIcon,
    FlowWorx: FlowWorxLogoIcon,
    TrustWorx: TrustWorxLogoIcon,
  };

  return (
    <div className="sw-home bg-white">
      <style>{CSS}</style>

      {/* ═══════════════════════════════════════════════════════════
          1. HERO (Unchanged)
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-white lg:min-h-[calc(100vh-80px)] flex flex-col justify-between">
        <div
          className="absolute inset-0 z-0 w-full h-full bg-cover bg-[center_65%] bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
          role="img"
          aria-label="SourceWorx — the 360° AI company for growth, productivity and governance"
        />
        <div
          className="glow-pulse pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-[#0D9488]/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex items-center py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
            <div className="lg:col-span-6 xl:col-span-5 relative z-20">
              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[48px] bg-white/85 blur-2xl"
                aria-hidden="true"
              />

              <div
                className="hero-word lift inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm px-4 py-1.5 shadow-sm"
                style={{ animationDelay: "0ms" }}
              >
                <Layers className="h-4 w-4 text-[#0D9488]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
                  360° <span className="mx-1 text-slate-300">·</span> The 360° AI company
                </span>
              </div>

              <h1 className="mt-4 text-[44px] font-extrabold leading-[1.05] tracking-tight text-[#0b1b36] sm:text-5xl lg:text-[52px]">
                <span className="hero-word block" style={{ animationDelay: "90ms" }}>
                  Grow with AI.
                </span>
                <span className="hero-word block" style={{ animationDelay: "190ms" }}>
                  Run on AI.
                </span>
                <span className="hero-word block" style={{ animationDelay: "290ms" }}>
                  <span className="shimmer-teal">Govern every bit of it.</span>
                </span>
              </h1>
              <h2 className="sr-only">Enterprise AI Company</h2>

              <p
                className="hero-word mt-4 text-lg font-bold text-[#0b1b36] leading-snug"
                style={{ animationDelay: "400ms" }}
              >
                SourceWorx is the only partner you need for enterprise AI.
              </p>

              <p
                className="hero-word mt-3 text-base leading-relaxed text-slate-700 pr-4 font-medium"
                style={{ animationDelay: "480ms" }}
              >
                We build the applications that win you revenue, the platforms that make delivery faster and sharper, and the operating layer that keeps every model and agent accountable. One company, the full circle, live in 90 days.
              </p>

              <div
                className="hero-word mt-6 flex flex-wrap items-center gap-4"
                style={{ animationDelay: "560ms" }}
              >
                <Link
                  href="/contact"
                  className="lift inline-flex items-center gap-2 rounded-full bg-[#0D9488] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0b7a6e] hover:shadow-[0_14px_30px_-12px_rgba(13,148,136,0.6)]"
                >
                  Request a briefing
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#product-walkthrough"
                  className="lift inline-flex items-center gap-2 rounded-full border border-[#0D9488] bg-white px-6 py-3.5 text-sm font-semibold text-[#0D9488] hover:bg-teal-50 shadow-sm"
                >
                  See platforms and apps
                </Link>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-6 xl:col-span-7 relative h-[380px] xl:h-[420px] z-20">
              <div className="float-card lift absolute top-[-8%] left-[69%] -translate-x-1/2 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md z-20">
                <GrowthWorxLogoIcon className="h-8 w-8 shrink-0" />
                <div className="flex flex-col">
                  <p className="font-display text-sm font-bold text-[#0b1b36] leading-tight">GrowthWorx</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">AI for Growth</p>
                </div>
              </div>

              <div className="float-card-delayed lift absolute bottom-[20%] left-[12%] flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md z-20">
                <FlowWorxLogoIcon className="h-8 w-8 shrink-0" />
                <div className="flex flex-col">
                  <p className="font-display text-sm font-bold text-[#0b1b36] leading-tight">FlowWorx</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">AI for Productivity</p>
                </div>
              </div>

              <div className="float-card lift absolute bottom-[20%] right-0 xl:right-[-20%] flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md z-20">
                <TrustWorxLogoIcon className="h-8 w-8 shrink-0" />
                <div className="flex flex-col">
                  <p className="font-display text-sm font-bold text-[#0b1b36] leading-tight">TrustWorx</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">AI Governance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full z-30 bg-white/75 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-x-4 gap-y-2 py-4">
              <div className="flex items-center gap-2.5">
                <Layers className="icon-bob h-5 w-5 text-[#0D9488] shrink-0" />
                <span className="text-sm font-bold text-[#0b1b36]">End-to-end AI solutions</span>
              </div>
              <span className="hidden md:inline text-slate-300 font-light select-none" aria-hidden="true">|</span>
              <div className="flex items-center gap-2.5">
                <Rocket className="icon-bob h-5 w-5 text-[#0D9488] shrink-0" style={{ animationDelay: "0.4s" }} />
                <span className="text-sm font-bold text-[#0b1b36]">Faster business outcomes</span>
              </div>
              <span className="hidden md:inline text-slate-300 font-light select-none" aria-hidden="true">|</span>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="icon-bob h-5 w-5 text-[#0D9488] shrink-0" style={{ animationDelay: "0.8s" }} />
                <span className="text-sm font-bold text-[#0b1b36]">Built for enterprise trust</span>
              </div>
              <span className="hidden md:inline text-slate-300 font-light select-none" aria-hidden="true">|</span>
              <div className="flex items-center gap-2.5">
                <Zap className="icon-bob h-5 w-5 text-[#0D9488] shrink-0" style={{ animationDelay: "1.2s" }} />
                <span className="text-sm font-bold text-[#0b1b36]">From strategy to scale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. THE 360° AI COMPANY
          ═══════════════════════════════════════════════════════════ */}
      <section className="sw-section sw-section--base py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="self-start lg:sticky lg:top-24 lg:col-span-5 sw-reveal">
              <p className="sw-eyebrow">
                <span className="sw-eyebrow__dot" aria-hidden="true" />
                The 360° AI company
              </p>
              <h2 className="sw-h2">
                AI that earns.<br />AI that delivers.<br />
                <em>AI you can trust.</em>
              </h2>
              <p className="sw-lede">
                Most firms sell one slice: a growth tool, an automation project
                or a governance product. Enterprises need all three working
                together, so we built one company around them.
              </p>

              <div className="sw-callout">
                <p className="sw-callout__label">How the circle closes</p>
                <p>
                  <strong>GrowthWorx</strong> and <strong>FlowWorx</strong> are
                  what AI does for the business. <strong>TrustWorx</strong> is
                  what lets it keep doing them at scale, safely, and at a cost
                  you can defend. Everything we ship runs on the same governed
                  path.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 sw-reveal flex flex-col gap-6">
              {PILLARS.map((pillar) => {
                const PillarIcon = logobyPillar[pillar.name];
                return (
                  <article key={pillar.name} className="sw-pillar-card" style={{ "--c": pillar.color, "--tint": pillar.tint } as CSSProperties}>
                    <div className="sw-pillar-card__glow" />
                    <div className="sw-pillar-card__bg" />
                    
                    <div className="sw-pillar-card__head">
                      <div className="sw-pillar-card__icon">
                        <PillarIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="sw-pillar-card__name">{pillar.name}</h3>
                        <span className="sw-pillar-card__tag">
                          {pillar.subtitle}
                        </span>
                      </div>
                    </div>
                    <p className="sw-pillar-card__summary">{pillar.summary}</p>
                    <div className="sw-pillar-card__chips">
                      {pillar.apps.map((app) => (
                        <Link key={app} href="#" className="sw-chip">{app}</Link>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. PRODUCT WALKTHROUGH (Bento Grid)
          ═══════════════════════════════════════════════════════════ */}
      <section id="product-walkthrough" className="sw-section sw-section--white scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-head sw-reveal">
            <div>
              <p className="sw-eyebrow">
                <span className="sw-eyebrow__dot" aria-hidden="true" />
                Product walkthrough
              </p>
              <h2 className="sw-h2">Inside the platforms <em>and applications.</em></h2>
              <p className="sw-lede">
                Switch between the three pillars to see the apps and platforms
                that sit under each outcome.
              </p>
            </div>
            <Link href="/solutions" className="sw-btn sw-btn--outline shrink-0 self-start md:self-end">
              View all solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="sw-app-grid sw-reveal">
            {WALKTHROUGH_APPS.map((app) => (
              <div key={app.name} className="sw-app-card">
                <div className="sw-app-card__top">
                  <span className="sw-app-card__industry">{app.industry}</span>
                  <span className="sw-app-card__status" data-status={app.status}>{app.status}</span>
                </div>
                <h4 className="sw-app-card__name">{app.name}</h4>
                <p className="sw-app-card__desc">{app.desc}</p>
                <div className="sw-app-card__divider" />
                <p className="sw-app-card__impact-label">What it moves</p>
                <p className="sw-app-card__impact">{app.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. DELIVERY CADENCE + EXECUTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="sw-section sw-section--base py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-reveal max-w-2xl">
            <p className="sw-eyebrow">
              <span className="sw-eyebrow__dot" aria-hidden="true" />
              Delivery cadence
            </p>
            <h2 className="sw-h2">
              From first conversation to production <em>in 90 days.</em>
            </h2>
            <p className="sw-lede">
              Every engagement, in every pillar, runs to the same plan: a
              growth build, a productivity rollout or a Singularity deployment.
            </p>
          </div>

          <div className="sw-month-grid sw-reveal mt-12">
            {MONTHS.map((m) => (
              <div key={m.month} className="sw-month-card">
                <span className="sw-month-card__month">{m.month}</span>
                <h4 className="sw-month-card__title">{m.title}</h4>
                <div className="sw-month-card__list">
                  {m.points.map((pt, i) => (
                    <div key={i} className="sw-month-card__item">
                      <Check strokeWidth={3} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="sw-execution-box sw-reveal">
            <div className="sw-execution-head">
              <div>
                <p className="sw-eyebrow">
                  <span className="sw-eyebrow__dot" aria-hidden="true" />
                  Execution sequence
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Every request walks the same path — all stages visible end to end.
                </p>
              </div>
              <span className="sw-execution-badge">
                <Lock className="h-3.5 w-3.5 text-[#0D9488]" />
                No bypass possible
              </span>
            </div>

            <div className="sw-execution-grid">
              {GOVERNED_STAGES.map((stage) => {
                const Icon = stage.icon;
                return (
                  <div key={stage.title} className="sw-execution-node" style={{ "--c": stage.accent } as CSSProperties}>
                    <div className="sw-execution-node__icon">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <h4 className="sw-execution-node__title">{stage.title}</h4>
                    <p className="sw-execution-node__body">{stage.body}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-6 sm:px-8 sm:py-6 bg-white border-t border-[var(--rule)]">
              <div className="flex items-start gap-3 border-l-[3px] border-[var(--cyan)] pl-5 py-2">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--teal)]" />
                <p className="text-[14px] leading-relaxed text-[var(--ink-soft)]">
                  <strong className="font-bold text-[var(--ink)]">One request, one governed path.</strong>{" "}
                  Nothing reaches a model or a system of action without passing
                  through, so governance can’t be bypassed and what happens flows
                  straight back into the loop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. OPERATING PRINCIPLES
          ═══════════════════════════════════════════════════════════ */}
      <section className="sw-section sw-section--white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="sw-reveal lg:col-span-5">
              <p className="sw-eyebrow">
                <span className="sw-eyebrow__dot" aria-hidden="true" />
                Operating principles
              </p>
              <h2 className="sw-h2">What we <em>stand on.</em></h2>
              <p className="sw-lede">
                SourceWorx started by building AI software for real operations:
                a care platform for specialty providers, finance operations for
                an IT services firm, a CRM for an export house, an online
                tailoring brand. Each build taught us the same lesson — AI only
                pays off when it moves a business number, and only keeps paying
                off when someone can see, control and prove what it does.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/about" className="sw-btn sw-btn--ink">
                  About SourceWorx
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/platform" className="sw-btn sw-btn--outline">
                  Platform architecture
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="sw-reveal lg:col-span-7">
              <div className="sw-principles">
                {PRINCIPLES_DATA.map((item) => (
                  <div key={item.title} className="sw-principle">
                    <h3 className="sw-principle__title">{item.title}</h3>
                    <p className="sw-principle__body">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. FAQ
          ═══════════════════════════════════════════════════════════ */}
      <section className="sw-section sw-section--base py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="sw-reveal lg:col-span-4">
              <p className="sw-eyebrow">
                <span className="sw-eyebrow__dot" aria-hidden="true" />
                Common questions
              </p>
              <h2 className="sw-h2">How engagements <em>work.</em></h2>
              <p className="sw-lede">
                Answers on our 90-day delivery plan, in-path governance, IP
                ownership and partner licensing.
              </p>
            </div>
            <div className="sw-reveal lg:col-span-8">
              <FaqAccordion items={HOME_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </div>
  );
}