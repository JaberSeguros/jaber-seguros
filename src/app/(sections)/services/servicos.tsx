"use client";

import { useRef } from "react";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { IntroductionBadge } from "@/components/introduction-badge";
import { EnterpriseHealth } from "./components/enterprise-health";
import { HealthInsurance } from "./components/health-insurance";

export function Services() {
  const servicesTextRef = useRef<HTMLDivElement>(null);
  return (
    <section className="mx-auto min-h-screen w-full max-w-[1500px] px-4">
      <div className="flex w-full flex-col gap-20 lg:gap-30">
        <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:justify-between">
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
      </div>
    </section>
  );
}
