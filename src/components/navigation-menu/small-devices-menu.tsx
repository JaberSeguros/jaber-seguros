"use client";

import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useMenu } from "@/contexts/menu-context";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { consorciosVariants, menuVariants, segurosVariants } from "./anime";
import { consorcios, seguros } from "./data";
import { MenuContentCard } from "./menu-content-card";

export function SmallDevicesMenu({
  openedOption,
  setOpenedOption,
}: {
  openedOption: "seguros" | "consorcios" | null;
  setOpenedOption: (option: "seguros" | "consorcios" | null) => void;
}) {
  const { isMenuOpen } = useMenu();
  return (
    <nav
      id="small-devices-menu"
      aria-label="Menu de navegação mobile"
      className={cn(
        "-translate-x-1/2 absolute top-[120%] left-1/2 flex h-fit max-h-[calc(100vh-11.2rem)] w-[93vw] max-w-5xl flex-col gap-4 rounded-2xl sm:max-h-[calc(100vh-6.5rem)]",
        isMenuOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <motion.div
        variants={menuVariants}
        initial="initial"
        animate={isMenuOpen ? "animate" : "initial"}
        custom={{ initialDelay: 0.1 }}
        className="h-fit w-full space-y-2 overflow-y-auto rounded-xl border bg-background p-2"
        style={{
          willChange: "opacity, transform",
        }}
      >
        <motion.div
          id="seguros-menu-content"
          variants={segurosVariants}
          initial="initial"
          animate={openedOption === "seguros" ? "animate" : "initial"}
          onClick={() => {
            setOpenedOption(openedOption === "seguros" ? null : "seguros");
          }}
          className="flex h-[68px] w-full flex-col items-center gap-2 overflow-hidden rounded-xl"
          style={{
            willChange: "height",
          }}
        >
          <Button
            type="button"
            variant="ghost"
            className="h-17 w-full justify-between bg-foreground/10 px-7! font-semibold text-lg"
            aria-expanded={openedOption === "seguros"}
            aria-controls="seguros-menu-content"
          >
            Seguros
            <ChevronDownIcon
              className={cn(
                "size-6 transition-transform duration-500",
                openedOption === "seguros" ? "-rotate-180" : "",
              )}
              aria-hidden
            />
          </Button>
          {seguros.map((seguro) => (
            <MenuContentCard key={seguro.id} content={seguro} />
          ))}
        </motion.div>
        <motion.div
          id="consorcios-menu-content"
          variants={consorciosVariants}
          initial="initial"
          animate={openedOption === "consorcios" ? "animate" : "initial"}
          onClick={() => {
            setOpenedOption(
              openedOption === "consorcios" ? null : "consorcios",
            );
          }}
          className="flex h-[1850px] w-full flex-col gap-2 overflow-hidden rounded-xl"
          style={{
            willChange: "height",
          }}
        >
          <Button
            type="button"
            variant="ghost"
            className="h-17 w-full justify-between bg-foreground/10 px-7! font-semibold text-lg"
            aria-expanded={openedOption === "consorcios"}
            aria-controls="consorcios-menu-content"
          >
            Consórcios
            <ChevronDownIcon
              className={cn(
                "size-6 transition-transform duration-500",
                openedOption === "consorcios" ? "-rotate-180" : "",
              )}
              aria-hidden
            />
          </Button>
          {consorcios.map((consorcio) => (
            <MenuContentCard key={consorcio.id} content={consorcio} />
          ))}
        </motion.div>
        <div className="h-17 w-full rounded-xl bg-foreground/10">
          <Link
            href="/servicos"
            className="flex h-17 w-full items-center justify-between px-7 font-semibold text-lg"
            title="Serviços - Seguros e consórcios Jaber Seguros"
          >
            Serviços
            <ArrowRightIcon className="-rotate-45 size-6" aria-hidden />
          </Link>
        </div>
        <div className="h-17 w-full rounded-xl bg-foreground/10">
          <Link
            href="/sobre-nos"
            className="flex h-17 w-full items-center justify-between px-7 font-semibold text-lg"
            title="Sobre nós - Conheça a Jaber Seguros"
          >
            Sobre nós
            <ArrowRightIcon className="-rotate-45 size-6" aria-hidden />
          </Link>
        </div>
      </motion.div>
      <motion.div
        variants={menuVariants}
        initial="initial"
        animate={isMenuOpen ? "animate" : "initial"}
        custom={{ animateDelay: 0.1 }}
        className="flex h-fit w-full justify-end rounded-xl border bg-background px-6 py-4"
        style={{
          willChange: "opacity, transform",
        }}
      >
        <Link
          href="/contato"
          className="flex items-center gap-2 font-semibold text-lg"
          title="Fale Conosco - Contato Jaber Seguros"
        >
          Fale Conosco
          <Button className="rounded-full py-6">
            <ArrowRightIcon className="-rotate-45 size-6" aria-hidden />
          </Button>
        </Link>
      </motion.div>
    </nav>
  );
}
