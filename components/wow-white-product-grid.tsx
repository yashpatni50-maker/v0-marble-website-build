import Image from "next/image"
import Link from "next/link"
import type { WhiteProduct } from "@/lib/wow-white-products-data"

export function WowWhiteProductGrid({ products }: { products: WhiteProduct[] }) {
  return <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
    {products.map((product) => <Link key={product.slug} href={`/products/collections/wow-white/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden bg-muted"><Image src={`/images/wow-white/square/${product.slug}.jpg`} alt={`${product.name} white marble texture`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div>
      <div className="flex items-start justify-between border-b border-border py-5"><div><h2 className="font-serif text-2xl text-foreground">{product.name}</h2><p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">Imported · Polished</p></div><span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">View</span></div>
    </Link>)}
  </section>
}
