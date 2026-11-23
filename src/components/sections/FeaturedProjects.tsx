import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarClock,
  CheckCircle2,
  GraduationCap,
  MessageCircle,
  QrCode,
  ShoppingBag,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/shared/Section";

export type PortfolioItem = {
  id: "clinic" | "restaurant" | "school" | "realestate" | "ecommerce" | "dashboard";
  title: string;
  type: string;
  metric: string;
  accent: string;
  challenge: string;
  solution: string;
  features: string[];
  result: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "clinic",
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
    id: "restaurant",
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
    id: "school",
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
    id: "realestate",
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
    id: "ecommerce",
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
    id: "dashboard",
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

function ClinicMockup() {
  const appointments = [
    { patient: "Ayesha K.", detail: "Dental Checkup · 10:30 AM", status: "Confirmed", badge: "bg-emerald-50 text-emerald-700" },
    { patient: "Usman R.", detail: "Skin Consult · 11:15 AM", status: "Reminder sent", badge: "bg-sky-50 text-sky-700" },
    { patient: "Sana M.", detail: "Follow-up · 12:00 PM", status: "New Lead", badge: "bg-amber-50 text-amber-700" },
  ];

  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-slate-100 bg-[#F4F8FB] p-2.5">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">Today</p>
          <p className="mt-0.5 text-base font-extrabold text-slate-900">18 Slots</p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-emerald-50/70 p-2.5">
          <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-700">Confirmed</p>
          <p className="mt-0.5 text-base font-extrabold text-emerald-900">14</p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-[#F4F8FB] p-2.5">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">WhatsApp</p>
          <p className="mt-0.5 text-base font-extrabold text-slate-900">Auto</p>
        </div>
      </div>
      <div className="space-y-2">
        {appointments.map((row) => (
          <div key={row.patient} className="flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                <CalendarClock className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-extrabold text-slate-900">{row.patient}</p>
                <p className="truncate text-[11px] font-medium text-slate-500">{row.detail}</p>
              </div>
            </div>
            <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${row.badge}`}>
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RestaurantMockup() {
  const menuItems = [
    { name: "Chicken Karahi (Full)", price: "PKR 2,400", qty: "1x" },
    { name: "Garlic Naan Basket", price: "PKR 360", qty: "2x" },
    { name: "Mint Margarita", price: "PKR 450", qty: "2x" },
  ];

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between rounded-xl border border-orange-100 bg-orange-50/70 px-3 py-2">
        <div className="flex items-center gap-2">
          <QrCode className="h-4 w-4 text-orange-600" />
          <span className="text-xs font-extrabold text-slate-900">Digital QR Menu · Order #1042</span>
        </div>
        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-extrabold text-orange-700">Live</span>
      </div>
      <div className="space-y-1.5">
        {menuItems.map((dish) => (
          <div key={dish.name} className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-3 py-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-orange-50 text-orange-600">
                <UtensilsCrossed className="h-3.5 w-3.5" />
              </span>
              <p className="truncate text-xs font-bold text-slate-800">{dish.name}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600">{dish.qty}</span>
              <span className="text-xs font-extrabold text-slate-900">{dish.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-xl bg-emerald-600 px-3 py-2.5 text-white">
        <span className="flex items-center gap-1.5 text-xs font-extrabold">
          <MessageCircle className="h-4 w-4" /> Order sent to WhatsApp
        </span>
        <span className="text-xs font-extrabold">PKR 3,210</span>
      </div>
    </div>
  );
}

function SchoolMockup() {
  const leads = [
    { parent: "Mr. Bilal Ahmed", grade: "Grade 6 · Campus Tour", stage: "Tour Booked", badge: "bg-violet-50 text-violet-700" },
    { parent: "Mrs. Hina Tariq", grade: "O-Levels · Fee Inquiry", stage: "Follow-up Due", badge: "bg-amber-50 text-amber-700" },
    { parent: "Mr. Kamran Ali", grade: "Grade 2 · Admission", stage: "Enrolled", badge: "bg-emerald-50 text-emerald-700" },
  ];

  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl border border-slate-100 bg-[#F4F8FB] p-2">
          <p className="text-sm font-extrabold text-slate-900">42</p>
          <p className="text-[10px] font-bold text-slate-500">New Inquiries</p>
        </div>
        <div className="rounded-xl border border-violet-100 bg-violet-50/70 p-2">
          <p className="text-sm font-extrabold text-violet-900">19</p>
          <p className="text-[10px] font-bold text-violet-700">Campus Visits</p>
        </div>
        <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-2">
          <p className="text-sm font-extrabold text-emerald-900">12</p>
          <p className="text-[10px] font-bold text-emerald-700">Enrolled</p>
        </div>
      </div>
      <div className="space-y-2">
        {leads.map((row) => (
          <div key={row.parent} className="flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-50 text-violet-700">
                <GraduationCap className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-extrabold text-slate-900">{row.parent}</p>
                <p className="truncate text-[11px] font-medium text-slate-500">{row.grade}</p>
              </div>
            </div>
            <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${row.badge}`}>
              {row.stage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RealEstateMockup() {
  const buyers = [
    { name: "Zainab S.", property: "10 Marla · DHA Phase 6", budget: "PKR 3.2 Cr", tag: "Hot Buyer" },
    { name: "Faisal M.", property: "5 Marla · Bahria Town", budget: "PKR 1.4 Cr", tag: "Site Visit" },
    { name: "Omar K.", property: "Commercial Plot · Johar Town", budget: "PKR 4.8 Cr", tag: "Qualified" },
  ];

  return (
    <div className="space-y-2">
      {buyers.map((buyer) => (
        <div key={buyer.name} className="flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600">
              <Building2 className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-extrabold text-slate-900">{buyer.name} · {buyer.budget}</p>
              <p className="truncate text-[11px] font-medium text-slate-500">{buyer.property}</p>
            </div>
          </div>
          <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-extrabold text-blue-700">
            {buyer.tag}
          </span>
        </div>
      ))}
    </div>
  );
}

function EcommerceMockup() {
  const products = [
    { name: "Leather Crossbody Bag", stock: "In Stock · 24", price: "PKR 4,900" },
    { name: "Classic Wallet Gift Set", stock: "In Stock · 15", price: "PKR 2,850" },
    { name: "Canvas Travel Tote", stock: "Low Stock · 4", price: "PKR 3,600" },
  ];

  return (
    <div className="space-y-2">
      {products.map((product) => (
        <div key={product.name} className="flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-fuchsia-50 text-fuchsia-600">
              <ShoppingBag className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-extrabold text-slate-900">{product.name}</p>
              <p className="truncate text-[11px] font-medium text-slate-500">{product.stock}</p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-extrabold text-slate-900">{product.price}</span>
        </div>
      ))}
    </div>
  );
}

function DashboardMockup() {
  const bars = [42, 65, 58, 82, 74, 94];

  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-slate-100 bg-white p-2.5">
          <p className="text-[10px] font-bold text-slate-500">Leads</p>
          <p className="mt-0.5 text-sm font-extrabold text-slate-900">128</p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-white p-2.5">
          <p className="text-[10px] font-bold text-slate-500">Follow-ups</p>
          <p className="mt-0.5 text-sm font-extrabold text-emerald-700">96%</p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-white p-2.5">
          <p className="text-[10px] font-bold text-slate-500">Avg Reply</p>
          <p className="mt-0.5 text-sm font-extrabold text-slate-900">2m</p>
        </div>
      </div>
      <div className="rounded-xl border border-slate-100 bg-white p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-slate-700">
            <BarChart3 className="h-3.5 w-3.5 text-emerald-600" /> Weekly Lead Activity
          </span>
          <span className="text-[10px] font-bold text-emerald-700">+24%</span>
        </div>
        <div className="flex h-16 items-end gap-2">
          {bars.map((height, index) => (
            <div key={index} className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-600 to-teal-400" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({ item }: { item: PortfolioItem }) {
  const headerIcon =
    item.id === "clinic"
      ? Stethoscope
      : item.id === "restaurant"
        ? UtensilsCrossed
        : item.id === "school"
          ? GraduationCap
          : item.id === "realestate"
            ? Building2
            : item.id === "ecommerce"
              ? ShoppingBag
              : BarChart3;

  const HeaderIcon = headerIcon;

  return (
    <div className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-[#F4F8FB] p-3.5 text-slate-900">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />
      <div className="mb-3 flex items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white px-3 py-2.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#F4F8FB] text-slate-700">
            <HeaderIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500">{item.type}</p>
            <p className="truncate text-sm font-extrabold text-slate-900">{item.metric}</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-700">
          Preview
        </span>
      </div>

      {item.id === "clinic" && <ClinicMockup />}
      {item.id === "restaurant" && <RestaurantMockup />}
      {item.id === "school" && <SchoolMockup />}
      {item.id === "realestate" && <RealEstateMockup />}
      {item.id === "ecommerce" && <EcommerceMockup />}
      {item.id === "dashboard" && <DashboardMockup />}
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
