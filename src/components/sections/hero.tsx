"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  viewportSettings,
} from "@/lib/animations";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  showTrustBadges?: boolean;
  variant?: "home" | "page";
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  showTrustBadges = false,
  variant = "home",
}: HeroProps) {
  const isHome = variant === "home";

  return (
    <section
      className={`relative ${
        isHome ? "min-h-screen" : "min-h-[60vh]"
      } flex items-center dark-section`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#333333]">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/95 to-[#2a2a2a]" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative z-10 pt-32 pb-20">
        <motion.div
          className={`max-w-4xl ${isHome ? "" : "mx-auto text-center"}`}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle */}
          {subtitle && (
            <motion.div
              variants={fadeInUp}
              className="mb-6"
            >
              <span
                className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-medium"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {subtitle}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-white mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10"
            >
              {description}
            </motion.p>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              {primaryCTA && (
                <Button size="lg" asChild>
                  <Link href={primaryCTA.href}>
                    {primaryCTA.text}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              )}
              {secondaryCTA && (
                <Button size="lg" variant="outline-light" asChild>
                  <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                </Button>
              )}
            </motion.div>
          )}

          {/* Trust Badges */}
          {showTrustBadges && (
            <motion.div
              variants={fadeInUp}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <p
                className="text-xs uppercase tracking-wider text-white/40 mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Trusted by industry leaders
              </p>
              <div className="flex flex-wrap items-center gap-8">
                {["API SP", "ACEA C3", "BMW LL-04", "MB 229.51"].map(
                  (cert) => (
                    <span
                      key={cert}
                      className="text-sm font-medium text-white/60"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {cert}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      {isHome && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

// Page Header variant for inner pages
interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}

export function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="bg-[#333333] pt-32 pb-16">
      <Container>
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            className="mb-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <ol className="flex items-center gap-2 text-sm text-white/50">
              {breadcrumb.map((item, index) => (
                <li key={item.href} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  {index === breadcrumb.length - 1 ? (
                    <span className="text-white">{item.label}</span>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        <motion.h1
          className="text-white"
          style={{ fontFamily: "var(--font-inter)" }}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            className="mt-4 text-xl text-white/70 max-w-2xl"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
