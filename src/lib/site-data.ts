import {
  Code2,
  Cpu,
  Layers,
  Megaphone,
  PenTool,
  Server,
  type LucideIcon,
} from "lucide-react";

export const BRAND = {
  name: "SOSync AI Tech",
  legal: "SOSync AI Tech IT Solutions",
  tagline: "Innovate. Integrate. Elevate. — Digital Solutions for a Smarter Tomorrow",
};

export type Settings = {
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  address: string;
  hours: string;
  announcementText: string;
  announcementEnabled: boolean;
  maintenanceMode: boolean;
};

export const DEFAULT_SETTINGS: Settings = {
  phonePrimary: "+91 91724 03714",
  phoneSecondary: "+91 70043 30655",
  email: "support@sosyncaitech.in",
  address: "Kharadi, Pune, Maharashtra 411014, India",
  hours: "Mon–Sat, 9:30 AM – 7:00 PM IST",
  announcementText:
    "Limited slots: Book a ₹1 demo consultation and get 6 months of free technical support.",
  announcementEnabled: true,
  maintenanceMode: false,
};

export const STORAGE_KEYS = {
  settings: "sosync_settings",
  enquiries: "sosync_enquiries",
  callbacks: "sosync_callbacks",
  demos: "sosync_demo_bookings",
  projects: "sosync_projects",
  testimonials: "sosync_testimonials",
  referrals: "sosync_referrals",
  auth: "sosync_admin_auth",
};

export type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  details: string;
  status: "Pending" | "Contacted" | "In Progress" | "Closed";
  createdAt: string;
};

export type Callback = {
  id: string;
  name: string;
  phone: string;
  status: "Pending" | "Called";
  createdAt: string;
};

export type DemoBooking = {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredAt: string;
  notes: string;
  status: "Pending" | "Confirmed" | "Completed";
  createdAt: string;
};

export type Project = {
  id: string;
  title: string;
  category: "E-Commerce" | "ERP / Software" | "Portals";
  image: string;
  summary: string;
  metrics: { label: string; value: string }[];
  tech: string[];
  featured: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  company: string;
  rating: number;
  review: string;
  approved: boolean;
  createdAt: string;
};

export type Referral = {
  id: string;
  name: string;
  email: string;
  code: string;
  createdAt: string;
};

