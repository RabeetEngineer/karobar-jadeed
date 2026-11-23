import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <main className="bg-[#f8fbff] pt-32">
      <SEO
        title="Page Not Found | Karobar Jadeed"
        description="The page you are looking for could not be found. Return to Karobar Jadeed to explore our website development, AI automation, and custom software services."
        canonicalPath="/404"
        robots="noindex, nofollow"
      />
      <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="section-kicker">404 Error</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-xl text-base font-medium leading-7 text-slate-600 sm:text-lg">
          The link you followed may be broken or the page may have moved. Head back to the homepage to explore our
          services and solutions.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="h-5 w-5" />
              Back to Homepage
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link to="/contact">
              <ArrowLeft className="h-5 w-5" />
              Contact Us
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
