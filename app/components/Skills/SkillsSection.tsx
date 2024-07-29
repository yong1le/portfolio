"use client";

import { Dispatch, SetStateAction, useState } from "react";
import SkillIcons from "./SkillIcons";
import { FaTimes } from "react-icons/fa";
import OtherProject from "../MainProjects/OtherProject";
import { InView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { Skill } from "@/app/enums";

const SkillsSection = ({
  skills,
  projects,
}: {
  skills: Skill[];
  projects: ProjectType[];
}) => {
  const [query, setQuery] = useState<string[]>([]);

  const [popup, api] = useSpring(() => ({
    from: { transform: `translate(0, 200%)` },
  }));

  const handleViewChange = (inView: boolean) => {
    if (inView) {
      api.start({
        from: { transform: "translate(0, 200%)" },
        to: { transform: "translate(0, 0%)" },
      });
    } else {
      api.start({
        from: { transform: "translate(0, 0%)" },
        to: { transform: "translate(0, 200%)" },
      });
    }
  };

  return (
    <InView
      as="div"
      onChange={handleViewChange}
      className="flex flex-col items-center p-2 transition-all sm:w-3/4 lg:w-2/3"
    >
      <h1 className="pb-3 text-xl font-bold sm:text-4xl">Skills</h1>

      <Skills skills={skills} query={query} setQuery={setQuery} />

      <Projects projects={projects} query={query} />
      <animated.div
        style={popup}
        className={`${
          query.length === 0 && "opacity-0"
        } fixed bottom-0 right-0 m-10 transition-opacity`}
      >
        <ClearButton setQuery={setQuery} />
      </animated.div>
    </InView>
  );
};

const ClearButton = ({
  setQuery,
}: {
  setQuery: Dispatch<SetStateAction<string[]>>;
}) => {
  const clearQuery = () => {
    setQuery([]);
  };
  return (
    <button
      className="btn btn-circle btn-primary btn-lg border-none bg-primary shadow-sm shadow-black"
      onClick={clearQuery}
    >
      Clear
    </button>
  );
};

const Skills = ({
  skills,
  query,
  setQuery,
}: {
  skills: Skill[];
  query: string[];
  setQuery: Dispatch<SetStateAction<string[]>>;
}) => {
  const addToQuery = (skill: string) => {
    setQuery([...query, skill]);
  };

  const removeFromQuery = (skill: string) => {
    setQuery(query.filter((e) => e !== skill));
  };

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-1 sm:gap-2">
      {skills &&
        skills.map((e, i) => (
          <div key={i}>
            {query.includes(e) ? (
              <div
                className={`btn glass btn-secondary bg-secondary-content text-secondary`}
                onClick={() => removeFromQuery(e)}
              >
                <div className="flex flex-row items-center gap-2">
                  <FaTimes />
                  <p>{e}</p>
                </div>
              </div>
            ) : (
              <div
                key={i}
                className="btn btn-ghost"
                onClick={() => {
                  addToQuery(e);
                }}
              >
                <SkillIcons skill={e} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

const Projects = ({
  projects,
  query,
}: {
  projects: ProjectType[];
  query: string[];
}) => {
  const filterQuery = (project: ProjectType) => {
    // if (project.main) return false; // TODO: add back when I have more projects
    for (let i = 0; i < query.length; i++) {
      if (
        !(
          project.tags.includes(query[i]) ||
          project.highlightTags.includes(query[i])
        )
      ) {
        return false;
      }
    }
    return true;
  };

  const fallbackDivCSS =
    "flex items-center px-5 text-center sm:text-2xl font-bold pt-20";
  const queryResult = projects.filter(filterQuery);

  if (query.length === 0) {
    return (
      <div className={fallbackDivCSS}>
        <p>Select a skill to see where they are applied!</p>
      </div>
    );
  }

  if (queryResult.length === 0) {
    return (
      <div className={fallbackDivCSS}>
        <p>Not added yet!</p>
      </div>
    );
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {queryResult.map((e, i) => (
        <OtherProject
          key={i}
          title={e.title}
          description={e.description}
          sourceURL={e.sourceURL}
          demoURL={e.demoURL}
        />
      ))}
    </div>
  );
};

export default SkillsSection;
