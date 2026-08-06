import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface Props {
  collectionName: string
}

export function EmptyCollectionProducts({ collectionName }: Props) {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="collection-products-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-overline text-[var(--gold)]">{collectionName} Collection</p>
          <h2 id="collection-products-heading" className="mt-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            A considered collection, ready to be explored
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/65">
            We are curating the first selection of {collectionName.toLowerCase()} marble for this collection. Speak with our team for current slabs, live availability, and project guidance.
          </p>
        </div>

        <div className="border-y border-border/60 py-16 text-center sm:py-20">
          <p className="font-serif text-2xl text-foreground sm:text-3xl">New stone studies are being prepared.</p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Request the latest {collectionName.toLowerCase()} selection directly from Chandak Marble. We will share real slab images and availability for your project.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 border border-[var(--gold)] px-6 py-3 text-xs uppercase tracking-[0.18em] text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-background"
          >
            Talk to a specialist
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
