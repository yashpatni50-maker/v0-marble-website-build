"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Phone } from "lucide-react"
import type { OnyxProduct } from "@/lib/onyx-products-data"

interface Props { product: OnyxProduct }

export function OnyxProductDetail({ product }: Props) {
  const message = encodeURIComponent(`Hello, I am interested in ${product.name} marble.`)
  return (
    <main className="min-h-screen bg-background">
      <section className="px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Link href="/products/collections/onyx-marble" className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-[var(--gold)]">
            <ArrowLeft className="h-4 w-4" /> Back to Onyx Marble
          </Link>
          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div className="relative aspect-[3/2] overflow-hidden bg-muted">
              <Image src={product.landscapeImage} alt={`${product.name} marble slab`} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
            </div>
            <div className="lg:pt-8">
              <p className="text-overline text-[var(--gold)]">Onyx Marble Collection</p>
              <h1 className="mt-4 font-serif text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl">{product.name}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">{product.shortDescription}</p>
              <div className="mt-10 grid grid-cols-2 gap-px border border-border/70 bg-border/70">
                <div className="bg-background p-5"><p className="text-overline text-muted-foreground">Origin</p><p className="mt-2 text-sm text-foreground">{product.origin}</p></div>
                <div className="bg-background p-5"><p className="text-overline text-muted-foreground">Finish</p><p className="mt-2 text-sm text-foreground">{product.finish}</p></div>
              </div>
              <p className="mt-8 text-base leading-relaxed text-foreground/70">{product.description}</p>
              <div className="mt-8"><p className="text-overline text-muted-foreground">Best suited for</p><div className="mt-3 flex flex-wrap gap-2">{product.bestFor.map((item) => <span key={item} className="border border-border/70 px-3 py-2 text-xs uppercase tracking-[0.12em] text-foreground/70">{item}</span>)}</div></div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/919950085300?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-background transition-colors hover:bg-[var(--gold-bright)]"><MessageCircle className="h-4 w-4" /> Request a sample</a><a href="tel:+919950085300" className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"><Phone className="h-4 w-4" /> Speak to a specialist</a></div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-border/60 bg-card px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div><p className="text-overline text-[var(--gold)]">Material study</p><h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">See the stone in its full rhythm</h2></div><div className="relative aspect-[3/2] overflow-hidden bg-muted"><Image src={product.originalImage} alt={`${product.name} full warehouse lot view`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 900px" /></div></div></section>
    </main>
  )
}
