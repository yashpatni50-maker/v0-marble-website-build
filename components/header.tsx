"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Download } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-fade-in-up">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <Image 
            src="/logo.png" 
            alt="Chandak Marble" 
            width={120} 
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-[oklch(0.55_0.12_70)] transition-colors duration-300 relative group animate-fade-in-up"
              style={{ animationDelay: `${100 + index * 50}ms` }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[oklch(0.55_0.12_70)] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link href="tel:+919950085300" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-[oklch(0.55_0.12_70)] transition-colors duration-300 luxury-text-hover animate-fade-in-up animation-delay-300">
            <Phone className="h-4 w-4" />
            +91 99500 85300
          </Link>
          <Button asChild className="bg-[oklch(0.55_0.12_70)] hover:bg-[oklch(0.45_0.12_70)] text-white luxury-button-hover animate-fade-in-up animation-delay-400">
            <a href="https://blobs.vusercontent.net/blob/Chandak%20Marble%20Colours%20of%20Your%20Imagination-SMMix9Zr6lGqmaC0vHA5zOluJ1Bw26.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-2" />
              Brochure
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="space-y-1 px-4 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-foreground/80 hover:text-[oklch(0.55_0.12_70)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link href="tel:+919950085300" className="flex items-center gap-2 text-sm font-medium">
                <Phone className="h-4 w-4" />
                +91 99500 85300
              </Link>
              <Button asChild className="bg-[oklch(0.55_0.12_70)] hover:bg-[oklch(0.45_0.12_70)] text-white w-full">
                <a href="https://blobs.vusercontent.net/blob/Chandak%20Marble%20Colours%20of%20Your%20Imagination-SMMix9Zr6lGqmaC0vHA5zOluJ1Bw26.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2" />
                  Download Brochure
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
