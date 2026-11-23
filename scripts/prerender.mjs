import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://www.karobar-jadeed.com";
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("[prerender] dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, "utf8");

function readFile(relPath) {
  return fs.readFileSync(path.join(rootDir, relPath), "utf8");
}

function extractEntries(source, fieldNames) {
  const entries = [];
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let match;
  const positions = [];

  while ((match = slugRegex.exec(source)) !== null) {
    positions.push({ slug: match[1], index: match.index });
  }

  for (let i = 0; i < positions.length; i++) {
    const start = Math.max(0, positions[i].index - 200);
    const end = i + 1 < positions.length ? positions[i + 1].index : source.length;
    const chunk = source.slice(start, end);
    const entry = { slug: positions[i].slug };

    for (const field of fieldNames) {
      const rx = new RegExp(`${field}:\\s*(?:\\n\\s*)?"([^"]+)"`);
      const m = chunk.match(rx);
      if (m) entry[field] = m[1];
    }

    entries.push(entry);
  }

  return entries;
}

const services = extractEntries(readFile("src/data/services.ts"), ["seoTitle", "metaDescription"]);
const industries = extractEntries(readFile("src/data/industries.ts"), ["seoTitle", "seoDescription", "image"]);
const blogPosts = extractEntries(readFile("src/data/blog.ts"), ["seoTitle", "metaDescription"]);

const routeMeta = new Map([
  [
    "/",
    {
      title: "Karobar Jadeed | Websites, AI Automation & Custom Software",
      description:
        "Karobar Jadeed helps businesses in Pakistan and worldwide build professional websites, AI chatbots, WhatsApp automation, CRM systems, and custom software that generate leads.",
      type: "website",
      image: DEFAULT_IMAGE,
    },
  ],
  [
    "/services",
    {
      title: "Services | Website Development, AI Automation, CRM & Software",
      description:
        "Explore Karobar Jadeed services including website development, AI chatbots, WhatsApp automation, CRM, SaaS, ecommerce, SEO, and custom software.",
      type: "website",
      image: DEFAULT_IMAGE,
    },
  ],
  [
    "/industries",
    {
      title: "Industries | Business Systems for Clinics, Schools, Restaurants & More",
      description:
        "Explore industry-specific digital solutions from Karobar Jadeed for clinics, online Quran academies, schools, restaurants, travel agencies, real estate, ecommerce, salons, gyms, and small businesses.",
      type: "website",
      image: DEFAULT_IMAGE,
    },
  ],
  [
    "/portfolio",
    {
      title: "Portfolio | Websites, CRM, Automation & Software Examples",
      description:
        "Explore practical project formats from Karobar Jadeed, including clinic lead systems, restaurant WhatsApp ordering, school admission workflows, real estate CRM, ecommerce, and dashboards.",
      type: "website",
      image: DEFAULT_IMAGE,
    },
  ],
  [
    "/about",
    {
      title: "About Karobar Jadeed | Pakistan-Based Digital Solutions Company",
      description:
        "Karobar Jadeed is a Pakistan-based digital solutions company helping local and international clients build websites, automation, AI chatbots, CRM systems, and custom software.",
      type: "website",
      image: DEFAULT_IMAGE,
    },
  ],
  [
    "/blog",
    {
      title: "Blog | Digital Growth, AI Automation, CRM & SEO Guides",
      description:
        "Read practical guides from Karobar Jadeed about websites, AI chatbots, WhatsApp automation, CRM, clinic software, school software, and Google Business Profile optimization.",
      type: "website",
      image: DEFAULT_IMAGE,
    },
  ],
  [
    "/contact",
    {
      title: "Contact Karobar Jadeed | Book a Free Consultation",
      description:
        "Contact Karobar Jadeed for website development, AI automation, chatbot, CRM, and custom software services in Pakistan and worldwide.",
      type: "website",
      image: DEFAULT_IMAGE,
    },
  ],
  [
    "/privacy-policy",
    {
      title: "Privacy Policy | Karobar Jadeed",
      description: "Privacy Policy for Karobar Jadeed Digital Solutions.",
      type: "website",
      image: DEFAULT_IMAGE,
    },
  ],
  [
    "/terms-conditions",
    {
      title: "Terms & Conditions | Karobar Jadeed",
      description: "Terms and Conditions for Karobar Jadeed Digital Solutions.",
      type: "website",
      image: DEFAULT_IMAGE,
    },
  ],
]);

for (const s of services) {
  routeMeta.set(`/services/${s.slug}`, {
    title: s.seoTitle ?? `${s.slug} | Karobar Jadeed`,
    description: s.metaDescription ?? "",
    type: "website",
    image: DEFAULT_IMAGE,
  });
}

for (const ind of industries) {
  routeMeta.set(`/industries/${ind.slug}`, {
    title: ind.seoTitle ?? `${ind.slug} | Karobar Jadeed`,
    description: ind.seoDescription ?? "",
    type: "website",
    image: ind.image ?? DEFAULT_IMAGE,
  });
}

for (const post of blogPosts) {
  routeMeta.set(`/blog/${post.slug}`, {
    title: post.seoTitle ?? `${post.slug} | Karobar Jadeed`,
    description: post.metaDescription ?? "",
    type: "article",
    image: DEFAULT_IMAGE,
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectMeta(html, routePath, meta) {
  const canonical = `${SITE_URL}${routePath === "/" ? "/" : routePath}`;
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const image = escapeHtml(meta.image || DEFAULT_IMAGE);
  const type = escapeHtml(meta.type || "website");

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?content="[^"]*"\s*\/>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${canonical}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta\s+property="og:description"[\s\S]*?content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:type" content="${type}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${canonical}" />`,
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${image}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${title}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"[\s\S]*?content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${description}" />`,
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:image" content="${image}" />`,
    );
}

const sitemapXml = readFile("public/sitemap.xml");
const sitemapRoutes = [...sitemapXml.matchAll(/<loc>https:\/\/www\.karobar-jadeed\.com([^<]*)<\/loc>/g)].map(
  (m) => m[1] || "/",
);

let count = 0;

for (const routePath of sitemapRoutes) {
  const meta = routeMeta.get(routePath);
  if (!meta) continue;

  const html = injectMeta(templateHtml, routePath, meta);

  if (routePath === "/") {
    fs.writeFileSync(templatePath, html, "utf8");
  } else {
    const outDir = path.join(distDir, routePath.replace(/^\/+/, ""));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
  }
  count++;
}

console.log(`[prerender] Generated static SEO HTML for ${count} routes from sitemap.xml.`);
