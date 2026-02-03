import Image from "next/image";
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
  };
};

export function MenuContentCard({ content }: MenuContentCardProps) {
  return (
    <Card
      key={content.id}
      className="w-full max-w-[370px] md:max-w-xs lg:bg-muted-foreground/20"
    >
      <CardHeader>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={content.image}
            alt={content.type}
            fill
            className="size-full object-cover object-center"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full space-y-1">
          <h3 className="font-bold text-lg">{content.type}</h3>
          <p className="font-semibold">{content.headline}</p>
          <p className="text-foreground/70 text-sm">{content.sub}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full rounded-full py-6">{content.cta}</Button>
      </CardFooter>
    </Card>
  );
}
