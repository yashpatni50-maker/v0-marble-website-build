"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function OurStory() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
              Est. 1981
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              A Legacy Built on Quality
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1981 in the heart of India&apos;s marble hub - Kishangarh, Rajasthan - 
                Chandak Marble began as a small family business with a big vision: to bring 
                the world&apos;s finest natural stones to Indian shores.
              </p>
              <p>
                What started as a modest trading house has grown into one of India&apos;s most 
                respected importers of premium marble, serving architects, interior designers, 
                builders, and homeowners across the nation.
              </p>
              <p>
                Today, under the leadership of the second generation, we continue our 
                founder&apos;s legacy of excellence while embracing modern technologies and 
                sustainable practices. Our 25,000+ sq ft showroom houses over 500 varieties 
                of marble from 15+ countries.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-8">
              <div>
                <div className="font-serif text-4xl text-[#c9a227] mb-2">43+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-[#c9a227] mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Marble Varieties</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-[#c9a227] mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Source Countries</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20Marble%20for%20Every%20VisionYour%20dream%20space%20begins%20with%20the%20right%20foundation%2C%20and%20at%20Chandak%20Marbl-zMRdq043J9wAQJ5s3K22xlu75XTFCN.jpg"
                alt="Chandak Marble showroom showcasing premium marble"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#c9a227] text-white p-6 rounded-lg shadow-xl">
              <div className="font-serif text-2xl">Since 1981</div>
              <div className="text-sm opacity-90">Kishangarh, Rajasthan</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
