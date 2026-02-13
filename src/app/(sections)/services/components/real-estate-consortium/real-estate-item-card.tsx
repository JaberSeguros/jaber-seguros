"use client";

import { ArrowRightIcon } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { fadeUpVariants } from "@/app/(sections)/message/anime";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type RealEstateItemCardProps = {
  id: number;
  title: string;
  content: string;
  src: string;
  alt: string;
};

export function RealEstateItemCard({
  id,
  title,
  content,
  src,
  alt,
}: RealEstateItemCardProps) {
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
      className={cn(
        "flex flex-col gap-15 rounded-[0.35rem] bg-border/30 p-6 lg:flex-row-reverse lg:items-center lg:gap-4",
        id === 2 && "bg-accent-foreground text-primary-foreground",
      )}
    >
      <div className="relative aspect-video shrink-0 overflow-hidden rounded-[0.35rem] lg:aspect-square lg:w-1/3 xl:w-1/4">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>
      <div className="w-full space-y-3">
        <h3 className="font-bold text-xl">{title}</h3>
        <p
          className={cn(
            "text-muted-foreground text-sm",
            id === 2 && "text-primary-foreground",
          )}
        >
          {content}
        </p>
        <Button
          className={cn(
            "w-1/2 max-w-xs bg-accent-foreground text-primary-foreground hover:bg-accent-foreground hover:text-primary-foreground/80",
            id === 2 &&
              "bg-primary-foreground text-foreground-dark hover:bg-primary-foreground/80 hover:text-foreground-dark",
          )}
          asChild
        >
          <Link
            href="/servicos/consorcio-imoveis"
            className="flex-center px-6 py-5"
            title="Saiba mais sobre Consórcio para imóveis - Jaber Seguros"
            aria-label={`Saiba mais sobre Consórcio para imóveis: ${title} - solicite uma cotação`}
          >
            Saiba Mais <ArrowRightIcon className="size-4" aria-hidden />
          </Link>
        </Button>
      </div>
    </motion.li>
  );
}
