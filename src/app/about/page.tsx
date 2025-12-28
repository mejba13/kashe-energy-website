"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { Header, Footer, Container } from "@/components/layout";
import { TrustStrip } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Globe,
  ChevronRight,
  Award,
  Users,
  Building,
  FlaskConical,
  Sparkles,
} from "lucide-react";

const milestones = [
  { year: "1984", title: "Founded", description: "Kashe Energy established in Houston, Texas", icon: Building },
  { year: "1992", title: "Global Expansion", description: "Expanded operations to Europe and Asia", icon: Globe },
  { year: "2005", title: "R&D Center", description: "Opened state-of-the-art research facility", icon: FlaskConical },
  { year: "2015", title: "50+ Countries", description: "Reached global distribution milestone", icon: Globe },
  { year: "2020", title: "Green Initiative", description: "Launched eco-friendly product line", icon: Heart },
  { year: "2024", title: "Innovation Award", description: "Industry recognition for molecular technology", icon: Award },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do",
    gradient: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: FlaskConical,
    title: "Innovation",
    description: "Continuous research drives our product development",
    gradient: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest partnerships built on trust and transparency",
    gradient: "from-red-500/20 to-red-600/20",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Committed to environmental responsibility",
    gradient: "from-green-500/20 to-green-600/20",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const heroY = useTransform(heroProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const timelineLineHeight = useSpring(useTransform(timelineProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>
      <Header />

      <main>
        {/* Premium Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#1a1a1a]"
        >
          {/* Background layers */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(223,68,24,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(223,68,24,0.1),transparent_50%)]" />

            {/* Animated grid */}
            <motion.div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />

            {/* Floating orbs */}
            <motion.div
              className="absolute top-20 right-[20%] w-80 h-80 bg-accent/20 rounded-full blur-[120px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-[10%] w-64 h-64 bg-accent/15 rounded-full blur-[100px]"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </div>

          <Container className="relative z-10 pt-32 pb-20">
            <motion.div style={{ y: heroY, opacity: heroOpacity }}>
              {/* Breadcrumb */}
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-sm text-white/40 mb-8"
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">About</span>
              </motion.nav>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <div>
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6"
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                      <Award className="w-4 h-4 text-accent" />
                      <span
                        className="text-sm font-medium text-accent"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Since 1984
                      </span>
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Four Decades of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF6B47]">
                      Excellence
                    </span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl text-white/60 max-w-xl mb-8"
                  >
                    From a small research team in Houston to a global leader serving
                    over 50 countries, our journey has been defined by relentless innovation.
                  </motion.p>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Button size="lg" asChild className="group">
                      <Link href="/products">
                        Explore Products
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                {/* Right: Visual */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative aspect-square max-w-md mx-auto">
                    {/* Rotating rings */}
                    <motion.div
                      className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute inset-8 border border-accent/30 rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Center content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          40
                        </motion.div>
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                          className="text-xl text-white/60"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          Years of Excellence
                        </motion.div>
                      </div>
                    </div>

                    {/* Floating stats */}
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <div className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-inter)" }}>50+</div>
                      <div className="text-xs text-white/50">Countries</div>
                    </motion.div>

                    <motion.div
                      className="absolute top-1/2 -right-4 -translate-y-1/2 px-5 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-inter)" }}>25K+</div>
                      <div className="text-xs text-white/50">Partners</div>
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    >
                      <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-inter)" }}>500+</div>
                      <div className="text-xs text-white/50">OEM Approvals</div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Container>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFEFE6] to-transparent" />
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32 bg-[#FFEFE6]">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span
                    className="text-sm font-medium text-accent"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Our Story
                  </span>
                </span>

                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  A Legacy of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF6B47]">
                    Performance
                  </span>
                </h2>

                <div className="space-y-4 text-[#333333]/70">
                  <p>
                    Founded in 1984 in Houston, Texas, Kashe Energy began with a
                    simple mission: to create the world's most advanced automotive
                    lubricants. What started as a small research team has grown into
                    a global leader serving over 50 countries.
                  </p>
                  <p>
                    Our journey has been defined by relentless innovation. From
                    pioneering synthetic oil formulations in the 1990s to developing
                    breakthrough molecular technology today, we've consistently
                    pushed the boundaries of what's possible.
                  </p>
                  <p>
                    Today, Kashe Energy is trusted by professional racing teams,
                    major fleet operators, and millions of individual vehicle owners
                    worldwide.
                  </p>
                </div>

                <div className="mt-8">
                  <Button size="lg" asChild className="group">
                    <Link href="/products">
                      Explore Our Products
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#333] to-[#222] overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-32 h-32 rounded-full bg-accent/20 blur-3xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-3xl p-6 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Award className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <span
                        className="block text-3xl font-bold text-accent"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        40+
                      </span>
                      <span className="text-sm text-[#333333]/60">
                        Years of Excellence
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Trust Strip */}
        <TrustStrip variant="dark" certifications={siteConfig.certifications} />

        {/* Mission & Vision */}
        <section className="py-20 md:py-32 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  description:
                    "To deliver premium lubricant solutions that maximize engine performance, extend equipment life, and provide exceptional value to our customers worldwide.",
                },
                {
                  icon: Eye,
                  title: "Our Vision",
                  description:
                    "To be the global leader in automotive lubricant technology, setting the standard for innovation, quality, and sustainability in our industry.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#FFEFE6] rounded-3xl p-8 md:p-12"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#333333] mb-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#333333]/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="py-20 md:py-32 bg-[#FFEFE6]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <Heart className="w-4 h-4 text-accent" />
                <span
                  className="text-sm font-medium text-accent"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Our Values
                </span>
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#333333] mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                The Principles That Guide Us
              </h2>
              <p className="text-lg text-[#333333]/60 max-w-2xl mx-auto">
                Our core values shape every decision we make and every product we create.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <value.icon className="w-7 h-7" />
                    </div>
                    <h3
                      className="text-xl font-bold text-[#333333] mb-2 group-hover:text-accent transition-colors"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-[#333333]/60">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Timeline */}
        <section ref={timelineRef} className="py-20 md:py-32 bg-[#1a1a1a] overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <Building className="w-4 h-4 text-accent" />
                <span
                  className="text-sm font-medium text-accent"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Our Journey
                </span>
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Key Milestones
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                The defining moments that shaped our growth.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2">
                <motion.div
                  className="absolute top-0 left-0 right-0 bg-accent"
                  style={{ height: timelineLineHeight }}
                />
              </div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
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
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="inline-block bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
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
                      </motion.div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-accent/50" />

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-[#C23A15] to-[#8B2A0F]">
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
            <motion.div
              className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>

          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
                <Users className="w-4 h-4 text-white" />
                <span
                  className="text-sm font-medium text-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Partner With Us
                </span>
              </span>

              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Join Thousands of{" "}
                <span className="relative">
                  Partners
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h2>

              <p className="text-xl text-white/80 mb-10">
                Join thousands of businesses that trust Kashe Energy for their
                lubrication needs.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="xl"
                  variant="secondary"
                  asChild
                  className="shadow-2xl shadow-black/20"
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="xl"
                  variant="outline-light"
                  asChild
                  className="border-white/30 hover:bg-white/10"
                >
                  <Link href="/contact?type=distributor">Become a Distributor</Link>
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
