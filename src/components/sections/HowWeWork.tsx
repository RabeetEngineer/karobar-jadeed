import { ClipboardCheck, Rocket, SearchCheck, Settings2 } from "lucide-react";
import { Section } from "@/components/shared/Section";

const steps = [
  { title: "Discover your business", text: "We understand your customers, current process and growth gaps.", icon: SearchCheck },
  { title: "Design the system", text: "We map the right website, CRM, WhatsApp and automation flow.", icon: ClipboardCheck },
  { title: "Build & automate", text: "We create the frontend, forms, workflows and smart follow ups.", icon: Settings2 },
  { title: "Launch & improve", text: "We go live, measure results and keep improving the system.", icon: Rocket },
];

export function HowWeWork() {
  return (
    <Section id="process" className="bg-white">
      <div className="text-center">
        <p className="section-kicker">How We Work</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          Simple process, serious execution.
        </h2>
      </div>
      <div className="relative mt-14 grid gap-6 lg:grid-cols-4">
        <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-emerald-200 via-blue-200 to-violet-200 lg:block" />
        {steps.map((step, index) => (
          <article key={step.title} className="relative rounded-[26px] border border-slate-100 bg-white p-7 shadow-glass">
            <span className="absolute right-6 top-6 text-5xl font-black text-slate-100">{index + 1}</span>
            <span className="relative z-10 grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-emerald-50 to-blue-50 text-emerald-700 shadow-sm">
              <step.icon className="h-9 w-9" />
            </span>
            <h3 className="mt-7 text-xl font-black text-slate-950">{step.title}</h3>
            <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{step.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
