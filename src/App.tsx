import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Services } from "@/components/sections/Services";
import { FloatingWhatsApp } from "@/components/shared/FloatingWhatsApp";
import { SEO, baseSchemas, breadcrumbSchema, faqSchema } from "@/components/seo/SEO";
import { AboutPage } from "@/pages/AboutPage";
import { BlogPage } from "@/pages/BlogPage";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { ContactPage } from "@/pages/ContactPage";
import { IndustryPage } from "@/pages/IndustryPage";
import { LegalPage } from "@/pages/LegalPage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { ServicePage } from "@/pages/ServicePage";
import { ServicesIndexPage } from "@/pages/ServicesIndexPage";
import { IndustriesIndexPage } from "@/pages/IndustriesIndexPage";
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const homeFaqs = [
  {
    question: "Do you work with international clients?",
    answer: "Yes. Karobar Jadeed works remotely with clients in Pakistan and worldwide.",
  },
  {
    question: "Can you build websites, AI chatbots, CRM, and automation together?",
    answer: "Yes. We can build a connected setup so website inquiries, WhatsApp, CRM, and follow-ups work together.",
  },
];

function LandingPage() {
  return (
    <main>
      <SEO
        title="Website Development, AI Automation & Custom Software Solutions | Karobar Jadeed"
        description="Karobar Jadeed helps businesses in Pakistan and worldwide build professional websites, AI chatbots, WhatsApp automation, CRM systems, and custom software that generate leads."
        canonicalPath="/"
        jsonLd={[
          ...baseSchemas(),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(homeFaqs),
        ]}
      />
      <Hero />
      <Services />
      <Industries />
      <FeaturedProjects />
      <FAQ />
      <CTA />
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesIndexPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/industries" element={<IndustriesIndexPage />} />
        <Route path="/industries/:slug" element={<IndustryPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
        <Route path="/terms-conditions" element={<LegalPage type="terms" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
