import { Suspense } from "react";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Globe, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request a Briefing | SourceWorx",
  description:
    "Book a 45-minute briefing on AI for growth, AI for productivity or AI governance. Bring a revenue target, a slow process or an AI estate.",
  keywords: ["enterprise AI consultation"],
};

const ASK_FOR = [
  {
    key: "growth",
    n: "01",
    pillar: "GrowthWorx",
    detail: "an industry application walkthrough, or a 90-day build",
    color: "#157A68",
  },
  {
    key: "flow",
    n: "02",
    pillar: "FlowWorx",
    detail: "a RoomOS AI pilot, or a ZTD proof of concept",
    color: "#2F5FC4",
  },
  {
    key: "trust",
    n: "03",
    pillar: "TrustWorx",
    detail: "Singularity on your own AI estate",
    color: "#5B46C9",
  },
  {
    key: "partner",
    n: "04",
    pillar: "Partnering",
    detail: "resell, deliver or license with us",
    color: "#0A142E",
  },
] as const;

const CSS = `
.sw-page{
  --ink:#0A142E;
  --paper:#F5F4F0;
  --rule:#E2E0D8;
  --teal:#157A68;
  --teal-bright:#54CDAC;
  background:var(--paper);
  -webkit-font-smoothing:antialiased;
}
.sw-page *,.sw-page *::before,.sw-page *::after{box-sizing:border-box}

/* ── keyframes ─────────────────────────────────────────── */
@keyframes sw-rise{from{transform:translateY(110%)}to{transform:translateY(0)}}
@keyframes sw-fade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes sw-draw{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes sw-marquee{to{transform:translateX(-50%)}}
@keyframes sw-pulse{0%,100%{opacity:.35;transform:scale(.85)}50%{opacity:1;transform:scale(1)}}
@keyframes sw-skel{0%,100%{opacity:.4}50%{opacity:.9}}

.sw-anim-rise{animation:sw-rise .95s cubic-bezier(.16,1,.3,1) both}
.sw-anim-fade{animation:sw-fade .8s cubic-bezier(.16,1,.3,1) both}

/* ── eyebrow ───────────────────────────────────────────── */
.sw-eyebrow{
  display:inline-flex;align-items:center;gap:.6rem;
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.7rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;
  color:var(--teal-bright);
}
.sw-dot{
  width:6px;height:6px;border-radius:50%;background:var(--teal-bright);
  animation:sw-pulse 2.6s ease-in-out infinite;
}
.sw-dot--ink{background:var(--teal)}

/* ── headline ──────────────────────────────────────────── */
.sw-h1{
  margin-top:1.5rem;
  font-size:clamp(2.6rem,6.2vw,4.75rem);
  line-height:.96;letter-spacing:-.035em;font-weight:700;
}
.sw-line{display:block;overflow:hidden;padding-bottom:.1em;margin-bottom:-.1em}
.sw-line>span{display:block}
.sw-accent{position:relative;color:var(--teal-bright);display:inline-block}
.sw-accent::after{
  content:"";position:absolute;left:0;right:.04em;bottom:.02em;height:2px;
  background:var(--teal-bright);transform-origin:left;
  animation:sw-draw .8s .95s cubic-bezier(.16,1,.3,1) both;
}

.sw-lede{margin-top:1.75rem;max-width:34rem;font-size:1.0625rem;line-height:1.7;color:#A9B2C4}

.sw-meta{display:flex;flex-wrap:wrap;gap:0 1.5rem;margin-top:2.25rem;padding:0;list-style:none}
.sw-meta li{
  position:relative;
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:#6B7A93;
  padding-left:1.5rem;
}
.sw-meta li::before{
  content:"";position:absolute;left:0;top:50%;width:.75rem;height:1px;
  background:currentColor;opacity:.5;
}
.sw-meta li:first-child{padding-left:0}
.sw-meta li:first-child::before{display:none}

/* ── marquee ───────────────────────────────────────────── */
.sw-marquee{
  position:relative;overflow:hidden;border-top:1px solid rgba(255,255,255,.09);
  -webkit-mask-image:linear-gradient(to right,transparent,#000 7%,#000 93%,transparent);
  mask-image:linear-gradient(to right,transparent,#000 7%,#000 93%,transparent);
}
.sw-marquee__track{display:flex;width:max-content;animation:sw-marquee 46s linear infinite}
.sw-marquee:hover .sw-marquee__track{animation-play-state:paused}
.sw-marquee__group{display:flex}
.sw-marquee__item{
  display:inline-flex;align-items:center;gap:.55rem;padding:.9rem 1.3rem;
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;
  color:rgba(255,255,255,.5);white-space:nowrap;
}
.sw-marquee__item::after{content:"/";margin-left:1.3rem;color:rgba(255,255,255,.16)}
.sw-marquee__dot{width:5px;height:5px;border-radius:50%;flex:none}

/* ── section heading ───────────────────────────────────── */
.sw-h2{
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.7rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;
  color:#7A8497;padding-bottom:.9rem;border-bottom:1px solid var(--rule);
}

/* ── ask list ──────────────────────────────────────────── */
.sw-ask{list-style:none;margin:1.5rem 0 0;padding:0;display:grid;gap:.5rem}
.sw-ask__item{
  position:relative;display:flex;align-items:flex-start;gap:.875rem;
  padding:1rem 1rem 1rem 1.125rem;
  border:1px solid var(--rule);background:#fff;text-decoration:none;
  transition:background .35s,border-color .35s,transform .5s cubic-bezier(.16,1,.3,1);
}
.sw-ask__item::before{
  content:"";position:absolute;left:-1px;top:-1px;bottom:-1px;width:2px;
  background:var(--c);transform:scaleY(0);transform-origin:top;
  transition:transform .5s cubic-bezier(.16,1,.3,1);
}
.sw-ask__item:hover,.sw-ask__item:focus-visible{background:#FCFBF8;transform:translateX(4px)}
.sw-ask__item:hover::before,.sw-ask__item:focus-visible::before{transform:scaleY(1)}
.sw-ask__item:focus-visible{outline:2px solid var(--teal);outline-offset:2px}
.sw-ask__num{
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.68rem;font-weight:700;letter-spacing:.1em;color:#B3BCCA;
  padding-top:.15rem;flex:none;
}
.sw-ask__pillar{
  display:block;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;
  color:var(--c);
}
.sw-ask__detail{display:block;margin-top:.25rem;font-size:.9rem;line-height:1.5;color:#4B5567}
.sw-ask__arrow{
  width:1rem;height:1rem;margin-left:auto;flex:none;color:#AEB6C4;
  opacity:0;transform:translate(-5px,5px);
  transition:opacity .35s,transform .45s cubic-bezier(.16,1,.3,1),color .35s;
}
.sw-ask__item:hover .sw-ask__arrow,.sw-ask__item:focus-visible .sw-ask__arrow{
  opacity:1;transform:none;color:var(--c);
}

/* ── direct details ────────────────────────────────────── */
.sw-details{border-top:1px solid var(--rule);padding-top:1.5rem}
.sw-details__label{
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.68rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#7A8497;
}
.sw-details dl{margin:1.25rem 0 0}
.sw-details__row{display:flex;align-items:flex-start;gap:.75rem;padding:.75rem 0}
.sw-details__row+.sw-details__row{border-top:1px solid var(--rule)}
.sw-details__row svg{width:1rem;height:1rem;color:var(--teal);flex:none;margin-top:.15rem}
.sw-details dt{font-size:.8rem;font-weight:600;color:var(--ink)}
.sw-details dd{margin:.1rem 0 0;font-size:.85rem;color:#5A6478}
.sw-link{
  color:var(--teal);text-decoration:none;
  background-image:linear-gradient(currentColor,currentColor);
  background-size:0 1px;background-repeat:no-repeat;background-position:0 100%;
  transition:background-size .4s cubic-bezier(.16,1,.3,1);
}
.sw-link:hover{background-size:100% 1px}

/* ── form frame ────────────────────────────────────────── */
.sw-frame{position:relative;background:#fff;border:1px solid var(--rule)}
.sw-frame::after{
  content:"";position:absolute;inset:0;pointer-events:none;
  box-shadow:0 1px 0 rgba(10,20,46,.03),0 18px 40px -28px rgba(10,20,46,.35);
}
.sw-tick{position:absolute;width:10px;height:10px;border:1px solid var(--ink);opacity:.4}
.sw-tick--tl{top:-1px;left:-1px;border-right:0;border-bottom:0}
.sw-tick--tr{top:-1px;right:-1px;border-left:0;border-bottom:0}
.sw-tick--bl{bottom:-1px;left:-1px;border-right:0;border-top:0}
.sw-tick--br{bottom:-1px;right:-1px;border-left:0;border-top:0}
.sw-frame__head{
  display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;
  padding:1rem 1.5rem;border-bottom:1px solid var(--rule);
}
.sw-frame__title{
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.7rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--ink);
}
.sw-frame__status{
  display:inline-flex;align-items:center;gap:.5rem;
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;color:#8A93A3;
}
.sw-frame__body{padding:1.75rem 1.5rem 2rem}
@media (min-width:640px){.sw-frame__head{padding:1.1rem 2rem}.sw-frame__body{padding:2.25rem 2rem 2.5rem}}

.sw-skel{display:grid;gap:1.25rem;padding-top:.5rem}
.sw-skel__bar{height:2.6rem;border-bottom:1px solid var(--rule);animation:sw-skel 1.6s ease-in-out infinite}

/* ── form field alignment (drop this block if ContactForm is already styled) ── */
.sw-form :where(label){
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.66rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#7A8497;
}
.sw-form :where(input,textarea,select){
  width:100%;background:transparent;border:0;border-bottom:1px solid var(--rule);
  border-radius:0;padding:.6rem 0;font-size:.95rem;color:var(--ink);
  transition:border-color .3s,box-shadow .3s;
}
.sw-form :where(input,textarea,select):focus{
  outline:none;border-bottom-color:var(--teal);box-shadow:0 1px 0 0 var(--teal);
}
.sw-form :where(textarea){min-height:7rem;resize:vertical}
.sw-form :where(button[type="submit"]){
  transition:transform .4s cubic-bezier(.16,1,.3,1),filter .3s;
}
.sw-form :where(button[type="submit"]):hover{transform:translateY(-1px);filter:brightness(1.08)}
.sw-form :where(button[type="submit"]):active{transform:translateY(0)}

/* ── scroll-linked reveal (progressive enhancement) ────── */
@supports (animation-timeline:view()){
  @media (prefers-reduced-motion:no-preference){
    .sw-reveal{
      animation:sw-fade linear both;
      animation-timeline:view();
      animation-range:entry 8% cover 30%;
    }
  }
}

/* ── reduced motion ────────────────────────────────────── */
@media (prefers-reduced-motion:reduce){
  .sw-page *,.sw-page *::before,.sw-page *::after{
    animation-duration:.001ms !important;
    animation-iteration-count:1 !important;
    transition-duration:.001ms !important;
    scroll-behavior:auto !important;
  }
  .sw-marquee__track{transform:none}
}
`;

