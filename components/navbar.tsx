import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import { ThemeToggle } from "@/app/theme-toggle"

export default function NavbarPage() {
    return (
        <div className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="font-bold text-xl">
                    <Link href="/" className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        <span>NAMFON S.</span>
                    </Link>
                </div>
                <nav className="hidden md:flex gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link  href="#skill" className="text-sm font-medium hover:text-primary transition-colors">
                        Skills
                    </Link>
                    <Link href="#project" className="text-sm font-medium hover:text-primary transition-colors">
                        Projects
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Contact
                    </Link>
                </nav>
                <ThemeToggle />
            </div>
        </div>
    )
}