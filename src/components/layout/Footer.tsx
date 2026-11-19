import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import { GbpMapEmbed } from "@/components/shared/GbpMapEmbed";
import { contact } from "@/config/contact";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-[#f8fbff] py-12">
      <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.95fr_0.95fr_0.85fr_1.1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm font-medium leading-6 text-slate-600">
            Karobar Jadeed Digital Solutions is a Pakistan-based software company helping local and international
            businesses build websites, AI automation, CRM systems, WhatsApp workflows, and custom software.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="/contact"
                aria-label="Karobar Jadeed social profile"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-700 shadow-sm hover:text-emerald-600"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-extrabold text-slate-900">Services</h3>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 10).map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className="text-sm font-semibold text-slate-600 hover:text-emerald-600">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold text-slate-900">Industries</h3>
          <ul className="mt-5 space-y-3">
            {industries.slice(0, 12).map((industry) => (
              <li key={industry.slug}>
                <Link to={`/industries/${industry.slug}`} className="text-sm font-semibold text-slate-600 hover:text-emerald-600">
                  {industry.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold text-slate-900">Company</h3>
          <ul className="mt-5 space-y-3">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href} className="text-sm font-semibold text-slate-600 hover:text-emerald-600">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="/sitemap.xml" className="text-sm font-semibold text-slate-600 hover:text-emerald-600">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold text-slate-900">Contact</h3>
          <div className="mt-5 space-y-4 text-sm font-semibold text-slate-600">
            <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-emerald-600">
              <Phone className="h-5 w-5 text-emerald-600" /> {contact.phoneDisplay}
            </a>
            <a href={contact.emailHref} className="flex items-center gap-3 hover:text-emerald-600">
              <Mail className="h-5 w-5 text-emerald-600" /> {contact.email}
            </a>
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-emerald-600">
              <MessageCircle className="h-5 w-5 text-emerald-600" /> Chat on WhatsApp
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-emerald-600" /> {contact.location}
            </p>
          </div>
          <GbpMapEmbed className="mt-5 h-40 w-full" />
        </div>
      </div>
      <div className="container-page mt-10 border-t border-slate-200 pt-6 text-sm font-semibold text-slate-500">
        Copyright 2026 Karobar Jadeed. All rights reserved.
      </div>
    </footer>
  );
}
