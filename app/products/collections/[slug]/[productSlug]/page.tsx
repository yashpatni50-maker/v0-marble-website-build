import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { BeigeProductDetail } from "@/components/beige-product-detail"
import { getAllBeigeProductSlugs, getBeigeProductBySlug } from "@/lib/beige-products-data"

interface Props {
  params: Promise<{
    slug: string
    productSlug: string
  }>
}

export function generateStaticParams() {
  return getAllBeigeProductSlugs().map((productSlug) => ({
    slug: "beautiful-beige",
    productSlug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productSlug } = await params
  const product = getBeigeProductBySlug(productSlug)

  if (!product) {
    return {
      title: "Marble Product Not Found | Chandak Marble",
    }
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    keywords: product.keywords,
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      images: [{ url: product.landscapeImage, alt: `${product.name} marble slab` }],
    },
  }
}

export default async function BeigeProductPage({ params }: Props) {
  const { slug, productSlug } = await params

  if (slug !== "beautiful-beige") {
    notFound()
  }

  const product = getBeigeProductBySlug(productSlug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <BeigeProductDetail product={product} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
