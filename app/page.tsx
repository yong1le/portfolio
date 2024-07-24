import MainProjectsList from "./components/MainProjects/MainProjectsList";
import SkillsSection from "./components/Skills/SkillsSection";
import IntroSection from "./components/Intro/IntroSection";

import fs from "fs";
import yaml from "yaml";
import Header from "./components/Layout/Header";
import AboutSection from "./components/About/AboutSection";
import { IoCaretDownOutline } from "react-icons/io5";
import Footer from "./components/Layout/Footer";
import { Skill } from "./enums";

const Home = () => {
  const skills: Skill[] =
    yaml.parse(fs.readFileSync(process.cwd() + "/data/skills.yaml", "utf8")) ||
    [];

  const projects: ProjectType[] =
    yaml.parse(
      fs.readFileSync(process.cwd() + "/data/projects.yaml", "utf8"),
    ) || [];

  return (
    <div className="inset-0">
      <div className="flex h-[90vh] min-h-fit items-center text-white">
        <IntroSection>
          <Header
            aboutID="AboutSection"
            projectsID="ProjectsSection"
            skillsID="SkillsSection"
            triggerID="HeaderTrigger"
          />
        </IntroSection>
      </div>

      <div className="items-center rounded-t-[40px] bg-white px-10 text-black lg:px-48">
        <div id="HeaderTrigger" className={`animate-pulse py-8 text-accent`}>
          <IoCaretDownOutline className="h-6 w-full" />
        </div>
        <div id="AboutSection" className="h-screen">
          <AboutSection />
        </div>
        <div id="ProjectsSection">
          <MainProjectsList projects={projects} />
        </div>
      </div>

      <div
        id="SkillsSection"
        className="flex min-h-screen flex-col items-center justify-center bg-white py-10 text-black"
      >
        <SkillsSection skills={skills} projects={projects} />
      </div>

      <div className="h-[300px] bg-accent text-amber-800">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
