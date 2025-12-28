"use client";

import { Header, Footer, Container } from "@/components/layout";
import {
  Hero,
  BentoGrid,
  FeatureCard,
  StatCard,
  MediaCard,
  CTACard,
  ProductGrid,
  TrustStrip,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { siteConfig } from "@/data/site";
import { getFeaturedProducts } from "@/data/products";
import Link from "next/link";
import {
  FlaskConical,
  Gauge,
  Clock,
  Globe,
  ArrowRight,
  Zap,
  Shield,
  Droplets,
} from "lucide-react";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <Hero
          subtitle="Premium Automotive Lubricants"
          title="Engineered for Peak Performance"
          description="Advanced molecular technology meets decades of expertise. Kashe Energy delivers lubricants that protect, perform, and endure."
          primaryCTA={{ text: "Explore Products", href: "/products" }}
          secondaryCTA={{ text: "Request a Quote", href: "/contact?type=quote" }}
          showTrustBadges
        />

        {/* Trust Strip */}
        <TrustStrip certifications={siteConfig.certifications.slice(0, 4)} />

        {/* Features Bento Grid */}
        <section className="py-20 md:py-32 bg-[#333333]">
          <Container>
            <FadeInUp className="text-center mb-16">
              <h2
                className="text-white mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Why Choose Kashe Energy
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Our commitment to excellence drives every formulation we create.
              </p>
            </FadeInUp>

            <BentoGrid>
              {/* Feature Cards */}
              <FeatureCard
                icon={FlaskConical}
                title="Advanced Formulation"
                description="Cutting-edge molecular technology for superior engine protection and performance."
                size="md"
              />

              {/* Media Card */}
              <MediaCard
                src="/images/oil-texture.jpg"
                alt="Oil texture"
                size="lg"
                overlay={
                  <div className="text-white">
                    <span
                      className="text-xs uppercase tracking-wider text-white/60"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Precision Engineered
                    </span>
                    <h3
                      className="text-2xl font-semibold mt-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Molecular Excellence
                    </h3>
                  </div>
                }
              />

              <FeatureCard
                icon={Gauge}
                title="Extreme Performance"
                description="Engineered to perform in the most demanding conditions and temperatures."
                size="md"
              />

              {/* Stats */}
              {siteConfig.stats.slice(0, 2).map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  size="sm"
                />
              ))}

              <FeatureCard
                icon={Clock}
                title="Extended Intervals"
                description="Longer drain intervals mean reduced maintenance costs and downtime."
                size="md"
              />

              <FeatureCard
                icon={Globe}
                title="Global Standards"
                description="Exceeds API, ACEA, and OEM specifications worldwide."
                size="md"
              />

              {/* CTA Card */}
              <CTACard
                title="Ready to upgrade?"
                description="Find the perfect lubricant for your needs."
                buttonText="View Products"
                href="/products"
                size="md"
              />

              {/* More Stats */}
              {siteConfig.stats.slice(2, 4).map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  size="sm"
                />
              ))}
            </BentoGrid>
          </Container>
        </section>

        {/* Featured Products */}
        <section className="py-20 md:py-32 bg-background">
          <Container>
            <FadeInUp className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <h2
                  className="text-foreground mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Featured Products
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Discover our most popular lubricants, trusted by professionals
                  and enthusiasts worldwide.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/products">
                  View All Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </FadeInUp>

            <ProductGrid products={featuredProducts} columns={3} />
          </Container>
        </section>

        {/* About Preview / Story Section */}
        <section className="py-20 md:py-32 bg-[#333333]">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <FadeInUp>
                <span
                  className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Our Story
                </span>
                <h2
                  className="text-white mb-6"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Four Decades of Innovation
                </h2>
                <p className="text-xl text-white/70 mb-6">
                  Since 1984, Kashe Energy has been at the forefront of lubricant
                  technology. Our relentless pursuit of excellence has made us a
                  trusted partner for industries worldwide.
                </p>
                <p className="text-white/60 mb-8">
                  From our state-of-the-art research facilities to our global
                  distribution network, every aspect of our operation is designed
                  to deliver the highest quality products and service.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href="/about">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline-light" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </FadeInUp>

              {/* Visual */}
              <FadeInUp delay={0.2}>
                <div className="relative">
                  {/* Main image placeholder */}
                  <div className="aspect-[4/3] rounded-[20px] bg-gradient-to-br from-[#444] to-[#222] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-accent/20 blur-3xl" />
                    </div>
                  </div>

                  {/* Floating stat card */}
                  <div className="absolute -bottom-6 -left-6 bg-card rounded-[20px] p-6 shadow-xl">
                    <span
                      className="block text-4xl font-bold text-accent mb-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      40+
                    </span>
                    <span
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Years of Excellence
                    </span>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </Container>
        </section>

        {/* Applications Preview */}
        <section className="py-20 md:py-32 bg-background">
          <Container>
            <FadeInUp className="text-center mb-16">
              <h2
                className="text-foreground mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Solutions for Every Industry
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From automotive to industrial, we have the right lubricant for
                your specific application.
              </p>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Automotive",
                  description: "Passenger cars, trucks, and motorcycles",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Commercial Fleet",
                  description: "Heavy-duty trucks and fleet vehicles",
                },
                {
                  icon: <Droplets className="w-8 h-8" />,
                  title: "Industrial",
                  description: "Manufacturing and machinery",
                },
                {
                  icon: <Gauge className="w-8 h-8" />,
                  title: "Motorsport",
                  description: "Racing and performance applications",
                },
              ].map((app, index) => (
                <StaggerItem key={index}>
                  <Link
                    href="/applications"
                    className="group block bg-card rounded-[20px] p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      {app.icon}
                    </div>
                    <h3
                      className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {app.title}
                    </h3>
                    <p className="text-muted-foreground">{app.description}</p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeInUp className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link href="/applications">
                  View All Applications
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </FadeInUp>
          </Container>
        </section>

        {/* Testimonial */}
        <section className="py-20 md:py-32 bg-card">
          <Container>
            <FadeInUp className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-4xl text-card-foreground mb-8 leading-relaxed">
                &ldquo;Kashe Energy has been our exclusive lubricant partner for over
                15 years. Their products consistently exceed our expectations,
                and their technical support is unmatched.&rdquo;
              </blockquote>
              <div>
                <span
                  className="block font-semibold text-card-foreground"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Michael Torres
                </span>
                <span className="text-muted-foreground">
                  Fleet Manager, Continental Logistics
                </span>
              </div>
            </FadeInUp>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 bg-accent">
          <Container>
            <FadeInUp className="text-center">
              <h2
                className="text-white mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Ready to Experience the Difference?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Join thousands of satisfied customers who trust Kashe Energy for
                their lubrication needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                >
                  <Link href="/contact?type=quote">Request a Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline-light"
                  asChild
                >
                  <Link href="/contact?type=distributor">Become a Distributor</Link>
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
