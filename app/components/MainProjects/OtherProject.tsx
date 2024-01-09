import SourceButton from "../Utils/SourceButton";
import DemoButton from "../Utils/DemoButton";

const OtherProject = ({
  title,
  description,
  sourceURL,
  demoURL,
}: {
  title: string;
  description: string;
  sourceURL: string;
  demoURL: string;
}) => {
  return (
    <div
      className="flex flex-col justify-between gap-4 rounded-xl
      border-white bg-white p-4 text-black transition-all hover:scale-105 
      "
    >
      <div>
        <h1 className="mb-3 font-bold lg:text-2xl">{title}</h1>
        <p className="text-xs">{description}</p>
      </div>
      <div className="flex flex-col gap-2">
        {sourceURL && <SourceButton href={sourceURL} />}
        {demoURL && <DemoButton href={demoURL} />}
      </div>
    </div>
  );
};

export default OtherProject;
