import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Neha, a passionate frontend developer with a deep fascination for machine learning. I love
              creating intuitive, responsive web applications that provide exceptional user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding beautiful interfaces, you'll find me diving into ML algorithms, exploring data
              patterns, and building intelligent solutions. I believe in the power of combining great design with smart
              technology to solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always eager to learn new technologies and take on challenging projects that push the boundaries of
              what's possible on the web.
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <img
                  src="/neha headshot.png"
                  alt="Neha Bingi - Professional headshot"
                  className="w-48 h-48 rounded-lg object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
