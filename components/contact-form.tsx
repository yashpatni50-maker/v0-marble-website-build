"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
              Send a Message
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Request a Quote
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-background p-12 rounded-lg text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">Thank You!</h3>
              <p className="text-muted-foreground mb-6">
                Your inquiry has been received. Our team will contact you shortly.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
              >
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-background p-8 rounded-lg shadow-sm"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98XXX XXXXX"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                    City *
                  </label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    placeholder="Your city"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                  Interested In *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select marble type</option>
                  <option value="italian-marble">Italian Marble</option>
                  <option value="turkish-marble">Turkish Marble</option>
                  <option value="onyx">Onyx Marble</option>
                  <option value="white-marble">White Marble</option>
                  <option value="grey-marble">Grey Marble</option>
                  <option value="granite">Granite</option>
                  <option value="other">Other / Custom Requirement</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project, required quantity, preferred colors, etc."
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                disabled={isLoading}
                className="w-full bg-[#c9a227] hover:bg-[#b8922a] text-white"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Inquiry
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                We respect your privacy. Your information will not be shared with third parties.
              </p>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}
