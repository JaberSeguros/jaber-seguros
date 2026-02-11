import { AnimatedParagraph } from "@/app/(sections)/vision/components/animated-paragrap";
import { NumberTicker } from "@/components/ui/number-ticker";

const paragraphs = [
  {
    id: 1,
    content:
      "Durante anos, o mercado de seguros foi visto como algo burocrático, distante e difícil de entender. Contratos complexos. Letras pequenas. Atendimento impessoal.",
  },
  {
    id: 2,
    content:
      "A Jaber Seguros nasceu com uma proposta diferente: tornar o seguro e o consórcio mais claros, humanos e estratégicos. Porque acreditamos que proteger o que é importante não deve ser complicado.",
  },
  {
    id: 3,
    content:
      "Com mais de 15 anos de experiência no mercado segurador, trabalhamos com as principais operadoras do país — como Porto Seguro, SulAmérica, Amil, Seguros Unimed, Omint, Care Plus e MetLife — oferecendo soluções sob medida para cada cliente.",
  },
  {
    id: 4,
    content:
      "Aqui, cada empresa, cada família e cada projeto recebe atenção personalizada. Nosso compromisso é entender sua necessidade e entregar a melhor estratégia de proteção e planejamento.",
  },
  {
    id: 5,
    content: "Não vendemos apenas seguros.",
  },
  {
    id: 6,
    content: "Construímos relações de confiança.",
  },
];

const numbers = [
  {
    id: 1,
    value: 15,
    prefix: "+",
    sub: "Anos de experiência",
  },
  {
    id: 2,
    value: 500,
    prefix: "+",
    sub: "Clientes satisfeitos",
  },
  {
    id: 3,
    value: 1000,
    prefix: "+",
    sub: "Contratos administrados",
  },
  {
    id: 4,
    value: 7,
    prefix: "",
    sub: "Operadoras parceiras",
  },
];

export function OurStory() {
  return (
    <article
      className="w-full space-y-15 lg:space-y-35"
      aria-labelledby="our-story-heading"
    >
      <div className="flex w-full flex-col justify-between gap-8 lg:flex-row">
        <header className="max-w-xl space-y-4">
          <p
            className="animate-fade-up uppercase [animation-delay:600ms]"
            aria-hidden
          >
            Nossa História
          </p>
          <h2
            id="our-story-heading"
            className="animate-fade-up font-medium text-3xl text-foreground leading-tight tracking-tight [animation-delay:800ms] lg:text-4xl"
          >
            Proteção construída com confiança e experiência
          </h2>
        </header>
        <div className="space-y-4">
          {paragraphs.map((paragraph) => (
            <AnimatedParagraph
              key={paragraph.id}
              className="font-medium lg:max-w-xl lg:text-lg"
            >
              {paragraph.content}
            </AnimatedParagraph>
          ))}
        </div>
      </div>
      <section
        className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:grid-cols-4"
        aria-labelledby="our-story-stats-heading"
      >
        <h3 id="our-story-stats-heading" className="sr-only">
          Números que refletem nossa trajetória
        </h3>
        {numbers.map((number) => (
          <div key={number.id} className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-1 font-bold text-[2.7rem] md:text-5xl xl:text-6xl">
              <span aria-hidden>{number.prefix}</span>
              <NumberTicker className="" value={number.value} />
            </div>
            <p className="text-foreground/90">{number.sub}</p>
          </div>
        ))}
      </section>
    </article>
  );
}
