import { AnimatedImage } from "@/components/animted-image/animated-image";
import { AnimatedParagraph } from "./components/animated-paragrap";

const paragraphs = [
  {
    id: 1,
    content:
      "Na Jaber Seguros, acreditamos que proteção não deve ser complicada — ela deve trazer tranquilidade.",
  },
  {
    id: 2,
    content:
      "Nossa visão é construir uma experiência em seguros e consórcios baseada em confiança, clareza e cuidado, ajudando pessoas e empresas a se sentirem seguras nas decisões que realmente importam.",
  },
  {
    id: 3,
    content:
      "Mais do que oferecer apólices ou planos, queremos ser um parceiro de longo prazo. Alguém que entende a sua realidade, acompanha seus projetos e oferece soluções sob medida para cada fase da sua vida ou do seu negócio.",
  },
  {
    id: 4,
    content:
      "Cuidamos do que é importante para você porque sabemos que cada cliente tem uma história, um sonho e uma necessidade diferente — e é isso que nos move todos os dias.",
  },
];

export function Vision() {
  return (
    <section className="h-fit min-h-screen w-full bg-orange/20 px-4 py-20">
      <div className="mx-auto w-full max-w-[85rem] bmb:space-y-12 space-y-6">
        <div className="flex w-full bmb:flex-row flex-col justify-between gap-6">
          <h2 className="max-w-3xl text-nowrap font-bold text-3xl text-foreground lg:text-4xl">
            Nossa Visão
          </h2>
          <div className="grid bmb:grid-cols-2 grid-cols-1 gap-6">
            {paragraphs.map((paragraph) => (
              <AnimatedParagraph key={paragraph.id} className="text-foreground/90 md:text-lg lg:max-w-xs xl:max-w-sm">
                {paragraph.content}
              </AnimatedParagraph>
            ))}
          </div>
        </div>
        <div className="flex bmb:flex-row flex-col gap-6">
          <div className="w-full">
            <AnimatedImage
              imageContainerClassName="aspect-2/3 max-h-[310px] w-full max-w-xs overflow-hidden rounded-[0.33rem]"
              src="/assets/variadas/vision-1.webp"
              alt="Equipe Jaber Seguros - Atendimento personalizado para empresas e pessoas físicas"
            />
          </div>
          <div className="w-full">
            <AnimatedImage
              imageContainerClassName="aspect-square max-h-[300px] lg:aspect-video md:max-h-[550px] lg:max-h-none lg:min-h-[400px] xl:min-h-[550px] w-full max-w-3xl overflow-hidden rounded-[0.33rem]"
              src="/assets/variadas/vision-2.webp"
              alt="Consultoria Jaber Seguros - Escritório especializado em seguros, consórcios e benefícios"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
