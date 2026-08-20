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

const heroImages: Record<string, string> = {
  "moon-stone-silver": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moon%20Stone%20Silver_cropped-GZ706sXDtllvcUoX8p57UmfDPoPCM2.jpg",
  "princess-grey": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Princess%20Grey-okbPMUBLmaJ898DXvoYPiDJLILSFPy.jpg",
  "symphoney-grey": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Symphony%20Grey_cropped-fRMeBuA7BNeMlULujl5qWIjnyNW870.jpg",
  "cinerious-grey": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cinerious%20Grey_cropped-gcnqCxVhJIDXRj8X38dDH90NI4MagD.jpg",
  "burberry-grey": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Burberry%20Grey_cropped-Vx0DuMu5I2JHT4kUEyn8JxwpoCNJzI.jpg",
  "silk-spider-grey": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silk%20Grey%20Spider_cropped-xA9esnhlllKyT6E7oUikVSo6RRUkT6.jpg",
  "floral-grey": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Floral%20Grey.-t4l5hjdW9CFqZV8oJQ74YUDhotis7R.jpg",
  "grey-sonata": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sonata%20Grey_cropped-ZdKDhy4vHhRHZUFCOa9LAbL7FHgwj0.jpg",
  "spanish-armani-grey": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spanish%20Armani%20Grey_cropped-Jt4TLn7mKf5g92TtzWIpyUrf4avnrV.jpg",
  "iceberg-grey": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ice%20Burg%20Grey_cropped-DSMbVi1lUFqAwQrXpdGOTmVtF9Qdwa.jpg",
  "silver-star-grey": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silver%20Star%20Grey_cropped-oGFeJbx1vq35uNkqbtOCSjpv4XVpbY.jpg",
  "bardiglio-grey": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bardiglio%20Grey_cropped-Tzo3BEEu3Y5VP2Fw1WWQS0qxdqOvRS.jpg",
  "grey-orobico": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grey%20Orobico_cropped-ZyBjRb3RVTdEwFQQUZqOmStNVDc8Cd.jpg",
  "grey-william": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grey%20William_cropped-MyyDwDcDvvwWFd5IGXMFpzMoU9HWNC.jpg",
  "grey-emperador": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Emperador%20Grey_cropped-7ck5pw3XFBwZ2WchdVPf8dvf7u6DsE.jpg",
  "premium-grey": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Premium%20Grey_cropped-NHLaaz37Vv4T1w5TBH0I4ui6ShHuL8.jpg",
  "alaska-grey": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Alaska%20Grey_cropped-f7dV0F6qWwe2UdMqdlBzJp5qHeGlO5.jpg",
}

const photos: Record<string, string> = {
  "moon-stone-silver": "/images/gorgeous-grey/original/moon-stone-silver.jpg",
  "princess-grey": "/images/gorgeous-grey/original/princess-grey.jpg",
  "symphoney-grey": "/images/gorgeous-grey/original/symphoney-grey.jpg",
  "cinerious-grey": "/images/gorgeous-grey/original/cinerious-grey.jpg",
  "burberry-grey": "/images/gorgeous-grey/original/burberry-grey.jpg",
  "silk-spider-grey": "/images/gorgeous-grey/original/silk-spider-grey.jpg",
  "floral-grey": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Floral%20Grey-MyOTgzbxlcf6O9T3fXJA53ZG8j6nvJ.jpg",
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
  return { slug, name, collection: "gorgeous-grey", image: heroImages[slug] ?? `/images/gorgeous-grey/square/${slug}.jpg`, landscapeImage: `/images/gorgeous-grey/landscape/${slug}.jpg`, originalImage: photo, origin: "Imported selection", finish: "Polished", shortDescription: `A refined grey marble with a distinctive natural rhythm.`, description: `Hand-selected ${name} grey marble for elevated flooring, feature walls, and tailored architectural interiors.`, bestFor: ["Flooring", "Feature walls", "Luxury interiors"], seoTitle: `${name} Grey Marble | Chandak Marble`, seoDescription: `${name} grey marble for luxury flooring, walls, and interiors.`, keywords: [name, "grey marble", "luxury marble"] }
})

export function getGreyProductBySlug(slug: string) { return greyProducts.find((product) => product.slug === slug) ?? null }
export function getAllGreyProductSlugs() { return greyProducts.map((product) => product.slug) }
export function getGreyProductImage(slug: string) { return photos[slug] ?? null }
