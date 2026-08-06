import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: 'Why Choose Chandak Marble | Direct Italian Marble Importer | 40+ Years Excellence',
  description: 'Discover why Chandak Marble is India\'s trusted importer of premium Italian marble, architectural stone, and luxury flooring. Direct quarry sourcing, quality control, pan-India delivery, expert guidance for architects and builders.',
  openGraph: {
    title: 'Why Chandak Marble - Direct Importer of Premium Italian Marble',
    description: 'Uncompromising quality, direct factory pricing, and 40+ years of expertise in imported marble flooring for luxury homes and commercial projects.',
  },
}

export default function WhyChandakPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Cinematic hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-why-chandak.png"
            alt="Premium Statuario marble veining — the quality Chandak Marble is known for"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-[#0a0a0a]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full pb-20 pt-44 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-overline text-[var(--gold)] mb-5">40+ Years of Excellence</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-balance leading-[1.05] mb-6 max-w-3xl">
              Why Choose{" "}
              <span className="italic font-normal text-[var(--gold)]">Chandak Marble?</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mb-8">
              With over four decades of expertise in premium imported marble, we combine tradition with
              innovation to deliver the finest natural stone for your dream spaces.
            </p>
            <div className="h-px w-24 bg-[var(--gold)]/60" />
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
