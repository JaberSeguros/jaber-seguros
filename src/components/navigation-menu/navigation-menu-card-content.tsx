import { Button } from "../ui/button";
import { MenuContentCard } from "./menu-content-card";

type NavigationMenuCardContentProps = {
  title: string;
  description: string;
  cta: string;
  items: {
    id: number;
    type: string;
    image: string;
    headline: string;
    sub: string;
    cta: string;
  }[];
};

export function NavigationMenuCardContent({
  title,
  description,
  cta,
  items,
}: NavigationMenuCardContentProps) {
  return (
    <div className="flex h-[75vh] max-h-[680px] w-[90vw] max-w-5xl items-start justify-center gap-6 px-6 py-6 lg:px-12">
      <div className="flex h-fit w-full max-w-md flex-col gap-6 rounded-2xl bg-popover p-6">
        <div className="space-y-4">
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="text-foreground">{description}</p>
        </div>
        <Button className="rounded-full py-6 font-bold text-base">{cta}</Button>
      </div>
      <div className="scrollbar-hide flex h-[72vh] max-h-[680px] w-fit min-w-xs flex-col gap-4 overflow-y-auto rounded-2xl bg-popover p-2">
        {items.map((item) => (
          <MenuContentCard key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
}
