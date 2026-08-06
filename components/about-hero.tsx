"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function AboutHero() {
  return (
    <section className="relative min-h-[75vh] flex items-end overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-about.png"
          alt="Carrara marble quarry at golden hour — the origin of Chandak Marble"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay — heavy at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/20" />
        {/* Subtle gold vignette */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--gold)]/5" />
      </div>

      {/* Content — anchored to bottom */}
      <div className="relative z-10 w-full pb-20 pt-44 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            {/* Overline */}
            <p className="text-overline text-[var(--gold)] mb-5">Our Legacy</p>

            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-balance leading-[1.05] mb-6 max-w-3xl">
              Stone.{" "}
              <span className="italic font-normal text-[var(--gold)]">Style.</span>{" "}
              Statement.
            </h1>

            {/* Body */}
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mb-8">
              For over four decades, Chandak Marble has been synonymous with premium quality,
              exceptional service, and an unwavering commitment to bringing the world&apos;s
              finest marble to India.
            </p>

            {/* Gold divider */}
            <div className="h-px w-24 bg-[var(--gold)]/60" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
