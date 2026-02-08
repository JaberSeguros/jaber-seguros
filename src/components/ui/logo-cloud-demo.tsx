"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const partnerLogos = [
  { id: 1, src: "/assets/logos/amil.svg", alt: "Amil" },
  { id: 2, src: "/assets/logos/careplus.png", alt: "Care Plus" },
  { id: 3, src: "/assets/logos/porto.svg", alt: "Porto Seguro" },
  { id: 4, src: "/assets/logos/segurosunimed.png", alt: "Seguros Unimed" },
  { id: 5, src: "/assets/logos/sulamerica.png", alt: "SulAmérica" },
  { id: 6, src: "/assets/logos/omint.svg", alt: "Omint" },
  { id: 7, src: "/assets/logos/MetLife_idMljq2YU8_0.svg", alt: "MetLife" },
];

export function LogoCloudDemo() {
  return (
    <div className="relative mx-auto h-fit w-full min-w-0 max-w-7xl place-content-center overflow-x-hidden">
      <div
        aria-hidden
        className={cn(
          "-z-10 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 max-h-[100vw] w-[100vmin] max-w-[100vw] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,var(--foreground)_0.1,transparent_50%)]",
          "pointer-events-none blur-[30px]",
        )}
      />

      <section className="relative mx-auto min-w-0 overflow-x-hidden">
        <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
          <span className="text-muted-foreground">
            Parceiros Líderes de Mercado.
          </span>
          <br />
          <span className="font-semibold">
            Confiança, Segurança e Qualidade.
          </span>
        </h2>
        <div className="mx-auto mt-10 grid h-fit w-full grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {partnerLogos.map((partner) => (
            <div
              key={partner.id}
              className={cn(
                "group relative aspect-video max-h-[120px] w-full cursor-default overflow-hidden rounded-lg bg-foreground/20 p-4 transition-colors duration-300 hover:bg-border md:max-h-[260px] lg:p-6",
                partner.id === 7 && "md:col-span-2 lg:col-span-3",
              )}
            >
              <div className="flex size-full justify-between">
                <p className="font-bold text-foreground sm:text-lg md:text-xl">
                  {partner.alt}
                </p>
                <div className="-translate-x-1/2 absolute bottom-0 left-1/2 w-fit">
                  <div
                    className={cn(
                      "relative aspect-square w-22 flex-center transition-all duration-300 group-hover:grayscale-0 sm:w-35 md:grayscale-85",
                      partner.id === 7 && "w-27 md:w-55 lg:w-65",
                    )}
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mx-auto my-5 h-px max-w-sm bg-border" />

        <LogoCloud logos={partnerLogos} speed={30} speedOnHover={25} />

        <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mt-5 h-px bg-border" /> */}
      </section>
    </div>
  );
}
