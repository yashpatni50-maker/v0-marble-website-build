import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MarbleCollections } from "@/components/marble-collections"
import { WhyChooseUs } from "@/components/why-choose-us"
import { AboutSection } from "@/components/about-section"
import { ProcessSection } from "@/components/process-section"
import { ClienteleSection } from "@/components/clientele-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MarbleCollections />
      <WhyChooseUs />
      <AboutSection />
      <ProcessSection />
      <ClienteleSection />
      <CTASection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
