"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always interested in new opportunities, collaborations, and interesting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
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

          {/* Placeholder for Form Removed */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>The form has been temporarily removed.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Please reach out to me via email.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
