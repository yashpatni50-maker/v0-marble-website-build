export interface ExoticProduct {
  slug: string
  name: string
  collection: "exotic"
  image: string
  landscapeImage: string
  originalImage: string
  origin: string
  finish: string
  bestFor: string[]
  shortDescription: string
  description: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
}

const products: ExoticProduct[] = [
  // Exotic marble products will be added here
]

export const exoticProducts = products
