import { useEffect } from "react";
import { contact } from "@/config/contact";

type SeoProps = {
  canonicalPath?: string;
  description: string;
  image?: string;
  jsonLd?: Record<string, unknown>[];
  robots?: string;
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

export function SEO({
  canonicalPath = "/",
  description,
  image,
  jsonLd = [],
  robots = "index, follow",
  title,
  type = "website",
}: SeoProps) {
  useEffect(() => {
    const canonical = `${contact.siteUrl}${canonicalPath === "/" ? "/" : canonicalPath}`;
    const socialImage = image ?? `${contact.siteUrl}/logo.png`;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", robots);
    setMeta('meta[property="og:site_name"]', "content", "Karobar Jadeed");
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
  }, [canonicalPath, description, image, jsonLd, robots, title, type]);

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
      image: `${contact.siteUrl}/logo.png`,
      logo: `${contact.siteUrl}/logo.png`,
      priceRange: "$$",
      telephone: contact.phoneSchema,
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.5204,
        longitude: 74.3587,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "21:00",
        },
      ],
      areaServed: areaServedList,
      sameAs: [contact.socialProfiles.instagram, contact.socialProfiles.facebook],
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
