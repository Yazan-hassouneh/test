import logo from "@/assets/hk-logo.jpg";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] bg-gradient-card border border-border p-10 md:p-16 shadow-elegant overflow-hidden relative">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <div className="grid lg:grid-cols-12 gap-12 items-center relative">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Let's build</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Have an idea?<br />
                <span className="text-gradient">Let's ship it.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg max-w-lg">
                Tell us about your product, your timeline, or just say hi. We answer every message personally.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:info@hktechnologie.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:translate-y-[-2px] transition-transform"
                >
                  ✉ info@hktechnologie.com
                </a>
                <a
                  href="tel:+970593223693"
                  className="inline-flex items-center gap-2 rounded-xl border border-border glass px-6 py-3.5 text-sm font-medium hover:bg-secondary/60 transition"
                >
                  ☏ +970 593 223 693
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl glass p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-xl overflow-hidden bg-background ring-1 ring-border">
                    <img src={logo} alt="HK" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <div className="font-semibold">HK Technologies</div>
                    <div className="text-xs text-muted-foreground">Ramallah · Palestine</div>
                  </div>
                </div>
                <dl className="space-y-4 text-sm">
                  <div className="flex justify-between gap-4 pt-4 border-t border-border">
                    <dt className="text-muted-foreground">Office</dt>
                    <dd>Al Irsal St, Ramallah</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Email</dt>
                    <dd>info@hktechnologie.com</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Phone</dt>
                    <dd>+970 593 223 693</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Web</dt>
                    <dd>hktechnologie.com</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Founded</dt>
                    <dd>2025</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
