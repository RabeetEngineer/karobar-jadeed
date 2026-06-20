import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { contact } from "@/config/contact";
import { industries } from "@/data/industries";

export function IndustryPage() {
  const { slug } = useParams();
  const industry = industries.find((item) => item.slug === slug) ?? industries[0];

  useEffect(() => {
    document.title = `${industry.title} Digital Solutions | Karobar Jadeed`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        `${industry.title} ke liye website, automation, CRM, WhatsApp follow-ups aur lead generation systems by Karobar Jadeed.`,
      );
    window.scrollTo(0, 0);
  }, [industry]);

  return (
    <main className="bg-[#f8fbff] pt-32">
      <section className="container-page pb-16 pt-8 sm:pb-20">
        <Link to="/#industries" className="inline-flex items-center gap-2 text-sm font-black text-emerald-700">
          <ArrowLeft className="h-4 w-4" />
          Back to industries
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Industry Solution</p>
            <h1 className="mt-4 font-display text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
              {industry.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-600">{industry.detail}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {industry.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-800 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            <Button asChild size="lg" className="mt-8">
              <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                Discuss This Solution <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-[34px] bg-slate-950 shadow-lift">
            <img src={industry.image} alt={industry.title} className="h-[420px] w-full object-cover opacity-88" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/92 p-5 shadow-glass backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Main Result</p>
              <p className="mt-2 text-2xl font-black text-slate-950">{industry.result}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {industry.outcomes.map((outcome) => (
            <div key={outcome} className="rounded-[26px] border border-slate-100 bg-white p-6 shadow-glass">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              <p className="mt-5 text-lg font-black leading-7 text-slate-950">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 rounded-[34px] bg-[#012f2f] p-8 text-white shadow-lift md:grid-cols-3">
          <div className="flex items-center gap-4">
            <MessageCircle className="h-9 w-9 text-emerald-300" />
            <div>
              <p className="font-black">WhatsApp Follow-ups</p>
              <p className="text-sm font-semibold text-white/65">Customers get quick replies.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <TrendingUp className="h-9 w-9 text-emerald-300" />
            <div>
              <p className="font-black">Lead Tracking</p>
              <p className="text-sm font-semibold text-white/65">Every inquiry stays organized.</p>
            </div>
          </div>
          <Button asChild variant="secondary" size="lg" className="h-14 self-center">
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              Book Free Consultation
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
