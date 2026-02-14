import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LocationIcon } from "@/components/icons/location";
import { MailIcon } from "@/components/icons/mail";
import { MobileIcon } from "@/components/icons/mobile";
import { JsonLd } from "@/components/json-ld";
import { CTA } from "../(sections)/CTA/cta";
import ContactAccordion from "./components/contact-accordion";
import { ContactForm } from "./components/contact-form";

const pageTitle = "Contato | Fale com um Especialista - Jaber Seguros";
const pageDescription =
  "Entre em contato com a Jaber Seguros por telefone, e-mail ou WhatsApp. Solicite orçamento em seguros e consórcios. Atendimento em São Paulo e todo o Brasil.";
const canonicalPath = "/contato";
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaberseguros.com.br";
const keywords = [
  "contato Jaber Seguros",
  "orçamento seguros",
  "WhatsApp seguros",
  "corretora seguros São Paulo",
  "consórcio orçamento",
  "Jaber Seguros contato",
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: keywords,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalPath,
    siteName: "Jaber Seguros",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/assets/variadas/essence-3.webp",
        width: 1200,
        height: 630,
        alt: "Contato Jaber Seguros - Fale com um especialista em seguros e consórcios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: pageTitle,
  description: pageDescription,
  url: `${baseUrl}${canonicalPath}`,
  mainEntity: {
    "@type": "InsuranceAgency",
    name: "Jaber Seguros",
    url: baseUrl,
    areaServed: "BR",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-11-99310-1907",
      contactType: "customer service",
      email: "jaber@jaberseguros.com.br",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Verena, 197",
      addressLocality: "Penha de França",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  },
};

const contactInfo = [
  {
    id: 1,
    title: "Telefone",
    content: "(11) 99310-1907",
    href: "https://wa.me/5511993101907",
    icon: <MobileIcon size={42} color="oklch(0.6231 0.188 259.8145)" />,
  },
  {
    id: 2,
    title: "Email",
    content: "jaber@jaberseguros.com.br",
    href: "mailto:jaber@jaberseguros.com.br",
    icon: <MailIcon size={42} color="oklch(0.6231 0.188 259.8145)" />,
  },
  {
    id: 3,
    title: "Endereço",
    content: "R. Verena, 197 - Penha de França - São Paulo - SP",
    href: "https://maps.app.goo.gl/Zb9jxT31D2HfE8zV6",
    icon: <LocationIcon size={42} color="oklch(0.6231 0.188 259.8145)" />,
  },
];

const items = [
  {
    content:
      "Não. Nossa consultoria é 100% gratuita. Você recebe orientação especializada e propostas personalizadas sem compromisso.",
    id: "1",
    title: "O atendimento tem custo?",
  },
  {
    content:
      "Atuamos com seguradoras e operadoras reconhecidas no mercado como Seguros Unimed, Omint, Care Plus e MetLife, garantindo segurança e credibilidade nas soluções apresentadas.",
    id: "2",
    title: "Vocês trabalham com quais operadoras?",
  },
  {
    content:
      "Normalmente enviamos as primeiras opções em até 24 horas úteis, dependendo da complexidade da demanda.",
    id: "3",
    title: "Em quanto tempo recebo uma proposta?",
  },
  {
    content:
      "Sim. Trabalhamos com consórcio para veículos pesados, inclusive tratores e máquinas como os da marca John Deere, com planejamento financeiro estratégico e parcelas acessíveis.",
    id: "4",
    title: "Posso contratar consórcio para trator ou máquinas agrícolas?",
  },
  {
    content:
      "Sim. Temos ampla experiência em Seguro Saúde Empresarial, Seguro de Vida Empresarial e demais soluções corporativas, sempre com análise personalizada.",
    id: "5",
    title: "Vocês atendem empresas?",
  },
  {
    content:
      "Sim! Se preferir, você pode clicar no botão de WhatsApp e falar diretamente com nossa equipe para um atendimento mais rápido.",
    id: "6",
    title: "Posso falar direto pelo WhatsApp?",
  },
];

export default function Contato() {
  return (
    <>
      <JsonLd data={contactPageJsonLd} />
      <main
        id="contato"
        className="w-full pt-25"
        aria-labelledby="contato-page-heading"
        aria-label="Página de Contato - Fale com um especialista Jaber Seguros"
      >
        <section className="mx-auto w-full max-w-[85rem] space-y-15 px-4">
          <div className="flex flex-col items-center gap-25">
            <div className="flex w-full flex-col items-center gap-8">
              <div className="flex animate-fade-up items-center gap-2">
                <div className="size-1.5 bg-primary" aria-hidden />
                <p className="font-bold text-foreground/80 text-lg">Contato</p>
                <div className="size-1.5 bg-primary" aria-hidden />
              </div>
              <div className="animate-fade-up space-y-4 [animation-delay:200ms]">
                <h1
                  id="contato-page-heading"
                  className="max-w-xl text-center font-bold text-3xl md:text-4xl"
                >
                  Fale com um Especialista Agora
                </h1>
                <p className="max-w-lg text-center text-muted-foreground">
                  Cuidamos do que é importante para você com soluções sob medida
                  e parceiros consolidados como Porto Seguro, SulAmérica e Amil.
                </p>
              </div>
            </div>
            <div className="relative aspect-video w-full animate-fade-up overflow-hidden rounded-lg [animation-delay:400ms]">
              <Image
                src="/assets/variadas/essence-3.webp"
                alt="Contato Jaber Seguros - Fale com um especialista em seguros e consórcios em São Paulo"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 1500px"
              />
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[85rem] flex-col items-center gap-25">
            <div className="w-full max-w-xl xl:max-w-4xl">
              <ContactForm />
            </div>
            <ul className="grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {contactInfo.map((item) => (
                <li key={item.id} className="rounded-sm bg-border/30 p-6">
                  <div className="flex flex-col gap-8">
                    {item.icon}
                    <div className="space-y-4">
                      <p className="font-bold text-xl">{item.title}</p>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="font-bold text-foreground/80 text-lg transition-colors duration-300 hover:text-primary">
                          {item.content}
                        </p>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex w-full max-w-4xl flex-col items-center gap-8">
              <h2 className="font-bold text-2xl lg:text-4xl">
                Perguntas Frequentes
              </h2>
              <ContactAccordion items={items} />
            </div>
          </div>
        </section>
        <div className="mt-15">
          <CTA />
        </div>
      </main>
    </>
  );
}
