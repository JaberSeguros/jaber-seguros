import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { consorcios, seguros } from "./data";
import { NavigationMenuCardContent } from "./navigation-menu-card-content";

export function DesktopNavigation() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="hidden md:flex" aria-label="Menu principal">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="font-semibold"
              aria-haspopup="menu"
              aria-label="Abrir menu Seguros"
            >
              Seguros
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-transparent">
              <NavigationMenuCardContent subject="seguros" items={seguros} />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="font-semibold"
              aria-haspopup="menu"
              aria-label="Abrir menu Consórcios"
            >
              Consórcios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuCardContent
                subject="consorcios"
                items={consorcios}
              />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                isActive("/servicos") && "bg-accent/50 text-accent-foreground",
              )}
            >
              <Link
                href="/servicos"
                className="font-semibold"
                title="Serviços - Seguros e consórcios Jaber Seguros"
              >
                Serviços
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                isActive("/sobre-nos") && "bg-accent/50 text-accent-foreground",
              )}
            >
              <Link
                href="/sobre-nos"
                className="font-semibold"
                title="Sobre nós - Conheça a Jaber Seguros"
              >
                Sobre nós
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
