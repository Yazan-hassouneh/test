import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/hk-tech-hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[800px] bg-gradient-glow blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-wider uppercase text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
            Palestinian software studio · Est. 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            We engineer{" "}
            <span className="text-gradient">products</span>
            <br />
            that move industries.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            From AI-powered legal tools to restaurant platforms and developer education —
            HK Technologies builds modern web and mobile experiences from Ramallah to the world.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:translate-y-[-2px] transition-transform"
            >
              Explore our work →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border glass px-6 py-3.5 text-sm font-medium hover:bg-secondary/60 transition"
            >
              Start a project
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { k: "100+", v: "Downloads in 24h" },
              { k: "4", v: "Live products" },
              { k: "2025", v: "Founded" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-3xl md:text-4xl font-bold text-gradient">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square max-w-md mx-auto animate-float">
            <div className="absolute inset-0 bg-gradient-brand opacity-30 blur-3xl rounded-full" />
            <img
              src={logo}
              alt="HK Technologies neon hologram"
              className="relative rounded-3xl shadow-elegant ring-1 ring-border w-full h-full object-cover"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
