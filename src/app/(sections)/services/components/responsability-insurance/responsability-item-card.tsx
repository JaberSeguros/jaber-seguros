"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { fadeUpVariants } from "@/app/(sections)/message/anime";
import { cn } from "@/lib/utils";

type ResponsabilityItemCardProps = {
  id: number;
  title: string;
  content: string;
};

export function ResponsabilityItemCard({
  id,
  title,
  content,
}: ResponsabilityItemCardProps) {
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
      className="rounded-sm bg-accent-foreground p-6"
    >
      <div
        className={cn(
          "flex h-full flex-col justify-between gap-20",
          id === 2 && "flex-col-reverse",
        )}
      >
        <div className="flex items-center gap-2 text-primary-foreground">
          <div className="size-12 flex-center shrink-0 rounded-full backdrop-brightness-70">
            <span className="font-bold text-xl">{`0${id}`}</span>
          </div>
          <h3 className="font-bold text-[1.35rem]">{title}</h3>
        </div>
        <p className="text-[0.965rem] text-muted/85">{content}</p>
      </div>
    </motion.li>
  );
}
