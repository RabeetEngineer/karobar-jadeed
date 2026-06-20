import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { contact } from "@/config/contact";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Work", href: "/#industries" },
  { label: "Contact", href: "/#contact" },
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
          "container-page relative flex h-20 items-center justify-between gap-5 overflow-hidden rounded-[28px] border transition-all duration-500",
          scrolled
            ? "border-white/70 bg-white/88 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl"
            : "border-transparent bg-white/45 backdrop-blur-xl",
        )}
      >
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent" />
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "group relative rounded-full px-1 py-3 text-sm font-extrabold text-slate-900 transition hover:text-emerald-700",
                index === 0 &&
                  "after:absolute after:bottom-1 after:left-1/2 after:h-1 after:w-8 after:-translate-x-1/2 after:rounded-full after:bg-emerald-500",
              )}
            >
              <span className="absolute inset-0 scale-75 rounded-full bg-emerald-50 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100" />
              <span className="relative">{item.label}</span>
            </a>
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

        <Button variant="secondary" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)}>
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
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-100"
              >
                {item.label}
              </a>
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
