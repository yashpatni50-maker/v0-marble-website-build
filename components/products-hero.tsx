"use client"

import { motion } from "framer-motion"

export function ProductsHero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#1a1a1a]">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/This%20breathtaking%20marble%20installation%20by%20Chandak%20Marble%20transforms%20grand%20spaces%20into%20timeless%20st-0igveQOMjq0xMBHdgJolm7yQpqKnz2.jpg")`,
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
            Our Collections
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 text-balance">
            Premium Marble Collections
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Discover our extensive range of imported natural marble sourced from the finest quarries 
            across Italy, Turkey, Greece, Spain, and beyond. Each piece tells a story of timeless elegance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
