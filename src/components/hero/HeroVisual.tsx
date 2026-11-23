import {
  Bot,
  CalendarCheck,
  Check,
  Globe2,
  MessageCircle,
  MousePointerClick,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { label: "Website", text: "Visitor lands", icon: Globe2, color: "text-blue-600 bg-blue-50" },
  { label: "WhatsApp", text: "Inquiry captured", icon: MessageCircle, color: "text-emerald-600 bg-emerald-50" },
  { label: "CRM", text: "Lead saved", icon: UsersRound, color: "text-violet-600 bg-violet-50" },
  { label: "Booking", text: "Consultation confirmed", icon: CalendarCheck, color: "text-orange-600 bg-orange-50" },
  { label: "Follow-up", text: "Next step automated", icon: Bot, color: "text-cyan-600 bg-cyan-50" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto min-w-0 w-full max-w-[calc(100vw-2.5rem)] sm:max-w-[700px] lg:min-h-[610px]">
      <div className="relative min-h-[470px] overflow-hidden rounded-[32px] border border-white/70 bg-white/60 p-4 shadow-glass backdrop-blur-2xl sm:min-h-[560px] sm:rounded-[42px] sm:p-6 lg:min-h-[590px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.18),transparent_24%),radial-gradient(circle_at_84%_34%,rgba(124,58,237,0.16),transparent_25%)]" />

        <motion.div
          className="relative z-10 overflow-hidden rounded-[28px] bg-slate-950 shadow-[0_30px_90px_rgba(15,23,42,0.26)]"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="grid sm:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[230px] overflow-hidden sm:min-h-[410px]">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
                alt="Business team reviewing digital growth dashboard"
                width={900}
                height={600}
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 shadow-glass backdrop-blur">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-800">Business Growth System</p>
                  <p className="mt-1 text-lg font-extrabold text-slate-900">From visitor to customer</p>
              </div>
            </div>

            <div className="bg-white p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-600">Live Flow</p>
                  <p className="mt-1 text-xl font-extrabold text-slate-900">From visitor to customer</p>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white">
                  <MousePointerClick className="h-5 w-5" />
                </span>
              </div>

              <div className="space-y-3">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3"
                    animate={{ x: index % 2 === 0 ? [0, 5, 0] : [0, -5, 0] }}
                    transition={{ duration: 3 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className={`grid h-10 w-10 place-items-center rounded-xl ${step.color}`}>
                      <step.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-extrabold text-slate-900">{step.label}</p>
                      <p className="text-xs font-bold text-slate-600">{step.text}</p>
                    </div>
                    {index === steps.length - 1 ? <Check className="h-5 w-5 text-emerald-600" /> : null}
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  ["Leads", "256"],
                  ["Reply", "2 min"],
                  ["Status", "Tracked"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-emerald-50 p-3">
                    <p className="text-lg font-extrabold text-slate-900">{value}</p>
                    <p className="text-[10px] font-extrabold text-slate-600">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative z-20 mt-4 rounded-3xl border border-white/80 bg-white/95 p-4 shadow-lift backdrop-blur-2xl sm:mx-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.65 }}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-50 text-violet-600">
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-slate-900">AI follow-up sent</p>
                <p className="text-xs font-bold text-slate-600">Lead added to CRM automatically</p>
              </div>
            </div>
            <TrendingUp className="hidden h-6 w-6 text-emerald-600 sm:block" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
