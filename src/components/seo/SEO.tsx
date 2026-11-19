import { useEffect } from "react";
import { contact } from "@/config/contact";

type SeoProps = {
  canonicalPath?: string;
  description: string;
  image?: string;
  jsonLd?: Record<string, unknown>[];
  title: string;
  type?: "website" | "article";
};

function setMeta(selector: string, attribute: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    if (selector.includes("property=")) {
      const property = selector.match(/property="([^"]+)"/)?.[1];
      if (property) element.setAttribute("property", property);
    } else {
      const name = selector.match(/name="([^"]+)"/)?.[1];
      if (name) element.setAttribute("name", name);
    }
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

export function SEO({ canonicalPath = "/", description, image, jsonLd = [], title, type = "website" }: SeoProps) {
  useEffect(() => {
    const canonical = `${contact.siteUrl}${canonicalPath === "/" ? "/" : canonicalPath}`;
    const socialImage =
      image ?? "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80";

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", "index, follow");
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", socialImage);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", socialImage);
    setLink("canonical", canonical);

    document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((element) => element.remove());
    jsonLd.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [canonicalPath, description, image, jsonLd, title, type]);

  return null;
}

const areaServedList = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Gujranwala",
  "Sialkot",
  "Peshawar",
  "Bahawalpur",
  "United Kingdom",
  "United States",
  "Canada",
  "United Arab Emirates",
];

const coreOfferings = [
  "Local SEO & GBP Optimization",
  "Website Design & Development",
  "WhatsApp Automation & CRM",
  "AI Chatbot & Workflow Automation",
  "Custom Software Development",
  "POS & Inventory Management Software",
  "B2B Lead Generation",
  "Digital Marketing Services",
];

export function baseSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": ["SoftwareCompany", "LocalBusiness"],
      name: "Karobar Jadeed",
      url: `${contact.siteUrl}/`,
      telephone: contact.phoneSchema,
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      areaServed: areaServedList,
      sameAs: [],
      knowsAbout: coreOfferings,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Karobar Jadeed Services",
        itemListElement: coreOfferings.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
          },
        })),
      },
      description:
        "Karobar Jadeed provides website development, AI automation, chatbot development, CRM and lead management systems, local SEO, and custom software services for businesses in Pakistan and international markets.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Karobar Jadeed",
      url: `${contact.siteUrl}/`,
      potentialAction: {
        "@type": "SearchAction",
        target: `${contact.siteUrl}/blog?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${contact.siteUrl}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { answer: string; question: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
