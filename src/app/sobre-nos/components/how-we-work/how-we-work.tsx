import { MessageCircleIcon, PinIcon, RocketIcon } from "lucide-react";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { AnimatedImage } from "@/components/animted-image/animated-image";

const items = [
  {
    id: 1,
    content:
      "Orientamos você desde a análise da necessidade até a implementação da solução.",
    icon: <PinIcon className="shrink-0 text-foreground" size={32} />,
  },
  {
    id: 2,
    content:
      "Você fala com especialistas que escutam, analisam e resolvem com agilidade.",
    icon: <MessageCircleIcon className="shrink-0 text-foreground" size={32} />,
  },
  {
    id: 3,
    content:
      "Processos organizados, suporte contínuo e atualização sempre que necessário.",
    icon: <RocketIcon className="shrink-0 text-foreground" size={32} />,
  },
];

const images = [
  {
    id: 1,
    src: "/assets/variadas/pexels-mikhail-nilov-6530565.jpg",
    alt: "Como a Jaber Seguros funciona - Transparência, planejamento, atendimento ágil e humano",
    className:
      "relative aspect-square max-h-[80vh] min-h-[400px] w-full overflow-hidden rounded-[0.33rem] md:aspect-2/3 md:max-h-[550px] md:min-h-none",
  },
  {
    id: 2,
    src: "/assets/variadas/pexels-boris-pavlikovsky-6793974.jpg",
    alt: "Como a Jaber Seguros funciona - Transparência, planejamento, atendimento ágil e humano",
    className:
      "relative aspect-square size-full overflow-hidden rounded-[0.35rem] md:col-span-2 md:aspect-auto",
  },
];

export function HowWeWork() {
  return (
    <section
      id="como-funciona-jaber"
      className="w-full bg-border/30 py-20 lg:py-35"
      aria-labelledby="how-we-work-heading"
      aria-label="Como a Jaber Seguros funciona - Transparência, planejamento, atendimento ágil e humano"
    >
      <div className="mx-auto w-full max-w-[85rem] space-y-20 px-4">
        <header className="flex w-full flex-col gap-4">
          <p
            className="animate-fade-up uppercase [animation-delay:600ms]"
            aria-hidden
          >
            Como Trabalhamos
          </p>
          <div className="flex w-full flex-col justify-between gap-8 lg:flex-row">
            <h2
              id="how-we-work-heading"
              className="max-w-xl animate-fade-up font-medium text-4xl text-foreground leading-tight tracking-tight [animation-delay:800ms] lg:text-5xl xl:text-[3.5rem]"
            >
              Experiência técnica com atendimento humano
            </h2>
            <div className="w-full lg:max-w-[41rem]">
              <AnimatedText
                as="p"
                id="how-we-work-text"
                className="font-bold text-muted-foreground lg:text-lg"
                type="lines"
              >
                Na Jaber Seguros, unimos experiência de mais de 15 anos no
                mercado segurador com um atendimento personalizado e direto.
                Trabalhamos com as principais operadoras do país para garantir
                segurança, precisão nas propostas e tranquilidade para nossos
                clientes.
                <br />
                <br />
                Nosso compromisso é equilibrar estrutura e cuidado — porque cada
                decisão envolve o que é importante para você ou sua empresa.
              </AnimatedText>
            </div>
          </div>
        </header>
        <div className="space-y-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {images.map((image) => (
              <AnimatedImage
                key={image.id}
                src={image.src}
                alt={image.alt}
                imageContainerClassName={image.className}
              />
            ))}
          </div>
          <div className="mx-auto grid w-full max-w-[85rem] grid-cols-1 gap-6 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-8 border-foreground/20 border-t pt-6 text-muted-foreground lg:justify-center"
              >
                {item.icon}
                <p className="font-medium">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
