import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

const navigation = {
  products: [
    { name: "Gorgeous Grey", href: "/products/collections/gorgeous-grey" },
    { name: "Beautiful Beige", href: "/products/collections/beautiful-beige" },
    { name: "Wow White", href: "/products/collections/wow-white" },
    { name: "Bold Black", href: "/products/collections/bold-black" },
    { name: "Aesthetic Brown", href: "/products/collections/aesthetic-brown" },
    { name: "Onyx Marble", href: "/products/collections/onyx-marble" },
    { name: "All Products", href: "/products" },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Why Chandak", href: "/#why-chandak" },
    { name: "Our Clientele", href: "/#clientele" },
    { name: "Contact Us", href: "/contact" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com/chandakmarbles", icon: Instagram },
    { name: "Facebook", href: "https://facebook.com/chandakmarbles", icon: Facebook },
    { name: "YouTube", href: "https://www.youtube.com/@ChandakMarble", icon: Youtube },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.02_60)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logo.png" 
                alt="Chandak Marble" 
                width={200} 
                height={100}
                className="h-24 w-auto object-contain"
                priority
              />
            </Link>
            <p className="mt-6 text-white/60 text-sm leading-relaxed">
              Premium imported marble since 1981. Trusted by architects, builders, and homeowners across India.
            </p>
            <p className="mt-4 text-[oklch(0.80_0.12_70)] text-sm font-medium">
              Stone &middot; Style &middot; Statement
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[oklch(0.55_0.12_70)] transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Products</h3>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/60 text-sm hover:text-[oklch(0.80_0.12_70)] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/60 text-sm hover:text-[oklch(0.80_0.12_70)] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[oklch(0.80_0.12_70)] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a href="tel:+919500853000" className="text-white/60 hover:text-[oklch(0.80_0.12_70)] transition-colors block">
                    +91 95008 53000
                  </a>
                  <span className="text-white/40 text-xs">(Main Showroom)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[oklch(0.80_0.12_70)] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a href="tel:+919829082911" className="text-white/60 hover:text-[oklch(0.80_0.12_70)] transition-colors block">
                    +91 98290 82911
                  </a>
                  <span className="text-white/40 text-xs">(Processing Unit)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[oklch(0.80_0.12_70)] flex-shrink-0 mt-0.5" />
                <div className="text-white/60 text-xs leading-relaxed">
                  <p className="font-medium text-white/80 mb-1">Kishangarh, Rajasthan</p>
                  <p>305801, India</p>
                </div>
              </li>
              <li>
                <Link href="mailto:chandakmarblesales@gmail.com" className="flex items-center gap-3 text-white/60 text-sm hover:text-[oklch(0.80_0.12_70)] transition-colors">
                  <Mail className="h-5 w-5 text-[oklch(0.80_0.12_70)]" />
                  chandakmarblesales@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Chandak Marble. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Premium Imported Marble Since 1981
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
