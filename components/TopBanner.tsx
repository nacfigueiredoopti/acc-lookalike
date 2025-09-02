"use client";

import { useDecision } from "@optimizely/react-sdk";

export default function TopBanner() {
  const { decision } = useDecision("top_banner", { autoUpdate: true });

  // If feature is off in this variation, render nothing
  if (!decision.enabled) return null;

  const vars = decision.variables ?? {};
  const title = (vars.title_text as string) || "Welcome to our demo";
  const titleColor = (vars.title_color as string) || "#FFFFFF";
  const bgColor = (vars.bg_color as string) || "#085ED6";

  return (
    <div style={{ backgroundColor: bgColor }} className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-2">
        <p className="font-semibold" style={{ color: titleColor }}>
          {title}
        </p>
      </div>
    </div>
  );
}
