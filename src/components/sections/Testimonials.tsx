import { Quote, Star, TrendingUp } from "lucide-react";
import { Section } from "@/components/shared/Section";

const testimonials = [
  {
    name: "Dr. Salman Raza",
    role: "Clinic Owner",
    service: "Website + appointments",
    quote: "Appointments became easier to manage and patient inquiries stopped getting missed.",
    result: "Faster bookings",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Ayesha Malik",
    role: "Restaurant Manager",
    service: "WhatsApp ordering",
    quote: "Customers can order faster, and our team can follow up without confusion.",
    result: "More repeat orders",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Michael Turner",
    role: "Service Business Owner",
    service: "Website + lead system",
    quote: "The new website and follow-up system made our inquiry process much easier to manage.",
    result: "More qualified leads",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
];

export function Testimonials() {
  return (
    <Section className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="section-kicker">Client Feedback</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Clear results, simple systems.
          </h2>
          <div className="mt-8 overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 p-6 text-white shadow-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-black text-emerald-300">Client Trust</p>
                <p className="mt-2 text-5xl font-black">4.9</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10">
                <TrendingUp className="h-10 w-10 text-emerald-300" />
              </div>
            </div>
            <div className="mt-6 flex gap-1 text-amber-300">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/72">Clients appreciate fast delivery, clean design and systems that are easy to use.</p>
          </div>
        </div>

        <div className="grid gap-5">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="group rounded-[26px] border border-slate-100 bg-white p-5 shadow-glass transition hover:-translate-y-1 hover:shadow-lift sm:p-6"
            >
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 shrink-0 rounded-2xl border-2 border-white object-cover shadow-md"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-black text-slate-950">{item.name}</h3>
                      <p className="text-sm font-semibold text-slate-500">{item.role}</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">
                      {item.result}
                    </span>
                  </div>
                  <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                    <Quote className="mb-2 h-5 w-5 text-emerald-600" />
                    <p className="text-sm font-semibold leading-6 text-slate-700">{item.quote}</p>
                  </div>
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-slate-500">{item.service}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
