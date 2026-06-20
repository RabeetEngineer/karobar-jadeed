import {
  Bot,
  Code2,
  MessageCircle,
  MonitorSmartphone,
  Search,
  TrendingUp,
  UsersRound,
  Workflow,
} from "lucide-react";
import { Section } from "@/components/shared/Section";

const services = [
  { title: "Websites", icon: MonitorSmartphone, color: "text-emerald-600 bg-emerald-50" },
  { title: "Automation", icon: Workflow, color: "text-violet-600 bg-violet-50" },
  { title: "WhatsApp", icon: MessageCircle, color: "text-emerald-700 bg-emerald-50" },
  { title: "AI Chatbots", icon: Bot, color: "text-blue-600 bg-blue-50" },
  { title: "CRM & Leads", icon: UsersRound, color: "text-orange-600 bg-orange-50" },
  { title: "SEO / Google", icon: Search, color: "text-violet-600 bg-violet-50" },
  { title: "Custom Apps", icon: Code2, color: "text-cyan-600 bg-cyan-50" },
  { title: "Reports", icon: TrendingUp, color: "text-emerald-600 bg-emerald-50" },
];

export function Services() {
  return (
    <Section id="services" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="section-kicker">Hum Kya Karte Hain</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Aapke business ke liye website, leads aur follow-ups ka smart system.
          </h2>
          <p className="mt-4 max-w-xl text-base font-medium leading-7 text-slate-600">
            Hum aapka online setup, customer inquiries aur daily follow-ups ko simple aur organized banate hain.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-glass"
              >
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </span>
                <p className="mt-4 text-sm font-black leading-5 text-slate-950">{service.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 p-5 text-white shadow-lift">
          <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.8),transparent_20%),radial-gradient(circle_at_78%_35%,rgba(59,130,246,0.75),transparent_20%),repeating-linear-gradient(120deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_18px)]" />
          <div className="relative z-10 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10 backdrop-blur">
              <p className="text-sm font-black text-emerald-200">Live Dashboard</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["Leads", "256"],
                  ["Bookings", "89"],
                  ["Replies", "2m"],
                  ["Growth", "+42%"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">{value}</p>
                    <p className="text-xs font-bold text-white/78">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 text-slate-950 shadow-glass">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-black">Growth Flow</p>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">Active</span>
              </div>
              <svg viewBox="0 0 420 190" className="h-48 w-full">
                <defs>
                  <linearGradient id="serviceGrowth" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[45, 90, 135].map((y) => (
                  <line key={y} x1="0" x2="420" y1={y} y2={y} stroke="#e2e8f0" strokeWidth="2" />
                ))}
                <path
                  d="M0 150 C58 132 58 72 112 92 C160 110 172 46 228 64 C282 82 292 124 340 82 C372 54 392 38 420 24"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <path
                  d="M0 150 C58 132 58 72 112 92 C160 110 172 46 228 64 C282 82 292 124 340 82 C372 54 392 38 420 24 L420 190 L0 190 Z"
                  fill="url(#serviceGrowth)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
