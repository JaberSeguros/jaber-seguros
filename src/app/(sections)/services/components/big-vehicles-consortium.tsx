import Image from "next/image";

export function BigVehiclesConsortium() {
  return (
    <section className="min-h-screen w-full">
      <div className="flex w-full flex-col gap-10 lg:gap-15">
        <div className="flex items-center gap-2">
          <div className="relative aspect-square size-18 opacity-50 grayscale-75 sm:size-20">
            <Image
              src="/assets/logos/logo-only.png"
              alt="Consórcio para veículos pesados"
              width={80}
              height={80}
            />
          </div>
          <p className="rounded-full border border-primary/15 bg-primary/10 p-1.5 font-bold sm:text-lg md:text-xl lg:text-2xl">
            Consórcio para veículos pesados
          </p>
        </div>
        <div className="flex w-full flex-col gap-6"></div>
      </div>
    </section>
  );
}
