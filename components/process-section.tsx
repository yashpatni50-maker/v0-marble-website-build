import { Globe, Ship, Search, Scissors, Truck } from "lucide-react"

const steps = [
  {
    icon: Globe,
    number: "01",
    title: "Global Stone Selection",
    description: "We personally visit quarries worldwide to select the finest marble slabs from Italy, Turkey, Greece, Portugal, Iran, and other premium sources.",
  },
  {
    icon: Ship,
    number: "02",
    title: "International Sourcing & Import",
    description: "Direct import from quarries ensures authenticity, competitive pricing, and access to exclusive marble varieties.",
  },
  {
    icon: Search,
    number: "03",
    title: "Processing & Quality Inspection",
    description: "Every slab undergoes rigorous quality inspection using advanced IRS technology at our processing units.",
  },
  {
    icon: Scissors,
    number: "04",
    title: "Precision Cutting & Finishing",
    description: "State-of-the-art gangsaw and cutting technology ensures precision cuts and flawless finishing.",
  },
  {
    icon: Truck,
    number: "05",
    title: "Dispatch & Delivery",
    description: "Safe packaging and reliable logistics ensure your marble reaches you in perfect condition across India.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[oklch(0.55_0.12_70)] text-sm font-medium tracking-wider uppercase">Our Process</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            IRS Stone Process
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our International Refined Stone process ensures every marble piece meets the highest 
            standards of quality from quarry to your doorstep.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-12 bottom-0 w-0.5 bg-border -mb-8" />
                )}
                
                <div className="relative bg-background rounded-lg p-6 shadow-sm border border-border hover:border-[oklch(0.55_0.12_70)/30] hover:shadow-md transition-all">
                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[oklch(0.55_0.12_70)] flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Number */}
                  <span className="text-[oklch(0.55_0.12_70)] text-sm font-bold">{step.number}</span>
                  
                  {/* Title */}
                  <h3 className="font-serif text-lg font-semibold text-foreground mt-2 mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
