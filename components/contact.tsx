import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div>
            <section id="contact" className="py-16 md:py-24">
                <div className="container space-y-8">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Get In Touch</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                I'm a recent graduate actively seeking a full-time opportunity in a developer role. If you're hiring or know of any openings, feel free to get in touch.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-primary" />
                                    <span>namfonsaphu@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Linkedin className="h-4 w-4 text-primary" />
                                    <a href="https://www.linkedin.com/in/namfon-saphu/">https://www.linkedin.com/in/namfon-saphu/</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Github className="h-4 w-4 text-primary" />
                                    <a href="https://github.com/namfonsaphu">https://github.com/namfonsaphu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}