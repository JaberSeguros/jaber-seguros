"use client";

import { useRef } from "react";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { IntroductionBadge } from "@/components/introduction-badge";
import { BigVehiclesConsortium } from "./components/big-vehicles-consortium";
import { EnterpriseInsurance } from "./components/enterpise-insurance";
import { EnterpriseHealth } from "./components/enterprise-health";
import { GarantyInsurance } from "./components/garanty-insurance";
import { HealthInsurance } from "./components/health-insurance";
import { RealEstateConsortium } from "./components/real-estate-consortium";
import { ResponsabilityInsurance } from "./components/responsability-insurance";
import { VehiclesConsortium } from "./components/vehicles-consortium";

export function Services() {
  const servicesTextRef = useRef<HTMLDivElement>(null);
  return (
    <section className="min-h-screen w-full">
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
      </div>
    </section>
  );
}
