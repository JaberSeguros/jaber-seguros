import Image from "next/image";

type ServiceIntroProps = {
  title: string;
  alt: string;
};

export function ServiceIntro({ title, alt }: ServiceIntroProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative aspect-square size-18 opacity-50 grayscale-75 sm:size-20">
        <Image
          src="/assets/logos/logo-only.png"
          alt={alt}
          width={80}
          height={80}
        />
      </div>
      <p className="rounded-full border border-primary/15 bg-primary/10 p-1.5 font-bold sm:text-lg md:text-xl lg:text-2xl">
        {title}
      </p>
    </div>
  );
}
