"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

/**
 * Checks whether a PDF exists at the given public path via a HEAD request.
 * Returns null while loading, true if available, false if missing (404).
 */
export function usePDFAvailable(pdfPath: string): boolean | null {
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    setAvailable(null);
    fetch(pdfPath, { method: "HEAD" })
      .then((r) => setAvailable(r.ok))
      .catch(() => setAvailable(false));
  }, [pdfPath]);

  return available;
}

/**
 * Call this instead of navigating when the PDF is missing.
 * Shows a friendly toast so users know to browse the on-page menu.
 */
export function notifyPDFMissing() {
  toast("PDF menu coming soon — browse our full menu above", {
    duration: 4000,
    style: {
      background: "#3D0010",
      color: "#C9A84C",
      border: "1px solid rgba(201,168,76,0.3)",
      fontFamily: "var(--font-lato-sans, sans-serif)",
    },
  });
}
