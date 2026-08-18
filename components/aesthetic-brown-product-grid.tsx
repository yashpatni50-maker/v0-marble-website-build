import Image from "next/image"
import Link from "next/link"
import type { AestheticBrownProduct } from "@/lib/aesthetic-brown-products-data"

export function AestheticBrownProductGrid({ products }: { products: AestheticBrownProduct[] }) {
  return <section className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <Link key={product.slug} href={`/products/collections/aesthetic-brown/${product.slug}`} className="group bg-background"><div className="relative aspect-square overflow-hidden"><Image src={product.image} alt={`${product.name} brown marble`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div><div className="flex items-center justify-between px-5 py-4"><h2 className="font-serif text-lg">{product.name}</h2><span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">View</span></div></Link>)}</section>
}
