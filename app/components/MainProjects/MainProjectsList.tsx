import React from "react";
import MainProject from "./MainProject";
import FadeIn from "../Utils/FadeIn";

const MainProjectsList = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <div className="flex flex-col items-center">
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

export default MainProjectsList;
