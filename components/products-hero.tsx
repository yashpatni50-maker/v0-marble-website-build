"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function ProductsHero() {
  return (
    <section className="relative min-h-[75vh] flex items-end overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-products.png"
          alt="Premium marble showroom — Chandak Marble collections"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-[#0a0a0a]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-20 pt-44 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            <p className="text-overline text-[var(--gold)] mb-5">Our Collections</p>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-balance leading-[1.05] mb-6 max-w-3xl">
              Premium{" "}
              <span className="italic font-normal text-[var(--gold)]">Marble</span>{" "}
              Collections
            </h1>

            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mb-8">
              Discover our extensive range of imported natural marble sourced from the finest quarries
              across Italy, Turkey, Greece, Spain, and beyond. Each piece tells a story of timeless elegance.
            </p>

            <div className="h-px w-24 bg-[var(--gold)]/60" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
