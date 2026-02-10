import CTAWithVerticalMarquee, { VerticalMarquee } from "@/components/ui/cta-with-text-marquee";
import { LogoCloudDemo } from "@/components/ui/logo-cloud-demo";
import { AboutUs } from "./(sections)/about-us/about-us";
import { Hero } from "./(sections)/hero/hero";
import { JaberEssence } from "./(sections)/jaber-essence/jaber-essence";
import { Message } from "./(sections)/message/message";
import { ServicesOptions } from "./(sections)/services-options/services-options";
import { Vision } from "./(sections)/vision/vision";

const marqueeItems = [
  "Seguro Saúde",
  "Seguro Vida Empresarial",
  "Seguro Empresarial",
  "Seguro Garantia",
  "Seguro Responsabilidade Civil",
  "Consórcio Veículos Pesados",
  "Consórcio Veículos",
  "Consórcio Imóvel",
  "Consórcio Sustentável",
];

export default function Home() {
  return (
    <div className="h-fit w-full space-y-20 overflow-hidden md:space-y-32 lg:space-y-40">
      <Hero />
      <AboutUs />
      <div className="w-full min-w-0 overflow-x-hidden bg-border py-20">
        <LogoCloudDemo />
      </div>
      <ServicesOptions />
      <JaberEssence />
      <Message />
      <Vision />
      <CTAWithVerticalMarquee />
    </div>
  );
}
