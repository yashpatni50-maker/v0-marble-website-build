"use client"

import { motion } from "framer-motion"
import { Navigation, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationMap() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
            Find Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Our Location
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Located on Makrana Road in Kishangarh, the marble capital of India. 
            Easy access from Jaipur (90 km), Ajmer (30 km), and Jodhpur (185 km).
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden h-[400px] bg-muted"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.4!2d74.86!3d26.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKishangarh%2C%20Rajasthan%20305801!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chandak Marble Location - Kishangarh, Rajasthan"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
          
          <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-auto">
            <div className="bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center gap-4">
              <div>
                <h3 className="font-serif text-lg text-foreground">Chandak Marble International</h3>
                <p className="text-sm text-muted-foreground">Makrana Road, Kishangarh, Rajasthan</p>
              </div>
              <div className="flex gap-2">
                <Button asChild size="sm" className="bg-[#c9a227] hover:bg-[#b8922a] text-white">
                  <a 
                    href="https://share.google/qbRpLaPL6g616rTXy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Directions
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a 
                    href="https://share.google/qbRpLaPL6g616rTXy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Larger
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="font-serif text-lg text-foreground mb-2">From Jaipur</h4>
            <p className="text-muted-foreground">~90 km via NH-48</p>
            <p className="text-sm text-[#c9a227]">Approx. 1.5 hours</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-foreground mb-2">From Ajmer</h4>
            <p className="text-muted-foreground">~30 km via NH-79A</p>
            <p className="text-sm text-[#c9a227]">Approx. 30 minutes</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-foreground mb-2">From Jodhpur</h4>
            <p className="text-muted-foreground">~185 km via NH-62</p>
            <p className="text-sm text-[#c9a227]">Approx. 3 hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}
