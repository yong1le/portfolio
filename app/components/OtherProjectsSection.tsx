"use client";

import { useState } from "react";
import SkillIcons from "./SkillIcons";
import { FaTimes } from "react-icons/fa";

const OtherProjectsSection = ({
  skills,
  projects,
}: {
  skills: string[];
  projects: any[];
}) => {
  const [query, setQuery] = useState<string[]>([]);

  const addToQuery = (skill: string) => {
    setQuery([...query, skill]);
  };

  const removeFromQuery = (skill: string) => {
    setQuery(query.filter((e) => e !== skill));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row flex-wrap items-center justify-center gap-1 sm:w-3/4 lg:w-1/2">
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
    </div>
  );
};

export default OtherProjectsSection;
