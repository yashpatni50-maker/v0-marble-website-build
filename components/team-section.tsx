"use client"

import { motion } from "framer-motion"
import { Phone, Mail } from "lucide-react"

const team = [
  {
    name: "Rajesh Chandak",
    role: "Managing Director",
    description: "Leading the company with 25+ years of experience in the marble industry.",
    phone: "+91 98280 56070"
  },
  {
    name: "Amit Chandak",
    role: "Director - Operations",
    description: "Overseeing quality control and international sourcing operations.",
    phone: "+91 98280 56070"
  },
  {
    name: "Priya Chandak",
    role: "Director - Design Consultation",
    description: "Helping clients visualize and select the perfect marble for their projects.",
    phone: "+91 98280 56070"
  }
]

export function TeamSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
            Meet the Team
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            The People Behind Chandak Marble
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate team dedicated to bringing you the finest marble and exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-lg text-center shadow-sm"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#c9a227] to-[#8b7355] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="font-serif text-3xl text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-serif text-xl text-foreground mb-1">{member.name}</h3>
              <p className="text-[#c9a227] text-sm font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
              <div className="flex items-center justify-center gap-4">
                <a 
                  href={`tel:${member.phone}`}
                  className="text-muted-foreground hover:text-[#c9a227] transition-colors"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:info@chandakmarble.com"
                  className="text-muted-foreground hover:text-[#c9a227] transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
