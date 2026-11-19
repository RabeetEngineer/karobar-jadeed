import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SEO, baseSchemas, breadcrumbSchema } from "@/components/seo/SEO";
import { contact } from "@/config/contact";

const trustPoints = [
  "Based in Pakistan",
  "Serving clients remotely",
  "Focus on practical business solutions",
  "Websites, automation, CRM, AI chatbots, and custom software",
  "Free consultation available",
];

export function AboutPage() {
  return (
    <main className="bg-[#f8fbff] pt-32">
      <SEO
        title="About Karobar Jadeed | Pakistan-Based Digital Solutions Company"
        description="Karobar Jadeed is a Pakistan-based digital solutions company helping local and international clients build websites, automation, AI chatbots, CRM systems, and custom software."
        canonicalPath="/about"
        jsonLd={[...baseSchemas(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]}
      />
      <section className="container-page pb-16 pt-8">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-kicker">About</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">About Karobar Jadeed</h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-600">
              Karobar Jadeed is a Pakistan-based digital solutions company helping businesses build professional websites,
              automation workflows, AI chatbots, CRM systems, and custom software. We work with local and international
              clients who want simple, practical, and scalable digital systems.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                Book Free Consultation <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="rounded-[30px] bg-white p-6 shadow-glass">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700">Founder</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">Hafiz Rabeet Ahmad</h2>
            <p className="mt-2 text-base font-bold text-slate-600">Full-Stack Developer & AI Automation Consultant</p>
            <div className="mt-6 grid gap-3">
              {trustPoints.map((point) => (
                <p key={point} className="flex gap-3 rounded-2xl bg-emerald-50 p-4 text-sm font-extrabold text-emerald-900">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
