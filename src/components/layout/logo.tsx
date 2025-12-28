"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "text-[#333333]" : "text-white";
  const accentColor = "#DF4418";

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 group", className)}
      aria-label="Kashe Energy - Home"
    >
      {/* Logo Mark */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        {/* Outer ring */}
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke={accentColor}
          strokeWidth="2"
          fill="none"
        />
        {/* Inner dynamic shape - representing energy flow */}
        <path
          d="M20 6C20 6 28 14 28 20C28 26 24 32 20 34C16 32 12 26 12 20C12 14 20 6 20 6Z"
          fill={accentColor}
        />
        {/* K letter stylized */}
        <path
          d="M17 14V26M17 20L23 14M17 20L23 26"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "text-xl font-semibold tracking-tight transition-colors",
            textColor
          )}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          KASHE
        </span>
        <span
          className="text-[10px] font-medium tracking-[0.2em] uppercase"
          style={{ color: accentColor }}
        >
          ENERGY
        </span>
      </div>
    </Link>
  );
}
