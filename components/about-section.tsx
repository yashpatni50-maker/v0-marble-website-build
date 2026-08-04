"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const stats = [
  { value: "5000+", label: "Projects Delivered" },
  { value: "20+",   label: "States Served" },
  { value: "10+",   label: "Source Countries" },
]

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function AboutSection() {
  return (
    <section className="py-24 lg:py-36 bg-background" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Images — two-column portrait layout */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luxury%20that%20reflects%20in%20every%20detail.With%20its%20soft%20veining%2C%20glossy%20finish%2C%20and%20timeless%20appeal%2C%20-E9GeIPcxmGBTauLJMAIiAjuH3nQNjH.jpg"
                  alt="Luxury Chandak Marble interior — soft veining and glossy finish"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] mt-12 overflow-hidden">
                <Image
                  src="/images/about-craftsmanship.png"
                  alt="Chandak Marble craftsmanship — expert stone processing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Heritage badge */}
            <div className="absolute -bottom-6 left-4 bg-[var(--gold)] text-background px-6 py-5">
              <div className="font-serif text-4xl font-bold leading-none">40+</div>
              <div className="text-xs font-medium tracking-wider uppercase mt-1">Years of Excellence</div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="divider-gold" />
              <span className="text-overline text-[var(--gold)]">Our Heritage</span>
            </div>

            <h2
              id="about-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight mb-8"
            >
              Premium Imported Marble{" "}
              <span className="text-[var(--gold)]">Since 1981</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                Chandak Marble is one of India&apos;s foremost importers and suppliers of premium
                natural marble, based in the marble capital of Kishangarh, Rajasthan. For more
                than four decades we have delivered world-class stone for residential and
                commercial projects throughout the country.
              </p>
              <p>
                We source directly from quarries in Italy, Turkey, Greece, Portugal, Iran, and
                beyond — ensuring authenticity, superior quality, and exclusive varieties that
                are unavailable elsewhere.
              </p>
              <p>
                Our commitment to craftsmanship, transparency, and customer experience has built
                a reputation that architects, builders, and design-led homeowners trust.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 my-10 pt-8 border-t border-border/30">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.08 }}
                >
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[var(--gold)]">
                    {s.value}
                  </div>
                  <div className="text-overline text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-foreground/70 hover:text-[var(--gold)] transition-colors duration-300 group"
            >
              Learn Our Story
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
