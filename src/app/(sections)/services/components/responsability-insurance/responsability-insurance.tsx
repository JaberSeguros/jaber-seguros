"use client";

import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { JsonLd } from "@/components/json-ld";
import { ServiceIntro } from "@/components/service-intro";
import { Button } from "@/components/ui/button";
import { fadeUpVariants } from "../../../message/anime";
import { ResponsabilityItemCard } from "./responsability-item-card";

const items = [
  {
    id: 1,
    title: "Cobertura para danos a terceiros",
    content:
      "Amparo financeiro em casos de danos materiais, corporais ou morais causados involuntariamente durante a atividade da empresa.",
  },
  {
    id: 2,
    title: "Segurança jurídica e financeira",
    content:
      "Cobertura para custos com indenizações, acordos e despesas judiciais, reduzindo impactos no caixa do negócio.",
  },
  {
    id: 3,
    title: "Tranquilidade para operar",
    content:
      "Atue com mais confiança sabendo que sua empresa está protegida contra riscos que podem surgir no dia a dia.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Seguro de Responsabilidade Civil",
  description:
    "Proteção para empresas contra danos a terceiros: cobertura para danos materiais, corporais ou morais, segurança jurídica e financeira. Evite prejuízos que podem comprometer a estabilidade financeira do seu negócio.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Jaber Seguros",
  },
  areaServed: "BR",
  serviceType: "Seguro de Responsabilidade Civil Empresarial",
};

export function ResponsabilityInsurance() {
  const itemRef = useRef<HTMLLIElement>(null);
  const isInView = useInView(itemRef, {
    once: true,
    amount: 0.3,
  });
  return (
    <section
      id="seguro-responsabilidade-civil"
      className="mx-auto min-h-screen w-full max-w-[85rem] px-4"
      aria-labelledby="responsability-insurance-title"
      aria-label="Seguro de Responsabilidade Civil - Proteção para sua empresa contra danos a terceiros"
    >
      <JsonLd data={structuredData} />
      <div className="space-y-10 lg:space-y-15">
        <ServiceIntro
          title="Seguro de Responsabilidade Civil"
          alt="Seguro de Responsabilidade Civil - Cobertura para danos a terceiros"
        />
        <div className="flex w-full justify-end">
          <AnimatedText
            as="h2"
            id="responsability-insurance-title"
            className="max-w-3xl font-bold text-3xl md:text-4xl lg:text-5xl"
            type="lines"
          >
            Proteja sua empresa contra danos causados a terceiros e evite
            prejuízos que podem comprometer sua estabilidade financeira.
          </AnimatedText>
        </div>
        <ul className="grid grid-cols-1 mlg:grid-cols-4! gap-6 pt-4 md:grid-cols-2">
          {items.map((item) => (
            <ResponsabilityItemCard key={item.id} {...item} />
          ))}
          <motion.li
            ref={itemRef}
            variants={fadeUpVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="size-full flex-center rounded-sm border bg-border/30 p-6"
          >
            <Button
              variant="outline"
              className="rounded-full bg-accent-foreground px-8 py-8 font-bold text-primary-foreground uppercase hover:bg-accent-foreground/80 hover:text-primary-foreground"
              asChild
            >
              <Link
                href="/servicos/seguro-responsabilidade-civil"
                aria-label="Saiba mais sobre Seguro de Responsabilidade Civil e solicite uma cotação"
                title="Seguro de Responsabilidade Civil - Jaber Seguros"
              >
                Saiba mais
              </Link>
            </Button>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
