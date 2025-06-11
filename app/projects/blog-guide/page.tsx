import Image from "next/image"
import { Code } from "lucide-react"
import Detail from "@/assets/blog-reviews/detail.png"
import Clerk from "@/assets/blog-reviews/clerk.png"
import FooterPage from "@/components/footer"
import Category from "@/assets/blog-reviews/category.png"
import Index from '@/assets/blog-reviews/index.png'
import Create from '@/assets/blog-reviews/create.png'
import Fav from '@/assets/blog-reviews/fav.png'
import Link from "next/link"

export default function BlogPage() {
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
                href="https://github.com/NamfonSaphu/blog-guide.git"
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
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Blog Review</h3>
                <p className="text-gray-500 leading-relaxed">
                  blog-guide is a personal blog web application developed with Next.js. The project integrates modern technologies including react-leaflet for interactive map rendering, Supabase for real-time database management, and Clerk for secure user authentication and authorization.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Features</h3>
                <div>
                  <p className="text-gray-500 leading-relaxed">
                    View Content: Users can conveniently browse and read various types of content.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    User Registration: Supports new user account creation and profile management.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    Create Blog Reviews: Allows users to write and publish their own review articles.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    Interactive Map: View maps to find locations or related information with ease.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    Favorites: Save favorite pages or items for quick access later.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    Search Functionality: Quickly search for content with relevant and accurate results.
                  </p>
                </div>
                <h3 className="text-xl font-semibold">Technical Stack</h3>
                <div>
                  <p className="text-gray-500 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    Frontend: Developed using Next.js, a React-based framework that supports Server-side Rendering (SSR), Static Site Generation (SSG), and built-in API routes. This enhances performance and SEO capabilities.
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    Backend: Developed using Node.js, providing a robust runtime environment for handling asynchronous operations, REST API endpoints, and business logic with high performance and scalability.
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    Database: Supabase serves as the primary PostgreSQL database with built-in RESTful APIs, authentication, and real-time features. Prisma is used as a type-safe ORM to manage queries, relationships, and migrations efficiently.
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    Authentication & User Management: Utilized Clerk to handle user authentication, registration, session management, and user profiles, simplifying security and user flow implementation.
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 leading-relaxed">
                    <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    Map Integration: Implemented react-leaflet to display interactive maps and retrieve geographic location data, supporting features like pin placement and coordinate tracking.
                  </p>
                </div>
              </div>
            </article>

            <article>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Authentication Page</h3>
                <p className="text-gray-500 leading-relaxed mt-2">
                  A page for managing user authentication, such as registration, login, and profile management.
                </p>
                <Image
                  src={Clerk}
                  alt="clerk"
                  className="my-2 rounded-lg"
                />

              </div>
              <div className="mb-8">
                {/* Replaced Next.js Image with standard <img> tags and placeholder URLs */}
                <h3 className="text-xl font-semibold mb-2">Overview</h3>
                <p className="text-gray-500 leading-relaxed mt-2">
                  The main application page displaying all reviews or recommended content.
                </p>
                <Image
                  src={Index}
                  alt="index"
                  className="my-2 rounded-lg"
                />
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Create Landmark Page</h3>
                <p className="text-gray-500 leading-relaxed mt-2">
                  A page for users to create or add new landmarks, including detailed information.
                </p>
                <Image
                  src={Create}
                  alt="create"
                  className="my-2 rounded-lg"
                />
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Blog Detail Page</h3>
                <p className="text-gray-500 leading-relaxed mt-2">
                  A detail page for each article or review, showing all information related to the content.
                </p>
                <Image
                  src={Detail}
                  alt="detail"
                  className="my-2 rounded-lg"
                />
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Favorites Page</h3>
                <p className="text-gray-500 leading-relaxed mt-2">
                  A page displaying the reviews or content that the user has liked and saved.
                </p>
                <Image
                  src={Fav}
                  alt="fav"
                  className="my-2 rounded-lg"
                />
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Category Page</h3>
                <p className="text-gray-500 leading-relaxed mt-2">
                  A page showing categories of reviews or content, helping users easily find content by type.
                </p>
                <Image
                  src={Category}
                  alt="category"
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
