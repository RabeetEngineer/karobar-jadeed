import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { services } from "@/data/services";

const colors = [
  "text-emerald-600 bg-emerald-50",
  "text-blue-600 bg-blue-50",
  "text-violet-600 bg-violet-50",
  "text-emerald-700 bg-emerald-50",
  "text-orange-600 bg-orange-50",
  "text-cyan-600 bg-cyan-50",
  "text-slate-700 bg-slate-100",
  "text-teal-700 bg-teal-50",
];

export function Services() {
  const homepageServices = services.slice(0, 6);

  return (
    <Section id="services" className="bg-white">
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker">What We Do</p>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Digital Solutions Built to Grow Your Business
        </h2>
        <p className="mt-4 text-base font-medium leading-7 text-slate-600">
          We create websites, automation systems, AI chatbots, CRM workflows, and custom software that help businesses
          capture leads, reply faster, manage customers, and grow with confidence.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {homepageServices.map((service, index) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="group flex flex-col rounded-[26px] border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-glass"
            aria-label={`View ${service.title} service`}
          >
            <span className={`grid h-12 w-12 place-items-center rounded-2xl ${colors[index]}`}>
              <service.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-extrabold leading-6 text-slate-900">{service.title}</h3>
            <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{service.description}</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-extrabold text-emerald-700">
              View service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Button asChild variant="secondary">
          <Link to="/services">
            View All Services <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
