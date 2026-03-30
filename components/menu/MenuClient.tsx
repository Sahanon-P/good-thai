"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import type { MenuItem, MealPeriod, DishType, DietaryTag } from "@/data/menu";
import MenuCard from "./MenuCard";
import MenuFilters from "./MenuFilters";
import MenuFloatingPDF from "./MenuFloatingPDF";


interface Props {
  menuItems: MenuItem[];
}

export default function MenuClient({ menuItems }: Props) {
  const [activePeriod, setActivePeriod] = useState<MealPeriod>("lunch");
  const [activeDishType, setActiveDishType] = useState<"all" | DishType>("all");
  const [activeTags, setActiveTags] = useState<DietaryTag[]>([]);

  function toggleTag(tag: DietaryTag) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  function clearAll() {
    setActiveDishType("all");
    setActiveTags([]);
  }

  const filtered = menuItems.filter((item) => {
    const periodMatch =
      item.mealPeriod === activePeriod || item.mealPeriod === "both";
    const typeMatch =
      activeDishType === "all" || item.dishType === activeDishType;
    const tagMatch =
      activeTags.length === 0 ||
      activeTags.every((tag) => item.tags.includes(tag));
    return periodMatch && typeMatch && tagMatch;
  });

  return (
    <div className="flex-1">
      <Toaster position="top-center" />
      <MenuFloatingPDF activePeriod={activePeriod} />
      {/* Meal period toggle */}
      <div className="bg-thai-dark py-6 border-b border-thai-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="inline-flex rounded-xl border border-thai-gold/40 overflow-hidden">
            {(["lunch", "dinner"] as MealPeriod[]).map((period) => (
              <button
                key={period}
                onClick={() => setActivePeriod(period)}
                className={`px-10 py-3 text-sm font-lato font-bold uppercase tracking-widest transition-all duration-200 ${
                  activePeriod === period
                    ? "bg-thai-gold text-thai-dark"
                    : "bg-transparent text-thai-gold hover:bg-thai-gold/10"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <MenuFilters
        activePeriod={activePeriod}
        activeDishType={activeDishType}
        activeTags={activeTags}
        filteredCount={filtered.length}
        onDishTypeChange={setActiveDishType}
        onTagToggle={toggleTag}
        onClearAll={clearAll}
      />

      {/* Card grid */}
      <div className="bg-thai-dark min-h-96">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-5">
              <svg
                width="52"
                height="52"
                viewBox="0 0 36 36"
                fill="none"
                aria-hidden="true"
              >
                <ellipse cx="18" cy="20" rx="4" ry="9" fill="#C9A84C" opacity="0.5" />
                <ellipse cx="18" cy="20" rx="4" ry="9" fill="#C9A84C" opacity="0.5" transform="rotate(50 18 18)" />
                <ellipse cx="18" cy="20" rx="4" ry="9" fill="#C9A84C" opacity="0.5" transform="rotate(-50 18 18)" />
                <ellipse cx="18" cy="20" rx="4" ry="9" fill="#C9A84C" opacity="0.5" transform="rotate(100 18 18)" />
                <ellipse cx="18" cy="20" rx="4" ry="9" fill="#C9A84C" opacity="0.5" transform="rotate(-100 18 18)" />
                <circle cx="18" cy="18" r="5" fill="#3D0010" />
                <circle cx="18" cy="18" r="2.5" fill="#C9A84C" opacity="0.5" />
              </svg>
              <p className="text-white/50 font-lato text-lg">
                No dishes match your filters
              </p>
              <button
                onClick={clearAll}
                className="border border-thai-gold text-thai-gold px-6 py-2 rounded-full text-sm font-semibold hover:bg-thai-gold hover:text-thai-dark transition-all"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: Math.min(i * 0.05, 0.3),
                        duration: 0.3,
                      },
                    }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                  >
                    <MenuCard item={item} activePeriod={activePeriod} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
