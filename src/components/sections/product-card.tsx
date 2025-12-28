"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { fadeInUp, hoverLift } from "@/lib/animations";
import { Product } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  className?: string;
  variant?: "default" | "featured";
}

export function ProductCard({
  product,
  className,
  variant = "default",
}: ProductCardProps) {
  const isFeatured = variant === "featured";

  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "group relative bg-card rounded-[20px] overflow-hidden",
        "transition-shadow duration-300 hover:shadow-xl",
        isFeatured ? "col-span-full md:col-span-2" : "",
        className
      )}
    >
      <Link href={`/products/${product.slug}`} className="block">
        <motion.div
          className="h-full"
          initial="rest"
          whileHover="hover"
          variants={hoverLift}
        >
          {/* Image area */}
          <div
            className={cn(
              "relative bg-gradient-to-br from-[#333333] to-[#2a2a2a]",
              isFeatured ? "aspect-[2/1]" : "aspect-[4/3]"
            )}
          >
            {/* Placeholder visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-accent/20 blur-2xl" />
              <div className="absolute w-16 h-16 rounded-full bg-accent/30 blur-xl" />
            </div>

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span
                className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {product.category}
              </span>
            </div>

            {/* Featured badge */}
            {product.featured && !isFeatured && (
              <div className="absolute top-4 right-4">
                <span
                  className="inline-block px-3 py-1 bg-accent text-white text-xs font-medium rounded-full"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Featured
                </span>
              </div>
            )}

            {/* Hover arrow */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3
              className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {product.name}
            </h3>
            <p className="text-muted-foreground line-clamp-2">
              {product.shortDescription}
            </p>

            {/* Quick specs */}
            {isFeatured && product.specs && (
              <div className="mt-4 flex flex-wrap gap-2">
                {Object.entries(product.specs)
                  .slice(0, 3)
                  .map(([key, value]) => (
                    <span
                      key={key}
                      className="inline-block px-3 py-1 bg-muted text-sm text-muted-foreground rounded-full"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {key}: {value}
                    </span>
                  ))}
              </div>
            )}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

// Product Grid Component
interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ProductGrid({
  products,
  columns = 3,
  className,
}: ProductGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <motion.div
      className={cn("grid gap-6", gridCols[columns], className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </motion.div>
  );
}
