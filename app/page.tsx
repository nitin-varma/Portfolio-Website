import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import ArticlesSection from "@/components/articles-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import NetworkAnimation from "@/components/network-animation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <NetworkAnimation />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <ArticlesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
