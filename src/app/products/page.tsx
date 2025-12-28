"use client";

import { useState } from "react";
import { Header, Footer, Container } from "@/components/layout";
import { PageHeader, ProductGrid } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeInUp } from "@/components/ui/motion";
import { products, productCategories } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProducts = activeCategory
    ? products.filter((p) => p.categorySlug === activeCategory)
    : products;

  return (
    <>
      <Header />

      <main>
        <PageHeader
          title="Our Products"
          description="Explore our complete range of premium lubricants engineered for peak performance."
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
          ]}
        />

        <section className="py-16 md:py-24 bg-background">
          <Container>
            {/* Category Filters */}
            <FadeInUp className="mb-12">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="text-sm text-muted-foreground mr-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Filter by:
                </span>
                <Button
                  variant={activeCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(null)}
                >
                  All Products
                </Button>
                {productCategories.map((category) => (
                  <Button
                    key={category.slug}
                    variant={activeCategory === category.slug ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category.slug)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </FadeInUp>

            {/* Results count */}
            <FadeInUp className="mb-8">
              <p className="text-muted-foreground">
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {filteredProducts.length}
                </span>{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
                {activeCategory && (
                  <>
                    {" "}
                    in{" "}
                    <span className="font-semibold text-foreground">
                      {productCategories.find((c) => c.slug === activeCategory)?.name}
                    </span>
                  </>
                )}
              </p>
            </FadeInUp>

            {/* Products Grid */}
            <ProductGrid products={filteredProducts} columns={3} />

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <FadeInUp className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  No products found in this category.
                </p>
                <Button onClick={() => setActiveCategory(null)}>
                  View All Products
                </Button>
              </FadeInUp>
            )}
          </Container>
        </section>

        {/* Category Descriptions */}
        <section className="py-16 md:py-24 bg-card">
          <Container>
            <FadeInUp className="text-center mb-12">
              <h2
                className="text-foreground mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Product Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find the right lubricant for your specific needs.
              </p>
            </FadeInUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productCategories.map((category, index) => (
                <FadeInUp key={category.slug} delay={index * 0.1}>
                  <button
                    onClick={() => {
                      setActiveCategory(category.slug);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={cn(
                      "w-full text-left p-6 rounded-[20px] transition-all duration-300",
                      "hover:shadow-lg",
                      activeCategory === category.slug
                        ? "bg-accent text-white"
                        : "bg-background hover:bg-background/80"
                    )}
                  >
                    <h3
                      className={cn(
                        "text-xl font-semibold mb-2",
                        activeCategory === category.slug
                          ? "text-white"
                          : "text-card-foreground"
                      )}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {category.name}
                    </h3>
                    <p
                      className={cn(
                        "text-sm",
                        activeCategory === category.slug
                          ? "text-white/80"
                          : "text-muted-foreground"
                      )}
                    >
                      {category.description}
                    </p>
                    <div className="mt-4">
                      <Badge
                        variant={
                          activeCategory === category.slug ? "secondary" : "outline"
                        }
                      >
                        {products.filter((p) => p.categorySlug === category.slug).length}{" "}
                        products
                      </Badge>
                    </div>
                  </button>
                </FadeInUp>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-[#333333]">
          <Container>
            <FadeInUp className="text-center">
              <h2
                className="text-white mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Need Help Choosing?
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                Our technical team can help you find the perfect lubricant for
                your specific application.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <a href="/contact?type=quote">Request a Quote</a>
                </Button>
                <Button variant="outline-light" asChild>
                  <a href="/resources">Download Data Sheets</a>
                </Button>
              </div>
            </FadeInUp>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
