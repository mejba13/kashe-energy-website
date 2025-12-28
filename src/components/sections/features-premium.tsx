"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Container } from "@/components/layout/container";
import { FlaskConical, Gauge, Clock, Globe, Shield, Zap, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

// Animated counter component
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

// Glass card component with hover effects
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "default" | "accent" | "dark";
}

function GlassCard({ children, className = "", delay = 0, variant = "default" }: GlassCardProps) {
  const variants = {
    default: "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20",
    accent: "bg-accent/10 border-accent/20 hover:bg-accent/20 hover:border-accent/30",
    dark: "bg-[#1a1a1a]/80 border-white/5 hover:bg-[#1a1a1a] hover:border-white/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className={`
        relative rounded-3xl border backdrop-blur-xl
        transition-all duration-500 overflow-hidden
        ${variants[variant]}
        ${className}
      `}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
}

// Feature icon with glow
function FeatureIcon({ icon: Icon, color = "accent" }: { icon: React.ElementType; color?: "accent" | "white" }) {
  return (
    <div className="relative">
      <div className={`absolute inset-0 ${color === "accent" ? "bg-accent/30" : "bg-white/20"} rounded-2xl blur-xl`} />
      <div className={`
        relative w-14 h-14 rounded-2xl flex items-center justify-center
        ${color === "accent" ? "bg-accent/20 text-accent" : "bg-white/10 text-white"}
      `}>
        <Icon className="w-7 h-7" />
      </div>
    </div>
  );
}

const features = [
  {
    icon: FlaskConical,
    title: "Advanced Molecular Technology",
    description: "Proprietary nano-additives create a protective barrier 3x stronger than conventional oils",
    stat: { value: 99.8, suffix: "%", label: "Protection Rate" },
  },
  {
    icon: Gauge,
    title: "Extreme Temperature Performance",
    description: "Engineered to maintain optimal viscosity from -40°C to +300°C operating temperatures",
    stat: { value: 300, suffix: "°C", label: "Max Temp" },
  },
  {
    icon: Clock,
    title: "Extended Service Intervals",
    description: "Advanced anti-oxidation formula allows up to 15,000 mile drain intervals",
    stat: { value: 15, suffix: "K", label: "Miles" },
  },
  {
    icon: Globe,
    title: "Global OEM Certifications",
    description: "Exceeds requirements from BMW, Mercedes, VW, and 50+ major manufacturers",
    stat: { value: 50, suffix: "+", label: "OEMs" },
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Countries Served", icon: Globe },
  { value: 25, suffix: "K+", label: "Fleet Partners", icon: TrendingUp },
  { value: 40, suffix: "+", label: "Years Experience", icon: Award },
  { value: 99, suffix: "%", label: "Customer Satisfaction", icon: Shield },
];

export function FeaturesPremium() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#333333] via-[#252525] to-[#1a1a1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(223,68,24,0.08),transparent_60%)]" />
      </div>

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent" style={{ fontFamily: "var(--font-inter)" }}>
              Why Choose Kashe Energy
            </span>
          </motion.span>

          <h2
            className="text-white mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="block">Science Meets</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF6B47]">
              Performance
            </span>
          </h2>

          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Four decades of research, innovation, and relentless pursuit of perfection
            in every formulation we create.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <GlassCard
              key={feature.title}
              delay={index * 0.1}
              className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
            >
              <div className={`p-8 h-full flex flex-col ${index === 0 ? "justify-between min-h-[400px]" : ""}`}>
                <div>
                  <FeatureIcon icon={feature.icon} />
                  <h3
                    className={`text-white font-semibold mt-6 mb-3 ${index === 0 ? "text-2xl" : "text-lg"}`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className={`text-white/50 ${index === 0 ? "text-base" : "text-sm"}`}>
                    {feature.description}
                  </p>
                </div>

                {/* Stat */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div
                    className={`font-bold text-accent ${index === 0 ? "text-5xl" : "text-3xl"}`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <AnimatedCounter value={feature.stat.value} suffix={feature.stat.suffix} />
                  </div>
                  <div className="text-sm text-white/40 mt-1">{feature.stat.label}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GlassCard variant="dark" className="p-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div
                        className="text-3xl font-bold text-white"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-white/40">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-all hover:scale-105 group"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Explore Our Products
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
