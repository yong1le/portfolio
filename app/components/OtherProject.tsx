import Image from "next/image";
import SourceButton from "./SourceButton";
import DemoButton from "./DemoButton";

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
    <div className="flex flex-col justify-between rounded-xl border-white 
      bg-white p-4 text-black transition-all hover:scale-105 gap-4 
      ">
      <div>
        <h1 className="mb-3 font-bold lg:text-2xl">{title}</h1>
        <p className="text-xs">{description}</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-1">
        {sourceURL && <SourceButton href={sourceURL} />}
        {demoURL && <DemoButton href={demoURL} />}
      </div>
    </div>
  );
};

export default OtherProject;
