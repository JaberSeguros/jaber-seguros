import type { Metadata } from "next";
import Image from "next/image";
import { OurStory } from "./components/our-story/our-story";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Sobre Nós | Seguros e Consórcios - Jaber Seguros",
  description:
    "Conheça a história da Jaber Seguros, uma consultoria especializada em seguros, consórcios e benefícios. Saiba como a gente nasceu e como estamos ajudando pessoas e empresas a se protegerem e prosperarem.",
};

export default function SobreNosPage() {
  return (
    <section
      id="sobre-nos"
      className="mx-auto mt-25 min-h-screen w-full max-w-[1500px] space-y-25"
      aria-labelledby="sobre-nos-page-heading"
      aria-label="Página de Sobre Nós - Seguros e Consórcios Jaber Seguros"
    >
      <div className="w-full space-y-25 px-4">
        <div className="mx-auto flex w-fit flex-col items-center gap-8">
          <div className="flex animate-fade-in-up items-center gap-4">
            <div className="size-1.5 rounded-full bg-foreground" aria-hidden />
            <p className="font-bold text-foreground/80 text-lg">Sobre Nós</p>
            <div className="size-1.5 rounded-full bg-foreground" aria-hidden />
          </div>
          <h1
            id="sobre-nos-page-heading"
            className="max-w-md animate-fade-up text-center font-bold text-3xl leading-tight [animation-delay:200ms] md:text-5xl lg:max-w-xl lg:text-6xl"
          >
            Experiência que gera tranquilidade
          </h1>
        </div>
        <div className="relative aspect-video w-full animate-fade-up overflow-hidden rounded-lg [animation-delay:400ms]">
          <Image
            src="/assets/variadas/pexels-pavel-danilyuk-7938066.jpg"
            alt="Soluções em seguros e consórcios - Jaber Seguros protege você e sua empresa"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 1500px"
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl space-y-20 overflow-hidden px-4 md:space-y-32 lg:space-y-40">
        <OurStory />
        <Separator />
      </div>
    </section>
  );
}
