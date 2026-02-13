"use client";

import { useRef } from "react";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { IntroductionBadge } from "@/components/introduction-badge";
import { JsonLd } from "@/components/json-ld";
import { Separator } from "@/components/ui/separator";
import { CTA } from "../CTA/cta";
import { BigVehiclesConsortium } from "./components/big-vehicles-consortium";
import { EnterpriseInsurance } from "./components/enterpise-insurance/enterpise-insurance";
import { EnterpriseHealth } from "./components/enterprise-health";
import { GarantyInsurance } from "./components/garanty-insurance/garanty-insurance";
import { HealthInsurance } from "./components/health-insurance";
import { RealEstateConsortium } from "./components/real-estate-consortium/real-estate-consortium";
import { ResponsabilityInsurance } from "./components/responsability-insurance/responsability-insurance";
import { Sustainable } from "./components/sustainable";
import { VehiclesConsortium } from "./components/vehicles-consortium/vehicles-consortium";

const servicesItemListStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Serviços Jaber Seguros - Seguros e Consórcios",
  description:
    "Lista de serviços: seguro saúde, saúde empresarial, seguro empresarial, seguro garantia, responsabilidade civil, consórcio de veículos, consórcio de veículos pesados, consórcio imobiliário.",
  numberOfItems: 8,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Seguro Saúde", url: "/servicos#seguro-saude" },
    { "@type": "ListItem", position: 2, name: "Seguro Saúde Empresarial", url: "/servicos#seguro-saude-empresarial" },
    { "@type": "ListItem", position: 3, name: "Seguro Empresarial", url: "/servicos#seguro-empresarial" },
    { "@type": "ListItem", position: 4, name: "Seguro Garantia", url: "/servicos#seguro-garantia" },
    { "@type": "ListItem", position: 5, name: "Seguro de Responsabilidade Civil", url: "/servicos#seguro-responsabilidade-civil" },
    { "@type": "ListItem", position: 6, name: "Consórcio de Veículos Pesados", url: "/servicos#consorcio-veiculos-pesados" },
    { "@type": "ListItem", position: 7, name: "Consórcio para Veículos", url: "/servicos#consorcio-veiculos" },
    { "@type": "ListItem", position: 8, name: "Consórcio para Imóveis", url: "/servicos#consorcio-imoveis" },
    { "@type": "ListItem", position: 9, name: "Consórcio Sustentável", url: "/servicos#consorcio-sustentavel" },
  ],
};

export function Services() {
  const servicesTextRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="nossos-servicos"
      className="min-h-screen w-full"
      aria-labelledby="services-heading"
      aria-label="Nossos serviços - Seguros de saúde, empresarial, garantia, responsabilidade civil e consórcios de veículos e imóveis"
    >
      <JsonLd data={servicesItemListStructuredData} />
      <div className="flex w-full flex-col gap-20 md:gap-32 lg:gap-40">
        <div className="mx-auto flex w-full max-w-[85rem] flex-col items-start gap-6 px-4 lg:flex-row lg:justify-between">
          <IntroductionBadge text="Serviços" />
          <AnimatedText
            ref={servicesTextRef}
            as="h2"
            id="services-heading"
            className="max-w-3xl font-bold text-2xl text-muted-foreground lg:text-3xl"
            type="lines"
          >
            Oferecemos uma ampla gama de serviços para atender às necessidades
            de nossos clientes.
          </AnimatedText>
        </div>
        <HealthInsurance />
        <EnterpriseHealth />
        <EnterpriseInsurance />
        <GarantyInsurance />
        <ResponsabilityInsurance />
        <BigVehiclesConsortium />
        <VehiclesConsortium />
        <RealEstateConsortium />
        <Sustainable />
        <Separator />
        <CTA />
      </div>
    </section>
  );
}
