import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import {
  imageContainerVariants,
  imageVariants,
} from "@/app/(sections)/about-us/anime";
import { cn } from "@/lib/utils";

export function AnimatedImage({
  imageContainerClassName,
  src,
}: {
  imageContainerClassName?: string;
  src: string;
}) {
  const ImageContainerRef = useRef<HTMLDivElement>(null);

  const isInVIew = useInView(ImageContainerRef, {
    once: true,
    amount: 0.5,
  });
  return (
    <motion.div
      ref={ImageContainerRef}
      variants={imageContainerVariants}
      initial="initial"
      animate={isInVIew ? "animate" : "initial"}
      className={imageContainerClassName}
    >
      <motion.div
        variants={imageVariants}
        initial="initial"
        animate={isInVIew ? "animate" : "initial"}
        className="relative size-full"
      >
        <Image
          src={src}
          alt="Escritório Jaber Seguros"
          fill
          className="size-full object-cover object-center"
        />
      </motion.div>
    </motion.div>
  );
}
