const quotes = [
  {
    quote:
      "The course was extremely useful — by the end we became fully capable in web development. Engineer Amir is exceptionally skilled, truly deserves the title 'engineer', and works tirelessly with us. Many thanks.",
    author: "Course Student",
    role: "Web Development Bootcamp",
  },
  {
    quote:
      "Honestly — if I saw any flaw in Amir, I'd say it about myself. The explanations are clear, the teaching style is professional. Online courses are harder than in-person, and you can really tell who's in command of the material. He is.",
    author: "Bootcamp Graduate",
    role: "Mobile Development Track",
  },
  {
    quote:
      "Over 100 downloads and subscriptions in the first 24 hours of launch. Thank you for trusting us.",
    author: "Al Mohami launch",
    role: "Day 1 metric",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Voices</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What people <span className="text-gradient">say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="rounded-3xl bg-gradient-card border border-border p-8 shadow-card flex flex-col"
            >
              <div className="text-5xl text-primary/40 leading-none font-serif">"</div>
              <blockquote className="mt-2 text-foreground/90 leading-relaxed flex-1">
                {q.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-medium">{q.author}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  {q.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
