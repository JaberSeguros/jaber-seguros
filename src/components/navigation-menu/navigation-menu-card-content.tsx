import { cn } from "@/lib/utils";
import { MenuContentCard } from "./menu-content-card";

type NavigationMenuCardContentProps = {
  subject: "seguros" | "consorcios";
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
  subject,
  items,
}: NavigationMenuCardContentProps) {
  return (
    <div
      className={cn(
        "scrollbar-hide max-h-[550px] w-2xl overflow-y-auto rounded-2xl bg-muted-foreground/50 p-2 backdrop-blur-md",
        subject === "seguros" ? "h-fit" : "h-[80vh]",
      )}
    >
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuContentCard key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
}
