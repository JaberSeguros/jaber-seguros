type ServiceSlug =
  | "seguro-saude"
  | "seguro-vida-empresarial"
  | "seguro-empresarial"
  | "seguro-garantia"
  | "seguro-responsabilidade-civil"
  | "consorcio-veiculos"
  | "consorcio-veiculos-pesados"
  | "consorcio-imoveis"
  | "consorcio-sustentavel";

export default async function ServicePage({
  params,
}: {
  params: { service: ServiceSlug };
}) {}
