"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Server,
  Palette,
  Database,
} from "lucide-react"
import { Badge } from "../ui/badge"

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript"],
  "Backend & Database": ["Node.js", "Express.js", "MongoDB", "MySQL", "PHP", "Supabase", "Prisma"],
  "Tools & Others": ["Git", "Docker", "Figma", "Linux", "Postman"],
}

export default function SkillPage() {
  return (
    <section id="skills" className="container py-24">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Technologies</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category === "Frontend" && <Palette className="h-5 w-5" />}
                  {category === "Backend & Database" && <Server className="h-5 w-5" />}
                  {category === "Tools & Others" && <Database className="h-5 w-5" />}
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
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
