export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    title: "Products",
    href: "/products",
    description: "Explore our complete range of premium lubricants",
  },
  {
    title: "Applications",
    href: "/applications",
    description: "Solutions for every industry and use case",
  },
  {
    title: "About",
    href: "/about",
    description: "Learn about our heritage and commitment to excellence",
  },
  {
    title: "Resources",
    href: "/resources",
    description: "Technical data sheets, guides, and documentation",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with our team",
  },
];

export const footerNavigation = {
  products: {
    title: "Products",
    links: [
      { title: "Engine Oils", href: "/products?category=engine-oils" },
      { title: "Transmission Fluids", href: "/products?category=transmission" },
      { title: "Industrial Lubricants", href: "/products?category=industrial" },
      { title: "Specialty Products", href: "/products?category=specialty" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Applications", href: "/applications" },
      { title: "Resources", href: "/resources" },
      { title: "Contact", href: "/contact" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { title: "Technical Support", href: "/contact" },
      { title: "Find a Distributor", href: "/contact?type=distributor" },
      { title: "Request a Quote", href: "/contact?type=quote" },
      { title: "Data Sheets", href: "/resources" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  },
};
