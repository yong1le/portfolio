import MainProjectSection from "./components/MainProjects/MainProjectSection";
import SkillsSection from "./components/Skills/SkillsSection";
import IntroSection from "./components/Intro/IntroSection";

import fs from "fs";
import yaml from "yaml";

const Home = () => {
  const skills: string[] =
    yaml.parse(fs.readFileSync(process.cwd() + "/data/skills.yaml", "utf8")) ||
    [];

  const descriptions: string[] =
    yaml.parse(
      fs.readFileSync(process.cwd() + "/data/descriptions.yaml", "utf8"),
    ) || [];

  const projects: ProjectType[] =
    yaml.parse(
      fs.readFileSync(process.cwd() + "/data/projects.yaml", "utf8"),
    ) || [];

  return (
    <div className="inset-0">
      <div className="flex h-[90vh] items-center p-3 text-white sm:justify-center sm:p-0">
        <IntroSection descriptions={descriptions} />
      </div>

      <div className="rounded-t-[40px] bg-white px-10 py-8 text-black lg:px-48">
        <MainProjectSection projects={projects} />
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center bg-white py-10 text-black">
        <SkillsSection skills={skills} projects={projects} />
      </div>
    </div>
  );
};

export default Home;
