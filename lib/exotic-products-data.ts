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

const imageBase = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/"

const productImages = {
  "french-kiss": `${imageBase}French%20Kiss_cropped-BiWnS7VwxBbI3gWc2svtEShaeehWDV.jpg`,
  "albino-gold": `${imageBase}Albino%20Gold_cropped-lHaba5KFivPQbkG1pqYiENCQbEE8oQ.jpg`,
  "rosso-alicante": `${imageBase}Rosso%20Alicante_cropped-3NELsL2EV8BAb83NL2O3ewAsUZWiPc.jpg`,
  "golden-river": `${imageBase}Golden%20River_cropped-5EOb4ge69NcCrC7HeOOJmuCYMvB0mD.jpg`,
  "foir-di-pesco": `${imageBase}Foir%20Di%20Pesco_cropped-yTjCPnLt9SWVkoRUmgu3UuRjy0XtXi.jpg`,
  "opera-green": `${imageBase}Opera%20Green_cropped-5htxPqUIyYmdvaTyTi50GwHxVIAzKz.jpg`,
  "blue-wave": `${imageBase}Blue%20Wave_cropped-0wKXpTEO7HDwC8XzpkHFFGnba9Qtuh.jpg`,
  "golden-valencia": `${imageBase}Golden%20Valencia_cropped-gbxghCxazZQdRoQFDVV2EAswtGyH65.jpg`,
  "turtle-green": `${imageBase}Turtule%20Green_cropped-4eDP5y5aqXVsEv1rhDLsNlpr6aZRhj.jpg`,
  "blue-river": `${imageBase}Blue%20River_cropped-xJ7WImsfpSucvPonCgfvng5ODKjeQh.jpg`,
  "brazillian-blue": `${imageBase}Brazillian%20Blue_cropped-ori24ILl522pC21t8WXzAga4W4ReRA.jpg`,
  "bianco-nero": `${imageBase}Bianco%20Nero_cropped-zAm8JgXf4PiaREVRcDhGm0GSU2yxAk.jpg`,
  flamingo: `${imageBase}Flamingo_cropped-SCUEI2vk78wdXeFWkXsBUwbXZOiGlu.jpg`,
  morellato: `${imageBase}Morellato_cropped-sSKzBG3XXF6pLMPS0FD4bukKi0o3W1.jpg`,
  "light-brown-emperador": `${imageBase}Light%20Brown%20Emperador_cropped-SQh0gUS9C4KoKHM1oDzrAOBiZ1mHIq.jpg`,
  "blue-roma": `${imageBase}Blue%20Roma_cropped-OjBGQXbSyHm4W3Fvg9G1dsOVj8PNcs.jpg`,
  "brescia-aurora": `${imageBase}Brescia%20Aurora_cropped-WjWZOZgPk6RGNwKoT8d6bVrYdKowDF.jpg`,
  "silver-lilac": `${imageBase}Silver%20Lilac_cropped-3IuTHs2JnfENrjOuEePx8CiSjgZMVJ.jpg`,
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
