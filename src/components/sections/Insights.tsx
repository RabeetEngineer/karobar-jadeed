import { Section } from "@/components/shared/Section";

const stats = [
  { label: "Client Satisfaction", value: "98%" },
  { label: "Happy Clients", value: "50+" },
  { label: "Projects Completed", value: "120+" },
  { label: "Years Experience", value: "3+" },
];

export function Insights() {
  return (
    <Section id="insights" className="bg-[#f7fbff]">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="section-kicker">Growth Insights_</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Numbers that show better systems and better service.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-dashed border-slate-300 pl-5">
              <p className="text-xs font-extrabold text-slate-500">{stat.label}</p>
              <p className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
