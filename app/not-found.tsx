import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-[oklch(0.80_0.12_70)] mb-4">404</h1>
            <p className="text-2xl font-serif text-foreground mb-4">Page Not Found</p>
            <p className="text-foreground/70 mb-8">
              We couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-[oklch(0.55_0.12_70)] hover:bg-[oklch(0.45_0.12_70)] text-white font-medium rounded transition-all duration-300"
            >
              Go to Home
            </Link>
            <Link
              href="/products"
              className="inline-block px-6 py-3 border border-[oklch(0.80_0.12_70)] text-[oklch(0.80_0.12_70)] hover:bg-[oklch(0.80_0.12_70)]/10 font-medium rounded transition-all duration-300"
            >
              View Collections
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
