"use client";

import { motion, useInView } from "motion/react";
import Link from "next/link";
import { type ReactNode, useEffect, useRef } from "react";
import { fadeUpVariants } from "@/app/(sections)/message/anime";
import { cn } from "@/lib/utils";
import { BookIcon } from "../icons/book";
import { MessageIcon } from "../icons/message";
import { StatusIcon } from "../icons/status";

const SECTION_ID = "cta-solucoes";
const SECTION_HEADING_ID = "cta-solucoes-heading";

interface VerticalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
  onItemsRef?: (items: HTMLElement[]) => void;
}

export function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
  onItemsRef,
}: VerticalMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onItemsRef && containerRef.current) {
      const items = Array.from(
        containerRef.current.querySelectorAll(".marquee-item"),
      ) as HTMLElement[];
      onItemsRef(items);
    }
  }, [onItemsRef]);

  return (
    <div
      ref={containerRef}
      className={cn("group flex flex-col overflow-hidden", className)}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 animate-marquee-vertical flex-col",
          reverse && "direction-[reverse]",
          pauseOnHover && "group-hover:paused",
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 animate-marquee-vertical flex-col",
          reverse && "direction-[reverse]",
          pauseOnHover && "group-hover:paused",
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const defaultMarqueeItems = [
  "Seguro Saúde",
  "Seguro Vida Empresarial",
  "Seguro Empresarial",
  "Seguro Garantia",
  "Seguro Responsabilidade Civil",
  "Consórcio Veículos Pesados",
  "Consórcio Veículos",
  "Consórcio Imóvel",
  "Consórcio Sustentável",
];

function buildStructuredData(
  title: string,
  description: string,
  benefits: string[],
  marqueeItems: string[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    name: title,
    description,
    about: {
      "@type": "ItemList",
      name: "Soluções Jaber Seguros",
      description:
        "Seguros e consórcios sob medida com acompanhamento próximo.",
      itemListElement: marqueeItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item,
      })),
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Benefícios",
      itemListElement: benefits.map((benefit, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: benefit,
      })),
    },
  };
}

export interface CTAWithVerticalMarqueeProps {
  /** Main heading */
  title?: string;
  /** Subtitle/description */
  description?: string;
  /** Primary CTA label */
  primaryCtaLabel?: string;
  /** Secondary CTA label */
  secondaryCtaLabel?: string;
  /** Items to show in the vertical marquee */
  marqueeItems?: string[];
  /** Marquee animation speed in seconds */
  marqueeSpeed?: number;
  /** Called when primary CTA is clicked */
  onPrimaryCtaClick?: () => void;
  /** Called when secondary CTA is clicked */
  onSecondaryCtaClick?: () => void;
  /** Additional class for the section wrapper */
  className?: string;
}

export function CTAWithVerticalMarquee({
  title = "Mais controle, Menos preocupação",
  description = "Cuidamos da gestão dos seus seguros e consórcios em um só lugar, com acompanhamento próximo, orientações claras e suporte sempre que você precisar.",
  primaryCtaLabel = "Falar com um consultor",
  marqueeItems = defaultMarqueeItems,
  marqueeSpeed = 20,
  className,
}: CTAWithVerticalMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.3,
  });

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll(".marquee-item");
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.75;
        (item as HTMLElement).style.opacity = opacity.toString();
      });
    };

    const animationFrame = () => {
      updateOpacity();
      requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);

    return () => cancelAnimationFrame(frame);
  }, []);

  const benefits = [
    {
      id: 1,
      content: "Acompanhamento de prazos e renovações",
      icon: <StatusIcon />,
    },
    {
      id: 2,
      content: "Suporte humano e direto",
      icon: <MessageIcon />,
    },
    {
      id: 3,
      content: "Menos burocracia no dia a dia",
      icon: <BookIcon />,
    },
  ];

  const benefitLabels = benefits.map((b) => b.content);
  const structuredData = buildStructuredData(
    title,
    description,
    benefitLabels,
    marqueeItems,
  );

  return (
    <section
      id={SECTION_ID}
      aria-labelledby={SECTION_HEADING_ID}
      className={cn(
        "flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-12 text-foreground",
        className,
      )}
    >
      {/* JSON-LD for search engines: static CTA section data for SEO */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static structured data for SEO
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <motion.div
        ref={containerRef}
        variants={fadeUpVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="w-full max-w-[85rem]"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Content */}
          <div className="flex h-full max-w-xl flex-col gap-8 lg:gap-12">
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <p className="uppercase">
                  Soluções sob medida
                </p>
                <h1
                  id={SECTION_HEADING_ID}
                  className="font-medium text-3xl text-foreground leading-tight tracking-tight [animation-delay:200ms] lg:text-4xl"
                >
                  {title}
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed [animation-delay:400ms]">
                {description}
              </p>
              <div className="flex flex-wrap gap-4 [animation-delay:600ms]">
                <Link
                  href="https://wa.me/5511993101907"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Fale conosco no WhatsApp - Jaber Seguros"
                  aria-label="Abrir conversa no WhatsApp com Jaber Seguros"
                >
                  <button
                    type="button"
                    className="group relative overflow-hidden rounded-md bg-foreground px-6 py-3 font-medium text-background transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <span className="relative z-10">{primaryCtaLabel}</span>
                    <div className="absolute inset-0 translate-x-[-200%] bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[200%]" />
                  </button>
                </Link>
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit.id}
                  className="flex w-fit items-center gap-2 rounded-md border border-border p-1.5"
                >
                  {benefit.icon}
                  <p>{benefit.content}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Marquee */}
          <div
            ref={marqueeRef}
            className="relative flex h-[500px] items-center justify-center [animation-delay:400ms] lg:h-[620px]"
          >
            <div className="relative size-full bg-primary/15 p-6">
              <VerticalMarquee speed={marqueeSpeed} className="h-full">
                {marqueeItems.map((item) => (
                  <p
                    key={item}
                    className="marquee-item mx-auto my-2 w-fit rounded-md bg-primary/20 px-2 py-4 text-center font-light text-2xl tracking-tight lg:text-3xl"
                  >
                    {item}
                  </p>
                ))}
              </VerticalMarquee>

              {/* Top vignette */}
              <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-14 bg-linear-to-b from-background via-background/50 to-transparent" />

              {/* Bottom vignette */}
              <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-14 bg-linear-to-t from-background via-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>
      {/* SEO: full list of solutions and benefits for crawlers */}
      <div className="sr-only" aria-hidden>
        <p>
          <strong>Soluções:</strong> {marqueeItems.join(", ")}.
        </p>
        <p>
          <strong>Benefícios:</strong> {benefitLabels.join(", ")}.
        </p>
      </div>
    </section>
  );
}

export default CTAWithVerticalMarquee;
