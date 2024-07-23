"use client";

import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const Header = ({
  aboutID,
  projectsID,
  skillsID,
  triggerID,
}: {
  aboutID: string;
  projectsID: string;
  skillsID: string;
  triggerID: string;
}) => {
  const gotoAbout = () => {
    const elm = document.querySelector(`#${aboutID}`);
    elm?.scrollIntoView({ behavior: "smooth" });
  };

  const gotoProjects = () => {
    const elm = document.querySelector(`#${projectsID}`);
    elm?.scrollIntoView({ behavior: "smooth" });
  };

  const gotoSkills = () => {
    const elm = document.querySelector(`#${skillsID}`);
    elm?.scrollIntoView({ behavior: "smooth" });
  };

  const [slideIn, api] = useSpring(() => { });

  const [isFullHeader, setIsFullHeader] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const showFullHeader = () => {
      const elm = document.querySelector(`#${triggerID}`);
      const rect = elm?.getBoundingClientRect();

      if (rect?.top && rect?.top <= 0) {
        setIsFullHeader((prev) => {
          if (!prev) {
            api.start({
              from: { transform: "translate(0, -100%)" },
              to: { transform: "translate(0, 0%)" },
            });
          }
          return true;
        });
      } else {
        setIsFullHeader(false);
      }
    };

    showFullHeader();
    document.addEventListener("scroll", showFullHeader);
    return () => {
      document.removeEventListener("scroll", showFullHeader);
    };
  }, [setIsFullHeader, triggerID, api]);

  useEffect(() => {
    const handleHeaderVisible = () => {
      if (window.innerWidth >= 550) setHeaderVisible(true);
      else setHeaderVisible(false);
    };
    handleHeaderVisible();
    window.addEventListener("resize", handleHeaderVisible);

    return () => {
      window.removeEventListener("resize", handleHeaderVisible);
    };
  }, [setHeaderVisible]);

  if (isFullHeader && headerVisible) {
    return (
      <animated.div
        style={slideIn}
        className="fixed left-0 top-0 z-50 flex w-full flex-row items-end justify-between bg-white p-10 text-black"
      >
        <h1 className="text-xl font-bold">Yong Le He</h1>

        <div className="flex flex-row items-end gap-6">
          <button
            className="transition-all hover:scale-110"
            onClick={gotoAbout}
          >
            About Me
          </button>
          <button
            className="transition-all hover:scale-110"
            onClick={gotoProjects}
          >
            Projects
          </button>
          <button
            className="transition-all hover:scale-110"
            onClick={gotoSkills}
          >
            Skills
          </button>
        </div>
      </animated.div>
    );
  }

  return (
    <div
      className="flex flex-row justify-between underline decoration-yellow-400 
      underline-offset-4 sm:justify-start sm:gap-10 sm:text-xl decoration-4"
    >
      <button className="transition-all hover:scale-110" onClick={gotoAbout}>
        About Me
      </button>
      <button className="transition-all hover:scale-110" onClick={gotoProjects}>
        Projects
      </button>
      <button className="transition-all hover:scale-110" onClick={gotoSkills}>
        Skills
      </button>
    </div>
  );
};

export default Header;
