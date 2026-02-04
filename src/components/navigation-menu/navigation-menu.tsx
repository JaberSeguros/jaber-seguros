"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { SmallDevicesMenu } from "./small-devices-menu";

export function Navigation() {
  const [openedOption, setOpenedOption] = useState<
    "seguros" | "consorcios" | null
  >(null);
  return (
    <header className="-translate-x-1/2 fixed top-4 left-1/2 z-100 w-[93vw] max-w-5xl rounded-full bg-background pe-3 shadow-md md:pe-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/logos/jaber.png"
            alt="Jaber Seguros"
            width={125}
            height={65}
            className="h-auto w-[125px]"
          />
        </Link>
        <DesktopNavigation />
        <div className="hidden md:flex">
          <Link
            href="/contato"
            className="flex items-center gap-2 font-semibold"
          >
            Fale Conosco
            <Button className="rounded-full py-5">
              <ArrowRightIcon className="-rotate-45" />
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <MobileNavigation
            setOpenedOption={setOpenedOption}
          />
          <SmallDevicesMenu
            openedOption={openedOption}
            setOpenedOption={setOpenedOption}
          />
        </div>
      </div>
    </header>
  );
}
