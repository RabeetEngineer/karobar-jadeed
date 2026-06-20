import { ArrowRight, CalendarDays, CheckCircle2, Globe2, Play, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { contact } from "@/config/contact";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.88)_38%,rgba(255,255,255,0.52)_100%),url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center pt-28 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35 [mask-image:radial-gradient(circle_at_top_left,black,transparent_56%)]" />
      <div className="container-page grid min-h-[690px] min-w-0 items-center gap-9 pb-12 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:gap-12 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 min-w-0 max-w-[calc(100vw-2.5rem)] sm:max-w-3xl"
        >
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-extrabold text-slate-900 shadow-sm ring-1 ring-emerald-100 sm:mb-7">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            Digital systems for Pakistani and international clients
          </div>

          <h1 className="max-w-full break-words font-display text-[2rem] font-black leading-[1.08] tracking-tight text-slate-950 sm:max-w-4xl sm:text-5xl lg:text-[4rem] lg:leading-[1.04] xl:text-[4.35rem]">
            <span className="block sm:inline">Apne Karobar ko </span>
            <span className="block sm:inline">Jadeed Karen </span>
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 bg-clip-text text-transparent sm:inline">
              Karobar Jadeed
            </span>{" "}
            <span className="block sm:inline">ke Zariye.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">
            We build websites, AI automation, WhatsApp follow-ups and CRM systems for growing businesses in Pakistan
            and abroad. Aapka process simple, fast aur trackable ho jata hai.
          </p>

          <div className="mt-7 hidden gap-3 sm:grid sm:grid-cols-3">
            {["Professional Website", "WhatsApp Follow-ups", "Pakistan + Global Clients"].map((item) => (
              <div key={item} className="flex min-h-12 items-center gap-2 rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm font-extrabold leading-5 text-slate-800 shadow-sm backdrop-blur">
                {item.includes("Global") ? (
                  <Globe2 className="h-4 w-4 shrink-0 text-blue-600" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                )}
                {item}
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <Button asChild size="lg" className="w-full bg-gradient-to-r from-[#006f54] to-[#00975f] sm:w-auto">
              <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                <CalendarDays className="h-5 w-5" />
                Book Free Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <a href="#services">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                  <Play className="h-4 w-4 fill-current" />
                </span>
                See Our Services
              </a>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-9 sm:gap-6">
            <div className="flex -space-x-3">
              {avatars.map((avatar, index) => (
                <img
                  key={avatar}
                  src={avatar}
                  alt=""
                  className="h-10 w-10 rounded-full border-4 border-white object-cover shadow-sm sm:h-12 sm:w-12"
                  style={{ zIndex: avatars.length - index }}
                />
              ))}
            </div>
            <div>
              <p className="font-extrabold text-slate-950">100+ happy businesses</p>
              <p className="text-sm font-medium text-slate-600">trust Karobar Jadeed</p>
            </div>
            <div className="hidden items-center gap-1 text-amber-400 sm:flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
          </div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}
