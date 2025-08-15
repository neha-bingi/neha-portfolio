"use client"

import type React from "react"

import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <ContactForm />
    </div>
  );
}


import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center p-12 shadow-lg">
            <div className="text-6xl mb-6">✅</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
            <p className="text-muted-foreground text-lg">
              Your message has been sent successfully. I'll get back to you soon!
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-6">
              Send Another Message
            </Button>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always interested in new opportunities, collaborations, and interesting projects. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">bingineha841@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Available for remote work</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Response Time</p>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />

                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" required placeholder="Your full name" className="w-full" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell me about your project or just say hello!"
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
