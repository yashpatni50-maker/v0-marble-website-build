import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { ProductsHero } from "@/components/products-hero"
import { MarbleCategories } from "@/components/marble-categories"
import { ProductsCTA } from "@/components/products-cta"

export const metadata = {
  title: 'Imported Marble Collections | Italian & Turkish Marble Flooring | Chandak Marble',
  description: 'Browse Chandak Marble\'s curated collections of premium imported marble flooring, architectural stone, and natural stone. Italian marble, Turkish marble, Onyx, and exclusive varieties for luxury homes, villas, and commercial spaces.',
  openGraph: {
    title: 'Premium Imported Marble Collections | Chandak Marble',
    description: 'Explore hand-selected marble collections from Italy, Turkey, Greece, and Portugal. Perfect for flooring, wall cladding, and architectural installations.',
  },
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
