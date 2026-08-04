"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { MarbleCollection } from "@/lib/marble-collections-data"

interface Props {
  collection: MarbleCollection
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Each collection gets its own hero image from the already-generated collection images
const collectionImages: Record<string, string> = {
  "gorgeous-grey":    "/images/collection-gorgeous-grey.png",
  "beautiful-beige":  "/images/collection-beautiful-beige.png",
  "wow-white":        "/images/collection-wow-white.png",
  "bold-black":       "/images/collection-bold-black.png",
  "aesthetic-brown":  "/images/marble-aesthetic-brown.png",
  "onyx":             "/images/marble-onyx.png",
}

export function CollectionHero({ collection }: Props) {
  const heroImage = collectionImages[collection.id] ?? "/images/hero-collection.png"

  return (
    <section className="relative min-h-[75vh] flex items-end overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={`${collection.name} marble collection — Chandak Marble`}
          fill
          className="object-cover object-center scale-[1.03]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/65 to-[#0a0a0a]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-20 pt-44 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-5">
              <a href="/products" className="text-white/50 hover:text-white/80 transition-colors">
                Collections
              </a>
              <span className="text-white/30">/</span>
              <span className="text-[var(--gold)]">{collection.name}</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-balance leading-[1.05] mb-4 max-w-3xl">
              {collection.name}
            </h1>

            <p className="text-[var(--gold)] text-lg italic mb-5">
              {collection.tagline}
            </p>

            <p className="text-white/65 text-base leading-relaxed max-w-2xl mb-8">
              {collection.description}
            </p>

            <div className="flex items-center gap-6">
              <div className="h-px w-24 bg-[var(--gold)]/60" />
              <a
                href={`https://wa.me/919500853000?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(collection.name)}%20collection`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury inline-flex items-center gap-2 px-7 py-3 bg-[var(--gold)] text-black text-sm font-semibold tracking-wide uppercase rounded-none hover:bg-white transition-colors duration-300"
              >
                Enquire Now
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
