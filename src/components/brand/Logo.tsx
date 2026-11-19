import { Link } from "react-router-dom";
import { LogoMark } from "./LogoMark";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Karobar Jadeed home">
      <LogoMark className="h-12 w-12" />
      <span className="leading-none">
        <span className="block font-display text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
          KAROBAR JADEED
        </span>
        <span className="mt-1 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-700">
          Digital Solutions
        </span>
      </span>
    </Link>
  );
}
