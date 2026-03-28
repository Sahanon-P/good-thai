import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Good Thai — Authentic Thai Restaurant",
  description:
    "Experience authentic Thai cuisine in a chic, elegant environment. Dine in, takeaway, fully licensed / BYO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        playfairDisplay.variable,
        lato.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-thai-crimson font-lato text-white">
        {children}
      </body>
    </html>
  );
}
