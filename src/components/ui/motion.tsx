"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  viewportSettings,
  hoverLift,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

// Fade In Up on scroll
interface FadeInUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  children: React.ReactNode;
}

export function FadeInUp({ delay = 0, children, className, ...props }: FadeInUpProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Fade In on scroll
export function FadeIn({ delay = 0, children, className, ...props }: FadeInUpProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Fade In from Left
export function FadeInLeft({ delay = 0, children, className, ...props }: FadeInUpProps) {
  return (
    <motion.div
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Fade In from Right
export function FadeInRight({ delay = 0, children, className, ...props }: FadeInUpProps) {
  return (
    <motion.div
      variants={fadeInRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Scale In on scroll
export function ScaleIn({ delay = 0, children, className, ...props }: FadeInUpProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container
interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger Item (for use inside StaggerContainer)
export function StaggerItem({ children, className, ...props }: FadeInUpProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Hover Lift Card
interface HoverLiftProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function HoverLift({ children, className, ...props }: HoverLiftProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Parallax wrapper (subtle parallax effect)
interface ParallaxProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  offset?: number;
}

export function Parallax({ children, className, offset = 50, ...props }: ParallaxProps) {
  return (
    <motion.div
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
