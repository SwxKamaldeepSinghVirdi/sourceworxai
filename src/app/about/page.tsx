import type { Metadata } from "next";
import { Check, Target, Compass, ShieldCheck, Zap } from "lucide-react";
import { PROOF_TILES } from "@/data/site-content";
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
  { title: "The full circle.", body: "Growth, productivity and governance from one accountable team, not three vendors.", icon: Layers },
  { title: "Working software first.", body: "Most engagements start from a product, not a blank page.", icon: Zap },
  { title: "Agnostic by design.", body: "Any model, any cloud, any agent framework.", icon: Globe },
  { title: "Governed from day one.", body: "Every AI step is logged, routed and auditable.", icon: ShieldCheck },
  { title: "Outcome-led.", body: "We agree the number before we build.", icon: Target },
  { title: "Built with partners.", body: "Delivered through systems integrators and telecom partners.", icon: Compass },
];

const VALUES = [
  { title: "Open by default.", body: "We build on open standards so customers are never locked in." },
  { title: "Agnostic by design.", body: "Any model, any cloud, any agent framework." },
  { title: "Outcomes over demos.", body: "We agree the number first, then build what moves it." },
  { title: "Governed from day one.", body: "Safeguards live in the path, not in a slide." },
  { title: "Built with partners.", body: "We grow through the integrators and providers our customers already trust." },
];

