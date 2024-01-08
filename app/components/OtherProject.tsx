import Image from "next/image";

const OtherProject = ({
  title,
  description,
  sourceURL,
  demoURL,
  image,
}: {
  title: string;
  description: string;
  sourceURL: string;
  demoURL: string;
  image: string;
}) => {
  return (
    <div className="relative h-[300px] border rounded-xl">
      <Image src={image || "/"} fill={true} alt="Project Image" />
      <div className="absoute bottom-0 left-0 bg-black">
        <h2>{title}</h2>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default OtherProject;
