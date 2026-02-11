import Image from "next/image";
import { EmojiIcon } from "@/components/icons/emoji";
import { FlashIcon } from "@/components/icons/flash";
import { GlassIcon } from "@/components/icons/glass";
import { MoneyIcon } from "@/components/icons/money";
import { JsonLd } from "@/components/json-ld";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaberseguros.com.br";

const items = [
  {
    id: 1,
    title: "Transparência total",
    description: "Coberturas explicadas de forma clara, sem surpresas.",
    icon: <GlassIcon size={38} />,
  },
  {
    id: 2,
    title: "Planejamento inteligente",
    description: "Equilíbrio entre custo, benefício e proteção real.",
    icon: <MoneyIcon size={38} />,
  },
  {
    id: 3,
    title: "Atendimento ágil",
    description: "Suporte rápido e acompanhamento próximo.",
    icon: <FlashIcon size={38} />,
  },
  {
    id: 4,
    title: "Atendimento humano",
    description: "Especialistas que analisam e indicam a melhor solução.",
    icon: <EmojiIcon size={38} />,
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Como a Jaber Seguros simplifica sua proteção em seguros e consórcios",
  description:
    "Transparência total, planejamento inteligente, atendimento ágil e humano. Empresas e famílias confiam na Jaber Seguros.",
  url: `${baseUrl}/sobre-nos#como-jaber-simplifica`,
  numberOfItems: items.length,
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.title,
    description: item.description,
  })),
};

export function How() {
  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <section
        id="como-jaber-simplifica"
        className="w-full"
        aria-labelledby="how-heading"
        aria-label="Como a Jaber Seguros simplifica sua proteção - Transparência, planejamento, atendimento ágil e humano"
      >
        <div className="w-full space-y-15">
          <div className="mx-auto flex w-fit flex-col items-center gap-6">
            <div className="relative size-24" aria-hidden>
              <Image
                src="/assets/icons/how.png"
                alt="Ícone: Como a Jaber Seguros simplifica seguros e consórcios para empresas e famílias"
                fill
                className="object-cover object-center"
                sizes="400px"
              />
            </div>
            <h2
              id="how-heading"
              className="max-w-md text-center font-bold text-3xl text-foreground leading-tight tracking-tight lg:max-w-lg lg:text-4xl"
            >
              Como a Jaber simplifica sua proteção
            </h2>
            <p className="max-w-sm text-center text-foreground/90 lg:max-w-md lg:text-lg">
              Empresas e famílias confiam na Jaber Seguros para proteger o que
              construíram com tanto esforço.
            </p>
          </div>
          <ul
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-4"
            aria-label="Diferenciais Jaber Seguros: transparência total, planejamento inteligente, atendimento ágil e humano"
          >
            {items.map((item) => (
              <li key={item.id} className="rounded-[0.35rem] bg-border/30 p-6">
                <div className="flex flex-col gap-22 lg:gap-24">
                  <span aria-hidden>{item.icon}</span>
                  <div className="space-y-4">
                    <h3 className="text-nowrap font-bold text-2xl text-foreground leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-foreground/90">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
