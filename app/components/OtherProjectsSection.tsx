"use client";

import { useState } from "react";
import SkillIcons from "./SkillIcons";
import { FaTimes } from "react-icons/fa";
import OtherProject from "./OtherProject";

const OtherProjectsSection = ({
  skills,
  projects,
}: {
  skills: string[];
  projects: {
    title: string;
    description: string;
    highlightTags: string[];
    tags: string[];
    sourceURL: string;
    demoURL: string;
    image: string;
    main: boolean;
  }[];
}) => {
  const [query, setQuery] = useState<string[]>([]);

  const addToQuery = (skill: string) => {
    setQuery([...query, skill]);
  };

  const removeFromQuery = (skill: string) => {
    setQuery(query.filter((e) => e !== skill));
  };

  const filterQuery = (project: any) => {
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

  return (
    <div className="flex flex-col items-center sm:w-3/4 lg:w-1/2 p-2 transition-all">
      <div className="flex flex-row flex-wrap items-center justify-center gap-1">
        {skills.map((e, i) => (
          <div key={i}>
            {query.includes(e) ? (
              <div
                className="cursor-pointer rounded-xl border bg-white p-2 
                text-xs text-black sm:text-sm"
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
                className="cursor-pointer rounded-xl border p-2 text-xs transition-all 
                  hover:bg-white hover:text-black sm:text-sm"
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
      <div className="mt-10 transition-all grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects
          .filter(filterQuery)
          .map((e, i) => (
            <OtherProject
              key={i}
              title={e.title}
              description={e.description}
              sourceURL={e.sourceURL}
              demoURL={e.demoURL}
            />
          )) || <div>Nothing here</div>}
      </div>
    </div>
  );
};

export default OtherProjectsSection;
