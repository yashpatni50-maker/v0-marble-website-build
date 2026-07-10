import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Download } from "lucide-react"
import { HeroParallax } from "./hero-parallax"

export function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Video/Image with Parallax */}
      <HeroParallax />
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marble_brand_logo_carved_from_202607081634-n8raiXsOrZjVMZKaSFo74VpQZv5roA.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Animated accent light */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[oklch(0.80_0.12_70)] rounded-full blur-3xl opacity-5 animate-float" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 text-center w-full">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8 animate-fade-in-up hover:bg-white/15 transition-colors duration-300 cursor-pointer">
            <span className="text-[oklch(0.80_0.12_70)] text-xs sm:text-sm font-medium">Since 1981</span>
            <span className="text-white/60 hidden sm:inline">|</span>
            <span className="text-white/80 text-xs sm:text-sm">40+ Years Excellence</span>
          </div>

          {/* Heading - Staggered Lines */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
            <span className="text-balance block animate-fade-in-up animation-delay-100">Imported Italian Marble</span>
            <br className="hidden sm:block" />
            <span className="text-[oklch(0.80_0.12_70)] block animate-fade-in-up animation-delay-200">in Kishangarh</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-pretty animate-fade-in-up animation-delay-300">
            Premium imported natural marble for luxury homes, villas, hotels, and commercial projects. 
            Trusted by architects, builders, and homeowners across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto bg-[oklch(0.55_0.12_70)] hover:bg-[oklch(0.45_0.12_70)] text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-lg font-medium shadow-lg luxury-button-hover animate-fade-in-up animation-delay-400 relative overflow-hidden group"
            >
              <Link href="https://wa.me/919950085300?text=Hello%2C%20I%20am%20interested%20in%20imported%20marble.%20Please%20share%20catalogue%20and%20pricing." target="_blank">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-500" />
                <span className="flex items-center relative z-10">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Get Price on WhatsApp
                </span>
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-lg font-medium luxury-button-hover animate-fade-in-up animation-delay-500 group"
            >
              <Link href="tel:+919950085300">
                <span className="flex items-center">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Call Now
                </span>
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-lg font-medium luxury-button-hover animate-fade-in-up animation-delay-600 group"
            >
              <Link href="https://blobs.vusercontent.net/blob/Chandak%20Marble%20Colours%20of%20Your%20Imagination-SMMix9Zr6lGqmaC0vHA5zOluJ1Bw26.pdf" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center">
                  <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
                  Download Brochure
                </span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto">
            {[
              { value: "40+", label: "Years Experience" },
              { value: "5000+", label: "Projects Delivered" },
              { value: "20+", label: "States Served" },
              { value: "100%", label: "Quality Assured" },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[oklch(0.80_0.12_70)] animate-pulse-gold group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/70 mt-3">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer group hover:opacity-70 transition-opacity">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
