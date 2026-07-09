"use client";

import type { ReactNode } from "react";
import {
  motion,
  type HTMLMotionProps,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

type MagneticButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.35 });

  return (
    <motion.a
      {...props}
      style={reduce ? undefined : { x: springX, y: springY }}
      onMouseMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={[
        "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200 active:scale-[0.98]",
        variant === "primary"
          ? "bg-sky-100 text-zinc-950 shadow-[0_0_34px_rgba(143,216,255,0.2)] hover:bg-white"
          : "border border-white/14 bg-white/[0.035] text-zinc-100 hover:border-sky-200/50 hover:bg-white/[0.07]",
        className,
      ].join(" ")}
    >
      {children}
    </motion.a>
  );
}