export default function ContactPage() {
  return (
    <div className="sw-page">
      <style>{CSS}</style>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0A142E] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px)",
            backgroundSize: "88px 100%",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pb-14 pt-20 sm:pb-20 sm:pt-28">
            <p className="sw-eyebrow sw-anim-fade" style={{ animationDelay: ".05s" }}>
              <span className="sw-dot" aria-hidden="true" />
              Request a briefing
            </p>

            <h1 className="sw-h1 font-display">
              <span className="sw-line">
                <span className="sw-anim-rise" style={{ animationDelay: ".12s" }}>
                  Tell us what
                </span>
              </span>
              <span className="sw-line">
                <span className="sw-anim-rise" style={{ animationDelay: ".22s" }}>
                  you want <span className="sw-accent">AI</span> to do.
                </span>
              </span>
            </h1>

            <p className="sw-lede sw-anim-fade" style={{ animationDelay: ".42s" }}>
              A 45-minute briefing with our team. Bring a revenue target, a
              process that takes too long, or a question about governing the AI
              you already run.
            </p>

            <ul className="sw-meta sw-anim-fade" style={{ animationDelay: ".54s" }}>
              <li>45 minutes</li>
              <li>Remote or on-site</li>
              <li>Bring a live problem</li>
            </ul>
          </div>
        </div>

        <div className="sw-marquee" aria-hidden="true">
          <div className="sw-marquee__track">
            {[0, 1].map((group) => (
              <div className="sw-marquee__group" key={group}>
                {ASK_FOR.map((item) => (
                  <span className="sw-marquee__item" key={`${group}-${item.key}`}>
                    <span
                      className="sw-marquee__dot"
                      style={{ background: item.color }}
                    />
                    {item.pillar}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body ───────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left rail */}
            <div className="lg:col-span-5">
              <div className="space-y-10 lg:sticky lg:top-24">
                <div>
                  <h2 className="sw-h2 font-display">What you can ask for</h2>

                  <ul className="sw-ask">
                    {ASK_FOR.map((item) => (
                      <li className="sw-reveal" key={item.key}>
                        <Link
                          href={`/contact?pillar=${item.key}#briefing`}
                          className="sw-ask__item"
                          style={{ "--c": item.color } as CSSProperties}
                        >
                          <span className="sw-ask__num" aria-hidden="true">
                            {item.n}
                          </span>
                          <span>
                            <span className="sw-ask__pillar">{item.pillar}</span>
                            <span className="sw-ask__detail">{item.detail}</span>
                          </span>
                          <ArrowUpRight
                            className="sw-ask__arrow"
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sw-details sw-reveal">
                  <p className="sw-details__label">Direct details</p>
                  <dl>
                    <div className="sw-details__row">
                      <Mail aria-hidden="true" />
                      <div>
                        <dt>Email</dt>
                        <dd>
                          <a
                            href="mailto:hello@sourceworx.ai"
                            className="sw-link"
                          >
                            hello@sourceworx.ai
                          </a>
                        </dd>
                      </div>
                    </div>
                    <div className="sw-details__row">
                      <Globe aria-hidden="true" />
                      <div>
                        <dt>SourceWorx AI</dt>
                        <dd>Built in India, for the enterprise everywhere</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="sw-frame sw-reveal" id="briefing">
                <span className="sw-tick sw-tick--tl" aria-hidden="true" />
                <span className="sw-tick sw-tick--tr" aria-hidden="true" />
                <span className="sw-tick sw-tick--bl" aria-hidden="true" />
                <span className="sw-tick sw-tick--br" aria-hidden="true" />

                <div className="sw-frame__head">
                  <span className="sw-frame__title">Briefing request</span>
                  <span className="sw-frame__status">
                    <span className="sw-dot sw-dot--ink" aria-hidden="true" />
                    Replies within one business day
                  </span>
                </div>

                <div className="sw-frame__body sw-form">
                  <Suspense
                    fallback={
                      <div className="sw-skel" aria-hidden="true">
                        {[0, 1, 2, 3].map((i) => (
                          <div
                            className="sw-skel__bar"
                            key={i}
                            style={{ animationDelay: `${i * 140}ms` }}
                          />
                        ))}
                      </div>
                    }
                  >
                    <ContactForm />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}