export type ServiceSlug =
  | "seguro-saude"
  | "seguro-vida-empresarial"
  | "seguro-empresarial"
  | "seguro-garantia"
  | "seguro-responsabilidade-civil"
  | "consorcio-veiculos"
  | "consorcio-veiculos-pesados"
  | "consorcio-imoveis"
  | "consorcio-sustentavel";

export type Diferencial = {
  title: string;
  content: string;
  icon: string;
};

export type Service = (typeof services)[number];

export const services = [
  {
    slug: "seguro-saude" as const,
    label: "Seguro",
    headline: "Seguro Saúde",
    sub: "Plano de saúde empresarial completo, com atendimento personalizado e as melhores operadoras do mercado para cuidar do que realmente importa: as pessoas.",
    image: "/assets/serviços/seguros/pexels-polina-tankilevitch-5234508.jpg",
    diferenciais: [
      {
        title: "Análise estratégica e sob medida",
        content:
          "Estudamos o perfil da sua empresa e dos colaboradores para estruturar um plano equilibrado entre cobertura, qualidade de rede e custo-benefício, sempre com total transparência.",
        icon: "RiUserSearchLine",
      },
      {
        title: "Operadoras reconhecidas nacionalmente",
        content:
          "Trabalhamos com seguradoras consolidadas no mercado, oferecendo ampla rede credenciada, hospitais de referência e atendimento de excelência.",
        icon: "RiBuilding2Line",
      },
      {
        title: "Gestão completa e sem burocracia",
        content:
          "Cuidamos da implantação, movimentações cadastrais e suporte contínuo, garantindo uma gestão de benefícios eficiente e tranquila para sua empresa.",
        icon: "RiCustomerService2Line",
      },
    ],
    cta: "Solicitar cotação",
    detalhes: {
      sobre:
        "O Seguro Saúde empresarial reúne as vantagens da contratação corporativa com atendimento consultivo especializado. Ele oferece cobertura ambulatorial, hospitalar e obstétrica, além de benefícios adicionais que ampliam a proteção e o bem-estar dos colaboradores.",
      oQueEIncluso: [
        "Cobertura ambulatorial com consultas e exames",
        "Internações hospitalares e cirurgias",
        "Cobertura obstétrica",
        "Atendimento de urgência e emergência",
        "Ampla rede credenciada nacional",
        "Coparticipação opcional (conforme plano contratado)",
        "Descontos em farmácias, academias e estabelecimentos parceiros",
        "Serviços adicionais como assistência em viagem e serviços emergenciais residenciais (conforme operadora)",
      ],
      comoFunciona: [
        "Realizamos um diagnóstico completo do perfil da empresa e das necessidades dos colaboradores.",
        "Cotamos nas principais operadoras do mercado e montamos um comparativo técnico detalhado.",
        "Apresentamos as melhores opções com explicação clara das coberturas e condições.",
        "Implantamos o plano escolhido e acompanhamos toda a gestão do benefício.",
      ],
      porQueImportante:
        "Oferecer um plano de saúde empresarial vai além de um benefício: é uma estratégia de valorização de pessoas. Ele contribui para retenção de talentos, redução do absenteísmo e aumento da satisfação da equipe, além de fortalecer a imagem da empresa como empregadora responsável.",
      cta: "Falar com especialista",
      faq: [
        {
          pergunta: "Qual o número mínimo de vidas para contratação?",
          resposta:
            "O mínimo varia conforme a operadora, mas normalmente é possível contratar a partir de 2 ou 3 vidas, dependendo do perfil da empresa.",
        },
        {
          pergunta: "É possível incluir dependentes no plano?",
          resposta:
            "Sim. Cônjuges e filhos podem ser incluídos conforme as regras da operadora e o plano contratado.",
        },
        {
          pergunta: "O plano pode ter coparticipação?",
          resposta:
            "Sim. A coparticipação é opcional e pode ajudar a reduzir o valor mensal do plano, dependendo da estratégia adotada pela empresa.",
        },
        {
          pergunta: "A Jaber auxilia após a contratação?",
          resposta:
            "Sim. Acompanhamos a implantação e oferecemos suporte contínuo para movimentações, dúvidas e orientações sobre utilização do plano.",
        },
      ],
    },
  },

  {
    slug: "seguro-empresarial" as const,
    label: "Seguro",
    headline: "Seguro Empresarial",
    sub: "Proteção patrimonial completa para garantir a continuidade do seu negócio diante de imprevistos.",
    image: "/assets/serviços/seguros/empresarial-hero.webp",
    diferenciais: [
      {
        title: "Proteção personalizada para seu negócio",
        content:
          "Estruturamos uma apólice sob medida, considerando o porte, segmento e nível de exposição ao risco da sua empresa — sem soluções engessadas.",
        icon: "RiShieldCheckLine",
      },
      {
        title: "Análise técnica de riscos",
        content:
          "Realizamos um mapeamento detalhado dos riscos operacionais e patrimoniais para definir coberturas adequadas e evitar lacunas de proteção.",
        icon: "RiFileList3Line",
      },
      {
        title: "Suporte ágil em caso de sinistro",
        content:
          "Em momentos críticos, atuamos junto à seguradora para agilizar processos e reduzir impactos financeiros na sua operação.",
        icon: "RiTimerLine",
      },
    ],
    cta: "Solicitar cotação",
    detalhes: {
      sobre:
        "O Seguro Empresarial é uma solução completa para proteger o patrimônio da empresa contra eventos inesperados que podem gerar prejuízos financeiros significativos. Ele cobre desde danos à estrutura física até responsabilidades decorrentes da atividade empresarial.",
      oQueEIncluso: [
        "Cobertura contra incêndio, explosão e fumaça",
        "Danos elétricos em equipamentos",
        "Roubo e furto qualificado de bens",
        "Responsabilidade civil operações",
        "Quebra de vidros e danos estruturais",
        "Perda ou pagamento de aluguel (conforme contratação)",
        "Lucros cessantes (opcional)",
      ],
      comoFunciona: [
        "Realizamos uma análise detalhada do seu estabelecimento e da atividade exercida.",
        "Identificamos os principais riscos e definimos limites de cobertura adequados.",
        "Cotamos com seguradoras sólidas e apresentamos as melhores condições.",
        "Emitimos a apólice e acompanhamos sua empresa durante toda a vigência do contrato.",
      ],
      porQueImportante:
        "Imprevistos como incêndios, furtos ou danos elétricos podem comprometer seriamente a saúde financeira de uma empresa. O Seguro Empresarial garante segurança patrimonial, estabilidade financeira e continuidade das operações, protegendo anos de investimento e dedicação.",
      cta: "Falar com especialista",
      faq: [
        {
          pergunta:
            "O Seguro Empresarial é indicado para quais tipos de empresa?",
          resposta:
            "Ele pode ser contratado por comércios, indústrias, prestadores de serviço e escritórios. A cobertura é ajustada conforme o ramo de atividade.",
        },
        {
          pergunta: "Posso personalizar as coberturas?",
          resposta:
            "Sim. As coberturas são modulares e podem ser adaptadas às necessidades específicas da sua empresa.",
        },
        {
          pergunta: "O seguro cobre equipamentos e estoque?",
          resposta:
            "Sim, desde que estejam incluídos na apólice. Avaliamos todos os bens para garantir a proteção adequada.",
        },
        {
          pergunta: "Como funciona em caso de sinistro?",
          resposta:
            "A Jaber presta suporte imediato na abertura e acompanhamento do processo junto à seguradora, garantindo mais agilidade e segurança.",
        },
      ],
    },
  },

  {
    slug: "seguro-vida-empresarial" as const,
    label: "Seguro",
    headline: "Seguro de Vida Empresarial",
    sub: "Proteção financeira para colaboradores e segurança estratégica para sua empresa em situações inesperadas.",
    image: "/assets/serviços/seguros/vida.webp",
    diferenciais: [
      {
        title: "Conformidade com a convenção coletiva",
        content:
          "Estruturamos a apólice de acordo com as exigências da sua categoria profissional, garantindo segurança jurídica e tranquilidade para a empresa.",
        icon: "RiFileTextLine",
      },
      {
        title: "Coberturas amplas e acessíveis",
        content:
          "Planos completos com excelente custo-benefício, permitindo inclusão de assistências e benefícios adicionais para ampliar a proteção dos colaboradores.",
        icon: "RiShieldStarLine",
      },
      {
        title: "Gestão e suporte contínuos",
        content:
          "Acompanhamos desde a implantação até renovações e movimentações cadastrais, oferecendo atendimento consultivo em todas as etapas.",
        icon: "RiRefreshLine",
      },
    ],
    cta: "Solicitar cotação",
    detalhes: {
      sobre:
        "O Seguro de Vida Empresarial oferece proteção financeira aos colaboradores e seus familiares em casos de falecimento, invalidez ou eventos inesperados. Além de ser um benefício valorizado pela equipe, ele demonstra responsabilidade social e fortalece a cultura organizacional.",
      oQueEIncluso: [
        "Morte natural ou acidental",
        "Indenização especial por acidente",
        "Invalidez total ou parcial por acidente",
        "Assistência funeral individual ou familiar",
        "Antecipação de indenização por doença grave (conforme plano)",
        "Despesas médico-hospitalares e odontológicas por acidente",
        "Inclusão de cônjuge e filhos (opcional)",
        "Cobertura para incapacidade temporária por acidente",
        "Cesta básica e assistência adicional (conforme contratação)",
      ],
      comoFunciona: [
        "Analisamos a convenção coletiva e as necessidades da empresa.",
        "Definimos as coberturas e capitais segurados adequados.",
        "Cotamos com seguradoras sólidas e apresentamos comparativo técnico.",
        "Implantamos o seguro para os colaboradores e prestamos suporte contínuo.",
      ],
      porQueImportante:
        "O Seguro de Vida Empresarial protege famílias em momentos delicados e reduz impactos financeiros para a empresa. Além disso, pode ser exigência de convenção coletiva e ainda permite dedução fiscal conforme legislação vigente, tornando-se um benefício estratégico e acessível.",
      cta: "Falar com especialista",
      faq: [
        {
          pergunta: "O Seguro de Vida Empresarial é obrigatório?",
          resposta:
            "Depende da convenção coletiva da categoria profissional. Avaliamos essa exigência para garantir que sua empresa esteja em conformidade.",
        },
        {
          pergunta: "A empresa pode dividir o custo com o colaborador?",
          resposta:
            "Sim. O seguro pode ser custeado integralmente pela empresa ou ter participação do colaborador, conforme a política interna.",
        },
        {
          pergunta: "É possível incluir dependentes?",
          resposta:
            "Sim. Cônjuges e filhos podem ser incluídos como opção adicional, ampliando a proteção familiar.",
        },
        {
          pergunta: "Existe benefício fiscal para a empresa?",
          resposta:
            "Sim. Em muitos casos, o valor investido pode ser deduzido como despesa operacional no Imposto de Renda, conforme legislação vigente.",
        },
      ],
    },
  },

  {
    slug: "seguro-garantia" as const,
    label: "Seguro",
    headline: "Seguro Garantia",
    sub: "Segurança contratual para sua empresa participar de licitações e executar contratos com mais competitividade e solidez financeira.",
    image: "/assets/serviços/seguros/garantia.webp",
    diferenciais: [
      {
        title: "Assessoria técnica especializada",
        content:
          "Analisamos editais, contratos e exigências legais para indicar a modalidade de garantia adequada, reduzindo riscos e evitando inconsistências documentais.",
        icon: "RiScalesLine",
      },
      {
        title: "Agilidade para cumprir prazos",
        content:
          "Processo ágil de cotação e emissão para que sua empresa não perca oportunidades por prazos apertados em licitações ou assinaturas contratuais.",
        icon: "RiFlashlightLine",
      },
      {
        title: "Mais eficiência no fluxo de caixa",
        content:
          "Substitui cauções em dinheiro e fianças bancárias, preservando capital de giro e melhorando a capacidade financeira da empresa.",
        icon: "RiPriceTag3Line",
      },
    ],
    cta: "Solicitar cotação",
    detalhes: {
      sobre:
        "O Seguro Garantia é uma solução que assegura o cumprimento de obrigações contratuais assumidas pela empresa, seja em contratos públicos ou privados. Ele garante ao contratante que as condições acordadas serão cumpridas, oferecendo segurança jurídica e financeira às partes envolvidas.",
      oQueEIncluso: [
        "Garantia de participação em licitações (Bid Bond)",
        "Garantia de execução contratual (Performance Bond)",
        "Garantia judicial",
        "Garantia de adiantamento de pagamento",
        "Garantia de retenção de pagamento",
        "Outras modalidades conforme exigência contratual",
      ],
      comoFunciona: [
        "Recebemos o edital ou contrato para análise técnica detalhada.",
        "Realizamos avaliação cadastral e de crédito da empresa.",
        "Definimos a modalidade e o limite de garantia necessários.",
        "Emitimos a apólice dentro do prazo exigido pelo contratante.",
      ],
      porQueImportante:
        "Além de ser exigido em muitos contratos e licitações, o Seguro Garantia é uma alternativa estratégica às cauções tradicionais. Ele preserva o capital de giro da empresa, aumenta sua capacidade de participação em novos contratos e fortalece sua imagem perante o mercado.",
      cta: "Falar com especialista",
      faq: [
        {
          pergunta: "O Seguro Garantia substitui a fiança bancária?",
          resposta:
            "Sim. Ele pode substituir fiança bancária e caução em dinheiro, geralmente com custo mais competitivo e menor impacto no limite de crédito bancário.",
        },
        {
          pergunta: "Quais empresas podem contratar o Seguro Garantia?",
          resposta:
            "Empresas que participam de licitações públicas ou firmam contratos que exigem garantias contratuais, independentemente do porte.",
        },
        {
          pergunta: "O processo é demorado?",
          resposta:
            "Não necessariamente. Com a documentação organizada, a análise e emissão podem ocorrer de forma ágil, especialmente em contratos recorrentes.",
        },
        {
          pergunta: "É possível emitir para contratos privados?",
          resposta:
            "Sim. O Seguro Garantia pode ser utilizado tanto em contratos públicos quanto privados, conforme exigência contratual.",
        },
      ],
    },
  },

  {
    slug: "seguro-responsabilidade-civil" as const,
    label: "Seguro",
    headline: "Seguro de Responsabilidade Civil",
    sub: "Proteção financeira e jurídica contra danos causados a terceiros no exercício da sua atividade.",
    image: "/assets/serviços/seguros/responsabilidade-civil.webp",
    diferenciais: [
      {
        title: "Cobertura alinhada ao seu risco real",
        content:
          "Estruturamos a apólice conforme o porte, segmento e exposição da sua empresa, definindo limites e cláusulas compatíveis com o risco da sua operação.",
        icon: "RiShieldStarLine",
      },
      {
        title: "Mapeamento preventivo de responsabilidade",
        content:
          "Analisamos contratos, prestação de serviços e interação com clientes para identificar pontos de vulnerabilidade antes que se tornem prejuízos.",
        icon: "RiSearchLine",
      },
      {
        title: "Acompanhamento em sinistros",
        content:
          "Orientamos na comunicação à seguradora, organização de documentos e acompanhamento do processo até a indenização ou encerramento da ação.",
        icon: "RiBriefcaseLine",
      },
    ],
    cta: "Solicitar cotação",
    detalhes: {
      sobre:
        "O Seguro de Responsabilidade Civil protege a empresa contra prejuízos decorrentes de danos involuntários causados a terceiros, sejam eles materiais, corporais ou morais, garantindo suporte financeiro e jurídico em caso de reclamações ou processos.",
      oQueEIncluso: [
        "Danos materiais a terceiros",
        "Danos corporais",
        "Danos morais (conforme contratação)",
        "Custos de defesa e honorários advocatícios",
        "Indenizações determinadas judicialmente ou por acordo",
      ],
      comoFunciona: [
        "Mapeamos a exposição da sua atividade a riscos de terceiros.",
        "Definimos limites de cobertura e franquias adequadas.",
        "Emitimos apólice personalizada conforme sua operação.",
        "Em caso de sinistro, a seguradora assume os custos cobertos conforme a apólice.",
      ],
      porQueImportante:
        "Um único processo pode comprometer o caixa e a reputação da empresa. O seguro reduz impactos financeiros, protege o patrimônio e garante respaldo jurídico diante de imprevistos.",
      cta: "Falar com especialista",
      faq: [
        {
          pergunta: "Quem deve contratar esse seguro?",
          resposta:
            "Empresas que prestam serviços, possuem atendimento ao público, realizam obras, eventos ou qualquer atividade que possa gerar danos a terceiros.",
        },
        {
          pergunta: "Ele cobre erro profissional?",
          resposta:
            "Depende da contratação. Para atividades técnicas específicas pode ser necessária cobertura de Responsabilidade Civil Profissional (E&O).",
        },
        {
          pergunta: "O seguro cobre danos morais?",
          resposta:
            "Sim, desde que essa cobertura esteja prevista na apólice contratada.",
        },
      ],
    },
  },

  {
    slug: "consorcio-veiculos-pesados" as const,
    label: "Consórcio",
    headline: "Consórcio de Veículos Pesados",
    sub: "Adquira caminhões, tratores e máquinas agrícolas com planejamento, sem juros e com previsibilidade financeira.",
    image: "/assets/serviços/consorcios/veiculo-pesado-5.webp",
    diferenciais: [
      {
        title: "Aquisição sem juros",
        content:
          "No consórcio você não paga juros como no financiamento tradicional, apenas taxa de administração, preservando capital e reduzindo o custo total da aquisição.",
        icon: "RiTruckLine",
      },
      {
        title: "Planejamento com previsibilidade",
        content:
          "Parcelas acessíveis e crédito definido no momento da contratação, permitindo organizar fluxo de caixa e planejar a expansão da frota com segurança.",
        icon: "RiCalendarLine",
      },
      {
        title: "Estratégia para antecipar a contemplação",
        content:
          "Orientamos na definição de lances e na escolha do grupo ideal para aumentar suas chances de antecipar o crédito conforme seu planejamento.",
        icon: "RiUserVoiceLine",
      },
    ],
    cta: "Solicitar simulação",
    detalhes: {
      sobre:
        "O Consórcio de Veículos Pesados é uma modalidade de compra planejada voltada para caminhões, ônibus, tratores, implementos rodoviários e máquinas agrícolas. Ideal para quem deseja ampliar ou renovar a frota com organização financeira e sem juros.",
      oQueEIncluso: [
        "Carta de crédito para veículos pesados novos ou usados (conforme regras da administradora)",
        "Prazo estendido de pagamento",
        "Possibilidade de contemplação por sorteio ou lance",
        "Flexibilidade na escolha do fornecedor após contemplação",
      ],
      comoFunciona: [
        "Você define o valor da carta de crédito conforme sua necessidade.",
        "Ingressa em um grupo administrado por instituição autorizada.",
        "Participa das assembleias mensais.",
        "Pode ser contemplado por sorteio ou antecipar com lance.",
        "Após contemplação, utiliza o crédito para adquirir o veículo ou equipamento desejado.",
      ],
      porQueImportante:
        "Permite crescimento patrimonial e aumento da capacidade produtiva sem comprometer o caixa com juros elevados. É uma alternativa estratégica para quem pensa no longo prazo.",
      cta: "Quero planejar minha aquisição",
      faq: [
        {
          pergunta: "Consórcio tem juros?",
          resposta:
            "Não. Diferente do financiamento, o consórcio não possui juros, apenas taxa de administração e fundo de reserva diluídos nas parcelas.",
        },
        {
          pergunta: "Posso antecipar a contemplação?",
          resposta:
            "Sim. É possível ofertar lance nas assembleias e, se for vencedor, receber o crédito antes do prazo previsto.",
        },
        {
          pergunta: "Posso usar a carta para trator ou máquina agrícola?",
          resposta:
            "Sim. A carta pode ser utilizada para tratores, colheitadeiras e outras máquinas agrícolas, conforme as regras da administradora.",
        },
      ],
    },
  },

  {
    slug: "consorcio-veiculos" as const,
    label: "Consórcio",
    headline: "Consórcio de Veículos",
    sub: "Adquira seu carro ou moto com planejamento financeiro, sem juros e com total previsibilidade.",
    image: "/assets/serviços/consorcios/vehicles-1.webp",
    diferenciais: [
      {
        title: "Sem juros, com economia real",
        content:
          "No consórcio você não paga juros como no financiamento tradicional — apenas taxa de administração, reduzindo o custo total da aquisição.",
        icon: "RiWalletLine",
      },
      {
        title: "Crédito planejado para seu orçamento",
        content:
          "Você escolhe o valor da carta de crédito e organiza as parcelas de forma previsível, alinhando a conquista ao seu planejamento financeiro.",
        icon: "RiBankLine",
      },
      {
        title: "Estratégia para antecipar a contemplação",
        content:
          "Orientamos na definição de lances e na escolha do grupo ideal para aumentar suas chances de receber o crédito antes do prazo final.",
        icon: "RiCheckDoubleLine",
      },
    ],
    cta: "Simular Consórcio",
    detalhes: {
      sobre:
        "O Consórcio de Veículos é uma modalidade de compra planejada que permite adquirir carro ou moto sem juros, por meio de parcelas mensais e contemplação por sorteio ou lance.",
      oQueEIncluso: [
        "Carta de crédito para veículos novos ou usados (conforme regras da administradora)",
        "Parcelas mensais com valor previsível",
        "Possibilidade de contemplação por sorteio",
        "Opção de antecipação por lance",
        "Liberdade de escolha do fornecedor após contemplação",
      ],
      comoFunciona: [
        "Você define o valor da carta de crédito conforme seu objetivo.",
        "Ingressa em um grupo administrado por instituição autorizada.",
        "Participa das assembleias mensais.",
        "Pode ser contemplado por sorteio ou antecipar com lance.",
        "Após contemplação, utiliza o crédito para adquirir o veículo desejado.",
      ],
      porQueImportante:
        "É ideal para quem deseja trocar ou adquirir um veículo sem assumir juros elevados, mantendo controle financeiro e construindo patrimônio de forma organizada.",
      cta: "Quero planejar meu veículo",
      faq: [
        {
          pergunta: "Consórcio tem juros?",
          resposta:
            "Não. Diferente do financiamento, o consórcio não possui juros, apenas taxa de administração e fundo de reserva diluídos nas parcelas.",
        },
        {
          pergunta: "Posso usar a carta para veículo usado?",
          resposta:
            "Sim, desde que atenda às regras da administradora quanto a ano e condições do veículo.",
        },
        {
          pergunta: "Posso antecipar a contemplação?",
          resposta:
            "Sim. É possível ofertar lance nas assembleias e, se for vencedor, receber o crédito antes do prazo previsto.",
        },
      ],
    },
  },

  {
    slug: "consorcio-imoveis" as const,
    label: "Consórcio",
    headline: "Consórcio de Imóveis",
    sub: "Construa seu patrimônio com planejamento, sem juros e com previsibilidade financeira.",
    image: "/assets/serviços/consorcios/imovel-2.webp",
    diferenciais: [
      {
        title: "Planejamento patrimonial inteligente",
        content:
          "Parcelas previsíveis e sem juros permitem organizar a conquista do imóvel no seu ritmo, com segurança e disciplina financeira.",
        icon: "RiHomeLine",
      },
      {
        title: "Sem juros, com economia real",
        content:
          "No consórcio você paga apenas taxa de administração, reduzindo significativamente o custo total em comparação ao financiamento tradicional.",
        icon: "RiPercentLine",
      },
      {
        title: "Flexibilidade de utilização",
        content:
          "A carta contemplada pode ser usada para compra de imóvel residencial ou comercial, construção, reforma, terreno ou até quitação de financiamento.",
        icon: "RiCoupon2Line",
      },
    ],
    cta: "Simular Consórcio",
    detalhes: {
      sobre:
        "O Consórcio de Imóveis é uma modalidade de compra planejada que permite adquirir bens imobiliários sem juros, por meio de parcelas mensais e contemplação por sorteio ou lance.",
      oQueEIncluso: [
        "Carta de crédito imobiliária",
        "Utilização para compra de imóvel novo ou usado",
        "Possibilidade de construção ou reforma",
        "Opção de quitação de financiamento (conforme regras)",
        "Contemplação por sorteio ou lance",
      ],
      comoFunciona: [
        "Você define o valor da carta de crédito conforme seu objetivo.",
        "Ingressa em um grupo administrado por instituição autorizada.",
        "Participa das assembleias mensais.",
        "Pode ser contemplado por sorteio ou antecipar com lance.",
        "Após contemplação, utiliza o crédito para adquirir ou investir no imóvel desejado.",
      ],
      porQueImportante:
        "É uma alternativa estratégica ao financiamento, ideal para quem deseja construir patrimônio no médio e longo prazo sem comprometer o orçamento com juros elevados.",
      cta: "Quero planejar meu imóvel",
      faq: [
        {
          pergunta: "Consórcio de imóvel tem juros?",
          resposta:
            "Não. Diferente do financiamento, o consórcio não possui juros, apenas taxa de administração e fundo de reserva diluídos nas parcelas.",
        },
        {
          pergunta: "Posso usar FGTS?",
          resposta:
            "Sim, é possível utilizar o FGTS conforme as regras vigentes e as condições da administradora.",
        },
        {
          pergunta: "Posso quitar um financiamento com a carta?",
          resposta:
            "Sim, desde que a administradora permita essa finalidade na modalidade contratada.",
        },
      ],
    },
  },

  {
    slug: "consorcio-sustentavel" as const,
    label: "Consórcio",
    headline: "Consórcio Sustentável",
    sub: "Invista em energia solar e soluções sustentáveis com planejamento, sem juros e com foco em economia de longo prazo.",
    image: "/assets/serviços/consorcios/sustentavel-2.webp",
    diferenciais: [
      {
        title: "Investimento com retorno econômico",
        content:
          "Ideal para projetos de energia solar e eficiência energética que reduzem custos mensais e geram economia recorrente ao longo dos anos.",
        icon: "RiLeafLine",
      },
      {
        title: "Sem juros, mais viabilidade",
        content:
          "No consórcio você paga apenas taxa de administração, tornando o investimento sustentável mais acessível do que financiamentos com juros elevados.",
        icon: "RiSeedlingLine",
      },
      {
        title: "Plano ajustado ao seu projeto",
        content:
          "Definimos o valor da carta e o prazo conforme o porte do projeto, seja para residência, empresa ou propriedade rural.",
        icon: "RiUserSettingsLine",
      },
    ],
    cta: "Simular Consórcio",
    detalhes: {
      sobre:
        "O Consórcio Sustentável é uma modalidade de compra planejada voltada para aquisição de soluções como sistemas de energia solar, equipamentos de eficiência energética e outras tecnologias sustentáveis.",
      oQueEIncluso: [
        "Carta de crédito para energia solar e projetos sustentáveis",
        "Parcelas mensais previsíveis",
        "Contemplação por sorteio ou lance",
        "Liberdade para escolha do fornecedor após contemplação",
      ],
      comoFunciona: [
        "Você define o valor necessário para seu projeto sustentável.",
        "Ingressa em um grupo administrado por instituição autorizada.",
        "Participa das assembleias mensais.",
        "Pode ser contemplado por sorteio ou antecipar com lance.",
        "Após contemplação, utiliza o crédito para implementar o projeto.",
      ],
      porQueImportante:
        "Permite investir em sustentabilidade sem comprometer o caixa com juros, ao mesmo tempo em que reduz despesas com energia e valoriza o imóvel ou a empresa.",
      cta: "Quero investir em energia sustentável",
      faq: [
        {
          pergunta: "Posso usar para energia solar?",
          resposta:
            "Sim. O consórcio sustentável é amplamente utilizado para aquisição e instalação de sistemas de energia solar.",
        },
        {
          pergunta: "Consórcio sustentável tem juros?",
          resposta:
            "Não. Assim como nas demais modalidades, não há juros, apenas taxa de administração e fundo de reserva diluídos nas parcelas.",
        },
        {
          pergunta: "Serve para empresa?",
          resposta:
            "Sim. Pode ser utilizado tanto para projetos residenciais quanto empresariais, conforme regras da administradora.",
        },
      ],
    },
  },
];

export function getServiceBySlug(slug: ServiceSlug): Service | null {
  return services.find((s) => s.slug === slug) ?? null;
}
