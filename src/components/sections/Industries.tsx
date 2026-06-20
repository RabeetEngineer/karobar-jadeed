import { Building2, GraduationCap, HeartPulse, Home, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { Section } from "@/components/shared/Section";

const industries = [
  { title: "Clinics", icon: HeartPulse, text: "Appointments, patient inquiries, Google profile and follow ups." },
  { title: "Restaurants", icon: UtensilsCrossed, text: "WhatsApp orders, menus, reviews and customer retention." },
  { title: "Schools", icon: GraduationCap, text: "Admissions, inquiries, parent communication and records." },
  { title: "Real Estate", icon: Home, text: "Lead capture, property inquiries and automated reminders." },
  { title: "Service Businesses", icon: Building2, text: "Booking systems, estimates, lead tracking and support." },
  { title: "Super Stores", icon: ShoppingBag, text: "Promotions, online visibility, loyalty and inventory workflows." },
];

export function Industries() {
  return (
    <Section id="industries" className="bg-[#f7fbff]">
      <div className="text-center">
        <p className="section-kicker">Industries</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          Built for real Pakistani businesses.
        </h2>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <a
            href="#contact"
            key={industry.title}
            className="group rounded-[26px] border border-white/80 bg-white/80 p-7 shadow-glass backdrop-blur transition hover:-translate-y-2 hover:shadow-lift"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
              <industry.icon className="h-7 w-7" />
            </span>
            <h3 className="mt-6 text-xl font-black text-slate-950">{industry.title}</h3>
            <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{industry.text}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
