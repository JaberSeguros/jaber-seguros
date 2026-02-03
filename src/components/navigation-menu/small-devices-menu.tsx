"use client";

import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "lucide-react";
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
    <motion.div
      variants={menuVariants}
      initial="initial"
      animate={isMenuOpen ? "animate" : "initial"}
      className={cn(
        "-translate-x-1/2 absolute top-[120%] left-1/2 flex h-fit w-[93vw] max-w-5xl flex-col gap-4 rounded-2xl",
        "max-h-[calc(100vh-11.2rem)] sm:max-h-[calc(100vh-6.5rem)]",
      )}
    >
      <div className="h-fit w-full space-y-2 overflow-y-auto rounded-xl border bg-background p-2">
        <motion.div
          variants={segurosVariants}
          initial="initial"
          animate={openedOption === "seguros" ? "animate" : "initial"}
          onClick={() => {
            setOpenedOption(openedOption === "seguros" ? null : "seguros");
          }}
          className="flex h-[68px] w-full flex-col items-center gap-2 overflow-hidden rounded-xl"
        >
          <Button
            variant="ghost"
            className="h-17 w-full justify-between bg-foreground/10 px-7! font-semibold text-lg"
          >
            Seguros
            <ChevronDownIcon
              className={cn(
                "size-6 transition-transform duration-500",
                openedOption === "seguros" ? "-rotate-180" : "",
              )}
            />
          </Button>
          {seguros.map((seguro) => (
            <MenuContentCard key={seguro.id} content={seguro} />
          ))}
        </motion.div>
        <motion.div
          variants={consorciosVariants}
          initial="initial"
          animate={openedOption === "consorcios" ? "animate" : "initial"}
          onClick={() => {
            setOpenedOption(
              openedOption === "consorcios" ? null : "consorcios",
            );
          }}
          className="flex h-[1850px] w-full flex-col gap-2 overflow-hidden rounded-xl"
        >
          <Button
            variant="ghost"
            className="h-17 w-full justify-between bg-foreground/10 px-7! font-semibold text-lg"
          >
            Consórcios
            <ChevronDownIcon
              className={cn(
                "size-6 transition-transform duration-500",
                openedOption === "consorcios" ? "-rotate-180" : "",
              )}
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
          >
            Serviços
            <ChevronRightIcon className="-rotate-45 size-6" />
          </Link>
        </div>
        <div className="h-17 w-full rounded-xl bg-foreground/10">
          <Link
            href="/sobre-nos"
            className="flex h-17 w-full items-center justify-between px-7 font-semibold text-lg"
          >
            Sobre nós
            <ChevronRightIcon className="-rotate-45 size-6" />
          </Link>
        </div>
      </div>
      <div className="flex h-fit w-full justify-end rounded-xl border bg-background px-6 py-4">
        <Link
          href="/contato"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          Fale Conosco
          <Button className="rounded-full py-6">
            <ArrowRightIcon className="-rotate-45 size-6" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
