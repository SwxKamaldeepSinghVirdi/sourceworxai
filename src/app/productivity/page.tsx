import React from "react";
import type { Metadata } from "next";
import { PillarPageTemplate } from "@/components/PillarPageTemplate";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "FlowWorx | AI for Productivity | SourceWorx",
  description:
    "Platforms that take the slow, manual parts out of delivery: RoomOS AI and ZTD, AI-accelerated platform deployment and migration for SIs.",
  keywords: [
    "AI productivity platform",
    "AI delivery automation",
    "AI platform migration",
    "RoomOS AI",
    "zero touch deployment",
  ],
};

const FLOW_BUILD_ITEMS = [
  {
    title: "RoomOS AI",
    description:
      "Boardrooms, war rooms, deal rooms and multilingual meetings that end in owned, approved actions.",
  },
  {
    title: "ZTD for systems integrators",
    description:
      "Deploy and migrate enterprise platforms with AI, inside your practice.",
  },
  {
    title: "Agents in existing workflows",
    description: "AI steps with human approval where it matters.",
  },
  {
    title: "Delivery automation",
    description:
      "Requirements, build and test generated, then expert-approved.",
  },
];

export default function ProductivityPage() {
  return (
    <>
      <PillarPageTemplate
        pillarId="productivity"
        eyebrow="FlowWorx · AI for Productivity · Efficiency and delivery quality"
        headline="AI that makes delivery faster and sharper."
        intro="Platforms that take the slow, manual, specialist-heavy parts out of the work your teams already do: meetings that end in owned actions, and platform programmes that ship faster. Same processes, fewer hand-offs, measurably better quality."
        buildItems={FLOW_BUILD_ITEMS}
      />
      <ClosingCta />
    </>
  );
}

