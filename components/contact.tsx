import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function ContactPage() {
    return (
        <div>
            <section id="contact" className="py-16 md:py-24">
                <div className="container space-y-8">
                    <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Get In Touch</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                I'm currently available for freelance work and full-time positions. If you have a project that needs
                                some creative work, or if you're looking to hire a developer, feel free to contact me.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-primary" />
                                    <span>email@example.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Linkedin className="h-4 w-4 text-primary" />
                                    <span>linkedin.com/in/username</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Github className="h-4 w-4 text-primary" />
                                    <span>github.com/username</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}