import Image from "next/image"
import { Code, ExternalLink } from "lucide-react"
import Link from "next/link"
import Index from "@/assets/recruitment/index.png"
import Clerk from "@/assets/recruitment/clerk.png"
import Detail from "@/assets/recruitment/detailone.png"
import Form from "@/assets/recruitment/form.png"
import Success from "@/assets/recruitment/successone.png"
import FooterPage from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function RecruitmentPage() {
    return (
        <div className="min-h-screen container p-6">
            {/* navbar */}
            <div className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-32">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                            <Code className="h-5 w-5 shrink-0" />
                            <span className="whitespace-nowrap">NAMFON S.</span>
                        </Link>

                        {/* moved nav here to align it to the right */}
                        <nav className="flex items-center space-x-4 ml-auto">
                            <Link
                                href="/"
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                            >
                                Home
                            </Link>
                            <a
                                href="https://github.com/NamfonSaphu/recruitment-system.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                            >
                                View Code
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 py-12">
                <section className="max-w-4xl mx-auto">
                    <div className="space-y-20">

                        <article className="space-y-6">
                            <div className="space-y-4 flex gap-4">
                                <h3 className="text-2xl font-bold">Career Application Platform</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    A simple and modern job application system that allows users to register, log in, and submit job applications through an online form. All applicant data is securely stored in Supabase, and the system is integrated with Clerk for authentication.
                                </p>
                                <Link href="https://requirement-job.vercel.app/" target="_blank">
                                    <Button size="sm">
                                        View Demo <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Key Features</h3>
                                <div>
                                    <p className="text-gray-500 leading-relaxed">
                                        <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                        Login and Registration: Users can sign up and log in securely using authentication powered by Clerk.
                                    </p>
                                    <p className="text-gray-500 leading-relaxed">
                                        <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                        Job Application Form: Applicants can easily fill out and submit a job application form online.
                                    </p>
                                    <p className="text-gray-500 leading-relaxed">
                                        <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                        Data Storage with Supabase: All application data is stored in Supabase for easy management and retrieval.
                                    </p>
                                </div>
                                <h3 className="text-xl font-semibold">Technical Stack</h3>
                                <div>
                                    <p className="text-gray-500 leading-relaxed">
                                        <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                        Next.js – Frontend Framework
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-500 leading-relaxed">
                                        <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                        Clerk – Authentication & user management
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-500 leading-relaxed">
                                        <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                        Supabase – Database & backend services
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-500 leading-relaxed">
                                        <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                        Prisma – Type-safe ORM for interacting with Supabase
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-500 leading-relaxed">
                                        <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                        Edge Store API – File upload & storage (e.g. resumes, cover letters)
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-2">Overview</h3>
                                <Image
                                    src={Index}
                                    alt="index"
                                    className="my-2 rounded-lg"
                                />

                            </div>
                            <div className="mb-8">
                                {/* Replaced Next.js Image with standard <img> tags and placeholder URLs */}
                                <h3 className="text-xl font-semibold mb-2">Authentication Page</h3>
                                <Image
                                    src={Clerk}
                                    alt="clerk"
                                    className="my-2 rounded-lg"
                                />
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-2">Form Apply</h3>
                                <Image
                                    src={Detail}
                                    alt="detail"
                                    className="my-2 rounded-lg"
                                />
                                <Image
                                    src={Form}
                                    alt="form"
                                    className="my-2 rounded-lg"
                                />
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-2">Apply Success</h3>

                                <Image
                                    src={Success}
                                    alt="detail"
                                    className="my-2 rounded-lg"
                                />
                            </div>
                        </article>

                    </div>
                </section>
            </main>
            <FooterPage />
        </div>
    )
}
