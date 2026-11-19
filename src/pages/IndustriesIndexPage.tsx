import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SEO, baseSchemas, breadcrumbSchema } from "@/components/seo/SEO";
import { industries } from "@/data/industries";

export function IndustriesIndexPage() {
  return (
    <main className="bg-[#f8fbff] pt-32">
      <SEO
        title="Industries | Business Systems for Clinics, Schools, Restaurants & More"
        description="Explore industry-specific digital solutions from Karobar Jadeed for clinics, schools, restaurants, travel agencies, real estate, ecommerce, salons, gyms, and small businesses."
        canonicalPath="/industries"
        jsonLd={[...baseSchemas(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])]}
      />
      <section className="container-page pb-16 pt-8">
        <Breadcrumbs items={[{ label: "Industries", href: "/industries" }]} />
        <div className="max-w-3xl">
          <p className="section-kicker">Industries</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Industry-specific systems that make the work easy to understand.
          </h1>
          <p className="mt-5 text-lg font-medium leading-8 text-slate-600">
            Each page explains the problem, solution, workflow, recommended services, and how a digital setup helps that
            business type.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <Link key={industry.slug} to={`/industries/${industry.slug}`} className="group overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-glass">
              <div className="relative h-44">
                <img src={industry.image} alt={`${industry.title} solution preview`} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 to-transparent" />
                <h2 className="absolute bottom-4 left-4 right-4 text-xl font-extrabold text-white">{industry.title}</h2>
              </div>
              <div className="p-5">
                <p className="text-sm font-medium leading-6 text-slate-600">{industry.solution}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-emerald-700">
                  View full flow <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
