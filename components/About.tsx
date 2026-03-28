"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ThaiStripe } from "./ThaiStripe";
import { about } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="bg-thai-dark">
      <ThaiStripe />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-xl overflow-hidden shadow-2xl aspect-4/3"
          >
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gold corner accents */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-thai-gold" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-thai-gold" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-thai-gold" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-thai-gold" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Gold accent line */}
            <div className="w-16 h-0.5 bg-thai-gold" />

            <h2 className="font-playfair italic text-3xl sm:text-4xl text-white leading-snug">
              {about.headline}
              <br />
              <span className="text-thai-gold">{about.headlineAccent}</span>
            </h2>

            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-white/75 font-lato leading-relaxed text-base">
                {p}
              </p>
            ))}

            <div className="flex flex-col sm:flex-row gap-8 mt-2">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-thai-gold font-playfair italic text-3xl">{stat.value}</p>
                  <p className="text-white/60 text-sm font-lato mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <ThaiStripe />
    </section>
  );
}
