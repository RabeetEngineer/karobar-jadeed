import { ArrowRight, CheckCircle2, LayoutDashboard, MessageCircle, MonitorSmartphone, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/shared/Section";

export const portfolioItems = [
  {
    title: "Website + Lead System for Clinic",
    type: "Clinic Growth System",
    metric: "Appointments tracked",
    accent: "from-emerald-500 to-teal-500",
    challenge: "Patient calls and WhatsApp inquiries were hard to track across staff members.",
    solution: "A clinic website with appointment request forms, WhatsApp CTA, and inquiry CRM.",
    features: ["Appointment form", "Patient inquiry pipeline", "Reminder-ready workflow"],
    result: "A clearer process for appointments and follow-ups.",
  },
  {
    title: "Restaurant WhatsApp Ordering Flow",
    type: "Ordering Automation",
    metric: "Orders organized",
    accent: "from-orange-500 to-amber-500",
    challenge: "Menu browsing and ordering depended on manual chat replies.",
    solution: "A digital menu connected to WhatsApp ordering and customer follow-up lists.",
    features: ["Digital menu", "WhatsApp order CTA", "Offer follow-up list"],
    result: "Faster order handling and cleaner customer communication.",
  },
  {
    title: "School Admission Inquiry System",
    type: "Admission CRM",
    metric: "Parents followed up",
    accent: "from-violet-500 to-blue-500",
    challenge: "Admission leads came from multiple channels without one tracking view.",
    solution: "Admission pages, inquiry form, lead status tracking, and parent follow-up workflow.",
    features: ["Admission forms", "Parent CRM", "Counselor follow-ups"],
    result: "Better visibility into new and pending inquiries.",
  },
  {
    title: "Real Estate Lead CRM",
    type: "Property Lead Pipeline",
    metric: "Buyers qualified",
    accent: "from-blue-500 to-cyan-500",
    challenge: "Agents needed to identify serious buyers and follow up consistently.",
    solution: "Property landing pages, buyer qualification form, and CRM pipeline.",
    features: ["Property pages", "Budget capture", "Lead pipeline"],
    result: "More organized buyer conversations.",
  },
  {
    title: "Ecommerce Store Setup",
    type: "Online Storefront",
    metric: "Products searchable",
    accent: "from-fuchsia-500 to-violet-500",
    challenge: "Products were visible on social media but not structured for search or orders.",
    solution: "An ecommerce storefront with product pages, order flow, and WhatsApp sales support.",
    features: ["Catalog", "Product pages", "Order notifications"],
    result: "A professional store foundation for online selling.",
  },
  {
    title: "Business Automation Dashboard",
    type: "Operations Dashboard",
    metric: "Follow-ups visible",
    accent: "from-slate-700 to-emerald-500",
    challenge: "Management needed a simple way to view leads, follow-ups, and daily activity.",
    solution: "A dashboard with lead status, tasks, customer notes, and basic reporting.",
    features: ["Lead reports", "Task tracking", "Customer records"],
    result: "Better day-to-day visibility for the team.",
  },
];

export function ProjectVisual({ item }: { item: (typeof portfolioItems)[number] }) {
  const stages = [
    { label: "Website", icon: MonitorSmartphone },
    { label: "WhatsApp", icon: MessageCircle },
    { label: "CRM", icon: UsersRound },
    { label: "Dashboard", icon: LayoutDashboard },
  ];

  return (
    <div className="relative overflow-hidden rounded-[22px] bg-slate-950 p-4 text-white">
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.accent}`} />
      <div className="rounded-2xl bg-white p-3 text-slate-900">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">{item.type}</p>
            <p className="mt-1 text-base font-extrabold text-slate-900">{item.metric}</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">Live flow</span>
        </div>
        <div className="mt-4 grid gap-2">
          {stages.map((stage, index) => (
            <div key={stage.label} className="group flex items-center gap-3 rounded-xl bg-slate-50 p-3 transition hover:bg-emerald-50">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-emerald-700 shadow-sm">
                <stage.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-extrabold text-slate-900">{stage.label}</p>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <div className={`h-full rounded-full bg-gradient-to-r ${item.accent}`} style={{ width: `${46 + index * 14}%` }} />
                </div>
              </div>
              <span className="text-xs font-extrabold text-slate-400">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <Section id="portfolio" className="bg-white">
      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">Portfolio</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Visual Work Examples That Show What We Build
          </h2>
          <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-600">
            Every example shows a clear business flow: website, WhatsApp, CRM, booking, follow-up, or dashboard.
          </p>
        </div>
        <Button asChild variant="dark">
          <Link to="/portfolio">
            View Portfolio <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((item) => (
          <Card key={item.title} className="group border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-glass">
            <ProjectVisual item={item} />
            <h3 className="mt-5 text-xl font-extrabold text-slate-900">{item.title}</h3>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">Challenge</p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{item.challenge}</p>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700">Solution</p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{item.solution}</p>
              </div>
            </div>
            <ul className="mt-5 grid gap-2">
              {item.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm font-extrabold leading-6 text-emerald-900">
              Result: {item.result}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
