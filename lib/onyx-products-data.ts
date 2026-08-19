export interface OnyxProduct {
  slug: string
  name: string
  image: string
  origin: string
  finish: string
  shortDescription: string
  description: string
  bestFor: string[]
  landscapeImage: string
  originalImage: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
}

const onyxWarehouseImages: Record<string, string> = {
  "classic-white-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Classic%20White%20Onyx-Xr5GYNNAE7kUgR4ScUhQA2ENipipFQ.jpg",
  "crystal-white-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crystal%20White%20Onyx-254iX9BvbeC2UWTipoaJVtCWYOyDFA.jpg",
  "honey-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Honey%20Onyx-Zsbb1F8947v7ii9GBGYgknVmx0HISu.jpg",
  "champagne-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Champagne%20Onyx-N5dd5aUBhsUM6qhBzz99gkSOrfA2dz.jpg",
  "emerald-green-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emerald%20Green-e9IKbRHiItXEQqwlFitQgKobkaK5pb.jpg",
  "copper-dune-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copper%20Dune%20Onyx-da9619jyxmGG90gZtgDg2lwt1Vpljv.jpg",
  "fire-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fire%20Onyx-HAc5rZk6I7xzkWPyltsW8NKxQeo5UC.jpg",
  "sunrise-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunrise%20Onyx-SnTpmAyUX2h7xwcclqRL3QUQxt4vNH.jpg",
  "golden-ivory-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Ivory%20Onyx-OyZj94mCLdFOd7Ju9whlZxfnxBQev4.jpg",
  "mango-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mango%20Onyx-xZnTAkpu7AgX0v6Lb0n2ut5yPZNg23.jpg",
  "honey-crystal-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Honey%20Crystal%20Onyx-uoTtWPqXEQKE5S0JlHP1NfRe4qdslN.jpg",
  "smoky-wave-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smoky%20Wave%20Onyx-tEgMzvd6oCAssEmbuEsOO5GhmrfaAq.jpg",
  "yellow-sapphire-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yellow%20Saphire%20Onyx-msgpszQL4COyR4eanocqZuG6qimnTc.jpg",
}

const onyxLandscapeImages: Record<string, string> = {
  "classic-white-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Classic%20White%20Onyx_cropped-MtDpkPZOVJ3ql2zubmjZxoUE4Uy2Fk.jpg",
  "crystal-white-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crystal%20White%20Onyx_cropped-iJIpkn0HINIcxQiICQBHVLtLpRYQur.jpg",
  "honey-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Honey%20Onyx_cropped-5mAS9VC7zlhQMwUwFP6d93Tl1D5rdB.jpg",
  "champagne-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Champagne%20Onyx_cropped-172BK2ywwRJAKnvrALTuVHIPucbsQ8.jpg",
  "emerald-green-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emerald%20Green_cropped-tMQTrkFXowzRpBTPLDhLh09Yr0VmhW.jpg",
  "copper-dune-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copper%20Dune%20Onyx_cropped-fhBHdXfkxnrP1d3ZrMtExPIeMHZhYg.jpg",
  "fire-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fire%20Onyx_cropped-6OPKzvkYYsk6I6tT43Jhj7tyG5Ebrx.jpg",
  "sunrise-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunrise%20Onyx_cropped-R9apLLKaJ73rZhwK5OtTESS50SdFJg.jpg",
  "golden-ivory-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Ivory%20Onyx_cropped-Bav5xVGpJOyJc0nfFt6JRtxli3ZfuN.jpg",
  "mango-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mango%20Onyx_cropped-Z6BLc1WnsGibHTPXlrDau8ZS7jowu3.jpg",
  "honey-crystal-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Honey%20Crystal%20Onyx_cropped-TWAbDBcoSnheKCo8nHOy8LyoDnO9NE.jpg",
  "smoky-wave-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smoky%20Wave%20Onyx_cropped-noseMoflEBSpoeCRuOVISTBkBScaLr.jpg",
  "yellow-sapphire-onyx": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yellow%20Saphire%20Onyx_cropped-kB4fHjhitU3UqmSkSLVUbmy467gcYX.jpg",
}

