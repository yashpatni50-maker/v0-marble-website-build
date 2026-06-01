"use client"

import { motion } from "framer-motion"

const milestones = [
  {
    year: "1981",
    title: "The Beginning",
    description: "Chandak Marble founded in Kishangarh by Late Shri Chandak Ji with a vision to bring world-class marble to India."
  },
  {
    year: "1992",
    title: "First International Import",
    description: "Established direct import channels with Italian quarries, bringing authentic Carrara marble to Indian markets."
  },
  {
    year: "2000",
    title: "Expanded Showroom",
    description: "Opened our flagship 25,000+ sq ft showroom, becoming one of the largest marble galleries in North India."
  },
  {
    year: "2008",
    title: "Global Sourcing Network",
    description: "Expanded sourcing to 15+ countries including Turkey, Greece, Spain, and Brazil for diverse marble varieties."
  },
  {
    year: "2015",
    title: "Second Generation Leadership",
    description: "The next generation took the helm, combining traditional values with modern business practices."
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched online presence and virtual consultation services, serving clients across India."
  },
  {
    year: "2024",
    title: "Continuing Excellence",
    description: "43+ years strong, continuing to be the trusted choice for premium marble in India."
  }
]

export function MilestoneTimeline() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Milestones Through the Years
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden lg:block" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <span className="text-[#c9a227] font-serif text-2xl">{milestone.year}</span>
                    <h3 className="font-serif text-xl text-foreground mt-2 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="w-4 h-4 bg-[#c9a227] rounded-full border-4 border-background shadow-md z-10 hidden lg:block" />
                
                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
