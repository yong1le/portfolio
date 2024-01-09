import React from "react";
import Description from "./Description";

const IntroSection = ({ descriptions }: { descriptions: string[] }) => {
  return (
    <div>
      <p>Hi, my name is</p>
      <h1 className="py-4 text-3xl font-bold sm:text-6xl">Yong Le He</h1>
      <Description descriptions={descriptions} />
    </div>
  );
};

export default IntroSection;
