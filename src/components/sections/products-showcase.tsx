"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts, Product } from "@/data/products";
import { ArrowRight, ArrowUpRight, Droplets } from "lucide-react";

// Product card with premium styling
function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative bg-gradient-to-b from-[#FFEFE6] to-[#F5E6DC] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
          {/* Product image area */}
          <div className="relative aspect-[3/4] overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFEFE6]/80" />

            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-8 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />

            {/* Product bottle visualization */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative">
                {/* Bottle silhouette */}
                <div className="w-32 h-52 bg-gradient-to-b from-[#333333] to-[#1a1a1a] rounded-t-2xl rounded-b-[30%] shadow-2xl relative overflow-hidden">
                  {/* Cap */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-accent rounded-t-lg" />

                  {/* Label */}
                  <div className="absolute top-10 left-3 right-3 bottom-16 bg-gradient-to-b from-[#FFEFE6] to-[#F5E6DC] rounded-xl p-2">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <div className="text-[8px] font-bold text-[#333333] tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                          KASHE ENERGY
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#333333]" style={{ fontFamily: "var(--font-inter)" }}>
                          {product.name.split(" ")[1]}
                        </div>
                        <div className="text-[10px] text-accent font-medium">
                          {product.specs["SAE Grade"] || "Premium"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Oil shimmer */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-accent/60 to-transparent rounded-b-[30%]"
                    animate={{
                      opacity: [0.6, 0.8, 0.6],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Shadow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/20 rounded-full blur-md" />
              </div>
            </motion.div>

            {/* Category badge */}
            <div className="absolute top-6 left-6">
              <span
                className="inline-block px-3 py-1.5 bg-[#333333]/90 text-white text-xs font-medium rounded-full backdrop-blur-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {product.category}
              </span>
            </div>

            {/* Featured badge */}
            {product.featured && (
              <div className="absolute top-6 right-6">
                <span
                  className="inline-block px-3 py-1.5 bg-accent text-white text-xs font-medium rounded-full"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Featured
                </span>
              </div>
            )}

            {/* Hover arrow */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/30">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3
              className="text-xl font-semibold text-[#333333] mb-2 group-hover:text-accent transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {product.name}
            </h3>
            <p className="text-[#333333]/60 text-sm line-clamp-2 mb-4">
              {product.shortDescription}
            </p>

            {/* Quick specs */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                <span
                  key={key}
                  className="inline-block px-3 py-1 bg-[#333333]/5 text-[#333333]/70 text-xs rounded-full"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProductsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const products = getFeaturedProducts();

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-[#FFEFE6]">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
            >
              <Droplets className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent" style={{ fontFamily: "var(--font-inter)" }}>
                Premium Collection
              </span>
            </motion.span>

            <h2
              className="text-[#333333] mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Featured Products
            </h2>
            <p className="text-xl text-[#333333]/60 max-w-xl">
              Discover our most popular lubricants, trusted by professionals and enthusiasts worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="outline" size="lg" asChild className="group">
              <Link href="/products">
                View All Products
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-12 border-t border-[#333333]/10"
        >
          <div className="flex flex-wrap items-center justify-center gap-12 text-[#333333]/40">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm" style={{ fontFamily: "var(--font-inter)" }}>Full Synthetic Formulas</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm" style={{ fontFamily: "var(--font-inter)" }}>OEM Approved</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm" style={{ fontFamily: "var(--font-inter)" }}>Extended Protection</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm" style={{ fontFamily: "var(--font-inter)" }}>Global Shipping</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
