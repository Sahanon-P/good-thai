"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ThaiStripe } from "./ThaiStripe";
import { chefs, chefsSection } from "@/data/chefs";

export default function Chefs() {
  return (
    <section id="chefs" className="bg-thai-dark">
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
            {chefsSection.eyebrow}
          </p>
          <h2 className="font-playfair italic text-4xl sm:text-5xl text-white">
            {chefsSection.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Team photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-xl overflow-hidden shadow-2xl aspect-4/5"
          >
            <Image
              src={chefsSection.teamImage.src}
              alt={chefsSection.teamImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-thai-dark/60 to-transparent" />
          </motion.div>

          {/* Chef profiles */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            {chefs.map((chef, i) => (
              <motion.div
                key={chef.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex gap-5 items-start"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-thai-gold/60 shadow-lg">
                  <Image
                    src={chef.image.src}
                    alt={chef.image.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <p className="text-thai-gold text-xs tracking-widest uppercase font-lato mb-1">
                    {chef.title}
                  </p>
                  <h3 className="font-playfair italic text-xl text-white mb-2">{chef.name}</h3>
                  <p className="text-white/65 text-sm font-lato leading-relaxed">{chef.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <ThaiStripe />
    </section>
  );
}
