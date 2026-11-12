import React from "react";
import { Layers, Rocket, ShieldCheck, Zap } from "lucide-react";

export interface KeyBenefitItem {
  label: string;
  iconName: "layers" | "rocket" | "shield" | "zap";
}

const ICON_MAP: Record<
  KeyBenefitItem["iconName"],
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  layers: Layers,
  rocket: Rocket,
  shield: ShieldCheck,
  zap: Zap,
};

export const DEFAULT_KEY_BENEFITS: KeyBenefitItem[] = [
  {
    label: "End-to-end AI solutions",
    iconName: "layers",
  },
  {
    label: "Faster business outcomes",
    iconName: "rocket",
  },
  {
    label: "Built for enterprise trust",
    iconName: "shield",
  },
  {
    label: "From strategy to scale",
    iconName: "zap",
  },
];

interface KeyBenefitsStripProps {
  items?: KeyBenefitItem[];
  className?: string;
}

/**
 * Horizontal 4-item key-benefits bar at the bottom of the homepage hero.
 */
export function KeyBenefitsStrip({
  items = DEFAULT_KEY_BENEFITS,
  className = "",
}: KeyBenefitsStripProps) {
  return (
    <div
      className={`border-y border-slate-200/80 bg-white/85 ${className}`}
      aria-label="Key benefits"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-slate-200/80 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-slate-200/80">
          {items.map((item) => {
            const Icon = ICON_MAP[item.iconName];

            return (
              <div
                key={item.label}
                className="flex items-center justify-start gap-3 py-4 sm:justify-center sm:px-4"
              >
                <Icon
                  className="h-5 w-5 shrink-0 text-[#0D9488]"
                  strokeWidth={1.75}
                />
                <span className="text-sm font-semibold tracking-tight text-ink">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
