"use client"
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div>
      <section id="project" className="py-16 md:py-24">
        <div className="container space-y-8 ">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Project</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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
                className="overflow-hidden p-2 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-gray-900">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
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
                <CardFooter className="flex items-center gap-4 my-4">
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
