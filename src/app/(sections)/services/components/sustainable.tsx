import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { AnimatedImage } from "@/components/animted-image/animated-image";
import { JsonLd } from "@/components/json-ld";
import { ServiceIntro } from "@/components/service-intro";
import { Button } from "@/components/ui/button";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consórcio Sustentável",
  description:
    "Consórcio para energia solar e soluções sustentáveis: adquira sistemas de energia solar, eficiência energética sem juros. Reduza custos com energia e valorize seu patrimônio com a Jaber Seguros.",
  provider: {
    "@type": "FinancialService",
    name: "Jaber Seguros",
  },
  areaServed: "BR",
  serviceType: "Consórcio para Soluções Sustentáveis e Energia Limpa",
};

export function Sustainable() {
  return (
    <section
      id="consorcio-sustentavel"
      className="w-full"
      aria-labelledby="sustainable-consortium-heading"
      aria-label="Consórcio Sustentável - Energia solar e soluções de eficiência energética sem juros"
    >
      <JsonLd data={structuredData} />
      <div className="mx-auto w-full max-w-[85rem] px-4">
        <div className="w-full space-y-10 lg:space-y-15">
          <ServiceIntro
            title="Consórcio Sustentável"
            alt="Consórcio Sustentável - Energia solar e eficiência energética sem juros - Jaber Seguros"
          />
          <div className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <AnimatedImage
              imageContainerClassName="relative aspect-square max-h-[600px] w-full overflow-hidden rounded-[0.33rem] lg:aspect-2/3 lg:max-w-xl"
              src="/assets/serviços/consorcios/sustentavel-2.webp"
              alt="Consórcio Sustentável - Soluções de energia e eficiência energética - Jaber Seguros"
            />
            <div className="relative flex w-full flex-col justify-between gap-15 overflow-hidden rounded-[0.33rem] lg:aspect-2/3 lg:max-h-[600px]">
              <div className="space-y-6">
                <h2
                  id="sustainable-consortium-heading"
                  className="font-bold text-3xl md:text-4xl"
                >
                  Invista em soluções sustentáveis e reduza custos com energia
                  enquanto contribui para um futuro mais responsável.
                </h2>
              </div>
              <div className="flex w-full flex-col justify-between gap-8 xl:flex-row xl:items-end">
                <div className="space-y-6">
                  <div className="w-full space-y-4">
                    <h3 className="font-bold text-xl lg:text-2xl">
                      Energia limpa com planejamento financeiro
                    </h3>
                    <p className="text-muted-foreground">
                      Adquira sistemas de energia solar, projetos de eficiência
                      energética ou outras soluções sustentáveis sem pagar
                      juros, utilizando o consórcio como alternativa estratégica
                      para reduzir despesas no longo prazo e valorizar seu
                      patrimônio.
                    </p>
                  </div>
                  <Button
                    className="cursor-pointer rounded-full bg-accent-foreground px-8! py-6 uppercase hover:bg-accent-foreground hover:text-primary-foreground/80"
                    asChild
                  >
                    <Link
                      href="/seguros/seguro-empresarial"
                      title="Saiba mais sobre Consórcio Sustentável - Jaber Seguros"
                      aria-label="Saiba mais sobre Consórcio Sustentável, energia solar e eficiência energética sem juros"
                    >
                      Saiba Mais{" "}
                      <ArrowRightIcon className="size-4" aria-hidden />
                    </Link>
                  </Button>
                </div>
                <AnimatedImage
                  imageContainerClassName="relative aspect-video max-h-[350px] w-full shrink-0 overflow-hidden rounded-[0.33rem] lg:hidden xl:block xl:aspect-square xl:max-h-[300px] xl:max-w-[300px]"
                  src="/assets/serviços/consorcios/sustentavel-1.webp"
                  alt="Consórcio Sustentável - Energia solar e planejamento financeiro - Jaber Seguros"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
