"use client";

import { Header, Footer, Container } from "@/components/layout";
import { PageHeader, BentoGrid, StatCard, TrustStrip } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { siteConfig } from "@/data/site";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Award, Users, Globe, FlaskConical } from "lucide-react";

const milestones = [
  { year: "1984", title: "Founded", description: "Kashe Energy established in Houston, Texas" },
  { year: "1992", title: "Global Expansion", description: "Expanded operations to Europe and Asia" },
  { year: "2005", title: "R&D Center", description: "Opened state-of-the-art research facility" },
  { year: "2015", title: "50+ Countries", description: "Reached global distribution milestone" },
  { year: "2020", title: "Green Initiative", description: "Launched eco-friendly product line" },
  { year: "2024", title: "Innovation Award", description: "Industry recognition for molecular technology" },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do",
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Innovation",
    description: "Continuous research drives our product development",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Integrity",
    description: "Honest partnerships built on trust and transparency",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Sustainability",
    description: "Committed to environmental responsibility",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <PageHeader
          title="About Kashe Energy"
          description="Four decades of innovation, excellence, and commitment to the automotive industry."
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ]}
        />

        {/* Story Section */}
        <section className="py-20 md:py-32 bg-background">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeInLeft>
                <span
                  className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Our Story
                </span>
                <h2
                  className="text-foreground mb-6"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  A Legacy of Performance
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 1984 in Houston, Texas, Kashe Energy began with a
                    simple mission: to create the world&apos;s most advanced automotive
                    lubricants. What started as a small research team has grown into
                    a global leader serving over 50 countries.
                  </p>
                  <p>
                    Our journey has been defined by relentless innovation. From
                    pioneering synthetic oil formulations in the 1990s to developing
                    breakthrough molecular technology today, we&apos;ve consistently
                    pushed the boundaries of what&apos;s possible.
                  </p>
                  <p>
                    Today, Kashe Energy is trusted by professional racing teams,
                    major fleet operators, and millions of individual vehicle owners
                    worldwide. Our products don&apos;t just meet industry standards—they
                    define them.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/products">
                      Explore Our Products
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </FadeInLeft>

              <FadeInRight>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-[20px] bg-gradient-to-br from-[#333] to-[#222] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-accent/20 blur-3xl" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-card rounded-[20px] p-6 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Award className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <span
                          className="block text-2xl font-bold text-foreground"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          40+
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Years of Excellence
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInRight>
            </div>
          </Container>
        </section>

        {/* Stats */}
        <TrustStrip variant="dark" certifications={siteConfig.certifications} />

        {/* Mission & Vision */}
        <section className="py-20 md:py-32 bg-card">
          <Container>
            <div className="grid md:grid-cols-2 gap-8">
              <FadeInUp>
                <div className="bg-background rounded-[20px] p-8 md:p-12 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-accent" />
                  </div>
                  <h3
                    className="text-2xl font-semibold text-foreground mb-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To deliver premium lubricant solutions that maximize engine
                    performance, extend equipment life, and provide exceptional
                    value to our customers worldwide.
                  </p>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <div className="bg-background rounded-[20px] p-8 md:p-12 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-accent" />
                  </div>
                  <h3
                    className="text-2xl font-semibold text-foreground mb-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be the global leader in automotive lubricant technology,
                    setting the standard for innovation, quality, and
                    sustainability in our industry.
                  </p>
                </div>
              </FadeInUp>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="py-20 md:py-32 bg-background">
          <Container>
            <FadeInUp className="text-center mb-16">
              <h2
                className="text-foreground mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <StaggerItem key={index}>
                  <div className="bg-card rounded-[20px] p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
                      {value.icon}
                    </div>
                    <h3
                      className="text-xl font-semibold text-card-foreground mb-2"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-32 bg-[#333333]">
          <Container>
            <FadeInUp className="text-center mb-16">
              <h2
                className="text-white mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Our Journey
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Key milestones that shaped our growth.
              </p>
            </FadeInUp>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <FadeInUp key={index} delay={index * 0.1}>
                    <div
                      className={`relative flex items-center gap-8 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Content */}
                      <div
                        className={`flex-1 pl-12 md:pl-0 ${
                          index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                        }`}
                      >
                        <span
                          className="text-accent font-bold text-xl"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {milestone.year}
                        </span>
                        <h3
                          className="text-white text-xl font-semibold mt-1"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {milestone.title}
                        </h3>
                        <p className="text-white/60 mt-2">{milestone.description}</p>
                      </div>

                      {/* Dot */}
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 z-10" />

                      {/* Spacer for alternating layout */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </FadeInUp>
                ))}
              </div>
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
                Partner With Us
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Join thousands of businesses that trust Kashe Energy for their
                lubrication needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline-light" asChild>
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
