import { LogoCloudDemo } from "@/components/ui/logo-cloud-demo";
import { AboutUs } from "./(sections)/about-us/about-us";
import { Hero } from "./(sections)/hero/hero";
import { Services } from "./(sections)/services/servicos";

export default function Home() {
  return (
    <div className="w-full min-w-0 space-y-20 overflow-x-hidden md:space-y-32 lg:space-y-40">
      <Hero />
      {/* <div className="w-full min-w-0 overflow-x-hidden">
        <LogoCloudDemo />
      </div> */}
      <AboutUs />
      <Services />
    </div>
  );
}
