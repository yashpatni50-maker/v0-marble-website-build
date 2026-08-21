import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { BeigeProductDetail } from "@/components/beige-product-detail"
import { GorgeousGreyProductDetail } from "@/components/gorgeous-grey-product-detail"
import { WowWhiteProductDetail } from "@/components/wow-white-product-detail"
import { BoldBlackProductDetail } from "@/components/bold-black-product-detail"
import { AestheticBrownProductDetail } from "@/components/aesthetic-brown-product-detail"
import { OnyxProductDetail } from "@/components/onyx-product-detail"
import { ExoticProductDetail } from "@/components/exotic-product-detail"
import { getAllOnyxProductSlugs, getOnyxProductBySlug } from "@/lib/onyx-products-data"
import { exoticProducts } from "@/lib/exotic-products-data"
import { getAllBoldBlackProductSlugs, getBoldBlackProductBySlug } from "@/lib/bold-black-products-data"
import { getAllAestheticBrownProductSlugs, getAestheticBrownProductBySlug } from "@/lib/aesthetic-brown-products-data"
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
    ...getAllBoldBlackProductSlugs().map((productSlug) => ({ slug: "bold-black", productSlug })),
    ...getAllAestheticBrownProductSlugs().map((productSlug) => ({ slug: "aesthetic-brown", productSlug })),
    ...getAllOnyxProductSlugs().map((productSlug) => ({ slug: "onyx-marble", productSlug })),
    ...exoticProducts.map(({ slug: productSlug }) => ({ slug: "exotic", productSlug })),
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, productSlug } = await params
  const product = slug === "gorgeous-grey" ? getGreyProductBySlug(productSlug) : slug === "wow-white" ? getWhiteProductBySlug(productSlug) : slug === "bold-black" ? getBoldBlackProductBySlug(productSlug) : slug === "aesthetic-brown" ? getAestheticBrownProductBySlug(productSlug) : slug === "onyx-marble" ? getOnyxProductBySlug(productSlug) : slug === "exotic" ? exoticProducts.find((item) => item.slug === productSlug) : getBeigeProductBySlug(productSlug)

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

  if (slug !== "beautiful-beige" && slug !== "gorgeous-grey" && slug !== "wow-white" && slug !== "bold-black" && slug !== "aesthetic-brown" && slug !== "onyx-marble" && slug !== "exotic") {
    notFound()
  }

  const beigeProduct = slug === "beautiful-beige" ? getBeigeProductBySlug(productSlug) : null
  const greyProduct = slug === "gorgeous-grey" ? getGreyProductBySlug(productSlug) : null
  const whiteProduct = slug === "wow-white" ? getWhiteProductBySlug(productSlug) : null
  const blackProduct = slug === "bold-black" ? getBoldBlackProductBySlug(productSlug) : null
  const brownProduct = slug === "aesthetic-brown" ? getAestheticBrownProductBySlug(productSlug) : null
  const onyxProduct = slug === "onyx-marble" ? getOnyxProductBySlug(productSlug) : null
  const exoticProduct = slug === "exotic" ? exoticProducts.find((item) => item.slug === productSlug) : null

  if (!beigeProduct && !greyProduct && !whiteProduct && !blackProduct && !brownProduct && !onyxProduct && !exoticProduct) {
    notFound()
  }

  return (
    <>
      <Header />
      {beigeProduct ? <BeigeProductDetail product={beigeProduct} /> : greyProduct ? <GorgeousGreyProductDetail product={greyProduct} /> : whiteProduct ? <WowWhiteProductDetail product={whiteProduct} /> : blackProduct ? <BoldBlackProductDetail product={blackProduct} /> : onyxProduct ? <OnyxProductDetail product={onyxProduct} /> : exoticProduct ? <ExoticProductDetail product={exoticProduct} /> : <AestheticBrownProductDetail product={brownProduct!} />}
      <Footer />
      <FloatingButtons />
    </>
  )
}
