"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "gorgeous-grey",
    name: "Gorgeous Grey",
    description: "Contemporary sophistication meets natural beauty. Our Gorgeous Grey collection offers versatility for modern architectural designs.",
    image: "/images/category-gorgeous-grey.png",
    link: "/products/collections/gorgeous-grey",
    varieties: ["Burberry Grey", "Arctic Grey", "Waterfall Grey", "Silver River", "Riviera Grey"],
    origin: "Premium Selection"
  },
  {
    id: "beautiful-beige",
    name: "Beautiful Beige",
    description: "Warm, inviting tones that create welcoming spaces. Perfect for creating elegant, timeless interiors with a touch of warmth.",
    image: "/images/category-beautiful-beige.png",
    link: "/products/collections/beautiful-beige",
    varieties: ["Crema Nova", "Crema Marfil", "D Martino", "Perlato Sicilia", "Oracle Beige"],
    origin: "Premium Selection"
  },
  {
    id: "wow-white",
    name: "Wow White",
    description: "Pure, pristine, and eternally elegant. Our white marble selection ranges from subtle veining to bold dramatic patterns.",
    image: "/images/category-wow-white.png",
    link: "/products/collections/wow-white",
    varieties: ["Statuario Grey", "Calacatta Borghini", "Bianco Supremo", "Pure White", "Alpine White"],
    origin: "Premium Selection"
  },
  {
    id: "bold-black",
    name: "Bold Black",
    description: "Power and sophistication in every vein. Our Bold Black collection features striking patterns and exudes luxury in every application.",
    image: "/images/category-bold-black.png",
    link: "/products/collections/bold-black",
    varieties: ["Nero Saint Laurent", "Golden Galaxy", "Golden Portoro", "Black Marquina", "Cosmic Portoro"],
    origin: "Premium Selection"
  },
  {
    id: "aesthetic-brown",
    name: "Aesthetic Brown",
    description: "Warmth and artistic expression combined. These rich, earthy tones create spaces that feel both grounded and luxurious.",
    image: "/images/category-aesthetic-brown.png",
    link: "/products/collections/aesthetic-brown",
    varieties: ["Golden Emperador", "Dark Emperador", "Viena Brown", "Bronze Armani", "African Gold"],
    origin: "Premium Selection"
  },
  {
    id: "exotic",
    name: "Exotic",
    description: "Rare, expressive stones with distinctive movement and character for spaces that feel truly one of a kind.",
    image: "/images/category-gorgeous-grey.png",
    link: "/products/collections/exotic",
    varieties: ["Rare stones", "Statement marble", "Natural textures", "Unique veining"],
    origin: "Premium Selection"
  },
  {
    id: "onyx-marble",
    name: "Onyx Marble",
    description: "Translucent beauty that creates breathtaking backlit features. Our Onyx collection brings dramatic elegance to any luxury space.",
    image: "/images/category-onyx-marble.png",
    link: "/products/collections/onyx-marble",
    varieties: ["Honey Onyx", "Champagne Onyx", "White Onyx", "Golden Wave Onyx", "Ivory Onyx"],
    origin: "Premium Selection"
  },
]

export function MarbleCategories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
            Browse Categories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Explore Our Marble Range
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From classic Italian marble to exotic rare stones, we offer over 500+ varieties to suit every design vision and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="relative h-80 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-[#c9a227] text-xs font-medium tracking-wider uppercase mb-2">
                    {category.origin}
                  </span>
                  <h3 className="font-serif text-xl text-white mb-2">
                    {category.name}
                  </h3>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeCategory === category.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {category.varieties.slice(0, 3).map((variety) => (
                        <span 
                          key={variety}
                          className="text-xs bg-white/20 text-white px-2 py-1 rounded"
                        >
                          {variety}
                        </span>
                      ))}
                      {category.varieties.length > 3 && (
                        <span className="text-xs text-[#c9a227]">
                          +{category.varieties.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Link 
                    href={category.link}
                    className="inline-flex items-center text-white text-sm font-medium group/link"
                  >
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            {"Can't find what you're looking for? We source custom marble on request."}
          </p>
          <Button asChild size="lg" className="bg-[#c9a227] hover:bg-[#b8922a] text-white">
            <a href="tel:+919950085300">
              <Phone className="mr-2 h-5 w-5" />
              Call for Custom Requirements
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
