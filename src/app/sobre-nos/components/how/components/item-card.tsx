"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { fadeUpVariants } from "@/app/(sections)/message/anime";

type ItemCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function ItemCard({ icon, title, description }: ItemCardProps) {
  const itemCardRef = useRef<HTMLLIElement>(null);
  const isInView = useInView(itemCardRef, {
    once: true,
    amount: 0.8,
  });
  return (
    <motion.li
      ref={itemCardRef}
      variants={fadeUpVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="rounded-[0.35rem] bg-border/30 p-6"
    >
      <div className="flex flex-col gap-22 lg:gap-24">
        <span aria-hidden>{icon}</span>
        <div className="space-y-4">
          <h3 className="text-nowrap font-bold text-2xl text-foreground leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-foreground/90">{description}</p>
        </div>
      </div>
    </motion.li>
  );
}
