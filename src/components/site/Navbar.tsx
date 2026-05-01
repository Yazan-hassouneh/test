import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/hk-logo.jpg";

const links = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 ${scrolled ? "" : ""}`}>
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-card" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl overflow-hidden bg-background ring-1 ring-border">
              <img src={logo} alt="HK Technologies" className="h-full w-full object-contain" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">HK Technologies</div>
              <div className="text-[10px] text-muted-foreground tracking-widest uppercase">Build · Ship · Scale</div>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Start a project
            <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
