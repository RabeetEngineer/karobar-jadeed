import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/config/contact";

const CONTACT_FORM_ENDPOINT = (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined)?.trim() || "";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const buildWhatsAppUrl = () => {
    const parts = [
      "Assalam-o-Alaikum, I want to book a consultation with Karobar Jadeed.",
      name.trim() ? `Name: ${name.trim()}` : "",
      phone.trim() ? `Phone: ${phone.trim()}` : "",
      email.trim() ? `Email: ${email.trim()}` : "",
      message.trim() ? `Requirement: ${message.trim()}` : "",
    ].filter(Boolean);

    return `${contact.whatsappBaseUrl}?text=${encodeURIComponent(parts.join("\n"))}`;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setFeedback("Please fill in your name, phone/WhatsApp, email, and project details.");
      return;
    }

    if (!CONTACT_FORM_ENDPOINT) {
      window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
      setStatus("success");
      setFeedback("Opening WhatsApp with your consultation details pre-filled.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: "New Consultation Request — Karobar Jadeed",
        }),
      });

      if (!response.ok) {
        throw new Error(`Submission failed (${response.status})`);
      }

      setStatus("success");
      setFeedback("Thank you! Your consultation request has been sent. We will reply shortly.");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setFeedback("We could not send your request right now. Please try again or use Send via WhatsApp below.");
    }
  };

  return (
    <form
      className="grid gap-4 rounded-[26px] border border-slate-100 bg-white p-5 shadow-sm"
      aria-label="Contact form"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Name *
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="min-h-12 rounded-2xl border border-slate-200 px-4 font-medium outline-none focus:border-emerald-500"
            name="name"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Phone or WhatsApp *
          <input
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="min-h-12 rounded-2xl border border-slate-200 px-4 font-medium outline-none focus:border-emerald-500"
            name="phone"
            placeholder="+92..."
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        Email *
        <input
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="min-h-12 rounded-2xl border border-slate-200 px-4 font-medium outline-none focus:border-emerald-500"
          name="email"
          placeholder="you@example.com"
          type="email"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        What do you need? *
        <textarea
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-32 rounded-2xl border border-slate-200 px-4 py-3 font-medium outline-none focus:border-emerald-500"
          name="message"
          placeholder="Tell us about your website, chatbot, CRM, automation, or software requirement."
        />
      </label>

      {feedback ? (
        <div
          role="status"
          aria-live="polite"
          className={
            status === "success"
              ? "flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800"
              : "rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-800"
          }
        >
          {status === "success" ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : null}
          <span>{feedback}</span>
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          aria-label="Submit consultation request"
          className="flex-1"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Consultation Request <Send className="h-5 w-5" />
            </>
          )}
        </Button>
        <Button asChild variant="secondary" size="lg" className="sm:w-auto">
          <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5 text-emerald-600" />
            Send via WhatsApp
          </a>
        </Button>
      </div>
    </form>
  );
}
