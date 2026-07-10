import { MessageCircle, Phone, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Props {
  collectionName: string
}

export function CollectionCTA({ collectionName }: Props) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Interested in {collectionName}?
        </h2>
        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
          Get in touch with our marble specialists today to explore these premium varieties and find the perfect marble for your project.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-[oklch(0.55_0.12_70)] hover:bg-[oklch(0.45_0.12_70)] text-white px-8 py-6 text-lg font-medium shadow-lg luxury-button-hover group"
          >
            <Link href="https://wa.me/919950085300?text=Hello%2C%20I%20am%20interested%20in%20" target="_blank">
              <MessageCircle className="h-5 w-5 mr-2" />
              <span>Message on WhatsApp</span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-6 text-lg font-medium group"
          >
            <Link href="tel:+919950085300">
              <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              <span>Call Now</span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-6 text-lg font-medium group"
          >
            <Link href="https://blobs.vusercontent.net/blob/Chandak%20Marble%20Colours%20of%20Your%20Imagination-SMMix9Zr6lGqmaC0vHA5zOluJ1Bw26.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="h-5 w-5 mr-2 group-hover:-translate-y-1 transition-transform" />
              <span>Download Brochure</span>
            </Link>
          </Button>
        </div>

        {/* Trust statement */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <p className="text-white/70 mb-4">Trusted by architects, designers, and homeowners across India</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
            <div>
              <div className="text-2xl font-bold text-[oklch(0.80_0.12_70)]">40+</div>
              <div>Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[oklch(0.80_0.12_70)]">5000+</div>
              <div>Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[oklch(0.80_0.12_70)]">20+</div>
              <div>States Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
