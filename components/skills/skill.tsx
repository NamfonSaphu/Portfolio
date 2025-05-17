"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code,
  Braces,
  Server,
  FileCode,
  Hash,
  Gamepad2,
  Gamepad,
  Palette,
  Layers,
  PenTool,
  Cpu,
  Brush,
} from "lucide-react"
import { motion } from "framer-motion"

export default function SkillPage() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const categories = [
    {
      name: "Programmer",
      icon: <Cpu className="h-6 w-6" />,
      color: "from-violet-500 to-indigo-600",
      textColor: "from-violet-600 to-indigo-600",
      hoverColor: "from-violet-50 to-indigo-50",
      borderColor: "border-violet-500",
      iconHoverColor: "text-violet-600",
      textHoverColor: "text-violet-700",
      skills: [
        { name: "Next.JS", icon: <Braces className="h-5 w-5" /> },
        { name: "React.JS", icon: <Code className="h-5 w-5" /> },
        { name: "TypeScript", icon: <FileCode className="h-5 w-5" /> },
        { name: "JavaScript", icon: <FileCode className="h-5 w-5" /> },
        { name: "Node.js", icon: <Server className="h-5 w-5" /> },
        { name: "C#", icon: <Hash className="h-5 w-5" /> },
      ],
    },
    {
      name: "Design",
      icon: <Brush className="h-6 w-6" />,
      color: "from-pink-500 to-rose-500",
      textColor: "from-pink-600 to-rose-600",
      hoverColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-500",
      iconHoverColor: "text-pink-600",
      textHoverColor: "text-pink-700",
      skills: [
        { name: "Illustrator", icon: <PenTool className="h-5 w-5" /> },
        { name: "Figma", icon: <Palette className="h-5 w-5" /> },
        { name: "Adobe XD", icon: <Layers className="h-5 w-5" /> },
      ],
    },
    {
      name: "Game Developer",
      icon: <Gamepad className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-600",
      textColor: "from-emerald-600 to-teal-600",
      hoverColor: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-500",
      iconHoverColor: "text-emerald-600",
      textHoverColor: "text-emerald-700",
      skills: [
        { name: "C#", icon: <Hash className="h-5 w-5" /> },
        { name: "Unity", icon: <Gamepad2 className="h-5 w-5" /> },
        { name: "Game Development", icon: <Gamepad className="h-5 w-5" /> },
      ],
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[1200px]">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
          >
            <Card className="h-full border-none shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-3 border-b">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${category.color} text-white`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle
                      className={`text-xl font-bold bg-gradient-to-r ${category.textColor} bg-clip-text text-transparent`}
                    >
                      {category.name}
                    </CardTitle>
                    <p className="text-xs text-slate-500 mt-1">Technical expertise</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-5">
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={`${category.name}-${skill.name}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.2 + index * 0.1 }}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                        hoveredSkill === `${category.name}-${skill.name}`
                          ? `bg-gradient-to-r ${category.hoverColor} border-l-4 ${category.borderColor}`
                          : "bg-slate-50 border-l-4 border-transparent"
                      }`}
                      onMouseEnter={() => setHoveredSkill(`${category.name}-${skill.name}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div
                        className={`p-2 rounded-md ${
                          hoveredSkill === `${category.name}-${skill.name}`
                            ? `bg-white ${category.iconHoverColor} shadow-sm`
                            : "bg-white text-slate-500"
                        } transition-colors duration-300`}
                      >
                        {skill.icon}
                      </div>
                      <span
                        className={`font-medium ${
                          hoveredSkill === `${category.name}-${skill.name}` ? category.textHoverColor : "text-slate-700"
                        } transition-colors duration-300`}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
