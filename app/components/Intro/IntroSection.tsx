import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaLinkedin, FaFilePdf, FaGithub } from "react-icons/fa6";

// children prop should only be used for header
const IntroSection = ({ children }: { children: React.ReactNode }) => {
  const buttonFormat =
    "sm:text-xl text-center py-4 rounded-xl hover:scale-110 cursor-pointer transition-all w-full py-5 max-w-[400px]";
  const linkFormat = "flex flex-row items-center justify-center gap-3";

  return (
    <div className="flex flex-col gap-10 px-6 transition-all lg:w-full lg:flex-row lg:items-center lg:justify-center lg:gap-16">
      <div className="lg:w-1/3">
        <p className="text-xs text-amber-800 sm:text-lg">Hi, my name is</p>
        <h1 className="text-5xl font-bold sm:text-7xl lg:text-8xl">
          Yong Le He
        </h1>
        <p className="py-2 text-xs text-amber-800 sm:text-lg">
          A computer science student at the University of Toronto passionate
          about software development.
        </p>
        <div className="max-w-[400px]">{children}</div>
      </div>
      <div className="flex flex-col items-start gap-3 lg:gap-5">
        <Image
          className="hidden lg:block"
          src="/images/undraw.svg"
          width={400}
          height={400}
          alt="alt"
        />
        <div className={`${buttonFormat} bg-highlight`}>
          <Link className={`${linkFormat}`} href="/resume.pdf" target="_blank">
            <FaFilePdf />
            <p>Resume</p>
          </Link>
        </div>
        <div className={`${buttonFormat} bg-blue-800`}>
          <Link
            className={`${linkFormat}`}
            href="https://www.linkedin.com/in/yonglehe/"
            target="_blank"
          >
            <FaLinkedin />
            <p>LinkedIn</p>
          </Link>
        </div>
        <div className={`${buttonFormat} bg-[#000000]`}>
          <Link
            className={`${linkFormat}`}
            href="https://github.com/yong1le"
            target="_blank"
          >
            <FaGithub />
            <p>Github</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
