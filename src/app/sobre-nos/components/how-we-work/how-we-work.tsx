import { AnimatedText } from "@/components/animated-text/animated-text";

export function HowWeWork() {
  return (
    <section
      id="como-funciona-jaber"
      className="w-full bg-border/40 py-15"
      aria-labelledby="how-we-work-heading"
      aria-label="Como a Jaber Seguros funciona - Transparência, planejamento, atendimento ágil e humano"
    >
      <div className="w-full space-y-15">
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
      </div>
    </section>
  );
}
