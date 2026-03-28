"use client";

import Link from "next/link";
import { FileDown } from "lucide-react";
import type { DishType, DietaryTag, MealPeriod } from "@/data/menu";
import { usePDFAvailable, notifyPDFMissing } from "./PDFPlaceholder";

const dishTypes: { value: "all" | DishType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "starters", label: "Starters" },
  { value: "mains", label: "Mains" },
  { value: "noodles-rice", label: "Noodles & Rice" },
  { value: "soups", label: "Soups" },
  { value: "salads", label: "Salads" },
];

const dietaryTags: { value: DietaryTag; label: string; emoji: string }[] = [
  { value: "chicken", label: "Chicken", emoji: "🍗" },
  { value: "beef", label: "Beef", emoji: "🥩" },
  { value: "pork", label: "Pork", emoji: "🐷" },
  { value: "seafood", label: "Seafood", emoji: "🦐" },
  { value: "vegetarian", label: "Vegetarian", emoji: "🥦" },
  { value: "gluten-free", label: "Gluten-free", emoji: "🌾" },
];

interface Props {
  activePeriod: MealPeriod;
  activeDishType: "all" | DishType;
  activeTags: DietaryTag[];
  filteredCount: number;
  onDishTypeChange: (type: "all" | DishType) => void;
  onTagToggle: (tag: DietaryTag) => void;
  onClearAll: () => void;
}

function PDFButton({ activePeriod }: { activePeriod: MealPeriod }) {
  const pdfPath = `/menus/${activePeriod}-menu.pdf`;
  const available = usePDFAvailable(pdfPath);
  const label = activePeriod === "lunch" ? "Lunch PDF" : "Dinner PDF";

  const className =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-lato font-semibold border border-thai-gold/40 text-thai-gold hover:border-thai-gold hover:bg-thai-gold/10 transition-all duration-150";

  return available === false ? (
    <button onClick={notifyPDFMissing} className={className}>
      <FileDown size={14} strokeWidth={2} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  ) : (
    <Link href={pdfPath} download className={className}>
      <FileDown size={14} strokeWidth={2} />
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}

export default function MenuFilters({
  activePeriod,
  activeDishType,
  activeTags,
  filteredCount,
  onDishTypeChange,
  onTagToggle,
  onClearAll,
}: Props) {
  const hasActiveFilters =
    activeDishType !== "all" || activeTags.length > 0;

  return (
    <div className="sticky top-16 z-40 bg-thai-crimson border-b border-thai-gold/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
        {/* Dish type — single select */}
        <div className="flex flex-wrap gap-2">
          {dishTypes.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => onDishTypeChange(value)}
              className={`px-4 py-1.5 rounded-full text-sm font-lato font-semibold border transition-all duration-150 ${
                activeDishType === value
                  ? "bg-thai-gold text-thai-dark border-thai-gold"
                  : "border-thai-gold/50 text-thai-gold hover:border-thai-gold hover:bg-thai-gold/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Dietary tags — multi-select + PDF download */}
        <div className="flex flex-wrap items-center gap-2">
          {dietaryTags.map(({ value, label, emoji }) => (
            <button
              key={value}
              onClick={() => onTagToggle(value)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-lato font-semibold border transition-all duration-150 ${
                activeTags.includes(value)
                  ? "bg-thai-gold text-thai-dark border-thai-gold"
                  : "border-thai-gold/40 text-thai-gold/80 hover:border-thai-gold hover:bg-thai-gold/10"
              }`}
            >
              <span>{emoji}</span>
              <span>{label}</span>
            </button>
          ))}

          {/* Separator + PDF button */}
          <div className="h-5 w-px bg-thai-gold/30 mx-1" />
          <PDFButton activePeriod={activePeriod} />
        </div>

        {/* Active filter summary */}
        {hasActiveFilters && (
          <div className="flex items-center gap-3 pt-1">
            <p className="text-thai-gold italic text-sm font-lato">
              Showing {filteredCount} {filteredCount === 1 ? "dish" : "dishes"}
            </p>
            <button
              onClick={onClearAll}
              className="text-white/60 underline text-sm font-lato hover:text-white transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
