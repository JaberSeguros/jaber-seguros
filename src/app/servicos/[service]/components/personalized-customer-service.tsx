"use client";

import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { fadeUpVariants } from "@/app/(sections)/message/anime";
import { Button } from "@/components/ui/button";

type PersonalizedCustomerServiceProps = {
  message: string;
  headline: string;
};

export function PersonalizedCustomerService({
  message,
  headline,
}: PersonalizedCustomerServiceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.5,
  });
  return (
    <motion.div
      ref={containerRef}
      variants={fadeUpVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between"
    >
      <div className="min-w-0 flex-1 text-center lg:text-left">
        <p className="font-semibold text-lg">
          Atendimento personalizado e sem custo
        </p>
        <p className="text-muted-foreground text-sm">
          Conte com nossa equipe para tirar dúvidas e solicitar sua cotação com
          agilidade.
        </p>
      </div>
      <Button
        asChild
        className="mx-auto w-full max-w-lg shrink-0 rounded-full px-6 py-6 font-bold lg:w-fit"
      >
        <Link
          href={`https://wa.me/5511993101907?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`Falar sobre ${headline} - Jaber Seguros`}
          aria-label={`Abrir conversa no WhatsApp para falar sobre ${headline} - Jaber Seguros`}
        >
          Falar com especialista
        </Link>
      </Button>
    </motion.div>
  );
}