const CSS = `
@keyframes fadeUp { from { opacity: 0; transform: translate3d(0, 28px, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@keyframes pulseGlow { 0%, 100% { opacity: 0.35; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.14); } }

.hero-word { opacity: 0; animation: fadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
.glow-pulse { animation: pulseGlow 9s ease-in-out infinite; }

.sw-about {
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
  
  --mesh-1: radial-gradient(at 0% 0%, rgba(0, 178, 255, 0.05) 0px, transparent 50%),
             radial-gradient(at 100% 0%, rgba(13, 148, 136, 0.05) 0px, transparent 50%),
             radial-gradient(at 100% 100%, rgba(0, 78, 255, 0.03) 0px, transparent 50%);
}
.sw-about *, .sw-about *::before, .sw-about *::after { box-sizing: border-box; }

@keyframes sw-fade { from { opacity: 0; transform: translate3d(0, 20px, 0); } to { opacity: 1; transform: none; } }
@keyframes sw-pulse { 0%, 100% { opacity: .3; transform: scale(.8); } 50% { opacity: 1; transform: scale(1); } }

/* Sections */
.sw-section { position: relative; }
.sw-section--base { background-color: var(--bg-base); background-image: var(--mesh-1); }
.sw-section--white { background-color: var(--bg-white); }
.sw-section--base, .sw-section--white { border-top: 1px solid var(--rule); }

/* Typography & UI */
.sw-eyebrow {
  display: inline-flex; align-items: center; gap: .65rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: .7rem; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
  color: var(--teal);
}
.sw-eyebrow__dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--cyan);
  animation: sw-pulse 2.6s ease-in-out infinite; box-shadow: 0 0 8px var(--cyan);
}
.sw-h2 {
  margin-top: 1.25rem; font-size: clamp(2rem, 3.5vw, 2.85rem);
  line-height: 1.08; letter-spacing: -.035em; font-weight: 800; color: var(--ink);
}
.sw-h2 em { font-style: normal; color: var(--teal); }
.sw-lede { margin-top: 1.25rem; max-width: 34rem; font-size: 1.05rem; line-height: 1.7; color: var(--muted); font-weight: 450; }

/* Hero */
.sw-about-hero {
  background: linear-gradient(135deg, #07132A 0%, #0B1B36 100%);
  position: relative; overflow: hidden;
}
.sw-about-hero::before {
  content: ""; position: absolute; top: -20%; left: -10%; width: 50%; height: 80%;
  background: radial-gradient(circle, rgba(0, 178, 255, 0.15) 0%, transparent 70%);
  pointer-events: none;
}
.sw-about-hero::after {
  content: ""; position: absolute; bottom: -20%; right: -10%; width: 50%; height: 80%;
  background: radial-gradient(circle, rgba(13, 148, 136, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

/* Proof Strip */
.sw-proof-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;
}
@media (min-width: 768px) { .sw-proof-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1024px) { .sw-proof-grid { grid-template-columns: repeat(5, 1fr); } }
.sw-proof-tile {
  border-left: 3px solid var(--cyan); padding-left: 1.25rem; padding-top: 0.5rem; padding-bottom: 0.5rem;
  transition: transform .3s;
}
.sw-proof-tile:hover { transform: translateX(4px); }
.sw-proof-tile__figure {
  font-size: 2.25rem; font-weight: 800; letter-spacing: -.04em; color: var(--ink); line-height: 1;
}
.sw-proof-tile__label {
  margin-top: .5rem; font-size: .85rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: .05em;
}

/* Story & Why Choose */
.sw-story-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; }
@media (min-width: 1024px) { .sw-story-grid { grid-template-columns: 5fr 7fr; gap: 5rem; } }

.sw-why-card {
  background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px);
  border: 1px solid var(--rule); border-radius: 16px; padding: 1.75rem;
  transition: all .4s cubic-bezier(.16,1,.3,1);
  display: flex; flex-direction: column; gap: 1rem;
}
.sw-why-card:hover {
  background: var(--bg-white); border-color: var(--cyan);
  box-shadow: 0 12px 30px -10px rgba(0, 178, 255, 0.15); transform: translateY(-2px);
}
.sw-why-card__icon-wrap {
  width: 2.5rem; height: 2.5rem; border-radius: 10px; background: rgba(0, 178, 255, 0.1);
  color: var(--cyan); display: flex; align-items: center; justify-content: center;
}
.sw-why-card__title { font-size: 1.1rem; font-weight: 800; color: var(--ink); letter-spacing: -.01em; }
.sw-why-card__body { font-size: .9rem; line-height: 1.6; color: var(--muted); }

/* Vision & Mission */
.sw-vm-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 2.5rem; }
@media (min-width: 768px) { .sw-vm-grid { grid-template-columns: repeat(2, 1fr); } }
.sw-vm-card {
  border-radius: 24px; padding: 3rem 2.5rem; position: relative; overflow: hidden;
}
.sw-vm-card--dark {
  background: linear-gradient(135deg, #0B1B36 0%, #13294B 100%); color: #fff;
  border: 1px solid rgba(255,255,255,0.1);
}
.sw-vm-card--light {
  background: var(--bg-base); color: var(--ink);
  border: 1px solid var(--rule);
}
.sw-vm-label { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .7rem; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
.sw-vm-card--dark .sw-vm-label { color: var(--cyan); }
.sw-vm-card--light .sw-vm-label { color: var(--teal); }
.sw-vm-text { margin-top: 1.5rem; font-size: 1.35rem; font-weight: 700; line-height: 1.45; letter-spacing: -.02em; }
.sw-vm-card--dark .sw-vm-text { color: #fff; }
.sw-vm-card--light .sw-vm-text { color: var(--ink-soft); font-weight: 500; font-size: 1.15rem; }

/* Values Grid */
.sw-values-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 2.5rem; }
@media (min-width: 640px) { .sw-values-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .sw-values-grid { grid-template-columns: repeat(3, 1fr); } }

.sw-value-card {
  background: var(--bg-white); border: 1px solid var(--rule); border-radius: 16px; padding: 2rem;
  transition: all .4s cubic-bezier(.16,1,.3,1); position: relative; overflow: hidden;
}
.sw-value-card::before {
  content: ""; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--teal); opacity: 0; transition: opacity .4s;
}
.sw-value-card:hover {
  border-color: var(--rule-strong); box-shadow: 0 10px 30px -10px rgba(0, 178, 255, 0.08); transform: translateY(-2px);
}
.sw-value-card:hover::before { opacity: 1; }
.sw-value-card__title { font-size: 1.15rem; font-weight: 800; color: var(--ink); display: flex; align-items: center; gap: .75rem; }
.sw-value-card__body { margin-top: .65rem; font-size: .95rem; line-height: 1.6; color: var(--muted); }

/* Buttons */
.sw-btn { display: inline-flex; align-items: center; gap: .5rem; padding: .85rem 1.5rem; font-size: .9rem; font-weight: 700; text-decoration: none; border-radius: 10px; transition: all .35s cubic-bezier(.16,1,.3,1); }
.sw-btn--ink { background: var(--ink); color: #fff; box-shadow: 0 4px 12px rgba(11,27,54,0.15); }
.sw-btn--ink:hover { background: #13294B; box-shadow: 0 8px 24px rgba(11,27,54,0.25); transform: translateY(-1px); }
.sw-btn--outline { border: 1px solid var(--rule-strong); color: var(--ink); background: var(--bg-white); }
.sw-btn--outline:hover { border-color: var(--cyan); color: var(--teal); box-shadow: 0 8px 20px -8px rgba(0,178,255,0.15); transform: translateY(-1px); }

@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .sw-reveal { animation: sw-fade linear both; animation-timeline: view(); animation-range: entry 8% cover 30%; }
  }
}
@media (prefers-reduced-motion: reduce) {
  .sw-about *, .sw-about *::before, .sw-about *::after { animation-duration: .001ms !important; animation-iteration-count: 1 !important; transition-duration: .001ms !important; }
}
`;

