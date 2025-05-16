import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
const page = () => {
  return (
    <div className="container p-4">
      <div className="space-y-4 flex flex-col items-center">
        <Image
          src="/images/blog.png"
          alt="blog"
          width={450}
          height={450}
          className="rounded-mbl object-cover"
        />
        <p className="text-2xl font-bold text-center">
          Blog Guide
        </p>
        <p className="text-muted-foreground text-center">
          blog-guide is a personal blog web application developed with Next.js. The project integrates modern technologies including react-leaflet for interactive map rendering, Supabase for real-time database management, and Clerk for secure user authentication and authorization.
        </p>
      </div>
    </div>


  )
}

export default page
