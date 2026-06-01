"use client"

import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link
          href="https://wa.me/919828056070?text=Hi%20Chandak%20Marble%2C%20I%20am%20interested%20in%20your%20marble%20collection.%20Please%20share%20more%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Link>
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
          1
        </span>
      </motion.div>

      {/* Call Button - Mobile Only */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 left-6 z-50 md:hidden"
      >
        <Link
          href="tel:+919828056070"
          className="w-14 h-14 bg-[#c9a227] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
          aria-label="Call Now"
        >
          <Phone className="h-7 w-7 text-white" />
        </Link>
      </motion.div>

      {/* Desktop Call Banner */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#1a1a1a] py-3 hidden md:block"
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p className="text-gray-300 text-sm">
            Need expert guidance? Our marble specialists are here to help.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="tel:+919950085300"
              className="flex items-center gap-2 text-white hover:text-[#c9a227] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">+91 9950085300</span>
            </Link>
            <Link
              href="https://wa.me/919828056070?text=Hi%20Chandak%20Marble%2C%20I%20am%20interested%20in%20your%20marble%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1fb855] transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}