// Fallbacks for icons since they weren't imported from Lucide in the original file
import { Layers, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="sw-about">
      <style>{CSS}</style>

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="sw-about-hero py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="hero-word text-[#00B2FF] font-mono text-[11px] font-bold uppercase tracking-[0.2em]" style={{ animationDelay: "0ms" }}>
              About SourceWorx
            </p>
            <h1 className="hero-word mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[56px] leading-[1.05]" style={{ animationDelay: "100ms" }}>
              About SourceWorx:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] to-[#38D0DE]">the 360° AI company</span>
            </h1>
            <p className="hero-word mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl font-medium" style={{ animationDelay: "200ms" }}>
              SourceWorx builds AI that grows the business, AI that makes delivery faster and sharper, and the platform that keeps all of it governed. We work in three pillars—GrowthWorx, FlowWorx and TrustWorx—and every product we ship runs on one governed foundation.
            </p>
          </div>
        </div>
      </section>

      {/* ─── At a Glance ────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#E2E8F0] py-16 relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-auto lg:max-w-7xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,178,255,0.1)]">
        <div className="px-6 sm:px-10 py-4">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#0D9488]">
            SourceWorx at a glance
          </p>
          <div className="mt-8 sw-proof-grid">
            {PROOF_TILES.map((tile) => (
              <div key={tile.label} className="sw-proof-tile">
                <p className="sw-proof-tile__figure">{tile.figure}</p>
                <p className="sw-proof-tile__label">{tile.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Story & Why Choose ─────────────────────────────────── */}
      <section className="sw-section sw-section--white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sw-story-grid">
            {/* Left: Story */}
            <div className="sw-reveal">
              <p className="sw-eyebrow">
                <span className="sw-eyebrow__dot" aria-hidden="true" />
                Our story
              </p>
              <h2 className="sw-h2">
                Born from real <em>operational software.</em>
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-[#334155]">
                <p>
                  SourceWorx started by building AI software for real operations: a care platform for specialty providers, finance operations for an IT services firm, a CRM for an export house, an online tailoring brand. Each build taught us the same thing.
                </p>
                <p>
                  AI only pays off when it moves a business number, and it only keeps paying off when someone can see, control and prove what it does.
                </p>
                <p>
                  So we organised the company around that lesson. <strong className="text-[#0B1B36]">GrowthWorx</strong> turns our client builds into industry applications that win revenue. <strong className="text-[#0B1B36]">FlowWorx</strong> gives delivery teams platforms such as RoomOS AI and ZTD that take the manual work out of programmes. <strong className="text-[#0B1B36]">TrustWorx</strong>, with Singularity at its core, governs every model and agent on one path. Three pillars, one company, the full circle.
                </p>
              </div>
            </div>

            {/* Right: Why Choose */}
            <div className="sw-reveal">
              <p className="sw-eyebrow">
                <span className="sw-eyebrow__dot" aria-hidden="true" />
                Why enterprises choose SourceWorx
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY_CHOOSE.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="sw-why-card">
                      <div className="sw-why-card__icon-wrap">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="sw-why-card__title">{item.title}</h3>
                        <p className="sw-why-card__body">{item.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Vision, Mission & Values ───────────────────────────── */}
      <section className="sw-section sw-section--base py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="sw-reveal max-w-2xl">
            <p className="sw-eyebrow">
              <span className="sw-eyebrow__dot" aria-hidden="true" />
              Vision, Mission and Values
            </p>
            <h2 className="sw-h2">
              Our Vision <em>and Mission.</em>
            </h2>
          </div>

          <div className="sw-vm-grid sw-reveal">
            <div className="sw-vm-card sw-vm-card--dark">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Target className="w-32 h-32 text-white" />
              </div>
              <span className="sw-vm-label">Our vision</span>
              <p className="sw-vm-text relative z-10">
                A world where every enterprise runs AI as reliably, safely and measurably as it runs its core business systems.
              </p>
            </div>
            
            <div className="sw-vm-card sw-vm-card--light">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Compass className="w-32 h-32 text-[#0B1B36]" />
              </div>
              <span className="sw-vm-label">Our mission</span>
              <p className="sw-vm-text relative z-10">
                Put AI to work across the full circle of the enterprise: growing revenue, raising the speed and quality of delivery, and governing every model and agent, on open, model-agnostic platforms that run on the infrastructure customers already own.
              </p>
            </div>
          </div>

          <div className="mt-16 sw-reveal">
            <h3 className="text-2xl font-extrabold text-[#0B1B36] tracking-tight">
              Our values
            </h3>
            <div className="sw-values-grid">
              {VALUES.map((val) => (
                <div key={val.title} className="sw-value-card">
                  <h4 className="sw-value-card__title">
                    <Check className="h-5 w-5 text-[#0D9488]" strokeWidth={3} />
                    {val.title}
                  </h4>
                  <p className="sw-value-card__body">{val.body}</p>
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