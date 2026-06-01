"use client"

import { motion } from "framer-motion"
import { Award, Users, Truck, Shield, Leaf, Heart } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "Every slab we import undergoes rigorous quality checks. We personally visit quarries and hand-select the finest specimens."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your vision is our priority. Our experts work closely with you to find the perfect marble for your unique requirements."
  },
  {
    icon: Truck,
    title: "Direct Sourcing",
    description: "We import directly from quarries across 15+ countries, ensuring authentic quality and competitive pricing."
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "40+ years of honest dealings. What you see is what you get - no hidden costs, no compromises."
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "We partner with quarries that follow sustainable extraction methods, preserving natural resources for future generations."
  },
  {
    icon: Heart,
    title: "Passion for Stone",
    description: "Marble isn't just our business - it's our passion. We love helping clients discover the perfect stone for their spaces."
  }
]

export function OurValues() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
            Our Values
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            What We Stand For
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our values have guided us through four decades of growth and continue to define 
            how we do business every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="h-6 w-6 text-[#c9a227]" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
