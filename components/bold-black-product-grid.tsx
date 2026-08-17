import Image from "next/image"
import Link from "next/link"
import type { BoldBlackProduct } from "@/lib/bold-black-products-data"

export function BoldBlackProductGrid({ products }: { products: BoldBlackProduct[] }) {
  return <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <Link key={product.slug} href={`/products/collections/bold-black/${product.slug}`} className="group block"><div className="relative aspect-square overflow-hidden bg-muted"><Image src={product.image} alt={`${product.name} black marble`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" /></div><h2 className="mt-4 font-serif text-2xl text-foreground">{product.name}</h2><p className="mt-1 text-sm text-muted-foreground">Bold Black Collection</p></Link>)}</div></section>
}
