"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header, Footer, Container } from "@/components/layout";
import { ProductGrid } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/ui/motion";
import {
  getProductBySlug,
  getProductsByCategory,
  products,
  Product,
} from "@/data/products";
import {
  ArrowLeft,
  Download,
  Check,
  FileText,
  ArrowRight,
  Share2,
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const product = getProductBySlug(resolvedParams.slug);

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
        {/* Breadcrumb */}
        <section className="bg-[#333333] pt-32 pb-8">
          <Container>
            <FadeInUp>
              <nav className="flex items-center gap-2 text-sm text-white/50">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
                <span>/</span>
                <Link
                  href={`/products?category=${product.categorySlug}`}
                  className="hover:text-white transition-colors"
                >
                  {product.category}
                </Link>
                <span>/</span>
                <span className="text-white">{product.name}</span>
              </nav>
            </FadeInUp>
          </Container>
        </section>

        {/* Product Hero */}
        <section className="bg-[#333333] pb-20">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <FadeInLeft>
                <div className="aspect-square rounded-[20px] bg-gradient-to-br from-[#444] to-[#222] overflow-hidden relative">
                  {/* Placeholder visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-accent/20 blur-3xl" />
                    <div className="absolute w-32 h-32 rounded-full bg-accent/30 blur-xl" />
                  </div>

                  {/* Featured badge */}
                  {product.featured && (
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-accent text-white">Featured</Badge>
                    </div>
                  )}
                </div>
              </FadeInLeft>

              {/* Content */}
              <FadeInRight>
                <div className="space-y-6">
                  <div>
                    <Badge variant="outline" className="text-white/60 border-white/20 mb-4">
                      {product.category}
                    </Badge>
                    <h1
                      className="text-white mb-4"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {product.name}
                    </h1>
                    <p className="text-xl text-white/70">{product.shortDescription}</p>
                  </div>

                  <p className="text-white/60">{product.description}</p>

                  {/* Key specs preview */}
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(product.specs)
                      .slice(0, 4)
                      .map(([key, value]) => (
                        <div
                          key={key}
                          className="px-4 py-2 bg-white/5 rounded-full"
                        >
                          <span className="text-white/50 text-sm">{key}: </span>
                          <span className="text-white text-sm font-medium">
                            {value}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button size="lg" asChild>
                      <Link href="/contact?type=quote">Request a Quote</Link>
                    </Button>
                    {product.datasheet && (
                      <Button size="lg" variant="outline-light" asChild>
                        <a href={product.datasheet} download>
                          <Download className="w-4 h-4" />
                          Download Data Sheet
                        </a>
                      </Button>
                    )}
                    <Button size="icon" variant="ghost-light" aria-label="Share">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </FadeInRight>
            </div>
          </Container>
        </section>

        {/* Product Details Tabs */}
        <section className="py-16 md:py-24 bg-background">
          <Container>
            <FadeInUp>
              <Tabs defaultValue="benefits" className="w-full">
                <TabsList className="mb-8 flex-wrap h-auto gap-2 bg-transparent p-0">
                  <TabsTrigger
                    value="benefits"
                    className="data-[state=active]:bg-accent data-[state=active]:text-white rounded-full px-6 py-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Benefits
                  </TabsTrigger>
                  <TabsTrigger
                    value="specs"
                    className="data-[state=active]:bg-accent data-[state=active]:text-white rounded-full px-6 py-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Specifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="applications"
                    className="data-[state=active]:bg-accent data-[state=active]:text-white rounded-full px-6 py-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Applications
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="benefits" className="mt-0">
                  <div className="bg-card rounded-[20px] p-8 md:p-12">
                    <h2
                      className="text-2xl font-semibold text-card-foreground mb-6"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Key Benefits
                    </h2>
                    <ul className="space-y-4">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-card-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="specs" className="mt-0">
                  <div className="bg-card rounded-[20px] p-8 md:p-12">
                    <h2
                      className="text-2xl font-semibold text-card-foreground mb-6"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Technical Specifications
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center p-4 bg-background rounded-xl"
                        >
                          <span className="text-muted-foreground">{key}</span>
                          <span
                            className="font-medium text-card-foreground"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                    {product.datasheet && (
                      <div className="mt-8 pt-6 border-t border-border">
                        <Button variant="outline" asChild>
                          <a href={product.datasheet} download>
                            <FileText className="w-4 h-4" />
                            Download Full Data Sheet (PDF)
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="applications" className="mt-0">
                  <div className="bg-card rounded-[20px] p-8 md:p-12">
                    <h2
                      className="text-2xl font-semibold text-card-foreground mb-6"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Recommended Applications
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.applications.map((app, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-background rounded-xl"
                        >
                          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-5 h-5 text-accent" />
                          </div>
                          <span className="text-card-foreground">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </FadeInUp>
          </Container>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 md:py-24 bg-card">
            <Container>
              <FadeInUp className="flex items-end justify-between mb-12">
                <div>
                  <h2
                    className="text-foreground mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Related Products
                  </h2>
                  <p className="text-muted-foreground">
                    More from our {product.category} range
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link href={`/products?category=${product.categorySlug}`}>
                    View All
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </FadeInUp>

              <ProductGrid products={relatedProducts} columns={3} />
            </Container>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 md:py-24 bg-accent">
          <Container>
            <FadeInUp className="text-center">
              <h2
                className="text-white mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Ready to Order {product.name}?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Contact our sales team for pricing, availability, and bulk order
                inquiries.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact?type=quote">Request a Quote</Link>
                </Button>
                <Button size="lg" variant="outline-light" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </FadeInUp>
          </Container>
        </section>

        {/* Back to Products */}
        <section className="py-8 bg-background">
          <Container>
            <Button variant="ghost" asChild>
              <Link href="/products">
                <ArrowLeft className="w-4 h-4" />
                Back to All Products
              </Link>
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
