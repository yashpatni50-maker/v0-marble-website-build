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

const lotImages = {
  "french-kiss": `${imageBase}French%20Kiss-h0AsXrfZeWIaavhEw2Heil3e3rHFOn.jpg`,
  "albino-gold": `${imageBase}Albino%20Gold-2msjepWFFle4sYGkVMZunhapaxgRJ9.jpg`,
  "rosso-alicante": `${imageBase}Rosso%20Alicante-M1mzcOO3kAODYrBi50NGWrmUzvFcx5.jpg`,
  "golden-river": `${imageBase}Golden%20River-DYKUVMZUbJ8tGY5nmmLRfTZ3fEibaQ.jpg`,
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
  "cosmopolitan-grey": `${imageBase}Cosmopolitan%20Grey-gmUBl1dw8JRvN3Q0L9k8ei0JCUYqz8.jpg`,
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
