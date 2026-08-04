"use client"

import { Globe, Ship, Search, Scissors, Truck } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: Globe,
    number: "01",
    title: "Global Stone Selection",
    description: "We personally visit quarries worldwide to select the finest marble slabs from Italy, Turkey, Greece, Portugal, Iran, and other premium origins.",
  },
  {
    icon: Ship,
    number: "02",
    title: "Direct Import",
    description: "Direct import from quarries ensures authenticity, competitive pricing, and access to exclusive varieties unavailable through intermediaries.",
  },
  {
    icon: Search,
    number: "03",
    title: "Quality Inspection",
    description: "Every slab undergoes rigorous quality inspection using advanced IRS technology at our state-of-the-art processing facility.",
  },
  {
    icon: Scissors,
    number: "04",
    title: "Precision Finishing",
    description: "Gangsaw and precision cutting technology delivers immaculate cuts and flawless finishes to exacting specifications.",
  },
  {
    icon: Truck,
    number: "05",
    title: "Safe Delivery",
    description: "Premium packaging and a reliable logistics network ensure your marble arrives in perfect condition, anywhere in India.",
  },
]

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-36 bg-[var(--surface-1)]" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="divider-gold" />
              <span className="text-overline text-[var(--gold)]">Our Process</span>
            </div>
            <h2
              id="process-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight mb-6"
            >
              IRS Stone Process —{" "}
              <span className="text-[var(--gold)]">Quarry to Delivery</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Our International Refined Stone process ensures every piece meets the
              highest standards from origin quarry to final installation.
            </p>
          </motion.div>
        </div>

        {/* Steps — horizontal scroll on mobile, 5-column on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border/20">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease, delay: i * 0.08 }}
              className="group relative bg-[var(--surface-1)] hover:bg-[var(--surface-2)] p-8 transition-colors duration-400"
            >
              {/* Number */}
              <span className="text-overline text-foreground/15 group-hover:text-foreground/30 transition-colors duration-300 block mb-6">
                {step.number}
              </span>

              {/* Icon */}
              <div className="mb-6 w-10 h-10 flex items-center justify-center border border-[var(--gold)/20] group-hover:border-[var(--gold)/50] transition-colors duration-400">
                <step.icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.5} />
              </div>

              <h3 className="font-serif text-base font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connecting arrow (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-border/40 z-10 text-xs">
                  ›
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
