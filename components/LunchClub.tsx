"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThaiStripe } from "./ThaiStripe";
import { lunchClub } from "@/data/site";

export default function LunchClub() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="bg-thai-crimson">
      <ThaiStripe />
      <div className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          {/* Small lotus motif */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            className="mx-auto mb-5"
            aria-hidden="true"
          >
            <ellipse cx="18" cy="20" rx="4" ry="9" fill="#C9A84C" opacity="0.9" />
            <ellipse cx="18" cy="20" rx="4" ry="9" fill="#C9A84C" opacity="0.9" transform="rotate(50 18 18)" />
            <ellipse cx="18" cy="20" rx="4" ry="9" fill="#C9A84C" opacity="0.9" transform="rotate(-50 18 18)" />
            <ellipse cx="18" cy="20" rx="4" ry="9" fill="#C9A84C" opacity="0.9" transform="rotate(100 18 18)" />
            <ellipse cx="18" cy="20" rx="4" ry="9" fill="#C9A84C" opacity="0.9" transform="rotate(-100 18 18)" />
            <circle cx="18" cy="18" r="5" fill="#7A0020" />
            <circle cx="18" cy="18" r="2.5" fill="#C9A84C" />
          </svg>

          <h2 className="font-playfair italic text-4xl sm:text-5xl text-white mb-4">
            {lunchClub.heading}
          </h2>
          <p className="text-white/75 font-lato text-base leading-relaxed mb-8">
            {lunchClub.description}
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-thai-gold font-playfair italic text-xl"
            >
              {lunchClub.successMessage}
            </motion.p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder={lunchClub.inputPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-thai-dark/60 border-thai-gold/50 text-white placeholder:text-white/40 focus-visible:border-thai-gold focus-visible:ring-thai-gold/30 h-11"
              />
              <Button
                type="submit"
                className="bg-thai-gold text-thai-dark font-bold hover:bg-thai-gold/90 h-11 px-6 shrink-0 tracking-wide"
              >
                {lunchClub.cta}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
      <ThaiStripe />
    </section>
  );
}
