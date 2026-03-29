import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AnnouncementDialog from "@/components/AnnouncementDialog";
import RestaurantJsonLd from "@/components/RestaurantJsonLd";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/data/site";

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
  metadataBase: new URL(site.url),
  title: {
    default: site.meta.title,
    template: "%s | Good Thai",
  },
  description: site.meta.description,
  keywords: site.meta.keywords,
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: site.url,
    siteName: site.name,
    title: site.meta.title,
    description: site.meta.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Good Thai Restaurant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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
        <RestaurantJsonLd />
        <Analytics />
        <AnnouncementDialog />
        {children}
      </body>
    </html>
  );
}
