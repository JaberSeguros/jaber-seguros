"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  /** Duration in seconds for one full loop (higher = slower). */
  speed?: number;
  /** Duration in seconds when hovering (e.g. slower on hover). */
  speedOnHover?: number;
};

export function LogoCloud({
  className,
  logos,
  speed = 30,
  speedOnHover,
  ...props
}: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "mask-[linear-gradient(to_right,transparent,black,transparent)] overflow-hidden py-4",
        className,
      )}
    >
      <InfiniteSlider
        gap={42}
        reverse
        duration={speed}
        durationOnHover={speedOnHover}
      >
        {logos.map((logo) => (
          <span
            key={`logo-${logo.alt}`}
            className="relative inline-flex h-10 w-auto shrink-0 select-none grayscale-65"
          >
            <Image
              alt={logo.alt}
              className="pointer-events-none object-contain object-center dark:brightness-0 dark:invert"
              height={logo.height ?? 20}
              loading="lazy"
              src={logo.src}
              width={logo.width ?? 80}
              unoptimized={logo.src.startsWith("http")}
            />
          </span>
        ))}
      </InfiniteSlider>
    </div>
  );
}
