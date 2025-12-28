"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Header, Footer, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, productCategories } from "@/data/products";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Filter,
  Grid3X3,
  LayoutList,
  Sparkles,
  ChevronRight,
  Droplets,
  Shield,
  Zap,
} from "lucide-react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const filteredProducts = activeCategory
    ? products.filter((p) => p.categorySlug === activeCategory)
    : products;

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

            {/* Animated grid */}
            <motion.div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
              animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating orbs */}
            <motion.div
              className="absolute top-20 right-[20%] w-64 h-64 bg-accent/20 rounded-full blur-[100px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-[10%] w-48 h-48 bg-accent/15 rounded-full blur-[80px]"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 6, repeat: Infinity }}
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
                <span className="text-white">Products</span>
              </motion.nav>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span
                    className="text-sm font-medium text-accent"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Premium Lubricants
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
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF6B47]">
                  Products
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-white/60 max-w-2xl mb-12"
              >
                Explore our complete range of premium lubricants engineered for
                peak performance and maximum protection.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-8"
              >
                {[
                  { icon: Droplets, label: "Products", value: `${products.length}+` },
                  { icon: Shield, label: "OEM Approvals", value: "500+" },
                  { icon: Zap, label: "Categories", value: `${productCategories.length}` },
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

        {/* Products Section */}
        <section className="py-16 md:py-24 bg-[#FFEFE6]">
          <Container>
            {/* Filters Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12"
            >
              {/* Category Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-[#333333]/60 mr-2">
                  <Filter className="w-4 h-4" />
                  <span style={{ fontFamily: "var(--font-inter)" }}>Filter:</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(null)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeCategory === null
                      ? "bg-accent text-white shadow-lg shadow-accent/25"
                      : "bg-white/80 text-[#333333] hover:bg-white border border-[#333333]/10"
                  )}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  All Products
                </motion.button>
                {productCategories.map((category) => (
                  <motion.button
                    key={category.slug}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveCategory(category.slug)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activeCategory === category.slug
                        ? "bg-accent text-white shadow-lg shadow-accent/25"
                        : "bg-white/80 text-[#333333] hover:bg-white border border-[#333333]/10"
                    )}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>

              {/* View Toggle & Results */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-[#333333]/60">
                  <span className="font-semibold text-[#333333]">
                    {filteredProducts.length}
                  </span>{" "}
                  {filteredProducts.length === 1 ? "product" : "products"}
                </span>
                <div className="flex items-center gap-1 p-1 bg-white/80 rounded-lg border border-[#333333]/10">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      viewMode === "grid"
                        ? "bg-accent text-white"
                        : "text-[#333333]/60 hover:text-[#333333]"
                    )}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      viewMode === "list"
                        ? "bg-accent text-white"
                        : "text-[#333333]/60 hover:text-[#333333]"
                    )}
                  >
                    <LayoutList className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Products Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory || "all"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "flex flex-col gap-4"
                )}
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      className={cn(
                        "group block bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 border border-[#333333]/5",
                        viewMode === "list" && "flex flex-row"
                      )}
                    >
                      {/* Product Image */}
                      <div
                        className={cn(
                          "relative overflow-hidden bg-gradient-to-br from-[#f5f5f5] to-[#e5e5e5]",
                          viewMode === "grid"
                            ? "aspect-square"
                            : "w-48 h-48 flex-shrink-0"
                        )}
                      >
                        {/* Placeholder visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="w-24 h-24 rounded-full bg-accent/10"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                          <div className="absolute w-16 h-16 rounded-full bg-accent/20 blur-xl" />
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Featured badge */}
                        {product.featured && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-accent text-white border-0 shadow-lg">
                              Featured
                            </Badge>
                          </div>
                        )}

                        {/* Quick view button */}
                        <motion.div
                          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          initial={{ y: 10 }}
                          whileHover={{ y: 0 }}
                        >
                          <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                            <ArrowRight className="w-5 h-5 text-accent" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Product Info */}
                      <div className={cn("p-6", viewMode === "list" && "flex-1")}>
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            {product.category}
                          </span>
                        </div>

                        <h3
                          className="text-xl font-semibold text-[#333333] mb-2 group-hover:text-accent transition-colors"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {product.name}
                        </h3>

                        <p className="text-[#333333]/60 text-sm mb-4 line-clamp-2">
                          {product.shortDescription}
                        </p>

                        {/* Specs preview */}
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(product.specs)
                            .slice(0, 2)
                            .map(([key, value]) => (
                              <span
                                key={key}
                                className="text-xs px-2 py-1 bg-[#333333]/5 rounded-full text-[#333333]/70"
                              >
                                {key}: {value}
                              </span>
                            ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 rounded-full bg-[#333333]/5 flex items-center justify-center mx-auto mb-6">
                  <Droplets className="w-10 h-10 text-[#333333]/30" />
                </div>
                <p className="text-lg text-[#333333]/60 mb-4">
                  No products found in this category.
                </p>
                <Button onClick={() => setActiveCategory(null)}>
                  View All Products
                </Button>
              </motion.div>
            )}
          </Container>
        </section>

        {/* Category Cards Section */}
        <section className="py-20 md:py-32 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <Grid3X3 className="w-4 h-4 text-accent" />
                <span
                  className="text-sm font-medium text-accent"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Categories
                </span>
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#333333] mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Browse by Category
              </h2>
              <p className="text-lg text-[#333333]/60 max-w-2xl mx-auto">
                Find the right lubricant for your specific needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productCategories.map((category, index) => (
                <motion.button
                  key={category.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => {
                    setActiveCategory(category.slug);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className={cn(
                    "group relative text-left p-8 rounded-3xl transition-all duration-500 overflow-hidden",
                    activeCategory === category.slug
                      ? "bg-accent text-white shadow-2xl shadow-accent/30"
                      : "bg-[#FFEFE6] hover:bg-[#FFE5D6] border border-[#333333]/5"
                  )}
                >
                  {/* Background gradient on hover */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-500",
                      activeCategory !== category.slug && "group-hover:opacity-100"
                    )}
                  />

                  <div className="relative z-10">
                    <h3
                      className={cn(
                        "text-xl font-semibold mb-3 transition-colors",
                        activeCategory === category.slug
                          ? "text-white"
                          : "text-[#333333] group-hover:text-accent"
                      )}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {category.name}
                    </h3>
                    <p
                      className={cn(
                        "text-sm mb-6",
                        activeCategory === category.slug
                          ? "text-white/80"
                          : "text-[#333333]/60"
                      )}
                    >
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={
                          activeCategory === category.slug ? "secondary" : "outline"
                        }
                        className={cn(
                          activeCategory === category.slug &&
                            "bg-white/20 text-white border-white/30"
                        )}
                      >
                        {products.filter((p) => p.categorySlug === category.slug).length}{" "}
                        products
                      </Badge>
                      <ArrowRight
                        className={cn(
                          "w-5 h-5 transition-transform group-hover:translate-x-1",
                          activeCategory === category.slug
                            ? "text-white"
                            : "text-accent"
                        )}
                      />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden bg-[#1a1a1a]">
          {/* Background */}
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span
                    className="text-sm font-medium text-white/80"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Need Assistance?
                  </span>
                </span>
              </motion.div>

              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Not Sure Which{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF6B47]">
                  Product
                </span>{" "}
                Is Right?
              </h2>

              <p className="text-xl text-white/60 mb-10">
                Our technical team can help you find the perfect lubricant for
                your specific application.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="/contact?type=quote">
                    Request a Quote
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline-light" asChild>
                  <Link href="/resources">Download Data Sheets</Link>
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
