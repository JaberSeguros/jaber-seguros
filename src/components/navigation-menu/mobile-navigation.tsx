"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useMenu } from "@/contexts/menu-context";
import { Button } from "../ui/button";

export function MobileNavigation({
  setOpenedOption,
}: {
  setOpenedOption: (option: "seguros" | "consorcios" | null) => void;
}) {
  const { isMenuOpen, setIsMenuOpen, isTransitioning, setIsTransitioning } =
    useMenu();
  return (
    <div className="relative">
      <Button
        type="button"
        className="rounded-full py-6 font-bold"
        onClick={() => {
          if (isTransitioning) return;
          setIsMenuOpen(!isMenuOpen);
          setOpenedOption(null);
          setIsTransitioning(true);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 500);
        }}
        aria-label={
          isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
        }
        aria-expanded={isMenuOpen}
        aria-controls="small-devices-menu"
      >
        {isMenuOpen ? (
          <>
            Fechar <XIcon className="size-5" aria-hidden />
          </>
        ) : (
          <>
            Menu <MenuIcon className="size-5" aria-hidden />
          </>
        )}
      </Button>
    </div>
  );
}
