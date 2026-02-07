import { ArrowRightIcon } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { animeVariants } from "./anime";

type ServicesCardProps = {
  type: string;
  src: string;
  alt: string;
  title: string;
  sub: string;
  description: string;
  href: string;
};

export function ServicesCard({
  type,
  src,
  alt,
  title,
  sub,
  description,
  href,
}: ServicesCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.5,
  });

  return (
    <motion.article
      ref={containerRef}
      variants={animeVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="group w-full"
      aria-labelledby={`service-card-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <Link
        href={href}
        className="flex w-full flex-col gap-4"
        title={`Saiba mais sobre ${title} - Jaber Seguros`}
        aria-label={`Ir para página ${title} - ${sub}`}
      >
        <div className="relative aspect-video max-h-[550px] w-full overflow-hidden rounded-[0.35rem] lg:aspect-2/3">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4 w-fit flex-center rounded-lg p-2 backdrop-blur-sm backdrop-brightness-50">
            <Badge
              variant="ghost"
              className="text-primary-foreground md:text-base"
            >
              {type}
            </Badge>
          </div>
        </div>
        <div className="w-full space-y-2">
          <div className="flex w-full items-center justify-between">
            <h3
              id={`service-card-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
              className="font-bold text-lg lg:text-xl"
            >
              {title}
            </h3>
            <div
              className="size-10 flex-center rounded-full border border-foreground/40 transition-colors duration-300 group-hover:border-foreground"
              aria-hidden
            >
              <ArrowRightIcon className="group-hover:-rotate-45 size-4 text-foreground transition-all duration-300" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm lg:text-base">{sub}</p>
            <p className="text-muted-foreground text-sm lg:text-base">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
