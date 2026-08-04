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
                  src="/images/about-marble-interior.png"
                  alt="Luxury marble interior — Chandak Marble premium installation"
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
                Since 1981, Chandak Marble has been India&apos;s premier importer and supplier of luxury imported marble 
                and architectural stone. Based in Kishangarh, the marble capital of Rajasthan, we deliver premium Italian marble 
                flooring, wall cladding, and natural stone for 5000+ residential, hospitality, and commercial projects across 20+ states.
              </p>
              <p>
                We source directly from prestigious quarries in Italy, Turkey, Greece, Portugal, Iran, and beyond — ensuring 
                authentic Italian marble, guaranteed quality, and exclusive stone varieties unavailable through conventional suppliers. 
                Our direct quarry relationships eliminate middlemen and deliver competitive imported marble pricing.
              </p>
              <p>
                Our heritage of craftsmanship, transparent sourcing, and dedicated customer service has made us the trusted choice 
                of leading architects, interior designers, luxury builders, and discerning homeowners who demand uncompromising quality 
                in their premium marble installations.
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
