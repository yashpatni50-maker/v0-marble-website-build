import Link from "next/link"
import { MessageCircle, Phone, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-[oklch(0.55_0.12_70)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Looking for Premium Marble?
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-10">
            Contact us today for the latest marble designs, availability, pricing, and expert guidance. 
            Our team is ready to help you find the perfect marble for your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-[oklch(0.55_0.12_70)] hover:bg-white/90 px-8 py-6 text-lg font-medium shadow-lg"
            >
              <Link href="https://wa.me/919950085300?text=Hello%2C%20I%20am%20interested%20in%20imported%20marble.%20Please%20share%20catalogue%20and%20pricing." target="_blank">
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat on WhatsApp
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg font-medium"
            >
              <Link href="tel:+919950085300">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg font-medium"
            >
              <Link href="https://blobs.vusercontent.net/blob/Chandak%20Marble%20Colours%20of%20Your%20Imagination-SMMix9Zr6lGqmaC0vHA5zOluJ1Bw26.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 mr-2" />
                Download Brochure
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
              <div>
                <h3 className="text-white font-semibold mb-2">Main Showroom</h3>
                <p className="text-white/70 text-sm">
                  Makrana Road, Madanganj,<br />
                  Kali Dungri, Kishangarh,<br />
                  Rajasthan 305801
                </p>
                <Link href="tel:+919950085300" className="text-white font-medium text-sm mt-2 inline-block hover:underline">
                  +91 99500 85300
                </Link>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Processing Unit</h3>
                <p className="text-white/70 text-sm">
                  Harmara Road,<br />
                  RICCO Industrial Area,<br />
                  Kishangarh, Rajasthan 305801
                </p>
                <Link href="tel:+919829082911" className="text-white font-medium text-sm mt-2 inline-block hover:underline">
                  +91 98290 82911
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
