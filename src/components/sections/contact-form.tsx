"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import { Send, Check } from "lucide-react";

interface ContactFormProps {
  variant?: "default" | "quote" | "distributor";
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-card rounded-[20px] p-8 md:p-12 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-accent" />
        </div>
        <h3
          className="text-2xl font-semibold text-card-foreground mb-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Thank You!
        </h3>
        <p className="text-muted-foreground">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  const getTitle = () => {
    switch (variant) {
      case "quote":
        return "Request a Quote";
      case "distributor":
        return "Find a Distributor";
      default:
        return "Get in Touch";
    }
  };

  const getDescription = () => {
    switch (variant) {
      case "quote":
        return "Tell us about your requirements and we'll provide a customized quote.";
      case "distributor":
        return "Looking to become a distributor? Let's discuss partnership opportunities.";
      default:
        return "Have a question or want to learn more? We'd love to hear from you.";
    }
  };

  return (
    <motion.div
      className="bg-card rounded-[20px] p-8 md:p-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
    >
      <motion.div variants={fadeInUp} className="mb-8">
        <h3
          className="text-2xl md:text-3xl font-semibold text-card-foreground mb-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {getTitle()}
        </h3>
        <p className="text-muted-foreground">{getDescription()}</p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              required
              className="h-12 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              required
              className="h-12 rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              required
              className="h-12 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone (Optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="h-12 rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            placeholder="Your company name"
            className="h-12 rounded-xl"
          />
        </motion.div>

        {variant === "quote" && (
          <motion.div variants={fadeInUp} className="space-y-2">
            <Label htmlFor="products">Products of Interest</Label>
            <Input
              id="products"
              name="products"
              placeholder="e.g., Engine oils, Transmission fluids"
              className="h-12 rounded-xl"
            />
          </motion.div>
        )}

        {variant === "distributor" && (
          <motion.div variants={fadeInUp} className="space-y-2">
            <Label htmlFor="region">Region/Territory</Label>
            <Input
              id="region"
              name="region"
              placeholder="e.g., Northeast USA, Western Europe"
              className="h-12 rounded-xl"
            />
          </motion.div>
        )}

        <motion.div variants={fadeInUp} className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us more about your needs..."
            rows={5}
            required
            className="rounded-xl resize-none"
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Button
            type="submit"
            size="lg"
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
