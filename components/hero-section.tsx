"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Phone, ArrowDown, Download } from "lucide-react"

const STATS = [
  { value: "1981",   label: "Est." },
  { value: "40+",    label: "Years" },
  { value: "5000+",  label: "Projects" },
  { value: "20+",    label: "States" },
]

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HeroSection() {
  const videoRef   = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Trigger entrance after brief paint settle
    const t = setTimeout(() => setReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-end pb-20 lg:pb-28 overflow-hidden"
      aria-label="Hero — Chandak Marble"
    >
      {/* ── Background ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Video layer */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover animate-slow-zoom"
          aria-hidden="true"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marble_brand_logo_carved_from_202607081634-n8raiXsOrZjVMZKaSFo74VpQZv5roA.mp4"
            type="video/mp4"
          />
        </video>

        {/* Fallback image for browsers without video */}
        <Image
          src="/images/hero-luxury-villa.png"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />

        {/* Multi-layer overlay — bottom-heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.07_0.005_60)] via-[oklch(0.07_0.005_60)/50] to-transparent" />
        <div className="absolute inset-0 bg-[oklch(0.07_0.005_60)/20]" />
      </div>

      {/* ── Content ────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">

          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="divider-gold" />
            <span className="text-overline text-[var(--gold)]">
              Since 1981 &nbsp;·&nbsp; Kishangarh, Rajasthan
            </span>
          </motion.div>

          {/* Headline — line by line */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "110%", opacity: 0 }}
              animate={ready ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 1.1, ease, delay: 0.25 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight"
            >
              Crafted by Nature.
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: "110%", opacity: 0 }}
              animate={ready ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 1.1, ease, delay: 0.4 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight text-[var(--gold)]"
            >
              Refined by Chandak.
            </motion.h1>
          </div>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease, delay: 0.6 }}
            className="text-white/65 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-12"
          >
            Premium imported natural marble from Italy, Turkey and Greece — 
            for luxury homes, villas, hotels and architectural landmarks.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease, delay: 0.75 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="https://wa.me/919950085300?text=Hello%2C%20I%20am%20interested%20in%20imported%20marble.%20Please%20share%20catalogue%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[var(--gold)] text-background text-xs font-semibold tracking-widest uppercase btn-luxury"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire on WhatsApp
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
              Brochure
            </a>
          </motion.div>
        </div>

        {/* Stats row — bottom right on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease, delay: 1.0 }}
          className="mt-16 lg:mt-0 lg:absolute lg:right-8 lg:bottom-0 flex gap-8 lg:gap-10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center lg:text-right">
              <div className="font-serif text-2xl lg:text-3xl font-bold text-[var(--gold)]">
                {s.value}
              </div>
              <div className="text-overline text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
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
