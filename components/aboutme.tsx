import { ArrowRight, Github, Linkedin, Mail, Twitter, User } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
export default function AboutMePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="container py-24 md:py-32 space-y-8">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                    <div className="flex-1 space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Hi, I'm <span className="text-primary">DevName</span> 👋
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Full-Stack Developer specializing in building exceptional digital experiences.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild>
                                <Link href="#projects">
                                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="#contact">Contact Me</Link>
                            </Button>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="mailto:email@example.com">
                                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                                <span className="sr-only">Email</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/20">
                            <Image
                                src="/placeholder.svg?height=320&width=320"
                                alt="Developer Portrait"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="bg-muted/50 py-16 md:py-24">
                <div className="container space-y-8">
                    <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">About Me</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                I'm a passionate full-stack developer with over 5 years of experience building web applications. I
                                specialize in JavaScript, React, Node.js, and modern web technologies.
                            </p>
                            <p className="text-muted-foreground">
                                My journey in software development started when I built my first website at 15. Since then, I've
                                worked with startups and established companies to create efficient, scalable, and user-friendly
                                applications.
                            </p>
                            <p className="text-muted-foreground">
                                When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                                projects.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-background p-4 rounded-lg border">
                                    <h3 className="font-medium">Education</h3>
                                    <p className="text-sm text-muted-foreground">B.S. Computer Science, University Name</p>
                                </div>
                                <div className="bg-background p-4 rounded-lg border">
                                    <h3 className="font-medium">Experience</h3>
                                    <p className="text-sm text-muted-foreground">5+ Years Professional Experience</p>
                                </div>
                                <div className="bg-background p-4 rounded-lg border">
                                    <h3 className="font-medium">Location</h3>
                                    <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                                </div>
                                <div className="bg-background p-4 rounded-lg border">
                                    <h3 className="font-medium">Languages</h3>
                                    <p className="text-sm text-muted-foreground">English, Spanish</p>
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