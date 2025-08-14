import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Neha Bingi</h3>
            <p className="text-background/80">Frontend Developer & ML Enthusiast</p>
          </div>

          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-background hover:text-foreground hover:bg-background/10"
              asChild
            >
              <a
                href="https://github.com/neha-bingi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Neha's GitHub profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-background hover:text-foreground hover:bg-background/10"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/neha-bingi-010432288"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Neha's LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-background hover:text-foreground hover:bg-background/10"
              asChild
            >
              <a href="mailto:bingineha841@gmail.com" aria-label="Send email to Neha">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © {currentYear} Neha Bingi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
