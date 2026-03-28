import Link from "next/link";
import { ThaiStripe } from "./ThaiStripe";
import { site, footer } from "@/data/site";

const socialIcons: Record<"facebook" | "instagram" | "tripadvisor", React.ReactNode> = {
  facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  tripadvisor: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="14" r="2" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="bg-thai-dark">
      <ThaiStripe />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <ellipse cx="14" cy="16" rx="3.5" ry="7" fill="#C9A84C" />
                <ellipse cx="14" cy="16" rx="3.5" ry="7" fill="#C9A84C" transform="rotate(45 14 14)" />
                <ellipse cx="14" cy="16" rx="3.5" ry="7" fill="#C9A84C" transform="rotate(-45 14 14)" />
                <ellipse cx="14" cy="16" rx="3.5" ry="7" fill="#C9A84C" transform="rotate(90 14 14)" />
                <circle cx="14" cy="14" r="4" fill="#3D0010" />
                <circle cx="14" cy="14" r="2" fill="#C9A84C" />
              </svg>
              <span className="font-playfair italic text-xl text-white tracking-wide">{site.name}</span>
            </div>
            <p className="text-white/50 text-sm font-lato leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-thai-gold font-lato text-xs tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-thai-gold text-sm font-lato transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social icons */}
          <div>
            <h4 className="text-thai-gold font-lato text-xs tracking-widest uppercase mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {footer.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-thai-gold/40 flex items-center justify-center text-thai-gold/70 hover:border-thai-gold hover:text-thai-gold transition-all duration-200"
                >
                  {socialIcons[s.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-thai-gold/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs font-lato">
            © {new Date().getFullYear()} {site.name} Restaurant. All rights reserved.
          </p>
          <p className="text-white/25 text-xs font-lato">{footer.legalNote}</p>
        </div>
      </div>
    </footer>
  );
}
