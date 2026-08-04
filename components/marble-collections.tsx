"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    name: "Gorgeous Grey",
    tagline: "Timeless Sophistication",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gorgeous%20Grey-kk7u83Gv0XBeUunFzXF5ZOIx43K6JS.png",
    href: "/products/collections/gorgeous-grey",
    span: "col-span-1 row-span-2",   // tall card
  },
  {
    name: "Beautiful Beige",
    tagline: "Warmth & Natural Beauty",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beautiful%20Beige-FJdtmmy4aBcKfiMKpl4IVFewjZODad.png",
    href: "/products/collections/beautiful-beige",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Wow White",
    tagline: "Pure Architectural Luxury",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wow%20White-WdolUOy8TYbgXVqAvnRl4IPs32gCAW.png",
    href: "/products/collections/wow-white",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Bold Black",
    tagline: "Drama & Confidence",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bold%20Black-n6lg8ZdOOuys2EyMmtakDrzMMXmYyM.png",
    href: "/products/collections/bold-black",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Aesthetic Brown",
    tagline: "Earthy & Artistic",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aesthetic%20Brown-tC3C07sA9Gb0037AJ0XAP9nhSZRLFN.png",
    href: "/products/collections/aesthetic-brown",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Onyx Marble",
    tagline: "Translucent Splendour",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Onyx%20Marble-wmvmVg48fjMkrPDl04gt2RncUyLs8V.png",
    href: "/products/collections/onyx-marble",
    span: "col-span-1 row-span-1",
  },
]

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

function CollectionCard({
  collection,
  index,
}: {
  collection: (typeof collections)[0]
  index: number
}) {
  const ref    = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.a
      ref={ref}
      href={collection.href}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease, delay: index * 0.08 }}
      className={`group relative overflow-hidden bg-card block ${collection.span}`}
      style={{ minHeight: collection.span.includes("row-span-2") ? "520px" : "260px" }}
    >
      {/* Image with slow zoom on hover */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
        />
      </div>

      {/* Gradient overlay — richer on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-7">
        {/* Gold underline that animates in on hover */}
        <div className="overflow-hidden mb-3">
          <div className="h-px bg-[var(--gold)] w-0 group-hover:w-10 transition-all duration-500 ease-out mb-3" />
        </div>

        <h3 className="font-serif text-xl lg:text-2xl font-bold text-white leading-tight mb-1 transition-colors duration-300 group-hover:text-[var(--gold-bright)]">
          {collection.name}
        </h3>
        <p className="text-overline text-white/50 mb-4 group-hover:text-white/70 transition-colors duration-300">
          {collection.tagline}
        </p>

        {/* Arrow — always visible on mobile, slides in on hover on desktop */}
        <div className="flex items-center gap-2 text-[var(--gold)] text-xs font-medium tracking-wider uppercase opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-400">
          Explore Collection
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.a>
  )
}

export function MarbleCollections() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerInView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-36 bg-background"
      aria-labelledby="collections-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="divider-gold" />
              <span className="text-overline text-[var(--gold)]">Our Collections</span>
            </motion.div>
            <motion.h2
              id="collections-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              Premium Marble
              <br />
              <span className="text-[var(--gold)]">Collections</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="text-muted-foreground text-base leading-relaxed max-w-sm lg:text-right"
          >
            Hand-selected from the world&apos;s finest quarries in Italy, Turkey, Greece,
            Portugal, and Iran. Every slab a singular work of nature.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[260px]">
          {collections.map((c, i) => (
            <CollectionCard key={c.name} collection={c} index={i} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-foreground/20 text-foreground/70 text-xs font-semibold tracking-widest uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-400 btn-luxury group"
          >
            View All Collections
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
