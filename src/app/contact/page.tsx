"use client";

import { Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Header, Footer, Container } from "@/components/layout";
import { ContactForm } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ChevronRight,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function ContactContent() {
  const searchParams = useSearchParams();
  const formType = searchParams.get("type") as "quote" | "distributor" | null;
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      content: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      content: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
    },
    {
      icon: MapPin,
      title: "Address",
      content: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
      href: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 8AM-6PM CST | Sat: 9AM-1PM CST",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
    { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
    { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  ];

  return (
    <>
      <Header />

      <main>
        {/* Premium Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#1a1a1a]"
        >
          {/* Background layers */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(223,68,24,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(223,68,24,0.1),transparent_50%)]" />

            <motion.div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />

            <motion.div
              className="absolute top-20 right-[20%] w-64 h-64 bg-accent/20 rounded-full blur-[100px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>

          <Container className="relative z-10 pt-32 pb-16">
            <motion.div style={{ y: heroY, opacity: heroOpacity }}>
              {/* Breadcrumb */}
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-sm text-white/40 mb-8"
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Contact</span>
              </motion.nav>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <span
                    className="text-sm font-medium text-accent"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Get in Touch
                  </span>
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Contact{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF6B47]">
                  Us
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-white/60 max-w-2xl"
              >
                Have a question or need assistance? Our team is here to help with
                any inquiries about our products and services.
              </motion.p>
            </motion.div>
          </Container>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFEFE6] to-transparent" />
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32 bg-[#FFEFE6]">
          <Container>
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2
                    className="text-2xl font-bold text-[#333333] mb-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Get in Touch
                  </h2>
                  <p className="text-[#333333]/70">
                    Have a question about our products or need technical
                    assistance? Our team is ready to help.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  {contactDetails.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-start gap-4 p-4 bg-white rounded-2xl hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                            <item.icon className="w-5 h-5 text-accent group-hover:text-white" />
                          </div>
                          <div>
                            <h3
                              className="font-semibold text-[#333333] mb-1"
                              style={{ fontFamily: "var(--font-inter)" }}
                            >
                              {item.title}
                            </h3>
                            <span className="text-[#333333]/70 group-hover:text-accent transition-colors">
                              {item.content}
                            </span>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
                          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h3
                              className="font-semibold text-[#333333] mb-1"
                              style={{ fontFamily: "var(--font-inter)" }}
                            >
                              {item.title}
                            </h3>
                            <span className="text-[#333333]/70">{item.content}</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h3
                    className="font-semibold text-[#333333] mb-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#333333]/60 hover:bg-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-accent/20"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-[#333333]/5">
                  <ContactForm variant={formType || "default"} />
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Map Section */}
        <section className="relative h-[400px] bg-[#1a1a1a]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#252525]">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6"
              >
                <MapPin className="w-10 h-10 text-accent" />
              </motion.div>
              <p
                className="text-white/60 text-lg"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Houston, Texas
              </p>
              <p className="text-white/40 text-sm mt-2">
                Map integration coming soon
              </p>
            </motion.div>
          </div>
        </section>

        {/* Additional CTA */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span
                  className="text-sm font-medium text-accent"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Explore More
                </span>
              </span>

              <h2
                className="text-2xl md:text-3xl font-bold text-[#333333] mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Looking for Something Specific?
              </h2>
              <p className="text-[#333333]/60 max-w-2xl mx-auto mb-8">
                Check out our products, resources, or learn more about partnering
                with Kashe Energy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="/products">
                    View Products
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/resources">Resources</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full"
          />
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
