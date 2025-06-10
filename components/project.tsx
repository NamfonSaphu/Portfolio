"use client"
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div>
      <section id="project" className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Project</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Blog Review",
                description:
                  "blog-guide is a personal blog web application developed with Next.js. The project integrates modern technologies including react-leaflet for interactive map rendering, Supabase for real-time database management, and Clerk for secure user authentication and authorization.",
                tech: ["Next.JS", "TypeScript", "Supabase", "Shadcn ui", "Tailwind CSS", "Clerk"],
                image: "/images/blog.png",
                github: "https://github.com/NamfonSaphu/blog-guide.git",
                href: "/projects/blog-guide",
              },
              {
                title: "Real-Time Chat App",
                description:
                  "It's a real-time chat application developed using Next.js, TypeScript, and Socket.IO, focusing on real-time communication through WebSocket.",
                tech: ["Next.JS", "TypeScript", "Socket.IO", "Shadcn ui", "Tailwind CSS"],
                image: "/images/real-time-chat.png",
                github: "https://github.com/NamfonSaphu/Chat-Socket",
                href: "/projects/real-time-chat",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between overflow-hidden p-4 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-gray-50 text-lg mb-1 mt-3">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 mt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="p-0 mt-4 flex justify-between flex-wrap gap-2 mb-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button variant="outline" size="sm">
                      View Code <Github className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Link href={project.href}>
                    <Button size="sm">
                      More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>

  );
}
