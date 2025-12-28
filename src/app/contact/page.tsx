"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header, Footer, Container } from "@/components/layout";
import { PageHeader, ContactForm } from "@/components/sections";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/ui/motion";
import { siteConfig } from "@/data/site";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

function ContactContent() {
  const searchParams = useSearchParams();
  const formType = searchParams.get("type") as "quote" | "distributor" | null;

  return (
    <>
      <Header />

      <main>
        <PageHeader
          title="Contact Us"
          description="Get in touch with our team. We're here to help with any questions or inquiries."
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]}
        />

        {/* Contact Section */}
        <section className="py-20 md:py-32 bg-background">
          <Container>
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info */}
              <FadeInLeft className="lg:col-span-2 space-y-8">
                <div>
                  <h2
                    className="text-2xl font-semibold text-foreground mb-6"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground">
                    Have a question about our products or need technical
                    assistance? Our team is ready to help.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-foreground mb-1"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Email
                      </h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-foreground mb-1"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Phone
                      </h3>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-foreground mb-1"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Address
                      </h3>
                      <address className="text-muted-foreground not-italic">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.city}, {siteConfig.address.state}{" "}
                        {siteConfig.address.zip}
                        <br />
                        {siteConfig.address.country}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-foreground mb-1"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Business Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM CST
                        <br />
                        Saturday: 9:00 AM - 1:00 PM CST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3
                    className="font-semibold text-foreground mb-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeInLeft>

              {/* Contact Form */}
              <FadeInRight className="lg:col-span-3">
                <ContactForm variant={formType || "default"} />
              </FadeInRight>
            </div>
          </Container>
        </section>

        {/* Map Placeholder */}
        <section className="h-[400px] bg-[#333333] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <p
                className="text-white/60"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Map integration coming soon
              </p>
            </div>
          </div>
        </section>

        {/* Additional CTA */}
        <section className="py-16 md:py-24 bg-card">
          <Container>
            <FadeInUp className="text-center">
              <h2
                className="text-2xl font-semibold text-foreground mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Looking for Something Specific?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Check out our products, resources, or learn more about partnering
                with Kashe Energy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/products"
                  className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  View Products
                </a>
                <a
                  href="/resources"
                  className="px-6 py-3 border border-foreground/20 text-foreground rounded-full font-medium hover:bg-foreground/5 transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Resources
                </a>
                <a
                  href="/about"
                  className="px-6 py-3 border border-foreground/20 text-foreground rounded-full font-medium hover:bg-foreground/5 transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  About Us
                </a>
              </div>
            </FadeInUp>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}
