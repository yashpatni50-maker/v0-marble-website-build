"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Phone } from "lucide-react"
import type { WhiteProduct } from "@/lib/wow-white-products-data"

export function WowWhiteProductDetail({ product }: { product: WhiteProduct }) {
  const message = encodeURIComponent(`Hello, I am interested in ${product.name} marble.`)

  return (
    <main className="min-h-screen bg-background">
      <section className="px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Link href="/products/collections/wow-white" className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-[var(--gold)]">
            <ArrowLeft className="h-4 w-4" />Back to Wow White
          </Link>
          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div className="relative aspect-[3/2] overflow-hidden bg-muted"><Image src={product.landscapeImage} alt={`${product.name} white marble texture`} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" /></div>
            <div className="lg:pt-8">
              <p className="text-overline text-[var(--gold)]">Wow White Collection</p>
              <h1 className="mt-4 font-serif text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl">{product.name}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">{product.shortDescription}</p>
              <div className="mt-10 grid grid-cols-2 gap-px border border-border/70 bg-border/70"><div className="bg-background p-5"><p className="text-overline text-muted-foreground">Origin</p><p className="mt-2 text-sm text-foreground">{product.origin}</p></div><div className="bg-background p-5"><p className="text-overline text-muted-foreground">Finish</p><p className="mt-2 text-sm text-foreground">{product.finish}</p></div></div>
              <p className="mt-8 text-base leading-relaxed text-foreground/70">{product.description}</p>
              <div className="mt-8"><p className="text-overline text-muted-foreground">Best suited for</p><div className="mt-3 flex flex-wrap gap-2">{product.bestFor.map((item) => <span key={item} className="border border-border/70 px-3 py-2 text-xs uppercase tracking-[0.12em] text-foreground/70">{item}</span>)}</div></div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/919950085300?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] px-5 py-3 text-xs uppercase tracking-[0.16em] text-background"><MessageCircle className="h-4 w-4" />Request a sample</a><a href="tel:+9199829082911" className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 text-xs uppercase tracking-[0.16em] text-foreground"><Phone className="h-4 w-4" />Speak to a specialist</a></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"><div className="mb-6 flex items-center justify-between"><p className="text-overline text-[var(--gold)]">Material study</p><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Full rhythm · Surface detail · Original lot</p></div><div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]"><div className="relative aspect-[3/2] overflow-hidden bg-muted"><Image src={product.landscapeImage} alt={`${product.name} 3:2 landscape marble texture`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 70vw" /></div><div className="relative aspect-square overflow-hidden bg-muted"><Image src={product.image} alt={`${product.name} square marble texture`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 30vw" /></div></div><div className="relative mt-6 aspect-[16/9] overflow-hidden bg-muted"><Image src={product.originalImage} alt={`Full lot of ${product.name} marble`} fill className="object-cover" sizes="100vw" /></div></section>
    </main>
  )
}
