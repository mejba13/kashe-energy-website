"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Building, Globe } from "lucide-react";

const milestones = [
  { year: "1984", label: "Founded", icon: Building },
  { year: "2005", label: "R&D Center", icon: Award },
  { year: "2015", label: "50+ Countries", icon: Globe },
  { year: "2024", label: "25K+ Partners", icon: Users },
];

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#333333] to-[#1a1a1a]" />

        {/* Radial gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(223,68,24,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(223,68,24,0.08),transparent_50%)]" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8"
            >
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent" style={{ fontFamily: "var(--font-inter)" }}>
                Our Story
              </span>
            </motion.span>

            <h2
              className="text-white mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="block">Four Decades of</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF6B47]">
                Innovation
              </span>
            </h2>

            <div className="space-y-6 text-white/60 text-lg">
              <p>
                Since 1984, Kashe Energy has been at the forefront of lubricant
                technology. What began as a vision to create superior automotive
                lubricants has evolved into a global mission.
              </p>
              <p>
                Our relentless pursuit of excellence has made us a trusted partner
                for industries worldwide. From our state-of-the-art research
                facilities to our global distribution network, every aspect of our
                operation is designed to deliver the highest quality products.
              </p>
            </div>

            {/* Milestone timeline */}
            <div className="mt-12 grid grid-cols-4 gap-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <milestone.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-inter)" }}>
                    {milestone.year}
                  </div>
                  <div className="text-xs text-white/40">{milestone.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Button size="lg" asChild className="group">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline-light" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Parallax layers */}
              <motion.div
                className="absolute inset-0"
                style={{ y: springY1 }}
              >
                <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl blur-3xl" />
              </motion.div>

              <motion.div
                className="absolute inset-0"
                style={{ y: springY2 }}
              >
                <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
              </motion.div>

              {/* Main visual container */}
              <div className="relative z-10 h-full flex items-center justify-center">
                {/* Circular frame */}
                <div className="relative w-80 h-80">
                  {/* Rotating ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Inner ring */}
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
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        40
                      </motion.div>
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
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
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-inter)" }}>50+</div>
                    <div className="text-xs text-white/50">Countries</div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -right-8 -translate-y-1/2 px-5 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-inter)" }}>25K+</div>
                    <div className="text-xs text-white/50">Partners</div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-inter)" }}>500+</div>
                    <div className="text-xs text-white/50">OEM Approvals</div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -left-8 -translate-y-1/2 px-5 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-inter)" }}>99%</div>
                    <div className="text-xs text-white/50">Satisfaction</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
