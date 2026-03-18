import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      message,
      state,
      city,
      service,
      typeOfPerson,
      livesQuantity,
      estimatedValue,
      interestBrand,
    } = body ?? {};

    if (
      !name ||
      !email ||
      !phone ||
      !message ||
      !state ||
      !city ||
      !service ||
      !typeOfPerson
    ) {
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios ausentes." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY não configurada.");
      return new Response(
        JSON.stringify({
          error:
            "Serviço de e-mail não está configurado. Tente novamente mais tarde.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const subject = `Novo contato pelo site - ${service}`;

    const html = `
      <h1>Novo contato pelo formulário do site</h1>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Tipo de pessoa:</strong> ${
        typeOfPerson === "fisica" ? "Pessoa física" : "Pessoa jurídica"
      }</p>
      <p><strong>Estado:</strong> ${state}</p>
      <p><strong>Cidade:</strong> ${city}</p>
      <p><strong>Serviço desejado:</strong> ${service}</p>
      ${
        livesQuantity
          ? `<p><strong>Quantidade de vidas:</strong> ${livesQuantity}</p>`
          : ""
      }
      ${
        estimatedValue
          ? `<p><strong>Valor aproximado:</strong> ${estimatedValue}</p>`
          : ""
      }
      ${
        interestBrand
          ? `<p><strong>Marca de interesse:</strong> ${interestBrand}</p>`
          : ""
      }
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `;

    const { error } = await resend.emails.send({
      from: "Site Jaber <contato@jaber.jaberseguros.com>",
      to: ["jaber@jaberseguros.com"],
      subject,
      html,
    });

    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      return new Response(
        JSON.stringify({
          error:
            error.message,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message:
          "Mensagem enviada com sucesso, em até 24 horas entraremos em contato.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Erro no endpoint de contato:", error);
    return new Response(
      JSON.stringify({
        error:
          "Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}

