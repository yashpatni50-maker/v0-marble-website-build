import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AboutHero } from "@/components/about-hero"
import { OurStory } from "@/components/our-story"
import { OurValues } from "@/components/our-values"
import { MilestoneTimeline } from "@/components/milestone-timeline"
import { TeamSection } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: 'About Chandak Marble | Premium Italian Marble Importer Since 1981 | Kishangarh',
  description: 'Discover Chandak Marble\'s 40+ year heritage as India\'s leading importer of luxury Italian marble and architectural stone. Direct quarry sourcing, quality processing, trusted by architects for premium marble flooring, villas, hotels.',
  openGraph: {
    title: 'Chandak Marble - India\'s Premium Italian Marble Supplier',
    description: 'Since 1981, we\'ve been importing and supplying the world\'s finest marble for luxury homes, hotels, and architectural projects across India.',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <OurStory />
      <OurValues />
      <MilestoneTimeline />
      <TeamSection />
      <CTASection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
