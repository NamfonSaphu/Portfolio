import AboutMePage from "@/components/aboutme";
import ContactPage from "@/components/contact";
import FooterPage from "@/components/footer";
import NavbarPage from "@/components/navbar";
import ProjectPage from "@/components/project";
import SkillPage from "@/components/skill";

export default function Home() {
  return (
    <div className="container p-6">
      <NavbarPage />
      <AboutMePage />
      <SkillPage />
      <ProjectPage />
      <ContactPage />
      <FooterPage />
    </div>
  );
}
