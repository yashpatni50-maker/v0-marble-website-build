import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luxury%20that%20reflects%20in%20every%20detail.With%20its%20soft%20veining%2C%20glossy%20finish%2C%20and%20timeless%20appeal%2C%20-E9GeIPcxmGBTauLJMAIiAjuH3nQNjH.jpg"
                    alt="Chandak Marble luxury interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunlit%20spaces.%20Marble%20moods.%20Minimal%20magic.%20This%20luxe%20imported%20marble%20flooring%20brings%20that%20clean-1Pl37YavwQjco4pzDB4Imzta59XSax.jpg"
                    alt="Chandak Marble modern space"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 bg-[oklch(0.55_0.12_70)] text-white p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-serif font-bold">40+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-[oklch(0.55_0.12_70)] text-sm font-medium tracking-wider uppercase">About Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Premium Imported Marble Since 1981
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Chandak Marble is one of the leading suppliers and importers of premium natural marble 
                in Kishangarh, Rajasthan. For more than four decades, we have been delivering world-class 
                imported marble solutions for residential and commercial projects throughout India.
              </p>
              <p>
                We source and import premium natural stones from Italy, Turkey, Greece, Portugal, Iran, 
                China, and other international markets. Our focus is on superior quality, competitive 
                pricing, exclusive collections, and customer satisfaction.
              </p>
              <p>
                Our commitment to quality, transparency, customer service, and product selection has 
                helped us become a trusted name in the imported marble industry.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 my-8 py-8 border-y border-border">
              {[
                { value: "5000+", label: "Projects" },
                { value: "20+", label: "States" },
                { value: "10+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[oklch(0.55_0.12_70)]">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button asChild className="bg-[oklch(0.55_0.12_70)] hover:bg-[oklch(0.45_0.12_70)] text-white">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
