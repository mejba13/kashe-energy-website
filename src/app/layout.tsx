import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kashe Energy | Premium Automotive Lubricants & Energy Solutions",
    template: "%s | Kashe Energy",
  },
  description:
    "Kashe Energy delivers premium automotive lubricants and energy solutions engineered for peak performance. Trusted by professionals worldwide.",
  keywords: [
    "automotive lubricants",
    "engine oil",
    "motor oil",
    "energy solutions",
    "premium lubricants",
    "Kashe Energy",
  ],
  authors: [{ name: "Kashe Energy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kashe Energy",
    title: "Kashe Energy | Premium Automotive Lubricants",
    description:
      "Premium automotive lubricants and energy solutions engineered for peak performance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashe Energy | Premium Automotive Lubricants",
    description:
      "Premium automotive lubricants and energy solutions engineered for peak performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
