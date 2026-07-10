'use client'

import { useState } from "react"
import Image from "next/image"
import type { MarbleVariety } from "@/lib/marble-collections-data"

interface Props {
  varieties: MarbleVariety[]
}

export function VarietiesGrid({ varieties }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Available Varieties
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Discover our complete range of premium marble varieties, each with unique patterns and characteristics
          </p>
        </div>

        {/* Varieties grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {varieties.map((variety, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image container */}
              <div className="relative h-64 overflow-hidden rounded-lg bg-slate-200">
                <Image
                  src={variety.image}
                  alt={variety.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Variety name */}
              <div className="mt-4">
                <h3 className="font-medium text-foreground group-hover:text-[oklch(0.80_0.12_70)] transition-colors duration-300">
                  {variety.name}
                </h3>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-[oklch(0.80_0.12_70)] w-0 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Info section */}
        <div className="mt-20 text-center">
          <p className="text-foreground/70 mb-8 text-lg">
            Each marble variety is carefully curated for quality and elegance. Samples available upon request.
          </p>
          <a
            href="https://wa.me/919950085300?text=Hello%2C%20I%20would%20like%20to%20request%20samples%20for%20marble%20varieties"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[oklch(0.55_0.12_70)] hover:bg-[oklch(0.45_0.12_70)] text-white font-medium rounded transition-all duration-300 hover:shadow-lg"
          >
            Request Samples
          </a>
        </div>
      </div>
    </section>
  )
}
