import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "HK Technologies — Palestinian Software Studio | Apps, SaaS & AI" },
      {
        name: "description",
        content:
          "HK Technologies is a Ramallah-based software studio building mobile apps, SaaS platforms and AI tools. Creators of Al Mohami legal AI, Jim Blue restaurant SaaS, and developer bootcamps.",
      },
      { property: "og:title", content: "HK Technologies — Palestinian Software Studio" },
      {
        property: "og:description",
        content:
          "Mobile apps, SaaS platforms and AI products engineered in Ramallah. Al Mohami · Jim Blue · Aleppo · Bootcamps.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
