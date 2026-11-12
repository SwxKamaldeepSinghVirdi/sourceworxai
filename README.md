# SourceWorx AI Website

Next.js (App Router), TypeScript, and Tailwind CSS implementation of **sourceworx.ai** — *The 360° AI Company for the Enterprise*.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

For production type-checking and build verification:

```bash
npm run build
npm run start
```

## Architecture & Routes

- `/` — Home landing page (Hero schematic, Proof strip, 360° pillars, Outcome-led solution matrix, Interactive product showcase, 90-day delivery plan, 8-stage Governed Path diagram, Operating principles, FAQ accordion, Closing CTA)
- `/growth` — GrowthWorx · AI for Growth
- `/solutions/care-operations` — Specialty care operations
- `/solutions/services-finance` — Services finance
- `/solutions/export-growth-crm` — Export growth CRM
- `/solutions/fix-my-fit` — Fix My Fit
- `/solutions/impact-analytics` — Programme impact analytics
- `/solutions/patient-report-studio` — Patient report studio
- `/productivity` — FlowWorx · AI for Productivity
- `/solutions/roomos` — RoomOS AI
- `/solutions/ztd` — ZTD · Zero Touch Deployment
- `/governance` — TrustWorx · AI Governance
- `/solutions/singularity` — Singularity
- `/solutions` — All solutions by pillar
- `/platform` — Platform foundation, Build with us & Partners
- `/security` — Security and Responsible AI
- `/about` — About, Leadership, Vision and Mission
- `/resources` & `/resources/[slug]` — Resources library and launch articles
- `/contact` & `/api/contact` — Briefing request form with server-side validation and honeypot spam protection

## Pre-launch Sign-off Checklist (`[CONFIRM]` Items)

1. Replace generated SVG marks in `src/components/BrandMarks.tsx` with final supplied SVG brand assets if provided (SourceWorx wordmark, RoomOS AI lockup, ZTD logo, Singularity Governed Point mark).
2. Connect `src/app/api/contact/route.ts` to your CRM or transactional email service (`hello@sourceworx.ai`).
3. Confirm leadership surnames, titles, bios, and square Ink Navy headshots in `src/data/site-content.ts` and `src/app/about/page.tsx`.
4. Confirm registered legal entity name, phone number, office address (with LocalBusiness schema if published), and one-business-day response SLA.
5. Confirm trademark clearance and public claims (`8 solutions`, directional targets on ZTD/Singularity, ServiceNow partner naming).

