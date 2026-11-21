import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    HalftoneWebGL?: new (opts: { container: HTMLElement }) => {
      destroy?: () => void;
    };
  }
}

interface HalftoneVideoBgProps {
  source: string;
  interaction?: string;
  fit?: string;
  frequency?: string;
  angle?: string;
  scale?: string;
  brightness?: string;
  radius?: string;
  trailFade?: string;
  minDot?: string;
  softness?: string;
  gap?: string;
  contrast?: string;
  bgColor?: string;
  opacity?: string;
  isLight?: boolean;
}

export const HalftoneVideoBg: React.FC<HalftoneVideoBgProps> = ({
  source,
  interaction = "sparkle",
  fit,
  frequency,
  angle,
  scale,
  brightness,
  radius,
  trailFade,
  minDot,
  softness,
  gap,
  contrast,
  bgColor,
  opacity,
  isLight = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let instance: { destroy?: () => void } | null = null;
    let timer: number | null = null;
    let attempts = 0;

    const init = () => {
      if ((el as unknown as { __halftoneWebGL?: unknown }).__halftoneWebGL) return;
      if (window.HalftoneWebGL) {
        try {
          instance = new window.HalftoneWebGL({ container: el });
        } catch {
          // WebGL fallback handled by CSS halftone dot backdrop
        }
      } else if (attempts < 25) {
        attempts++;
        timer = window.setTimeout(init, 120);
      }
    };

    init();

    return () => {
      if (timer) window.clearTimeout(timer);
      if (instance && typeof instance.destroy === "function") {
        try {
          instance.destroy();
        } catch {
          // ignore cleanup errors
        }
      }
    };
  }, [source]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
        inset: "0%",
        zIndex: -1,
        opacity: opacity || "1",
        pointerEvents: "none",
      }}
    >
      {/* Subtle CSS halftone dot fallback visible immediately & if WebGL is unavailable */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: isLight
            ? "radial-gradient(rgba(232, 80, 2, 0.14) 1.5px, transparent 1.5px)"
            : "radial-gradient(rgba(232, 80, 2, 0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 75% 45%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 65%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 75% 45%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 65%, transparent 100%)",
        }}
      />
      <div
        ref={containerRef}
        data-hwgl-element=""
        data-hwgl-source={source}
        data-hwgl-interaction={interaction}
        {...(fit ? { "data-hwgl-fit": fit } : {})}
        {...(frequency ? { "data-hwgl-frequency": frequency } : {})}
        {...(angle ? { "data-hwgl-angle": angle } : {})}
        {...(scale ? { "data-hwgl-scale": scale } : {})}
        {...(brightness ? { "data-hwgl-brightness": brightness } : {})}
        {...(radius ? { "data-hwgl-radius": radius } : {})}
        {...(trailFade ? { "data-hwgl-trail-fade": trailFade } : {})}
        {...(minDot ? { "data-hwgl-min-dot": minDot } : {})}
        {...(softness ? { "data-hwgl-softness": softness } : {})}
        {...(gap ? { "data-hwgl-gap": gap } : {})}
        {...(contrast ? { "data-hwgl-contrast": contrast } : {})}
        {...(bgColor ? { "data-hwgl-bg-color": bgColor } : {})}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: "0%",
        }}
      />
    </div>
  );
};
