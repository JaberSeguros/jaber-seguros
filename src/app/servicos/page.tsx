import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { Services } from "../(sections)/services/servicos";

const pageTitle = "Serviços | Seguros e Consórcios - Jaber Seguros";
const pageDescription =
  "Conheça nossos serviços em seguros e consórcios: saúde, vida empresarial, veículos, imóveis e mais. Soluções que protegem você e sua empresa com atendimento personalizado.";
const canonicalPath = "/servicos";
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaberseguros.com.br";
const keywords = [
  "seguros",
  "consórcios",
  "seguro saúde",
  "seguro empresarial",
  "consórcio veículos",
  "consórcio imóveis",
  "seguro responsabilidade civil",
  "seguro garantia",
  "Jaber Seguros",
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
        url: "/assets/variadas/pexels-cottonbro-4568711.jpg",
        width: 1200,
        height: 630,
        alt: "Soluções em seguros e consórcios - Jaber Seguros protege você e sua empresa",
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

const servicesPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: pageTitle,
  description: pageDescription,
  url: `${baseUrl}${canonicalPath}`,
  mainEntity: {
    "@type": "InsuranceAgency",
    name: "Jaber Seguros",
    url: baseUrl,
    areaServed: "BR",
    knowsAbout: [
      "Seguro Saúde",
      "Seguro Saúde Empresarial",
      "Seguro Empresarial",
      "Seguro Garantia",
      "Seguro de Responsabilidade Civil",
      "Consórcio de Veículos",
      "Consórcio de Veículos Pesados",
      "Consórcio Imobiliário",
      "Consórcio Sustentável",
    ],
  },
};

export default function ServicosPage() {
  return (
    <>
      <JsonLd data={servicesPageJsonLd} />
      <main
        id="servicos"
        className="mt-25 min-h-screen w-full space-y-25"
        aria-labelledby="servicos-page-heading"
        aria-label="Página de Serviços - Seguros e Consórcios Jaber Seguros"
      >
        <div className="mx-auto w-full max-w-[1500px] space-y-25 px-4">
          <div className="mx-auto flex w-fit flex-col items-center gap-8">
            <div className="flex animate-fade-up items-center gap-4">
              <div className="size-1.5 bg-primary" aria-hidden />
              <p className="font-bold text-foreground/80 text-lg">Serviços</p>
              <div className="size-1.5 bg-primary" aria-hidden />
            </div>
            <h1
              id="servicos-page-heading"
              className="max-w-[15rem] animate-fade-up text-center font-bold text-3xl leading-tight [animation-delay:200ms] md:max-w-sm md:text-5xl lg:max-w-xl lg:text-6xl"
            >
              Soluções que Protegem Você
            </h1>
          </div>
          <div className="relative aspect-video w-full animate-fade-up overflow-hidden rounded-[0.35rem] [animation-delay:400ms]">
            <Image
              src="/assets/variadas/pexels-cottonbro-4568711.jpg"
              alt="Soluções em seguros e consórcios - Jaber Seguros protege você e sua empresa"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 1500px"
            />
          </div>
        </div>
        <div className="w-full space-y-20 overflow-hidden md:space-y-32 lg:space-y-40">
          <Services />
        </div>
      </main>
    </>
  );
}
