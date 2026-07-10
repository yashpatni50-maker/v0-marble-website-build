"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    name: "Gorgeous Grey",
    description: "Premium imported grey marble with sophisticated textures and timeless elegance.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gorgeous%20Grey-kk7u83Gv0XBeUunFzXF5ZOIx43K6JS.png",
    href: "/products/grey-marble",
  },
  {
    name: "Beautiful Beige",
    description: "Elegant imported beige marble offering warmth and natural beauty.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beautiful%20Beige-FJdtmmy4aBcKfiMKpl4IVFewjZODad.png",
    href: "/products/beige-marble",
  },
  {
    name: "Wow White",
    description: "Luxury imported white marble featuring stunning natural patterns.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wow%20White-WdolUOy8TYbgXVqAvnRl4IPs32gCAW.png",
    href: "/products/white-marble",
  },
  {
    name: "Bold Black",
    description: "Premium black imported marble with dramatic veining and rich finishes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bold%20Black-n6lg8ZdOOuys2EyMmtakDrzMMXmYyM.png",
    href: "/products/black-marble",
  },
  {
    name: "Aesthetic Brown",
    description: "Natural brown imported marble offering warmth and timeless appeal.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aesthetic%20Brown-tC3C07sA9Gb0037AJ0XAP9nhSZRLFN.png",
    href: "/products/brown-marble",
  },
  {
    name: "Onyx Marble",
    description: "Exclusive imported onyx marble with translucent beauty.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Onyx%20Marble-wmvmVg48fjMkrPDl04gt2RncUyLs8V.png",
    href: "/products/onyx-marble",
  },
  {
    name: "Italian Marble",
    description: "A curated collection of premium imported Italian marble.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Italian%20Marble-a7G5J3Oj5fc6aUEhhWmqX9hntboFmi.png",
    href: "/products/italian-marble",
  },
]

export function MarbleCollections() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[oklch(0.55_0.12_70)] text-sm font-medium tracking-wider uppercase animate-fade-in-up">Our Collections</span>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance transition-all duration-700 ${isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0 translate-y-6'}`}>
            Premium Marble Collection
          </h2>
          <p className={`text-muted-foreground text-lg leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0 translate-y-6'}`}>
            Explore our curated selection of premium imported marble from Italy, Turkey, Greece, Portugal, and beyond. 
            Each piece is hand-selected for superior quality and timeless beauty.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.name}
              href={collection.href}
              className={`group relative overflow-hidden rounded-lg bg-card aspect-[3/4] shadow-sm luxury-card-hover transition-all duration-700 ${
                isVisible ? 'animate-fade-in-scale' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: isVisible ? `${300 + index * 50}ms` : undefined }}
            >
              {/* Image */}
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay with gradient animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[oklch(0.80_0.12_70)] transition-colors duration-300">
                  {collection.name}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2 mb-4">
                  {collection.description}
                </p>
                <div className="flex items-center gap-2 text-[oklch(0.80_0.12_70)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Collection
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-lg luxury-button-hover hover:bg-foreground/90 transition-all duration-300 animate-fade-in-up animation-delay-500"
          >
            Explore All Collections
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
