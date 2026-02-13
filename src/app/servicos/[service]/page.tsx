import {
  RiBankLine,
  RiBriefcaseLine,
  RiBuilding2Line,
  RiCalendarLine,
  RiCheckDoubleLine,
  RiCoupon2Line,
  RiCustomerService2Line,
  RiFileList3Line,
  RiFileTextLine,
  RiFlashlightLine,
  RiHomeLine,
  RiLeafLine,
  RiPercentLine,
  RiPriceTag3Line,
  RiRefreshLine,
  RiRocket2Line,
  RiScalesLine,
  RiSearchLine,
  RiSeedlingLine,
  RiShieldCheckLine,
  RiShieldStarLine,
  RiTimerLine,
  RiTruckLine,
  RiUserSearchLine,
  RiUserSettingsLine,
  RiUserVoiceLine,
  RiWalletLine,
} from "@remixicon/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type React from "react";
import { CTA } from "@/app/(sections)/CTA/cta";
import { AnimatedParagraph } from "@/app/(sections)/vision/components/animated-paragrap";
import { AccordionFAQ } from "@/components/accordion-faq";
import { AnimatedText } from "@/components/animated-text/animated-text";
import { AnimatedImage } from "@/components/animted-image/animated-image";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, type ServiceSlug } from "@/lib/services";
import { AnimateDivFadeUp } from "./components/animate-div-fade-up";
import { DifferencialItemCard } from "./components/differencial-item-card";
import { PersonalizedCustomerService } from "./components/personalized-customer-service";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaberseguros.com.br";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: ServiceSlug }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const service = getServiceBySlug(awaitedParams.service);
  if (!service) {
    return { title: "Serviço não encontrado | Jaber Seguros" };
  }
  const canonicalPath = `/servicos/${service.slug}`;
  const pageTitle = `${service.headline} | Jaber Seguros`;
  const pageDescription =
    service.sub.length > 160 ? `${service.sub.slice(0, 157)}...` : service.sub;
  const keywords = [
    service.headline,
    service.label,
    "Jaber Seguros",
    "cotação",
    ...(service.label === "Seguro"
      ? ["seguro", "proteção"]
      : ["consórcio", "sem juros"]),
  ];
  return {
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
          url: service.image.startsWith("http")
            ? service.image
            : `${baseUrl}${service.image}`,
          width: 1200,
          height: 630,
          alt: `${service.headline} - Jaber Seguros`,
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
}

