"use client";

import { createContext, type ReactNode, useContext, useState } from "react";

type MenuContextValue = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isTransitioning: boolean;
  setIsTransitioning: (transitioning: boolean) => void;
};

const MenuContext = createContext<MenuContextValue | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  return (
    <MenuContext.Provider
      value={{ isMenuOpen, setIsMenuOpen, isTransitioning, setIsTransitioning }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context == null) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}
