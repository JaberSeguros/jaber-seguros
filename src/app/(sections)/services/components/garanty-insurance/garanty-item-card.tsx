import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { fadeUpVariants } from "@/app/(sections)/message/anime";
import { cn } from "@/lib/utils";

type GarantyItemCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className: string;
};

export function GarantyItemCard({
  title,
  description,
  icon,
  className,
}: GarantyItemCardProps) {
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
      className={cn("rounded-sm bg-background p-6", className)}
    >
      <div className="flex flex-col justify-between gap-20">
        <div
          className="size-12 flex-center rounded-full bg-border/40"
          aria-hidden
        >
          {icon}
        </div>
        <div className="space-y-3">
          <h3 className="font-bold text-xl lg:text-2xl">{title}</h3>
          <p className="max-w-2xl text-muted-foreground text-sm lg:text-base">
            {description}
          </p>
        </div>
      </div>
    </motion.li>
  );
}
