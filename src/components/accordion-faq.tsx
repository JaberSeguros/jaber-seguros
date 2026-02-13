import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

export function AccordionFAQ({
  items,
}: {
  items: { id: string; title: string; content: string }[];
}) {
  return (
    <Accordion
      className="w-full space-y-4"
      collapsible
      defaultValue={items[0].id}
      type="single"
    >
      {items.map((item) => (
        <AccordionItem
          className="rounded-md border bg-background px-4 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
          key={item.id}
          value={item.id}
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between rounded-md py-2 text-left font-semibold text-[15px] leading-6 outline-none ocus-visible:ring-0 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
              <p className="font-bold text-xl lg:text-2xl">{item.title}</p>
              <PlusIcon
                aria-hidden="true"
                className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                size={24}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className="pb-2 text-muted-foreground">
            <p className="text-base lg:text-lg">{item.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
