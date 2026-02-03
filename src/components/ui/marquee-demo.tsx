"use client";

import Image from "next/image";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/marquee";

const UNSPLASH_IMAGES = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=128&h=128&fit=crop",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=128&h=128&fit=crop",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=128&h=128&fit=crop",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=128&h=128&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=128&h=128&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=128&h=128&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=128&h=128&fit=crop",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=128&h=128&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=128&h=128&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=128&h=128&fit=crop",
];

export function MarqueeDemo() {
  return (
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
        {UNSPLASH_IMAGES.map((src) => (
          <MarqueeItem key={src} className="size-32">
            <Image
              src={src}
              alt="Marquee"
              width={128}
              height={128}
              className="size-32 rounded-full object-cover"
              unoptimized
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  );
}
