"use client";

import { MenuIcon } from "lucide-react";
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
      >
        {isMenuOpen ? "Fechar" : "Menu"}
        <MenuIcon className="size-6" />
      </Button>
    </div>
  );
}
