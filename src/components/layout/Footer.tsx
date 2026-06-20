import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import { contact } from "@/config/contact";
import { industries } from "@/data/industries";

const serviceLinks = ["Professional Websites", "Business Automation", "AI Chatbots", "CRM & Leads", "Google Business"];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-[#f8fbff] py-12">
      <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm font-medium leading-6 text-slate-600">
            Karobar Jadeed creates AI automation, websites and digital systems for modern Pakistani businesses.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a key={index} href="/#contact" className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-700 shadow-sm hover:text-emerald-600">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-slate-950">Services</h3>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((link) => (
              <li key={link}>
                <a href="/#services" className="text-sm font-semibold text-slate-600 hover:text-emerald-600">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-black text-slate-950">Industries</h3>
          <ul className="mt-5 space-y-3">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link to={`/industries/${industry.slug}`} className="text-sm font-semibold text-slate-600 hover:text-emerald-600">
                  {industry.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-black text-slate-950">Contact</h3>
          <div className="mt-5 space-y-4 text-sm font-semibold text-slate-600">
            <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-emerald-600"><Phone className="h-5 w-5 text-emerald-600" /> {contact.phoneDisplay}</a>
            <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-emerald-600" /> {contact.email}</p>
            <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-emerald-600" /> Pakistan</p>
          </div>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-slate-200 pt-6 text-sm font-semibold text-slate-500">
        Copyright 2026 Karobar Jadeed. All rights reserved.
      </div>
    </footer>
  );
}
