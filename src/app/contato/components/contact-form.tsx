"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  RiMailLine,
  RiMapPin3Line,
  RiMapPin4Line,
  RiUserLine,
} from "@remixicon/react";
import { PhoneIcon } from "lucide-react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import InputWithIcon from "@/components/input-with-icon";
import { Toaster } from "@/components/toaster";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { formatPhone, getPhoneDigits } from "@/lib/phone";

const formSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.email({ message: "Email é obrigatório" }),
  phone: z.string().min(1, { message: "Telefone é obrigatório" }),
  message: z.string().min(1, { message: "Mensagem é obrigatória" }),
  state: z.string().min(1, { message: "Estado é obrigatório" }),
  city: z.string().min(1, { message: "Cidade é obrigatória" }),
  service: z.string().min(1, { message: "Serviço é obrigatório" }),
  typeOfPerson: z.enum(["fisica", "juridica"]),
  livesQuantity: z.number().optional(),
  aproximateValue: z.number().optional(),
  interestBrand: z.string().optional(),
  LGPD: z.boolean().refine((value) => value, {
    message: "Você deve aceitar os termos de uso e política de privacidade",
  }),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      state: "",
      city: "",
      service: "",
      typeOfPerson: "fisica",
      livesQuantity: undefined,
      aproximateValue: undefined,
      interestBrand: "",
      LGPD: false,
    },
  });

  const serviceValue =
    useWatch({ control: form.control, name: "service", defaultValue: "" }) ??
    "";

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true);
    setTimeout(() => {
      toast.custom((t) => (
        <Toaster
          message="Orcamento solicitado com sucesso, em até 2 horas entraremos em contato."
          onClick={() => toast.dismiss(t)}
        />
      ));
      setIsLoading(false);
      form.reset();
    }, 1000);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="rounded-xl border border-border/60 bg-card/50 p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <RiUserLine className="size-5" aria-hidden />
            </span>
            <div>
              <h2 className="font-semibold text-lg tracking-tight">
                Dados do solicitante
              </h2>
              <p className="text-muted-foreground text-sm">
                Informações para contato
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      Icon={
                        <RiUserLine className="size-4 text-muted-foreground" />
                      }
                      field={field}
                      label="Nome Completo"
                      placeholder="Nome"
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="*:not-first:mt-2">
                      <FormLabel
                        htmlFor={field.name}
                        className="flex items-center gap-1"
                      >
                        Telefone <span className="text-destructive">*</span>
                      </FormLabel>
                      <div className="relative">
                        <Input
                          className="peer h-11 rounded-lg ps-9"
                          inputMode="tel"
                          type="tel"
                          placeholder="(00) 00000-0000"
                          value={
                            field.value === undefined
                              ? ""
                              : formatPhone(field.value)
                          }
                          name={field.name}
                          onBlur={field.onBlur}
                          ref={field.ref}
                          onChange={(event) => {
                            const digits = getPhoneDigits(
                              event.target.value,
                            ).slice(0, 11);
                            field.onChange(
                              digits === "" ? undefined : Number(digits),
                            );
                          }}
                        />
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                          <PhoneIcon className="size-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      Icon={
                        <RiMailLine className="size-4 text-muted-foreground" />
                      }
                      field={field}
                      label="Email"
                      placeholder="Email"
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="typeOfPerson"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor={field.name}
                    className="flex items-center gap-1"
                  >
                    Tipo de Pessoa <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                    >
                      <SelectTrigger
                        id={field.name}
                        className="h-11 rounded-lg"
                      >
                        <SelectValue placeholder="Tipo de pessoa" />
                      </SelectTrigger>
                      <SelectContent className="[&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
                        <SelectItem value="fisica">Pessoa física</SelectItem>
                        <SelectItem value="juridica">
                          Pessoa jurídica
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/50 p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <RiMapPin4Line className="size-5" aria-hidden />
            </span>
            <div>
              <h2 className="font-semibold text-lg tracking-tight">
                Localização
              </h2>
              <p className="text-muted-foreground text-sm">Estado e cidade</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      Icon={
                        <RiMapPin4Line className="size-4 text-muted-foreground" />
                      }
                      field={field}
                      label="Estado (UF)"
                      placeholder="SP"
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      Icon={
                        <RiMapPin3Line className="size-4 text-muted-foreground" />
                      }
                      field={field}
                      label="Cidade"
                      placeholder="Cidade"
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/50 p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <RiMailLine className="size-5" aria-hidden />
            </span>
            <div>
              <h2 className="font-semibold text-lg tracking-tight">
                Dados do serviço
              </h2>
              <p className="text-muted-foreground text-sm">
                Serviço desejado e detalhes
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor={field.name}
                    className="flex items-center gap-1"
                  >
                    Serviço <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                    >
                      <SelectTrigger
                        id={field.name}
                        className="h-11 rounded-lg"
                      >
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent className="[&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
                        <SelectItem value="seguro-saude">
                          Seguro saúde
                        </SelectItem>
                        <SelectItem value="seguro-vida-empresarial">
                          Seguro de vida empresarial
                        </SelectItem>
                        <SelectItem value="seguro-empresarial">
                          Seguro empresarial
                        </SelectItem>
                        <SelectItem value="seguro-garantia">
                          Seguro de garantia
                        </SelectItem>
                        <SelectItem value="seguro-responsabilidade-civil">
                          Seguro de responsabilidade civil
                        </SelectItem>
                        <SelectItem value="consorcio-de-veiculos-pesados">
                          Consórcio de veículos pesados
                        </SelectItem>
                        <SelectItem value="consorcio-de-veiculos">
                          Consórcio de veículos
                        </SelectItem>
                        <SelectItem value="consorcio-de-imoveis">
                          Consórcio de imóveis
                        </SelectItem>
                        <SelectItem value="consorcio-sustentavel">
                          Consórcio sustentável
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {(serviceValue === "seguro-saude" ||
              serviceValue === "seguro-vida-empresarial") && (
              <FormField
                control={form.control}
                name="livesQuantity"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputWithIcon
                        Icon={
                          <RiUserLine className="size-4 text-muted-foreground" />
                        }
                        field={field}
                        label="Quantidade de vidas"
                        placeholder="Quantidade de vidas"
                        type="number"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {serviceValue.includes("consorcio") && (
              <FormField
                control={form.control}
                name="aproximateValue"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputWithIcon
                        Icon={
                          <RiUserLine className="size-4 text-muted-foreground" />
                        }
                        field={field}
                        label="Valor aproximado"
                        placeholder="Valor aproximado do bem"
                        type="number"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          {serviceValue.includes("veiculos") && (
            <FormField
              control={form.control}
              name="interestBrand"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      Icon={
                        <RiUserLine className="size-4 text-muted-foreground" />
                      }
                      field={field}
                      label="Marca de interesse"
                      placeholder="Marca de interesse"
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel
                  htmlFor={field.name}
                  className="flex items-center gap-1"
                >
                  Descreva a sua solicitação
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Conte-nos como podemos ajudar..."
                    className="min-h-[120px] resize-y rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="LGPD"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start gap-3 rounded-lg border border-border/60 bg-muted/20 p-4">
                <FormControl>
                  <Checkbox
                    id="lgpd-checkbox"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-describedby="lgpd-description"
                  />
                </FormControl>
                <div
                  id="lgpd-description"
                  className="grid gap-1.5 leading-none"
                >
                  <FormLabel
                    htmlFor="lgpd-checkbox"
                    className="flex cursor-pointer flex-wrap items-center font-medium text-sm"
                  >
                    Li e aceito os{" "}
                    <a
                      href="/politica-de-privacidade"
                      className="text-primary underline underline-offset-4 hover:no-underline"
                    >
                      termos de uso
                    </a>{" "}
                    e a{" "}
                    <a
                      href="/politica-de-privacidade"
                      className="text-primary underline underline-offset-4 hover:no-underline"
                    >
                      política de privacidade
                    </a>
                    .
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-xl bg-primary py-6 font-semibold text-primary-foreground uppercase tracking-wide shadow-sm transition-[opacity,transform,box-shadow] hover:opacity-95 hover:shadow-md active:scale-[0.99] disabled:opacity-70"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "Enviar mensagem"}
        </Button>
      </form>
    </Form>
  );
}
