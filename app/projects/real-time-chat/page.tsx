import Image from "next/image"
import { Code, Terminal } from "lucide-react"
import { Alert, AlertTitle } from "@/components/ui/alert"

import Index from '@/assets/real-times/light-index.png'
import Chat from '@/assets/real-times/light-chatbot.png'

import { Card, CardContent } from "@/components/ui/card"
import FooterPage from "@/components/footer"
import Link from "next/link"


export default function RealTimePage() {
  return (
    <div className="min-h-screen container p-6">
      <div className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-32">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <Code className="h-5 w-5 shrink-0" />
              <span className="whitespace-nowrap">NAMFON S.</span>
            </Link>
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <div className="space-y-20">

            <article className="space-y-6">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={Chat}
                  alt="Blog post image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Real Time Chat App</h3>
                <p className="text-gray-500 leading-relaxed">
                  It's a real-time chat application developed using Next.js, TypeScript, and Socket.IO, focusing on real-time communication through WebSocket.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-sky-100">Technical Stack</h3>
                <div>
                  <p className="text-gray-500 leading-relaxed">
                    Next.js: A full-stack React framework for building scalable web applications
                  </p>
                  <Alert className="mt-4">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>npx create-next-app@latest</AlertTitle>
                  </Alert>
                </div>
                <div>
                  <p className="text-gray-500 leading-relaxed">
                    Socket.io: Enables real-time, bi-directional communication using WebSocket
                  </p>
                  <Alert className="mt-4">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>npm install socket.io</AlertTitle>
                  </Alert>
                </div>
                <div>
                  <p className="text-gray-500 leading-relaxed">
                    ShadCN UI – A flexible and developer-friendly UI component library
                  </p>
                  <Alert className="mt-4">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>npx shadcn@latest init</AlertTitle>
                  </Alert>
                </div>
              </div>
            </article>

            <article>
              <div>
                <Image
                  src={Index}
                  alt="index"
                  className="my-2 rounded-lg"
                />
                <Image
                  src={Chat}
                  alt="chat"
                  className="my-2 rounded-lg"
                />
              </div>
            </article>

            <article>
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/GFn0STVmIg0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </article>

          </div>
        </section>
      </main>
      <FooterPage />
    </div>
  )
}
