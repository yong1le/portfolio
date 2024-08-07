import Link from "next/link";
import React from "react";
import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col gap-7 px-10 py-16">
      <h1 className="text-xl font-bold text-primary-content">Yong Le He</h1>
      <p className="text-sm">Full-Stack Developer</p>
      <div className="flex flex-row gap-2 text-xl">
        <Link
          className=""
          href="https://www.linkedin.com/in/yonglehe/"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link className="" href="https://github.com/yong1le" target="_blank">
          <FaGithub />
        </Link>
      </div>
      <p className="flex flex-row items-center gap-1 self-center">
        <FaCopyright />
        2024 All rights reserved
        <b>Yong Le He</b>
      </p>
    </div>
  );
};

export default Footer;
