import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/shared/ContactForm";
import { GbpMapEmbed } from "@/components/shared/GbpMapEmbed";
import { SEO, baseSchemas, breadcrumbSchema } from "@/components/seo/SEO";
import { contact } from "@/config/contact";

export function ContactPage() {
  return (
    <main className="bg-[#f8fbff] pt-32">
      <SEO
        title="Contact Karobar Jadeed | Book a Free Consultation"
        description="Contact Karobar Jadeed for website development, AI automation, chatbot, CRM, and custom software services in Pakistan and worldwide."
        canonicalPath="/contact"
        jsonLd={[
          ...baseSchemas(),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            telephone: contact.phoneSchema,
            email: contact.email,
            contactType: "customer support",
            areaServed: ["Pakistan", "Worldwide"],
            availableLanguage: ["English", "Urdu"],
          },
        ]}
      />
      <section className="container-page pb-16 pt-8">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">Contact</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">Book a Free Consultation</h1>
            <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">
              Karobar Jadeed provides remote website development, AI automation, chatbot, CRM, and software services for
              clients in Pakistan and worldwide.
            </p>
            <div className="mt-8 grid gap-4 text-sm font-bold text-slate-700">
              <a href={contact.phoneHref} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm hover:text-emerald-700">
                <Phone className="h-5 w-5 text-emerald-600" /> {contact.phoneDisplay}
              </a>
              <a href={contact.emailHref} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm hover:text-emerald-700">
                <Mail className="h-5 w-5 text-emerald-600" /> {contact.email}
              </a>
              <p className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <MapPin className="h-5 w-5 text-emerald-600" /> {contact.location}
              </p>
            </div>
            <Button asChild size="lg" className="mt-6">
              <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </Button>
          </div>
          <ContactForm />
        </div>
        <div className="mt-10">
          <GbpMapEmbed className="h-72 w-full sm:h-80" />
        </div>
      </section>
    </main>
  );
}
