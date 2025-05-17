import { Code, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function FooterPage() {
    return (
        <div>
            <footer className="border-t py-6 md:py-8">
                <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        <span className="font-medium">NAMFON S.</span>
                    </div>
                    <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} NAMFON. All rights reserved.</p>
                    <div className="flex gap-4">
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
            </footer>
        </div>
    )
}