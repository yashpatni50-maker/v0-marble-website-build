import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    name: "Gorgeous Grey",
    description: "Premium imported grey marble with sophisticated textures and timeless elegance.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/This%20breathtaking%20marble%20installation%20by%20Chandak%20Marble%20transforms%20grand%20spaces%20into%20timeless%20st-0igveQOMjq0xMBHdgJolm7yQpqKnz2.jpg",
    href: "/products/grey-marble",
  },
  {
    name: "Beautiful Beige",
    description: "Elegant imported beige marble offering warmth and natural beauty.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Transform%20your%20space%20into%20an%20oasis%20of%20tranquility%20with%20our%20unique%20marbles%2C%20where%20every%20vein%20and-R1gXedG9ij20lrJAp9N3SC0SRDdaCy.webp",
    href: "/products/beige-marble",
  },
  {
    name: "Wow White",
    description: "Luxury imported white marble featuring stunning natural patterns.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunlit%20spaces.%20Marble%20moods.%20Minimal%20magic.%20This%20luxe%20imported%20marble%20flooring%20brings%20that%20clean-1Pl37YavwQjco4pzDB4Imzta59XSax.jpg",
    href: "/products/white-marble",
  },
  {
    name: "Bold Black",
    description: "Premium black imported marble with dramatic veining and rich finishes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Let%20your%20floors%20reflect%20your%20finest%20taste.This%20elegant%20marble%20flooring%20by%20Chandak%20Marble%20enhance-6WrBsrn0MmihtzKQHikltXOAInmxwS.jpg",
    href: "/products/black-marble",
  },
  {
    name: "Aesthetic Brown",
    description: "Natural brown imported marble offering warmth and timeless appeal.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Not%20just%20marble%E2%80%A6%20it%E2%80%99s%20a%20statement%20piece%20Bold%20textures%2C%20rich%20tones%2C%20and%20a%20design%20that%20instantly%20e-QbQVrm383xPXzZh6Q1pA2oqbjz1KXl.jpg",
    href: "/products/brown-marble",
  },
  {
    name: "Onyx Marble",
    description: "Exclusive imported onyx marble with translucent beauty.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20Marble%20for%20Every%20VisionYour%20dream%20space%20begins%20with%20the%20right%20foundation%2C%20and%20at%20Chandak%20Marbl-zMRdq043J9wAQJ5s3K22xlu75XTFCN.jpg",
    href: "/products/onyx-marble",
  },
  {
    name: "Exotic Marble",
    description: "Rare and premium imported exotic marble with extraordinary textures.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luxury%20that%20reflects%20in%20every%20detail.With%20its%20soft%20veining%2C%20glossy%20finish%2C%20and%20timeless%20appeal%2C%20-E9GeIPcxmGBTauLJMAIiAjuH3nQNjH.jpg",
    href: "/products/exotic-marble",
  },
  {
    name: "Italian Marble",
    description: "A curated collection of premium imported Italian marble.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Experience%20the%20timeless%20beauty%20of%20Marble%20flooring%2C%20where%20loyalty%20meets%20luxury.%20Our%20expertly%20cra-ctszDVauiNX2ybohpYC4qsWul8lltA.webp",
    href: "/products/italian-marble",
  },
]

export function MarbleCollections() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[oklch(0.55_0.12_70)] text-sm font-medium tracking-wider uppercase">Our Collections</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Premium Marble Collection
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Explore our curated selection of premium imported marble from Italy, Turkey, Greece, Portugal, and beyond. 
            Each piece is hand-selected for superior quality and timeless beauty.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={collection.href}
              className="group relative overflow-hidden rounded-lg bg-card aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[oklch(0.80_0.12_70)] transition-colors">
                  {collection.name}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2 mb-4">
                  {collection.description}
                </p>
                <div className="flex items-center gap-2 text-[oklch(0.80_0.12_70)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Explore All Collections
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
