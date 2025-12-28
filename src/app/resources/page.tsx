"use client";

import { useState } from "react";
import { Header, Footer, Container } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { products } from "@/data/products";
import { Search, Download, FileText, Book, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

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

const resourceCategories = [
  { id: "datasheets", label: "Data Sheets", icon: <FileText className="w-4 h-4" /> },
  { id: "guides", label: "User Guides", icon: <Book className="w-4 h-4" /> },
  { id: "msds", label: "Safety Data", icon: <HelpCircle className="w-4 h-4" /> },
];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Get products with datasheets
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
        <PageHeader
          title="Resources"
          description="Technical documentation, data sheets, and helpful guides for our products."
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
          ]}
        />

        {/* Downloads Section */}
        <section className="py-20 md:py-32 bg-background">
          <Container>
            <FadeInUp className="mb-12">
              <h2
                className="text-foreground mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Product Documentation
              </h2>
              <p className="text-muted-foreground mb-8">
                Download technical data sheets and product specifications.
              </p>

              {/* Search */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10 h-12 rounded-xl"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </FadeInUp>

            {/* Documents List */}
            <StaggerContainer className="grid gap-4">
              {filteredProducts.map((product) => (
                <StaggerItem key={product.slug}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-card rounded-[20px] hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3
                          className="font-semibold text-card-foreground"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {product.category} &bull; Technical Data Sheet
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 sm:flex-shrink-0">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/products/${product.slug}`}>View Product</Link>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={product.datasheet} download>
                          <Download className="w-4 h-4" />
                          Download PDF
                        </a>
                      </Button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {filteredProducts.length === 0 && (
              <FadeInUp className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No documents found matching your search.
                </p>
                <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
              </FadeInUp>
            )}
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-card">
          <Container>
            <FadeInUp className="text-center mb-12">
              <h2
                className="text-foreground mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our products and
                lubricant technology.
              </p>
            </FadeInUp>

            <FadeInUp>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-background rounded-[20px] px-6 border-none"
                    >
                      <AccordionTrigger
                        className="text-left hover:no-underline py-6"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        <span className="font-semibold text-card-foreground pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </FadeInUp>

            <FadeInUp className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Still have questions?
              </p>
              <Button asChild>
                <Link href="/contact">
                  Contact Our Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </FadeInUp>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-[#333333]">
          <Container>
            <FadeInUp className="text-center">
              <h2
                className="text-white mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Need Technical Assistance?
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                Our technical support team is available to help you find the
                right product and answer any questions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline-light" asChild>
                  <Link href="/products">Browse Products</Link>
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
