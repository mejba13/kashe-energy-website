"use client";

import { Header, Footer } from "@/components/layout";
import {
  HeroPremium,
  FeaturesPremium,
  ProductsShowcase,
  StorySection,
  TestimonialsPremium,
  ApplicationsPremium,
  CTAPremium,
  TrustStrip,
} from "@/components/sections";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* Cinematic Hero Section */}
        <HeroPremium />

        {/* Trust Strip - Certifications */}
        <TrustStrip certifications={siteConfig.certifications.slice(0, 4)} />

        {/* Premium Features Bento Grid */}
        <FeaturesPremium />

        {/* Dramatic Products Showcase */}
        <ProductsShowcase />

        {/* Parallax Story Section */}
        <StorySection />

        {/* Premium Testimonials Carousel */}
        <TestimonialsPremium />

        {/* Applications with Hover Effects */}
        <ApplicationsPremium />

        {/* Striking CTA Section */}
        <CTAPremium />
      </main>

      <Footer />
    </>
  );
}
