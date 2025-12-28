"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { mainNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "./container";
import {
  menuOverlay,
  menuItemsContainer,
  menuItem,
} from "@/lib/animations";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

interface MenuOverlayProps {
  onClose: () => void;
}

export function MenuOverlay({ onClose }: MenuOverlayProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-[#333333]"
      variants={menuOverlay}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <Container className="h-full flex flex-col pt-28 pb-12">
        {/* Navigation Links */}
        <motion.nav
          className="flex-1 flex flex-col justify-center"
          variants={menuItemsContainer}
          initial="closed"
          animate="open"
        >
          <ul className="space-y-4 md:space-y-6">
            {mainNavigation.map((item) => (
              <motion.li key={item.href} variants={menuItem}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-4"
                >
                  <span
                    className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white transition-colors hover:text-accent"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.title}
                  </span>
                  <span className="text-sm text-white/50 opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline">
                    {item.description}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Bottom Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10"
          variants={menuItem}
          initial="closed"
          animate="open"
          transition={{ delay: 0.4 }}
        >
          {/* Contact Info */}
          <div className="space-y-2">
            <h4
              className="text-xs font-medium uppercase tracking-wider text-white/40"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Contact
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-white hover:text-accent transition-colors"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="block text-white hover:text-accent transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <h4
              className="text-xs font-medium uppercase tracking-wider text-white/40"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Location
            </h4>
            <p className="text-white/70">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.zip}
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <h4
              className="text-xs font-medium uppercase tracking-wider text-white/40"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          variants={menuItem}
          initial="closed"
          animate="open"
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/contact?type=quote"
            onClick={onClose}
            className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Request a Quote
          </Link>
          <Link
            href="/contact?type=distributor"
            onClick={onClose}
            className="inline-flex items-center px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Find a Distributor
          </Link>
        </motion.div>
      </Container>
    </motion.div>
  );
}
