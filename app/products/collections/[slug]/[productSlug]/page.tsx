import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { BeigeProductDetail } from "@/components/beige-product-detail"
import { GorgeousGreyProductDetail } from "@/components/gorgeous-grey-product-detail"
import { WowWhiteProductDetail } from "@/components/wow-white-product-detail"
import { getAllBeigeProductSlugs, getBeigeProductBySlug } from "@/lib/beige-products-data"
import { getAllGreyProductSlugs, getGreyProductBySlug } from "@/lib/gorgeous-grey-products-data"
import { getAllWhiteProductSlugs, getWhiteProductBySlug } from "@/lib/wow-white-products-data"

interface Props {
  params: Promise<{
    slug: string
    productSlug: string
  }>
}

export function generateStaticParams() {
  return [
    ...getAllBeigeProductSlugs().map((productSlug) => ({ slug: "beautiful-beige", productSlug })),
    ...getAllGreyProductSlugs().map((productSlug) => ({ slug: "gorgeous-grey", productSlug })),
    ...getAllWhiteProductSlugs().map((productSlug) => ({ slug: "wow-white", productSlug })),
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, productSlug } = await params
  const product = slug === "gorgeous-grey" ? getGreyProductBySlug(productSlug) : slug === "wow-white" ? getWhiteProductBySlug(productSlug) : getBeigeProductBySlug(productSlug)

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

export default async function ProductPage({ params }: Props) {
  const { slug, productSlug } = await params

  if (slug !== "beautiful-beige" && slug !== "gorgeous-grey" && slug !== "wow-white") {
    notFound()
  }

  const beigeProduct = slug === "beautiful-beige" ? getBeigeProductBySlug(productSlug) : null
  const greyProduct = slug === "gorgeous-grey" ? getGreyProductBySlug(productSlug) : null
  const whiteProduct = slug === "wow-white" ? getWhiteProductBySlug(productSlug) : null

  if (!beigeProduct && !greyProduct && !whiteProduct) {
    notFound()
  }

  return (
    <>
      <Header />
      {beigeProduct ? <BeigeProductDetail product={beigeProduct} /> : greyProduct ? <GorgeousGreyProductDetail product={greyProduct} /> : <WowWhiteProductDetail product={whiteProduct!} />}
      <Footer />
      <FloatingButtons />
    </>
  )
}
