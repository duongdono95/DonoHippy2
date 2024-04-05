import NavBar from "./_components/NavBar";
import SectionAboutMe from "./_components/SectionAboutMe";
import SectionExperience from "./_components/SectionExperience";
import SectionHome from "./_components/SectionHome";
import SectionProjects from "./_components/SectionProjects";
import SectionTechStack from "./_components/SectionTechStack";

export default function Home() {
  return (
    <div className="relative">
      <SectionHome />
      <NavBar />
      <SectionAboutMe />
      <SectionTechStack />
      <SectionExperience />
      <SectionProjects />
    </div>
  );
}