export type Service = {
  id: string;
  title: string;
  icon: LucideIcon;
  blurb: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    id: "web",
    title: "Website Development",
    icon: Code2,
    blurb:
      "Conversion-focused corporate sites, e-commerce storefronts and headless web apps built for speed.",
    features: [
      "Business & corporate websites",
      "E-commerce with payment gateways",
      "Headless CMS integrations",
      "Core Web Vitals & SEO tuning",
      "Progressive web apps",
    ],
  },
  {
    id: "software",
    title: "Software & ERP",
    icon: Layers,
    blurb:
      "Custom software, ERP and CRM platforms that replace spreadsheets with reliable workflows.",
    features: [
      "Custom ERP & CRM builds",
      "Inventory, billing & HRMS modules",
      "Role-based admin dashboards",
      "Third-party API integrations",
      "Reporting & analytics suites",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise IT",
    icon: Server,
    blurb:
      "Cloud infrastructure, DevOps and managed IT operations engineered for uptime and security.",
    features: [
      "AWS / Azure cloud architecture",
      "CI/CD pipelines & containerisation",
      "Security audits & hardening",
      "Database design & migration",
      "24×7 monitoring & managed support",
    ],
  },
  {
    id: "marketing",
    title: "Growth Marketing",
    icon: Megaphone,
    blurb:
      "Performance marketing that turns traffic into qualified pipeline for B2B and B2C brands.",
    features: [
      "Technical & local SEO",
      "Google & Meta paid campaigns",
      "Social media management",
      "Email & WhatsApp automation",
      "Analytics dashboards & reporting",
    ],
  },
  {
    id: "design",
    title: "Graphic Design",
    icon: PenTool,
    blurb:
      "Brand identity and product design systems that make your business instantly recognisable.",
    features: [
      "Logo & brand identity kits",
      "UI/UX design systems",
      "Marketing & ad creatives",
      "Packaging & print collateral",
      "Motion graphics & explainer videos",
    ],
  },
  {
    id: "ai",
    title: "AI Services & Automation",
    icon: Cpu,
    blurb:
      "Applied AI — assistants, RAG search and workflow automation wired into your existing stack.",
    features: [
      "AI chat assistants & copilots",
      "RAG knowledge search",
      "Document & invoice extraction",
      "Predictive analytics models",
      "Workflow & back-office automation",
    ],
  },
];

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "morpankh",
    title: "Morpankh Saree",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Ethnic wear storefront with catalogue merchandising, coupon engine and Razorpay checkout.",
    metrics: [
      { label: "Conversion lift", value: "+38%" },
      { label: "Page load", value: "1.2s" },
      { label: "Orders / month", value: "1.4K" },
    ],
    tech: ["React", "Node.js", "MongoDB", "Razorpay"],
    featured: true,
  },
  {
    id: "spart",
    title: "SP Art Hubs",
    category: "Portals",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Artist showcase portal with gallery management, commission enquiries and CRM sync.",
    metrics: [
      { label: "Enquiries", value: "+52%" },
      { label: "Gallery items", value: "800+" },
      { label: "Bounce rate", value: "-24%" },
    ],
    tech: ["Next.js", "Tailwind", "Supabase"],
    featured: true,
  },
  {
    id: "suraj",
    title: "Suraj Naturo Dry Fruits",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=1200&q=80",
    summary:
      "D2C grocery commerce with subscription packs, GST invoicing and delivery zone pricing.",
    metrics: [
      { label: "Repeat orders", value: "44%" },
      { label: "AOV", value: "+31%" },
      { label: "SKUs", value: "260" },
    ],
    tech: ["React", "Express", "PostgreSQL", "Razorpay"],
    featured: false,
  },
  {
    id: "sonai-school",
    title: "Sonai Residential World School",
    category: "Portals",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Institutional website with admissions workflow, notice board and parent communication hub.",
    metrics: [
      { label: "Admission leads", value: "+61%" },
      { label: "Uptime", value: "99.9%" },
      { label: "Pages", value: "45" },
    ],
    tech: ["Next.js", "Node.js", "MySQL"],
    featured: true,
  },
  {
    id: "karyon",
    title: "Karyon College",
    category: "ERP / Software",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Campus management ERP handling records, fee collection, attendance and staff payroll.",
    metrics: [
      { label: "Manual hours saved", value: "120/mo" },
      { label: "Modules", value: "9" },
      { label: "Users", value: "2.3K" },
    ],
    tech: ["React", "Python", "PostgreSQL", "Docker"],
    featured: false,
  },
  {
    id: "sonai-group",
    title: "Sona I Group of Institutes",
    category: "ERP / Software",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Multi-campus administration suite with unified reporting and PowerBI insight dashboards.",
    metrics: [
      { label: "Campuses", value: "4" },
      { label: "Reports automated", value: "35" },
      { label: "Data accuracy", value: "99%" },
    ],
    tech: ["React", "Node.js", "PowerBI", "AWS"],
    featured: true,
  },
];

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rohit Menon",
    company: "Menon Logistics",
    rating: 5,
    review:
      "SOSync rebuilt our dispatch software in three weeks. Clean handover, full source ownership and support that actually answers.",
    approved: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "t2",
    name: "Priya Kulkarni",
    company: "Morpankh Saree",
    rating: 5,
    review:
      "Our storefront finally loads fast and sells. Orders nearly doubled in the first quarter after launch.",
    approved: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "t3",
    name: "Imran Shaikh",
    company: "Adarsh Retail Group",
    rating: 4,
    review:
      "The AI invoice automation saved our accounts team days every month. Very practical engineering team.",
    approved: true,
    createdAt: new Date().toISOString(),
  },
];

export const TEAM_LEADERSHIP = [
  {
    name: "Shashant Shekhar",
    role: "Founder & CEO",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Omkar Bachanatti",
    role: "Chief Technology Officer",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sanika Chougule",
    role: "Head of Design",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vivek Dhumal",
    role: "Head of Delivery",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Aslam Pathan",
    role: "Head of Growth",
    photo:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=600&q=80",
  },
];

export const TEAM_SQUAD = [
  {
    name: "Tridev Sharma",
    role: "Senior Full Stack Engineer",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sharik Ahmed",
    role: "Senior Full Stack Engineer",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vicky Kumar",
    role: "Cloud & DevOps Engineer",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ashish Ranjan",
    role: "AI / ML Engineer",
    photo:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Anurag Kumar",
    role: "QA & Automation Lead",
    photo:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=600&q=80",
  },
];

export function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
