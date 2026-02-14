import { RiStarFill } from "@remixicon/react";
import { HandCoins, HeartPulse, Leaf, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { AnimatedImage } from "@/components/animted-image/animated-image";
import { ServiceIntro } from "@/components/service-intro";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    id: 1,
    benefit: "Tranquilidade",
    Icon: <Leaf />,
  },
  {
    id: 2,
    benefit: "Prevenção",
    Icon: <ShieldCheck />,
  },
  {
    id: 3,
    benefit: "Qualidade de Vida",
    Icon: <HeartPulse />,
  },
  {
    id: 4,
    benefit: "Segurança financeira",
    Icon: <HandCoins />,
  },
];

export function HealthInsurance() {
  const textRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="seguro-saude"
      className="mx-auto min-h-screen w-full max-w-[85rem] px-4"
      aria-labelledby="health-insurance-title"
      aria-label="Seguro Saúde - Planos e benefícios Jaber Seguros"
    >
      <div className="flex w-full flex-col gap-10 lg:gap-15">
        <div className="flex items-center gap-2">
          <ServiceIntro title="Seguro Saúde" alt="Seguro Saúde" />
        </div>
        <div className="flex h-fit w-full flex-col-reverse gap-8 lg:flex-row lg:gap-10">
          <div className="mx-auto flex w-fit flex-col gap-8">
            <div className="relative">
              <AnimatedImage
                imageContainerClassName="relative aspect-1/2 max-h-[550px] w-[92vw] overflow-hidden rounded-[0.35rem] lg:w-[30vw] lg:max-w-[526px]"
                src="/assets/serviços/seguros/saude-1.webp"
                alt="Seguro Saúde Jaber Seguros - Cuidar da sua vida com tranquilidade e qualidade"
                hasAbsoluteContent
                absoluteContentClassName="-translate-x-1/2 absolute bottom-4 left-1/2 w-full max-w-xs rounded-lg bg-foreground/20 p-2 text-center backdrop-blur-xs lg:max-w-sm"
              >
                <p className="font-bold text-primary-foreground md:text-lg">
                  “Ter um bom seguro saúde muda completamente a forma como você
                  cuida da sua vida.”
                </p>
              </AnimatedImage>
            </div>
            <div className="flex w-full flex-col">
              <div className="flex items-center gap-2">
                <RiStarFill
                  className="size-5 text-yellow-500 md:size-10"
                  aria-hidden
                />
                <p className="font-medium text-sm md:text-lg lg:text-3xl">
                  5.0
                </p>
              </div>
              <p className="ps-2 text-muted-foreground text-sm md:text-base">
                Serviço de qualidade para você e sua família.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-end gap-8">
            <AnimatedText
              ref={textRef}
              as="h3"
              id="health-insurance-heading"
              className="max-w-4xl text-2xl md:text-3xl lg:text-[2.157rem]"
              type="lines"
            >
              Acreditamos que saúde vai além de um plano. É sobre acesso rápido,
              atendimento de qualidade e a tranquilidade de saber que você e sua
              família estão protegidos quando mais precisam.
            </AnimatedText>
            <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-end">
              <AnimatedImage
                imageContainerClassName="relative aspect-2/3 max-h-[350px] w-[92vw] overflow-hidden rounded-[0.35rem] lg:max-h-[500px] lg:w-[35vw] lg:max-w-[466px]"
                src="/assets/serviços/seguros/saude-2.webp"
                alt="Planos de saúde Jaber Seguros - Principais operadoras com suporte humanizado"
              />
              <div className="flex h-full w-full flex-col items-end justify-between gap-6">
                <div className="flex w-full flex-col gap-4 rounded-lg border border-border/50 p-2 lg:flex-row lg:items-start lg:justify-between">
                  <p className="max-w-sm md:text-lg">
                    Conte com planos das principais operadoras do mercado, com
                    suporte humano do início ao fim.
                  </p>
                  <Button
                    className="cursor-pointer rounded-sm py-6 font-bold"
                    asChild
                  >
                    <Link
                      href="/servicos/seguro-saude"
                      title="Saiba mais sobre Seguro Saúde - Jaber Seguros"
                      aria-label="Ir para página Seguro Saúde - Planos e cotação"
                    >
                      Saiba Mais
                    </Link>
                  </Button>
                </div>
                <div className="w-full rounded-xl border bg-chart-5 p-6 lg:w-[90%]">
                  <div className="flex w-full flex-col gap-15">
                    <p
                      id="benefits-heading"
                      className="font-bold text-primary-foreground text-xl"
                    >
                      Por que contratar um Seguro Saúde?
                    </p>
                    <ul className="grid w-full list-none grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                      {benefits.map((benefit) => (
                        <li
                          key={benefit.id}
                          className="flex items-center gap-2"
                        >
                          <div
                            className="rounded-full bg-primary p-2 text-primary-foreground"
                            aria-hidden
                          >
                            {benefit.Icon}
                          </div>
                          <p className="font-semibold text-muted text-sm xl:text-base">
                            {benefit.benefit}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
