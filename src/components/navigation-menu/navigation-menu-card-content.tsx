/** biome-ignore-all lint/a11y/useSemanticElements: <because it's a section> */
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
    href: string;
  }[];
};

const subjectLabels = {
  seguros: "Opções de seguros",
  consorcios: "Opções de consórcios",
} as const;

export function NavigationMenuCardContent({
  subject,
  items,
}: NavigationMenuCardContentProps) {
  return (
    <section
      className={cn(
        "scrollbar-hide max-h-[550px] w-2xl overflow-y-auto rounded-2xl bg-muted-foreground/50 p-2 backdrop-blur-md",
        subject === "seguros" ? "h-fit" : "h-[80vh]",
      )}
      aria-label={subjectLabels[subject]}
    >
      <div className="grid grid-cols-2 gap-4" role="list">
        {items.map((item) => (
          <MenuContentCard key={item.id} content={item} />
        ))}
      </div>
    </section>
  );
}
