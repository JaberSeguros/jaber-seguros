"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { fadeUpVariants } from "@/app/(sections)/message/anime";

type VehiclesItemCardProps = {
  src: string;
  alt: string;
  title: string;
  content: string;
};

export function VehiclesItemCard({
  src,
  alt,
  title,
  content,
}: VehiclesItemCardProps) {
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
      className="rounded-sm border-2 border-foreground/10 bg-background p-1"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-sm">
        <Image
          src={src}
          alt={alt}
          fill
          className="mask-[linear-gradient(to_bottom,black_45%,transparent_77%)] object-cover object-center"
          sizes="(max-width: 768px) 100vw, 1500px"
        />
        <div className="absolute inset-0 flex flex-col justify-end gap-2 px-5.5 pb-2">
          <h3 className="font-bold text-foreground text-lg md:text-xl">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">{content}</p>
        </div>
      </div>
    </motion.li>
  );
}
