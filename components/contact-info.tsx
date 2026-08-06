"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 95008 53000", "+91 98290 82911"],
    action: {
      label: "Call Now",
      href: "tel:+919500853000"
    }
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+91 95008 53000"],
    action: {
      label: "Chat Now",
      href: "https://wa.me/919500853000?text=Hi%20Chandak%20Marble%2C%20I%20am%20interested%20in%20your%20marble%20collection.%20Please%20share%20more%20details."
    }
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["chandakmarblesales@gmail.com"],
    action: {
      label: "Send Email",
      href: "mailto:chandakmarblesales@gmail.com"
    }
  }
]

const locations = [
  {
    name: "Main Showroom",
    company: "Chandak Marble International",
    address: "Khasra No. 375 & 361,\nMakrana Road,\nMadanganj, Kali Dungri,\nKishangarh,\nRajasthan – 305801, India",
    phone: "+91 95008 53000",
    phoneHref: "tel:+919500853000",
    image: "/images/contact-showroom.png"
  },
  {
    name: "Processing Unit",
    company: "CHANDAK MARBLES PVT. LTD.",
    address: "E-47,\nRIICO Industrial Area,\n3rd Phase,\nHarmada Road,\nMadanganj,\nKishangarh,\nRajasthan – 305801, India",
    phone: "+91 98290 82911",
    phoneHref: "tel:+919829082911",
    image: "/images/contact-processing.png"
  }
]

export function ContactInfo() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted/50 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-[#c9a227]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <method.icon className="h-8 w-8 text-[#c9a227]" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-4">{method.title}</h3>
              <div className="space-y-1 mb-6">
                {method.details.map((detail) => (
                  <p key={detail} className="text-muted-foreground">{detail}</p>
                ))}
              </div>
              <Button asChild className="bg-[#c9a227] hover:bg-[#b8922a] text-white">
                <a href={method.action.href} target={method.title === "WhatsApp" ? "_blank" : undefined} rel="noopener noreferrer">
                  {method.action.label}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted/50 rounded-lg border border-border overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#c9a227] mb-1">{location.name}</h3>
                    <p className="text-sm font-medium text-foreground">{location.company}</p>
                  </div>
                </div>

                <div className="mb-6 pl-16">
                  <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                    {location.address}
                  </p>
                </div>

                <div className="flex items-center gap-3 pl-16">
                  <Phone className="h-5 w-5 text-[#c9a227]" />
                  <a 
                    href={location.phoneHref}
                    className="text-sm font-medium text-foreground hover:text-[#c9a227] transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/50 p-8 rounded-lg"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-[#c9a227]" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">Business Hours</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                  <p className="text-xs text-[#c9a227] mt-3">* Open all days for appointments</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg text-foreground mb-4">Why Visit Our Showroom?</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9a227] rounded-full mt-1.5 shrink-0" />
                  <span>25,000+ sq ft display of 500+ marble varieties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9a227] rounded-full mt-1.5 shrink-0" />
                  <span>Expert consultation from our experienced team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9a227] rounded-full mt-1.5 shrink-0" />
                  <span>See and feel the marble before you buy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9a227] rounded-full mt-1.5 shrink-0" />
                  <span>Get accurate measurements and estimates on the spot</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
