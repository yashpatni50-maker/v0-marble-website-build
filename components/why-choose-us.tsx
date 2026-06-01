import { Award, Factory, Globe, Truck, Users, Shield, Gem, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "40+ Years Experience",
    description: "Trusted expertise since 1981 in premium marble sourcing and supply.",
  },
  {
    icon: Factory,
    title: "Direct Importer & Factory Owner",
    description: "Own processing units ensuring quality control at every stage.",
  },
  {
    icon: Globe,
    title: "Global Sourcing",
    description: "Imported from Italy, Turkey, Greece, Portugal, Iran and other countries.",
  },
  {
    icon: Gem,
    title: "Premium Quality Selection",
    description: "Hand-picked marble slabs meeting the highest quality standards.",
  },
  {
    icon: Truck,
    title: "Pan India Supply Network",
    description: "Reliable delivery across all states with safe transportation.",
  },
  {
    icon: Shield,
    title: "Competitive Factory Pricing",
    description: "Direct factory rates without middlemen markups.",
  },
  {
    icon: Users,
    title: "Trusted by Industry Leaders",
    description: "Preferred choice of builders, architects and homeowners.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Guidance",
    description: "Professional consultation for material selection and application.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-[oklch(0.18_0.02_60)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[oklch(0.80_0.12_70)] text-sm font-medium tracking-wider uppercase">Why Choose Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 text-balance">
            Why Chandak Marble?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Four decades of excellence in imported marble. We combine tradition with innovation 
            to deliver the finest natural stone for your dream spaces.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[oklch(0.55_0.12_70)/50] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[oklch(0.55_0.12_70)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
