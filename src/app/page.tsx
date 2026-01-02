import ProfileSidebar from "@/components/ProfileSidebar";
import BentoStats from "@/components/BentoStats";
import ScrollingText from "@/components/ScrollingText";
import ProjectGrid from "@/components/ProjectGrid";
import ExperienceList from "@/components/ExperienceList";
import ToolsGrid from "@/components/ToolsGrid";
import BlogList from "@/components/BlogList";
import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-sawad-black">
      {/* Split Layout Container */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar - Fixed Profile */}
        <div className="lg:w-[400px] xl:w-[450px] lg:flex-shrink-0 border-b lg:border-b-0 lg:border-r border-sawad-border">
          <ProfileSidebar />
        </div>

        {/* Right Content - Scrollable */}
        <div className="flex-1 overflow-hidden">
          <AboutSection />
          <ScrollingText />
          <BentoStats />
          <ProjectGrid />
          <ExperienceList />
          <ToolsGrid />
          <BlogList />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
