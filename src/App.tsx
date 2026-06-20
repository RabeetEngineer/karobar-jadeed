import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTA } from "@/components/sections/CTA";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { IndustryPage } from "@/pages/IndustryPage";
import { Route, Routes } from "react-router-dom";

function LandingPage() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/industries/:slug" element={<IndustryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
