import { AboutUs } from "./(sections)/about-us/about-us";
import { Hero } from "./(sections)/hero/hero";

export default function Home() {
  return (
    <div className="w-full space-y-20">
      <Hero />
      <AboutUs />
    </div>
  );
}
