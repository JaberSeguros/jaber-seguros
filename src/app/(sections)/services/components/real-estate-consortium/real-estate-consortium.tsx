import Image from "next/image";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { JsonLd } from "@/components/json-ld";
import { ServiceIntro } from "@/components/service-intro";
import { RealEstateItemCard } from "./real-estate-item-card";

const miniImages = [
  {
    id: 1,
    src: "/assets/serviços/consorcios/imovel-6.webp",
    alt: "Consórcio para imóveis: planejamento inteligente para compra de imóvel, Jaber Seguros",
  },
  {
    id: 2,
    src: "/assets/serviços/consorcios/imovel-4.webp",
    alt: "Consórcio para imóveis: parcelas acessíveis para compra de imóvel, Jaber Seguros",
  },
];

const items = [
  {
    id: 1,
    title: "Realize seu sonho sem juros",
    content:
      "Adquira imóvel residencial ou comercial pagando apenas taxa de administração, sem juros e sem entrada obrigatória.",
    src: "/assets/serviços/consorcios/imovel-1.webp",
    alt: "Consórcio para imóveis: realize seu sonho sem juros, Jaber Seguros",
  },
  {
    id: 2,
    title: "Flexibilidade para diferentes objetivos",
    content:
      "Use a carta de crédito para comprar, construir, reformar ou quitar financiamento imobiliário.",
    src: "/assets/serviços/consorcios/imovel-2.webp",
    alt: "Consórcio para imóveis: flexibilidade para diferentes objetivos, Jaber Seguros",
  },
  {
    id: 3,
    title: "Poder de compra à vista",
    content:
      "Com a carta contemplada, você negocia como comprador à vista e amplia suas oportunidades.",
    src: "/assets/serviços/consorcios/imovel-3.webp",
    alt: "Consórcio para imóveis: poder de compra à vista, Jaber Seguros",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consórcio para imóveis",
  description:
    "Consórcio imobiliário sem juros: compre, construa, reforme ou quite financiamento com parcelas acessíveis e carta de crédito. Residencial e comercial com assessoria Jaber Seguros.",
  provider: {
    "@type": "FinancialService",
    name: "Jaber Seguros",
  },
  areaServed: "BR",
  serviceType: "Consórcio Imobiliário",
};

export function RealEstateConsortium() {
  return (
    <section
      id="consorcio-imoveis"
      className="mx-auto w-full max-w-[85rem] px-4"
      aria-labelledby="real-estate-consortium-heading"
      aria-label="Consórcio para imóveis - Compre, construa ou reforme sem juros com parcelas acessíveis"
    >
      <JsonLd data={structuredData} />
      <div className="w-full space-y-10 lg:space-y-15">
        <ServiceIntro
          title="Consórcio para imóveis"
          alt="Consórcio para imóveis - Compre ou construa seu imóvel sem juros - Jaber Seguros"
        />
        <div className="flex w-full flex-col justify-between gap-15 lg:flex-row lg:items-center lg:gap-8">
          <div className="relative max-h-[640px] w-full overflow-hidden rounded-[0.33rem] lg:aspect-2/3 lg:max-w-xl">
            <div className="flex h-fit flex-col gap-20 lg:h-full lg:justify-between">
              <h2
                id="real-estate-consortium-heading"
                className="text-balance font-bold text-3xl md:text-4xl lg:text-5xl"
              >
                Seu imóvel com planejamento inteligente
              </h2>
              <div className="flex flex-col gap-8">
                <AnimatedText
                  as="p"
                  id="real-estate-consortium-text"
                  className="max-w-2xl font-bold text-muted-foreground md:text-lg lg:text-xl"
                  type="lines"
                >
                  Planeje a compra do seu imóvel com parcelas acessíveis e sem
                  pagar juros, contando com a assessoria especializada da Jaber.
                </AnimatedText>
                <div className="flex items-center gap-4">
                  {miniImages.map((image) => (
                    <div
                      key={image.id}
                      className="relative aspect-square w-32 overflow-hidden rounded-[0.35rem]"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover object-center"
                        sizes="500px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-4">
            {items.map((item) => (
              <RealEstateItemCard key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
