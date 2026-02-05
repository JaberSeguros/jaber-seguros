import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import {
  imageContainerVariants,
  imageVariants,
} from "@/app/(sections)/about-us/anime";

export function AnimatedImage({
  imageContainerClassName,
  src,
  alt = "Jaber Seguros",
}: {
  imageContainerClassName?: string;
  src: string;
  alt?: string;
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
      style={{
        willChange: "clip-path",
      }}
    >
      <motion.div
        variants={imageVariants}
        initial="initial"
        animate={isInVIew ? "animate" : "initial"}
        className="relative size-full"
        style={{
          willChange: "scale",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="size-full object-cover object-center"
        />
      </motion.div>
    </motion.div>
  );
}
