import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Briefcase, Handshake, Headset } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroVideo from "./components/hero-video";

const info = [
  {
    id: 1,
    Icon: <Briefcase className="size-8 text-primary-foreground lg:size-10" />,
    strong: "+ 15",
    sub: "anos de experiência",
  },
  {
    id: 2,
    Icon: <Handshake className="size-8 text-primary-foreground lg:size-10" />,
    strong: "Parcerias",
    sub: "com as melhores seguradoras",
  },
  {
    id: 3,
    Icon: <Headset className="size-8 text-primary-foreground lg:size-10" />,
    strong: "Atendimento",
    sub: "100% personalizado",
  },
];

export function Hero() {
  return (
    <section
      className="flex min-h-screen w-full justify-center bg-zinc-50 font-sans"
      aria-label="Hero - Corretora de seguros e consórcios Jaber Seguros"
    >
      <main className="flex h-full w-full bg-white pt-2 sm:items-start">
        <HeroVideo>
          <div
            className="flex size-full flex-col justify-end p-4 md:p-6 lg:px-10"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div className="flex h-[80%] flex-col justify-end gap-4 md:justify-between">
              <div className="max-w-3xl space-y-4 xl:max-w-5xl">
                <h1 className="font-bold text-[2.35rem] text-primary-foreground leading-tight md:text-5xl md:leading-none xl:text-7xl">
                  Proteção e planejamento feitos sob medida para você
                </h1>
              </div>
              <div className="flex flex-col justify-between gap-10 md:flex-row">
                <div className="space-y-4">
                  <p className="max-w-xl text-muted md:text-lg xl:text-2xl">
                    Seguros e consórcios pensados para o que realmente importa,
                    com atendimento personalizado e parceiros líderes de
                    mercado.
                  </p>
                  <Button
                    className="cursor-pointer rounded-sm py-7 font-bold"
                    asChild
                  >
                    <Link
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Fale conosco no WhatsApp - Jaber Seguros"
                      aria-label="Abrir conversa no WhatsApp com Jaber Seguros"
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="size-5"
                        aria-hidden
                      />
                      Chamar no WhatsApp
                    </Link>
                  </Button>
                </div>
                <ul
                  className="flex w-fit flex-wrap items-center gap-2 rounded-md md:bg-foreground/40 md:p-4"
                  aria-label="Diferenciais da corretora"
                >
                  {info.map((item) => (
                    <li
                      key={item.id}
                      className="flex w-full items-center gap-2 rounded-md bg-foreground/40 p-2 sm:w-fit md:bg-transparent"
                    >
                      <div className="rounded-full bg-primary p-2" aria-hidden>
                        {item.Icon}
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-primary-foreground md:text-lg">
                          {item.strong}
                        </p>
                        <p className="text-primary-foreground text-xs md:text-sm">
                          {item.sub}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </HeroVideo>
      </main>
    </section>
  );
}
