import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Briefcase, Handshake, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroVideo from "./components/hero-video";

const info = [
  {
    id: 1,
    Icon: <Briefcase className="size-8 text-primary-foreground lg:size-12" />,
    strong: "+ 15",
    sub: "anos de experiência",
  },
  {
    id: 2,
    Icon: <Handshake className="size-8 text-primary-foreground lg:size-12" />,
    strong: "Parcerias",
    sub: "com as melhores seguradoras",
  },
  {
    id: 3,
    Icon: <Headset className="size-8 text-primary-foreground lg:size-12" />,
    strong: "Atendimento",
    sub: "100% personalizado",
  },
];

export function Hero() {
  return (
    <div className="flex h-screen min-h-[500px] w-full items-center justify-center bg-zinc-50 font-sans">
      <main className="flex h-full w-full bg-white pt-2 sm:items-start">
        <HeroVideo>
          <div
            className="flex size-full flex-col justify-end p-4 md:p-6 lg:px-10"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div className="flex h-[80%] flex-col justify-between gap-10">
              <div className="max-w-3xl space-y-4 lg:max-w-5xl">
                <h1 className="font-bold text-[2.35rem] text-primary-foreground leading-tight md:text-5xl md:leading-none lg:text-7xl">
                  Proteção e planejamento feitos sob medida para você
                </h1>
                <p className="max-w-2xl text-muted md:text-lg">
                  Seguros e consórcios pensados para o que realmente importa,
                  com atendimento personalizado e parceiros líderes de mercado.
                </p>
                <Button className="cursor-pointer rounded-sm py-7 font-bold">
                  <FontAwesomeIcon icon={faWhatsapp} className="size-5" />
                  Chamar no WhatsApp
                </Button>
              </div>
              <div className="flex w-fit flex-wrap items-center gap-2 rounded-md md:w-full md:justify-center md:bg-foreground/40 md:p-4">
                {info.map((info) => (
                  <div
                    key={info.id}
                    className="flex w-full items-center gap-2 rounded-md bg-foreground/40 p-2 sm:w-fit md:bg-transparent"
                  >
                    <div className="rounded-full bg-primary p-2">
                      {info.Icon}
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-primary-foreground md:text-lg lg:text-2xl">
                        {info.strong}
                      </p>
                      <p className="text-primary-foreground text-xs md:text-sm lg:text-base">
                        {info.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </HeroVideo>
      </main>
    </div>
  );
}
