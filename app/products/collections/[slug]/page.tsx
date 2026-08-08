import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { CollectionHero } from "@/components/collection-hero"
import { BeigeProductGrid } from "@/components/beige-product-grid"
import { GorgeousGreyProductGrid } from "@/components/gorgeous-grey-product-grid"
import { EmptyCollectionProducts } from "@/components/empty-collection-products"
import { CollectionCTA } from "@/components/collection-cta"
import { getCollectionBySlug, getAllCollectionSlugs } from "@/lib/marble-collections-data"
import { beigeProducts } from "@/lib/beige-products-data"
import { greyProducts } from "@/lib/gorgeous-grey-products-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)

  if (!collection) {
    return {
      title: "Collection Not Found",
      description: "The marble collection you're looking for doesn't exist.",
    }
  }

  return {
    title: `${collection.name} Marble Collection | Chandak Marble`,
    description: collection.description,
    keywords: [collection.name, collection.color, "marble", "imported marble", "luxury marble"],
  }
}

export function generateStaticParams() {
  return getAllCollectionSlugs().map((slug) => ({
    slug,
  }))
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)

  if (!collection) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <CollectionHero collection={collection} />
      {collection.id === "beautiful-beige" ? (
        <BeigeProductGrid products={beigeProducts} />
      ) : collection.id === "gorgeous-grey" ? (
        <GorgeousGreyProductGrid products={greyProducts} />
      ) : (
        <EmptyCollectionProducts collectionName={collection.name} />
      )}
      <CollectionCTA collectionName={collection.name} />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
