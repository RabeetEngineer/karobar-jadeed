import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SEO, baseSchemas, breadcrumbSchema } from "@/components/seo/SEO";
import { contact } from "@/config/contact";
import { ProjectVisual, portfolioItems } from "@/components/sections/FeaturedProjects";

export function PortfolioPage() {
  return (
    <main className="bg-[#f8fbff] pt-32">
      <SEO
        title="Portfolio | Websites, CRM, Automation & Software Examples"
        description="Explore practical project formats from Karobar Jadeed, including clinic lead systems, restaurant WhatsApp ordering, school admission workflows, real estate CRM, ecommerce, and dashboards."
        canonicalPath="/portfolio"
        jsonLd={[...baseSchemas(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }])]}
      />
      <section className="container-page pb-16 pt-8">
        <Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }]} />
        <div className="max-w-3xl">
          <p className="section-kicker">Portfolio</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">Portfolio & Work Examples</h1>
          <p className="mt-5 text-lg font-medium leading-8 text-slate-600">
            These visual examples show what was built, how the customer flow works, and why the system is useful for a
            real business.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item) => (
            <article key={item.title} className="rounded-[26px] border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-glass">
              <ProjectVisual item={item} />
              <h2 className="mt-5 text-xl font-extrabold text-slate-900">{item.title}</h2>
              <p className="mt-4 text-sm font-medium leading-6 text-slate-600"><strong>Challenge:</strong> {item.challenge}</p>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-600"><strong>Solution:</strong> {item.solution}</p>
              <ul className="mt-5 grid gap-2">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm font-extrabold leading-6 text-emerald-900">Result: {item.result}</p>
            </article>
          ))}
        </div>
        <Button asChild size="lg" className="mt-10">
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            Discuss Your Project <ArrowRight className="h-5 w-5" />
          </a>
        </Button>
      </section>
    </main>
  );
}
