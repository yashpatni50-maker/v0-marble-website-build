import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { ContactForm } from "@/components/contact-form"
import { LocationMap } from "@/components/location-map"

export const metadata = {
  title: 'Contact Chandak Marble | Imported Marble Showroom in Kishangarh | +91 9950085300',
  description: 'Contact Chandak Marble for premium imported marble, Italian marble flooring, and architectural stone in Kishangarh, Rajasthan. Showroom: +91 9950085300. Processing Unit: +91 98290 82911. Architects, builders, designers welcome.',
  openGraph: {
    title: 'Contact Chandak Marble - Imported Marble & Architectural Stone',
    description: 'Get in touch with our marble experts for imported marble flooring, cladding, and custom stone solutions. Available in Kishangarh showroom.',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <LocationMap />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
