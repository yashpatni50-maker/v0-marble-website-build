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

const heroImages: Record<string, string> = {
  "greek-statuario": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greek%20Statuario_cropped-jQKARTAQU28G16NRdXuJF4j00JQWJa.jpg",
  statuario: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Statuario_cropped-lD9JmznAsV3BgI3wHrCcfxBM46DJef.jpg",
  "michel-angelo-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Michel%20Angelo%20White-HEylnSPQ9umCoxOSeu0k5Fjhy0XTRz.png",
  "cararra-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Carrara%20White_cropped-aiQxvxgKEUQE4MF44r7RsNm9MZVlCP.jpg",
  "volakas-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Volkas%20White_cropped-fp9TK9ij3OJUX73LHDNJaMlHuCqs9l.jpg",
  "panda-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Panda%20White_cropped-0zEtYhWMe4m4sUu3nmNlPz3I413vC5.jpg",
  "calacutta-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calacutta%20White_cropped-tQDbJyjjHzGTZpLn60Q0hT9AXmCPnx.jpg",
  "swarovski-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Swarovski%20White_cropped-bosErZBi5N8ggd0WmOlc3s3ziLQ9Gk.jpg",
  "golden-spider-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Spider%20White_cropped-59KqtR8Ea7JJunGQPQWD0AXsLljmbZ.jpg",
  "calacutta-gold": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calacutta%20Gold_cropped-P0dDtx14Ci2V6U7KszC1Z5lgsZIIMe.jpg",
  "angelo-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Angelo%20White_cropped-kECT5xosyelVsnTXKXSCwyzFJF08Ox.jpg",
  "statuario-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Statuario%20White-NprpNobXTEzzI1PON4k0fYOxfuhaKh.png",
  "lasa-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lasa%20White_cropped-OcNAfsPDT4SdXbryRo5XpuVLP3iorQ.jpg",
  "michel-angelo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Michel%20Angelo_cropped-KWcGQ9gAOvxIj32eJf3Rhi4K9NMzJA.jpg",
}

const landscapeImages: Record<string, string> = {
  "greek-statuario": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greek%20Statuario_cropped-AD4bglauZwBzSNKwKK1UyDPQcQ0nkh.jpg",
  statuario: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Statuario_cropped-idiu1sMm79XhtgwyjWdv9CxJHx5g0y.jpg",
  "michel-angelo-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Michel%20Angelo%20White-Pci4hvN14z8RkneCD9b53pitEWiTf0.png",
  "cararra-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Carrara%20White_cropped-Prc2ffEy1azn3Tso1kgj0bB0m2Gxok.jpg",
  "volakas-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Volkas%20White_cropped-TEgYRHVGtfQGpGmnXeSu2fuTFgd3nD.jpg",
  "panda-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Panda%20White_cropped-Sr76cwlVXkpSUZDzMW2X8ZT5RevzaR.jpg",
  "calacutta-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calacutta%20White_cropped-Qc0VI8wqCczdVfV297ZVtABajncQJG.jpg",
  "swarovski-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Swarovski%20White_cropped-2bSqeamx2CQAnK0BgLh7zeVDlpDIAE.jpg",
  "golden-spider-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Spider%20White_cropped-2YxG29HSmgnyjALuJN02ujNbSEp2A5.jpg",
  "calacutta-gold": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calacutta%20Gold_cropped-c5zLaDLmHm53TiWiIEIhkWRZpziad4.jpg",
  "angelo-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Angelo%20White_cropped-bQD47LAsPCTaZ0giIRwSnSFDxyEbVf.jpg",
  "statuario-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Statuario%20White-TF6s5RvMC8amvDqL7mWcM9GWWSV8a5.png",
  "lasa-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lasa%20White_cropped-PxQqKKuWe2UGrKVqKtqvBvNgtJMm0k.jpg",
}

const photos: Record<string, string> = {
  "greek-statuario": "/images/wow-white/original/greek-statuario.jpg",
  statuario: "/images/wow-white/original/statuario.jpg",
  "michel-angelo-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Michel%20Angelo%20White.-ZGCrzxjGXN6Sn5wcP7cFrmg9hUwCCe.png",
  "cararra-white": "/images/wow-white/original/cararra-white.jpg",
  "volakas-white": "/images/wow-white/original/volakas-white.jpg",
  "panda-white": "/images/wow-white/original/panda-white.jpg",
  "calacutta-white": "/images/wow-white/original/calacutta-white.jpg",
  "swarovski-white": "/images/wow-white/original/swarovski-white.jpg",
  "golden-spider-white": "/images/wow-white/original/golden-spider-white.jpg",
  "calacutta-gold": "/images/wow-white/original/calacutta-gold.jpg",
  "angelo-white": "/images/wow-white/original/angelo-white.jpg",
  "statuario-white": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Statuario%20White.-Wfdfhm2Q7rP6C9RRefhPbMhLeVse0Z.png",
  "lasa-white": "/images/wow-white/original/lasa-white.jpg",
}

export const whiteProducts: WhiteProduct[] = Object.entries(photos).map(([slug, photo]) => {
  const customNames: Record<string, string> = { statuario: "Statuario Grey" }
  const name = customNames[slug] ?? slug.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ")
  return {
    slug, name, collection: "wow-white",
    image: heroImages[slug] ?? `/images/wow-white/square/${slug}.jpg`,
    landscapeImage: landscapeImages[slug] ?? `/images/wow-white/landscape/${slug}.jpg`, originalImage: photo,
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
