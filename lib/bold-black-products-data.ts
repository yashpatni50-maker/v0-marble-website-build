export interface BoldBlackProduct {
  slug: string
  name: string
  collection: "bold-black"
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

const warehouseImages: Record<string, string> = {
  "silver-portoro": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silver%20Portoro-lSI7g4oQ0Z8RAJ0p6LvL160ZNnjg6K.jpg",
  "morocco-gold": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Morroco%20Gold-uZ11wzIfArYBtyK5fQ196MEyyhlcwr.jpg",
}

const uploaded: Record<string, string> = {
  "golden-galaxy": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Galaxy%20Black-AYHwkfnaPgp6Algsl5WlxPOpLqwwet.png",
  "mexican-black": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mexican%20Black-whYIOMAAiNH9PpvzFWvqK2u5lYKvPD.png",
  "golden-portoro": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Portoro-7JSTVDjsLyXZloxRSUDQWgoebSaMWR.png",
  "metal-black": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metal%20Black-wog4KAWrbeYmdiPSQrUmummReq2O6y.png",
  "nero-markino": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nero%20Markino-QAMmVe1WNvnwdoa3mKAc4udmuRCROc.png",
  "morocco-gold": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Morrocow%20Gold-vqCdIjqFRkdR4k85L5t91G6J1vcI0x.png",
  "silver-portoro": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silver%20Portoro-C6ODFZFWqrgsTgjR66zCwRCgfDH2SP.png",
  "black-markino": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Markino_cropped-vON8yjaiNkGuac0I2iU35xvIglo00j.jpg",
  "nero-saint-laurent": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ner%20Saint%20Laurent.-T3ibPnhSSFz2T76PRKRq7YKR4AIEKr.jpeg",
}

export const boldBlackProducts: BoldBlackProduct[] = Object.entries(uploaded).map(([slug, image], index) => {
  const name = slug.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ")
  return { slug, name, collection: "bold-black", image, landscapeImage: image, originalImage: warehouseImages[slug] ?? image, origin: "Imported selection", finish: "Polished", shortDescription: "A dramatic black marble with distinctive natural veining.", description: `Hand-selected ${name} black marble for bold flooring, feature walls, and architectural interiors.`, bestFor: ["Flooring", "Feature walls", "Luxury interiors"], seoTitle: `${name} Black Marble | Chandak Marble`, seoDescription: `${name} black marble for luxury flooring, walls, and interiors.`, keywords: [name, "black marble", "luxury marble"] }
})

export function getBoldBlackProductBySlug(slug: string) { return boldBlackProducts.find((product) => product.slug === slug) ?? null }
export function getAllBoldBlackProductSlugs() { return boldBlackProducts.map((product) => product.slug) }
