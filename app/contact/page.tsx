import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { ContactForm } from "@/components/contact-form"
import { LocationMap } from "@/components/location-map"

export const metadata = {
  title: 'Contact Us | Chandak Marble - Visit Our Showroom in Kishangarh',
  description: 'Get in touch with Chandak Marble. Visit our showroom in Kishangarh, Rajasthan or contact us via phone, WhatsApp, or email for premium marble inquiries.',
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
