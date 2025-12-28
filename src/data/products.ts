export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  specs: Record<string, string>;
  applications: string[];
  image: string;
  featured?: boolean;
  datasheet?: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "engine-oils",
    name: "Engine Oils",
    description:
      "Premium synthetic and conventional engine oils for maximum protection",
    image: "/images/products/category-engine-oils.jpg",
  },
  {
    slug: "transmission",
    name: "Transmission Fluids",
    description:
      "Advanced transmission fluids for smooth, reliable gear changes",
    image: "/images/products/category-transmission.jpg",
  },
  {
    slug: "industrial",
    name: "Industrial Lubricants",
    description:
      "Heavy-duty lubricants for industrial machinery and equipment",
    image: "/images/products/category-industrial.jpg",
  },
  {
    slug: "specialty",
    name: "Specialty Products",
    description:
      "Specialized lubricants for unique applications and requirements",
    image: "/images/products/category-specialty.jpg",
  },
];

export const products: Product[] = [
  // Engine Oils
  {
    slug: "kashe-ultra-0w-20",
    name: "Kashe Ultra 0W-20",
    category: "Engine Oils",
    categorySlug: "engine-oils",
    shortDescription:
      "Full synthetic engine oil for modern fuel-efficient engines",
    description:
      "Kashe Ultra 0W-20 is a premium full synthetic motor oil engineered with advanced molecular technology. Designed for the latest generation of fuel-efficient engines, it provides exceptional cold-start protection and maintains optimal viscosity across extreme temperature ranges.",
    benefits: [
      "Superior cold-start protection down to -40°C",
      "Enhanced fuel economy up to 4% improvement",
      "Extended drain intervals up to 15,000 miles",
      "Excellent wear protection for turbo engines",
      "Low SAPS formulation for catalyst compatibility",
    ],
    specs: {
      "SAE Grade": "0W-20",
      "API Rating": "SP/SN Plus",
      ILSAC: "GF-6A",
      "Pour Point": "-48°C",
      "Flash Point": "230°C",
      "Viscosity @ 100°C": "8.7 cSt",
    },
    applications: [
      "Modern gasoline engines",
      "Hybrid vehicles",
      "Turbocharged engines",
      "Direct injection engines",
    ],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=600&fit=crop",
    featured: true,
    datasheet: "/datasheets/kashe-ultra-0w20.pdf",
  },
  {
    slug: "kashe-pro-5w-30",
    name: "Kashe Pro 5W-30",
    category: "Engine Oils",
    categorySlug: "engine-oils",
    shortDescription:
      "High-performance synthetic oil for demanding driving conditions",
    description:
      "Kashe Pro 5W-30 delivers outstanding protection for high-performance and European vehicles. Its advanced additive package provides superior cleanliness and wear protection under the most demanding driving conditions.",
    benefits: [
      "Meets stringent European OEM specifications",
      "Outstanding thermal stability",
      "Superior deposit control",
      "Extended engine life protection",
      "Compatible with exhaust after-treatment systems",
    ],
    specs: {
      "SAE Grade": "5W-30",
      "API Rating": "SP",
      ACEA: "C3",
      "BMW Approval": "LL-04",
      "MB Approval": "229.51",
      "VW Approval": "504.00/507.00",
    },
    applications: [
      "European vehicles",
      "Diesel particulate filter equipped engines",
      "High-performance gasoline engines",
      "Fleet vehicles",
    ],
    image: "https://images.unsplash.com/photo-1607603750909-408e193868c7?w=600&h=600&fit=crop",
    featured: true,
    datasheet: "/datasheets/kashe-pro-5w30.pdf",
  },
  {
    slug: "kashe-max-5w-40",
    name: "Kashe Max 5W-40",
    category: "Engine Oils",
    categorySlug: "engine-oils",
    shortDescription:
      "Ultimate protection for high-stress performance engines",
    description:
      "Kashe Max 5W-40 is engineered for ultimate protection in high-stress performance applications. Its robust formulation withstands extreme temperatures and provides exceptional shear stability for racing and performance vehicles.",
    benefits: [
      "Extreme high-temperature stability",
      "Superior shear resistance",
      "Outstanding wear protection",
      "Excellent oil pressure maintenance",
      "Reduced oil consumption",
    ],
    specs: {
      "SAE Grade": "5W-40",
      "API Rating": "SN/CF",
      ACEA: "A3/B4",
      "Porsche Approval": "A40",
      "Ferrari Approval": "Yes",
      "Viscosity @ 100°C": "14.2 cSt",
    },
    applications: [
      "Sports cars",
      "Performance tuned engines",
      "Track day vehicles",
      "High-performance European vehicles",
    ],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop",
    featured: true,
    datasheet: "/datasheets/kashe-max-5w40.pdf",
  },
  // Transmission Fluids
  {
    slug: "kashe-atf-pro",
    name: "Kashe ATF Pro",
    category: "Transmission Fluids",
    categorySlug: "transmission",
    shortDescription:
      "Multi-vehicle automatic transmission fluid",
    description:
      "Kashe ATF Pro is a premium multi-vehicle automatic transmission fluid designed for smooth, reliable shifting. Its advanced friction modifier technology ensures optimal clutch performance and extended transmission life.",
    benefits: [
      "Smooth, consistent shifting",
      "Extended transmission life",
      "Wide temperature range performance",
      "Compatible with most modern ATFs",
      "Excellent oxidation resistance",
    ],
    specs: {
      Type: "Full Synthetic ATF",
      "Color": "Red",
      "Pour Point": "-51°C",
      "Flash Point": "210°C",
      "Viscosity @ 100°C": "7.3 cSt",
    },
    applications: [
      "Automatic transmissions",
      "CVT transmissions (check manual)",
      "Power steering systems",
      "Hydraulic systems",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    featured: false,
    datasheet: "/datasheets/kashe-atf-pro.pdf",
  },
  {
    slug: "kashe-dct-fluid",
    name: "Kashe DCT Fluid",
    category: "Transmission Fluids",
    categorySlug: "transmission",
    shortDescription:
      "Specialized fluid for dual-clutch transmissions",
    description:
      "Kashe DCT Fluid is specifically engineered for modern dual-clutch transmission systems. Its unique formulation provides the perfect balance of friction characteristics for lightning-fast, smooth shifts.",
    benefits: [
      "Optimized for DCT clutch engagement",
      "Fast, precise shifts",
      "Superior thermal stability",
      "Extended clutch life",
      "Reduced shudder and noise",
    ],
    specs: {
      Type: "Full Synthetic DCT",
      "Color": "Green",
      "Pour Point": "-45°C",
      "Flash Point": "220°C",
      "Kinematic Viscosity": "7.8 cSt @ 100°C",
    },
    applications: [
      "VW/Audi DSG transmissions",
      "BMW DCT",
      "Ford PowerShift",
      "Other dual-clutch systems",
    ],
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=600&fit=crop",
    featured: false,
    datasheet: "/datasheets/kashe-dct-fluid.pdf",
  },
  // Industrial Lubricants
  {
    slug: "kashe-hydraulic-46",
    name: "Kashe Hydraulic 46",
    category: "Industrial Lubricants",
    categorySlug: "industrial",
    shortDescription:
      "Premium anti-wear hydraulic oil for industrial systems",
    description:
      "Kashe Hydraulic 46 is a premium anti-wear hydraulic fluid designed for high-pressure industrial hydraulic systems. Its zinc-based additive package provides exceptional pump protection and system efficiency.",
    benefits: [
      "Excellent anti-wear protection",
      "Superior oxidation stability",
      "Outstanding water separation",
      "Extended equipment life",
      "Reduced maintenance costs",
    ],
    specs: {
      "ISO Grade": "46",
      Type: "Anti-Wear Hydraulic",
      "Viscosity @ 40°C": "46 cSt",
      "Pour Point": "-27°C",
      "Zinc Content": "0.09%",
    },
    applications: [
      "Industrial hydraulic systems",
      "Mobile equipment",
      "Manufacturing machinery",
      "Injection molding machines",
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop",
    featured: false,
    datasheet: "/datasheets/kashe-hydraulic-46.pdf",
  },
  // Specialty Products
  {
    slug: "kashe-racing-10w-60",
    name: "Kashe Racing 10W-60",
    category: "Specialty Products",
    categorySlug: "specialty",
    shortDescription:
      "Competition-grade racing oil for extreme performance",
    description:
      "Kashe Racing 10W-60 is our competition-grade racing oil, engineered for the most demanding motorsport applications. Its ultra-robust formulation provides uncompromising protection under extreme stress and temperatures.",
    benefits: [
      "Maximum high-temperature protection",
      "Exceptional film strength",
      "Superior shear stability",
      "Optimized for high-RPM operation",
      "Track-proven performance",
    ],
    specs: {
      "SAE Grade": "10W-60",
      Type: "Full Synthetic Racing",
      "HTHS Viscosity": ">5.0 mPa.s",
      "Flash Point": "248°C",
      "Viscosity @ 100°C": "21.8 cSt",
    },
    applications: [
      "Racing engines",
      "Track day vehicles",
      "High-boost turbo applications",
      "Air-cooled engines",
    ],
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=600&fit=crop",
    featured: true,
    datasheet: "/datasheets/kashe-racing-10w60.pdf",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
