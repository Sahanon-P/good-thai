"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";

function isLinkActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  if (!href.includes("#")) return pathname === href || pathname.startsWith(href + "/");
  return false;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-thai-crimson shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <ellipse cx="14" cy="16" rx="3.5" ry="7" fill="#C9A84C" />
            <ellipse cx="14" cy="16" rx="3.5" ry="7" fill="#C9A84C" transform="rotate(45 14 14)" />
            <ellipse cx="14" cy="16" rx="3.5" ry="7" fill="#C9A84C" transform="rotate(-45 14 14)" />
            <ellipse cx="14" cy="16" rx="3.5" ry="7" fill="#C9A84C" transform="rotate(90 14 14)" />
            <circle cx="14" cy="14" r="4" fill="#7A0020" />
            <circle cx="14" cy="14" r="2" fill="#C9A84C" />
          </svg>
          <span className="font-playfair italic text-xl text-white tracking-wide">
            Good Thai
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href, pathname);
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white/90 hover:text-white text-sm tracking-wide relative group transition-colors duration-200"
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-thai-gold transition-transform duration-200 origin-left ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-thai-dark border-t border-thai-gold/30 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm tracking-wide transition-colors ${
                isLinkActive(link.href, pathname)
                  ? "text-thai-gold"
                  : "text-white/90 hover:text-thai-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
