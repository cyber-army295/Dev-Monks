import React, { useEffect, useRef, useState } from "react";

interface ScrambleCaptionProps {
  text: string;
  className?: string;
}

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export const ScrambleCaption: React.FC<ScrambleCaptionProps> = ({ text, className = "" }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(text);
  const [visible, setVisible] = useState(true);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(text);
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            setVisible(true);
            const totalFrames = 10;
            let frame = 0;

            const tick = () => {
              frame++;
              const progress = frame / totalFrames;
              const revealedCount = Math.floor(progress * text.length);
              let out = "";
              for (let i = 0; i < text.length; i++) {
                const ch = text[i];
                if (ch === " " || ch === "[" || ch === "]") {
                  out += ch;
                } else if (i < revealedCount) {
                  out += ch;
                } else {
                  out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
                }
              }
              setDisplay(out);
              if (frame < totalFrames) {
                requestAnimationFrame(tick);
              } else {
                setDisplay(text);
              }
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  return (
    <p
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.45s ease-out, filter 0.45s ease-out",
      }}
    >
      {display}
    </p>
  );
};
