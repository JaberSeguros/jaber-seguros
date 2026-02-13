"use client";

import { ArrowRightIcon } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { JsonLd } from "@/components/json-ld";
import { ServiceIntro } from "@/components/service-intro";
import { Button } from "@/components/ui/button";
import { fadeUpVariants } from "../../../message/anime";
import { ItemCard } from "./item-card";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaberseguros.com.br";

const items = [
  {
    id: 1,
    title: "Proteção contra imprevistos",
    description:
      "Cobertura para incêndio, roubo, danos elétricos e outros eventos que podem interromper suas operações.",
  },
  {
    id: 2,
    title: "Segurança patrimonial e financeira",
    description:
      "Proteja estrutura, equipamentos e estoque, evitando prejuízos que afetam o caixa da empresa.",
  },
  {
    id: 3,
    title: "Cobertura sob medida para sua operação",
    description:
      "Análise sob medida com seguradoras como Porto Seguro e SulAmérica, garantindo a cobertura ideal para o seu negócio.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Seguro Empresarial",
  description:
    "Proteção completa para o negócio: cobertura para incêndio, roubo, danos elétricos, segurança patrimonial e financeira. Análise sob medida com Porto Seguro e SulAmérica. Jaber Seguros.",
  url: `${baseUrl}/servicos#seguro-empresarial`,
  provider: {
    "@type": "InsuranceAgency",
    name: "Jaber Seguros",
    url: baseUrl,
  },
  areaServed: "BR",
  serviceType: "Seguro Empresarial",
  hasOfferCatalog: {
    "@type": "ItemList",
    name: "Benefícios do Seguro Empresarial Jaber Seguros",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: item.description,
    })),
  },
};

export function EnterpriseInsurance() {
  const linkRef = useRef<HTMLLIElement>(null);
  const isInView = useInView(linkRef, {
    once: true,
    amount: 0.8,
  });
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <section
        id="seguro-empresarial"
        className="mx-auto min-h-screen w-full max-w-[85rem] px-4"
        aria-labelledby="enterprise-insurance-title"
        aria-label="Seguro Empresarial Jaber Seguros - Proteção para negócio, incêndio, roubo, danos elétricos e cobertura sob medida"
      >
        <div className="w-full space-y-10 lg:space-y-15">
          <ServiceIntro
            title="Seguro Empresarial"
            alt="Seguro Empresarial - Jaber Seguros proteção para empresas"
          />
          <div className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="relative aspect-square max-h-[780px] w-full overflow-hidden rounded-[0.33rem] lg:aspect-2/3 lg:max-w-3xl">
              <Image
                src="/assets/serviços/seguros/seguro-empresa.webp"
                alt="Seguro Empresarial Jaber Seguros - proteção completa para o negócio, incêndio, roubo, danos elétricos e cobertura sob medida"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 1500px"
              />
            </div>
            <div className="flex w-full flex-col justify-between gap-8">
              <div className="space-y-6">
                <h2
                  id="enterprise-insurance-title"
                  className="font-bold text-3xl md:text-4xl xl:text-5xl"
                >
                  Proteção completa para o seu negócio
                </h2>
                <AnimatedText
                  as="p"
                  id="enterprise-insurance-text"
                  className="text-muted-foreground xl:text-lg"
                  type="lines"
                >
                  Imprevistos acontecem. Com o Seguro Empresarial da Jaber, sua
                  empresa continua segura, operando com estabilidade e amparada
                  pelas melhores seguradoras do mercado.
                </AnimatedText>
              </div>
              <ul
                className="grid list-none grid-cols-1 gap-4 md:grid-cols-2 xl:gap-6"
                aria-label="Benefícios do Seguro Empresarial: proteção contra imprevistos, segurança patrimonial, cobertura sob medida"
              >
                {items.map((item) => (
                  <ItemCard key={item.id} {...item} />
                ))}
                <motion.li
                  ref={linkRef}
                  variants={fadeUpVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  className="w-full flex-center rounded-2xl bg-accent-foreground p-6 text-primary-foreground"
                >
                  <Link
                    href="/servicos/seguro-empresarial"
                    className="size-full flex-center"
                    title="Saiba mais sobre Seguro Empresarial - Jaber Seguros"
                    aria-label="Saiba mais sobre Seguro Empresarial, coberturas e como contratar"
                  >
                    <Button variant="ghost" className="cursor-pointer">
                      Saiba Mais{" "}
                      <ArrowRightIcon className="size-4" aria-hidden />
                    </Button>
                  </Link>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
