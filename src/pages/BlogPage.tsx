import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SEO, baseSchemas, breadcrumbSchema } from "@/components/seo/SEO";
import { blogPosts } from "@/data/blog";

export function BlogPage() {
  return (
    <main className="bg-[#f8fbff] pt-32">
      <SEO
        title="Blog | Digital Growth, AI Automation, CRM & SEO Guides"
        description="Read practical guides from Karobar Jadeed about websites, AI chatbots, WhatsApp automation, CRM, clinic software, school software, and Google Business Profile optimization."
        canonicalPath="/blog"
        jsonLd={[...baseSchemas(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])]}
      />
      <section className="container-page pb-16 pt-8">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
        <div className="max-w-3xl">
          <p className="section-kicker">Blog</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">Business Digital Growth Guides</h1>
          <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">
            Practical articles for businesses that want better websites, automation, lead tracking, local SEO, and customer follow-up systems.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group rounded-[26px] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glass">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700">Guide</p>
              <h2 className="mt-4 text-xl font-extrabold leading-7 text-slate-900">{post.title}</h2>
              <p className="mt-4 text-sm font-medium leading-6 text-slate-600">{post.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-emerald-700">
                Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
