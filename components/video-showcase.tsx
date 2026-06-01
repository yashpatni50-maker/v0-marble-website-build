"use client"

import { motion } from "framer-motion"

export function VideoShowcase() {
  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
            See Our Work
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Marble in Motion
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Watch the artistry and craftsmanship that goes into every marble installation
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-[9/16] md:aspect-video rounded-lg overflow-hidden shadow-2xl">
            <video
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-03-20%20at%206.21.17%20PM-EsjOJVfaTXJmf5WR3yozpLJ8iEpxty.mp4"
              controls
              playsInline
              preload="metadata"
              poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/This%20breathtaking%20marble%20installation%20by%20Chandak%20Marble%20transforms%20grand%20spaces%20into%20timeless%20st-0igveQOMjq0xMBHdgJolm7yQpqKnz2.jpg"
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-400 mt-4 text-sm">
            Experience the beauty of our marble craftsmanship
          </p>
        </motion.div>
      </div>
    </section>
  )
}
