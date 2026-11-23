import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Services } from "@/components/sections/Services";
import { SEO, baseSchemas, breadcrumbSchema, faqSchema } from "@/components/seo/SEO";
import { FloatingWhatsApp } from "@/components/shared/FloatingWhatsApp";

const AboutPage = lazy(() => import("@/pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const BlogPage = lazy(() => import("@/pages/BlogPage").then((m) => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import("@/pages/BlogPostPage").then((m) => ({ default: m.BlogPostPage })));
const ContactPage = lazy(() => import("@/pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const IndustriesIndexPage = lazy(() =>
  import("@/pages/IndustriesIndexPage").then((m) => ({ default: m.IndustriesIndexPage })),
);
const IndustryPage = lazy(() => import("@/pages/IndustryPage").then((m) => ({ default: m.IndustryPage })));
const LegalPage = lazy(() => import("@/pages/LegalPage").then((m) => ({ default: m.LegalPage })));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage").then((m) => ({ default: m.PortfolioPage })));
const ServicePage = lazy(() => import("@/pages/ServicePage").then((m) => ({ default: m.ServicePage })));
const ServicesIndexPage = lazy(() =>
  import("@/pages/ServicesIndexPage").then((m) => ({ default: m.ServicesIndexPage })),
);

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
        title="Karobar Jadeed | Websites, AI Automation & Custom Software"
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

function PageFallback() {
  return <div className="min-h-[60vh] bg-[#f8fbff]" aria-hidden="true" />;
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
      <Suspense fallback={<PageFallback />}>
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
