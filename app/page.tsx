import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import CertificationsSection from '@/components/CertificationsSection';
import GithubSection from '@/components/GithubSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <main className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-8">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ArchitectureSection />
      <CertificationsSection />
      <GithubSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
