import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { contact } from "@/config/contact";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const simpleNavItems = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={cn(
          "container-page relative flex h-20 items-center justify-between gap-5 rounded-[28px] border transition-all duration-500",
          scrolled
            ? "border-white/70 bg-white/90 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl"
            : "border-transparent bg-white/45 backdrop-blur-xl",
        )}
      >
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent" />
        <Logo variant="navbar" />

        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "group relative rounded-full px-1 py-3 text-sm font-extrabold text-slate-800 transition hover:text-emerald-700",
                isActive &&
                  "after:absolute after:bottom-1 after:left-1/2 after:h-1 after:w-8 after:-translate-x-1/2 after:rounded-full after:bg-emerald-500",
              )
            }
          >
            <span className="absolute inset-0 scale-75 rounded-full bg-emerald-50 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100" />
            <span className="relative">Home</span>
          </NavLink>

          <div className="group relative">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                cn(
                  "inline-flex items-center gap-1 rounded-full px-1 py-3 text-sm font-extrabold text-slate-800 transition hover:text-emerald-700",
                  isActive && "text-emerald-700",
                )
              }
            >
              Services <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </NavLink>
            <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[560px] -translate-x-1/2 rounded-[24px] border border-slate-100 bg-white p-3 opacity-0 shadow-lift transition group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <Link key={service.slug} to={`/services/${service.slug}`} className="flex items-center gap-3 rounded-2xl p-3 text-sm font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                      <service.icon className="h-4 w-4" />
                    </span>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <NavLink
              to="/industries"
              className={({ isActive }) =>
                cn(
                  "inline-flex items-center gap-1 rounded-full px-1 py-3 text-sm font-extrabold text-slate-800 transition hover:text-emerald-700",
                  isActive && "text-emerald-700",
                )
              }
            >
              Industries <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </NavLink>
            <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[620px] -translate-x-1/2 rounded-[24px] border border-slate-100 bg-white p-3 opacity-0 shadow-lift transition group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-3 gap-2">
                {industries.map((industry) => (
                  <Link key={industry.slug} to={`/industries/${industry.slug}`} className="rounded-2xl p-3 text-sm font-bold leading-5 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800">
                    {industry.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {simpleNavItems.slice(1).map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "group relative rounded-full px-1 py-3 text-sm font-extrabold text-slate-800 transition hover:text-emerald-700",
                  isActive &&
                    "after:absolute after:bottom-1 after:left-1/2 after:h-1 after:w-8 after:-translate-x-1/2 after:rounded-full after:bg-emerald-500",
                )
              }
            >
              <span className="absolute inset-0 scale-75 rounded-full bg-emerald-50 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100" />
              <span className="relative">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button asChild size="lg" className="group relative overflow-hidden bg-gradient-to-r from-[#012f2f] via-[#006b5a] to-[#079669] shadow-[0_18px_45px_rgba(1,47,47,0.18)]">
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              <span className="absolute inset-y-0 left-0 w-12 bg-white/20 blur-md animate-shine" />
              <span className="relative">Book Free Consultation</span>
              <ArrowRight className="relative h-5 w-5 transition group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        <Button
          variant="secondary"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div
        className={cn(
          "mx-3 grid overflow-hidden rounded-b-[24px] border-x border-b border-white/70 bg-white/95 shadow-glass transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <nav className="container-page flex flex-col gap-2 py-5">
            <Link to="/" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-100">
              Home
            </Link>
            <div className="rounded-2xl bg-slate-50 p-3">
              <Link to="/services" onClick={() => setOpen(false)} className="block px-2 py-2 text-sm font-extrabold text-slate-900">
                Services
              </Link>
              <div className="grid gap-1">
                {services.map((service) => (
                  <Link key={service.slug} to={`/services/${service.slug}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-white hover:text-emerald-700">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-3">
              <Link to="/industries" onClick={() => setOpen(false)} className="block px-2 py-2 text-sm font-extrabold text-slate-900">
                Industries
              </Link>
              <div className="grid gap-1">
                {industries.map((industry) => (
                  <Link key={industry.slug} to={`/industries/${industry.slug}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-white hover:text-emerald-700">
                    {industry.title}
                  </Link>
                ))}
              </div>
            </div>
            {simpleNavItems.slice(1).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                Book Free Consultation <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
