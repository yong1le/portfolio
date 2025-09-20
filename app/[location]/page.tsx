import fs from "fs";
import LinkedList from "../components/Utils/LinkList";
import Link from "next/link";

const Location = async ({ params }: { params: { location: string } }) => {
  const locationsDirectory = process.cwd() + `/data/${params.location}`;
  const baseDirectory = locationsDirectory.split("/").pop();

  const experiences: string[] = [];
  fs.readdirSync(locationsDirectory).forEach((file) => {
    experiences.push(file.split(".")[0]);
  });

  return (
    <div>
      <Link
        href="/#ExperiencesSection"
        className="btn btn-primary mb-10 text-xl font-bold hover:scale-110"
      >
        BACK
      </Link>
      <div>
        <h1 className="self-start text-xl font-bold lg:text-4xl">
          {params.location.replaceAll(/[-_]/g, " ").toUpperCase()}
        </h1>
        <LinkedList links={experiences} linkPrefix={`/${baseDirectory}`} />
      </div>
    </div>
  );
};

export default Location;
