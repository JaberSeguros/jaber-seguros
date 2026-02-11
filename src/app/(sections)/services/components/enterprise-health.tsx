import Image from "next/image";
import Link from "next/link";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { AnimatedImage } from "@/components/animted-image/animated-image";
import { ChartExample } from "@/components/chart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const solutions = [
  {
    id: 1,
    title: "Proteção por morte e invalidez",
    description:
      "Garante segurança financeira aos colaboradores e seus familiares em situações inesperadas.",
  },
  {
    id: 2,
    title: "Coberturas adicionais",
    description:
      "Inclua proteção para acidentes pessoais, doenças graves e afastamentos, conforme a necessidade da empresa.",
  },
  {
    id: 3,
    title: "Benefício estratégico para retenção",
    description:
      "Seguro de Vida Empresarial aumenta o engajamento, reduz turnover e valoriza o pacote de benefícios.",
  },
  {
    id: 4,
    title: "Gestão simples e consultiva",
    description:
      "Nós cuidamos de toda a estrutura, implantação e acompanhamento do seguro, com atendimento próximo e humanizado.",
  },
];

export function EnterpriseHealth() {
  return (
    <section
      id="seguro-saude-empresarial"
      className="min-h-screen w-full"
      aria-labelledby="enterprise-health-title"
      aria-label="Seguro Vida Empresarial - Planos e benefícios para empresas Jaber Seguros"
    >
      <div className="flex w-full flex-col gap-10 lg:gap-15">
        <div className="flex items-center gap-2">
          <div className="relative aspect-square size-18 opacity-50 grayscale-75 sm:size-20">
            <Image
              src="/assets/logos/logo-only.png"
              alt="Seguro Vida Empresarial"
              width={80}
              height={80}
            />
          </div>
          <p className="rounded-full border border-primary/15 bg-primary/10 p-1.5 font-bold sm:text-lg md:text-xl lg:text-2xl">
            Seguro Vida Empresarial
          </p>
        </div>
        <div className="flex w-full flex-col gap-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <h3 className="max-w-xl font-bold text-3xl md:text-4xl lg:text-5xl">
              Proteção inteligente para quem faz sua empresa crescer.
            </h3>
            <div
              className="relative size-30 opacity-50 grayscale-75"
              aria-hidden
            >
              <Image
                src="/assets/logos/logo-only.png"
                alt="Jaber Seguros - Seguro Vida Empresarial para empresas"
                fill
                className="object-cover object-center"
              />
            </div>
            <AnimatedText
              as="p"
              id="enterprise-health-text"
              className="max-w-md text-muted-foreground text-sm md:text-lg"
              type="lines"
            >
              Empresas que cuidam de pessoas constroem resultados mais sólidos e
              duradouros. O Seguro de Vida Empresarial fortalece o vínculo com
              seus colaboradores e protege sua operação.
            </AnimatedText>
          </div>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-8">
            <AnimatedImage
              src="/assets/serviços/seguros/seguro-empresarial.webp"
              imageContainerClassName="relative aspect-8/16 w-full overflow-hidden rounded-2xl max-h-[500px] lg:max-h-[630px] lg:min-w-[450px] lg:w-[43vw] lg:max-w-[530px] xl:min-w-[550px]"
              alt="Seguro de Vida Empresarial Jaber Seguros - Proteção inteligente para quem faz sua empresa crescer."
              hasAbsoluteContent
              absoluteContentClassName="-translate-x-1/2 absolute bottom-4 left-1/2 w-[90%] rounded-lg bg-primary-foreground p-6 backdrop-blur-xs lg:max-w-lg"
            >
              <div className="mx-auto flex w-full max-w-md flex-col items-center gap-8">
                <div className="flex w-full items-center gap-2">
                  <p className="max-w-xs font-semibold text-foreground md:max-w-sm md:text-lg">
                    Proteção financeira, segurança e tranquilidade para sua
                    equipe.
                  </p>
                  <ChartExample />
                </div>
                <div className="flex w-full flex-col items-start justify-between gap-4 2xl:flex-row 2xl:gap-1">
                  <div className="text-balance text-muted-foreground">
                    Planos personalizados conforme o porte e a realidade da sua
                    empresa.
                  </div>
                  <div className="flex w-full max-w-sm items-start justify-between gap-3">
                    <div className="flex flex-col gap-2">
                      <p>Personalizável</p>
                      <p className="font-bold text-xl md:text-2xl">100%</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-nowrap">Percepcão de valor</p>
                      <p className="font-bold text-xl md:text-2xl">+ 80%</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedImage>
            <ol className="flex w-full list-none flex-col gap-6 xl:w-[44rem]">
              {solutions.map((solution) => (
                <li
                  key={solution.id}
                  className={cn(
                    "flex items-center gap-6 border-b pb-6",
                    solution.id === solutions.length
                      ? "border-b-0"
                      : "border-b",
                  )}
                >
                  <div
                    className="size-13 flex-center shrink-0 rounded-full border sm:size-15"
                    aria-hidden
                  >
                    <span className="text-muted-foreground text-xl sm:text-2xl">{`0${solution.id}`}</span>
                  </div>
                  <div className="flex max-w-xl flex-col gap-5">
                    <h4 className="font-bold text-2xl md:text-2xl xl:text-[2.1rem]">
                      {solution.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mx-auto aspect-video max-h-[330px] w-full max-w-3xl flex-center rounded-2xl border bg-primary/15">
            <div className="flex flex-col items-center gap-8">
              <div className="relative size-24">
                <Image
                  src="/assets/icons/gesture.png"
                  alt="Gesture"
                  fill
                  className="object-cover object-center"
                  sizes="400px"
                />
              </div>
              <p className="font-bold text-lg md:text-xl xl:text-2xl">
                Um gesto simples, um impacto gigante.
              </p>
              <Button asChild className="rounded-full bg-black py-5 font-bold">
                <Link
                  href="https://wa.me/5511993101907"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Falar com consultor Jaber Seguros no WhatsApp - Seguro Vida Empresarial"
                  aria-label="Abrir WhatsApp para falar com consultor sobre Seguro Vida Empresarial"
                >
                  Falar com um consultor
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
