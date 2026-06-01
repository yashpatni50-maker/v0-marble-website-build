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
  title: 'About Us | Chandak Marble - Legacy of Excellence Since 1981',
  description: 'Learn about Chandak Marble\'s 40+ year journey as India\'s leading importer of premium Italian marble. Family-owned, quality-driven, customer-focused.',
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
