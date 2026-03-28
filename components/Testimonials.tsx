"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ThaiStripe } from "./ThaiStripe";
import { testimonials, testimonialsSection } from "@/data/testimonials";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Testimonials() {
  return (
    <section className="bg-thai-dark">
      <ThaiStripe />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-thai-gold text-xs tracking-[0.35em] uppercase font-lato mb-3">
            {testimonialsSection.eyebrow}
          </p>
          <h2 className="font-playfair italic text-4xl sm:text-5xl text-white">
            {testimonialsSection.heading}
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div key={t.author} variants={cardAnim}>
              <Card className="bg-thai-crimson border border-thai-gold/20 rounded-xl shadow-xl ring-0 p-0 gap-0 h-full">
                <CardContent className="p-7 flex flex-col gap-4 h-full">
                  <div className="flex gap-1">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#C9A84C" aria-hidden="true">
                        <path d="M8 1L9.8 6H15L10.6 9.2L12.4 14L8 10.8L3.6 14L5.4 9.2L1 6H6.2L8 1Z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-white/80 font-lato text-sm leading-relaxed italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="text-thai-gold font-lato text-sm font-semibold tracking-wide">
                    — {t.author}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ThaiStripe />
    </section>
  );
}
