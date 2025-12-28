"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Logo } from "./logo";
import { MenuOverlay } from "./menu-overlay";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#FFEFE6]/95 backdrop-blur-md border-b border-[#333333]/5 shadow-sm"
            : "bg-[#FFEFE6]/80 backdrop-blur-sm"
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo variant={isScrolled || !isMenuOpen ? "dark" : "dark"} />

            {/* Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "relative flex items-center gap-2 px-5 py-2.5 rounded-full",
                "font-medium text-sm transition-colors duration-200",
                "bg-accent text-white hover:bg-accent/90",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              )}
              style={{ fontFamily: "var(--font-inter)" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span>{isMenuOpen ? "Close" : "Menu"}</span>

              {/* Hamburger icon */}
              <div className="relative w-4 h-3 flex flex-col justify-between">
                <motion.span
                  className="block h-0.5 w-full bg-white rounded-full origin-center"
                  animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-white rounded-full"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-white rounded-full origin-center"
                  animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.button>
          </div>
        </Container>
      </header>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
