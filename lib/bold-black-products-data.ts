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

const warehouseImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Glaxy%20Black-iHxEMWE7NTzQoku8D4KfmM1Asu1sZM.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nero%20-%20Marquino-YOTHV6fUBBw4pLIhlPVNQxUmrBjLPa.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Morroco%20Gold-Cdln6v43GeLobLhneF7dTb3WhJg3MJ.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silver%20Portoro-ErE9CE2vLcGmuIMNUOuSiNWrHSwkg9.jpg",
]

const uploaded: Record<string, string> = {
  "golden-galaxy": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Galaxy%20Black-AYHwkfnaPgp6Algsl5WlxPOpLqwwet.png",
  "black-markino": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Markino-9S4bt2T3FA5H9jgDxuXA6mjxARGhuv.png",
  "mexican-black": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mexican%20Black-whYIOMAAiNH9PpvzFWvqK2u5lYKvPD.png",
  "golden-portoro": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Portoro-CDNrYFTAWQWOMaJmPlb3nigb89uRc7.png",
  "markino-black": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Markino%20Black-owVckbTBQtJaHHsiJsWvCc6TqKyNzn.jpg",
  "metal-black": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metal%20Black-wXCVwFpx4nJOi6A6Pdjp5rXOIxATcU.jpg",
  "nero-markino": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nero%20Markino-QAMmVe1WNvnwdoa3mKAc4udmuRCROc.png",
  "morocco-gold": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Morrocow%20Gold-vqCdIjqFRkdR4k85L5t91G6J1vcI0x.png",
  "silver-portoro": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silver%20Portoro-C6ODFZFWqrgsTgjR66zCwRCgfDH2SP.png",
  "nsl": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NSL-QpYigy2AJ140qhQM1aKW5A3XZcil1G.png",
  "golden-galaxy-black": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Galaxy%20Black-AYHwkfnaPgp6Algsl5WlxPOpLqwwet.png",
  "nero-saint-laurent": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mexican%20Black-7W1VtRP3nrlcGg8ccfVDCCVf8x8XBV.jpg",
}

export const boldBlackProducts: BoldBlackProduct[] = Object.entries(uploaded).map(([slug, image], index) => {
  const name = slug.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ")
  return { slug, name, collection: "bold-black", image, landscapeImage: image, originalImage: warehouseImages[index % warehouseImages.length], origin: "Imported selection", finish: "Polished", shortDescription: "A dramatic black marble with distinctive natural veining.", description: `Hand-selected ${name} black marble for bold flooring, feature walls, and architectural interiors.`, bestFor: ["Flooring", "Feature walls", "Luxury interiors"], seoTitle: `${name} Black Marble | Chandak Marble`, seoDescription: `${name} black marble for luxury flooring, walls, and interiors.`, keywords: [name, "black marble", "luxury marble"] }
})

export function getBoldBlackProductBySlug(slug: string) { return boldBlackProducts.find((product) => product.slug === slug) ?? null }
export function getAllBoldBlackProductSlugs() { return boldBlackProducts.map((product) => product.slug) }
