import { Code, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function FooterPage() {
    return (
        <div>
            <footer className="border-t py-6 md:py-8">
                <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        <span className="font-medium">DevName</span>
                    </div>
                    <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DevName. All rights reserved.</p>
                    <div className="flex gap-4">
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
            </footer>
        </div>
    )
}