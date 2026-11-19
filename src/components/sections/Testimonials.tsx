import { CheckCircle2, MessageSquareText, TimerReset, TrendingUp, UsersRound } from "lucide-react";
import { Section } from "@/components/shared/Section";

const results = [
  { title: "Faster inquiry response", text: "Customers reach the right channel quickly through website forms and WhatsApp CTAs.", icon: TimerReset },
  { title: "Better lead tracking", text: "Inquiries can move from new lead to contacted, quoted, booked, or closed.", icon: TrendingUp },
  { title: "Fewer missed follow-ups", text: "Reminders and CRM workflows help teams stay consistent after the first message.", icon: MessageSquareText },
  { title: "Simple customer management", text: "Customer details, notes, and next steps become easier to find and update.", icon: UsersRound },
];

export function Testimonials() {
  return (
    <Section className="bg-[#f8fbff]">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="section-kicker">Client Results We Aim For</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Practical systems that make daily business easier.
          </h2>
          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-slate-600">
            We avoid fake reviews and unrealistic promises. Our focus is to build useful systems that improve visibility,
            lead capture, response speed, and customer follow-up.
          </p>
          <div className="mt-8 rounded-[28px] bg-[#012f2f] p-6 text-white shadow-lift">
            <p className="text-sm font-extrabold text-emerald-300">Trust Foundation</p>
            <p className="mt-3 text-3xl font-extrabold leading-tight">Clear contact details, service pages, schema, and Google-ready structure.</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {results.map((item) => (
            <article key={item.title} className="rounded-[26px] border border-slate-100 bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{item.text}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-extrabold text-emerald-700">
                <CheckCircle2 className="h-4 w-4" />
                Sample result format
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
