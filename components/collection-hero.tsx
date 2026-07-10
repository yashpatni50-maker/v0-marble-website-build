import type { MarbleCollection } from "@/lib/marble-collections-data"

interface Props {
  collection: MarbleCollection
}

export function CollectionHero({ collection }: Props) {
  const colorMap: Record<string, string> = {
    Grey: "from-slate-900 to-slate-700",
    Beige: "from-amber-900 to-amber-700",
    White: "from-slate-100 to-slate-50",
    Black: "from-slate-950 to-slate-800",
    Brown: "from-amber-950 to-amber-800",
    Onyx: "from-purple-950 to-purple-800",
  }

  const bgClass = colorMap[collection.color] || "from-slate-900 to-slate-700"

  return (
    <section className={`relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br ${bgClass} pt-32 overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[oklch(0.80_0.12_70)] rounded-full blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[oklch(0.80_0.12_70)] rounded-full blur-3xl opacity-5 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center justify-center gap-2 text-sm">
          <a href="/products" className="text-white/70 hover:text-white transition-colors">
            Collections
          </a>
          <span className="text-white/50">/</span>
          <span className="text-[oklch(0.80_0.12_70)]">{collection.name}</span>
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
          {collection.name}
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-white/80 mb-6 animate-fade-in-up animation-delay-100">
          {collection.tagline}
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
          {collection.description}
        </p>

        {/* CTA Button */}
        <button className="inline-block px-8 py-4 bg-[oklch(0.55_0.12_70)] hover:bg-[oklch(0.45_0.12_70)] text-white font-medium rounded transition-all duration-300 hover:shadow-lg animate-fade-in-up animation-delay-300 group">
          <a href="https://wa.me/919950085300?text=Hello%2C%20I%20am%20interested%20in%20your%20marble%20collections%20especially%20the%20" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <span>Explore Varieties</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </button>
      </div>
    </section>
  )
}
