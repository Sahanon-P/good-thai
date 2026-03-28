"use client";

import { motion } from "framer-motion";
import { ThaiStripe } from "./ThaiStripe";
import { contact, hours, contactSection } from "@/data/contact";

export default function ContactHours() {
  return (
    <section id="contact" className="bg-thai-crimson">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-thai-gold text-xs tracking-[0.35em] uppercase font-lato mb-3">
            {contactSection.eyebrow}
          </p>
          <h2 className="font-playfair italic text-4xl sm:text-5xl text-white">
            {contactSection.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-thai-gold mt-0.5 shrink-0">◆</span>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest font-lato mb-1">Address</p>
                  <p className="text-white font-lato">
                    {contact.address.street}
                    <br />
                    {contact.address.city}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-thai-gold mt-0.5 shrink-0">◆</span>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest font-lato mb-1">Phone</p>
                  <a href={contact.phone.href} className="text-white font-lato hover:text-thai-gold transition-colors">
                    {contact.phone.display}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-thai-gold mt-0.5 shrink-0">◆</span>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest font-lato mb-1">Email</p>
                  <a href={contact.email.href} className="text-white font-lato hover:text-thai-gold transition-colors">
                    {contact.email.display}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-playfair italic text-xl text-thai-gold mb-4">
                {contactSection.hoursHeading}
              </h3>
              <table className="w-full text-sm font-lato">
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.day} className="border-b border-thai-gold/15">
                      <td className="py-2.5 text-white/70 pr-4 align-top">{h.day}</td>
                      <td className={`py-2.5 text-right align-top ${h.time === "Closed" ? "text-white/40" : "text-white"}`}>
                        {h.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-xl overflow-hidden shadow-2xl border border-thai-gold/20 min-h-80"
          >
            <iframe
              src={contact.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Good Thai location map"
            />
          </motion.div>
        </div>
      </div>
      <ThaiStripe />
    </section>
  );
}
