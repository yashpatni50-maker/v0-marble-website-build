import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { CollectionHero } from "@/components/collection-hero"
import { BeigeProductGrid } from "@/components/beige-product-grid"
import { EmptyCollectionProducts } from "@/components/empty-collection-products"
import { CollectionCTA } from "@/components/collection-cta"
import { getCollectionBySlug, getAllCollectionSlugs } from "@/lib/marble-collections-data"
import { beigeProducts } from "@/lib/beige-products-data"

interface Props {
  params: Promise<{ slug: string }>
}

function resolveSlug(slug: string) {
  return slug === "onyx" ? "onyx-marble" : slug
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const collection = getCollectionBySlug(resolveSlug(slug))

  if (!collection) {
    return { title: "Collection Not Found" }
  }

  return {
    title: `${collection.name} Marble Collection | Chandak Marble`,
    description: collection.description,
    keywords: [collection.name, collection.color, "marble", "imported marble", "luxury marble"],
  }
}

export function generateStaticParams() {
  return [...getAllCollectionSlugs(), "onyx"].map((slug) => ({ slug }))
}

export default async function CollectionAliasPage({ params }: Props) {
  const { slug } = await params
  const collection = getCollectionBySlug(resolveSlug(slug))

  if (!collection) notFound()

  return (
    <main className="min-h-screen">
      <Header />
      <CollectionHero collection={collection} />
      {collection.id === "beautiful-beige" ? (
        <BeigeProductGrid products={beigeProducts} />
      ) : (
        <EmptyCollectionProducts collectionName={collection.name} />
      )}
      <CollectionCTA collectionName={collection.name} />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
