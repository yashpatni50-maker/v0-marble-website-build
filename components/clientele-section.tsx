import Image from "next/image"
import { Building2, Home, Hotel, Landmark, PencilRuler, HardHat } from "lucide-react"

const clientTypes = [
  { icon: PencilRuler, name: "Architects" },
  { icon: Home, name: "Interior Designers" },
  { icon: HardHat, name: "Builders" },
  { icon: Building2, name: "Developers" },
  { icon: Hotel, name: "Hotels" },
  { icon: Landmark, name: "Commercial Projects" },
]

const projects = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/This%20breathtaking%20marble%20installation%20by%20Chandak%20Marble%20transforms%20grand%20spaces%20into%20timeless%20st-0igveQOMjq0xMBHdgJolm7yQpqKnz2.jpg",
    title: "Grand Lobby",
    category: "Commercial",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunlit%20spaces.%20Marble%20moods.%20Minimal%20magic.%20This%20luxe%20imported%20marble%20flooring%20brings%20that%20clean-1Pl37YavwQjco4pzDB4Imzta59XSax.jpg",
    title: "Modern Penthouse",
    category: "Residential",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luxury%20that%20reflects%20in%20every%20detail.With%20its%20soft%20veining%2C%20glossy%20finish%2C%20and%20timeless%20appeal%2C%20-E9GeIPcxmGBTauLJMAIiAjuH3nQNjH.jpg",
    title: "Luxury Villa",
    category: "Residential",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Let%20your%20floors%20reflect%20your%20finest%20taste.This%20elegant%20marble%20flooring%20by%20Chandak%20Marble%20enhance-6WrBsrn0MmihtzKQHikltXOAInmxwS.jpg",
    title: "Premium Living Room",
    category: "Residential",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Experience%20the%20timeless%20beauty%20of%20Marble%20flooring%2C%20where%20loyalty%20meets%20luxury.%20Our%20expertly%20cra-ctszDVauiNX2ybohpYC4qsWul8lltA.webp",
    title: "Contemporary Space",
    category: "Residential",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20Marble%20for%20Every%20VisionYour%20dream%20space%20begins%20with%20the%20right%20foundation%2C%20and%20at%20Chandak%20Marbl-zMRdq043J9wAQJ5s3K22xlu75XTFCN.jpg",
    title: "Modern Interior",
    category: "Residential",
  },
]

export function ClienteleSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[oklch(0.55_0.12_70)] text-sm font-medium tracking-wider uppercase">Our Clientele</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From luxury homeowners to leading architects and developers, our premium marble 
            adorns the most prestigious projects across India.
          </p>
        </div>

        {/* Client Types */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {clientTypes.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center p-6 rounded-lg bg-secondary hover:bg-[oklch(0.55_0.12_70)/10] transition-colors"
            >
              <client.icon className="h-8 w-8 text-[oklch(0.55_0.12_70)] mb-3" />
              <span className="text-sm font-medium text-foreground text-center">{client.name}</span>
            </div>
          ))}
        </div>

        {/* Project Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                <span className="text-[oklch(0.80_0.12_70)] text-xs font-medium uppercase tracking-wider">{project.category}</span>
                <h3 className="text-white font-serif text-lg font-semibold mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
