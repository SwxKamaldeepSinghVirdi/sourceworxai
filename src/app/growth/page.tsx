import React from "react";
import type { Metadata } from "next";
import { PillarPageTemplate } from "@/components/PillarPageTemplate";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "GrowthWorx | AI for Business Growth | SourceWorx",
  description:
    "Industry AI applications that win revenue: healthcare, IT services, export trade, retail, education and dental. Configurable, white-label, live in weeks.",
  keywords: [
    "AI for business growth",
    "industry AI applications",
    "AI revenue growth",
    "white-label AI software",
    "vertical AI solutions",
  ],
};

const GROWTH_BUILD_ITEMS = [
  {
    title: "Industry applications",
    description:
      "Healthcare, IT services, export trade, retail, education and dental, configured to you.",
  },
  {
    title: "Revenue and sales agents",
    description:
      "Agents that qualify, follow up and keep deals moving.",
  },
  {
    title: "Commerce and ordering",
    description:
      "Branded ordering with each customer's profile remembered.",
  },
  {
    title: "Your own vertical",
    description: "A new industry build, live in 90 days.",
  },
];

export default function GrowthPage() {
  return (
    <>
      <PillarPageTemplate
        pillarId="growth"
        eyebrow="GrowthWorx · AI for Growth · Revenue acceleration"
        headline="AI that earns its keep."
        intro="Industry AI applications built with real clients and ready for yours. Each one opens a new revenue channel, converts more of the demand you already have, or lets you grow without growing headcount."
        buildItems={GROWTH_BUILD_ITEMS}
      />
      <ClosingCta />
    </>
  );
}

