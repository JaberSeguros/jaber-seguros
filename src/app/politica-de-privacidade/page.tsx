import Link from "next/link";
import {
  type PrivacyPolicyItem,
  PrivacyPolicyItems,
} from "./components/privacy-policy-items";

const policiesItems: PrivacyPolicyItem[] = [
  {
    number: 1,
    title: "Quem somos",
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
          "Consórcio de Imóveis",
          "Consórcio de Veículos",
          "Consórcio de Veículos Pesados",
          "Consórcio Sustentável",
        ],
      },
      {
        type: "paragraph",
        text: "Nosso compromisso é oferecer soluções sob medida, com segurança, transparência e atendimento personalizado.",
      },
    ],
  },
  {
    number: 2,
    title: "Dados que coletamos",
    content: [
      {
        type: "paragraph",
        text: "Podemos coletar os seguintes dados pessoais:",
      },
      {
        type: "list",
        title: "🔹 Dados fornecidos diretamente por você",
        items: [
          "Nome completo",
          "Telefone",
          "E-mail",
          "Empresa (quando aplicável)",
          "Cargo",
          "Informações necessárias para cotação de seguros ou consórcios",
        ],
      },
      {
        type: "list",
        title: "🔹 Dados coletados automaticamente",
        items: [
          "Endereço IP",
          "Tipo de navegador",
          "Páginas acessadas",
          "Tempo de permanência",
          "Dados de cookies",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Finalidade do tratamento dos dados",
    content: [
      {
        type: "paragraph",
        text: "Seus dados são utilizados para:",
      },
      {
        type: "list",
        items: [
          "Entrar em contato via WhatsApp, telefone ou e-mail",
          "Realizar cotações de seguros e consórcios",
          "Enviar propostas comerciais",
          "Prestar suporte e atendimento",
          "Cumprir obrigações legais e regulatórias",
          "Melhorar a experiência no site",
        ],
      },
      {
        type: "paragraph",
        text: "Não vendemos ou comercializamos seus dados pessoais.",
      },
    ],
  },
  {
    number: 4,
    title: "Compartilhamento de dados",
    content: [
      {
        type: "paragraph",
        text: "Seus dados poderão ser compartilhados, quando necessário, com seguradoras e administradoras parceiras, exclusivamente para fins de cotação, contratação e gestão de serviços.",
      },
      {
        type: "paragraph",
        text: "Entre nossas parceiras estão:",
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
        text: "O compartilhamento ocorre apenas quando necessário para execução do serviço solicitado.",
      },
    ],
  },
  {
    number: 5,
    title: "Base legal para o tratamento",
    content: [
      {
        type: "paragraph",
        text: "Tratamos seus dados com base nas seguintes hipóteses legais previstas na LGPD:",
      },
      {
        type: "list",
        items: [
          "Consentimento do titular",
          "Execução de contrato ou procedimentos preliminares",
          "Cumprimento de obrigação legal",
          "Legítimo interesse",
        ],
      },
    ],
  },
  {
    number: 6,
    title: "Armazenamento e segurança",
    content: [
      {
        type: "paragraph",
        text: "Adotamos medidas técnicas e administrativas adequadas para proteger seus dados contra:",
      },
      {
        type: "list",
        items: [
          "Acesso não autorizado",
          "Vazamentos",
          "Alterações indevidas",
          "Uso inadequado",
        ],
      },
      {
        type: "paragraph",
        text: "Seus dados são armazenados apenas pelo tempo necessário para cumprir as finalidades descritas nesta Política ou conforme exigido por lei.",
      },
    ],
  },
  {
    number: 7,
    title: "Direitos do titular dos dados",
    content: [
      {
        type: "paragraph",
        text: "Você pode, a qualquer momento, solicitar:",
      },
      {
        type: "list",
        items: [
          "Confirmação da existência de tratamento",
          "Acesso aos seus dados",
          "Correção de dados incompletos ou desatualizados",
          "Anonimização ou exclusão de dados desnecessários",
          "Revogação do consentimento",
          "Portabilidade dos dados",
        ],
      },
      {
        type: "paragraph",
        text: "Para exercer seus direitos, entre em contato através do e-mail: 📧 jaber@jaberseguros.com.br",
      },
    ],
  },
  {
    number: 8,
    title: "Uso de Cookies",
    content: [
      {
        type: "paragraph",
        text: "Utilizamos cookies para:",
      },
      {
        type: "list",
        items: [
          "Melhorar sua experiência de navegação",
          "Analisar métricas de acesso",
          "Otimizar campanhas de marketing",
        ],
      },
      {
        type: "paragraph",
        text: "Você pode desativar os cookies nas configurações do seu navegador, se desejar.",
      },
    ],
  },
  {
    number: 9,
    title: "Alterações nesta Política",
    content: [
      {
        type: "paragraph",
        text: "Esta Política poderá ser atualizada periodicamente. Recomendamos que você revise este documento regularmente para se manter informado.",
      },
    ],
  },
];

export default function PoliticaDePrivacidade() {
  return (
    <main className="w-full pt-35">
      <div className="mx-auto w-full max-w-[85rem] px-4">
        <div className="flex w-full flex-col gap-20">
          <h1 className="animate-fade-up font-bold text-4xl md:text-3xl lg:text-4xl">
            Política de Privacidade
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
                A Jaber Seguros valoriza a sua privacidade e está comprometida
                com a proteção dos seus dados pessoais, em conformidade com a
                Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
              </p>
              <div className="animate-fade-up [animation-delay:400ms]">
                <PrivacyPolicyItems items={policiesItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
