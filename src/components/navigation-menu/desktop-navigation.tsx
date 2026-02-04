import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { consorcios, seguros } from "./data";
import { NavigationMenuCardContent } from "./navigation-menu-card-content";

export function DesktopNavigation() {
  return (
    <div className="hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold">
              Seguros
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-transparent">
              <NavigationMenuCardContent subject="seguros" items={seguros} />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold">
              Consórcios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuCardContent subject="consorcios" items={consorcios} />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/servicos" className="font-semibold">
                Serviços
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/sobre-nos" className="font-semibold">
                Sobre nós
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
