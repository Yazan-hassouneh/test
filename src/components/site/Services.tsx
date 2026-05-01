const services = [
  {
    title: "Mobile Applications",
    desc: "Native iOS & Android apps and cross-platform Flutter builds — production-ready, store-published.",
    icon: "📱",
  },
  {
    title: "Web & SaaS Platforms",
    desc: "Multi-tenant dashboards, role-based systems and customer-facing web apps engineered for scale.",
    icon: "🌐",
  },
  {
    title: "AI Integrations",
    desc: "Domain-tuned chatbots, retrieval-augmented assistants and AI workflows embedded into your product.",
    icon: "🤖",
  },
  {
    title: "POS & Restaurant Tech",
    desc: "Cashier, waiter and kitchen display systems with hardware POS integrations and live analytics.",
    icon: "🍽️",
  },
  {
    title: "Brand & UI/UX Design",
    desc: "Identity, design systems and interfaces that look like they were crafted by someone who cares.",
    icon: "🎨",
  },
  {
    title: "Developer Education",
    desc: "Hands-on bootcamps and corporate training that turn beginners into shippable engineers.",
    icon: "🎓",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What we do</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              A full-stack <span className="text-gradient">studio</span>, not an agency.
            </h2>
            <p className="mt-6 text-muted-foreground">
              We design, build, ship and maintain. One team, one accountability — from the first sketch to the App Store badge.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl p-6 bg-gradient-card border border-border hover:border-primary/40 transition-colors"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
