import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  absoluteContentVariants,
  imageContainerVariants,
  imageVariants,
} from "./anime";

export function AnimatedImage({
  imageContainerClassName,
  src,
  alt = "Jaber Seguros",
  children,
  hasAbsoluteContent = false,
  absoluteContentClassName,
}: {
  imageContainerClassName?: string;
  src: string;
  alt?: string;
  children?: React.ReactNode;
  hasAbsoluteContent?: boolean;
  absoluteContentClassName?: string;
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
      className={cn(imageContainerClassName, "relative")}
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
      {hasAbsoluteContent && (
        <motion.div
          variants={absoluteContentVariants}
          initial="initial"
          animate={isInVIew ? "animate" : "initial"}
          className={cn(absoluteContentClassName, "absolute")}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
