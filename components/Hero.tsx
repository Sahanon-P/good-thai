"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThaiStripe } from "./ThaiStripe";
import { ThaiOrnament } from "./ThaiOrnament";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-thai-crimson"
    >
      {/* Thai pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M30 0 L35 10 L45 10 L37 16 L40 26 L30 20 L20 26 L23 16 L15 10 L25 10 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-thai-dark/60 via-transparent to-thai-dark/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-thai-gold text-sm tracking-[0.3em] uppercase mb-4 font-lato"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair italic text-6xl sm:text-7xl lg:text-8xl text-white leading-tight mb-6"
        >
          {hero.heading}
        </motion.h1>

        {/* Thai flag stripe divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xs mx-auto mb-6"
        >
          <ThaiStripe />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-lato leading-relaxed"
        >
          {hero.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            className="bg-thai-gold text-thai-dark hover:bg-thai-gold/90 font-bold px-8 py-3 h-auto text-base tracking-wide"
          >
            <Link href={hero.ctas.primary.href}>{hero.ctas.primary.label}</Link>
          </Button>
          <Button
            asChild
            className="border border-white text-white bg-transparent hover:bg-white hover:text-thai-crimson font-semibold px-8 py-3 h-auto text-base tracking-wide transition-all"
          >
            <Link href={hero.ctas.secondary.href}>{hero.ctas.secondary.label}</Link>
          </Button>
        </motion.div>
      </div>

      {/* Gold scroll ornaments */}
      <div className="absolute bottom-4 left-4 opacity-70">
        <ThaiOrnament size={120} />
      </div>
      <div className="absolute bottom-4 right-4 opacity-70">
        <ThaiOrnament size={120} flip />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-thai-gold/60 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-6 bg-linear-to-b from-thai-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
