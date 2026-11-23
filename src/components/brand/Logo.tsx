import { Link } from "react-router-dom";
import logoImg from "@/assets/karobar-jadeed-logo.png";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "navbar" | "footer";
};

export function Logo({ variant = "navbar" }: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link to="/" className="inline-flex shrink-0 items-center" aria-label="Karobar Jadeed home">
      <img
        src={logoImg}
        alt="Karobar Jadeed — AI Automation"
        width={isFooter ? 130 : 88}
        height={isFooter ? 88 : 60}
        className={cn(
          "w-auto object-contain mix-blend-multiply",
          isFooter ? "h-20 sm:h-24" : "h-12 sm:h-14",
        )}
      />
    </Link>
  );
}
