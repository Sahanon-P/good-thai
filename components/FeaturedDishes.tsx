"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MenuCard from "@/components/menu/MenuCard";
import { menuItems } from "@/data/menu";

const popular = menuItems.filter((item) => item.isPopular).slice(0, 6);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function FeaturedDishes() {
  return (
    <section id="menu" className="bg-thai-crimson py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-thai-gold text-xs tracking-[0.35em] uppercase font-lato mb-3">
            Our Specialities
          </p>
          <h2 className="font-playfair italic text-4xl sm:text-5xl text-white mb-4">
            Pride Dishes
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-thai-gold/60" />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="3" fill="#C9A84C" />
              <circle cx="10" cy="10" r="7" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
              <circle cx="10" cy="10" r="9.5" stroke="#C9A84C" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
            </svg>
            <div className="h-px w-16 bg-thai-gold/60" />
          </div>
        </motion.div>

        {/* Dish cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {popular.map((dish) => (
            <motion.div key={dish.id} variants={cardAnim}>
              <MenuCard item={dish} activePeriod="lunch" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-col items-center gap-5"
        >
          <p className="text-white/60 font-lato text-sm tracking-wide">
            Explore our full menu of 40+ dishes
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              className="bg-thai-gold text-thai-dark hover:bg-thai-gold/90 font-bold px-7 h-10 tracking-wide"
            >
              <Link href="/menu?period=lunch">Lunch Menu</Link>
            </Button>
            <Button
              asChild
              className="border border-thai-gold text-thai-gold bg-transparent hover:bg-thai-gold hover:text-thai-dark font-semibold px-7 h-10 tracking-wide transition-all"
            >
              <Link href="/menu?period=dinner">Dinner Menu</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
