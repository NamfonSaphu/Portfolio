import { ArrowRight, Github, Linkedin } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export default function AboutMePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="container py-24 md:py-32 space-y-8">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                    <div className="flex-1 space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Hi, I'm <span className="text-primary">NAMFON SAPHU</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            A developer passionate about creating clean, efficient, and user-friendly digital experiences.
                            I enjoy turning complex problems into simple, beautiful solutions. Always eager to learn new technologies and collaborate on meaningful projects.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild>
                                <Link href="#project">
                                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="#contact">Contact Me</Link>
                            </Button>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <Link href="https://github.com/namfonsaphu" target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="https://www.linkedin.com/in/namfon-saphu/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>

                        </div>
                    </div>

                </div>
            </section>

            {/* About Section */}
            <section id="about" className="md:py-24">
                <div className="container space-y-8">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">About Me</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                Hi, I’m Namfon Saphu, a Developer based in Bangkok, Thailand.
                                I specialize in building clean, responsive, and user-focused web applications using modern technologies such as React, Next.js, JavaScript, and TypeScript.
                            </p>
                            <p className="text-muted-foreground">
                                My goal is to create scalable, high-quality digital products that not only work flawlessly but also leave a lasting impact. I’m always open to learning new tools, contributing to meaningful projects, and growing as a developer every day.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-background p-4 rounded-lg border">
                                    <h3 className="font-medium">Education</h3>
                                    <p className="text-sm text-muted-foreground">Ubon Ratchathani University</p>
                                </div>
                                <div className="bg-background p-4 rounded-lg border">
                                    <h3 className="font-medium">Experience</h3>
                                    <p className="text-sm text-muted-foreground">None Experience</p>
                                </div>
                                <div className="bg-background p-4 rounded-lg border">
                                    <h3 className="font-medium">Location</h3>
                                    <p className="text-sm text-muted-foreground">Bangkok, Thailand</p>
                                </div>
                                <div className="bg-background p-4 rounded-lg border">
                                    <h3 className="font-medium">Languages</h3>
                                    <p className="text-sm text-muted-foreground">Thai, English</p>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/resume.pdf" target="_blank">
                                    Download Resume
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}