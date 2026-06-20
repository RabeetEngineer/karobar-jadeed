import { ArrowRight, CalendarDays, MessageCircle, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/config/contact";

const points = [
  { title: "Free Consultation", text: "No cost to discuss", icon: CalendarDays },
  { title: "No Commitment", text: "Start only when ready", icon: ShieldCheck },
  { title: "Growth Focused", text: "Built around results", icon: TrendingUp },
];

export function CTA() {
  return (
    <section id="contact" className="bg-white pb-16 sm:pb-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[28px] bg-[#012f2f] p-8 text-white shadow-lift sm:p-10 lg:p-12">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_72%_35%,rgba(16,185,129,0.45),transparent_22%),repeating-radial-gradient(circle_at_68%_42%,rgba(255,255,255,0.18)_0_1px,transparent_1px_14px)]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1fr_0.75fr] lg:items-center">
            <div>
              <h2 className="font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Ready to <span className="text-emerald-400">Grow</span> Your Business?
              </h2>
              <p className="mt-5 max-w-md text-base font-medium leading-7 text-white/82">Website, automation, leads. One plan.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {points.map((point) => (
                <div key={point.title} className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-400/10 text-emerald-300 ring-1 ring-white/10">
                    <point.icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm font-black">{point.title}</span>
                    <span className="mt-1 block text-xs font-medium text-white/70">{point.text}</span>
                  </span>
                </div>
              ))}
            </div>
            <div>
              <Button asChild variant="secondary" size="lg" className="h-16 w-full justify-between rounded-2xl px-7 text-base">
                <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                  Book Free Consultation <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <div className="mt-5 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <div className="flex items-center justify-between text-xs font-black text-white/70">
                  <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Inquiry</span>
                  <ArrowRight className="h-4 w-4" />
                  <span>Plan</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-emerald-300">Launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
