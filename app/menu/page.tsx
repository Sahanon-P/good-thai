import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThaiStripe } from "@/components/ThaiStripe";
import { ThaiOrnament } from "@/components/ThaiOrnament";
import MenuClient from "@/components/menu/MenuClient";
import { menuItems } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse the full Good Thai menu — starters, soups, curries, noodles, rice & salads. Authentic Thai dishes available for lunch and dinner in Burnside, Christchurch.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Menu | Good Thai",
    description:
      "Explore 40+ authentic Thai dishes at Good Thai, Burnside Christchurch. Lunch & dinner menus with curries, noodles, soups and more.",
    url: "/menu",
  },
};

export default async function MenuPage({
  searchParams,
}: {
  searchParams: Promise<{ period?: string; type?: string; tags?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative flex flex-col items-center justify-center pt-28 pb-16 bg-thai-crimson overflow-hidden">
        {/* Thai pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M30 0 L35 10 L45 10 L37 16 L40 26 L30 20 L20 26 L23 16 L15 10 L25 10 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-thai-dark/50 to-transparent pointer-events-none" />

        {/* Corner ornaments */}
        <div className="absolute bottom-0 left-0 opacity-40 pointer-events-none">
          <ThaiOrnament size={110} />
        </div>
        <div className="absolute bottom-0 right-0 opacity-40 pointer-events-none">
          <ThaiOrnament size={110} flip />
        </div>

        <div className="relative z-10 text-center px-4">
          <p className="text-thai-gold text-xs tracking-[0.35em] uppercase font-lato mb-3">
            Good Thai Restaurant
          </p>
          <h1 className="font-playfair italic text-5xl sm:text-6xl lg:text-7xl text-white mb-4">
            Our Menu
          </h1>
          <p className="text-white/70 font-lato text-base sm:text-lg max-w-xl mx-auto">
            40+ authentic Thai dishes, crafted fresh daily
          </p>
        </div>

        <div className="relative z-10 w-full mt-10">
          <ThaiStripe />
        </div>
      </section>

      <MenuClient
        menuItems={menuItems}
        initialPeriod={params.period}
        initialType={params.type}
        initialTags={params.tags}
      />

      <Footer />
    </div>
  );
}
