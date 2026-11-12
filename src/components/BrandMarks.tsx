import React from "react";

interface WordmarkProps {
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Standalone two-stroke spark-x emblem.
 * Descending stroke in Ink Navy / White, ascending spark stroke in Worx Teal (#48B8A8).
 */
export function SparkXMark({
  variant = "dark",
  size = 24,
  className = "",
}: {
  variant?: "dark" | "light";
  size?: number;
  className?: string;
}) {
  const baseStroke = variant === "dark" ? "#FFFFFF" : "#0A142E";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Descending structural stroke */}
      <path
        d="M5 6.5L23 21.5"
        stroke={baseStroke}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Ascending Worx Teal spark stroke */}
      <path
        d="M5 21.5L23 6.5"
        stroke="#48B8A8"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Precision spark node at apex */}
      <circle cx="23" cy="6.5" r="2.2" fill="#48B8A8" />
    </svg>
  );
}

/**
 * SourceWorxAI SVG wordmark.
 * Developer spec: one word "SourceWor" + two-stroke spark-x + teal "AI" superscript.
 * Rendered in SVG so it never splits, wraps, or capitalises the X.
 */
export function SourceWorxLogo({
  variant = "dark",
  className = "h-8 w-auto",
}: WordmarkProps) {
  const wordColor = variant === "dark" ? "#FFFFFF" : "#061B3D";
  const accentColor = variant === "dark" ? "#38D0DE" : "#00B4C6";

  return (
    <svg
      viewBox="0 0 166 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="SourceWorx AI"
    >
      <text
        x="0"
        y="27"
        fill={wordColor}
        fontFamily="var(--font-poppins), Poppins, system-ui, sans-serif"
        fontWeight="700"
        fontSize="24"
        letterSpacing="-0.03em"
      >
        SourceWor
      </text>
      {/* Descending navy stroke of X */}
      <polygon points="127,13.5 131.2,13.5 142.5,27 138.3,27" fill={wordColor} />
      {/* Ascending cyan-teal stroke of X (overlapping on top) */}
      <polygon points="126.5,27 130.8,27 146.5,11 142.2,11" fill={accentColor} />
      {/* Cyan-teal AI superscript */}
      <text
        x="146.5"
        y="13"
        fill={accentColor}
        fontFamily="var(--font-poppins), Poppins, system-ui, sans-serif"
        fontWeight="700"
        fontSize="11.5"
        letterSpacing="-0.01em"
      >
        AI
      </text>
    </svg>
  );
}

export function RoomOSLockup({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const wordColor = variant === "dark" ? "text-white" : "text-ink";
  const aiColor = variant === "dark" ? "text-[#9DB9F5]" : "text-flow-deep";

  return (
    <span
      className={`inline-flex items-start font-display font-bold tracking-tight ${wordColor} ${className}`}
    >
      <span>RoomOS</span>
      <span
        className={`ml-1 -mt-0.5 font-mono text-[0.65em] font-bold tracking-wider ${aiColor}`}
      >
        AI
      </span>
    </span>
  );
}

export function ZTDLogo({
  variant = "light",
  compact = false,
}: {
  variant?: "dark" | "light";
  compact?: boolean;
}) {
  const textColor = variant === "dark" ? "text-white" : "text-ink";
  const subColor = variant === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width={compact ? 22 : 28}
        height={compact ? 22 : 28}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="1.5"
          width="25"
          height="25"
          rx="5"
          stroke="#5B8DEF"
          strokeWidth="2"
        />
        <path
          d="M7.5 9.5H20.5L8.5 18.5H20.5"
          stroke={variant === "dark" ? "#FFFFFF" : "#0A142E"}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20.5" cy="9.5" r="1.8" fill="#48B8A8" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-tight ${compact ? "text-sm" : "text-base"} ${textColor}`}>
          ZTD
        </span>
        {!compact && (
          <span className={`mt-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${subColor}`}>
            Zero Touch Deployment
          </span>
        )}
      </span>
    </span>
  );
}

export function SingularityMark({
  variant = "dark",
  compact = false,
}: {
  variant?: "dark" | "light";
  compact?: boolean;
}) {
  const titleColor = variant === "dark" ? "text-white" : "text-ink";
  const subColor = variant === "dark" ? "text-slate-400" : "text-slate-500";

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width={compact ? 22 : 28}
        height={compact ? 22 : 28}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="singularityRing" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22D3EE" />
            <stop offset="1" stopColor="#7C5CFC" />
          </linearGradient>
        </defs>
        <circle cx="14" cy="14" r="11.5" stroke="url(#singularityRing)" strokeWidth="2" />
        <circle cx="14" cy="14" r="6.5" stroke="url(#singularityRing)" strokeWidth="1.5" strokeOpacity="0.6" />
        <circle cx="14" cy="14" r="2.6" fill="#22D3EE" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-tight ${compact ? "text-sm" : "text-base"} ${titleColor}`}>
          Singularity
        </span>
        {!compact && (
          <span className={`mt-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] ${subColor}`}>
            BY SOURCEWORX
          </span>
        )}
      </span>
    </span>
  );
}

