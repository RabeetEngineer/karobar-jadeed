import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { industries } from "@/data/industries";

export function Industries() {
  const homepageIndustries = industries.slice(0, 6);

  return (
    <Section id="industries" className="bg-[#f7fbff]">
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker">Industries</p>
        <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Industry-Specific Solutions for Modern Businesses
        </h2>
        <p className="mt-4 text-base font-medium leading-7 text-slate-600">
          We design practical digital systems around the way your customers ask questions, book appointments, request
          quotes, place orders, and follow up.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {homepageIndustries.map((industry) => (
          <Link
            key={industry.slug}
            to={`/industries/${industry.slug}`}
            className="group rounded-[26px] border border-white/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glass"
          >
            <div className={`mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r ${industry.accent}`} />
            <h3 className="text-xl font-extrabold text-slate-900">{industry.title}</h3>
            <div className="mt-5 grid gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">Problem</p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{industry.problem}</p>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700">Solution</p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{industry.solution}</p>
              </div>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-emerald-700">
              View Solution <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Button asChild variant="secondary">
          <Link to="/industries">
            View All Industries <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
