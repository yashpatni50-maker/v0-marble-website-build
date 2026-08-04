import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { ContactForm } from "@/components/contact-form"
import { LocationMap } from "@/components/location-map"

export const metadata = {
  title: 'Contact Us | Chandak Marble - Kishangarh, Rajasthan',
  description: 'Visit Chandak Marble International in Kishangarh, Rajasthan. Main Showroom: +91 95008 53000, Processing Unit: +91 98290 82911. Premium imported marble & exotic stones.',
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
