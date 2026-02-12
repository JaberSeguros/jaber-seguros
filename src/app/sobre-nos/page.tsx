import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { Separator } from "@/components/ui/separator";
import { How } from "./components/how/how";
import { HowWeWork } from "./components/how-we-work/how-we-work";
import { OurStory } from "./components/our-story/our-story";
import { Steps } from "./components/steps/steps";

const pageTitle = "Sobre Nós | Seguros e Consórcios - Jaber Seguros";
const pageDescription =
  "Conheça a história da Jaber Seguros, uma consultoria especializada em seguros, consórcios e benefícios. Saiba como a gente nasceu e como estamos ajudando pessoas e empresas a se protegerem e prosperarem.";
const canonicalPath = "/sobre-nos";
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaberseguros.com.br";
const keywords = [
  "sobre Jaber Seguros",
  "história corretora de seguros",
  "seguros consórcios consultoria",
  "Porto Seguro SulAmérica Amil",
  "seguro empresarial saúde vida",
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
        url: "/assets/variadas/pexels-pavel-danilyuk-7938066.jpg",
        width: 1200,
        height: 630,
        alt: "Soluções em seguros e consórcios - Jaber Seguros",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": `${baseUrl}/#organization`,
  name: "Jaber Seguros",
  description: pageDescription,
  url: baseUrl,
  logo: `${baseUrl}/assets/logos/jaber.png`,
  foundingDate: "2009",
  areaServed: "BR",
  knowsAbout: [
    "Seguros",
    "Consórcios",
    "Seguro de Saúde",
    "Seguro de Vida",
    "Seguro Empresarial",
  ],
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: pageTitle,
  description: pageDescription,
  mainEntity: { "@id": `${baseUrl}/#organization` },
};

export default function SobreNosPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={aboutPageJsonLd} />
      <main
        id="sobre-nos"
        className="mt-25 min-h-screen w-full space-y-25"
        aria-labelledby="sobre-nos-page-heading"
        aria-label="Página Sobre Nós - Seguros e Consórcios Jaber Seguros"
      >
        <div className="mx-auto w-full max-w-[1500px] space-y-25 px-4">
          <div className="mx-auto flex w-fit flex-col items-center gap-8">
            <div className="flex animate-fade-in-up items-center gap-4">
              <div
                className="size-1.5 rounded-full bg-foreground"
                aria-hidden
              />
              <p className="font-bold text-foreground/80 text-lg">Sobre Nós</p>
              <div
                className="size-1.5 rounded-full bg-foreground"
                aria-hidden
              />
            </div>
            <h1
              id="sobre-nos-page-heading"
              className="max-w-md animate-fade-up text-center font-bold text-3xl leading-tight [animation-delay:200ms] md:text-5xl lg:max-w-xl lg:text-6xl"
            >
              Experiência que gera tranquilidade
            </h1>
          </div>
          <div className="relative aspect-video w-full animate-fade-up overflow-hidden rounded-lg [animation-delay:400ms]">
            <Image
              src="/assets/variadas/pexels-pavel-danilyuk-7938066.jpg"
              alt="Soluções em seguros e consórcios - Jaber Seguros protege você e sua empresa"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 1500px"
            />
          </div>
        </div>
        <div className="w-full space-y-20 overflow-hidden md:space-y-32 lg:space-y-40">
          <OurStory />
          <Separator className="mx-auto w-full max-w-[85rem] px-4"/>
          <Steps />
          <How />
          <HowWeWork />
        </div>
      </main>
    </>
  );
}
