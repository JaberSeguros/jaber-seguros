"use client";

import { Banknote, FileSignature, Scale } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { JsonLd } from "@/components/json-ld";
import { ServiceIntro } from "@/components/service-intro";
import { Button } from "@/components/ui/button";
import { fadeUpVariants } from "../../../message/anime";
import { GarantyItemCard } from "./garanty-item-card";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaberseguros.com.br";

const items = [
  {
    id: 1,
    title: "Garantia de cumprimento contratual",
    description:
      "Assegura que as obrigações previstas em contrato serão cumpridas, protegendo o contratante contra prejuízos financeiros.",
    icon: <FileSignature size={32} />,
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Alternativa à fiança bancária",
    description:
      "Mais econômico e menos burocrático que a fiança bancária, preservando o limite de crédito da sua empresa.",
    icon: <Banknote size={32} />,
    className: "row-span-1 col-span-1",
  },
  {
    id: 3,
    title: "Credibilidade em licitações e contratos",
    description:
      "Fortalece a imagem da sua empresa em concorrências públicas e privadas, demonstrando solidez e responsabilidade financeira.",
    icon: <Scale size={32} />,
    className: "row-span-1 col-span-1",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Seguro Garantia",
  description:
    "Seguro Garantia assegura cumprimento de obrigações contratuais, proteção financeira e credibilidade em licitações e contratos. Alternativa à fiança bancária. Jaber Seguros.",
  url: `${baseUrl}/servicos#seguro-garantia`,
  provider: {
    "@type": "InsuranceAgency",
    name: "Jaber Seguros",
    url: baseUrl,
  },
  areaServed: "BR",
  serviceType: "Seguro Garantia",
  hasOfferCatalog: {
    "@type": "ItemList",
    name: "Benefícios do Seguro Garantia Jaber Seguros",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: item.description,
    })),
  },
};

export function GarantyInsurance() {
  const itemRef = useRef<HTMLLIElement>(null);
  const isInView = useInView(itemRef, {
    once: true,
    amount: 0.3,
  });
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <section
        id="seguro-garantia"
        className="w-full bg-border/30 py-20 lg:py-35"
        aria-labelledby="garanty-insurance-title"
        aria-label="Seguro Garantia Jaber Seguros - Segurança jurídica, cumprimento contratual, alternativa à fiança bancária e licitações"
      >
        <div className="mx-auto w-full max-w-[85rem] px-4">
          <div className="w-full space-y-10 lg:space-y-15">
            <ServiceIntro
              title="Seguro Garantia"
              alt="Seguro Garantia - Jaber Seguros segurança jurídica e contratos"
            />
            <div className="flex flex-col justify-between gap-6 lg:flex-row">
              <h2
                id="garanty-insurance-title"
                className="max-w-xl font-bold text-3xl md:text-4xl lg:text-5xl"
              >
                Segurança jurídica para seus contratos
              </h2>
              <AnimatedText
                as="p"
                id="garanty-insurance-text"
                className="font-bold text-muted-foreground text-sm md:text-lg lg:max-w-xl"
                type="lines"
              >
                O Seguro Garantia assegura o cumprimento de obrigações
                contratuais, oferecendo proteção financeira e mais credibilidade
                para sua empresa participar de contratos públicos e privados.
              </AnimatedText>
            </div>
            <ul
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              aria-label="Benefícios do Seguro Garantia: cumprimento contratual, alternativa à fiança bancária, credibilidade em licitações"
            >
              <motion.li
                ref={itemRef}
                variants={fadeUpVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                className="aspect-video md:col-span-2 lg:col-span-1 lg:row-span-2 lg:aspect-auto"
              >
                <div className="relative size-full overflow-hidden rounded-[0.35rem]">
                  <Image
                    src="/assets/serviços/seguros/garantia.webp"
                    alt="Seguro Garantia Jaber Seguros - segurança jurídica, cumprimento contratual, alternativa à fiança bancária e credibilidade em licitações"
                    fill
                    className="object-cover object-center brightness-80"
                  />
                  <div className="absolute inset-0">
                    <div className="flex size-full flex-col items-start justify-end p-6">
                      <div className="space-y-4">
                        <p className="text-primary-foreground md:text-lg">
                          Precisa emitir um Seguro Garantia?
                        </p>
                        <Button
                          asChild
                          className="rounded-full bg-background px-8 py-8 font-bold text-foreground uppercase"
                        >
                          <Link
                            href="https://wa.me/5511993101907"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Falar com consultor Jaber Seguros no WhatsApp - Seguro Garantia"
                            aria-label="Solicitar proposta de Seguro Garantia pelo WhatsApp - Jaber Seguros"
                          >
                            Solicitar Proposta
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
              {items.map((item) => (
                <GarantyItemCard key={item.id} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
