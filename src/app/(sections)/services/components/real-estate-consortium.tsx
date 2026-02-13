import Image from "next/image";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { ServiceIntro } from "@/components/service-intro";

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

export function RealEstateConsortium() {
  return (
    <section className="mx-auto w-full max-w-[85rem] px-4">
      <div className="w-full space-y-10 lg:space-y-15">
        <ServiceIntro
          title="Consórcio para imóveis"
          alt="Consórcio para imóveis - Jaber Seguros"
        />
        <div className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="relative aspect-square max-h-[780px] w-full overflow-hidden rounded-[0.33rem] lg:aspect-2/3 lg:max-w-3xl">
            <div className="flex flex-col justify-between gap-8">
              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                Seu imóvel com planejamento inteligente
              </h2>
              <div className="flex flex-col gap-6">
                <AnimatedText
                  as="p"
                  id="real-estate-consortium-text"
                  className="max-w-2xl text-muted-foreground text-sm md:text-lg lg:text-xl"
                  type="lines"
                >
                  Planeje a compra do seu imóvel com parcelas acessíveis e sem
                  pagar juros, contando com a assessoria especializada da Jaber.
                </AnimatedText>
                <div className="flex items-center gap-4">
                  {miniImages.map((image) => (
                    <div
                      key={image.id}
                      className="relative aspect-square w-12 overflow-hidden rounded-[0.35rem]"
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
        </div>
      </div>
    </section>
  );
}
