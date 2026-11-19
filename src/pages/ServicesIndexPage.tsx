import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SEO, baseSchemas, breadcrumbSchema } from "@/components/seo/SEO";
import { services } from "@/data/services";

export function ServicesIndexPage() {
  return (
    <main className="bg-[#f8fbff] pt-32">
      <SEO
        title="Services | Website Development, AI Automation, CRM & Software"
        description="Explore Karobar Jadeed services including website development, AI chatbots, WhatsApp automation, CRM, SaaS, ecommerce, SEO, and custom software."
        canonicalPath="/services"
        jsonLd={[...baseSchemas(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])]}
      />
      <section className="container-page pb-16 pt-8">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
        <div className="max-w-3xl">
          <p className="section-kicker">Services</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Digital services built around leads, automation, and business growth.
          </h1>
          <p className="mt-5 text-lg font-medium leading-8 text-slate-600">
            Choose the service you need, or book a consultation and we will recommend the right website, chatbot, CRM,
            automation, or software setup.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`} className="group rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glass">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                <service.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl font-extrabold text-slate-900">{service.title}</h2>
              <p className="mt-3 line-clamp-3 text-sm font-medium leading-6 text-slate-600">{service.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-emerald-700">
                Open service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
