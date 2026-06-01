"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98280 56070", "+91 98280 56071"],
    action: {
      label: "Call Now",
      href: "tel:+919828056070"
    }
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+91 98280 56070"],
    action: {
      label: "Chat Now",
      href: "https://wa.me/919828056070?text=Hi%20Chandak%20Marble%2C%20I%20am%20interested%20in%20your%20marble%20collection.%20Please%20share%20more%20details."
    }
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@chandakmarble.com", "sales@chandakmarble.com"],
    action: {
      label: "Send Email",
      href: "mailto:info@chandakmarble.com"
    }
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

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted/50 p-8 rounded-lg"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-[#c9a227]" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Showroom Address</h3>
                <p className="text-muted-foreground">
                  Chandak Marble<br />
                  NH-79A, Near Madanganj-Kishangarh Highway<br />
                  Kishangarh, Ajmer District<br />
                  Rajasthan 305801, India
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-[#c9a227]" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Business Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                  <p className="text-sm text-[#c9a227] mt-2">* Open all days for appointments</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted/50 p-8 rounded-lg"
          >
            <h3 className="font-serif text-xl text-foreground mb-6">Why Visit Our Showroom?</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#c9a227] rounded-full mt-2 shrink-0" />
                <span>25,000+ sq ft display of 500+ marble varieties</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#c9a227] rounded-full mt-2 shrink-0" />
                <span>Expert consultation from our experienced team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#c9a227] rounded-full mt-2 shrink-0" />
                <span>See and feel the marble before you buy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#c9a227] rounded-full mt-2 shrink-0" />
                <span>Get accurate measurements and estimates on the spot</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#c9a227] rounded-full mt-2 shrink-0" />
                <span>Free parking available for visitors</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
