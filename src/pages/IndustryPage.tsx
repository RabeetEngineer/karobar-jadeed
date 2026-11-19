import { ArrowRight, CalendarCheck, CheckCircle2, LayoutDashboard, MessageCircle, MonitorSmartphone, UsersRound } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/shared/ContactForm";
import { SEO, baseSchemas, breadcrumbSchema, faqSchema } from "@/components/seo/SEO";
import { contact } from "@/config/contact";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

function IndustrySystemVisual({ industry }: { industry: (typeof industries)[number] }) {
  const flow = [
    { label: "Website", icon: MonitorSmartphone },
    { label: "WhatsApp", icon: MessageCircle },
    { label: "CRM", icon: UsersRound },
    { label: "Booking", icon: CalendarCheck },
    { label: "Report", icon: LayoutDashboard },
  ];

  return (
    <div className="relative overflow-hidden rounded-[30px] bg-slate-950 p-4 text-white shadow-lift">
      <img src={industry.image} alt={`${industry.title} business workflow`} className="absolute inset-0 h-full w-full object-cover opacity-25" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/88 to-emerald-950/80" />
      <div className="relative z-10 rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-200">Interactive system preview</p>
            <h2 className="mt-2 text-2xl font-extrabold">{industry.title}</h2>
          </div>
          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-extrabold text-emerald-200 ring-1 ring-emerald-300/20">
            {industry.result}
          </span>
        </div>
        <div className="mt-6 grid gap-3">
          {flow.map((item, index) => (
            <div key={item.label} className="group grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl bg-white p-3 text-slate-900 transition hover:-translate-y-0.5 hover:bg-emerald-50">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-extrabold">{item.label}</p>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <div className={`h-full rounded-full bg-gradient-to-r ${industry.accent}`} style={{ width: `${42 + index * 11}%` }} />
                </div>
              </div>
              <span className="text-xs font-extrabold text-slate-400">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function IndustryPage() {
  const { slug } = useParams();
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) return <Navigate to="/industries" replace />;

  const recommended = services.filter((service) => industry.recommendedServices.includes(service.slug));

  return (
    <main className="bg-[#f8fbff] pt-32">
      <SEO
        title={industry.seoTitle}
        description={industry.seoDescription}
        canonicalPath={`/industries/${industry.slug}`}
        image={industry.image}
        jsonLd={[
          ...baseSchemas(),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }, { name: industry.title, path: `/industries/${industry.slug}` }]),
          faqSchema(industry.faqs),
        ]}
      />

      <section className="container-page pb-16 pt-8 sm:pb-20">
        <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: industry.title, href: `/industries/${industry.slug}` }]} />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Industry Solution</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">{industry.seoTitle.replace(" | Karobar Jadeed", "")}</h1>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600">{industry.detail}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {industry.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-slate-800 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            <Button asChild size="lg" className="mt-8">
              <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                {industry.cta} <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <IndustrySystemVisual industry={industry} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <article className="rounded-[26px] border border-slate-100 p-6 shadow-sm">
            <h2 className="font-display text-3xl font-extrabold text-slate-900">Industry Problem</h2>
            <p className="mt-4 text-base font-medium leading-7 text-slate-600">{industry.problem}</p>
          </article>
          <article className="rounded-[26px] border border-slate-100 p-6 shadow-sm">
            <h2 className="font-display text-3xl font-extrabold text-slate-900">Digital Solution</h2>
            <p className="mt-4 text-base font-medium leading-7 text-slate-600">{industry.solution}</p>
          </article>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-slate-900">Features</h2>
            <ul className="mt-6 grid gap-3">
              {industry.features.map((feature) => (
                <li key={feature} className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-bold text-slate-700 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold text-slate-900">Example Workflow</h2>
            <div className="mt-6 grid gap-3">
              {industry.exampleWorkflow.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-50 text-sm font-extrabold text-emerald-700">
                    {index + 1}
                  </span>
                  <p className="text-sm font-bold text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-slate-900">Recommended Services</h2>
            <div className="mt-6 grid gap-3">
              {recommended.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="rounded-2xl border border-slate-100 p-4 text-sm font-extrabold text-slate-800 hover:text-emerald-700">
                  {service.title}
                </Link>
              ))}
            </div>
            <div className="mt-8 grid gap-4">
              {industry.faqs.map((faq) => (
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
    </main>
  );
}
