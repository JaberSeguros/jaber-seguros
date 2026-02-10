"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { fadeUpVariants } from "../../message/anime";

export function AnimatedParagraph({ children }: { children: React.ReactNode }) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const isInView = useInView(paragraphRef, {
    once: true,
    amount: 0.5,
  });
  return (
    <motion.p
      ref={paragraphRef}
      variants={fadeUpVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="text-foreground/90 md:text-lg lg:max-w-xs xl:max-w-sm"
    >
      {children}
    </motion.p>
  );
}
