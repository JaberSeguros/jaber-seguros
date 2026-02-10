import { LogoCloudDemo } from "@/components/ui/logo-cloud-demo";
import { AboutUs } from "./(sections)/about-us/about-us";
import { Hero } from "./(sections)/hero/hero";
import { JaberEssence } from "./(sections)/jaber-essence/jaber-essence";
import { Message } from "./(sections)/message/message";
import { ServicesOptions } from "./(sections)/services-options/services-options";
import { Vision } from "./(sections)/vision/vision";

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
    </div>
  );
}
