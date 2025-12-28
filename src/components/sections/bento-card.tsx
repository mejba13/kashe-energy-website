"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { hoverLift, fadeInUp } from "@/lib/animations";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "feature" | "stat" | "media" | "cta";
  children: React.ReactNode;
}

export function BentoCard({
  className,
  size = "md",
  variant = "default",
  children,
}: BentoCardProps) {
  const sizeClasses = {
    sm: "bento-sm",
    md: "bento-md",
    lg: "bento-lg",
  };

  const variantClasses = {
    default: "bg-card p-6 md:p-8",
    feature: "bg-card p-6 md:p-8",
    stat: "bg-card p-6 md:p-8 flex flex-col justify-center",
    media: "bg-[#333333] overflow-hidden",
    cta: "bg-accent p-6 md:p-8",
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      className={cn(
        "rounded-[20px] overflow-hidden transition-shadow duration-300",
        "hover:shadow-xl",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <motion.div variants={hoverLift} className="h-full">
        {children}
      </motion.div>
    </motion.div>
  );
}

// Feature Card with Icon
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  size = "md",
}: FeatureCardProps) {
  return (
    <BentoCard size={size} variant="feature" className={className}>
      <div className="h-full flex flex-col">
        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3
          className="text-xl font-semibold text-card-foreground mb-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {title}
        </h3>
        <p className="text-muted-foreground flex-1">{description}</p>
      </div>
    </BentoCard>
  );
}

// Stat Card
interface StatCardProps {
  value: string;
  label: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function StatCard({ value, label, className, size = "sm" }: StatCardProps) {
  return (
    <BentoCard size={size} variant="stat" className={className}>
      <div className="text-center">
        <span
          className="block text-4xl md:text-5xl font-bold text-accent mb-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {value}
        </span>
        <span
          className="text-sm uppercase tracking-wider text-muted-foreground"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {label}
        </span>
      </div>
    </BentoCard>
  );
}

// Media Card (for images/videos)
interface MediaCardProps {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  overlay?: React.ReactNode;
}

export function MediaCard({
  src,
  alt,
  className,
  size = "lg",
  overlay,
}: MediaCardProps) {
  return (
    <BentoCard size={size} variant="media" className={cn("relative min-h-[200px] md:min-h-[300px]", className)}>
      {/* Placeholder gradient for images */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#333333] to-[#1a1a1a]" />

      {/* Image placeholder with visual effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-accent/20 blur-3xl" />
      </div>

      {/* Overlay content */}
      {overlay && (
        <div className="absolute inset-0 flex items-end p-6 md:p-8">
          {overlay}
        </div>
      )}
    </BentoCard>
  );
}

// CTA Card
interface CTACardProps {
  title: string;
  description?: string;
  buttonText: string;
  href: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function CTACard({
  title,
  description,
  buttonText,
  href,
  className,
  size = "md",
}: CTACardProps) {
  return (
    <BentoCard size={size} variant="cta" className={className}>
      <div className="h-full flex flex-col justify-between">
        <div>
          <h3
            className="text-2xl font-semibold text-white mb-2"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {title}
          </h3>
          {description && (
            <p className="text-white/80">{description}</p>
          )}
        </div>
        <a
          href={href}
          className="inline-flex items-center gap-2 mt-4 text-white font-medium hover:underline underline-offset-4"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {buttonText}
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </BentoCard>
  );
}

// Text Card (for quotes, testimonials)
interface TextCardProps {
  quote: string;
  author?: string;
  role?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function TextCard({
  quote,
  author,
  role,
  className,
  size = "md",
}: TextCardProps) {
  return (
    <BentoCard size={size} variant="default" className={className}>
      <div className="h-full flex flex-col justify-between">
        <blockquote className="text-lg md:text-xl text-card-foreground italic mb-4">
          &ldquo;{quote}&rdquo;
        </blockquote>
        {(author || role) && (
          <div>
            {author && (
              <span
                className="block font-semibold text-card-foreground"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {author}
              </span>
            )}
            {role && (
              <span className="text-sm text-muted-foreground">{role}</span>
            )}
          </div>
        )}
      </div>
    </BentoCard>
  );
}
