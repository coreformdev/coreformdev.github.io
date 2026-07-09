"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 22 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={[reduce ? "" : "reveal-on-scroll", className].filter(Boolean).join(" ")}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-y": `${y}px`,
        } as CSSProperties
      }
    >
      {children}
    </motion.div>
  );
}

export function HeroReveal({
  children,
  className,
  delay = 0,
}: Omit<RevealProps, "y">) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={[reduce ? "" : "hero-enter", className].filter(Boolean).join(" ")}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </motion.div>
  );
}
