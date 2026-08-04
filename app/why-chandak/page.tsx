import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: 'Why Chandak Marble | 40+ Years of Premium Quality',
  description: 'Discover why Chandak Marble is India\'s trusted choice for premium imported marble. Direct factory pricing, global sourcing, and expert guidance.',
}

export default function WhyChandakPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-[oklch(0.18_0.02_60)] to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Why Choose Chandak Marble?
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              With over four decades of expertise in premium imported marble, we combine tradition with innovation to deliver the finest natural stone for your dream spaces. Discover what makes us the preferred choice of architects, builders, and homeowners across India.
            </p>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <CTASection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