const DIFFERENTIAL_ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  RiUserSearchLine,
  RiBuilding2Line,
  RiCustomerService2Line,
  RiShieldCheckLine,
  RiFileList3Line,
  RiTimerLine,
  RiFileTextLine,
  RiRocket2Line,
  RiRefreshLine,
  RiScalesLine,
  RiFlashlightLine,
  RiPriceTag3Line,
  RiShieldStarLine,
  RiSearchLine,
  RiBriefcaseLine,
  RiTruckLine,
  RiCalendarLine,
  RiUserVoiceLine,
  RiWalletLine,
  RiBankLine,
  RiCheckDoubleLine,
  RiHomeLine,
  RiPercentLine,
  RiCoupon2Line,
  RiLeafLine,
  RiSeedlingLine,
  RiUserSettingsLine,
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: ServiceSlug }>;
}) {
  const awaitedParams = await params;
  const slug = awaitedParams.service;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const faqItems = service.detalhes.faq.map((item, i) => ({
    id: `faq-${i}`,
    title: item.pergunta,
    content: item.resposta,
  }));

  const message = `Olá! Vim pelo site e gostaria de falar com um especialista sobre ${service.headline}.
Poderia me orientar sobre as melhores opções para o meu perfil?`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.headline,
    description: service.sub,
    provider: {
      "@type": "InsuranceAgency",
      name: "Jaber Seguros",
      url: baseUrl,
      areaServed: "BR",
    },
    image: service.image.startsWith("http")
      ? service.image
      : `${baseUrl}${service.image}`,
    url: `${baseUrl}/servicos/${service.slug}`,
    areaServed: "BR",
  };

  const faqJsonLd =
    service.detalhes.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.detalhes.faq.map((item) => ({
            "@type": "Question",
            name: item.pergunta,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.resposta,
            },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
      <main
        className="min-h-screen w-full"
        aria-labelledby="service-heading"
        aria-label={`${service.headline} - Jaber Seguros`}
      >
        {/* Hero: two columns, text left + image right */}
        <section className="border-border/60 border-b bg-border/30 pt-20">
          <div className="mx-auto flex max-w-[85rem] flex-col gap-10 px-4 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-16">
            <div className="flex max-w-xl flex-col gap-6">
              <p className="animate-fade-up font-semibold text-muted-foreground text-sm uppercase tracking-wider">
                {service.label}
              </p>
              <h1
                id="service-heading"
                className="animate-fade-up font-bold text-3xl leading-tight [animation-delay:200ms] md:text-4xl lg:text-5xl"
              >
                {service.headline}
              </h1>
              <p className="animate-fade-up text-base text-muted-foreground [animation-delay:400ms] md:text-lg">
                {service.sub}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="animate-fade-up rounded-full px-6 py-6 font-bold text-base [animation-delay:600ms]"
                >
                  <Link
                    href={`https://wa.me/5511993101907?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Falar sobre ${service.headline} - Jaber Seguros`}
                    aria-label={`Abrir conversa no WhatsApp para solicitar cotação de ${service.headline} - Jaber Seguros`}
                  >
                    {service.cta}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="animate-fade-up rounded-full border-2 px-6 py-6 font-bold text-base [animation-delay:700ms]"
                >
                  <Link href="#detalhes">Saiba mais</Link>
                </Button>
              </div>
            </div>
            <AnimatedImage
              imageContainerClassName="relative aspect-4/3 max-h-[450px] w-full overflow-hidden rounded-[0.35rem] md:shrink-0 lg:max-h-none lg:max-w-2xl"
              src={service.image}
              alt={service.headline}
            />
          </div>
        </section>

        {/* Differentials: "O que você tem com a Jaber" + 3 cards */}
        <section className="mx-auto max-w-[85rem] px-4 py-20 md:py-32 lg:py-40">
          <AnimatedText
            as="h2"
            id="differencial-heading"
            className="mb-10 font-bold text-2xl md:text-3xl lg:text-4xl"
            type="words"
          >
            O diferencial Jaber
          </AnimatedText>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {service.diferenciais.map((diff, index) => {
              const Icon =
                DIFFERENTIAL_ICON_MAP[diff.icon] ?? RiShieldCheckLine;
              return (
                <DifferencialItemCard
                  key={`${service.slug}-diff-${index}`}
                  slug={service.slug}
                  index={index}
                  title={diff.title}
                  content={diff.content}
                  icon={<Icon className="size-12 shrink-0" aria-hidden />}
                />
              );
            })}
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 rounded-[0.35rem] bg-border/30 p-6 py-12 md:flex-row lg:gap-8">
            <div className="relative size-24 shrink-0 md:size-32">
              <Image
                src="/assets/icons/thumb-up.png"
                alt="Protection"
                fill
                className="object-cover object-center"
                sizes="400px"
              />
            </div>
            <PersonalizedCustomerService
              message={message}
              headline={service.headline}
            />
          </div>
        </section>

        {/* Details: About, What's included, How it works, Why it matters, CTA */}
        <section
          id="detalhes"
          className="border-border/60 border-t bg-muted/10"
        >
          <div className="mx-auto max-w-[58rem] px-4 py-16 md:py-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
              <div className="space-y-6 lg:max-w-lg">
                <AnimatedText
                  as="h2"
                  id="detalhes-heading"
                  className="mb-12 font-bold text-2xl md:text-3xl"
                  type="words"
                >
                  Informações para sua decisão
                </AnimatedText>
                <div className="grid gap-16 lg:grid-cols-[1fr,minmax(0,28rem)]">
                  <div className="flex flex-col gap-12">
                    <AnimateDivFadeUp>
                      <h3 className="mb-3 font-semibold text-[1.35rem]">
                        Sobre {service.headline}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.detalhes.sobre}
                      </p>
                    </AnimateDivFadeUp>
                    <AnimateDivFadeUp>
                      <h3 className="mb-3 font-semibold text-[1.35rem]">
                        O que está incluso
                      </h3>
                      <ul className="space-y-2">
                        {service.detalhes.oQueEIncluso.map((item, i) => (
                          <li
                            key={`${service.slug}-incluso-${i}-${item.slice(0, 20)}`}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AnimateDivFadeUp>
                    <AnimateDivFadeUp>
                      <h3 className="mb-3 font-semibold text-[1.35rem]">
                        Como funciona
                      </h3>
                      <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
                        {service.detalhes.comoFunciona.map((step, i) => (
                          <li
                            key={`${service.slug}-passo-${i}-${step.slice(0, 15)}`}
                            className="pl-1"
                          >
                            {step}
                          </li>
                        ))}
                      </ol>
                    </AnimateDivFadeUp>
                    <AnimateDivFadeUp>
                      <h3 className="mb-3 font-semibold text-[1.35rem]">
                        Por que importa
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.detalhes.porQueImportante}
                      </p>
                    </AnimateDivFadeUp>
                    <AnimateDivFadeUp>
                      <h3 className="mb-3 font-semibold text-xl">
                        Comece agora
                      </h3>
                      <p className="mb-4 text-muted-foreground text-sm">
                        {service.detalhes.cta}. Solicite uma cotação ou fale com
                        nossa equipe.
                      </p>
                      <Button
                        asChild
                        className="rounded-full px-6 py-6 font-bold"
                      >
                        <Link
                          href={`https://wa.me/5511993101907?text=${encodeURIComponent(message)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Falar sobre ${service.headline} - Jaber Seguros`}
                          aria-label={`Abrir conversa no WhatsApp para falar sobre ${service.headline} - Jaber Seguros`}
                        >
                          {service.detalhes.cta}
                        </Link>
                      </Button>
                    </AnimateDivFadeUp>
                  </div>
                </div>
              </div>
              {/* Sidebar CTA box */}
              <AnimateDivFadeUp className="h-fit rounded-[0.35rem] border bg-card p-6 lg:sticky lg:top-24 lg:max-w-xs">
                <h3 className="mb-2 font-semibold text-lg">Comece agora</h3>
                <p className="mb-4 text-muted-foreground text-sm">
                  Solicite uma cotação sem compromisso. Nossa equipe retorna em
                  até 24 horas úteis.
                </p>
                <Button asChild className="w-fit rounded-full py-6 font-bold">
                  <Link
                    href={`https://wa.me/5511993101907?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Falar sobre ${service.headline} - Jaber Seguros`}
                    aria-label={`Abrir conversa no WhatsApp para falar sobre ${service.headline} - Jaber Seguros`}
                  >
                    {service.cta}
                  </Link>
                </Button>
              </AnimateDivFadeUp>
            </div>
          </div>
        </section>

        {/* FAQ: two columns - heading left, accordion right */}
        <section className="mx-auto max-w-[85rem] px-4 py-20 md:py-32 lg:py-40">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-16">
            <div>
              <AnimatedParagraph className="mb-2 font-semibold text-muted-foreground text-sm uppercase tracking-wider">
                FAQ
              </AnimatedParagraph>
              <AnimatedText
                as="h2"
                className="font-bold text-2xl md:text-3xl lg:text-4xl"
              >
                Perguntas frequentes
              </AnimatedText>
              <AnimatedParagraph className="mt-3 text-muted-foreground text-sm">
                Em caso de dúvidas, confira as respostas abaixo ou entre em
                contato.
              </AnimatedParagraph>
            </div>
            <div className="min-w-0 lg:max-w-3xl">
              {faqItems.length > 0 ? (
                <AnimateDivFadeUp>
                  <AccordionFAQ items={faqItems} />
                </AnimateDivFadeUp>
              ) : (
                <p className="text-muted-foreground text-sm">
                  Nenhuma pergunta cadastrada. Entre em contato para tirar suas
                  dúvidas.
                </p>
              )}
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[85rem] py-20 md:py-32 lg:py-40">
          <CTA />
        </div>
      </main>
    </>
  );
}
