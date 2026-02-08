"use client";

import Image from "next/image";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Consultoria que entende você",
    description:
      "Antes de qualquer proposta, ouvimos. Entendemos seu momento, suas prioridades e seus objetivos para indicar apenas o que faz sentido.",
  },
  {
    id: 2,
    title: "Planos sob medida, sem complicação",
    description:
      "Seguro saúde e consórcios personalizados, com opções das principais seguradoras e administradoras do mercado.",
  },
  {
    id: 3,
    title: "Atendimento humano e próximo",
    description:
      "Aqui você fala com pessoas, não com robôs. Um atendimento direto, transparente e comprometido com a sua tranquilidade.",
  },
];

export function JaberEssence() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  
  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      <div className="flex w-full flex-col-reverse bmb:gap-10 gap-6 md:flex-row">
        <div className="gap flex w-full bmb:max-w-[21rem] flex-col justify-between gap-10 lg:max-w-md">
          <div className="space-y-4">
            <p className="text-foreground/80 uppercase">A essência da Jaber</p>
            <h2 className="font-bold text-3xl lg:text-4xl">
              Soluções que cuidam do essencial
            </h2>
          </div>
          <ul className="w-full space-y-4">
            {items.map((item) => (
              <li key={item.id} className="w-full space-y-4">
                <div className="h-[1.5px] w-full bg-foreground/10">
                  <div className="h-[1.5px] w-full bg-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg lg:text-xl">{item.title}</h3>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative bmb:h-screen min-h-[500px] w-full overflow-hidden rounded-[0.35rem] xl:aspect-square xl:max-h-[600px]">
          <Image
            src="/assets/serviços/seguros/about-2.webp"
            alt="Jaber Essence"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1500px"
          />
        </div>
      </div>
    </div>
  );
}
