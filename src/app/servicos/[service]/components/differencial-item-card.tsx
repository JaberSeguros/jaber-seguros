"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { fadeUpVariants } from "@/app/(sections)/message/anime";

type DifferencialItemCardProps = {
  slug: string;
  index: number;
  title: string;
  content: string;
  icon: React.ReactNode;
};

export function DifferencialItemCard({
  slug,
  index,
  title,
  content,
  icon,
}: DifferencialItemCardProps) {
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
      key={`${slug}-diff-${index}`}
      className="flex items-start gap-6 rounded-[0.35rem] bg-border/30 p-6"
    >
      {icon}

      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </motion.div>
  );
}
