"use client";

import Link from "next/link";
import { useRef } from "react";
import { AnimatedImage } from "@/components/animated-image";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
    <section className="mx-auto min-h-screen w-full max-w-[1720px] px-4">
      <div className="flex w-full flex-col gap-10">
        <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:justify-between">
          <div className="flex items-center">
            <Separator />
            <Badge
              variant="outline"
              className="font-semibold text-base lg:text-lg"
            >
              Sobre nós
            </Badge>
          </div>
          <AnimatedText
            ref={aboutTextRef}
            as="h2"
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
              imageContainerClassName="aspect-square max-h-[300px] lg:max-h-[550px] w-full max-w-3xl overflow-hidden rounded-xl"
              src="/assets/about/about-1.webp"
            />
          </div>
          <div className="flex w-full max-w-lg items-start gap-4 lg:flex-col lg:gap-6">
            <div className="w-full">
              <AnimatedImage
                imageContainerClassName="aspect-square md:aspect-video max-h-[550px] w-full max-w-lg overflow-hidden rounded-xl"
                src="/assets/about/about-2.webp"
              />
            </div>
            <div className="flex h-full w-full max-w-sm flex-col justify-between gap-4">
              <ul className="space-y-2 md:space-y-3">
                {info.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <div className="aspect-square size-4 rounded-full bg-primary"></div>
                    <p className="text-xs md:text-base lg:text-lg">
                      {item.info}
                    </p>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-fit py-5 font-bold uppercase"
                asChild
              >
                <Link href="/sobre-nos">Saiba mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
