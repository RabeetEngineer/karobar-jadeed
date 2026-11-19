import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm font-bold text-slate-500">
      <Link to="/" className="inline-flex items-center gap-1 hover:text-emerald-700">
        <Home className="h-4 w-4" />
        Home
      </Link>
      {items.map((item, index) => (
        <span key={item.href} className="inline-flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-slate-300" />
          {index === items.length - 1 ? (
            <span className="text-slate-900">{item.label}</span>
          ) : (
            <Link to={item.href} className="hover:text-emerald-700">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
