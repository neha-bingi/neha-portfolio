"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-blue-50/30 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">Neha Bingi</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-delay-1">
          Frontend Developer & ML Enthusiast
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
          Crafting beautiful, responsive web experiences while exploring the fascinating world of machine learning
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg animate-fade-in-delay-3 group"
        >
          Get In Touch
          <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}
