"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Kashe Energy has been our exclusive lubricant partner for over 15 years. Their products consistently exceed our expectations, and their technical support is unmatched in the industry.",
    author: "Michael Torres",
    role: "Fleet Manager",
    company: "Continental Logistics",
    rating: 5,
  },
  {
    quote: "After switching to Kashe Ultra, we've seen a 40% reduction in engine wear across our entire fleet. The extended drain intervals have significantly cut our maintenance costs.",
    author: "Sarah Chen",
    role: "Operations Director",
    company: "Pacific Transport Co.",
    rating: 5,
  },
  {
    quote: "The performance difference is remarkable. Our racing team has relied on Kashe Racing oils for three championship seasons. Nothing else comes close.",
    author: "James Morrison",
    role: "Team Principal",
    company: "Morrison Racing",
    rating: 5,
  },
  {
    quote: "Superior product quality combined with responsive customer service. Kashe Energy understands what industrial operations need and delivers consistently.",
    author: "Robert Williams",
    role: "Plant Manager",
    company: "Midwest Manufacturing",
    rating: 5,
  },
];

export function TestimonialsPremium() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#FFEFE6]">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
          >
            <Quote className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent" style={{ fontFamily: "var(--font-inter)" }}>
              Testimonials
            </span>
          </span>

          <h2
            className="text-[#333333]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote icon */}
          <div className="absolute -top-8 left-0 w-20 h-20 text-accent/10">
            <Quote className="w-full h-full" />
          </div>

          {/* Testimonial content */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className="text-2xl md:text-3xl lg:text-4xl text-[#333333] leading-relaxed mb-10 font-light"
                >
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <div
                    className="text-lg font-semibold text-[#333333]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {testimonials[current].author}
                  </div>
                  <div className="text-[#333333]/60">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[#333333]/20 flex items-center justify-center text-[#333333]/60 hover:border-accent hover:text-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrent(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-accent"
                      : "bg-[#333333]/20 hover:bg-[#333333]/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-[#333333]/20 flex items-center justify-center text-[#333333]/60 hover:border-accent hover:text-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
