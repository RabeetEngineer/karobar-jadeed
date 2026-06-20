import { BriefcaseBusiness, Building2, GraduationCap, Hospital, ShoppingCart, Utensils } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { label: "Clinics & Hospitals", icon: Hospital, color: "text-emerald-600 bg-emerald-50" },
  { label: "Schools & Institutes", icon: GraduationCap, color: "text-violet-600 bg-violet-50" },
  { label: "Restaurants & Cafes", icon: Utensils, color: "text-orange-600 bg-orange-50" },
  { label: "E-commerce Stores", icon: ShoppingCart, color: "text-blue-600 bg-blue-50" },
  { label: "Service Based Businesses", icon: BriefcaseBusiness, color: "text-emerald-700 bg-emerald-50" },
  { label: "And many more", icon: Building2, color: "text-slate-700 bg-slate-100" },
];

export function TrustStrip() {
  return (
    <section id="industries" className="-mt-1 bg-[#f8fbff] pb-12">
      <div className="container-page">
        <motion.div
          className="glass-panel grid items-center gap-3 rounded-[24px] px-5 py-5 lg:grid-cols-[1.15fr_repeat(6,1fr)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="px-2 text-sm font-extrabold leading-6 text-slate-950">Businesses we help grow</p>
          {industries.map((item) => (
            <a
              href="#industries"
              key={item.label}
              className="flex items-center gap-3 border-slate-200 px-2 py-3 lg:border-l lg:pl-6"
            >
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${item.color}`}>
                <item.icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-bold leading-5 text-slate-900">{item.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
