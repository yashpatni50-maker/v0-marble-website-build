import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { ProductsHero } from "@/components/products-hero"
import { MarbleCategories } from "@/components/marble-categories"
import { ProductsCTA } from "@/components/products-cta"

export const metadata = {
  title: 'Our Marble Collections | Chandak Marble - Premium Italian & Imported Marble',
  description: 'Explore our extensive collection of premium imported marble - Italian marble, Turkish marble, Onyx, Granite, and more. Available in various finishes and sizes.',
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductsHero />
      <MarbleCategories />
      <ProductsCTA />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
