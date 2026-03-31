import React from "react";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

export interface BoopConfig {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  timing?: number;
}

function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
}: BoopConfig = {}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isBooped, setIsBooped] = React.useState(false);

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = React.useCallback(() => {
    if (prefersReducedMotion) {
      return;
    }
    setIsBooped(true);
  }, [prefersReducedMotion]);

  const style: React.CSSProperties = isBooped
    ? {
        transform: `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`,
        transition: "transform var(--boop-spring-duration) var(--boop-spring)",
      }
    : {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)",
        transition: "transform var(--boop-spring-duration) var(--boop-spring)",
      };

  return [style, trigger] as const;
}

export default useBoop;
