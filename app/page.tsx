import AboutMePage from "@/components/aboutme";
import ContactPage from "@/components/contact";
import FooterPage from "@/components/footer";
import NavbarPage from "@/components/navbar";
import ProjectPage from "@/components/project";
import SkillPage from "@/components/skills/skill";

export default function Home() {
  return (
    <div className="px-20">
      <NavbarPage />
      <AboutMePage />
      <SkillPage />
      <ProjectPage />
      <ContactPage />
      <FooterPage />
    </div>
  );
}
