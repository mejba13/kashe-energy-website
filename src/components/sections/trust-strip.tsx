"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import { Shield, Award, Globe, Clock } from "lucide-react";

interface TrustItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TrustStripProps {
  items?: TrustItem[];
  certifications?: string[];
  variant?: "default" | "dark";
}

const defaultItems: TrustItem[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Premium Quality",
    description: "Engineered for excellence",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "OEM Approved",
    description: "Meets manufacturer specs",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    description: "50+ countries served",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "40+ Years",
    description: "Industry experience",
  },
];

export function TrustStrip({
  items = defaultItems,
  certifications,
  variant = "default",
}: TrustStripProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-12 ${isDark ? "bg-[#333333]" : "bg-card"}`}
    >
      <Container>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center gap-4"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  isDark
                    ? "bg-white/10 text-white"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {item.icon}
              </div>
              <div>
                <h4
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-card-foreground"
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-sm ${
                    isDark ? "text-white/60" : "text-muted-foreground"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <motion.div
            className="mt-8 pt-8 border-t border-current/10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <div className="flex flex-wrap items-center justify-center gap-6">
              <span
                className={`text-sm uppercase tracking-wider ${
                  isDark ? "text-white/40" : "text-muted-foreground"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Certifications:
              </span>
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    isDark
                      ? "bg-white/10 text-white/80"
                      : "bg-muted text-muted-foreground"
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
