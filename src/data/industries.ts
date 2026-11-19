export type Industry = {
  accent: string;
  built: string;
  cta: string;
  detail: string;
  exampleWorkflow: string[];
  faqs: { answer: string; question: string }[];
  features: string[];
  image: string;
  problem: string;
  recommendedServices: string[];
  result: string;
  seoDescription: string;
  seoTitle: string;
  slug: string;
  solution: string;
  tags: string[];
  title: string;
};

export const industries: Industry[] = [
  {
    title: "Clinics & Healthcare",
    slug: "clinics-healthcare",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80",
    built: "Appointment pages, patient inquiries, reminders, CRM",
    result: "Fewer missed patient inquiries",
    tags: ["Website", "Booking", "CRM"],
    accent: "from-emerald-500 to-teal-600",
    seoTitle: "Clinic Website, Appointment & Patient Inquiry System | Karobar Jadeed",
    seoDescription:
      "Clinic website, appointment booking, WhatsApp follow-up, patient inquiry tracking, and CRM systems for healthcare businesses in Pakistan and worldwide.",
    detail:
      "We help clinics manage patient inquiries, appointments, WhatsApp follow-ups, basic CRM, reminders, and online presence through a clean digital system.",
    problem: "Clinics often miss calls, lose patient inquiries, and manage appointments across scattered notebooks, WhatsApp chats, and staff memory.",
    solution:
      "Karobar Jadeed builds a website, appointment flow, WhatsApp inquiry path, and lead tracking system so patient communication becomes easier to manage.",
    features: ["Appointment request form", "Patient inquiry CRM", "WhatsApp reminders", "Doctor or service pages", "Google Business Profile support"],
    exampleWorkflow: ["Patient visits website", "Appointment request is submitted", "WhatsApp confirmation is sent", "Inquiry is saved in CRM", "Staff follows up before the visit"],
    recommendedServices: ["website-development", "whatsapp-automation", "crm-lead-management", "seo-google-business-profile"],
    cta: "Build a clinic inquiry system",
    faqs: [
      { question: "Can you add appointment booking?", answer: "Yes. We can build simple booking forms, appointment requests, and WhatsApp confirmation flows." },
      { question: "Can this help local clinic visibility?", answer: "Yes. We structure pages and Google Business Profile content to support local search visibility." },
    ],
  },
  {
    title: "Schools & Institutes",
    slug: "schools-institutes",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    built: "Admission forms, parent communication, inquiry tracking",
    result: "Better admission follow-up",
    tags: ["Admissions", "CRM", "Reminders"],
    accent: "from-violet-500 to-blue-600",
    seoTitle: "School Management Software & Admission Inquiry System | Karobar Jadeed",
    seoDescription:
      "School website, admission inquiry forms, parent communication, CRM, reminders, and institute management systems for Pakistani and remote clients.",
    detail:
      "We help schools and institutes capture admission inquiries, organize parent follow-ups, publish programs, and manage communication through a simple digital setup.",
    problem: "Admission leads can get lost when inquiries arrive from calls, walk-ins, WhatsApp, and social media without one tracking system.",
    solution:
      "We create school websites, admission forms, lead CRM, WhatsApp follow-ups, and practical management workflows for institutes.",
    features: ["Admission inquiry form", "Program and fee pages", "Parent follow-up reminders", "Lead status tracking", "Basic dashboard reports"],
    exampleWorkflow: ["Parent checks programs", "Admission form is submitted", "Lead enters CRM", "Counselor follows up", "Admission status is updated"],
    recommendedServices: ["website-development", "custom-software-development", "whatsapp-automation", "crm-lead-management"],
    cta: "Improve your admission inquiry system",
    faqs: [
      { question: "Can you build a full school management system?", answer: "Yes. We can scope admissions, students, fees, communication, and reports based on your needs." },
      { question: "Can parents contact through WhatsApp?", answer: "Yes. We can connect forms, WhatsApp links, reminders, and inquiry routing." },
    ],
  },
  {
    title: "Restaurants & Cafes",
    slug: "restaurants-cafes",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    built: "Digital menus, WhatsApp ordering, repeat customer flows",
    result: "Faster order handling",
    tags: ["WhatsApp", "Menu", "Orders"],
    accent: "from-orange-500 to-amber-500",
    seoTitle: "Restaurant Ordering System & Digital Menu Development | Karobar Jadeed",
    seoDescription:
      "Restaurant websites, digital menus, WhatsApp ordering flows, customer follow-ups, and local SEO support for restaurants and cafes.",
    detail:
      "We build restaurant websites, menu pages, WhatsApp ordering flows, offer campaigns, and basic customer management systems.",
    problem: "Restaurants lose time when menus, orders, offers, and customer replies are handled manually without a clear flow.",
    solution:
      "A digital menu and WhatsApp ordering workflow helps customers order faster while your team keeps requests organized.",
    features: ["Digital menu", "WhatsApp order button", "Offer and campaign pages", "Customer lists", "Google Business Profile optimization"],
    exampleWorkflow: ["Customer opens menu", "Order goes to WhatsApp", "Staff confirms details", "Customer is saved for future offers", "Repeat campaign is sent"],
    recommendedServices: ["website-development", "whatsapp-automation", "seo-google-business-profile", "crm-lead-management"],
    cta: "Create a restaurant ordering flow",
    faqs: [
      { question: "Can customers order on WhatsApp?", answer: "Yes. We can design menu-to-WhatsApp flows that make ordering simple." },
      { question: "Can you help with Google Maps visibility?", answer: "Yes. We can improve service content, categories, and website signals for Google Business Profile readiness." },
    ],
  },
  {
    title: "Travel Agencies",
    slug: "travel-agencies",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    built: "Package pages, inquiry forms, lead CRM",
    result: "Cleaner trip inquiries",
    tags: ["Packages", "Leads", "CRM"],
    accent: "from-sky-500 to-blue-600",
    seoTitle: "Travel Agency Website & Inquiry Management Software | Karobar Jadeed",
    seoDescription:
      "Travel agency websites, package pages, inquiry forms, WhatsApp automation, CRM, and follow-up systems for travel businesses.",
    detail:
      "We help travel agencies display packages professionally, capture trip inquiries, route WhatsApp messages, and track follow-ups.",
    problem: "Travel inquiries need fast replies, accurate package details, and follow-up tracking, but many teams manage them manually.",
    solution:
      "A package website connected with inquiry forms, WhatsApp, and CRM helps your team respond faster and organize opportunities.",
    features: ["Package landing pages", "Inquiry forms", "WhatsApp follow-ups", "Lead pipeline", "Campaign-ready contact lists"],
    exampleWorkflow: ["Visitor views package", "Inquiry form captures travel date", "WhatsApp follow-up starts", "CRM tracks status", "Agent sends final quote"],
    recommendedServices: ["website-development", "whatsapp-automation", "crm-lead-management", "seo-google-business-profile"],
    cta: "Organize travel agency inquiries",
    faqs: [
      { question: "Can we add multiple tour packages?", answer: "Yes. Packages can include itinerary, pricing, images, FAQs, and inquiry CTAs." },
      { question: "Can agents track inquiry status?", answer: "Yes. We can build a CRM flow for new, contacted, quoted, and booked inquiries." },
    ],
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    built: "Property pages, buyer lead pipeline, follow-ups",
    result: "Serious buyers tracked first",
    tags: ["Landing Page", "Leads", "CRM"],
    accent: "from-blue-500 to-cyan-500",
    seoTitle: "Real Estate CRM, Property Website & Lead Management | Karobar Jadeed",
    seoDescription:
      "Real estate CRM, property landing pages, buyer lead capture, WhatsApp follow-ups, and website development for agencies and consultants.",
    detail:
      "We build property websites, landing pages, WhatsApp lead capture flows, and CRM pipelines for real estate teams.",
    problem: "Property teams often receive many low-context inquiries and struggle to separate serious buyers from casual browsers.",
    solution:
      "We create structured property pages and lead forms that collect useful details and send inquiries into a follow-up pipeline.",
    features: ["Property landing pages", "Buyer qualification forms", "WhatsApp inquiry routing", "Lead status pipeline", "Campaign reporting"],
    exampleWorkflow: ["Buyer views property", "Lead form captures budget", "WhatsApp message starts", "CRM assigns status", "Agent follows up"],
    recommendedServices: ["website-development", "crm-lead-management", "whatsapp-automation", "seo-google-business-profile"],
    cta: "Build a real estate lead CRM",
    faqs: [
      { question: "Can you build property pages?", answer: "Yes. We can create pages for projects, listings, locations, features, and lead capture." },
      { question: "Can leads be filtered?", answer: "Yes. Forms can capture budget, city, property type, and urgency to help qualify buyers." },
    ],
  },
  {
    title: "Ecommerce Stores",
    slug: "ecommerce-stores",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    built: "Storefronts, product flow, order alerts",
    result: "Cleaner online selling",
    tags: ["Store", "Products", "Orders"],
    accent: "from-fuchsia-500 to-violet-600",
    seoTitle: "Ecommerce Website Development for Online Stores | Karobar Jadeed",
    seoDescription:
      "Ecommerce website development, product pages, order flows, customer notifications, SEO-friendly store setup, and automation support.",
    detail:
      "We build ecommerce websites with clear product pages, smooth inquiry or checkout flows, order notifications, and growth-ready structure.",
    problem: "Many stores depend only on social media, which makes product discovery, trust building, and order tracking harder.",
    solution:
      "A professional ecommerce website gives your products a searchable home and organizes the buying journey from product view to follow-up.",
    features: ["Product catalog", "Order or inquiry flow", "WhatsApp sales support", "SEO-friendly category pages", "Customer follow-up automation"],
    exampleWorkflow: ["Customer views product", "Order or inquiry is submitted", "Notification is sent", "Customer is tracked", "Follow-up or review request is sent"],
    recommendedServices: ["ecommerce-development", "website-development", "whatsapp-automation", "seo-google-business-profile"],
    cta: "Launch an ecommerce website",
    faqs: [
      { question: "Can you build a full online store?", answer: "Yes. We can create catalog, product, cart, checkout, or inquiry-based ecommerce flows." },
      { question: "Can products be SEO optimized?", answer: "Yes. We structure categories, product copy, metadata, and internal links for search visibility." },
    ],
  },
  {
    title: "Service Businesses",
    slug: "service-businesses",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    built: "Lead forms, estimates, bookings, follow-ups",
    result: "More organized sales",
    tags: ["Leads", "CRM", "Reports"],
    accent: "from-slate-700 to-emerald-600",
    seoTitle: "Service Business Website, Booking & Lead Management | Karobar Jadeed",
    seoDescription:
      "Websites, booking systems, estimate requests, lead CRM, and automation for service businesses in Pakistan and international markets.",
    detail:
      "We help service businesses capture leads, manage quote requests, send follow-ups, and present services professionally online.",
    problem: "Service providers often lose inquiries when calls, DMs, forms, and WhatsApp messages are not connected to one process.",
    solution:
      "We build service pages, quote forms, CRM workflows, and WhatsApp follow-ups that make the sales process easier to manage.",
    features: ["Service landing pages", "Quote request forms", "Booking CTAs", "Lead CRM", "Follow-up reminders"],
    exampleWorkflow: ["Visitor chooses service", "Quote request is submitted", "CRM saves details", "WhatsApp follow-up begins", "Team sends proposal"],
    recommendedServices: ["website-development", "crm-lead-management", "whatsapp-automation", "custom-software-development"],
    cta: "Build a service lead system",
    faqs: [
      { question: "Can you add quote request forms?", answer: "Yes. We can create forms that capture service needs, budget, and timeline." },
      { question: "Can the system work for international clients?", answer: "Yes. We build remote-friendly flows with online consultation and follow-up options." },
    ],
  },
  {
    title: "Gyms & Fitness",
    slug: "gyms-fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    built: "Membership pages, trial bookings, reminders",
    result: "More trial bookings",
    tags: ["Membership", "Booking", "Reminders"],
    accent: "from-red-500 to-orange-500",
    seoTitle: "Gym Website, Membership & Trial Booking System | Karobar Jadeed",
    seoDescription:
      "Gym websites, membership pages, trial booking systems, WhatsApp reminders, CRM, and lead follow-up automation for fitness businesses.",
    detail:
      "We help gyms capture trial bookings, present membership plans, automate reminders, and track interested members.",
    problem: "Gyms need fast lead response and consistent membership reminders, but manual follow-ups are easy to miss.",
    solution:
      "A website with membership pages, trial booking, WhatsApp reminders, and CRM keeps prospects and members organized.",
    features: ["Membership plan pages", "Trial booking form", "WhatsApp reminders", "Lead tracking", "Offer campaign pages"],
    exampleWorkflow: ["Prospect checks plans", "Trial booking is submitted", "Reminder is sent", "Lead enters CRM", "Staff follows up after visit"],
    recommendedServices: ["website-development", "whatsapp-automation", "crm-lead-management"],
    cta: "Create a gym booking system",
    faqs: [
      { question: "Can members get reminders?", answer: "Yes. We can design reminder workflows for trials, renewals, and offers." },
      { question: "Can you show packages online?", answer: "Yes. Membership packages can be presented clearly with CTAs and FAQs." },
    ],
  },
  {
    title: "Salons & Beauty",
    slug: "salons-beauty",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    built: "Service menu, booking, customer reminders",
    result: "More repeat visits",
    tags: ["Booking", "Menu", "WhatsApp"],
    accent: "from-pink-500 to-fuchsia-500",
    seoTitle: "Salon Website, Service Menu & Appointment Booking | Karobar Jadeed",
    seoDescription:
      "Salon websites, service menus, appointment booking, WhatsApp reminders, customer follow-ups, and local SEO support for beauty businesses.",
    detail:
      "We help salons show services, capture bookings, remind customers, and build a professional online presence.",
    problem: "Salon customers need simple booking and clear service details, while staff need a better way to manage appointments and repeat visits.",
    solution:
      "We create service menus, booking forms, WhatsApp reminders, and customer follow-up flows for beauty businesses.",
    features: ["Service menu pages", "Appointment request form", "WhatsApp reminders", "Offer campaigns", "Google Business Profile support"],
    exampleWorkflow: ["Customer views services", "Appointment request is sent", "WhatsApp confirmation is shared", "CRM saves visit", "Follow-up offer is sent"],
    recommendedServices: ["website-development", "whatsapp-automation", "crm-lead-management", "seo-google-business-profile"],
    cta: "Build a salon booking flow",
    faqs: [
      { question: "Can customers book from the website?", answer: "Yes. We can build appointment request forms and WhatsApp booking CTAs." },
      { question: "Can you support local SEO?", answer: "Yes. We can improve pages, metadata, and Google Business Profile readiness." },
    ],
  },
  {
    title: "Legal & Consultants",
    slug: "legal-consultants",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    built: "Credibility pages, consultation booking, lead tracking",
    result: "More qualified inquiries",
    tags: ["Consultation", "Booking", "Leads"],
    accent: "from-slate-800 to-blue-700",
    seoTitle: "Consultant Website & Consultation Booking System | Karobar Jadeed",
    seoDescription:
      "Professional websites, consultation booking, lead forms, CRM, and follow-up automation for legal, advisory, and consulting businesses.",
    detail:
      "We help consultants, legal professionals, and advisors present expertise, capture inquiries, and manage consultation bookings.",
    problem: "Consultants need trust, clarity, and organized inquiries, especially when clients compare multiple providers online.",
    solution:
      "We build credibility-focused websites, consultation forms, booking CTAs, and CRM workflows for professional service teams.",
    features: ["Authority pages", "Consultation booking", "Lead qualification forms", "Case or service pages", "Follow-up reminders"],
    exampleWorkflow: ["Client reads service page", "Consultation request is submitted", "Details enter CRM", "WhatsApp confirmation is sent", "Consultation is booked"],
    recommendedServices: ["website-development", "crm-lead-management", "whatsapp-automation", "seo-google-business-profile"],
    cta: "Create a consultation system",
    faqs: [
      { question: "Can the site avoid showing a home address?", answer: "Yes. We can publish phone, email, website, and service area without a public home address." },
      { question: "Can you make the site look professional?", answer: "Yes. We focus on credibility, clarity, accessibility, and conversion." },
    ],
  },
  {
    title: "Super Stores",
    slug: "super-stores",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1200&q=80",
    built: "Promotions, loyalty, customer lists, reporting",
    result: "Better customer retention",
    tags: ["Promos", "Loyalty", "Reports"],
    accent: "from-emerald-500 to-lime-500",
    seoTitle: "Super Store Digital System, Promotions & Customer CRM | Karobar Jadeed",
    seoDescription:
      "Digital systems for super stores, including promotion pages, customer lists, loyalty reminders, inventory workflows, and reporting dashboards.",
    detail:
      "We help super stores organize promotions, customer contact lists, loyalty reminders, and basic reporting workflows.",
    problem: "Retail teams often run promotions manually and have limited visibility into repeat customers and campaign follow-ups.",
    solution:
      "A digital promotion and customer workflow helps stores communicate offers, save customer data, and review simple reports.",
    features: ["Promotion landing pages", "Customer lists", "WhatsApp offers", "Basic reporting", "Inventory workflow planning"],
    exampleWorkflow: ["Store publishes offer", "Customer asks through WhatsApp", "Contact is saved", "Offer list is updated", "Performance is reviewed"],
    recommendedServices: ["whatsapp-automation", "crm-lead-management", "custom-software-development", "website-development"],
    cta: "Create a retail customer system",
    faqs: [
      { question: "Can promotions be sent through WhatsApp?", answer: "Yes. We can design opt-in-friendly WhatsApp campaign flows." },
      { question: "Can you build custom retail software?", answer: "Yes. We can scope customer, sales, inventory, and reporting features." },
    ],
  },
  {
    title: "Small Businesses",
    slug: "small-businesses",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    built: "Starter websites, WhatsApp leads, CRM, automation",
    result: "A clearer digital foundation",
    tags: ["Website", "WhatsApp", "Automation"],
    accent: "from-emerald-500 to-blue-600",
    seoTitle: "Small Business Website, CRM & Automation Services | Karobar Jadeed",
    seoDescription:
      "Affordable website development, WhatsApp automation, CRM, Google Business Profile, and custom software support for small businesses.",
    detail:
      "We help small businesses create a professional online presence, capture leads, reply faster, and manage follow-ups without unnecessary complexity.",
    problem: "Small businesses often depend on scattered social pages, manual replies, and informal follow-ups that become hard to scale.",
    solution:
      "We build a practical foundation: website, WhatsApp CTA, lead capture, CRM, and simple automation that can grow over time.",
    features: ["Professional website", "WhatsApp CTA", "Lead form", "Basic CRM", "Google Business Profile support"],
    exampleWorkflow: ["Customer visits website", "Inquiry goes to WhatsApp", "Lead is saved", "Follow-up reminder is created", "Owner tracks next step"],
    recommendedServices: ["website-development", "whatsapp-automation", "crm-lead-management", "seo-google-business-profile"],
    cta: "Start your digital foundation",
    faqs: [
      { question: "Can we start small?", answer: "Yes. We can begin with the most useful website and lead setup, then expand later." },
      { question: "Do you work outside Pakistan?", answer: "Yes. We support clients in Pakistan and international markets remotely." },
    ],
  },
];

export const featuredIndustries = industries.slice(0, 6);
