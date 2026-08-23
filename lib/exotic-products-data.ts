export interface ExoticProduct {
  slug: string
  name: string
  collection: "exotic"
  image: string
  landscapeImage: string
  originalImage: string
  warehouseImage: string
  origin: string
  finish: string
  bestFor: string[]
  shortDescription: string
  description: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
}

const imageBase = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/"

const productImages = {
  "french-kiss": `${imageBase}French%20Kiss_cropped-BiWnS7VwxBbI3gWc2svtEShaeehWDV.jpg`,
  "albino-gold": `${imageBase}Albino%20Gold_cropped-qSXKxY6lQcMmZxUjjaBh2eTPSVNkh4.jpg`,
  "rosso-alicante": `${imageBase}Rosso%20Alicante_cropped-nuYz9ibrRHX17vjyYQxqAT1BlIAzdD.jpg`,
  "golden-river": `${imageBase}Golden%20River_cropped-5EOb4ge69NcCrC7HeOOJmuCYMvB0mD.jpg`,
  "foir-di-pesco": `${imageBase}Foir%20Di%20Pesco_cropped-4YeNNdGgqlU3bAoxiCuWo4d4W1nYqt.jpg`,
  "opera-green": `${imageBase}Opera%20Green_cropped-yHf9e5E2oqYJdrVVT4aq0mOFCcXGww.jpg`,
  "blue-wave": `${imageBase}Blue%20Wave_cropped-tmz5rgNCsYMSqevLoH2r0bc6AIDGxw.jpg`,
  "golden-valencia": `${imageBase}Golden%20Valencia_cropped-qIZQtnKLhk3ivIOmdIgKlHRZRMt9vW.jpg`,
  "turtle-green": `${imageBase}Turtule%20Green_cropped-s9WyGP5zpUckmTimPIwP4SIzcQEltv.jpg`,
  "blue-river": `${imageBase}Blue%20River_cropped-xUFkqMo5CXrpvH2DnaFbzQIjoL1VUj.jpg`,
  "brazillian-blue": `${imageBase}Brazillian%20Blue_cropped-sqCsDnRXIAvhuEGDo2NdZ4gnAR7fq2.jpg`,
  "bianco-nero": `${imageBase}Bianco%20Nero_cropped-3Z52efHM80CAcRgF2OWvwOrVFq4trq.jpg`,
  flamingo: `${imageBase}Flamingo_cropped-mDUhNDKUINhZaIErqesYMAsejt4v76.jpg`,
  morellato: `${imageBase}Morellato_cropped-vAKdtNiwUD9Knllu5grlUDynXE6qZZ.jpg`,
  "light-brown-emperador": `${imageBase}Light%20Brown%20Emperador_cropped-SQh0gUS9C4KoKHM1oDzrAOBiZ1mHIq.jpg`,
  "blue-roma": `${imageBase}Blue%20Roma_cropped-OjBGQXbSyHm4W3Fvg9G1dsOVj8PNcs.jpg`,
  "brescia-aurora": `${imageBase}Brescia%20Aurora_cropped-WjWZOZgPk6RGNwKoT8d6bVrYdKowDF.jpg`,
  "silver-lilac": `${imageBase}Silver%20Lilac_cropped-3IuTHs2JnfENrjOuEePx8CiSjgZMVJ.jpg`,
} as const

const warehouseImages = {
  "french-kiss": `${imageBase}French%20Kiss-h0AsXrfZeWIaavhEw2Heil3e3rHFOn.jpg`,
  "albino-gold": `${imageBase}Albino%20Gold-2msjepWFFle4sYGkVMZunhapaxgRJ9.jpg`,
  "rosso-alicante": `${imageBase}Rosso%20Alicante-M1mzcOO3kAODYrBi50NGWrmUzvFcx5.jpg`,
  "golden-river": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20River-lmlPR89GAvQkKtG5BPSZhyy7Ix7I59.jpg",
  "foir-di-pesco": `${imageBase}Foir%20Di%20Pesco-1kVBu80CIcVyeMvqh0sqBrX46Bid3P.jpg`,
  "opera-green": `${imageBase}Opera%20Green-CH2MF4dosRLRbvHfm2SNw4NQqh5yRE.jpg`,
  "blue-wave": `${imageBase}Blue%20Wave-LATOS3jRRiOPslYLMTCJiAg6gB7fdN.jpg`,
  "golden-valencia": `${imageBase}Golden%20Valencia-XhTuJXBX32hd0QK1BTzg4Wf4zOkW6b.jpg`,
  "turtle-green": `${imageBase}Turtule%20Green-hdXoYfH9IRuiutb19AC22gZGhi5tV6.jpg`,
  "blue-river": `${imageBase}Blue%20River-u0FDAl2EVez5eUPFxRuW9O4wjMSNKr.jpg`,
  "brazillian-blue": `${imageBase}Brazillian%20Blue-hMQqfVeAcAHQK7avdW19xHC36RrrUl.jpg`,
  "bianco-nero": `${imageBase}Bianco%20Nero-QfCsgJlv22qK8okvU0mP9G3ComMAFI.jpg`,
  flamingo: `${imageBase}Flamingo-6WxCRuJYLCPxsVNEJqUJT2Rew69uMZ.jpg`,
  morellato: `${imageBase}Morellato-XCfqwmTQ0PN0zqeyGqWv65HIVTyngs.jpg`,
  "light-brown-emperador": `${imageBase}Light%20Brown%20Emperador-1PO5rIz5UMlYfiuCUZu84xzBCyHCXi.jpg`,
  "blue-roma": `${imageBase}Blue%20Roma-c4cJ7t6fCpBrTqixAb2K0wpcRFSgTV.jpg`,
  "brescia-aurora": `${imageBase}Brescia%20Aurora-FpbjuvhraU5Yhrm0QXgXnU8Xc5hkkC.jpg`,
  "silver-lilac": `${imageBase}Silver%20Lilac-kvNYLHcFALDM3lawbcvKyMO3ucntyp.jpg`,
  "ocean-green": `${imageBase}Ocean%20Green-3Ka8t4sFwcKw2JIE1BjlV5v8R7a5Jz.jpg`,
} as const

const products: ExoticProduct[] = Object.entries(productImages).map(([slug, image]) => {
  const name = slug.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ")
  return {
    slug,
    name,
    collection: "exotic",
    image,
    landscapeImage: image,
    originalImage: image,
    warehouseImage: warehouseImages[slug as keyof typeof warehouseImages] || image,
    origin: "Exotic Collection",
    finish: "Polished",
    bestFor: ["Feature walls", "Statement interiors", "Luxury surfaces"],
    shortDescription: `A distinctive ${name} marble with expressive natural movement.`,
    description: `Hand-selected ${name} marble for statement interiors, feature walls, and refined architectural surfaces.`,
    seoTitle: `${name} Marble | Chandak Marble`,
    seoDescription: `${name} marble for distinctive luxury interiors and architectural surfaces.`,
    keywords: [name, "exotic marble", "luxury marble"],
  }
})

export const exoticProducts = products
