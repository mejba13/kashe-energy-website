"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./container";
import { Logo } from "./logo";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import { Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333333] text-white pt-20 pb-8">
      <Container>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 pb-16 border-b border-white/10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {/* Brand Column */}
          <motion.div
            className="col-span-2 lg:col-span-2"
            variants={fadeInUp}
          >
            <Logo variant="light" className="mb-6" />
            <p className="text-white/60 max-w-sm mb-6">
              Premium automotive lubricants and energy solutions engineered for
              peak performance. Trusted by professionals worldwide.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div variants={fadeInUp}>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {footerNavigation.products.title}
            </h4>
            <ul className="space-y-3">
              {footerNavigation.products.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp}>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {footerNavigation.company.title}
            </h4>
            <ul className="space-y-3">
              {footerNavigation.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={fadeInUp}>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {footerNavigation.support.title}
            </h4>
            <ul className="space-y-3">
              {footerNavigation.support.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-accent transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <address className="not-italic">
                  {siteConfig.address.city}, {siteConfig.address.state}
                </address>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter / CTA Row */}
        <motion.div
          className="py-12 border-b border-white/10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Ready to experience premium performance?
              </h3>
              <p className="text-white/60">
                Contact us today for a quote or find a distributor near you.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact?type=quote"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Request a Quote
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                View Products
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerNavigation.legal.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
