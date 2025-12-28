"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Header, Footer, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { products } from "@/data/products";
import {
  Search,
  Download,
  FileText,
  Book,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const faqs = [
  {
    question: "How do I choose the right oil for my vehicle?",
    answer:
      "Refer to your vehicle's owner manual for the manufacturer's recommended oil specification. Look for the API rating (e.g., SP, SN) and viscosity grade (e.g., 0W-20, 5W-30). Our technical team can also help you find the perfect match for your specific vehicle and driving conditions.",
  },
  {
    question: "What's the difference between synthetic and conventional oil?",
    answer:
      "Synthetic oils are engineered from chemically modified petroleum components or synthesized from other raw materials. They offer superior performance in extreme temperatures, better oxidation stability, and longer drain intervals compared to conventional oils. While more expensive, synthetic oils provide better protection and can reduce long-term maintenance costs.",
  },
  {
    question: "How often should I change my oil?",
    answer:
      "Oil change intervals depend on your vehicle, driving conditions, and the oil type used. With Kashe premium synthetic oils, many vehicles can go 10,000-15,000 miles between changes. However, always follow your vehicle manufacturer's recommendations and check your oil level regularly.",
  },
  {
    question: "What do the oil viscosity numbers mean?",
    answer:
      "Oil viscosity is expressed as two numbers (e.g., 5W-30). The first number with 'W' indicates cold weather performance—lower numbers flow better in cold temperatures. The second number indicates viscosity at operating temperature—higher numbers provide thicker oil film protection. A 5W-30 oil flows like a 5-weight oil when cold but provides 30-weight protection when hot.",
  },
  {
    question: "Can I mix different oil brands?",
    answer:
      "While mixing oils of the same specification won't cause immediate harm, we recommend using a single brand and formulation for optimal performance. Different additives packages may not work together as effectively. If you need to top off between changes, try to use the same product.",
  },
  {
    question: "What certifications should I look for?",
    answer:
      "Look for API (American Petroleum Institute) certification for general quality assurance. For European vehicles, check for ACEA ratings. Many manufacturers also have specific approvals (e.g., BMW LL-04, MB 229.51). Always ensure the oil meets or exceeds your vehicle manufacturer's requirements.",
  },
];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const productsWithDocs = products.filter((p) => p.datasheet);

  const filteredProducts = productsWithDocs.filter((p) =>
    searchQuery
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );

  return (
    <>
      <Header />

      <main>
        {/* Premium Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#1a1a1a]"
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

          <Container className="relative z-10 pt-32 pb-20">
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
                <span className="text-white">Resources</span>
              </motion.nav>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                  <Book className="w-4 h-4 text-accent" />
                  <span
                    className="text-sm font-medium text-accent"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Knowledge Center
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
                Technical{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF6B47]">
                  Resources
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-white/60 max-w-2xl mb-8"
              >
                Technical documentation, data sheets, and helpful guides for our products.
              </motion.p>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-6"
              >
                {[
                  { icon: FileText, label: "Data Sheets", value: `${productsWithDocs.length}+` },
                  { icon: HelpCircle, label: "FAQs", value: `${faqs.length}` },
                  { icon: Book, label: "Guides", value: "10+" },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/40">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </Container>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFEFE6] to-transparent" />
        </section>

        {/* Downloads Section */}
        <section className="py-20 md:py-32 bg-[#FFEFE6]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
                    <FileText className="w-4 h-4 text-accent" />
                    <span
                      className="text-sm font-medium text-accent"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Documentation
                    </span>
                  </span>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-[#333333]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Product Data Sheets
                  </h2>
                </div>

                {/* Search */}
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#333333]/40" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-12 h-12 rounded-2xl bg-white border-[#333333]/10 focus:border-accent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <p className="text-[#333333]/60">
                Download technical data sheets and product specifications.
              </p>
            </motion.div>

            {/* Documents Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={searchQuery}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid gap-4"
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white rounded-3xl hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 border border-[#333333]/5">
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0"
                        >
                          <FileText className="w-7 h-7 text-accent" />
                        </motion.div>
                        <div>
                          <h3
                            className="font-bold text-[#333333] group-hover:text-accent transition-colors"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            {product.name}
                          </h3>
                          <p className="text-sm text-[#333333]/60">
                            {product.category} • Technical Data Sheet
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 sm:flex-shrink-0">
                        <Button variant="outline" size="sm" asChild className="rounded-xl">
                          <Link href={`/products/${product.slug}`}>View Product</Link>
                        </Button>
                        <Button size="sm" asChild className="rounded-xl group/btn">
                          <a href={product.datasheet} download>
                            <Download className="w-4 h-4" />
                            Download
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 rounded-full bg-[#333333]/5 flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-[#333333]/30" />
                </div>
                <p className="text-lg text-[#333333]/60 mb-4">
                  No documents found matching your search.
                </p>
                <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
              </motion.div>
            )}
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <HelpCircle className="w-4 h-4 text-accent" />
                <span
                  className="text-sm font-medium text-accent"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  FAQ
                </span>
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#333333] mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#333333]/60 max-w-2xl mx-auto">
                Find answers to common questions about our products and lubricant technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-[#FFEFE6] rounded-3xl px-6 border-none overflow-hidden"
                  >
                    <AccordionTrigger
                      className="text-left hover:no-underline py-6 group"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      <span className="font-bold text-[#333333] pr-4 group-hover:text-accent transition-colors">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-[#333333]/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-[#333333]/60 mb-4">Still have questions?</p>
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Contact Our Team
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden bg-[#1a1a1a]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(223,68,24,0.15),transparent_60%)]" />
          </div>

          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                <MessageCircle className="w-4 h-4 text-accent" />
                <span
                  className="text-sm font-medium text-white/80"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Technical Support
                </span>
              </span>

              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Need{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF6B47]">
                  Technical
                </span>{" "}
                Assistance?
              </h2>

              <p className="text-xl text-white/60 mb-10">
                Our technical support team is available to help you find the
                right product and answer any questions.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    Contact Support
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline-light" asChild>
                  <Link href="/products">Browse Products</Link>
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
