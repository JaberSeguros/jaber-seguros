import HeroVideo from "./components/hero-video";

export function Hero() {
  return (
    <div className="flex h-screen min-h-[400px] w-full items-center justify-center bg-zinc-50 font-sans">
      <main className="flex h-full w-full bg-white pt-2 sm:items-start">
        <HeroVideo>
          <div
            className="hero-content"
            style={{ position: "relative", zIndex: 2 }}
          >
            abc
          </div>
        </HeroVideo>
      </main>
    </div>
  );
}
