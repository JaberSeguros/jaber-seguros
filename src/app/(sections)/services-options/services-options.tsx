"use client";

import Link from "next/link";
import { useRef } from "react";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { IntroductionBadge } from "@/components/introduction-badge";
import { Button } from "@/components/ui/button";
import { ServicesCard } from "./components/services-card";
import { services } from "./data";

export function ServicesOptions() {
  const servicesTextRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="opcoes-de-servicos"
      className="w-full bg-primary/10 py-20"
      aria-labelledby="services-heading"
      aria-label="Opções de serviços - Seguros e consórcios Jaber Seguros"
    >
      <div className="mx-auto min-h-screen w-full max-w-7xl px-4">
        <div className="flex w-full flex-col gap-10 lg:gap-15">
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
          <ul className="grid w-full list-none grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {services.map((service) => (
              <li key={service.id}>
                <ServicesCard {...service} />
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="mx-auto w-fit rounded-full py-6 lg:text-lg"
          >
            <Link
              href="/servicos"
              title="Ver todos os serviços - Jaber Seguros"
              aria-label="Ir para página de todos os serviços - Jaber Seguros"
            >
              Todos Serviços
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