export const onyxProducts: OnyxProduct[] = [
  { slug: "classic-white-onyx", name: "Classic White Onyx", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Classic%20White%20Onyx_cropped-1mgiqtq334NVlRjXmqL5RJd3gHPnyb.jpg", origin: "Imported selection", finish: "Polished" },
  { slug: "crystal-white-onyx", name: "Crystal White Onyx", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crystal%20White%20Onyx_cropped-ziByv57vRIftCVPsAYbzPqM5jjXl2Z.jpg", origin: "Imported selection", finish: "Polished" },
  { slug: "honey-onyx", name: "Honey Onyx", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Honey%20Onyx_cropped-cEZwZUI7ZmlNIDj3xXSYGV6AeWA9Xr.jpg", origin: "Imported selection", finish: "Polished" },
  { slug: "champagne-onyx", name: "Champagne Onyx", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Champagne%20Onyx_cropped-nxQxVcU7OsAdYHnFZNbxaeflarmLvl.jpg", origin: "Imported selection", finish: "Polished" },
  { slug: "emerald-green-onyx", name: "Emerald Green Onyx", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emerald%20Green_cropped-DDCjYQip0T2AYIIiRG5lcwWDT44Nib.jpg", origin: "Imported selection", finish: "Polished" },
  { slug: "copper-dune-onyx", name: "Copper Dune Onyx", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copper%20Dune%20Onyx_cropped-5k8jUv6cvWUxUxgGhopN88vgSOQaP0.jpg", origin: "Imported selection", finish: "Polished" },
  { slug: "fire-onyx", name: "Fire Onyx", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fire%20Onyx_cropped-uCOUhxYA8JpnnoJcMFLIrceR3M6WKH.jpg", origin: "Imported selection", finish: "Polished" },
  { slug: "sunrise-onyx", name: "Sunrise Onyx", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunrise%20Onyx_cropped-e7aH8DQeElLcP5aZ8V1Yzuu6O3ROXk.jpg", origin: "Imported selection", finish: "Polished" },
  { slug: "golden-ivory-onyx", name: "Golden Ivory Onyx", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Ivory%20Onyx_cropped-7CPumbL86Hin7DttuVrqR6JURozpLU.jpg", origin: "Imported selection", finish: "Polished" },
  { slug: "mango-onyx", name: "Mango Onyx", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mango%20Onyx_cropped-qoKkAEg0QWqsidbo9oUq4GxOrv102K.jpg", origin: "Imported selection", finish: "Polished" },
  { slug: "honey-crystal-onyx", name: "Honey Crystal Onyx", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Honey%20Crystal%20Onyx_cropped-F2v8mwfNLSBrO4BWtDFdAvjHR8EWMg.jpg", origin: "Imported selection", finish: "Polished" },
  { slug: "smoky-wave-onyx", name: "Smoky Wave Onyx", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smoky%20Wave%20Onyx_cropped-hSWqej3uhjH9se3Iku1F20zcOFAgvq.jpg", origin: "Imported selection", finish: "Polished" },
  { slug: "yellow-sapphire-onyx", name: "Yellow Sapphire Onyx", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yellow%20Saphire%20Onyx_cropped-H5twSC8RBeoyaBFpNqfmfrKHe9QmMz.jpg", origin: "Imported selection", finish: "Polished" },
].map((product) => ({
  ...product,
  shortDescription: "A luminous natural surface with depth, translucency, and a distinctive mineral rhythm.",
  description: "Selected for its layered movement and soft light response, this onyx brings a refined, architectural presence to interiors.",
  bestFor: ["Feature walls", "Backlit panels", "Vanities"],
  landscapeImage: onyxLandscapeImages[product.slug],
  originalImage: onyxWarehouseImages[product.slug],
  seoTitle: `${product.name} | Chandak Marble`,
  seoDescription: `Explore ${product.name} with a luminous layered surface for refined interiors.`,
  keywords: ["onyx marble", product.name.toLowerCase()],
}))

export function getOnyxProductBySlug(slug: string) {
  return onyxProducts.find((product) => product.slug === slug)
}

export function getAllOnyxProductSlugs() {
  return onyxProducts.map((product) => product.slug)
}
