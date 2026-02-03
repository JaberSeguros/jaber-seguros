"use client";

import { useRef } from "react";
import { AnimatedText } from "@/components/animated-text/animated-text";

export function AboutUs() {
  const aboutTextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen w-full px-4">
      <AnimatedText
        ref={aboutTextRef}
        as="h2"
        className="max-w-md font-bold text-2xl"
        type="lines"
      >
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quos. amet consectetur adipisicing elit. Quisquam, quos.
      </AnimatedText>
    </div>
  );
}
