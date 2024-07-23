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
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="text-xs">{description}</p>
      </div>
      <div className="card-actions justify-end">
        {sourceURL && <SourceButton href={sourceURL} />}
        {demoURL && <DemoButton href={demoURL} />}
      </div>
    </div>
  );
};

export default OtherProject;
