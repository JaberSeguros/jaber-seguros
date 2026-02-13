"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { fadeUpVariants } from "@/app/(sections)/message/anime";

type ItemCardProps = {
  id: number;
  title: string;
  description: string;
};

export function ItemCard({ id, title, description }: ItemCardProps) {
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
      className="flex flex-col gap-4 rounded-2xl bg-border/30 p-6"
    >
      <div className="size-12 flex-center rounded-full bg-border" aria-hidden>
        <span className="font-bold text-xl">{`0${id}`}</span>
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.li>
  );
}
