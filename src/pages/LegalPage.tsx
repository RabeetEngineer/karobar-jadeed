import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SEO, baseSchemas, breadcrumbSchema } from "@/components/seo/SEO";
import { contact } from "@/config/contact";

const content = {
  privacy: {
    title: "Privacy Policy",
    path: "/privacy-policy",
    description: "Privacy Policy for Karobar Jadeed Digital Solutions.",
    sections: [
      "We collect contact details only when you submit a form, call, email, or message us through WhatsApp.",
      "We use inquiry information to respond to consultation requests, plan services, and communicate about your project.",
      "We do not publish private addresses or sell personal information. Third-party tools may be used for hosting, analytics, forms, CRM, or communication.",
      `For privacy questions, contact ${contact.email}.`,
    ],
  },
  terms: {
    title: "Terms & Conditions",
    path: "/terms-conditions",
    description: "Terms and Conditions for Karobar Jadeed Digital Solutions.",
    sections: [
      "Website content is provided for general business information and consultation purposes.",
      "Project scope, timelines, pricing, deliverables, and support terms are confirmed separately before work begins.",
      "SEO and Google visibility work is designed to improve structure and trust signals, but rankings are not guaranteed.",
      `For service questions, contact ${contact.email} or ${contact.phoneDisplay}.`,
    ],
  },
};

export function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const page = content[type];

  return (
    <main className="bg-[#f8fbff] pt-32">
      <SEO
        title={`${page.title} | Karobar Jadeed`}
        description={page.description}
        canonicalPath={page.path}
        jsonLd={[...baseSchemas(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.title, path: page.path }])]}
      />
      <section className="container-page pb-16 pt-8">
        <Breadcrumbs items={[{ label: page.title, href: page.path }]} />
        <div className="max-w-3xl rounded-[30px] bg-white p-6 shadow-sm">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{page.title}</h1>
          <div className="mt-8 grid gap-4">
            {page.sections.map((section) => (
              <p key={section} className="text-base font-medium leading-8 text-slate-600">
                {section}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
