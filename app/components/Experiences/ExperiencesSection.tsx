import fs from "fs";
import LinkedList from "../Utils/LinkList";

const ExperiencesSection = () => {
  const experiences: string[] = [];
  fs.readdirSync(process.cwd() + "/data", { withFileTypes: true }).forEach(
    (file) => {
      if (file.isDirectory()) {
        experiences.push(file.name);
      }
    },
  );

  return (
    <div className="flex min-h-screen flex-col justify-center bg-secondary text-secondary-content">
      <h1 className="text-xl font-bold lg:text-4xl">Experiences</h1>
      <LinkedList links={experiences} linkPrefix="" />
    </div>
  );
};

export default ExperiencesSection;
