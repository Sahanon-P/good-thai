"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { announcements } from "@/data/announcements";

function getActive() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return announcements.find((a) => new Date(a.endDate) >= today) ?? null;
}

export default function AnnouncementDialog() {
  const [open, setOpen] = useState(false);
  const announcement = getActive();

  useEffect(() => {
    if (!announcement) return;
    // Show once per session
    const key = `announcement-seen-${announcement.endDate}`;
    if (!sessionStorage.getItem(key)) {
      setOpen(true);
    }
  }, [announcement]);

  function handleClose() {
    if (!announcement) return;
    const key = `announcement-seen-${announcement.endDate}`;
    sessionStorage.setItem(key, "1");
    setOpen(false);
  }

  if (!announcement) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogContent className="bg-thai-dark border border-thai-gold/40 text-white max-w-md">
        {/* Gold ornament line */}
        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-thai-gold to-transparent mb-1" />

        <DialogHeader className="gap-2">
          <p className="text-thai-gold text-[10px] tracking-[0.3em] uppercase font-lato">
            Announcement
          </p>
          <DialogTitle className="font-playfair italic text-2xl text-white leading-snug">
            {announcement.title}
          </DialogTitle>
          <DialogDescription className="text-white/70 font-lato text-sm leading-relaxed">
            {announcement.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex justify-end">
          <button
            onClick={handleClose}
            className="px-5 py-2 rounded-full border border-thai-gold text-thai-gold text-sm font-lato font-semibold hover:bg-thai-gold hover:text-thai-dark transition-all duration-200"
          >
            Got it
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
