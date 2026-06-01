"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductsCTA() {
  return (
    <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Experience%20the%20timeless%20beauty%20of%20Marble%20flooring%2C%20where%20loyalty%20meets%20luxury.%20Our%20expertly%20cra-ctszDVauiNX2ybohpYC4qsWul8lltA.webp")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
            Visit Our Showroom
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Experience the Beauty in Person
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Nothing compares to seeing and touching our marble collections in person. 
            Visit our 25,000+ sq ft showroom in Kishangarh to explore the full range 
            and get expert guidance from our team.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg" className="bg-[#c9a227] hover:bg-[#b8922a] text-white">
              <a href="tel:+919950085300">
                <Phone className="mr-2 h-5 w-5" />
                +91 99500 85300
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a1a1a]">
              <a 
                href="https://wa.me/919950085300?text=Hi%20Chandak%20Marble%2C%20I%20am%20interested%20in%20your%20marble%20collection.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center text-gray-400">
            <MapPin className="h-5 w-5 mr-2 text-[#c9a227]" />
            <span>Chandak Marble, NH-79A, Kishangarh, Rajasthan 305801</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
