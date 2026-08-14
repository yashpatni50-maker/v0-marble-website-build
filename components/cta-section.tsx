"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MessageCircle, Phone, Download, MapPin } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function CTASection() {
  return (
    <section
      className="relative py-24 lg:py-36 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background — luxury villa image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-marble-interior.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[oklch(0.07_0.005_60)/88]" />
        {/* Champagne gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.07_0.005_60)/60]" />
      </div>

      {/* Top champagne line */}
      <div className="divider-gold-full absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.0, ease }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="divider-gold" />
            <span className="text-overline text-[var(--gold)]">Begin Your Project</span>
            <div className="divider-gold" />
          </div>

          <h2
            id="cta-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-balance leading-tight mb-6"
          >
            Looking for Premium Marble?
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Contact us for the latest designs, availability, and expert guidance.
            Our team is ready to help bring your vision to life.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <Link
            href="https://wa.me/919950085300?text=Hello%2C%20I%20am%20interested%20in%20imported%20marble.%20Please%20share%20catalogue%20and%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[var(--gold)] text-background text-xs font-semibold tracking-widest uppercase btn-luxury"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </Link>
          <Link
            href="tel:+919950085300"
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/30 text-white text-xs font-semibold tracking-widest uppercase btn-luxury hover:border-white/60 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </Link>
          <a
            href="https://blobs.vusercontent.net/blob/Chandak%20Marble%20Colours%20of%20Your%20Imagination-SMMix9Zr6lGqmaC0vHA5zOluJ1Bw26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white/70 text-xs font-semibold tracking-widest uppercase btn-luxury hover:border-white/40 hover:text-white transition-colors"
          >
            <Download className="h-4 w-4" />
            Download Brochure
          </a>
        </motion.div>

        {/* Locations — champagne divider above */}
        <div className="divider-gold-full mb-14" />

        <div className="grid sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {[
            {
              label: "Main Showroom",
              company: "Chandak Marble International",
              address: "Khasra No. 375 & 361, Makrana Road,\nMadanganj, Kali Dungri,\nKishangarh, Rajasthan 305801",
              phone: "+91 9950085300",
              tel: "+919950085300",
            },
            {
              label: "Processing Unit",
              company: "Chandak Marbles Pvt. Ltd.",
              address: "E-47, RIICO Industrial Area,\n3rd Phase, Harmada Road,\nKishangarh, Rajasthan 305801",
              phone: "+91 98290 82911",
              tel: "+919829082911",
            },
          ].map((loc, i) => (
            <motion.div
              key={loc.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-3.5 w-3.5 text-[var(--gold)]" strokeWidth={1.5} />
                <span className="text-overline text-[var(--gold)]">{loc.label}</span>
              </div>
              <p className="text-white/90 text-sm font-medium mb-1">{loc.company}</p>
              <p className="text-white/50 text-sm leading-relaxed whitespace-pre-line mb-3">
                {loc.address}
              </p>
              <Link
                href={`tel:${loc.tel}`}
                className="text-white/70 text-sm font-medium hover:text-[var(--gold)] transition-colors duration-300"
              >
                {loc.phone}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom champagne line */}
      <div className="divider-gold-full absolute bottom-0 left-0 right-0" />
    </section>
  )
}
