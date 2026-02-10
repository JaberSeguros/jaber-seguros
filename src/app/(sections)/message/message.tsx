"use client";

import { QuoteIcon } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { fadeUpVariants } from "./anime";

const SECTION_ID = "mensagem-ceo";
const SECTION_HEADING_ID = "mensagem-ceo-heading";

const quoteText =
  "Para mim, um bom seguro é aquele que traz segurança sem complicar. É sobre entender cada pessoa e oferecer proteção com confiança, clareza e responsabilidade.";
const quoteAuthor = "Marcelo Jaber";
const quoteRole = "CEO, Jaber Seguros";

const messageStructuredData = {
  "@context": "https://schema.org",
  "@type": "Quotation",
  text: quoteText,
  author: {
    "@type": "Person",
    name: quoteAuthor,
    jobTitle: "CEO",
    worksFor: {
      "@type": "Organization",
      name: "Jaber Seguros",
    },
  },
};

export function Message() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.5,
  });
  return (
    <section
      id={SECTION_ID}
      aria-labelledby={SECTION_HEADING_ID}
      className="h-fit w-full px-4"
    >
      <h2 id={SECTION_HEADING_ID} className="sr-only">
        Mensagem do CEO - {quoteAuthor}, {quoteRole}
      </h2>
      {/* JSON-LD for search engines: static quote data for SEO */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static structured data for SEO
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(messageStructuredData),
        }}
      />
      <motion.div
        ref={containerRef}
        variants={fadeUpVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="mx-auto w-full max-w-4xl rounded-lg bg-primary/20 p-6 lg:p-12"
      >
        <blockquote className="space-y-6">
          <QuoteIcon
            fill="oklch(0.3211 0 0)"
            className="size-10 text-foreground lg:size-13"
            aria-hidden
          />
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            {quoteText}
          </p>
          <footer className="space-y-2">
            <cite className="font-medium text-xl not-italic md:text-2xl lg:text-3xl">
              {quoteAuthor}
            </cite>
            <p className="text-foreground/80 text-sm">{quoteRole}</p>
          </footer>
        </blockquote>
      </motion.div>
    </section>
  );
}
