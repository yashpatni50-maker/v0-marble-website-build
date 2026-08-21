import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

const products = [
  { name: "Gorgeous Grey",    href: "/products/collections/gorgeous-grey" },
  { name: "Beautiful Beige",  href: "/products/collections/beautiful-beige" },
  { name: "Wow White",        href: "/products/collections/wow-white" },
  { name: "Bold Black",       href: "/products/collections/bold-black" },
  { name: "Aesthetic Brown",  href: "/products/collections/aesthetic-brown" },
  { name: "Onyx Marble",      href: "/products/collections/onyx-marble" },
  { name: "Exotic",           href: "/products/collections/exotic" },
  { name: "All Collections",  href: "/products" },
]

const company = [
  { name: "About Us",       href: "/about" },
  { name: "Why Chandak",    href: "/why-chandak" },
  { name: "Our Clientele",  href: "/our-clientele" },
  { name: "Contact Us",     href: "/contact" },
]

const social = [
  { name: "Instagram", href: "https://instagram.com/chandakmarbles",           Icon: Instagram },
  { name: "Facebook",  href: "https://facebook.com/chandakmarbles",            Icon: Facebook },
  { name: "YouTube",   href: "https://www.youtube.com/@ChandakMarble",         Icon: Youtube },
]

export function Footer() {
  return (
    <footer className="bg-[oklch(0.08_0.005_60)] text-white" role="contentinfo">
      {/* Top champagne line */}
      <div className="divider-gold-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Chandak Marble — Home">
              <Image
                src="/logo-footer.png"
                alt="Chandak Marble"
                width={220}
                height={110}
                className="h-28 sm:h-32 w-auto object-contain mb-6"
              />
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              Luxury imported marble supplier since 1981. Direct Italian marble, Turkish stone, and architectural imports 
              for premium homes, hotels, and commercial spaces. Trusted by architects across India.
            </p>
            <p className="text-overline text-[var(--gold-dim)]">
              Luxury Marble &middot; Architectural Stone &middot; Premium Flooring
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-8">
              {social.map(({ name, href, Icon }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:border-[var(--gold)/40] hover:text-[var(--gold)] transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-overline text-white/40 mb-6">Collections</h3>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/50 text-sm hover:text-[var(--gold)] transition-colors duration-300 link-luxury"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-overline text-white/40 mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/50 text-sm hover:text-[var(--gold)] transition-colors duration-300 link-luxury"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-overline text-white/40 mb-6">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[var(--gold)] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div className="space-y-1">
                  <Link href="tel:+919950085300" className="text-white/55 text-sm hover:text-[var(--gold)] transition-colors block">
                    +91 9950085300
                  </Link>
                  <Link href="tel:+919829082911" className="text-white/55 text-sm hover:text-[var(--gold)] transition-colors block">
                    +91 9829082911
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[var(--gold)] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div className="text-white/45 text-xs leading-relaxed">
                  <span className="text-white/65 text-sm block mb-0.5">Kishangarh, Rajasthan</span>
                  305801, India
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[var(--gold)] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <Link
                  href="mailto:chandakmarblesales@gmail.com"
                  className="text-white/55 text-sm hover:text-[var(--gold)] transition-colors break-all"
                >
                  chandakmarblesales@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="divider-gold-full" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Chandak Marble. All rights reserved.
          </p>
          <p className="text-white/25 text-xs text-overline">
            Premium Imported Marble Since 1981
          </p>
        </div>
      </div>
    </footer>
  )
}
