import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/shared/Section";
import { featuredIndustries } from "@/data/industries";

export function FeaturedProjects() {
  return (
    <Section id="industries" className="bg-[#f8fbff]">
      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">Industries & Work</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Digital systems for businesses that want to grow.
          </h2>
          <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-600">
            Visual examples of websites, automation and lead systems we can build around your workflow.
          </p>
        </div>
        <Button asChild variant="dark">
          <a href="#industry-cards">
            View Work <ArrowRight className="h-5 w-5" />
          </a>
        </Button>
      </div>

      <div id="industry-cards" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredIndustries.map((category) => (
          <Card
            key={category.title}
            className="group overflow-hidden border-white/80 bg-white shadow-glass transition hover:-translate-y-2 hover:shadow-lift"
          >
            <Link to={`/industries/${category.slug}`} className="relative block h-[360px] overflow-hidden" aria-label={`View ${category.title} details`}>
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-950/20 to-transparent" />

              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/92 px-3 py-1 text-[11px] font-extrabold text-slate-800 shadow-sm backdrop-blur">
                    {tag}
                  </span>
                ))}
              </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className={`mb-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${category.accent}`} />
                <h3 className="font-display text-2xl font-black text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">{category.title}</h3>
                <div className="mt-4 grid gap-3 rounded-2xl bg-white/92 p-4 text-slate-950 shadow-glass backdrop-blur-md ring-1 ring-white/80">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">We build</p>
                    <p className="mt-1 text-sm font-extrabold leading-5 text-slate-900">{category.built}</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-sm font-black text-emerald-800">
                    <CheckCircle2 className="h-4 w-4" />
                    {category.result}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-black text-slate-950">
                    View details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
