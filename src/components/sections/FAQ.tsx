import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/shared/Section";

const faqs = [
  {
    question: "Do I need technical knowledge?",
    answer: "No. We explain everything in simple business terms and handle the technical setup for you.",
  },
  {
    question: "Can you automate WhatsApp?",
    answer: "Yes. We can design WhatsApp inquiry, follow-up and notification flows for many common business cases.",
  },
  {
    question: "Can you build a website for my clinic, restaurant or school?",
    answer: "Yes. We build websites and systems for clinics, restaurants, schools, real estate teams, service companies and other business types.",
  },
  {
    question: "Is this only for big businesses?",
    answer: "No. The system can start small and grow with your business, whether you serve one city or clients in different countries.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. We can work remotely with clients in Pakistan and abroad through online meetings, shared planning and clear delivery milestones.",
  },
  {
    question: "How can I start?",
    answer: "Book a free consultation and we will discuss your current process, goals and best first step.",
  },
];

export function FAQ() {
  return (
    <Section className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="section-kicker">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Questions business owners usually ask.
          </h2>
        </div>
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={faq.question}
              value={`item-${index}`}
              className="overflow-hidden rounded-[22px] border border-slate-100 bg-white shadow-sm"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-extrabold text-slate-900">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-emerald-600 transition group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-5 text-sm font-medium leading-6 text-slate-600">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </Section>
  );
}
