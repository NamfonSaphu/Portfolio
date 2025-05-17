"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Terminal } from "lucide-react"

interface SkillCardProps {
  title: string
  description: string
  proficiency: number
  category: "design" | "development" | "other"
  years?: number
}

export default function SkillCard({
  title = "React",
  description = "Building interactive user interfaces with React and its ecosystem",
  proficiency = 85,
  category = "development",
  years = 3,
}: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = () => {
    switch (category) {
      case "design":
        return <Palette className="h-5 w-5" />
      case "development":
        return <Code className="h-5 w-5" />
      default:
        return <Terminal className="h-5 w-5" />
    }
  }

  const getCategoryColor = () => {
    switch (category) {
      case "design":
        return "bg-pink-100 text-pink-800 hover:bg-pink-200"
      case "development":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <Card
      className="w-full transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {getIcon()}
            <CardTitle>{title}</CardTitle>
          </div>
          <Badge variant="outline" className={`${getCategoryColor()} transition-colors`}>
            {category}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Proficiency</span>
            <span className="font-medium">{proficiency}%</span>
          </div>
          <Progress value={isHovered ? proficiency : 0} className="h-2 transition-all duration-1000 ease-out" />
          <div className="text-sm text-muted-foreground pt-1">
            {years} {years === 1 ? "year" : "years"} of experience
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
