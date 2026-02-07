/** biome-ignore-all lint/a11y/noInteractiveElementToNoninteractiveRole: <because it's a header> */
/** biome-ignore-all lint/a11y/useSemanticElements: <because it's a header> */
"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMenu } from "@/contexts/menu-context";
import { Button } from "../ui/button";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { SmallDevicesMenu } from "./small-devices-menu";

export function Navigation() {
  const [openedOption, setOpenedOption] = useState<
    "seguros" | "consorcios" | null
  >(null);
  const { setIsMenuOpen } = useMenu();
  return (
    <header
      className="-translate-x-1/2 fixed top-4 left-1/2 z-100 w-[93vw] max-w-5xl rounded-full bg-background pe-3 shadow-xs md:pe-4"
      role="banner"
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          title="Jaber Seguros - Corretora de seguros e consórcios"
          aria-label="Ir para página inicial - Jaber Seguros"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/assets/logos/jaber.png"
            alt="Jaber Seguros - Corretora de seguros e consórcios"
            width={125}
            height={65}
            className="h-auto w-[125px]"
            priority
            sizes="125px"
          />
        </Link>
        <DesktopNavigation />
        <div className="hidden md:flex">
          <Link
            href="/contato"
            className="flex items-center gap-2 font-semibold"
            title="Fale Conosco - Contato Jaber Seguros"
          >
            Fale Conosco
            <Button className="cursor-pointer rounded-full py-5">
              <ArrowRightIcon className="-rotate-45" aria-hidden />
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <MobileNavigation setOpenedOption={setOpenedOption} />
          <SmallDevicesMenu
            openedOption={openedOption}
            setOpenedOption={setOpenedOption}
          />
        </div>
      </div>
    </header>
  );
}
