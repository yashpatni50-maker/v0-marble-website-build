"use client"

import { Award, Factory, Globe, Truck, Users, Shield, Gem, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Award,
    number: "01",
    title: "Four Decades of Expertise",
    description: "Since 1981, we've been India's trusted importer of premium Italian marble, Turkish stone, and international luxury materials.",
  },
  {
    icon: Factory,
    number: "02",
    title: "Direct Importer & Processor",
    description: "Our own processing units in Kishangarh ensure authentic stone quality, precision cutting, and complete control from quarry to delivery.",
  },
  {
    icon: Globe,
    number: "03",
    title: "International Stone Sourcing",
    description: "Direct imports from Italy, Turkey, Greece, Portugal, Iran and exclusive sources — authentic Italian marble and rare architectural stones.",
  },
  {
    icon: Gem,
    number: "04",
    title: "Curated Premium Collections",
    description: "Hand-selected marble slabs and natural stone, rigorously inspected for color consistency, pattern, and architectural integrity.",
  },
  {
    icon: Truck,
    number: "05",
    title: "Pan-India Marble Supply",
    description: "Reliable nationwide delivery to 20+ states. Safe, secure transportation for marble flooring, wall cladding, and architectural projects.",
  },
  {
    icon: Shield,
    number: "06",
    title: "Direct Quarry Pricing",
    description: "Factory-direct rates eliminate middlemen. Competitive Italian marble prices with guaranteed authenticity and quality.",
  },
  {
    icon: Users,
    number: "07",
    title: "Architect & Builder Preferred",
    description: "Trusted by leading architects, interior designers, and builders for luxury villas, hotels, and landmark commercial projects.",
  },
  {
    icon: HeadphonesIcon,
    number: "08",
    title: "Expert Material Consultation",
    description: "Professional guidance on marble selection, flooring applications, wall design, interior styling, and maintenance for lasting luxury.",
  },
]

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-36 bg-[var(--surface-1)]" aria-labelledby="why-heading">
      {/* Champagne top divider */}
      <div className="divider-gold-full mb-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="divider-gold" />
              <span className="text-overline text-[var(--gold)]">Why Chandak</span>
            </div>
            <h2
              id="why-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight"
            >
              Four Decades of{" "}
              <span className="text-[var(--gold)]">Uncompromising</span>{" "}
              Quality
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="text-muted-foreground text-base leading-relaxed"
          >
            We source the world's finest imported marble and architectural stone, combining heritage 
            craftsmanship with modern processing to deliver exceptional quality for luxury homes, 
            five-star hotels, and iconic architectural landmarks across India.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/20">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease, delay: i * 0.06 }}
              className="group p-8 bg-[var(--surface-1)] hover:bg-[var(--surface-2)] transition-colors duration-400"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 flex items-center justify-center border border-[var(--gold)/20] group-hover:border-[var(--gold)/60] transition-colors duration-400">
                  <f.icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.5} />
                </div>
                <span className="text-overline text-foreground/20 group-hover:text-foreground/40 transition-colors duration-300">
                  {f.number}
                </span>
              </div>
              <h3 className="font-serif text-base font-semibold text-foreground mb-3 leading-snug">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.description}
              </p>
              {/* Gold bottom line on hover */}
              <div className="mt-6 h-px w-0 bg-[var(--gold)] group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="divider-gold-full mt-0" />
    </section>
  )
}
