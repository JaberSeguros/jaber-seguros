"use client";

import { useRef } from "react";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { Badge } from "@/components/ui/badge";

export function AboutUs() {
  const aboutTextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto min-h-screen w-full max-w-[1720px] px-4">
      <div className="flex w-full flex-col gap-10">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:justify-between">
          <Badge variant="outline" className="">Sobre nós</Badge>
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
      </div>
    </div>
  );
}
