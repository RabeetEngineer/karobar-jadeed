import { ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SEO, baseSchemas, breadcrumbSchema, faqSchema } from "@/components/seo/SEO";
import { contact } from "@/config/contact";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedServices = services.filter((service) => post.relatedServices.includes(service.slug));

  return (
    <main className="bg-[#f8fbff] pt-32">
      <SEO
        title={post.seoTitle}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}`}
        type="article"
        jsonLd={[
          ...baseSchemas(),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            url: `${contact.siteUrl}/blog/${post.slug}`,
            image: `${contact.siteUrl}/logo.png`,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            author: { "@type": "Organization", name: "Karobar Jadeed", url: `${contact.siteUrl}/` },
            publisher: {
              "@type": "Organization",
              name: "Karobar Jadeed",
              logo: { "@type": "ImageObject", url: `${contact.siteUrl}/logo.png` },
            },
            mainEntityOfPage: `${contact.siteUrl}/blog/${post.slug}`,
          },
          faqSchema(post.faqs),
        ]}
      />
      <article className="container-page pb-16 pt-8">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
        <div className="mx-auto max-w-4xl">
          <p className="section-kicker">Guide</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">{post.title}</h1>
          <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">{post.excerpt}</p>
          <div className="mt-10 rounded-[30px] bg-white p-6 shadow-sm">
            {post.body.map((section) => (
              <section key={section.heading} className="border-b border-slate-100 py-7 last:border-b-0 last:pb-0 first:pt-0">
                <h2 className="font-display text-2xl font-extrabold text-slate-900">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-base font-medium leading-8 text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-[30px] bg-white p-6 shadow-sm">
            <h2 className="font-display text-2xl font-extrabold text-slate-900">FAQs</h2>
            <div className="mt-5 grid gap-4">
              {post.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-slate-100 p-4">
                  <h3 className="font-extrabold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-[30px] bg-[#012f2f] p-6 text-white shadow-lift">
            <h2 className="font-display text-2xl font-extrabold">{post.cta}</h2>
            <p className="mt-3 text-sm font-medium leading-6 text-white/75">
              Book a free consultation and we will recommend the best website, chatbot, CRM, automation, or software setup for your business.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="lg">
                <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                  Book Free Consultation <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-extrabold text-slate-900">Related Services</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {relatedServices.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="rounded-2xl bg-white p-4 text-sm font-extrabold text-slate-800 shadow-sm hover:text-emerald-700">
                  {service.title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
