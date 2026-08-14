export interface MarbleProductImageSet {
  slug: string
  name: string
  squareImage: string
  textureImage: string
  originalImage: string
}

export interface MarbleProductManifest {
  collectionSlug: "gorgeous-grey" | "bold-black" | "aesthetic-brown" | "wow-white" | "onyx-marble"
  products: MarbleProductImageSet[]
}

// Add only real uploaded product images here. Empty collections intentionally render no cards.
export const marbleProductManifests: MarbleProductManifest[] = [
  { collectionSlug: "gorgeous-grey", products: [] },
  { collectionSlug: "bold-black", products: [] },
  { collectionSlug: "aesthetic-brown", products: [] },
  { collectionSlug: "wow-white", products: [] },
  { collectionSlug: "onyx-marble", products: [] },
]
