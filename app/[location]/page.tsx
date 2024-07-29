import fs from "fs";
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
        href="../"
        className="btn btn-primary mb-10 text-xl font-bold hover:scale-110"
      >
        BACK
      </Link>
      <div className="prose">
        <h1 className="self-start">
          {params.location.replaceAll(/[-_]/g, " ").toUpperCase()}
        </h1>
        <ul>
          {experiences &&
            experiences.map((exp, i) => (
              <li key={i}>
                <Link href={`${baseDirectory}/${exp}`}>
                  {exp.replaceAll(/[-_]/g, " ").toUpperCase()}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Location;
