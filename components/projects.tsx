import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Phishing Website Detector",
    description:
     " A machine learning–powered browser extension that detects and alerts users about phishing websites in real time",
    image: "/phishing extension.png",
    liveDemo: "#",
    github: "#",
    tags: ["XGBoost", "Tensorflow", "python", "chrome extensions"],
  },
  {
    title: "Plant Image Classifier",
    description:
      "An AI-powered bot that analyzes plant leaf images to detect and classify diseases for early diagnosis and treatment.",
    image: "/leaf classifier.png",
    liveDemo: "#",
    github: "#",
    tags: ["TensorFlow.js", "flask", "Python", "Computer Vision"],
  },
  {
    title: "PetEase Landing Page",
    description:
      "A clean and engaging landing page for PetEase, showcasing premium pet care and grooming services with a focus on comfort, trust, and style.",
    image: "/Petease.png",
    liveDemo: "#",
    github: "#",
    tags: ["React", "HTML", "Java script", "CSS"],
  },
  {
    title: "Weather Prediction Model",
    description:
      "A machine learning model that predicts weather patterns using historical data and displays results in a web interface.",
    image: "/weather-dashboard-charts.png",
    liveDemo: "#",
    github: "#",
    tags: ["Python", "Scikit-learn", "Flask", "D3.js"],
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and modern design.",
    image: "/modern-portfolio-website.png",
    liveDemo: "#",
    github: "#",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
  {
    title: "Data Visualization Tool",
    description:
      "An interactive data visualization platform that transforms complex datasets into beautiful, insightful charts.",
    image: "/interactive-data-dashboard.png",
    liveDemo: "#",
    github: "#",
    tags: ["React", "D3.js", "Python", "Pandas"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} project screenshot`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                    asChild
                  >
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
