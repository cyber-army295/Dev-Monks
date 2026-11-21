import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  animationData: object;
  className?: string;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const anim: AnimationItem = lottie.loadAnimation({
      container: el,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => {
      anim.destroy();
    };
  }, [animationData]);

  return <div ref={containerRef} className={className} />;
};
