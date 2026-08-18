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

const landscapeImages: Record<string, string> = {
  "versale-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Versale%20Brown_cropped-uKPfektXnxTBfJdt9bKyFW7lfzXEfm.jpg",
  "french-chiffon": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/French%20Chiffon_cropped-2M0cLBJPGtxb6eHBpUbeofoCI8iAeJ.jpg",
  "dark-emperador": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Emperador_cropped-1wW3Z3YPkDsRaQ8tkK4aB1GrO6vNQj.jpg",
  "silk-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIlk%20Brown_cropped-Efuxs7PijdHyxZmiuh1MJTS7ocadhj.jpg",
  "bronze-armani": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bronze%20Armani_cropped-ASFU1la25Do1YLCHh7mVRxKHBjiErQ.jpg",
  "french-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/French%20Brown_cropped-rZdlM9DYrLLdYV5JX4vpLXXAG2LHsq.jpg",
  "opera-gold": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Opera%20Gold_cropped-Vv4UGGVmIqwNikDQ4GFk3LNJV58Xmv.jpg",
  "spanish-dark-emperador": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spanish%20Dark%20Emperador_cropped-y6r2ZryW2qwvwBgvJLoYbYSDjokkDm.jpg",
  "metallic-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metallic%20Brown_cropped-Jzw6CQvYxs18kmSqzA7gsTxrltN2b6.jpg",
  "meta-rust": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meta%20Rust_cropped-ke4MUaieEcOWpccQRoXKGtEsOjcMzp.jpg",
  "grigio-armani": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grigio%20Armani-UBo8mUOJArWs7HBtsXIEJ6m1XhfE8Z.jpg",
  "spanish-armani-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spanish%20Armani%20Brown_cropped-PM7SSTyZV7FF52ZicwNJ2nGBiHtdFT.jpg",
  "turkish-dark-emperador": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Turkish%20Dark%20Emperador_cropped-UY8bM5SRORxMPdVMxzMWzP6CR2zE3R.jpg",
}

const fullRhythmImages: Record<string, string> = {
  "versale-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Versale%20Brown-52rpl1Yjc1TQbPDxt955q98fDyIjUX.jpg",
  "french-chiffon": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/French%20Chiffon-ZRhKCJVJaflW3hZA9SVss8XMYg84nM.jpg",
  "dark-emperador": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Emperador-adBhpjmGBLlVzXChLNGeSaXznyIfHj.jpg",
  "silk-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIlk%20Brown-0x9NJzRJcvVJDNK52L7jNXoXvD0xO4.jpg",
  "bronze-armani": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bronze%20Armani-3kwCvZH1vVaVZPTewR3KMWWkwHDb2p.jpg",
  "french-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/French%20Brown-TXKpI5lNAWJ5dWqtRC2o6yiLw2LRzD.jpg",
  "opera-gold": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Opera%20Gold-IQyfWpT7zvg41Us1utVg5Tat4Wu66c.jpg",
  "spanish-dark-emperador": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spanish%20Dark%20Emperador-UmJFbgnqoIT9phtAC7hW4mJVhlVWEx.jpg",
  "metallic-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metallic%20Brown-EmiO8eL5Jm6oL0n5QDxxfY0CfMPSOF.jpg",
  "meta-rust": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meta%20Rust-Ks0WqCm3lYxByiCK8tRUP7iYtBkBv1.jpg",
  "grigio-armani": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grigio%20Armani-OeJ4qOtKaeCElkySXt5cD40dK0yJdm.jpg",
  "spanish-armani-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spanish%20Armani%20Brown-vIZZOOrIWXJEwAO5aYIpswqAReMGZ3.jpg",
  "turkish-dark-emperador": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Turkish%20Dark%20Emperador-BnQHWcuv2cuMfp5B9rYVywmnGxbb7Y.jpg",
  "tobacco-brown": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tobacco%20Brown-UpCJE9Ivbr4AiLVhIExjZr4nmKrWqa.jpg",
}

const names: Record<string, string> = {
  "versale-brown": "Versale Brown", "french-chiffon": "French Chiffon", "dark-emperador": "Dark Emperador", "silk-brown": "Silk Brown", "bronze-armani": "Bronze Armani", "french-brown": "French Brown", "opera-gold": "Opera Gold", "spanish-dark-emperador": "Spanish Dark Emperador", "metallic-brown": "Metallic Brown", "meta-rust": "Meta Rust", "grigio-armani": "Grigio Armani", "spanish-armani-brown": "Spanish Armani Brown", "turkish-dark-emperador": "Turkish Dark Emperador",
}

export const aestheticBrownProducts: AestheticBrownProduct[] = Object.entries(images).map(([slug, image]) => ({ slug, name: names[slug], collection: "aesthetic-brown", image, landscapeImage: landscapeImages[slug], originalImage: fullRhythmImages[slug] ?? "", origin: "Imported selection", finish: "Polished", shortDescription: "A refined brown marble with distinctive natural movement.", description: `Hand-selected ${names[slug]} marble for warm, sophisticated architectural interiors.`, bestFor: ["Flooring", "Feature walls", "Luxury interiors"], seoTitle: `${names[slug]} Marble | Chandak Marble`, seoDescription: `${names[slug]} marble for refined interiors.`, keywords: [names[slug], "brown marble", "luxury marble"] }))

export function getAllAestheticBrownProductSlugs() { return aestheticBrownProducts.map((product) => product.slug) }
export function getAestheticBrownProductBySlug(slug: string) { return aestheticBrownProducts.find((product) => product.slug === slug) }
