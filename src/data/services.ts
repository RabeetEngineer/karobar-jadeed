import {
  Bot,
  Code2,
  LayoutDashboard,
  MessageCircle,
  MonitorSmartphone,
  Search,
  ShoppingCart,
  Smartphone,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  benefits: string[];
  description: string;
  faqs: { answer: string; question: string }[];
  features: string[];
  icon: LucideIcon;
  metaDescription: string;
  process: string[];
  relatedIndustries: string[];
  relatedServices: string[];
  seoTitle: string;
  slug: string;
  title: string;
  whoFor: string;
};

export const services: Service[] = [
  {
    title: "Website Development",
    slug: "website-development",
    icon: MonitorSmartphone,
    seoTitle: "Website Development Company in Pakistan | Karobar Jadeed",
    metaDescription:
      "Professional website development services in Pakistan for business websites, landing pages, ecommerce sites, SEO-friendly structure, and lead generation.",
    description:
      "We design and develop professional websites that explain your business clearly, load fast, support Google indexing, and guide visitors toward WhatsApp, forms, bookings, or consultation calls.",
    whoFor: "Small and medium businesses, consultants, clinics, schools, restaurants, ecommerce stores, and international clients who need a credible website.",
    features: ["SEO-friendly page structure", "Responsive design", "Service and landing pages", "Lead forms and WhatsApp CTAs", "Analytics-ready setup"],
    benefits: ["Improves business credibility", "Captures better inquiries", "Supports Google visibility", "Works smoothly on mobile", "Creates a foundation for automation"],
    process: ["Discovery and page plan", "Content and wireframe", "Design and development", "SEO and speed checks", "Launch and improvement"],
    relatedServices: ["seo-google-business-profile", "crm-lead-management", "whatsapp-automation"],
    relatedIndustries: ["clinics-healthcare", "restaurants-cafes", "small-businesses"],
    faqs: [
      { question: "Do you build SEO-friendly websites?", answer: "Yes. We include clean headings, metadata, internal links, schema, fast loading, and crawlable content." },
      { question: "Can the website connect to WhatsApp?", answer: "Yes. We can add WhatsApp CTAs, inquiry flows, and lead tracking." },
    ],
  },
  {
    title: "Custom Software Development",
    slug: "custom-software-development",
    icon: Code2,
    seoTitle: "Custom Software Development Pakistan | Karobar Jadeed",
    metaDescription:
      "Custom software development in Pakistan for business workflows, dashboards, CRM systems, booking systems, and operations automation.",
    description:
      "We build custom software around your actual business process so your team can manage customers, work, records, approvals, and reports from one practical system.",
    whoFor: "Businesses that have outgrown spreadsheets, scattered WhatsApp chats, or manual tracking and need a tailored internal system.",
    features: ["Custom dashboards", "Role-based workflows", "Customer and records management", "Reporting modules", "Integration planning"],
    benefits: ["Reduces repetitive work", "Improves team visibility", "Keeps data organized", "Supports better decisions", "Scales with your operations"],
    process: ["Workflow audit", "Feature prioritization", "Prototype", "Development sprints", "Testing and launch"],
    relatedServices: ["crm-lead-management", "ai-automation", "saas-development"],
    relatedIndustries: ["schools-institutes", "super-stores", "service-businesses"],
    faqs: [
      { question: "Can you replace spreadsheets?", answer: "Yes. We can convert spreadsheet-based workflows into structured software with forms, records, and reports." },
      { question: "Do you build dashboards?", answer: "Yes. We can add dashboards for leads, operations, sales, customers, and performance indicators." },
    ],
  },
  {
    title: "AI Chatbot Development",
    slug: "ai-chatbot-development",
    icon: Bot,
    seoTitle: "AI Chatbot Development Services for Businesses | Karobar Jadeed",
    metaDescription:
      "Karobar Jadeed provides AI chatbot development, WhatsApp automation, CRM integration, and lead follow-up systems for businesses in Pakistan and worldwide.",
    description:
      "We create AI chatbots that answer common customer questions, collect lead details, route inquiries, and help your team reply faster across website or WhatsApp workflows.",
    whoFor: "Businesses that receive repeated questions, want faster response times, and need a structured way to capture leads.",
    features: ["FAQ-trained chatbot", "Lead qualification", "WhatsApp or website flow", "CRM handoff", "Human escalation path"],
    benefits: ["Replies faster", "Captures more inquiry details", "Reduces repetitive staff work", "Supports after-hours responses", "Improves lead organization"],
    process: ["Question mapping", "Conversation design", "Knowledge setup", "Integration", "Testing and refinement"],
    relatedServices: ["whatsapp-automation", "crm-lead-management", "ai-automation"],
    relatedIndustries: ["clinics-healthcare", "real-estate", "travel-agencies"],
    faqs: [
      { question: "Can the chatbot collect leads?", answer: "Yes. It can ask for name, phone, business type, need, timeline, and route details to your team." },
      { question: "Will it replace my team?", answer: "No. It supports your team by handling common questions and escalating important conversations." },
    ],
  },
  {
    title: "AI Automation",
    slug: "ai-automation",
    icon: Workflow,
    seoTitle: "AI Automation Services for Businesses | Karobar Jadeed",
    metaDescription:
      "AI automation services for lead follow-ups, customer replies, workflow automation, business operations, and CRM support in Pakistan and worldwide.",
    description:
      "We use AI and automation tools to reduce repetitive work, organize information, send smart follow-ups, and connect everyday business tasks.",
    whoFor: "Teams that repeat the same replies, copy data between tools, or need automated follow-up and reporting workflows.",
    features: ["Lead follow-up automation", "AI-assisted replies", "Task routing", "Data cleanup workflows", "Reports and notifications"],
    benefits: ["Saves team time", "Improves consistency", "Reduces missed follow-ups", "Keeps workflows visible", "Supports scalable operations"],
    process: ["Automation audit", "Workflow map", "Tool selection", "Build and test", "Monitor and improve"],
    relatedServices: ["ai-chatbot-development", "whatsapp-automation", "crm-lead-management"],
    relatedIndustries: ["service-businesses", "small-businesses", "travel-agencies"],
    faqs: [
      { question: "What can AI automate?", answer: "Common examples include inquiry replies, summaries, lead routing, reminders, reports, and data preparation." },
      { question: "Is automation suitable for small businesses?", answer: "Yes. We can start with one practical workflow and expand when it proves useful." },
    ],
  },
  {
    title: "WhatsApp Automation",
    slug: "whatsapp-automation",
    icon: MessageCircle,
    seoTitle: "WhatsApp Automation for Business | Karobar Jadeed",
    metaDescription:
      "WhatsApp automation for business inquiries, lead capture, appointment reminders, order updates, follow-ups, and CRM-connected workflows.",
    description:
      "We design WhatsApp flows that help businesses reply faster, capture inquiries, confirm bookings, send reminders, and keep lead details organized.",
    whoFor: "Businesses that depend on WhatsApp for inquiries, orders, bookings, customer support, and follow-ups.",
    features: ["Click-to-WhatsApp CTAs", "Inquiry routing", "Reminder flows", "CRM lead capture", "Campaign-ready contact organization"],
    benefits: ["Faster customer replies", "Fewer missed conversations", "More organized follow-up", "Better mobile conversion", "Improved customer experience"],
    process: ["Message flow planning", "CTA and form setup", "CRM connection", "Testing", "Launch and improvement"],
    relatedServices: ["ai-chatbot-development", "crm-lead-management", "website-development"],
    relatedIndustries: ["restaurants-cafes", "clinics-healthcare", "salons-beauty"],
    faqs: [
      { question: "Can WhatsApp connect with a website?", answer: "Yes. Website CTAs and forms can route inquiries to WhatsApp and CRM workflows." },
      { question: "Can it send appointment reminders?", answer: "Yes. We can design reminder flows for bookings, visits, renewals, and follow-ups." },
    ],
  },
  {
    title: "CRM & Lead Management",
    slug: "crm-lead-management",
    icon: UsersRound,
    seoTitle: "CRM and Lead Management System | Karobar Jadeed",
    metaDescription:
      "CRM and lead management systems for capturing inquiries, tracking follow-ups, managing customers, and improving sales visibility.",
    description:
      "We build CRM and lead management systems that keep inquiries, customers, follow-ups, status, and reports in one place.",
    whoFor: "Sales teams, clinics, real estate agencies, consultants, schools, and service businesses that need better lead tracking.",
    features: ["Lead capture forms", "Pipeline stages", "Follow-up reminders", "Customer profiles", "Dashboard reports"],
    benefits: ["Reduces missed leads", "Improves sales visibility", "Makes follow-up easier", "Keeps customer data organized", "Supports better reporting"],
    process: ["Lead source review", "Pipeline design", "CRM setup", "Automation connection", "Team handover"],
    relatedServices: ["website-development", "whatsapp-automation", "custom-software-development"],
    relatedIndustries: ["real-estate", "schools-institutes", "service-businesses"],
    faqs: [
      { question: "Can leads from WhatsApp be tracked?", answer: "Yes. We can create flows that save key inquiry details and follow-up status." },
      { question: "Can staff see lead status?", answer: "Yes. Pipelines can show new, contacted, quoted, booked, won, or lost stages." },
    ],
  },
  {
    title: "SaaS Development",
    slug: "saas-development",
    icon: LayoutDashboard,
    seoTitle: "SaaS Development Company in Pakistan | Karobar Jadeed",
    metaDescription:
      "SaaS development services for dashboards, subscriptions, user roles, business platforms, MVPs, and scalable product development.",
    description:
      "We help founders and businesses plan, design, and develop SaaS products with user accounts, dashboards, workflows, and scalable product foundations.",
    whoFor: "Founders, agencies, and businesses that want to turn a repeatable software idea into a subscription-ready product.",
    features: ["MVP planning", "User dashboards", "Role-based access", "Subscription-ready architecture", "Admin panels"],
    benefits: ["Validates product ideas", "Creates scalable systems", "Supports recurring revenue", "Improves product delivery", "Builds with maintainability in mind"],
    process: ["Product discovery", "MVP scope", "UX and architecture", "Development", "Launch and iteration"],
    relatedServices: ["custom-software-development", "ai-automation", "crm-lead-management"],
    relatedIndustries: ["small-businesses", "service-businesses", "schools-institutes"],
    faqs: [
      { question: "Can you build an MVP?", answer: "Yes. We can scope the smallest useful version and build it with room to improve." },
      { question: "Can SaaS include AI features?", answer: "Yes. We can add AI-assisted workflows where they provide clear business value." },
    ],
  },
  {
    title: "SEO & Google Business Profile",
    slug: "seo-google-business-profile",
    icon: Search,
    seoTitle: "SEO & Google Business Profile Optimization | Karobar Jadeed",
    metaDescription:
      "SEO and Google Business Profile optimization for local businesses, service pages, technical SEO, metadata, schema, and lead-focused website structure.",
    description:
      "We improve website structure, local SEO signals, Google Business Profile readiness, service content, metadata, internal links, and schema foundations.",
    whoFor: "Local and service businesses that want stronger Google visibility and a more trustworthy online presence.",
    features: ["Technical SEO checks", "Service page optimization", "Google Business Profile content", "Schema markup", "Internal linking plan"],
    benefits: ["Supports Google indexing", "Improves local trust signals", "Clarifies services", "Strengthens website structure", "Helps customers find contact details"],
    process: ["SEO audit", "Keyword and service mapping", "On-page optimization", "Schema and sitemap setup", "GBP readiness review"],
    relatedServices: ["website-development", "ecommerce-development", "crm-lead-management"],
    relatedIndustries: ["clinics-healthcare", "restaurants-cafes", "salons-beauty"],
    faqs: [
      { question: "Do you guarantee rankings?", answer: "No. We avoid unrealistic guarantees, but we build a stronger SEO foundation for visibility and indexing." },
      { question: "Can you optimize my Google Business Profile?", answer: "Yes. We can align services, categories, descriptions, photos, posts, and website signals." },
    ],
  },
  {
    title: "Ecommerce Development",
    slug: "ecommerce-development",
    icon: ShoppingCart,
    seoTitle: "Ecommerce Website Development Pakistan | Karobar Jadeed",
    metaDescription:
      "Ecommerce development for online stores, product catalogs, checkout or inquiry flows, WhatsApp ordering, SEO, and customer follow-up automation.",
    description:
      "We build ecommerce websites that present products clearly, support search visibility, simplify orders, and connect customers to WhatsApp or checkout workflows.",
    whoFor: "Online stores, product businesses, retailers, and brands that want a professional store beyond social media.",
    features: ["Product catalog", "Category pages", "Checkout or inquiry flow", "Order notifications", "SEO-friendly product structure"],
    benefits: ["Builds trust beyond social pages", "Improves product discovery", "Organizes orders", "Supports campaigns", "Creates reusable customer data"],
    process: ["Catalog planning", "Store UX", "Development", "Payment or inquiry setup", "Launch checks"],
    relatedServices: ["website-development", "whatsapp-automation", "seo-google-business-profile"],
    relatedIndustries: ["ecommerce-stores", "super-stores", "small-businesses"],
    faqs: [
      { question: "Can the store use WhatsApp orders?", answer: "Yes. We can build inquiry-based ecommerce flows where customers order through WhatsApp." },
      { question: "Can you add product SEO?", answer: "Yes. We can improve category structure, metadata, product descriptions, and internal links." },
    ],
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    icon: Smartphone,
    seoTitle: "Mobile App Development Services | Karobar Jadeed",
    metaDescription:
      "Mobile app development for business workflows, customer apps, booking systems, dashboards, and custom software platforms.",
    description:
      "We develop mobile app experiences for business workflows, customer booking, internal teams, dashboards, and systems that need mobile-first access.",
    whoFor: "Businesses that need customer-facing apps, staff apps, booking tools, or mobile dashboards connected to a digital system.",
    features: ["Mobile-first UX", "Customer or staff login", "Booking and inquiry flows", "Dashboard access", "API integration planning"],
    benefits: ["Improves mobile access", "Supports repeat customers", "Helps teams work on the go", "Extends custom software", "Creates a stronger product experience"],
    process: ["App scope", "UX screens", "Backend planning", "Development", "Testing and release support"],
    relatedServices: ["custom-software-development", "saas-development", "crm-lead-management"],
    relatedIndustries: ["service-businesses", "gyms-fitness", "schools-institutes"],
    faqs: [
      { question: "Can you build apps connected to a CRM?", answer: "Yes. Apps can connect with CRM, booking, reporting, or custom software backends." },
      { question: "Should I build a website or app first?", answer: "For many businesses, a website and lead system comes first. We can guide you during consultation." },
    ],
  },
];

export const featuredServices = services.slice(0, 8);
