import { LogoCloudDemo } from "@/components/ui/logo-cloud-demo";
import { AboutUs } from "./(sections)/about-us/about-us";
import { Hero } from "./(sections)/hero/hero";

export default function Home() {
  return (
    <div className="w-full min-w-0 space-y-20 overflow-x-hidden">
      <Hero />
      {/* <div className="w-full min-w-0 overflow-x-hidden">
        <LogoCloudDemo />
      </div> */}
      <AboutUs />
    </div>
  );
}
