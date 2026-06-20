import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-grid place-items-center", className)}>
      <span className="absolute inset-[15%] rounded-[28%] bg-gradient-to-br from-[#073633] via-emerald-700 to-emerald-400" />
      <span className="absolute left-[35%] top-[9%] h-[74%] w-[16%] rotate-45 rounded-full bg-white" />
      <span className="absolute bottom-[8%] right-[24%] h-[74%] w-[16%] rotate-45 rounded-full bg-[#073633]" />
    </span>
  );
}
