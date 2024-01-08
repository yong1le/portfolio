import DemoButton from "./DemoButton";
import SkillIcons from "./SkillIcons";
import SourceButton from "./SourceButton";

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
      } py-32 sm:py-72 flex flex-col justify-between gap-10`}
    >
      <div className="flex flex-col xl:w-1/2">
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
      <div className="flex justify-center items-center">
        <div className="rounded-2xl border-8 border-accent h-[200px] w-[250px] sm:h-[400px] sm:w-[600px]"></div>
      </div>
    </div>
  );
};

export default MainProject;
