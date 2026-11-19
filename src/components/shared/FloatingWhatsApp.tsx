import { MessageCircle } from "lucide-react";
import { contact } from "@/config/contact";

export function FloatingWhatsApp() {
  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp with Karobar Jadeed"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#06a764] text-white shadow-[0_18px_45px_rgba(6,167,100,0.35)] transition hover:-translate-y-1 hover:bg-[#058a54]"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
