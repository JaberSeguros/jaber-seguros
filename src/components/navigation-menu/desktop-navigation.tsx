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
              <NavigationMenuCardContent
                title="Seguros pensados para proteger o que realmente importa"
                description="Proteção inteligente em saúde e vida empresarial, com o cuidado de quem entende que cada cliente é único."
                cta="Solicitar Atendimento Personalizado"
                items={seguros}
              />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold">
              Consórcios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuCardContent
                title="Consórcios para conquistar seus planos com segurança"
                description="Planejamento inteligente para imóveis, veículos e veículos pesados, com condições flexíveis e acompanhamento especializado do início à contemplação."
                cta="Receber Orientação Personalizada"
                items={consorcios}
              />
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
