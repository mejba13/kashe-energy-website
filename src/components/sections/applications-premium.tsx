"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Truck, Factory, Gauge, Zap, Shield } from "lucide-react";

const applications = [
  {
    icon: Car,
    title: "Automotive",
    description: "Premium protection for passenger cars and light trucks",
    image: "/images/automotive.jpg",
    color: "from-blue-500/20 to-blue-600/20",
    href: "/applications#automotive",
  },
  {
    icon: Truck,
    title: "Commercial Fleet",
    description: "Heavy-duty solutions for demanding fleet operations",
    image: "/images/fleet.jpg",
    color: "from-green-500/20 to-green-600/20",
    href: "/applications#fleet",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Specialized lubricants for machinery and equipment",
    image: "/images/industrial.jpg",
    color: "from-purple-500/20 to-purple-600/20",
    href: "/applications#industrial",
  },
  {
    icon: Gauge,
    title: "Motorsport",
    description: "Competition-grade performance under extreme conditions",
    image: "/images/motorsport.jpg",
    color: "from-accent/20 to-[#FF6B47]/20",
    href: "/applications#motorsport",
  },
];

export function ApplicationsPremium() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#1a1a1a]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(223,68,24,0.05),transparent_60%)]" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
            >
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent" style={{ fontFamily: "var(--font-inter)" }}>
                Applications
              </span>
            </motion.span>

            <h2
              className="text-white mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF6B47]">
                Every Industry
              </span>
            </h2>
            <p className="text-xl text-white/50 max-w-xl">
              From personal vehicles to industrial machinery, we have the right
              lubricant for your specific needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="outline-light" size="lg" asChild className="group">
              <Link href="/applications">
                View All Applications
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Applications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={app.href} className="group block h-full">
                <div className="relative h-full bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.15]">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <app.icon className="w-8 h-8" />
                    </div>

                    {/* Text */}
                    <h3
                      className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {app.title}
                    </h3>
                    <p className="text-white/50 mb-6">{app.description}</p>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-white/40 group-hover:text-accent transition-colors">
                      <span className="text-sm font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: Zap, text: "24/7 Technical Support" },
            { icon: Shield, text: "Quality Guaranteed" },
            { icon: Truck, text: "Fast Global Delivery" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full"
            >
              <item.icon className="w-4 h-4 text-accent" />
              <span className="text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
