"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { MenuItem, MealPeriod } from "@/data/menu";
import { spiceLevels } from "@/data/menu";

// ── Tag display maps ──────────────────────────────────────────────────────────

const tagEmoji: Record<string, string> = {
  chicken:       "🍗",
  beef:          "🥩",
  pork:          "🐷",
  seafood:       "🦐",
  vegetarian:    "🥦",
  "gluten-free": "🌾",
};

const tagLabel: Record<string, string> = {
  chicken:       "Chicken",
  beef:          "Beef",
  pork:          "Pork",
  seafood:       "Seafood",
  vegetarian:    "Vegetarian",
  "gluten-free": "GF",
};

// ── Component ─────────────────────────────────────────────────────────────────

interface Props {
  item: MenuItem;
  activePeriod?: MealPeriod;
}

export default function MenuCard({ item, activePeriod = "lunch" }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);

  // Detect whether the clamped text is actually truncated
  useEffect(() => {
    const el = descRef.current;
    if (!el) return;
    setIsOverflowing(el.scrollHeight > el.clientHeight);
  }, [item.description]);

  const hasDoublePricing =
    item.dinnerPrice != null && item.dinnerPrice !== item.price;

  const [spiceMin, spiceMax] = item.spiceLevel ?? [null, null];
  const isSpicy = spiceMin != null && spiceMin >= 1;

  const spiceLabel =
    spiceMin != null && spiceMax != null
      ? spiceMin === spiceMax
        ? spiceLevels[spiceMin].label
        : `${spiceLevels[spiceMin].label} – ${spiceLevels[spiceMax].label}`
      : null;

  // Use the max level's color for the dot
  const spiceColor = spiceMax != null ? spiceLevels[spiceMax].color : null;

  return (
    <Card className="group relative bg-thai-dark border border-thai-gold/20 hover:border-thai-gold rounded-xl overflow-hidden shadow-xl ring-0 p-0 gap-0 transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_0_1px_#C9A84C]">

      {/* ── Image ────────────────────────────────────────────────────────── */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-thai-dark/70 to-transparent" />

        {/* Popular badge */}
        {item.isPopular && (
          <div className="absolute top-2 left-2 bg-thai-gold text-thai-dark text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm">
            Popular
          </div>
        )}

        {/* Spice badge — single 🌶️ only when spiceLevel >= 1 */}
        {isSpicy && (
          <div className="absolute top-2 right-2 bg-thai-crimson/80 backdrop-blur-sm text-sm leading-none px-1.5 py-1 rounded-md select-none">
            🌶️
          </div>
        )}
      </div>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <CardContent className="p-5 flex flex-col gap-3">
        {/* Name */}
        <h3 className="font-playfair italic text-lg text-white leading-snug">
          {item.name}
        </h3>

        {/* Expandable description */}
        <div>
          {/* Clamped / full description with animated height */}
          <motion.div
            animate={{ height: isExpanded ? "auto" : "3rem" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              ref={descRef}
              className={`text-white/60 text-sm font-lato leading-relaxed ${
                isExpanded ? "" : "line-clamp-2"
              }`}
            >
              {item.description}
            </p>

            {/* Expanded detail: spice + tags */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="mt-3 flex flex-col gap-2"
                >
                  {/* Spice detail */}
                  {spiceLabel && (
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: spiceColor ?? "#fff" }}
                      />
                      <span className="text-white/50 text-xs font-lato">
                        {spiceLabel}
                      </span>
                    </div>
                  )}

                  {/* Dietary tags */}
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-[11px] font-lato text-thai-gold border border-thai-gold/40 rounded-full px-2 py-0.5"
                        >
                          <span>{tagEmoji[tag]}</span>
                          <span>{tagLabel[tag]}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Read more / Read less toggle */}
          {(isOverflowing || isExpanded) && (
            <button
              onClick={() => setIsExpanded((v) => !v)}
              className="mt-1 text-thai-gold italic text-xs font-lato hover:text-thai-gold/80 transition-colors"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>

        {/* ── Price ────────────────────────────────────────────────────── */}
        <div className="mt-auto pt-2 border-t border-thai-gold/15">
          {item.priceTag ? (
            /* Per-protein pricing — show dinnerPrice when in dinner period */
            <div className="flex flex-col gap-1">
              {item.priceTag.filter((pt) =>
                !pt.mealPeriod || pt.mealPeriod === activePeriod
              ).map((pt) => {
                const displayPrice =
                  activePeriod === "dinner" && pt.dinnerPrice != null
                    ? pt.dinnerPrice
                    : pt.price;
                return (
                  <div key={pt.title} className="flex items-baseline justify-between gap-2">
                    <span className="text-white/50 text-xs font-lato truncate">
                      {pt.title}
                    </span>
                    <span className="text-thai-gold font-bold text-sm font-lato shrink-0">
                      ${displayPrice}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : hasDoublePricing ? (
            <p className="text-thai-gold font-bold text-xl font-lato">
              ${activePeriod === "dinner" ? item.dinnerPrice : item.price}
            </p>
          ) : (
            <p className="text-thai-gold font-bold text-xl font-lato">
              ${item.price}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
