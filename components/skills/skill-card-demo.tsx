import SkillCard from "./skill-card"

export default function SkillCardDemo() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-6">
      <SkillCard
        title="React"
        description="Building interactive user interfaces with React and its ecosystem"
        proficiency={85}
        category="development"
        years={3}
      />

      <SkillCard
        title="UI/UX Design"
        description="Creating user-centered designs with Figma and Adobe Creative Suite"
        proficiency={75}
        category="design"
        years={4}
      />

      <SkillCard
        title="Node.js"
        description="Server-side JavaScript for building scalable backend services"
        proficiency={70}
        category="development"
        years={2}
      />

      <SkillCard
        title="TypeScript"
        description="Strongly typed programming for enhanced developer experience"
        proficiency={80}
        category="development"
        years={2}
      />

      <SkillCard
        title="Illustration"
        description="Digital illustration and graphic design for web and print"
        proficiency={65}
        category="design"
        years={5}
      />

      <SkillCard
        title="DevOps"
        description="CI/CD pipelines, containerization, and cloud infrastructure"
        proficiency={60}
        category="other"
        years={1}
      />
    </div>
  )
}
