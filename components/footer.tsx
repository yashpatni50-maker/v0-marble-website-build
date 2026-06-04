import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

const navigation = {
  products: [
    { name: "Italian Marble", href: "/products/italian-marble" },
    { name: "Turkish Marble", href: "/products/turkish-marble" },
    { name: "White Marble", href: "/products/white-marble" },
    { name: "Grey Marble", href: "/products/grey-marble" },
    { name: "Beige Marble", href: "/products/beige-marble" },
    { name: "Black Marble", href: "/products/black-marble" },
    { name: "Onyx Marble", href: "/products/onyx-marble" },
    { name: "Exotic Marble", href: "/products/exotic-marble" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/process" },
    { name: "Clientele", href: "/clientele" },
    { name: "Download Brochure", href="/brochure" },
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
            <Link href="/" className="inline-block">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-serif font-bold tracking-tight text-[oklch(0.80_0.12_70)]">C</span>
                  <span className="text-3xl font-serif font-bold tracking-tight text-[oklch(0.80_0.12_70)]">M</span>
                </div>
                <span className="text-xs tracking-[0.2em] text-white/60 font-medium">CHANDAK MARBLE</span>
              </div>
            </Link>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
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
                <MapPin className="h-5 w-5 text-[oklch(0.80_0.12_70)] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Khasra No. 375, 361,<br />
                  Makrana Road, Madanganj,<br /> 
                  Kali Dungri, Kishangarh,<br />
                  Rajasthan 305801
                </span>
              </li>
              <li>
                <Link href="tel:+919950085300" className="flex items-center gap-3 text-white/60 text-sm hover:text-[oklch(0.80_0.12_70)] transition-colors">
                  <Phone className="h-5 w-5 text-[oklch(0.80_0.12_70)]" />
                  +91 99500 85300
                </Link>
              </li>
              <li>
                <Link href="tel:+919829082911" className="flex items-center gap-3 text-white/60 text-sm hover:text-[oklch(0.80_0.12_70)] transition-colors">
                  <Phone className="h-5 w-5 text-[oklch(0.80_0.12_70)]" />
                  +91 98290 82911
                </Link>
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
