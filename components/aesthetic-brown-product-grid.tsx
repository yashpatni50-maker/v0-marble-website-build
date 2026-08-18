import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { AestheticBrownProduct } from "@/lib/aesthetic-brown-products-data"

export function AestheticBrownProductGrid({ products }: { products: AestheticBrownProduct[] }) {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="brown-products-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-overline text-[var(--gold)]">The Aesthetic Brown Collection</p>
          <h2 id="brown-products-heading" className="mt-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Brown marble with a grounded character
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/65">
            Explore warm, expressive slabs for calm foundations, feature walls, and complete luxury interiors. Open a stone to view its details and request a sample.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/collections/aesthetic-brown/${product.slug}`} className="group block">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={`${product.name} brown marble slab`}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
                <span className="absolute bottom-4 right-4 flex size-9 items-center justify-center border border-white/50 text-white transition-all duration-300 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-background" aria-hidden="true">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-border/60 py-4">
                <div>
                  <h3 className="font-serif text-xl text-foreground transition-colors duration-300 group-hover:text-[var(--gold)]">{product.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{product.origin} · {product.finish}</p>
                </div>
                <span className="pt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">View</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
