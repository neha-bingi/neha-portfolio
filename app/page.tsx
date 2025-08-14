import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Neha Bingi - Frontend Developer & ML Enthusiast",
  description:
    "Personal portfolio of Neha Bingi, a passionate frontend developer and machine learning enthusiast. Explore my projects, skills, and get in touch.",
  keywords: "Neha Bingi, frontend developer, machine learning, React, JavaScript, portfolio, web development",
  authors: [{ name: "Neha Bingi" }],
  openGraph: {
    title: "Neha Bingi - Frontend Developer & ML Enthusiast",
    description: "Personal portfolio showcasing frontend development and machine learning projects",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
