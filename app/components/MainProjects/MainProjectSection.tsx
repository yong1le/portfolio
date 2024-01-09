import React from "react";
import { IoCaretDownOutline } from "react-icons/io5";
import MainProject from "./MainProject";
import FadeIn from "../Utils/FadeIn";

const MainProjectSection = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <div>
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
  );
};

export default MainProjectSection;
