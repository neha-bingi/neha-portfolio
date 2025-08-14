import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Bootstrap", icon: "💨" },
      { name: "Next.js", icon: "▲" },
      { name: "Node.js", icon: "💚" },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "Scikit-learn", icon: "📊" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Jupyter", icon: "📓" },
      { name: "OpenCV", icon: "👁️" },
      { name: "Matplotlib", icon: "📈" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "🔧" },
      { name: "VS Code", icon: "💻" },
      { name: "Node.js", icon: "🟢" },
      { name: "MongoDB", icon: "🍃" },
      { name: "SQL", icon: "🐬" },
      { name: "canva", icon: "🎨" },
      { name: "AWS", icon: "☁️" },
      { name: "Figma", icon: "🎯" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center text-foreground">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-blue-50 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      <span className="text-2xl" role="img" aria-label={skill.name}>
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
