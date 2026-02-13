"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { fadeUpVariants } from "@/app/(sections)/message/anime";

export function AnimateDivFadeUp({ children, className }: { children: React.ReactNode, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.5,
  });
  return (
    <motion.div
      ref={containerRef}
      variants={fadeUpVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
