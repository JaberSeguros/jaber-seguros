# Jaber Seguros

Website institucional da **Jaber Seguros** — corretora de seguros e consórcios com atendimento em São Paulo e todo o Brasil. O projeto oferece informações sobre serviços, orçamentos e canais de contato em uma experiência moderna e responsiva.

---

## Índice

- [Funcionalidades](#funcionalidades)
- [Stack Tecnológica](#stack-tecnológica)
- [Pré-requisitos](#pré-requisitos)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Como Executar](#como-executar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Formulário de Contato e API](#formulário-de-contato-e-api)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Deploy](#deploy)
- [Licença](#licença)

---

## Funcionalidades

- **Página inicial** com hero, serviços em destaque e chamadas para ação
- **Serviços** detalhados (seguro saúde, vida empresarial, consórcios, garantia, responsabilidade civil, entre outros) com páginas dinâmicas por serviço
- **Sobre nós** com história, diferenciais e como trabalhamos
- **Contato** com formulário validado, FAQ e informações de telefone, e-mail e endereço
- **Termos de uso** e **Política de privacidade**
- Envio de e-mails via **Resend** a partir do formulário de contato
- **SEO** com metadados, Open Graph, Twitter Cards e JSON-LD (Schema.org)
- **Acessibilidade** e suporte a temas (claro/escuro)
- Layout **responsivo** e componentes reutilizáveis (Radix UI, Tailwind CSS)

---

## Stack Tecnológica

| Categoria        | Tecnologia |
|------------------|------------|
| Framework        | [Next.js](https://nextjs.org) 16 (App Router) |
| UI               | [React](https://react.dev) 19 |
| Estilização      | [Tailwind CSS](https://tailwindcss.com) 4 |
| Componentes      | [Radix UI](https://www.radix-ui.com), [Lucide](https://lucide.dev), [Remix Icon](https://remixicon.com) |
| Formulários      | [React Hook Form](https://react-hook-form.com), [Zod](https://zod.dev), [@hookform/resolvers](https://github.com/react-hook-form/resolvers) |
| E-mail           | [Resend](https://resend.com) |
| Animações        | [GSAP](https://gsap.com), [Motion](https://motion.dev) |
| Notificações     | [Sonner](https://sonner.emilkowal.ski) |
| Linting/Format   | [ESLint](https://eslint.org), [Biome](https://biomejs.dev) |
| Linguagem        | [TypeScript](https://www.typescriptlang.org) 5 |

---

## Pré-requisitos

- [Node.js](https://nodejs.org) 20+ (recomendado LTS)
- npm, pnpm, yarn ou bun

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (ou `.env.local`) e configure:

| Variável               | Obrigatória | Descrição |
|------------------------|-------------|-----------|
| `RESEND_API_KEY`       | Sim*        | Chave da API do [Resend](https://resend.com) para envio de e-mails do formulário de contato. Sem ela, o envio de mensagens retornará erro 500. |
| `NEXT_PUBLIC_SITE_URL` | Não         | URL base do site (ex.: `https://jaberseguros.com.br`). Usada em metadados e JSON-LD. |

\* Obrigatória apenas para o funcionamento do formulário de contato. O restante do site funciona sem ela.

Exemplo:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://jaberseguros.com.br
```

---

## Como Executar

### 1. Clonar e instalar dependências

```bash
git clone <url-do-repositorio>
cd jaberseguros
npm install
```

### 2. Configurar variáveis de ambiente

Copie o exemplo e preencha os valores:

```bash
cp .env.example .env
# Edite .env com RESEND_API_KEY e, se quiser, NEXT_PUBLIC_SITE_URL
```

### 3. Subir o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### 4. Build e produção

```bash
npm run build
npm run start
```

---

## Estrutura do Projeto

```
jaberseguros/
├── src/
│   ├── app/                    # App Router (Next.js)
│   │   ├── (sections)/         # Seções da home e componentes compartilhados
│   │   ├── api/
│   │   │   └── contact/        # POST /api/contact (envio de e-mail)
│   │   ├── contato/            # Página e formulário de contato
│   │   ├── servicos/[service]/ # Páginas dinâmicas por serviço
│   │   ├── sobre-nos/
│   │   ├── termos-de-uso/
│   │   ├── politica-de-privacidade/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/             # Componentes reutilizáveis e UI
│   └── lib/                    # Utilitários (phone, utils, services)
├── public/                     # Assets estáticos
├── .env                        # Variáveis de ambiente (não versionado)
├── package.json
└── README.md
```

---

## Formulário de Contato e API

O formulário em `/contato` coleta dados do solicitante (nome, e-mail, telefone, tipo de pessoa), localização (estado, cidade), serviço desejado e mensagem. Campos condicionais (ex.: quantidade de vidas, valor aproximado, marca de interesse) são validados com Zod e exibidos conforme o serviço selecionado.

**Fluxo:**

1. O usuário preenche e envia o formulário.
2. O front-end envia um `POST` para `/api/contact` com o payload em JSON.
3. A rota `src/app/api/contact/route.ts` valida os dados, monta um e-mail em HTML e envia via Resend para `jaber@saberseguros.com.br`.
4. O front-end exibe toast de sucesso ou erro e, em caso de sucesso, reseta o formulário.

**Requisitos para o e-mail funcionar:**

- `RESEND_API_KEY` configurada no ambiente.
- Domínio/e-mail “from” configurado e verificado no painel da Resend (o código usa um endereço como `no-reply@jaberseguros.com.br` — ajuste no `route.ts` se o seu domínio for outro).

---

## Scripts Disponíveis

| Comando        | Descrição |
|----------------|-----------|
| `npm run dev`  | Inicia o servidor de desenvolvimento com hot reload. |
| `npm run build`| Gera o build de produção. |
| `npm run start`| Inicia o servidor em modo produção (após `build`). |
| `npm run lint` | Executa o ESLint no projeto. |

---

## Deploy

O projeto está preparado para deploy em plataformas como [Vercel](https://vercel.com), [Netlify](https://www.netlify.com) ou qualquer host que suporte Next.js.

- Configure as variáveis de ambiente no painel do provedor.
- Defina `RESEND_API_KEY` para o envio de e-mails do formulário de contato.
- Em ambientes serverless, a rota `/api/contact` roda no servidor e usa apenas variáveis de ambiente do backend (nunca exponha a chave no cliente).

Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para detalhes.

---

## Licença

Este projeto é de uso privado. Todos os direitos reservados à Jaber Seguros.
