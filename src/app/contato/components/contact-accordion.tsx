import { AccordionFAQ } from "@/components/accordion-faq";

export default function ContactAccordion({
  items,
}: {
  items: { id: string; title: string; content: string }[];
}) {
  return <AccordionFAQ items={items} />;
}
