export function Hero() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full bg-white sm:items-start">
        <div className="relative h-screen w-full brightness-80">
          <video
            src="/assets/hero-12s-24fps-1000k-1280.mp4"
            playsInline
            autoPlay
            muted
            loop
            className="-translate-x-1/2 absolute top-2 left-1/2 h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] rounded-4xl object-cover"
          />
        </div>
      </main>
    </div>
  );
}
