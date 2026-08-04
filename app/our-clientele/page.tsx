import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { ClienteleSection } from "@/components/clientele-section"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: 'Our Clientele | Trusted by Industry Leaders | Chandak Marble',
  description: 'Explore our prestigious portfolio of projects. Trusted by architects, interior designers, builders, and developers across India for premium marble solutions.',
}

export default function OurClientelePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-[oklch(0.18_0.02_60)] to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Our Clientele
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Trusted by India's leading architects, interior designers, builders, and developers. Explore our prestigious portfolio of luxury projects that showcase the timeless beauty of premium imported marble.
            </p>
          </div>
        </div>
      </section>
      <ClienteleSection />
      <CTASection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
