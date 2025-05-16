import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Database, FileCode2, Globe, Server, Terminal } from "lucide-react"

interface Skill {
    name: string
    icon: React.ReactNode
    category: string
}

export default function SkillPage() {
    return (
        <div className="container mx-auto py-10 px-4">
            <section id="skill">
                <div className="space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Programming Skills</h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            A showcase of my programming language proficiency and technical expertise
                        </p>
                    </div>

                    <Tabs defaultValue="all" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 md:grid-cols-5">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="frontend">Frontend</TabsTrigger>
                            <TabsTrigger value="backend">Backend</TabsTrigger>
                            <TabsTrigger value="database">Database</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all" className="mt-6">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {programmingSkills.map((skill) => (
                                    <SkillCard key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="frontend" className="mt-6">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {programmingSkills
                                    .filter((skill) => skill.category === "frontend")
                                    .map((skill) => (
                                        <SkillCard key={skill.name} skill={skill} />
                                    ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="backend" className="mt-6">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {programmingSkills
                                    .filter((skill) => skill.category === "backend")
                                    .map((skill) => (
                                        <SkillCard key={skill.name} skill={skill} />
                                    ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="database" className="mt-6">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {programmingSkills
                                    .filter((skill) => skill.category === "database")
                                    .map((skill) => (
                                        <SkillCard key={skill.name} skill={skill} />
                                    ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="other" className="mt-6">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {programmingSkills
                                    .filter((skill) => skill.category === "other")
                                    .map((skill) => (
                                        <SkillCard key={skill.name} skill={skill} />
                                    ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </div>
    )
}

function SkillCard({ skill }: { skill: Skill }) {
    return (
        <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-md bg-primary/10 p-2">{skill.icon}</div>
                <CardTitle className="text-xl">{skill.name}</CardTitle>
            </CardHeader>
        </Card>
    )
}

const programmingSkills = [
    {
        name: "JavaScript",
        icon: <FileCode2 className="h-5 w-5" />,
        category: "frontend",
    },
    {
        name: "MYSQL",
        icon: <Database className="h-5 w-5" />,
        category: "database",
    },
    {
        name: "HTML/CSS",
        icon: <Globe className="h-5 w-5" />,
        category: "frontend",
    },
    {
        name: "TypeScript",
        icon: <FileCode2 className="h-5 w-5" />,
        category: "frontend",
    },
    {
        name: "Node.js",
        icon: <Server className="h-5 w-5" />,
        category: "backend",
    },
    {
        name: "React",
        icon: <Code2 className="h-5 w-5" />,
        category: "frontend",
    },
    {
        name: "Next.js",
        icon: <Code2 className="h-5 w-5" />,
        category: "frontend",
    },
    {
        name: "MongoDB",
        icon: <Database className="h-5 w-5" />,
        category: "database",
    },
]
