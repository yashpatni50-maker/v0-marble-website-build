import Image from "next/image"
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

      {/* Cinematic hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-clientele.png"
            alt="Luxury hotel lobby with premium marble — Chandak Marble clientele"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full pb-20 pt-44 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-overline text-[var(--gold)] mb-5">Trusted By The Best</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-balance leading-[1.05] mb-6 max-w-3xl">
              Our{" "}
              <span className="italic font-normal text-[var(--gold)]">Clientele</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mb-8">
              Trusted by India&apos;s leading architects, interior designers, builders, and developers.
              Explore our prestigious portfolio of luxury projects that showcase the timeless beauty of
              premium imported marble.
            </p>
            <div className="h-px w-24 bg-[var(--gold)]/60" />
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
