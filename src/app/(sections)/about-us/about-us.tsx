"use client";

import Link from "next/link";
import { useRef } from "react";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { AnimatedImage } from "@/components/animted-image/animated-image";
import { IntroductionBadge } from "@/components/introduction-badge";
import { Button } from "@/components/ui/button";

const info = [
  {
    id: 1,
    info: "Soluções em seguros e consórcios",
  },
  {
    id: 2,
    info: "Empresas e pessoas físicas",
  },
  {
    id: 3,
    info: "Especialistas em grandes projetos",
  },
];

export function AboutUs() {
  const aboutTextRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="sobre-nos"
      className="mx-auto min-h-screen w-full max-w-7xl px-4"
      aria-labelledby="about-heading"
      aria-label="Sobre a Jaber Seguros - Corretora de seguros e consórcios"
    >
      <div className="flex w-full flex-col gap-10 lg:gap-15">
        <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:justify-between">
          <IntroductionBadge text="Sobre nós" />
          <AnimatedText
            ref={aboutTextRef}
            as="h2"
            id="about-heading"
            className="max-w-3xl font-bold text-2xl text-muted-foreground lg:text-3xl"
            type="lines"
          >
            A Jaber Seguros é uma consultoria com mais de 15 anos de experiência
            em seguros, consórcios e benefícios, oferecendo uma gestão
            inteligente, atualizada e humanizada, sempre ao lado do cliente para
            apoiar seu crescimento.
          </AnimatedText>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="w-full">
            <AnimatedImage
              imageContainerClassName="aspect-square max-h-[300px] md:max-h-[550px] w-full max-w-3xl overflow-hidden rounded-xl"
              src="/assets/about/about-1.webp"
              alt="Consultoria Jaber Seguros - Escritório especializado em seguros, consórcios e benefícios"
            />
          </div>
          <div className="flex w-full max-w-4xl items-start gap-4 lg:max-w-lg lg:flex-col lg:gap-6">
            <div className="w-full">
              <AnimatedImage
                imageContainerClassName="aspect-square md:aspect-video max-h-[550px] w-full max-w-lg overflow-hidden rounded-xl"
                src="/assets/about/about-2.webp"
                alt="Equipe Jaber Seguros - Atendimento personalizado para empresas e pessoas físicas"
              />
            </div>
            <div className="flex h-full w-full max-w-sm flex-col justify-between gap-4">
              <ul
                className="space-y-2 md:space-y-3"
                aria-label="Áreas de atuação"
              >
                {info.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <div
                      className="aspect-square size-4 rounded-full bg-primary"
                      aria-hidden
                    />
                    <p className="text-xs md:text-base lg:text-lg">
                      {item.info}
                    </p>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-fit py-5 font-bold text-primary uppercase"
                asChild
              >
                <Link
                  href="/sobre-nos"
                  title="Saiba mais sobre a Jaber Seguros - Página Sobre nós"
                  aria-label="Ir para página Sobre nós - Conheça a Jaber Seguros"
                >
                  Saiba mais
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
