export interface WhiteProduct {
  slug: string
  name: string
  collection: "wow-white"
  image: string
  landscapeImage: string
  originalImage: string
  origin: string
  finish: string
  shortDescription: string
  description: string
  bestFor: string[]
  seoTitle: string
  seoDescription: string
  keywords: string[]
}

const photos: Record<string, string> = {
  "greek-statuario": "/images/wow-white/original/greek-statuario.jpg",
  statuario: "/images/wow-white/original/statuario.jpg",
  "michel-angelo-white": "/images/wow-white/original/michel-angelo-white.jpg",
  "cararra-white": "/images/wow-white/original/cararra-white.jpg",
  "volakas-white": "/images/wow-white/original/volakas-white.jpg",
  "panda-white": "/images/wow-white/original/panda-white.jpg",
  "calacutta-white": "/images/wow-white/original/calacutta-white.jpg",
  "swarovski-white": "/images/wow-white/original/swarovski-white.jpg",
  "golden-spider-white": "/images/wow-white/original/golden-spider-white.jpg",
  "calacutta-gold": "/images/wow-white/original/calacutta-gold.jpg",
  "angelo-white": "/images/wow-white/original/angelo-white.jpg",
  "statuario-white": "/images/wow-white/original/statuario-white.jpg",
  "lasa-white": "/images/wow-white/original/lasa-white.jpg",
}

export const whiteProducts: WhiteProduct[] = Object.entries(photos).map(([slug, photo]) => {
  const name = slug.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ")
  return {
    slug, name, collection: "wow-white",
    image: `/images/wow-white/square/${slug}.jpg`,
    landscapeImage: `/images/wow-white/landscape/${slug}.jpg`, originalImage: photo,
    origin: "Imported selection", finish: "Polished",
    shortDescription: "A luminous white marble with refined natural movement.",
    description: `Hand-selected ${name} white marble for elegant flooring, feature walls, and tailored architectural interiors.`,
    bestFor: ["Flooring", "Feature walls", "Luxury interiors"],
    seoTitle: `${name} White Marble | Chandak Marble`,
    seoDescription: `${name} white marble for luxury flooring, walls, and interiors.`,
    keywords: [name, "white marble", "luxury marble"],
  }
})

export function getWhiteProductBySlug(slug: string) { return whiteProducts.find((product) => product.slug === slug) ?? null }
export function getAllWhiteProductSlugs() { return whiteProducts.map((product) => product.slug) }
export function getWhiteProductImage(slug: string) { return photos[slug] ?? null }
