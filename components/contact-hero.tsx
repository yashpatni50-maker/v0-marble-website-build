"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#1a1a1a]">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Transform%20your%20space%20into%20an%20oasis%20of%20tranquility%20with%20our%20unique%20marbles%2C%20where%20every%20vein%20and-R1gXedG9ij20lrJAp9N3SC0SRDdaCy.webp")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 text-balance">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Visit our showroom to experience our marble collections in person, 
            or reach out to us for inquiries, quotes, and consultations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
