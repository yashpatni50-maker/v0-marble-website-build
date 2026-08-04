"use client"

import { Award, Factory, Globe, Truck, Users, Shield, Gem, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Award,
    number: "01",
    title: "40+ Years Experience",
    description: "Trusted expertise since 1981 in premium marble sourcing and supply.",
  },
  {
    icon: Factory,
    number: "02",
    title: "Direct Importer & Factory",
    description: "Own processing units ensuring quality control at every stage.",
  },
  {
    icon: Globe,
    number: "03",
    title: "Global Sourcing",
    description: "Imported from Italy, Turkey, Greece, Portugal, Iran and beyond.",
  },
  {
    icon: Gem,
    number: "04",
    title: "Premium Selection",
    description: "Hand-picked marble slabs meeting the highest quality standards.",
  },
  {
    icon: Truck,
    number: "05",
    title: "Pan India Supply",
    description: "Reliable delivery across all states with safe transportation.",
  },
  {
    icon: Shield,
    number: "06",
    title: "Factory Pricing",
    description: "Direct factory rates without middlemen markups.",
  },
  {
    icon: Users,
    number: "07",
    title: "Industry Trusted",
    description: "Preferred choice of builders, architects and homeowners.",
  },
  {
    icon: HeadphonesIcon,
    number: "08",
    title: "Expert Guidance",
    description: "Professional consultation for material selection and application.",
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
            We combine tradition with innovation to deliver the finest natural stone
            for the spaces that matter most — luxury homes, five-star hospitality,
            and landmark architectural projects.
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
