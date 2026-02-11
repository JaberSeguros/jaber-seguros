import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    id: 1,
    title: "Navegação",
    content: [
      {
        id: 1,
        title: "Serviços",
        href: "/servicos",
      },
      {
        id: 2,
        title: "Sobre nós",
        href: "/sobre-nos",
      },
      {
        id: 3,
        title: "Fale Conosco",
        href: "/contato",
      },
    ],
  },
  {
    id: 2,
    title: "Contato",
    content: [
      {
        id: 1,
        title: "(11) 99310-1907",
        href: "https://wa.me/5511993101907",
      },
      {
        id: 2,
        title: "jaber@jaberseguros.com.br",
        href: "mailto:jaber@jaberseguros.com.br",
      },
      {
        id: 3,
        title: "R. Verena, 197 - Penha de França - São Paulo - SP",
        href: "https://maps.app.goo.gl/Zb9jxT31D2HfE8zV6",
      },
    ],
  },
  {
    id: 3,
    title: "Legal",
    content: [
      {
        id: 1,
        title: "Política de Privacidade",
        href: "/politica-de-privacidade",
      },
      {
        id: 2,
        title: "Termos de Uso",
        href: "/termos-de-uso",
      },
    ],
  },
];

export function Footer() {
  return (
    <section className="mx-auto mt-20 w-full max-w-[85rem] md:mt-32 lg:mt-40 lg:mb-20 lg:px-4">
      <div className="w-full space-y-8 bg-foreground-dark p-4 py-12 md:p-6 lg:rounded-4xl lg:p-12">
        <div className="mb-14 flex flex-col justify-between gap-12 lg:flex-row lg:gap-6">
          <div className="max-w-md space-y-4.5">
            <div className="flex items-center">
              <div className="relative aspect-square size-18 overflow-hidden rounded-lg">
                <Image
                  src="/assets/logos/logo-only.png"
                  alt="Jaber Seguros - Logo"
                  fill
                  className="scale-130 object-cover object-center"
                />
              </div>
              <p className="font-bold text-primary-foreground text-xl">
                Jaber Seguros
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted/85">
                Jaber Seguros — há mais de 15 anos oferecendo soluções em
                seguros e consórcios com atendimento personalizado e parceiros
                de confiança.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row">
            {footerLinks.map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <h3 className="font-bold text-2xl text-primary-foreground">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {item.content.map((content) => (
                    <Link
                      key={content.id}
                      href={content.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted/85 transition-colors duration-300 hover:text-primary-foreground lg:max-w-[12rem]"
                    >
                      {content.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col justify-between gap-6 lg:flex-row">
          <p className="text-muted/85 text-sm">
            © {new Date().getFullYear()} Jaber Seguros. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-muted/85 text-sm">Desenvolvido por:</p>
            <Link
              href="https://github.com/SrDev-Henrique"
              className="flex items-center gap-2"
            >
              <div className="relative size-6 overflow-hidden rounded-full">
                <Image
                  src="https://github.com/SrDev-Henrique.png"
                  alt="SrDev-Henrique"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="text-muted text-sm">SrDev-Henrique</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
