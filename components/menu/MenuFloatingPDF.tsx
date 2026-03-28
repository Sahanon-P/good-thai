"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FileDown } from "lucide-react";
import type { MealPeriod } from "@/data/menu";
import { usePDFAvailable, notifyPDFMissing } from "./PDFPlaceholder";

interface Props {
  activePeriod: MealPeriod;
}

export default function MenuFloatingPDF({ activePeriod }: Props) {
  const pdfPath = `/menus/${activePeriod}-menu.pdf`;
  const available = usePDFAvailable(pdfPath);
  const label =
    activePeriod === "lunch" ? "Download Lunch Menu" : "Download Dinner Menu";

  const buttonClass =
    "flex items-center gap-2 bg-thai-gold text-thai-dark font-lato font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:bg-thai-gold/90 transition-all duration-200 hover:scale-105 active:scale-100";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {available === false ? (
        /* PDF missing — intercept click and show toast */
        <button onClick={notifyPDFMissing} className={buttonClass}>
          <FileDown size={18} strokeWidth={2} />
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={activePeriod}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              {label}
            </motion.span>
          </AnimatePresence>
        </button>
      ) : (
        /* PDF available (or still checking) — render real download link */
        <Link href={pdfPath} download className={buttonClass}>
          <FileDown size={18} strokeWidth={2} />
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={activePeriod}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              {label}
            </motion.span>
          </AnimatePresence>
        </Link>
      )}
    </motion.div>
  );
}
