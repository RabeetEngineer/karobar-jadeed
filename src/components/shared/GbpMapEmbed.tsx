import { contact } from "@/config/contact";
import { cn } from "@/lib/utils";

type GbpMapEmbedProps = {
  className?: string;
};

/** Responsive Google Business Profile map embed with Daylight SaaS framing. */
export function GbpMapEmbed({ className }: GbpMapEmbedProps) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm", className)}>
      <iframe
        title="Karobar Jadeed — Lahore, Pakistan Location Map"
        src={contact.gbpMapEmbedUrl}
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
