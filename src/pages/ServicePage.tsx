import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/shared/ContactForm";
import { SEO, baseSchemas, breadcrumbSchema, faqSchema } from "@/components/seo/SEO";
import { contact } from "@/config/contact";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

export function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const relatedServices = services.filter((item) => service.relatedServices.includes(item.slug));
  const relatedIndustries = industries.filter((item) => service.relatedIndustries.includes(item.slug));

  return (
    <main className="bg-[#f8fbff] pt-32">
      <SEO
        title={service.seoTitle}
        description={service.metaDescription}
        canonicalPath={`/services/${service.slug}`}
        jsonLd={[
          ...baseSchemas(),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.title, path: `/services/${service.slug}` }]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            provider: { "@type": "Organization", name: "Karobar Jadeed", url: contact.siteUrl },
            areaServed: ["Pakistan", "Worldwide"],
            description: service.metaDescription,
            serviceType: service.title,
          },
          faqSchema(service.faqs),
        ]}
      />

      <section className="container-page pb-16 pt-8">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title, href: `/services/${service.slug}` }]} />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-kicker">Service</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">{service.title}</h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-600">{service.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                  Book Free Consultation <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-[30px] bg-white p-6 shadow-glass">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700">Who it is for</p>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-700">{service.whoFor}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.benefits.slice(0, 4).map((benefit) => (
                <div key={benefit} className="rounded-2xl bg-emerald-50 p-4 text-sm font-extrabold text-emerald-900">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-slate-900">Features</h2>
            <ul className="mt-6 grid gap-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-3 rounded-2xl border border-slate-100 p-4 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold text-slate-900">Benefits</h2>
            <ul className="mt-6 grid gap-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 rounded-2xl border border-slate-100 p-4 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="font-display text-3xl font-extrabold text-slate-900">Our Process</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {service.process.map((step, index) => (
            <div key={step} className="rounded-[24px] bg-white p-5 shadow-sm">
              <span className="text-3xl font-extrabold text-emerald-600">{index + 1}</span>
              <p className="mt-4 text-sm font-extrabold leading-6 text-slate-900">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-slate-900">FAQs</h2>
            <div className="mt-6 grid gap-4">
              {service.faqs.map((faq) => (
                <article key={faq.question} className="rounded-[24px] border border-slate-100 p-5">
                  <h3 className="font-extrabold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-slate-900">Related Services</h2>
            <div className="mt-5 grid gap-3">
              {relatedServices.map((item) => (
                <Link key={item.slug} to={`/services/${item.slug}`} className="rounded-2xl bg-white p-4 text-sm font-extrabold text-slate-800 shadow-sm hover:text-emerald-700">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-slate-900">Related Industries</h2>
            <div className="mt-5 grid gap-3">
              {relatedIndustries.map((item) => (
                <Link key={item.slug} to={`/industries/${item.slug}`} className="rounded-2xl bg-white p-4 text-sm font-extrabold text-slate-800 shadow-sm hover:text-emerald-700">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
