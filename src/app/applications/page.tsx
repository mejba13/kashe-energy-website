"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Header, Footer, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
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
  ChevronRight,
  Sparkles,
  Shield,
  Zap,
  Globe,
  Headphones,
  Award,
} from "lucide-react";

const applications = [
  {
    icon: Car,
    title: "Passenger Vehicles",
    description:
      "Premium engine oils and fluids for cars, SUVs, and light trucks. Designed for everyday driving and extended protection.",
    products: ["Kashe Ultra 0W-20", "Kashe Pro 5W-30", "Kashe ATF Pro"],
    href: "/products?category=engine-oils",
    gradient: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: Truck,
    title: "Commercial Fleet",
    description:
      "Heavy-duty lubricants for trucks, buses, and commercial vehicles. Engineered for long hauls and demanding schedules.",
    products: ["Kashe HD 15W-40", "Kashe Fleet Plus", "Kashe Hydraulic 46"],
    href: "/products?category=industrial",
    gradient: "from-green-500/20 to-green-600/20",
  },
  {
    icon: Gauge,
    title: "Motorsport & Racing",
    description:
      "Competition-grade lubricants for racing engines. Maximum protection under extreme heat and stress.",
    products: ["Kashe Racing 10W-60", "Kashe Max 5W-40", "Kashe DCT Fluid"],
    href: "/products?category=specialty",
    gradient: "from-accent/20 to-[#FF6B47]/20",
  },
  {
    icon: Factory,
    title: "Industrial Manufacturing",
    description:
      "Specialized lubricants for industrial machinery, hydraulic systems, and manufacturing equipment.",
    products: ["Kashe Hydraulic 46", "Kashe Industrial Gear", "Kashe Compressor Oil"],
    href: "/products?category=industrial",
    gradient: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: Tractor,
    title: "Agriculture & Farming",
    description:
      "Rugged lubricants for tractors, harvesters, and farm equipment. Built to handle tough conditions.",
    products: ["Kashe Agri Universal", "Kashe Tractor Fluid", "Kashe Hydraulic 68"],
    href: "/products?category=industrial",
    gradient: "from-yellow-500/20 to-yellow-600/20",
  },
  {
    icon: Bike,
    title: "Motorcycles & Powersports",
    description:
      "High-performance oils for motorcycles, ATVs, and powersports vehicles. Wet clutch compatible formulations.",
    products: ["Kashe Moto 10W-40", "Kashe Moto Racing", "Kashe 2T Synthetic"],
    href: "/products?category=specialty",
    gradient: "from-red-500/20 to-red-600/20",
  },
  {
    icon: Ship,
    title: "Marine",
    description:
      "Corrosion-resistant lubricants for boats, yachts, and marine engines. Formulated for saltwater environments.",
    products: ["Kashe Marine 4-Stroke", "Kashe Marine Gear", "Kashe Marine 2T"],
    href: "/products?category=specialty",
    gradient: "from-cyan-500/20 to-cyan-600/20",
  },
  {
    icon: Plane,
    title: "Aviation & Aerospace",
    description:
      "Specialized lubricants meeting strict aviation standards. For piston engines and ground support equipment.",
    products: ["Kashe Aero 100", "Kashe Aero Piston", "Kashe GSE Hydraulic"],
    href: "/products?category=specialty",
    gradient: "from-indigo-500/20 to-indigo-600/20",
  },
];

const stats = [
  { icon: Headphones, value: "24/7", label: "Technical Support" },
  { icon: Award, value: "500+", label: "OEM Approvals" },
  { icon: Shield, value: "Free", label: "Consultation" },
  { icon: Globe, value: "50+", label: "Countries Served" },
];

export default function ApplicationsPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <Header />

      <main>
        {/* Premium Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#1a1a1a]"
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
              animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
                <span className="text-white">Applications</span>
              </motion.nav>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                  <Zap className="w-4 h-4 text-accent" />
                  <span
                    className="text-sm font-medium text-accent"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Industry Solutions
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
                Specialized{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF6B47]">
                  Solutions
                </span>
                <br />
                for Every Industry
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-white/60 max-w-2xl mb-12"
              >
                From automotive to industrial, we have the right lubricant for
                your specific application and performance requirements.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-8"
              >
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/40">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </Container>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFEFE6] to-transparent" />
        </section>

        {/* Applications Grid */}
        <section className="py-20 md:py-32 bg-[#FFEFE6]">
          <Container>
            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link
                    href={app.href}
                    className="group block h-full bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 border border-[#333333]/5"
                  >
                    <div className="relative p-8">
                      {/* Background gradient on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        <div className="flex items-start gap-6">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300"
                          >
                            <app.icon className="w-8 h-8" />
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3
                              className="text-xl font-bold text-[#333333] mb-2 group-hover:text-accent transition-colors"
                              style={{ fontFamily: "var(--font-inter)" }}
                            >
                              {app.title}
                            </h3>
                            <p className="text-[#333333]/60 mb-4">
                              {app.description}
                            </p>

                            {/* Sample Products */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {app.products.map((product, i) => (
                                <span
                                  key={i}
                                  className="text-xs px-3 py-1 bg-[#FFEFE6] rounded-full text-[#333333]/70 group-hover:bg-white/80 transition-colors"
                                  style={{ fontFamily: "var(--font-inter)" }}
                                >
                                  {product}
                                </span>
                              ))}
                            </div>

                            {/* View link */}
                            <div className="flex items-center gap-2 text-accent">
                              <span
                                className="text-sm font-medium"
                                style={{ fontFamily: "var(--font-inter)" }}
                              >
                                View Products
                              </span>
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Technical Support Section */}
        <section className="py-20 md:py-32 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
                >
                  <Headphones className="w-4 h-4 text-accent" />
                  <span
                    className="text-sm font-medium text-accent"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Technical Support
                  </span>
                </motion.span>

                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Not Sure Which{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF6B47]">
                    Product
                  </span>{" "}
                  Is Right?
                </h2>

                <p className="text-lg text-[#333333]/70 mb-4">
                  Our technical team has decades of experience helping customers
                  find the perfect lubricant solution for their specific needs.
                </p>
                <p className="text-[#333333]/60 mb-8">
                  Whether you're managing a fleet of vehicles, maintaining
                  industrial equipment, or looking for the best oil for your
                  personal vehicle, we're here to help.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      Contact Technical Support
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/resources">View Data Sheets</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Right: Stats Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-[#FFEFE6] rounded-3xl p-6 text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-7 h-7 text-accent" />
                    </div>
                    <span
                      className="block text-3xl font-bold text-accent mb-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-sm text-[#333333]/60"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-[#C23A15] to-[#8B2A0F]">
            {/* Noise texture */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Decorative elements */}
            <motion.div
              className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-[100px]"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.1, 0.15] }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span
                    className="text-sm font-medium text-white"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Ready to Get Started?
                  </span>
                </span>
              </motion.div>

              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Find the Perfect{" "}
                <span className="relative">
                  Solution
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
                Browse our complete product range or get in touch for a
                personalized recommendation.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="xl"
                  variant="secondary"
                  asChild
                  className="shadow-2xl shadow-black/20"
                >
                  <Link href="/products">
                    Browse Products
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="xl"
                  variant="outline-light"
                  asChild
                  className="border-white/30 hover:bg-white/10"
                >
                  <Link href="/contact?type=quote">Request a Quote</Link>
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
