import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";

const Experience = async () => {
  const fullPath = process.cwd() + "/data/mpac/exp.md";
  const content = fs.readFileSync(fullPath, "utf8");

  return (
    <div className="flex h-full min-h-screen justify-center bg-secondary p-20">
      <div className="prose prose-a:text-primary">
        <MDXRemote source={content} />
      </div>
    </div>
  );
};

export default Experience;
