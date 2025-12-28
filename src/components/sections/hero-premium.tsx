"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

// Animated text that reveals character by character
function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");

  return (
    <motion.span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + wordIndex * 0.1 + charIndex * 0.03,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

// Floating oil drop animation
function OilDrop({ delay = 0, size = "md", position }: { delay?: number; size?: "sm" | "md" | "lg"; position: { x: string; y: string } }) {
  const sizes = {
    sm: "w-3 h-4",
    md: "w-5 h-7",
    lg: "w-8 h-10",
  };

  return (
    <motion.div
      className={`absolute ${sizes[size]}`}
      style={{ left: position.x, top: position.y }}
      initial={{ opacity: 0, y: -20, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [-20, 100, 250, 400],
        scale: [0, 1, 1.2, 0.8],
        x: [0, 10, -10, 5],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 20 28" fill="none" className="w-full h-full">
        <path
          d="M10 0C10 0 0 12 0 18C0 23.5228 4.47715 28 10 28C15.5228 28 20 23.5228 20 18C20 12 10 0 10 0Z"
          fill="url(#oil-gradient)"
        />
        <defs>
          <linearGradient id="oil-gradient" x1="10" y1="0" x2="10" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DF4418" />
            <stop offset="1" stopColor="#8B2A0F" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

// Animated gradient orb
function GradientOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Certification badge with animation
function CertBadge({ cert, index }: { cert: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
      className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
    >
      <span
        className="text-sm font-medium text-white/80"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {cert}
      </span>
    </motion.div>
  );
}

export function HeroPremium() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const certifications = ["API SP", "ACEA C3", "BMW LL-04", "MB 229.51", "VW 504.00"];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#1a1a1a]">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#333333] via-[#252525] to-[#1a1a1a]" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(223,68,24,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(223,68,24,0.1),transparent_50%)]" />

        {/* Animated gradient orbs */}
        <GradientOrb className="w-[600px] h-[600px] bg-accent/20 top-[-200px] right-[-200px]" delay={0} />
        <GradientOrb className="w-[400px] h-[400px] bg-accent/15 bottom-[-100px] left-[-100px]" delay={2} />
        <GradientOrb className="w-[300px] h-[300px] bg-accent/10 top-[40%] left-[20%]" delay={4} />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Floating oil drops */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <OilDrop delay={0} size="lg" position={{ x: "85%", y: "10%" }} />
        <OilDrop delay={1.5} size="md" position={{ x: "75%", y: "20%" }} />
        <OilDrop delay={3} size="sm" position={{ x: "90%", y: "15%" }} />
        <OilDrop delay={2} size="md" position={{ x: "80%", y: "5%" }} />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 w-full"
        style={{ y: springY, opacity: springOpacity, scale: springScale }}
      >
        <Container className="pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
            {/* Left content */}
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span
                    className="text-sm font-medium text-accent"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Premium Automotive Lubricants
                  </span>
                </span>
              </motion.div>

              {/* Main headline */}
              <h1 className="mb-8" style={{ fontFamily: "var(--font-inter)" }}>
                <AnimatedText
                  text="Engineered"
                  className="block text-white"
                  delay={0.4}
                />
                <AnimatedText
                  text="for Peak"
                  className="block text-white"
                  delay={0.6}
                />
                <span className="block">
                  <AnimatedText
                    text="Performance"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#FF6B47] to-accent"
                    delay={0.8}
                  />
                </span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-xl md:text-2xl text-white/60 mb-10 leading-relaxed max-w-xl"
              >
                Advanced molecular technology meets four decades of expertise.
                Lubricants that protect, perform, and endure.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Button size="xl" asChild className="group">
                  <Link href="/products">
                    Explore Products
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline-light" asChild className="group">
                  <Link href="/contact?type=quote" className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Watch Story
                  </Link>
                </Button>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="pt-8 border-t border-white/10"
              >
                <p
                  className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Exceeds Industry Standards
                </p>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert, index) => (
                    <CertBadge key={cert} cert={cert} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right visual element - 3D-style product showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative hidden lg:block"
            >
              {/* Main product visual */}
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Glow effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-[100px]" />

                {/* Product container */}
                <motion.div
                  className="relative z-10 w-full h-full flex items-center justify-center"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Oil bottle silhouette */}
                  <div className="relative">
                    {/* Bottle shape */}
                    <div className="w-48 h-72 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-t-3xl rounded-b-[40%] border border-white/10 shadow-2xl relative overflow-hidden">
                      {/* Bottle cap */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-accent rounded-t-lg" />

                      {/* Label */}
                      <div className="absolute top-16 left-4 right-4 bottom-20 bg-gradient-to-b from-[#FFEFE6] to-[#F5E6DC] rounded-2xl p-4 flex flex-col justify-between">
                        <div>
                          <div className="w-8 h-1 bg-accent rounded mb-2" />
                          <div className="text-xs font-bold text-[#333333] tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                            KASHE
                          </div>
                          <div className="text-[8px] text-accent font-medium tracking-widest">
                            ENERGY
                          </div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-[#333333]" style={{ fontFamily: "var(--font-inter)" }}>
                            ULTRA
                          </div>
                          <div className="text-xs text-[#333333]/70">
                            0W-20
                          </div>
                        </div>
                      </div>

                      {/* Oil level indicator */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-accent/80 to-accent/40 rounded-b-[40%]"
                        initial={{ height: "0%" }}
                        animate={{ height: "30%" }}
                        transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                      />

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    </div>

                    {/* Floating stats around bottle */}
                    <motion.div
                      className="absolute -right-20 top-12 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2, duration: 0.5 }}
                    >
                      <div className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-inter)" }}>99.8%</div>
                      <div className="text-xs text-white/60">Wear Reduction</div>
                    </motion.div>

                    <motion.div
                      className="absolute -left-16 bottom-24 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.2, duration: 0.5 }}
                    >
                      <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-inter)" }}>-48°C</div>
                      <div className="text-xs text-white/60">Pour Point</div>
                    </motion.div>

                    <motion.div
                      className="absolute -right-8 bottom-8 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.4, duration: 0.5 }}
                    >
                      <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-inter)" }}>15K</div>
                      <div className="text-xs text-white/60">Miles Interval</div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Decorative rings */}
                <motion.div
                  className="absolute inset-0 border border-white/5 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 border border-accent/10 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <span
            className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Scroll to explore
          </span>
          <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
