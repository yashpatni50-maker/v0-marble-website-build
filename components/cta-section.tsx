import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { MessageCircle, Phone, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[oklch(0.55_0.12_70)] relative overflow-hidden">
      {/* Background Pattern with animation */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 animate-float" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Glow effect backdrop */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}`}>
            Looking for Premium Marble?
          </h2>
          <p className={`text-white/90 text-lg leading-relaxed mb-10 transition-all duration-700 ${isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0 translate-y-6'}`}>
            Contact us today for the latest marble designs, availability, pricing, and expert guidance. 
            Our team is ready to help you find the perfect marble for your project.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0 translate-y-6'}`}>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-[oklch(0.55_0.12_70)] hover:bg-white/90 px-8 py-6 text-lg font-medium shadow-lg luxury-button-hover"
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
              className="border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg font-medium luxury-button-hover"
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
              className="border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg font-medium luxury-button-hover"
            >
              <Link href="https://blobs.vusercontent.net/blob/Chandak%20Marble%20Colours%20of%20Your%20Imagination-SMMix9Zr6lGqmaC0vHA5zOluJ1Bw26.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 mr-2" />
                Download Brochure
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className={`mt-12 pt-12 border-t border-white/20 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
              <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: isVisible ? '300ms' : undefined }}>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse-gold" />
                  Main Showroom
                </h3>
                <p className="text-white/70 text-sm">
                  Makrana Road, Madanganj,<br />
                  Kali Dungri, Kishangarh,<br />
                  Rajasthan 305801
                </p>
                <Link href="tel:+919950085300" className="text-white font-medium text-sm mt-2 inline-block hover:underline luxury-text-hover">
                  +91 99500 85300
                </Link>
              </div>
              <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'}`} style={{ animationDelay: isVisible ? '400ms' : undefined }}>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse-gold" />
                  Processing Unit
                </h3>
                <p className="text-white/70 text-sm">
                  Harmara Road,<br />
                  RICCO Industrial Area,<br />
                  Kishangarh, Rajasthan 305801
                </p>
                <Link href="tel:+919829082911" className="text-white font-medium text-sm mt-2 inline-block hover:underline luxury-text-hover">
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
