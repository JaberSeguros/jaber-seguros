import Link from "next/link";
import {
  type PrivacyPolicyItem,
  PrivacyPolicyItems,
} from "../politica-de-privacidade/components/privacy-policy-items";

const termsItems: PrivacyPolicyItem[] = [
  {
    number: 1,
    title: "Sobre a Jaber Seguros",
    content: [
      {
        type: "paragraph",
        text: "A Jaber Seguros é uma corretora especializada em:",
      },
      {
        type: "list",
        items: [
          "Seguro Saúde",
          "Seguro de Vida Empresarial",
          "Seguro Empresarial",
          "Seguro de Responsabilidade Civil",
          "Seguro Garantia",
          "Consórcios (Imóvel, Veículos, Veículos Pesados e Sustentável)",
        ],
      },
      {
        type: "paragraph",
        text: "Nosso site tem como objetivo fornecer informações institucionais, apresentar nossos serviços e possibilitar contato para solicitação de cotações.",
      },
    ],
  },
  {
    number: 2,
    title: "Uso do site",
    content: [
      {
        type: "paragraph",
        text: "Ao utilizar este site, o usuário se compromete a:",
      },
      {
        type: "list",
        items: [
          "Fornecer informações verdadeiras e atualizadas nos formulários",
          "Não utilizar o site para fins ilícitos ou fraudulentos",
          "Não tentar acessar áreas restritas ou sistemas internos",
          "Não praticar qualquer ato que comprometa a segurança da plataforma",
        ],
      },
      {
        type: "paragraph",
        text: "A Jaber Seguros poderá suspender ou bloquear acessos que violem estes Termos.",
      },
    ],
  },
  {
    number: 3,
    title: "Natureza das informações",
    content: [
      {
        type: "paragraph",
        text: "As informações disponibilizadas neste site:",
      },
      {
        type: "list",
        items: [
          "São de caráter informativo",
          "Não configuram proposta definitiva de seguro ou consórcio",
          "Podem ser alteradas sem aviso prévio",
        ],
      },
      {
        type: "paragraph",
        text: "A contratação de qualquer serviço dependerá de análise técnica, regras da seguradora ou administradora de consórcio e formalização contratual específica.",
      },
    ],
  },
  {
    number: 4,
    title: "Relação com seguradoras e administradoras",
    content: [
      {
        type: "paragraph",
        text: "A Jaber Seguros atua como intermediadora entre clientes e instituições parceiras.",
      },
      {
        type: "paragraph",
        text: "Entre as principais parceiras estão:",
      },
      {
        type: "list",
        items: [
          "Porto Seguro",
          "SulAmérica",
          "Amil",
          "Seguros Unimed",
          "Omint",
          "Care Plus",
          "MetLife",
        ],
      },
      {
        type: "paragraph",
        text: "As condições finais de contratação, cobertura, prazos e valores são definidas exclusivamente pelas respectivas seguradoras ou administradoras.",
      },
    ],
  },
  {
    number: 5,
    title: "Limitação de responsabilidade",
    content: [
      {
        type: "paragraph",
        text: "A Jaber Seguros:",
      },
      {
        type: "list",
        items: [
          "Não garante aprovação de propostas de seguro ou consórcio",
          "Não se responsabiliza por decisões técnicas das seguradoras",
          "Não responde por indisponibilidades temporárias do site",
          "Não se responsabiliza por danos decorrentes do uso indevido da plataforma",
        ],
      },
      {
        type: "paragraph",
        text: "Fazemos o possível para manter as informações atualizadas, mas não garantimos ausência total de erros ou omissões.",
      },
    ],
  },
  {
    number: 6,
    title: "Propriedade intelectual",
    content: [
      {
        type: "paragraph",
        text: "Todo o conteúdo do site, incluindo:",
      },
      {
        type: "list",
        items: [
          "Textos",
          "Logotipos",
          "Marcas",
          "Layout",
          "Elementos visuais",
        ],
      },
      {
        type: "paragraph",
        text: "é protegido por direitos autorais e não pode ser reproduzido sem autorização prévia.",
      },
      {
        type: "paragraph",
        text: "As marcas das seguradoras parceiras pertencem aos seus respectivos titulares.",
      },
    ],
  },
  {
    number: 7,
    title: "Proteção de dados",
    content: [
      {
        type: "paragraph",
        text: "O tratamento de dados pessoais é realizado conforme descrito em nossa Política de Privacidade, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
      },
    ],
  },
  {
    number: 8,
    title: "Links externos",
    content: [
      {
        type: "paragraph",
        text: "O site pode conter links para sites de terceiros. A Jaber Seguros não se responsabiliza pelas políticas, práticas ou conteúdos desses sites externos.",
      },
    ],
  },
  {
    number: 9,
    title: "Alterações nos Termos",
    content: [
      {
        type: "paragraph",
        text: "A Jaber Seguros poderá atualizar estes Termos de Uso a qualquer momento, sendo recomendável a revisão periódica desta página.",
      },
    ],
  },
  {
    number: 10,
    title: "Foro e legislação aplicável",
    content: [
      {
        type: "paragraph",
        text: "Estes Termos são regidos pelas leis da República Federativa do Brasil.",
      },
      {
        type: "paragraph",
        text: "Fica eleito o foro da comarca da sede da Jaber Seguros para dirimir eventuais controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.",
      },
    ],
  },
];

export default function TermosDeUso() {
  return (
    <main className="w-full pt-35">
      <div className="mx-auto w-full max-w-[85rem] px-4">
        <div className="flex w-full flex-col gap-20">
          <h1 className="animate-fade-up font-bold text-4xl md:text-3xl lg:text-4xl">
            Termos de Uso
          </h1>
          <div className="relative flex flex-col gap-20 md:flex-row md:justify-between">
            <div className="h-fit shrink-0 md:sticky md:top-[100px]">
              <div className="flex flex-col gap-3">
                <h2 className="animate-fade-up font-bold text-xl [animation-delay:200ms]">
                  Informações Legais
                </h2>
                <div className="animate-fade-up space-y-2 [animation-delay:400ms]">
                  <p className="font-bold">Jaber Seguros</p>
                  <Link
                    href="mailto:jaber@jaberseguros.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm underline transition-colors duration-300 hover:text-foreground"
                  >
                    jaber@jaberseguros.com.br
                  </Link>
                  <p className="text-muted-foreground text-sm">
                    CNPJ: 08.840.020/0001-82
                  </p>
                  <p className="text-muted-foreground text-sm">
                    R. Verena, 197 - Penha de França - São Paulo - SP
                  </p>
                </div>
                <p className="animate-fade-up text-muted-foreground text-sm [animation-delay:600ms]">
                  Atualizado em: 13 de Fevereiro, 2026
                </p>
              </div>
            </div>
            <div className="flex max-w-[39rem] flex-col gap-15">
              <p className="animate-fade-up text-muted-foreground [animation-delay:200ms]">
                Ao acessar e utilizar o site da Jaber Seguros, você declara
                concordância com os Termos de Uso abaixo. Recomendamos a leitura
                atenta antes de utilizar nossos serviços.
              </p>
              <div className="animate-fade-up [animation-delay:400ms]">
                <PrivacyPolicyItems items={termsItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
