"use client"

import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919950085300?text=Hello%2C%20I%20am%20interested%20in%20imported%20marble.%20Please%20share%20catalogue%20and%20pricing."
        target="_blank"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Link>

      {/* Call Button - Mobile Only */}
      <Link
        href="tel:+919950085300"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[oklch(0.55_0.12_70)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform md:hidden"
        aria-label="Call Now"
      >
        <Phone className="h-7 w-7 text-white" />
      </Link>
    </>
  )
}
