"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#1a1a1a]">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luxury%20that%20reflects%20in%20every%20detail.With%20its%20soft%20veining%2C%20glossy%20finish%2C%20and%20timeless%20appeal%2C%20-E9GeIPcxmGBTauLJMAIiAjuH3nQNjH.jpg")`,
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
            Our Legacy
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 text-balance">
            Stone. Style. Statement.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            For over four decades, Chandak Marble has been synonymous with premium quality, 
            exceptional service, and an unwavering commitment to bringing the world&apos;s 
            finest marble to India.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
