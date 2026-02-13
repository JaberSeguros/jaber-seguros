/** biome-ignore-all lint/a11y/useSemanticElements: <because it's a card> */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMenu } from "@/contexts/menu-context";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

type MenuContentCardProps = {
  content: {
    id: number;
    type: string;
    image: string;
    headline: string;
    sub: string;
    cta: string;
    href: string;
  };
};

export function MenuContentCard({ content }: MenuContentCardProps) {
  const router = useRouter();
  const { setIsMenuOpen } = useMenu();
  return (
    <Card
      key={content.id}
      className="flex w-full max-w-[370px] flex-col lg:w-xs"
      role="article"
      aria-labelledby={`card-title-${content.id}`}
    >
      <CardHeader>
        <div className="relative aspect-video w-full overflow-hidden rounded-sm">
          <Image
            src={content.image}
            alt={`${content.type} - ${content.headline}. ${content.sub}`}
            fill
            className="size-full object-cover object-center"
            sizes="(max-width: 768px) 100vw, 370px"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full space-y-1">
          <h3 id={`card-title-${content.id}`} className="font-bold text-lg">
            {content.type}
          </h3>
          <p className="font-semibold text-foreground/90">{content.headline}</p>
          <p className="text-muted-foreground text-sm">{content.sub}</p>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          className="w-full rounded-full py-6"
          onClick={() => {
            setIsMenuOpen(false);
            router.push(content.href);
          }}
          asChild
        >
          <Link href={content.href}>{content.cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
