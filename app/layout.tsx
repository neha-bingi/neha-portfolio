import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

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
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
