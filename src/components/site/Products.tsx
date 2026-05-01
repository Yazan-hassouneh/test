import mohami from "@/assets/al-mohami.jpg";
import jimBlue from "@/assets/jim-blue.jpg";
import aleppo from "@/assets/aleppo.jpg";
import course from "@/assets/course.jpg";

type Product = {
  name: string;
  tag: string;
  desc: string;
  features: string[];
  href: string;
  cta: string;
  image: string;
  accent: string;
};

const products: Product[] = [
  {
    name: "Al Mohami · المحامي",
    tag: "Legal · AI",
    desc: "A smart agenda for lawyers — case management, hearing reminders and an AI chatbot trained for legal workflows. Crossed 100+ subscriptions in the first 24 hours.",
    features: ["AI legal chatbot", "Smart case agenda", "Hearing reminders", "iOS · Android"],
    href: "https://apps.apple.com/il/app/al-mohami/id6752120788",
    cta: "View on App Store",
    image: mohami,
    accent: "from-amber-500/20 to-amber-700/10",
  },
  {
    name: "Jim Blue",
    tag: "Restaurant · SaaS",
    desc: "Multi-role restaurant management platform with waiter & cashier accounts, POS integration, kitchen display and per-branch analytics.",
    features: ["Waiter & cashier roles", "POS integration", "Live analytics", "Multi-branch"],
    href: "https://staging.menu-hk.com/",
    cta: "Visit platform",
    image: jimBlue,
    accent: "from-primary/30 to-accent/10",
  },
  {
    name: "Aleppo Restaurant",
    tag: "Web · Hospitality",
    desc: "A warm, story-driven website for the local Aleppo restaurant-café — menu, reservations and brand identity online.",
    features: ["Brand identity", "Menu system", "Responsive web", "SEO optimized"],
    href: "https://aleppo.ps",
    cta: "Visit website",
    image: aleppo,
    accent: "from-orange-500/20 to-rose-700/10",
  },
  {
    name: "Mobile Dev Bootcamp",
    tag: "Education",
    desc: "From-zero-to-pro mobile development course covering Android & iOS. Hands-on, interactive sessions led by HK engineers.",
    features: ["Android & iOS", "Live sessions", "Project-based", "Mentorship"],
    href: "#contact",
    cta: "Join the next cohort",
    image: course,
    accent: "from-accent/30 to-primary/10",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Work</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Products shaping <span className="text-gradient">real industries</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Every project we ship solves a real operational problem — for lawyers, restaurants, and the next generation of developers.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-3xl bg-gradient-card border border-border shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.accent} mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.25em] glass px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs px-3 py-1 rounded-full bg-secondary/60 border border-border text-muted-foreground"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  {p.cta} <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
