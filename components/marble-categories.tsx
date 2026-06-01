"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "italian-marble",
    name: "Italian Marble",
    description: "World-renowned for its exceptional quality and timeless beauty. Our Italian marble collection features the finest selections from Carrara, Calacatta, and Statuario.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luxury%20that%20reflects%20in%20every%20detail.With%20its%20soft%20veining%2C%20glossy%20finish%2C%20and%20timeless%20appeal%2C%20-E9GeIPcxmGBTauLJMAIiAjuH3nQNjH.jpg",
    varieties: ["Carrara White", "Calacatta Gold", "Statuario", "Botticino", "Arabescato"],
    origin: "Italy"
  },
  {
    id: "turkish-marble",
    name: "Turkish Marble",
    description: "Known for its distinctive veining patterns and rich color palette. Turkish marble offers excellent durability with stunning aesthetics.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Let%20your%20floors%20reflect%20your%20finest%20taste.This%20elegant%20marble%20flooring%20by%20Chandak%20Marble%20enhance-6WrBsrn0MmihtzKQHikltXOAInmxwS.jpg",
    varieties: ["Emperador", "Crema Marfil", "Afyon White", "Dino Beige", "Spider Grey"],
    origin: "Turkey"
  },
  {
    id: "onyx-marble",
    name: "Onyx Marble",
    description: "Translucent beauty that creates breathtaking backlit features. Our Onyx collection brings dramatic elegance to any luxury space.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Not%20just%20marble%E2%80%A6%20it%E2%80%99s%20a%20statement%20piece%20Bold%20textures%2C%20rich%20tones%2C%20and%20a%20design%20that%20instantly%20e-QbQVrm383xPXzZh6Q1pA2oqbjz1KXl.jpg",
    varieties: ["Green Onyx", "Honey Onyx", "White Onyx", "Pink Onyx", "Blue Onyx"],
    origin: "Pakistan & Iran"
  },
  {
    id: "white-marble",
    name: "White Marble",
    description: "Pure, pristine, and eternally elegant. Our white marble selection ranges from subtle veining to bold dramatic patterns.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunlit%20spaces.%20Marble%20moods.%20Minimal%20magic.%20This%20luxe%20imported%20marble%20flooring%20brings%20that%20clean-1Pl37YavwQjco4pzDB4Imzta59XSax.jpg",
    varieties: ["Makrana White", "Vietnam White", "Thassos White", "Volakas White", "Ariston White"],
    origin: "India, Greece, Vietnam"
  },
  {
    id: "grey-marble",
    name: "Grey Marble",
    description: "Contemporary sophistication meets natural beauty. Grey marble offers versatility for modern architectural designs.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/This%20breathtaking%20marble%20installation%20by%20Chandak%20Marble%20transforms%20grand%20spaces%20into%20timeless%20st-0igveQOMjq0xMBHdgJolm7yQpqKnz2.jpg",
    varieties: ["Pietra Grey", "Grey Emperador", "Bardiglio", "Silver Wave", "Grigio Carnico"],
    origin: "Italy, Turkey, China"
  },
  {
    id: "beige-marble",
    name: "Beige & Cream Marble",
    description: "Warm, inviting tones that create welcoming spaces. Perfect for creating elegant, timeless interiors with a touch of warmth.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Transform%20your%20space%20into%20an%20oasis%20of%20tranquility%20with%20our%20unique%20marbles%2C%20where%20every%20vein%20and-R1gXedG9ij20lrJAp9N3SC0SRDdaCy.webp",
    varieties: ["Crema Marfil", "Botticino Classic", "Breccia Oniciata", "Jura Beige", "Moca Cream"],
    origin: "Spain, Italy, Portugal"
  },
  {
    id: "exotic-marble",
    name: "Exotic & Rare Marble",
    description: "Statement pieces for the most discerning clients. Our exotic collection features rare patterns and colors found nowhere else.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Experience%20the%20timeless%20beauty%20of%20Marble%20flooring%2C%20where%20loyalty%20meets%20luxury.%20Our%20expertly%20cra-ctszDVauiNX2ybohpYC4qsWul8lltA.webp",
    varieties: ["Blue Bahia", "Patagonia", "Azul Macaubas", "Red Alicante", "Verde Guatemala"],
    origin: "Brazil, Argentina, Guatemala"
  },
  {
    id: "granite",
    name: "Premium Granite",
    description: "Unmatched durability and natural beauty. Our granite selection offers strength with stunning visual appeal.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20Marble%20for%20Every%20VisionYour%20dream%20space%20begins%20with%20the%20right%20foundation%2C%20and%20at%20Chandak%20Marbl-zMRdq043J9wAQJ5s3K22xlu75XTFCN.jpg",
    varieties: ["Black Galaxy", "Tan Brown", "Alaska White", "Kashmir White", "Absolute Black"],
    origin: "India, Brazil, Norway"
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
                    href={`/products/${category.id}`}
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
