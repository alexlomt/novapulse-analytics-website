const baseURL = "https://novapulse.io";

const meta = {
  home: {
    path: "/",
    title: "NovaPulse Analytics — Real-Time Data Intelligence",
    description:
      "NovaPulse Analytics delivers real-time data intelligence with powerful dashboards, predictive insights, and seamless integrations. Trusted by 10,000+ teams worldwide.",
    image: "/images/og/home.jpg",
    canonical: "https://novapulse.io",
    robots: "index,follow",
    alternates: [{ href: "https://novapulse.io", hrefLang: "en" }],
  },
  features: {
    path: "/features",
    title: "Features — NovaPulse Analytics",
    description:
      "Explore NovaPulse Analytics features: real-time dashboards, predictive analytics, custom reports, anomaly detection, and 200+ integrations.",
    image: "/images/og/features.jpg",
    robots: "index,follow",
  },
  pricing: {
    path: "/pricing",
    title: "Pricing — NovaPulse Analytics",
    description:
      "Simple, transparent pricing for teams of all sizes. Start free, scale as you grow with NovaPulse Analytics.",
    image: "/images/og/pricing.jpg",
    robots: "index,follow",
  },
  contact: {
    path: "/contact",
    title: "Contact Us — NovaPulse Analytics",
    description:
      "Get in touch with our team. We'd love to hear about your analytics needs and help you get started with NovaPulse.",
    image: "/images/og/contact.jpg",
    robots: "index,follow",
  },
  about: {
    path: "/about",
    title: "About — NovaPulse Analytics",
    description:
      "Meet the team behind NovaPulse Analytics. Learn about our mission to democratize data intelligence for every organization.",
    image: "/images/og/about.jpg",
    robots: "index,follow",
  },
};

const schema = {
  logo: "/trademarks/logo.svg",
  type: "Organization",
  name: "NovaPulse Analytics",
  description: meta.home.description,
  email: "hello@novapulse.io",
};

export { meta, schema, baseURL };
