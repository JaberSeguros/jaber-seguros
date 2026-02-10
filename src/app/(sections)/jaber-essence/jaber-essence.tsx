"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { imagesVariants } from "./anime";

const SECTION_ID = "essencia-jaber";
const SECTION_HEADING_ID = "essencia-jaber-heading";

const items = [
  {
    id: 1,
    title: "Consultoria que entende você",
    description:
      "Antes de qualquer proposta, ouvimos. Entendemos seu momento, suas prioridades e seus objetivos para indicar apenas o que faz sentido.",
    image: "/assets/variadas/essence-2.webp",
    imageAlt:
      "Consultoria de seguros Jaber: equipe que entende seu momento e prioridades para indicar o que faz sentido.",
  },
  {
    id: 2,
    title: "Planos sob medida, sem complicação",
    description:
      "Seguro saúde e consórcios personalizados, com opções das principais seguradoras e administradoras do mercado.",
    image: "/assets/variadas/essence.webp",
    imageAlt:
      "Planos de seguro saúde e consórcios personalizados pelas principais seguradoras do mercado.",
  },
  {
    id: 3,
    title: "Atendimento humano e próximo",
    description:
      "Aqui você fala com pessoas, não com robôs. Um atendimento direto, transparente e comprometido com a sua tranquilidade.",
    image: "/assets/variadas/essence-3.webp",
    imageAlt:
      "Atendimento humano da Jaber Seguros: direto, transparente e comprometido com sua tranquilidade.",
  },
];

const essenceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "A essência da Jaber - Soluções que cuidam do essencial",
  description:
    "Consultoria de seguros, planos sob medida e atendimento humano. Seguro saúde e consórcios personalizados.",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.title,
    description: item.description,
  })),
};

export function JaberEssence() {
  const [activeItem, setActiveItem] = useState<number | null>(1);
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (activeItem === null) {
      const schedule = () => setDescriptionHeight(0);
      queueMicrotask(schedule);
      return;
    }
    const el = descriptionRef.current;
    if (el) {
      const height = el.scrollHeight;
      queueMicrotask(() => setDescriptionHeight(height));
    }
  }, [activeItem]);

  return (
    <section
      id={SECTION_ID}
      aria-labelledby={SECTION_HEADING_ID}
      className="mx-auto w-full max-w-7xl px-4"
    >
      {/* JSON-LD for search engines: static data from code, not user input */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static structured data for SEO
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(essenceStructuredData),
        }}
      />
      <div className="flex w-full flex-col-reverse bmb:gap-10 gap-6 md:flex-row">
        <div className="gap flex w-full bmb:max-w-[21rem] flex-col justify-between gap-10 lg:max-w-md">
          <div className="space-y-4">
            <p className="text-foreground/80 uppercase">A essência da Jaber</p>
            <h2
              id={SECTION_HEADING_ID}
              className="font-bold text-3xl lg:text-4xl"
            >
              Soluções que cuidam do essencial
            </h2>
          </div>
          <ul className="w-full space-y-4">
            {items.map((item) => (
              <li key={item.id} className="w-full">
                <button
                  type="button"
                  className="w-full cursor-pointer space-y-4 text-left"
                  onClick={() => {
                    setDescriptionHeight(0);
                    setActiveItem(item.id);
                  }}
                >
                  <div className="h-[1.5px] w-full bg-foreground/10">
                    <div
                      className={`h-[1.5px] bg-foreground transition-[width] duration-300 ease-out ${
                        activeItem === item.id ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg lg:text-xl">
                      {item.title}
                    </h3>
                    <AnimatePresence initial={false}>
                      {activeItem === item.id && (
                        <motion.p
                          ref={descriptionRef}
                          className="overflow-hidden text-foreground/80"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1,
                            height: descriptionHeight,
                            transition: {
                              opacity: { duration: 0.25 },
                              height: {
                                duration: 0.35,
                                ease: [0.4, 0, 0.2, 1],
                              },
                            },
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            transition: {
                              opacity: { duration: 0.2 },
                              height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                            },
                          }}
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </li>
            ))}
          </ul>
          {/* SEO: full content available to crawlers without requiring accordion interaction */}
          <div className="sr-only" aria-hidden>
            {items.map((item) => (
              <div key={item.id}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative bmb:h-screen min-h-[500px] w-full overflow-hidden rounded-[0.35rem] xl:aspect-square xl:max-h-[600px]">
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="absolute inset-0 size-full"
              variants={imagesVariants}
              initial="initial"
              animate={activeItem === item.id ? "animate" : "initial"}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 1500px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
