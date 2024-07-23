import Image from "next/image";
import DemoButton from "../Utils/DemoButton";
import SkillIcons from "../Skills/SkillIcons";
import SourceButton from "../Utils/SourceButton";

const MainProject = ({
  title,
  description,
  highlightTags,
  sourceURL,
  demoURL,
  image,
  dir,
}: {
  title: string;
  description: string;
  highlightTags: string[];
  sourceURL: string | null;
  demoURL: string | null;
  image: string | null;
  dir: "LEFT" | "RIGHT";
}) => {
  return (
    <div
      className={`${
        dir === "LEFT" ? "xl:flex-row" : "xl:flex-row-reverse"
      } hero hero-content min-h-screen flex-col`}
    >
      <div>
        <div>
          <h1 className="mb-3 text-xl font-bold lg:text-4xl">{title}</h1>
          <p>{description}</p>
        </div>

        <div className="my-4 flex flex-row flex-wrap gap-6">
          {highlightTags.map((e, i) => (
            <SkillIcons skill={e} key={i} />
          ))}
        </div>
        <div
          className={`${
            dir === "LEFT" ? "xl:justify-start" : "xl:justify-end"
          } flex flex-row flex-wrap justify-center gap-5`}
        >
          {sourceURL && <SourceButton href={sourceURL} />}
          {demoURL && <DemoButton href={demoURL} />}
        </div>
      </div>
      <div>
        <div className="relative h-[300px] w-[300px] sm:h-[600px] sm:w-[600px]">
          <Image
            className="object-contain"
            src={image || "/"}
            fill={true}
            alt="Project Image"
          />
        </div>
      </div>
    </div>
  );
};

export default MainProject;
