export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About HK Technologies</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Built in <span className="text-gradient">Ramallah</span>.<br />
            Engineered for the world.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            HK Technologies is a young Palestinian software studio founded in 2025. We've already
            shipped a published legal AI app, a multi-tenant restaurant SaaS, hospitality websites,
            and trained the next wave of mobile developers — all from our office on Al Irsal St.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our promise is simple: every product we touch should look like it was made by a
            team that genuinely cares about the craft.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              ["2025", "Founded"],
              ["4+", "Products"],
              ["100+", "Day-one users"],
              ["1", "Mission"],
            ].map(([k, v]) => (
              <div key={v} className="border-l-2 border-primary/60 pl-4">
                <div className="text-2xl font-bold">{k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-gradient-card border border-border p-10 shadow-elegant">
            <div className="absolute -top-px left-10 right-10 h-px bg-gradient-brand" />
            <h3 className="text-xl font-semibold mb-6">How we work</h3>
            <ol className="space-y-6">
              {[
                ["01", "Discover", "We sit down with you to map the actual problem — not just the feature list."],
                ["02", "Design", "Wireframes, design systems, and prototypes you can click through before a line of code."],
                ["03", "Build", "Modern stacks: React, TanStack, Flutter, Node, Postgres, AI gateways."],
                ["04", "Ship & support", "We launch, monitor, and iterate. We're around long after release day."],
              ].map(([n, t, d]) => (
                <li key={n} className="flex gap-5">
                  <span className="text-gradient font-bold text-lg shrink-0 w-10">{n}</span>
                  <div>
                    <div className="font-medium">{t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
