import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation-menu/navigation-menu";
import { MenuProvider } from "@/contexts/menu-context";
import { Footer } from "./(sections)/footer/footer";

export const metadata: Metadata = {
  title: "Jaber Seguros",
  description:
    "Nossa corretora é especializada em oferecer diversas modalidades de seguros e benefícios para pessoas físicas e empresas. Respaldada pela qualificação de seus profissionais e também pela sólida parceria com as melhores seguradoras do mercado, estamos capacitados à identificar quais são os produtos que melhor atendem às suas necessidades. Seguimos em constante atualização e contando com uma completa infraestrutura, nossa corretora se destaca pela excelência nos serviços prestados com agilidade e eficácia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <MenuProvider>
          <Navigation />
          {children}
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}
