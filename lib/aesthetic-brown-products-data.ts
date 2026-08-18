export interface AestheticBrownProduct {
  slug: string
  name: string
  collection: "aesthetic-brown"
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

const images: Record<string, string> = {
  "versale-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Versale%20Brown_cropped-zCDxh8Q10ikWFIcuLYXfLg9QbJVhqk.jpg",
  "french-chiffon": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/French%20Chiffon_cropped-2J550eHTtJJSZqSFfxSXgGEg2b8ehL.jpg",
  "dark-emperador": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Emperador_cropped-MFkYj63HFICxl8EItIVFHZeT4SGbFz.jpg",
  "silk-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIlk%20Brown_cropped-iaFEGylSB469IKjzq3ynDLPmIbGbm9.jpg",
  "bronze-armani": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bronze%20Armani_cropped-IU5Vz2NoItL95yHgAqixcD7EV10564.jpg",
  "french-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/French%20Brown_cropped-GmOOY7vm34ezrKVixFZrV7PvDWMMHC.jpg",
  "opera-gold": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Opera%20Gold_cropped-fqO3ZYRmzUvpBeCvQIyUVCNpKZ55Da.jpg",
  "spanish-dark-emperador": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spanish%20Dark%20Emperador_cropped-j0YqidKzpqsFI3XDnj3VTNJDxCVqvs.jpg",
  "metallic-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metallic%20Brown_cropped-au7NIxoPnOI8m0IsPTY1ve0qjIv3qV.jpg",
  "meta-rust": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meta%20Rust_cropped-1DgWqtJPmAYEOg02Tt5QzQ6cNBlCpW.jpg",
  "grigio-armani": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grigio%20Armani-vYaNhAZvFduNWZsce3Asbdbq2IHNjM.jpg",
  "spanish-armani-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spanish%20Armani%20Brown_cropped-1lNjbzoDCcwsd55SotVeMrU76Xvjky.jpg",
  "turkish-dark-emperador": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Turkish%20Dark%20Emperador_cropped-II4OXyDSswPasEcCP6dikmWt4l1L4T.jpg",
}

const names: Record<string, string> = {
  "versale-brown": "Versale Brown", "french-chiffon": "French Chiffon", "dark-emperador": "Dark Emperador", "silk-brown": "Silk Brown", "bronze-armani": "Bronze Armani", "french-brown": "French Brown", "opera-gold": "Opera Gold", "spanish-dark-emperador": "Spanish Dark Emperador", "metallic-brown": "Metallic Brown", "meta-rust": "Meta Rust", "grigio-armani": "Grigio Armani", "spanish-armani-brown": "Spanish Armani Brown", "turkish-dark-emperador": "Turkish Dark Emperador",
}

export const aestheticBrownProducts: AestheticBrownProduct[] = Object.entries(images).map(([slug, image]) => ({ slug, name: names[slug], collection: "aesthetic-brown", image, landscapeImage: image, originalImage: image, origin: "Imported selection", finish: "Polished", shortDescription: "A refined brown marble with distinctive natural movement.", description: `Hand-selected ${names[slug]} marble for warm, sophisticated architectural interiors.`, bestFor: ["Flooring", "Feature walls", "Luxury interiors"], seoTitle: `${names[slug]} Marble | Chandak Marble`, seoDescription: `${names[slug]} marble for refined interiors.`, keywords: [names[slug], "brown marble", "luxury marble"] }))

export function getAllAestheticBrownProductSlugs() { return aestheticBrownProducts.map((product) => product.slug) }
export function getAestheticBrownProductBySlug(slug: string) { return aestheticBrownProducts.find((product) => product.slug === slug) }
