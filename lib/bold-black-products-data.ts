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
  "golden-galaxy": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Glaxy-aOLp8Zp2mCqEKTfKaEPc3LXiLwhNCB.jpg",
  "mexican-black": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mexican%20Black-B7SjtYLeDkj77W5gHlhSb95hxq4FcO.jpg",
  "golden-portoro": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Portoro.-LAOBOWYZcnkrJ3sRzDIV7vrrGxNKOe.png",
  "metal-black": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metal%20Black-KQBNDSULvJs6oT35OGJvdc9xwTmjHS.jpg",
  "nero-markino": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nero%20-%20Marquino-RUoB0YXalFJCkS0jUEiW8rZKbkgAqB.jpg",
  "morocco-gold": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Morroco%20Gold-EVmxll0wQjccplQ6EiMF6iDyhQoEzY.jpg",
  "silver-portoro": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silver%20Portoro-01HRNy67Cr3mPNLAtx1evnQfEvwnRy.jpg",
  "black-markino": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Markino%20Black-qAjeVsPxLdxG4y8CU9v6Ev26phhW5V.jpg",
  "nero-saint-laurent": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nero%20Saint%20Laurent.png-wBiqjnws5my2U3BSR55VeWE7KFQqhA.jpeg",
}

const uploaded: Record<string, string> = {
  "golden-galaxy": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Galaxy%20Black-AYHwkfnaPgp6Algsl5WlxPOpLqwwet.png",
  "mexican-black": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mexican%20Black-whYIOMAAiNH9PpvzFWvqK2u5lYKvPD.png",
  "golden-portoro": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Portoro-7JSTVDjsLyXZloxRSUDQWgoebSaMWR.png",
  "metal-black": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metal%20Black-wog4KAWrbeYmdiPSQrUmummReq2O6y.png",
  "nero-markino": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nero%20Markino-QAMmVe1WNvnwdoa3mKAc4udmuRCROc.png",
  "morocco-gold": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Morrocow%20Gold-vqCdIjqFRkdR4k85L5t91G6J1vcI0x.png",
  "silver-portoro": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silver%20Portoro-C6ODFZFWqrgsTgjR66zCwRCgfDH2SP.png",
  "black-markino": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Markino-vDr9JgOJDMXatG6jHDehZuFUGsayVs.jpeg",
  "nero-saint-laurent": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ner%20Saint%20Laurent.-T3ibPnhSSFz2T76PRKRq7YKR4AIEKr.jpeg",
}

export const boldBlackProducts: BoldBlackProduct[] = Object.entries(uploaded).map(([slug, image], index) => {
  const name = slug.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ")
  return { slug, name, collection: "bold-black", image, landscapeImage: slug === "black-markino" ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Markino-vDr9JgOJDMXatG6jHDehZuFUGsayVs.jpeg" : image, originalImage: warehouseImages[slug] ?? image, origin: "Imported selection", finish: "Polished", shortDescription: "A dramatic black marble with distinctive natural veining.", description: `Hand-selected ${name} black marble for bold flooring, feature walls, and architectural interiors.`, bestFor: ["Flooring", "Feature walls", "Luxury interiors"], seoTitle: `${name} Black Marble | Chandak Marble`, seoDescription: `${name} black marble for luxury flooring, walls, and interiors.`, keywords: [name, "black marble", "luxury marble"] }
})

export function getBoldBlackProductBySlug(slug: string) { return boldBlackProducts.find((product) => product.slug === slug) ?? null }
export function getAllBoldBlackProductSlugs() { return boldBlackProducts.map((product) => product.slug) }
