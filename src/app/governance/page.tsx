import React from "react";
import type { Metadata } from "next";
import { PillarPageTemplate } from "@/components/PillarPageTemplate";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "TrustWorx | AI Governance Platform | SourceWorx",
  description:
    "Map every model and agent, enforce policy in the execution path and produce audit-ready evidence for the EU AI Act and NIST AI RMF with Singularity.",
  keywords: [
    "AI governance platform",
    "EU AI Act compliance",
    "AI inventory",
    "shadow AI discovery",
    "AI cost governance",
  ],
};

const TRUST_BUILD_ITEMS = [
  {
    title: "Singularity deployment",
    description:
      "The operating platform for enterprise AI, on your own estate.",
  },
  {
    title: "AI estate mapping",
    description:
      "Find and risk-tier every model, agent and tool, including shadow AI.",
  },
  {
    title: "Guardrails and routing",
    description:
      "Policy, model routing and verification in the execution path.",
  },
  {
    title: "Evidence packs",
    description: "Framework-mapped evidence your auditors can use.",
  },
];

const TRUST_EXTRA_LINKS = [
  {
    name: "Security and responsible AI",
    sector: "Trust",
    shortDescription:
      "How every SourceWorx product enforces least access, in-path policy and evidence by default.",
    href: "/security",
    linkLabel: "Read security posture",
  },
  {
    name: "AI estate assessment",
    sector: "Advisory",
    shortDescription:
      "Map what is running, who owns it and its EU AI Act risk tier, as the first step to governance.",
    href: "/contact?interest=TrustWorx+%C2%B7+Singularity",
    linkLabel: "Book an assessment",
  },
];

export default function GovernancePage() {
  return (
    <>
      <PillarPageTemplate
        pillarId="governance"
        eyebrow="TrustWorx · AI Governance · See it, control it, prove it"
        headline="AI you can see, control and prove."
        intro="Growth and productivity only last if AI stays accountable. Singularity maps every model and agent, enforces policy where each request runs, and turns every run into evidence for boards, auditors and regulators."
        buildItems={TRUST_BUILD_ITEMS}
        extraLinks={TRUST_EXTRA_LINKS}
      />
      <ClosingCta />
    </>
  );
}

