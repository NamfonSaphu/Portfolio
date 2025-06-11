import { Code, ExternalLink, Terminal } from "lucide-react"
import { Alert, AlertTitle } from "@/components/ui/alert"
import FooterPage from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CryptoPage() {
    return (
        <div className="min-h-screen container p-6">
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
                                href="https://github.com/NamfonSaphu/crypto-exchange"
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

                        <div className="max-w-4xl mx-auto p-6">
                            <article className="space-y-6">
                                <div className="flex items-start justify-between gap-4 mb-8">
                                    <div className="space-y-4 flex-1">
                                        <h3 className="text-2xl font-bold">Crypto Exchange Backend API</h3>
                                        <p className="text-gray-500 leading-relaxed">
                                            For the Cryptocurrency Exchange System Users can register accounts, buy and sell cryptocurrencies (BTC,
                                            ETH, XRP, DOGE), use fiat currencies (THB, USD) to purchase coins from other users, transfer coins both
                                            within and outside the system, and record all transactions.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold">Technical Stack</h3>
                                    <div>
                                        <p className="text-gray-500 leading-relaxed">
                                            <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                            Docker & Docker Compose
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 leading-relaxed">
                                            <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                            Node.js (Used as the main platform for running backend logic and handling HTTP requests.)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 leading-relaxed">
                                            <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                            Express.js (Simplifies routing, middleware handling, and response management in your backend system.)
                                        </p>
                                        <Alert className="mt-4 text-slate-500 items-center">
                                            <Terminal className="h-4 w-4" />
                                            <AlertTitle>npm install express</AlertTitle>
                                        </Alert>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 leading-relaxed">
                                            <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                            Sequelize ORM (Used to define models, relationships, and perform CRUD operations in MySQL with ease.)
                                        </p>
                                        <Alert className="mt-4 text-slate-500 items-center">
                                            <Terminal className="h-4 w-4" />
                                            <AlertTitle>npm install --save sequelize</AlertTitle>
                                        </Alert>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 leading-relaxed">
                                            <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                            mysql2 (Acts as the low-level connector between Node.js and the MySQL database, used internally by
                                            Sequelize.)
                                        </p>
                                        <Alert className="mt-4 text-slate-500 items-center">
                                            <Terminal className="h-4 w-4" />
                                            <AlertTitle>npm install --save mysql2</AlertTitle>
                                        </Alert>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">How to Run (Using Docker)</h3>
                                        <h3 className="text-lg font-semibold">Prerequisites</h3>
                                        <h3 className="text-base">Make sure the following tools are installed before running the project:</h3>
                                        <div>
                                            <p className="text-gray-500 leading-relaxed">
                                                <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                                Docker Desktop (for Windows/Mac)
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 leading-relaxed">
                                                <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                                Git
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 leading-relaxed">
                                                <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                                Node.js (version 16 or higher is recommended)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">One-Step Setup Script</h3>
                                        <div>
                                            <Alert className="mt-4 text-slate-500">
                                                <Terminal className="h-4 w-4" />
                                                <div className="space-y-1">
                                                    <AlertTitle>git clone https://github.com/NamfonSaphu/crypto-exchange.git</AlertTitle>
                                                    <AlertTitle>cd crypto-exchange</AlertTitle>
                                                    <AlertTitle>docker compose up -d</AlertTitle>
                                                    <AlertTitle>npm install</AlertTitle>
                                                    <AlertTitle>node seed/seed.js</AlertTitle>
                                                </div>
                                            </Alert>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                    </div>
                </section>
            </main>
            <FooterPage />
        </div>
    )
}
