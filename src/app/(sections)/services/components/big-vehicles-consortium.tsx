import { ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { EvolutionIcon } from "@/components/icons/evolution-icon";
import { PlanIcon } from "@/components/icons/plan-icon";
import { StrategyIcon } from "@/components/icons/strategy-icon";
import { TimeIcon } from "@/components/icons/time-icon";
import { ServiceIntro } from "@/components/service-intro";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { imagesContentVariants } from "./anime";

const items = [
  {
    id: 1,
    title: "Planejamento inteligente",
    shortTitle: "Planejamento",
    description: "Evite investimentos impulsivos e preserve o capital de giro.",
    Icon: PlanIcon,
  },
  {
    id: 2,
    title: "Previsibilidade financeira",
    shortTitle: "Previsibilidade",
    description: "Parcelas estáveis que facilitam o controle do negócio.",
    Icon: TimeIcon,
  },
  {
    id: 3,
    title: "Evolução sustentável",
    shortTitle: "Evolução",
    description: "Modernize sua operação sem travar o crescimento.",
    Icon: EvolutionIcon,
  },
  {
    id: 4,
    title: "Aquisição estratégica",
    shortTitle: "Aquisição",
    description: "A máquina certa, no momento certo.",
    Icon: StrategyIcon,
  },
];

const images = [
  {
    id: 1,
    src: "/assets/serviços/consorcios/veiculo-pesado-5.webp",
    alt: "Consórcio veículos pesados - Planejamento inteligente para aquisição, Jaber Seguros",
    Icon: PlanIcon,
    contentTitle: "Quando o trabalho cresce, a decisão precisa ser calculada.",
    contentDescription:
      "O consórcio permite planejar a aquisição de veículos pesados de forma inteligente, respeitando o ciclo produtivo e evitando endividamentos desnecessários.",
  },
  {
    id: 2,
    src: "/assets/serviços/consorcios/veiculo-pesado-4.webp",
    alt: "Consórcio veículos pesados - Previsibilidade financeira e parcelas estáveis, Jaber Seguros",
    Icon: TimeIcon,
    contentTitle: "Surpresas no orçamento custam caro.",
    contentDescription:
      "Com parcelas definidas desde o início, você mantém controle total das finanças e toma decisões com mais segurança, mesmo em cenários instáveis.",
  },
  {
    id: 3,
    src: "/assets/serviços/consorcios/veiculo-pesado-6.webp",
    alt: "Consórcio veículos pesados - Evolução sustentável e modernização da frota, Jaber Seguros",
    Icon: EvolutionIcon,
    contentTitle: "Produtividade não pode parar por falta de planejamento.",
    contentDescription:
      "O consórcio viabiliza a modernização da frota sem comprometer recursos que precisam continuar girando no negócio.",
  },
  {
    id: 4,
    src: "/assets/serviços/consorcios/veiculo-pesado-8.webp",
    alt: "Consórcio veículos pesados - Aquisição estratégica de maquinário, Jaber Seguros",
    Icon: StrategyIcon,
    contentTitle: "Nem sempre comprar agora é a melhor escolha.",
    contentDescription:
      "Aqui, você se organiza para adquirir maquinário robusto no tempo certo, com estratégia e visão de longo prazo.",
  },
];

export function BigVehiclesConsortium() {
  const [activeImage, setActiveImage] = useState(1);
  return (
    <section
      id="consorcio-veiculos-pesados"
      className="mx-auto min-h-screen w-full max-w-[85rem] px-4"
      aria-labelledby="big-vehicles-consortium-title"
      aria-label="Consórcio para veículos pesados - Planos e benefícios Jaber Seguros"
    >
      <div className="flex w-full flex-col gap-10 lg:gap-15">
        <ServiceIntro
          title="Consórcio para veículos pesados"
          alt="Consórcio para veículos pesados"
        />
        <div className="flex w-full flex-col gap-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row">
            <h3 className="max-w-2xl font-bold text-3xl md:text-4xl lg:text-5xl xl:max-w-3xl">
              Produtividade no campo começa com decisões inteligentes.
            </h3>
            <AnimatedText
              as="p"
              id="big-vehicles-consortium-text"
              className="max-w-md text-muted-foreground text-sm md:text-lg"
              type="lines"
            >
              Nosso modelo de consórcio conecta planejamento financeiro,
              previsibilidade e acesso a maquinário de alto desempenho — sem
              comprometer o fluxo de caixa e sem juros.
            </AnimatedText>
          </div>
          <div className="relative flex w-full flex-col gap-6">
            <div className="sticky top-0 grid grid-cols-1 gap-2 md:grid-cols-2 2xl:grid-cols-4!">
              {items.map((item) => {
                const { Icon, title, description, id } = item;
                const isActive = activeImage === id;
                return (
                  <button
                    type="button"
                    key={id}
                    className={cn(
                      "flex cursor-pointer items-start gap-2 rounded-lg p-2 text-left transition-colors duration-300 hover:bg-primary/8",
                      isActive && "bg-primary/12 hover:bg-primary/12",
                    )}
                    onClick={() => setActiveImage(id)}
                    aria-label={`Selecionar ${title}`}
                    aria-pressed={isActive}
                  >
                    <div
                      className={cn(
                        "aspect-square w-19 flex-center shrink-0 rounded-lg bg-foreground/5 lg:w-16",
                        isActive && "bg-primary/50",
                      )}
                    >
                      <Icon color={isActive ? "#ffffff" : "#000000"} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="font-bold text-lg">{title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="relative h-[80vh] min-h-[520px] w-full overflow-hidden rounded-2xl">
              <div className="absolute top-0 z-12 w-full 2xl:hidden">
                <div className="grid grid-cols-4 sm:grid-cols-4">
                  {items.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      className={cn(
                        "aspect-square max-h-[200px] w-full flex-center cursor-pointer bg-foreground/20 transition-colors duration-300 hover:bg-primary/20",
                        item.id === 1
                          ? "border-b"
                          : item.id === 2
                            ? "border-r border-b border-l"
                            : item.id === 3
                              ? "border-b"
                              : "border-b border-l",
                        activeImage === item.id &&
                          "bg-primary/50 hover:bg-primary/50",
                      )}
                      onClick={() => setActiveImage(item.id)}
                      aria-label={`Ver ${item.shortTitle} - consórcio veículos pesados`}
                      aria-pressed={activeImage === item.id}
                    >
                      <p className="font-bold text-primary-foreground text-xs sm:text-sm">
                        {item.shortTitle}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 size-full">
                {images.map((image) => (
                  <motion.div
                    variants={imagesContentVariants}
                    initial="hidden"
                    animate={activeImage === image.id ? "visible" : "hidden"}
                    key={image.id}
                    className={cn(
                      "relative hidden size-full",
                      activeImage === image.id && "z-10 block",
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="size-full object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 1500px"
                    />
                    <div className="-translate-x-1/2 absolute bottom-2 left-1/2 w-[92%] max-w-xl rounded-lg bg-primary/40 p-6 backdrop-blur-xs backdrop-brightness-75">
                      <div className="flex flex-col gap-8">
                        <div className="w-fit shrink-0 rounded-full bg-primary/60 p-4 md:p-2">
                          <image.Icon color="#ffffff" size={40} />
                        </div>
                        <div className="flex flex-col gap-4">
                          <h4 className="font-bold text-2xl text-primary-foreground">
                            {image.contentTitle}
                          </h4>
                          <p className="text-muted">
                            {image.contentDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <Button
            asChild
            className="w-full bg-accent-foreground py-8 text-primary-foreground hover:bg-accent-foreground hover:text-primary-foreground/80"
          >
            <Link href="/servicos/consorcio-veiculos-pesados">
              Saiba Mais <ArrowRightIcon className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
