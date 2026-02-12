"use client";

import { CheckIcon } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { fadeUpVariants } from "@/app/(sections)/message/anime";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaberseguros.com.br";

const items = [
  {
    id: 1,
    content: "Explicação clara e objetiva",
  },
  {
    id: 2,
    content: "Atendimento humano e próximo",
  },
  {
    id: 3,
    content: "Consultoria personalizada desde o início",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Proteção pensada para a sua realidade - Jaber Seguros",
  description:
    "Como a Jaber Seguros oferece seguros e consórcios com explicação clara, atendimento humano e consultoria personalizada para você e sua empresa.",
  url: `${baseUrl}/sobre-nos#protecao-para-sua-realidade`,
  step: items.map((item, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: item.content,
  })),
};

export function Steps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.3,
  });
  return (
    <>
      <JsonLd data={howToJsonLd} />
      <section
        id="protecao-para-sua-realidade"
        className="h-fit w-full"
        aria-labelledby="steps-heading"
        aria-label="Proteção pensada para a sua realidade - Como a Jaber Seguros atende você com seguros e consórcios"
      >
        <motion.div
          ref={containerRef}
          variants={fadeUpVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="flex w-full bmb:flex-row flex-col justify-between gap-8"
        >
          <div className="relative aspect-square max-h-[650px] w-full max-w-3xl overflow-hidden rounded-[0.33rem] lg:aspect-2/3">
            <Image
              src="/assets/variadas/pexels-arina-krasnikova-6338482.jpg"
              alt="Consultoria em seguros e consórcios Jaber Seguros - atendimento humanizado e proteção para sua realidade"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1500px"
            />
          </div>
          <div className="flex w-full flex-col gap-10 lg:max-w-[26rem]">
            <div className="space-y-4">
              <h2
                id="steps-heading"
                className="font-bold text-3xl text-foreground leading-tight tracking-tight lg:text-4xl"
              >
                Proteção pensada para a sua realidade
              </h2>
              <p className="text-foreground/90">
                A Jaber Seguros oferece uma ampla gama de serviços para atender
                às necessidades de nossos clientes.
              </p>
            </div>
            <ol
              className="list-none space-y-4"
              start={1}
              aria-label="Diferenciais: explicação clara, atendimento humano e consultoria personalizada"
            >
              {items.map((item) => (
                <li key={item.id} className="flex w-full items-center gap-2">
                  <CheckIcon aria-hidden className="shrink-0" />
                  <span className="text-muted-foreground">{item.content}</span>
                </li>
              ))}
            </ol>
            <Button
              asChild
              className="mx-auto w-full max-w-md rounded-full bg-black py-5 font-bold"
            >
              <Link
                href="https://wa.me/5511993101907"
                target="_blank"
                rel="noopener noreferrer"
                title="Falar com consultor Jaber Seguros no WhatsApp - Seguro Vida Empresarial"
                aria-label="Abrir WhatsApp para falar com consultor sobre Seguro Vida Empresarial"
              >
                Falar com um consultor
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
