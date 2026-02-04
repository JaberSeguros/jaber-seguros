"use client";

import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { cn } from "@/lib/utils";

const partnerLogos = [
  { src: "/assets/logos/amil.svg", alt: "Amil" },
  { src: "/assets/logos/careplus.png", alt: "Care Plus" },
  { src: "/assets/logos/porto.svg", alt: "Porto Seguro" },
  { src: "/assets/logos/segurosunimed.png", alt: "Seguros Unimed" },
  { src: "/assets/logos/sulamerica.png", alt: "SulAmérica" },
  { src: "/assets/logos/omint.svg", alt: "Omint" },
  { src: "/assets/logos/MetLife_idMljq2YU8_0.svg", alt: "MetLife" },
];

export function LogoCloudDemo() {
  return (
    <div className="relative min-h-[200px] w-full min-w-0 place-content-center overflow-x-hidden py-12">
      <div
        aria-hidden
        className={cn(
          "-z-10 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 max-h-[100vw] w-[100vmin] max-w-[100vw] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,var(--foreground)_0.1,transparent_50%)]",
          "pointer-events-none blur-[30px]",
        )}
      />

      <section className="relative mx-auto min-w-0 max-w-4xl overflow-x-hidden px-4">
        <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
          <span className="text-muted-foreground">
            Parceiros Líderes de Mercado.
          </span>
          <br />
          <span className="font-semibold">
            Confiança, Segurança e Qualidade.
          </span>
        </h2>
        <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mx-auto my-5 h-px max-w-sm bg-border" />

        <LogoCloud logos={partnerLogos} speed={30} speedOnHover={25} />

        <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mt-5 h-px bg-border" />
      </section>
    </div>
  );
}
