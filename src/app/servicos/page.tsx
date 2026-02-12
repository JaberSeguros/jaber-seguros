import type { Metadata } from "next";
import Image from "next/image";
import { Services } from "../(sections)/services/servicos";

export const metadata: Metadata = {
  title: "Serviços | Seguros e Consórcios - Jaber Seguros",
  description:
    "Conheça nossos serviços em seguros e consórcios: saúde, vida empresarial, veículos, imóveis e mais. Soluções que protegem você e sua empresa com atendimento personalizado.",
};

export default function ServicosPage() {
  return (
    <section
      id="servicos"
      className="mx-auto mt-25 min-h-screen w-full max-w-[1500px] space-y-25 px-4"
      aria-labelledby="servicos-page-heading"
      aria-label="Página de Serviços - Seguros e Consórcios Jaber Seguros"
    >
      <div className="mx-auto flex w-fit flex-col items-center gap-8">
        <div className="flex animate-fade-up items-center gap-4">
          <div className="size-1.5 rounded-full bg-foreground" aria-hidden />
          <p className="font-bold text-foreground/80 text-lg">Serviços</p>
          <div className="size-1.5 rounded-full bg-foreground" aria-hidden />
        </div>
        <h1
          id="servicos-page-heading"
          className="max-w-[15rem] animate-fade-up text-center font-bold text-3xl leading-tight [animation-delay:200ms] md:max-w-sm md:text-5xl lg:max-w-xl lg:text-6xl"
        >
          Soluções que Protegem Você
        </h1>
      </div>
      <div className="relative aspect-video w-full animate-fade-up overflow-hidden rounded-lg [animation-delay:400ms]">
        <Image
          src="/assets/variadas/pexels-cottonbro-4568711.jpg"
          alt="Soluções em seguros e consórcios - Jaber Seguros protege você e sua empresa"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 1500px"
        />
      </div>
      <div className="mx-auto w-full max-w-[85rem] space-y-20 overflow-hidden md:space-y-32 lg:space-y-40 xl:px-4">
        <Services />
      </div>
    </section>
  );
}
