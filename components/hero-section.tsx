"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Phone, ArrowDown, Download } from "lucide-react"

const STATS = [
  { value: "40+",    label: "Years Experience" },
  { value: "5000+",  label: "Projects Delivered" },
  { value: "20+",    label: "States Served" },
  { value: "100%",   label: "Quality Assurance" },
]

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HeroSection() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Trigger entrance after brief paint settle
    const t = setTimeout(() => setReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden pt-16 sm:pt-20 lg:pt-24"
      style={{ height: "75vh", minHeight: "75vh", maxHeight: "100vh" }}
      aria-label="Hero — Chandak Marble"
    >
      {/* ── Background Video Container ─────────────────────────────────── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Fallback image — behind video, shown before video loads */}
        <Image
          src="/images/hero-luxury-villa.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />

        {/* Video — fills entire container */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-luxury-villa.png"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Multi-layer overlay — bottom-heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.07_0.005_60)] via-[oklch(0.07_0.005_60)/50] to-transparent" />
        <div className="absolute inset-0 bg-[oklch(0.07_0.005_60)/20]" />
      </div>

      {/* ── Content Container ────────────────────────────────────── */}
      <div className="absolute inset-0 flex flex-col items-center justify-end z-10">
        <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-28 flex flex-col items-center">
          <div className="max-w-3xl text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="mb-6 sm:mb-8 flex justify-center"
            >
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                <span className="text-overline text-white/70 text-xs sm:text-sm">
                  Since 1981 &nbsp; 40+ Years Excellence
                </span>
              </div>
            </motion.div>

            {/* Headline — line by line */}
            <div className="overflow-hidden mb-2 sm:mb-3">
              <motion.h1
                initial={{ y: "110%", opacity: 0 }}
                animate={ready ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 1.1, ease, delay: 0.25 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
              >
                Imported Italian Marble
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6 sm:mb-8 lg:mb-10">
              <motion.h1
                initial={{ y: "110%", opacity: 0 }}
                animate={ready ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 1.1, ease, delay: 0.4 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-[var(--gold)]"
              >
                in Kishangarh
              </motion.h1>
            </div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease, delay: 0.6 }}
              className="text-white/65 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-6 sm:mb-8 lg:mb-12"
            >
              Premium imported natural marble for luxury homes, villas, hotels, and commercial projects. Trusted by architects, builders, and homeowners across India.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease, delay: 0.75 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center"
            >
              <Link
                href="https://wa.me/919950085300?text=Hello%2C%20I%20am%20interested%20in%20imported%20marble.%20Please%20share%20catalogue%20and%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 bg-[var(--gold)] text-background text-xs font-semibold tracking-widest uppercase btn-luxury whitespace-nowrap"
              >
                <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Enquire on WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </Link>
              <Link
                href="tel:+919950085300"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 border border-white/30 text-white text-xs font-semibold tracking-widest uppercase btn-luxury hover:border-white/60 transition-colors whitespace-nowrap"
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Call Now</span>
                <span className="sm:hidden">Call</span>
              </Link>
              <a
                href="https://blobs.vusercontent.net/blob/Chandak%20Marble%20Colours%20of%20Your%20Imagination-SMMix9Zr6lGqmaC0vHA5zOluJ1Bw26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 border border-white/20 text-white/70 text-xs font-semibold tracking-widest uppercase btn-luxury hover:border-white/40 hover:text-white transition-colors whitespace-nowrap"
              >
                <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Brochure</span>
                <span className="sm:hidden">PDF</span>
              </a>
            </motion.div>
          </div>

          {/* Stats row — hidden on mobile, shown on larger screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, ease, delay: 1.0 }}
            className="mt-8 sm:mt-0 sm:absolute sm:right-8 sm:bottom-12 lg:bottom-28 flex gap-6 sm:gap-10"
          >
            {STATS.map((s) => (
              <div key={s.label} className="text-left sm:text-right">
                <div className="font-serif text-lg sm:text-2xl lg:text-3xl font-bold text-[var(--gold)]">
                  {s.value}
                </div>
                <div className="text-overline text-white/50 mt-0.5 sm:mt-1 text-xs">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 hidden sm:flex"
        aria-hidden="true"
      >
        <span className="text-overline text-white/30 text-[10px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
