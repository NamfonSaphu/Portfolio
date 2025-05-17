import Image from "next/image"
import { Terminal } from "lucide-react"
import NavbarPage from "@/components/navbar"
import Index from '@/assets/index.png'
import { Alert, AlertTitle } from "@/components/ui/alert"
import { IoIosSettings } from "react-icons/io"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import FooterPage from "@/components/footer"

const images = [
  "/images/blog-reviews/category.png",
  "/images/blog-reviews/clerk.png",
  "/images/blog-reviews/create.png",
  "/images/blog-reviews/fav.png",
  "/images/blog-reviews/index.png",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen container p-6">
      <NavbarPage />
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <div className="space-y-20">

            <article className="space-y-6">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={Index}
                  alt="Blog post image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Blog Review</h3>
                <p className="text-gray-700 leading-relaxed">
                  blog-guide is a personal blog web application developed with Next.js. The project integrates modern technologies including react-leaflet for interactive map rendering, Supabase for real-time database management, and Clerk for secure user authentication and authorization.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-600">Key Features</h3>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    View Content: Users can conveniently browse and read various types of content.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    User Registration: Supports new user account creation and profile management.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Create Blog Reviews: Allows users to write and publish their own review articles.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Interactive Map: View maps to find locations or related information with ease.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Favorites: Save favorite pages or items for quick access later.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Search Functionality: Quickly search for content with relevant and accurate results.
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-slate-600">Technical Stack</h3>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    Frontend: Developed using Next.js, a React-based framework that supports Server-side Rendering (SSR), Static Site Generation (SSG), and built-in API routes. This enhances performance and SEO capabilities.
                  </p>
                  <Alert className="mt-4">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>npx create-next-app@latest</AlertTitle>
                  </Alert>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    Authentication & User Management: Utilized Clerk to handle user authentication, registration, session management, and user profiles, simplifying security and user flow implementation.
                  </p>
                  <Alert className="mt-4">
                    <IoIosSettings className="h-4 w-4" />
                    <AlertTitle>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</AlertTitle>
                    <AlertTitle>CLERK_SECRET_KEY</AlertTitle>
                  </Alert>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    Map Integration: Implemented react-leaflet to display interactive maps and retrieve geographic location data, supporting features like pin placement and coordinate tracking.
                  </p>
                  <Alert className="mt-4">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>npm install react@rc react-dom@rc leaflet</AlertTitle>
                    <AlertTitle>npm install react-leaflet@next</AlertTitle>
                  </Alert>
                </div>
              </div>
            </article>

            <Carousel className="w-full max-w-xl mx-auto">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-2">
                          <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            width={400}
                            height={300}
                            className="object-cover rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <article>
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/JFZ8eCpBlH8"
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
