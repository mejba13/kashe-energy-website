"use client";

import { use, useRef } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header, Footer, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getProductBySlug,
  getProductsByCategory,
} from "@/data/products";
import {
  ArrowLeft,
  Download,
  Check,
  FileText,
  ArrowRight,
  Share2,
  ChevronRight,
  Sparkles,
  Shield,
  Zap,
  Droplets,
  Star,
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const product = getProductBySlug(resolvedParams.slug);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <Header />

      <main>
        {/* Premium Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[80vh] flex items-end overflow-hidden bg-[#1a1a1a]"
        >
          {/* Background layers */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(223,68,24,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(223,68,24,0.1),transparent_50%)]" />

            {/* Animated grid */}
            <motion.div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />

            {/* Floating orbs */}
            <motion.div
              className="absolute top-20 right-[15%] w-80 h-80 bg-accent/20 rounded-full blur-[120px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-40 left-[5%] w-64 h-64 bg-accent/15 rounded-full blur-[100px]"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </div>

          <Container className="relative z-10 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
              {/* Left: Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  style={{ scale: imageScale }}
                  className="aspect-square rounded-3xl bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] overflow-hidden relative border border-white/5"
                >
                  {/* Product visual placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-48 h-48 rounded-full bg-accent/20 blur-3xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute w-32 h-32 rounded-full bg-accent/30 blur-xl"
                      animate={{ scale: [1.2, 1, 1.2] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Bottle silhouette placeholder */}
                    <div className="absolute w-24 h-48 bg-gradient-to-b from-white/10 to-white/5 rounded-t-2xl rounded-b-lg" />
                  </div>

                  {/* Decorative ring */}
                  <motion.div
                    className="absolute inset-8 border border-white/5 rounded-3xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Featured badge */}
                  {product.featured && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="absolute top-6 left-6"
                    >
                      <Badge className="bg-accent text-white border-0 shadow-lg shadow-accent/30 px-4 py-2">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Featured
                      </Badge>
                    </motion.div>
                  )}
                </motion.div>

                {/* Floating specs cards */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -left-6 top-1/4 px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-sm font-semibold text-white">OEM Approved</div>
                      <div className="text-xs text-white/50">500+ certifications</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -right-6 bottom-1/4 px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-sm font-semibold text-white">Premium Quality</div>
                      <div className="text-xs text-white/50">Advanced formula</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                style={{ y: heroY }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-white/40">
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                  <Link href="/products" className="hover:text-white transition-colors">
                    Products
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                  <Link
                    href={`/products?category=${product.categorySlug}`}
                    className="hover:text-white transition-colors"
                  >
                    {product.category}
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">{product.name}</span>
                </nav>

                {/* Category badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                    <Droplets className="w-4 h-4 text-accent" />
                    <span
                      className="text-sm font-medium text-accent"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {product.category}
                    </span>
                  </span>
                </motion.div>

                {/* Title */}
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {product.name}
                </h1>

                {/* Short description */}
                <p className="text-xl text-white/70">{product.shortDescription}</p>

                {/* Full description */}
                <p className="text-white/50">{product.description}</p>

                {/* Key specs preview */}
                <div className="flex flex-wrap gap-3">
                  {Object.entries(product.specs)
                    .slice(0, 4)
                    .map(([key, value]) => (
                      <div
                        key={key}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full"
                      >
                        <span className="text-white/50 text-sm">{key}: </span>
                        <span className="text-white text-sm font-medium">{value}</span>
                      </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact?type=quote">
                      Request a Quote
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  {product.datasheet && (
                    <Button size="lg" variant="outline-light" asChild>
                      <a href={product.datasheet} download>
                        <Download className="w-4 h-4" />
                        Download Data Sheet
                      </a>
                    </Button>
                  )}
                  <Button
                    size="icon"
                    variant="ghost-light"
                    aria-label="Share"
                    className="w-12 h-12"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </Container>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFEFE6] to-transparent" />
        </section>

        {/* Product Details Tabs */}
        <section className="py-16 md:py-24 bg-[#FFEFE6]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Tabs defaultValue="benefits" className="w-full">
                <TabsList className="mb-8 flex-wrap h-auto gap-2 bg-transparent p-0 justify-start">
                  {["benefits", "specs", "applications"].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-accent/25 rounded-full px-6 py-3 text-[#333333] bg-white border border-[#333333]/10 transition-all duration-300"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="benefits" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-[#333333]/5"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-accent" />
                      </div>
                      <h2
                        className="text-2xl font-bold text-[#333333]"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Key Benefits
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-[#FFEFE6] rounded-2xl"
                        >
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-[#333333]">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="specs" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-[#333333]/5"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-accent" />
                      </div>
                      <h2
                        className="text-2xl font-bold text-[#333333]"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Technical Specifications
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(product.specs).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="flex justify-between items-center p-4 bg-[#FFEFE6] rounded-2xl"
                        >
                          <span className="text-[#333333]/60">{key}</span>
                          <span
                            className="font-semibold text-[#333333]"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            {value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    {product.datasheet && (
                      <div className="mt-8 pt-6 border-t border-[#333333]/10">
                        <Button variant="outline" asChild className="group">
                          <a href={product.datasheet} download>
                            <FileText className="w-4 h-4" />
                            Download Full Data Sheet (PDF)
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </motion.div>
                </TabsContent>

                <TabsContent value="applications" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-[#333333]/5"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-accent" />
                      </div>
                      <h2
                        className="text-2xl font-bold text-[#333333]"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Recommended Applications
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.applications.map((app, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center gap-4 p-4 bg-[#FFEFE6] rounded-2xl cursor-default"
                        >
                          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-5 h-5 text-accent" />
                          </div>
                          <span className="text-[#333333] font-medium">{app}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </Container>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-20 md:py-32 bg-white">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
              >
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
                    <Droplets className="w-4 h-4 text-accent" />
                    <span
                      className="text-sm font-medium text-accent"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Related Products
                    </span>
                  </span>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-[#333333]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    More from {product.category}
                  </h2>
                </div>
                <Button variant="outline" asChild className="group">
                  <Link href={`/products?category=${product.categorySlug}`}>
                    View All
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/products/${relatedProduct.slug}`}
                      className="group block bg-[#FFEFE6] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10"
                    >
                      {/* Product Image */}
                      <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-[#f5f5f5] to-[#e5e5e5]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="w-20 h-20 rounded-full bg-accent/10"
                            whileHover={{ scale: 1.1 }}
                          />
                          <div className="absolute w-14 h-14 rounded-full bg-accent/20 blur-xl" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <span
                          className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {relatedProduct.category}
                        </span>
                        <h3
                          className="text-lg font-semibold text-[#333333] mt-3 mb-2 group-hover:text-accent transition-colors"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {relatedProduct.name}
                        </h3>
                        <p className="text-[#333333]/60 text-sm line-clamp-2">
                          {relatedProduct.shortDescription}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-[#C23A15] to-[#8B2A0F]">
            {/* Noise texture */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Decorative elements */}
            <motion.div
              className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-[100px]"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.1, 0.15] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
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
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span
                    className="text-sm font-medium text-white"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Ready to Order?
                  </span>
                </span>
              </motion.div>

              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Get {product.name} for Your Business
              </h2>

              <p className="text-xl text-white/80 mb-10">
                Contact our sales team for pricing, availability, and bulk order
                inquiries.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="xl"
                  variant="secondary"
                  asChild
                  className="shadow-2xl shadow-black/20"
                >
                  <Link href="/contact?type=quote">
                    Request a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="xl"
                  variant="outline-light"
                  asChild
                  className="border-white/30 hover:bg-white/10"
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Back to Products */}
        <section className="py-8 bg-[#FFEFE6]">
          <Container>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button variant="ghost" asChild className="group">
                <Link href="/products">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  Back to All Products
                </Link>
              </Button>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
