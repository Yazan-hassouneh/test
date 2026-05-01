export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} HK Technologies. Crafted in Ramallah.
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#products" className="hover:text-foreground transition">Products</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
          <span className="opacity-60">@hktechnologies.ps</span>
        </div>
      </div>
    </footer>
  );
}
