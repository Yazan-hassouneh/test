/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
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
          </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
