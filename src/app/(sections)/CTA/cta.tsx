import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="mx-auto w-full max-w-[85rem] px-4">
      <div className="h-fit w-full rounded-lg bg-primary/20 px-4 py-12 lg:px-12 lg:py-24">
        <div className="mx-auto flex w-fit flex-col items-center gap-6">
          <div className="relative size-24">
            <Image
              src="/assets/icons/protection.png"
              alt="Protection"
              fill
              className="object-cover object-center"
              sizes="400px"
            />
          </div>
          <h2 className="text-center font-bold text-2xl lg:text-3xl">
            Proteção que faz sentido pra você
          </h2>
          <Button asChild className="rounded-full bg-black py-5 font-bold">
            <Link
              href="https://wa.me/5511993101907"
              target="_blank"
              rel="noopener noreferrer"
              title="Falar com consultor Jaber Seguros no WhatsApp - Seguro Vida Empresarial"
              aria-label="Abrir WhatsApp para falar com consultor sobre Seguro Vida Empresarial"
            >
              Falar com um consultor
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
