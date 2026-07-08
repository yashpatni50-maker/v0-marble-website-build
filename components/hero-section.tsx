import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cinematic_luxury_website_hero-uugUZVoQFrmlEiBCGGMP4ayvBHy3yu.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
            <span className="text-[oklch(0.80_0.12_70)] text-sm font-medium">Since 1981</span>
            <span className="text-white/60">|</span>
            <span className="text-white/80 text-sm">40+ Years of Excellence</span>
          </div>

          {/* Heading - Staggered Lines */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <span className="text-balance block animate-fade-in-up animation-delay-100">Imported Italian Marble</span>
            <br />
            <span className="text-[oklch(0.80_0.12_70)] block animate-fade-in-up animation-delay-200">in Kishangarh</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty animate-fade-in-up animation-delay-300">
            Premium imported natural marble for luxury homes, villas, hotels, and commercial projects. 
            Trusted by architects, builders, and homeowners across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-[oklch(0.55_0.12_70)] hover:bg-[oklch(0.45_0.12_70)] text-white px-8 py-6 text-lg font-medium shadow-lg luxury-button-hover animate-fade-in-up animation-delay-400"
            >
              <Link href="https://wa.me/919950085300?text=Hello%2C%20I%20am%20interested%20in%20imported%20marble.%20Please%20share%20catalogue%20and%20pricing." target="_blank">
                <MessageCircle className="h-5 w-5 mr-2" />
                Get Price on WhatsApp
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-6 text-lg font-medium luxury-button-hover animate-fade-in-up animation-delay-500"
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
              className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-6 text-lg font-medium luxury-button-hover animate-fade-in-up animation-delay-600"
            >
              <Link href="https://blobs.vusercontent.net/blob/Chandak%20Marble%20Colours%20of%20Your%20Imagination-SMMix9Zr6lGqmaC0vHA5zOluJ1Bw26.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 mr-2" />
                Download Brochure
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "40+", label: "Years Experience" },
              { value: "5000+", label: "Projects Delivered" },
              { value: "20+", label: "States Served" },
              { value: "100%", label: "Quality Assured" },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[oklch(0.80_0.12_70)] animate-pulse-gold">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
