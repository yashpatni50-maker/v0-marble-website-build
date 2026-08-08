export interface GreyProduct {
  slug: string
  name: string
  collection: "gorgeous-grey"
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
  "moon-stone-silver": "/images/gorgeous-grey/original/moon-stone-silver.jpg",
  "princess-grey": "/images/gorgeous-grey/original/princess-grey.jpg",
  "symphoney-grey": "/images/gorgeous-grey/original/symphoney-grey.jpg",
  "cinerious-grey": "/images/gorgeous-grey/original/cinerious-grey.jpg",
  "burberry-grey": "/images/gorgeous-grey/original/burberry-grey.jpg",
  "silk-spider-grey": "/images/gorgeous-grey/original/silk-spider-grey.jpg",
  "floral-grey": "/images/gorgeous-grey/original/floral-grey.jpg",
  "grey-sonata": "/images/gorgeous-grey/original/grey-sonata.jpg",
  "spanish-armani-grey": "/images/gorgeous-grey/original/spanish-armani-grey.jpg",
  "iceberg-grey": "/images/gorgeous-grey/original/iceberg-grey.jpg",
  "silver-star-grey": "/images/gorgeous-grey/original/silver-star-grey.jpg",
  "bardiglio-grey": "/images/gorgeous-grey/original/bardiglio-grey.jpg",
  "grey-orobico": "/images/gorgeous-grey/original/grey-orobico.jpg",
  "grey-william": "/images/gorgeous-grey/original/grey-william.jpg",
  "grey-emperador": "/images/gorgeous-grey/original/grey-emperador.jpg",
  "premium-grey": "/images/gorgeous-grey/original/premium-grey.jpg",
  "alaska-grey": "/images/gorgeous-grey/original/alaska-grey.jpg",
}

export const greyProducts: GreyProduct[] = Object.entries(photos).map(([slug, photo]) => {
  const name = slug.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ")
  return { slug, name, collection: "gorgeous-grey", image: `/images/gorgeous-grey/square/${slug}.jpg`, landscapeImage: `/images/gorgeous-grey/landscape/${slug}.jpg`, originalImage: photo, origin: "Imported selection", finish: "Polished", shortDescription: `A refined grey marble with a distinctive natural rhythm.`, description: `Hand-selected ${name} grey marble for elevated flooring, feature walls, and tailored architectural interiors.`, bestFor: ["Flooring", "Feature walls", "Luxury interiors"], seoTitle: `${name} Grey Marble | Chandak Marble`, seoDescription: `${name} grey marble for luxury flooring, walls, and interiors.`, keywords: [name, "grey marble", "luxury marble"] }
})

export function getGreyProductBySlug(slug: string) { return greyProducts.find((product) => product.slug === slug) ?? null }
export function getAllGreyProductSlugs() { return greyProducts.map((product) => product.slug) }
export function getGreyProductImage(slug: string) { return photos[slug] ?? null }
