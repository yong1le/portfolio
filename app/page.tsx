import { IoCaretDownOutline } from "react-icons/io5";
import Description from "./components/Description";
import MainProject from "./components/MainProject";
import SkillsSection from "./components/SkillsSection";
import FadeIn from "./components/FadeIn";

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
        <div>
          <p>Hi, my name is</p>
          <h1 className="py-4 text-3xl font-bold sm:text-6xl">Yong Le He</h1>
          <Description descriptions={descriptions} />
        </div>
      </div>

      <div className="rounded-t-[40px] bg-white px-10 py-8 text-black lg:px-48">
        <div className={`animate-pulse text-accent`}>
          <IoCaretDownOutline className="h-6 w-full" />
        </div>
        {projects
          .filter((e) => e.main)
          .map((e, i) => (
            <FadeIn key={i}>
              <MainProject
                title={e.title}
                description={e.description}
                highlightTags={e.highlightTags}
                sourceURL={e.sourceURL}
                demoURL={e.demoURL}
                image={e.image}
                dir={i % 2 == 0 ? "LEFT" : "RIGHT"}
              />
            </FadeIn>
          ))}
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center bg-white py-10 text-black">
        <h1 className="pb-3 text-xl font-bold sm:text-4xl">Skills</h1>
        <p className="px-1 pb-3 text-center">
          Hint: Select a skill to see where they are applied!
        </p>
        <SkillsSection skills={skills} projects={projects} />
      </div>
    </div>
  );
};

export default Home;
