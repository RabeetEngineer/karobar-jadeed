import type { FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="grid gap-4 rounded-[26px] border border-slate-100 bg-white p-5 shadow-sm" aria-label="Contact form" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Name
          <input className="min-h-12 rounded-2xl border border-slate-200 px-4 font-medium outline-none focus:border-emerald-500" name="name" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Phone or WhatsApp
          <input className="min-h-12 rounded-2xl border border-slate-200 px-4 font-medium outline-none focus:border-emerald-500" name="phone" placeholder="+92..." />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        Email
        <input className="min-h-12 rounded-2xl border border-slate-200 px-4 font-medium outline-none focus:border-emerald-500" name="email" placeholder="you@example.com" type="email" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        What do you need?
        <textarea
          className="min-h-32 rounded-2xl border border-slate-200 px-4 py-3 font-medium outline-none focus:border-emerald-500"
          name="message"
          placeholder="Tell us about your website, chatbot, CRM, automation, or software requirement."
        />
      </label>
      <Button type="submit" size="lg" aria-label="Submit consultation request">
        Send Consultation Request <Send className="h-5 w-5" />
      </Button>
      <p className="text-xs font-medium leading-5 text-slate-500">
        This front-end form is ready for integration with email, CRM, or automation tools during deployment.
      </p>
    </form>
  );
}
