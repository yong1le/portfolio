import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

const Experience = ({
  params,
}: {
  params: { location: string; experience: string };
}) => {
  const contentPath =
    process.cwd() + `/data/${params.location}/${params.experience}.md`;
  const content = fs.readFileSync(contentPath, "utf8");

  return (
    <div className="flex w-full flex-col">
      <Link
        href={`/${params.location}`}
        className="btn btn-primary mb-10 self-start text-xl font-bold hover:scale-110"
      >
        BACK
      </Link>
      <div className="w-fit self-center">
        <div className="prose prose-a:text-primary prose-img:rounded-xl prose-img:border prose-img:border-primary">
          <MDXRemote source={content} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
