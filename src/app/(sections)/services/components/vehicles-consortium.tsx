import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { JsonLd } from "@/components/json-ld";
import { ServiceIntro } from "@/components/service-intro";
import { Button } from "@/components/ui/button";

const items = [
  {
    id: 1,
    title: "Compra planejada e sem juros",
    content:
      "Adquira seu veículo sem entrada obrigatória e sem juros, pagando apenas a taxa de administração.",
    src: "/assets/serviços/consorcios/vehicles-1.webp",
    alt: "Consórcio para veículos: compra planejada e sem juros - Jaber Seguros",
  },
  {
    id: 2,
    title: "Parcelas que cabem no orçamento",
    content:
      "Planos flexíveis que permitem organização financeira sem comprometer seu fluxo de caixa.",
    src: "/assets/serviços/consorcios/vehicles-2.webp",
    alt: "Consórcio de carro e moto: parcelas que cabem no orçamento - Jaber Seguros",
  },
  {
    id: 3,
    title: "Mais poder de negociação",
    content:
      "Com a carta de crédito em mãos, você negocia como comprador à vista e pode escolher o veículo ideal.",
    src: "/assets/serviços/consorcios/vehicles-3.webp",
    alt: "Consórcio para veículos: poder de negociação com carta de crédito - Jaber Seguros",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consórcio para veículos",
  description:
    "Consórcio de carro e moto sem juros: compra planejada, parcelas acessíveis e carta de crédito para negociação. Planeje a aquisição do seu veículo com a assessoria Jaber Seguros.",
  provider: {
    "@type": "FinancialService",
    name: "Jaber Seguros",
  },
  areaServed: "BR",
  serviceType: "Consórcio de Veículos",
};

export function VehiclesConsortium() {
  return (
    <section
      id="consorcio-veiculos"
      className="w-full bg-border/30 py-20"
      aria-labelledby="vehicles-consortium-heading"
      aria-label="Consórcio para veículos - Carro e moto sem juros com parcelas acessíveis"
    >
      <JsonLd data={structuredData} />
      <div className="mx-auto w-full max-w-[85rem] px-4">
        <div className="flex w-full flex-col gap-10 lg:gap-15">
          <ServiceIntro
            title="Consórcio para veículos"
            alt="Consórcio para veículos - Carro e moto sem juros, parcelas acessíveis - Jaber Seguros"
          />
          <div className="flex w-full flex-col items-center gap-6 text-center">
            <h2
              id="vehicles-consortium-heading"
              className="font-bold text-3xl md:text-4xl lg:text-5xl"
            >
              Seu próximo veículo sem juros
            </h2>
            <AnimatedText
              as="p"
              id="vehicles-consortium-text"
              className="max-w-2xl text-muted-foreground text-sm md:text-lg lg:text-xl"
              type="lines"
            >
              Planeje a compra do seu carro ou moto de forma inteligente, com
              parcelas acessíveis e sem pagar juros, contando com a assessoria
              especializada da Jaber.
            </AnimatedText>
          </div>
          <div className="w-full space-y-6">
            <ul className="grid grid-cols-1 mlg:grid-cols-3! gap-6 md:grid-cols-2">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="rounded-sm border-2 border-foreground/10 bg-background p-1"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="mask-[linear-gradient(to_bottom,black_45%,transparent_77%)] object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 1500px"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end gap-2 px-5.5 pb-2">
                      <h3 className="font-bold text-foreground text-lg md:text-xl">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
              <li className="mlg:hidden! w-full flex-center rounded-2xl bg-foreground-dark p-6 text-primary-foreground">
                <Link
                  href="/seguros/empresarial"
                  className="size-full flex-center"
                  title="Saiba mais sobre Consórcio para veículos - Jaber Seguros"
                  aria-label="Saiba mais sobre Consórcio para veículos, carro e moto sem juros, e solicite uma cotação"
                >
                  <Button
                    variant="ghost"
                    className="cursor-pointer uppercase hover:bg-foreground-dark hover:text-primary-foreground/80"
                  >
                    Saiba Mais <ArrowRightIcon className="size-4" aria-hidden />
                  </Button>
                </Link>
              </li>
            </ul>
            <div className="mlg:flex! hidden! mx-auto w-fit flex-center rounded-full bg-foreground-dark p-4 px-6 text-primary-foreground">
              <Link
                href="/seguros/empresarial"
                className="size-full flex-center"
                title="Saiba mais sobre Consórcio para veículos - Jaber Seguros"
                aria-label="Saiba mais sobre Consórcio para veículos, carro e moto sem juros, e solicite uma cotação"
              >
                <Button
                  variant="ghost"
                  className="cursor-pointer uppercase hover:bg-foreground-dark hover:text-primary-foreground/80"
                >
                  Saiba Mais <ArrowRightIcon className="size-4" aria-hidden />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
