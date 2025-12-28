"use client";

import { Header, Footer, Container } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  Truck,
  Factory,
  Gauge,
  Ship,
  Plane,
  Tractor,
  Bike,
} from "lucide-react";

const applications = [
  {
    icon: <Car className="w-8 h-8" />,
    title: "Passenger Vehicles",
    description:
      "Premium engine oils and fluids for cars, SUVs, and light trucks. Designed for everyday driving and extended protection.",
    products: ["Kashe Ultra 0W-20", "Kashe Pro 5W-30", "Kashe ATF Pro"],
    href: "/products?category=engine-oils",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Commercial Fleet",
    description:
      "Heavy-duty lubricants for trucks, buses, and commercial vehicles. Engineered for long hauls and demanding schedules.",
    products: ["Kashe HD 15W-40", "Kashe Fleet Plus", "Kashe Hydraulic 46"],
    href: "/products?category=industrial",
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Motorsport & Racing",
    description:
      "Competition-grade lubricants for racing engines. Maximum protection under extreme heat and stress.",
    products: ["Kashe Racing 10W-60", "Kashe Max 5W-40", "Kashe DCT Fluid"],
    href: "/products?category=specialty",
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Industrial Manufacturing",
    description:
      "Specialized lubricants for industrial machinery, hydraulic systems, and manufacturing equipment.",
    products: ["Kashe Hydraulic 46", "Kashe Industrial Gear", "Kashe Compressor Oil"],
    href: "/products?category=industrial",
  },
  {
    icon: <Tractor className="w-8 h-8" />,
    title: "Agriculture & Farming",
    description:
      "Rugged lubricants for tractors, harvesters, and farm equipment. Built to handle tough conditions.",
    products: ["Kashe Agri Universal", "Kashe Tractor Fluid", "Kashe Hydraulic 68"],
    href: "/products?category=industrial",
  },
  {
    icon: <Bike className="w-8 h-8" />,
    title: "Motorcycles & Powersports",
    description:
      "High-performance oils for motorcycles, ATVs, and powersports vehicles. Wet clutch compatible formulations.",
    products: ["Kashe Moto 10W-40", "Kashe Moto Racing", "Kashe 2T Synthetic"],
    href: "/products?category=specialty",
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: "Marine",
    description:
      "Corrosion-resistant lubricants for boats, yachts, and marine engines. Formulated for saltwater environments.",
    products: ["Kashe Marine 4-Stroke", "Kashe Marine Gear", "Kashe Marine 2T"],
    href: "/products?category=specialty",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Aviation & Aerospace",
    description:
      "Specialized lubricants meeting strict aviation standards. For piston engines and ground support equipment.",
    products: ["Kashe Aero 100", "Kashe Aero Piston", "Kashe GSE Hydraulic"],
    href: "/products?category=specialty",
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <Header />

      <main>
        <PageHeader
          title="Applications"
          description="Specialized lubricant solutions for every industry and use case."
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Applications", href: "/applications" },
          ]}
        />

        {/* Applications Grid */}
        <section className="py-20 md:py-32 bg-background">
          <Container>
            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <StaggerItem key={index}>
                  <div className="group bg-card rounded-[20px] p-8 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                        {app.icon}
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {app.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {app.description}
                        </p>

                        {/* Sample Products */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {app.products.map((product, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                              style={{ fontFamily: "var(--font-inter)" }}
                            >
                              {product}
                            </span>
                          ))}
                        </div>

                        <Button variant="link" className="p-0 h-auto" asChild>
                          <Link href={app.href}>
                            View Products
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Technical Support */}
        <section className="py-20 md:py-32 bg-card">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInUp>
                <span
                  className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Technical Support
                </span>
                <h2
                  className="text-foreground mb-6"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Not Sure Which Product Is Right?
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Our technical team has decades of experience helping customers
                  find the perfect lubricant solution for their specific needs.
                </p>
                <p className="text-muted-foreground mb-8">
                  Whether you&apos;re managing a fleet of vehicles, maintaining
                  industrial equipment, or looking for the best oil for your
                  personal vehicle, we&apos;re here to help.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href="/contact">
                      Contact Technical Support
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resources">View Data Sheets</Link>
                  </Button>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "24/7", label: "Technical Support" },
                    { value: "500+", label: "OEM Approvals" },
                    { value: "Free", label: "Consultation" },
                    { value: "Global", label: "Distribution" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-[20px] p-6 text-center"
                    >
                      <span
                        className="block text-3xl font-bold text-accent mb-1"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {stat.value}
                      </span>
                      <span
                        className="text-sm text-muted-foreground"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-accent">
          <Container>
            <FadeInUp className="text-center">
              <h2
                className="text-white mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Browse our complete product range or get in touch for a
                personalized recommendation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/products">Browse Products</Link>
                </Button>
                <Button size="lg" variant="outline-light" asChild>
                  <Link href="/contact?type=quote">Request a Quote</Link>
                </Button>
              </div>
            </FadeInUp>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
