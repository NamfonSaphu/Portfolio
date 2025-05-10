import { Briefcase, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProjectPage() {
    return (
        <div>
            <section id="project" className="bg-muted/50 py-16 md:py-24">
          <div className="container space-y-8">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Blog Project</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "E-Commerce Platform",
                  description: "A full-stack e-commerce platform with payment processing and inventory management.",
                  tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  title: "Task Management App",
                  description: "A collaborative task management application with real-time updates.",
                  tech: ["React", "Firebase", "Tailwind CSS"],
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  title: "Finance Dashboard",
                  description: "An interactive dashboard for tracking personal finances and investments.",
                  tech: ["TypeScript", "Chart.js", "Express", "PostgreSQL"],
                  image: "/placeholder.svg?height=200&width=400",
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Code <Github className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="sm">
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View More Projects <Github className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        </div>
    )
}