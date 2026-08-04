"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Home",        href: "/" },
  { name: "About Us",    href: "/about" },
  { name: "Products",    href: "/products" },
  { name: "Why Chandak", href: "/why-chandak" },
  { name: "Clientele",   href: "/our-clientele" },
  { name: "Contact",     href: "/contact" },
]

export function Header() {
  const [scrolled, setScrolled]         = useState(false)
  const [scrollProgress, setProgress]   = useState(0)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const pathname = usePathname()

  const isHome = pathname === "/"

  const onScroll = useCallback(() => {
    const y   = window.scrollY
    const max = document.body.scrollHeight - window.innerHeight
    setScrolled(y > 60)
    setProgress(max > 0 ? (y / max) * 100 : 0)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  const headerBg = scrolled
    ? "bg-background/98 backdrop-blur-md border-b border-border/40"
    : isHome
      ? "bg-transparent border-b border-transparent"
      : "bg-background/98 backdrop-blur-md border-b border-border/40"

  const logoScale = scrolled ? "h-12 sm:h-14 lg:h-16" : "h-20 sm:h-24 lg:h-28"

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${headerBg}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8 h-auto lg:h-20 py-2 lg:py-0">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group" aria-label="Chandak Marble — Home">
            <Image
              src="/logo.png"
              alt="Chandak Marble"
              width={260}
              height={130}
              className={`w-auto object-contain transition-all duration-500 ${logoScale}`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navigation.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-overline link-luxury transition-colors duration-300 ${
                    active
                      ? "text-gold"
                      : scrolled || !isHome
                        ? "text-foreground/70 hover:text-foreground"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[var(--gold)]" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="tel:+919950085300"
              className={`flex items-center gap-2 text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${
                scrolled || !isHome ? "text-foreground/60 hover:text-[var(--gold)]" : "text-white/70 hover:text-white"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              +91 99500 85300
            </Link>
            <a
              href="https://blobs.vusercontent.net/blob/Chandak%20Marble%20Colours%20of%20Your%20Imagination-SMMix9Zr6lGqmaC0vHA5zOluJ1Bw26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 border border-[var(--gold)] text-[var(--gold)] text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:bg-[var(--gold)] hover:text-background btn-luxury"
            >
              <Download className="h-3.5 w-3.5" />
              Brochure
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled || !isHome ? "text-foreground" : "text-white"
            }`}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Scroll progress line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/20 overflow-hidden">
          <div
            className="h-full bg-[var(--gold)] transition-none origin-left"
            style={{ width: `${scrollProgress}%`, opacity: scrolled ? 0.6 : 0 }}
          />
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/98 backdrop-blur-md border-b border-border/40 lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-6 space-y-1">
              {navigation.map((item, i) => {
                const active = pathname === item.href
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 text-sm font-medium border-b border-border/20 last:border-0 transition-colors ${
                        active ? "text-[var(--gold)]" : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              })}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="tel:+919950085300"
                  className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-foreground/60"
                >
                  <Phone className="h-3.5 w-3.5" />
                  +91 99500 85300
                </Link>
                <a
                  href="https://blobs.vusercontent.net/blob/Chandak%20Marble%20Colours%20of%20Your%20Imagination-SMMix9Zr6lGqmaC0vHA5zOluJ1Bw26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--gold)] text-[var(--gold)] text-xs font-medium tracking-widest uppercase w-fit"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download Brochure
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
