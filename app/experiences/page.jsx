import React from "react";

import fs from "fs";
import { remark } from "remark";
import html from "remark-html";

const Experience = async () => {
  async function getPostData() {
    const fullPath = process.cwd() + "/data/mpac/exp.md";
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(fileContents);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return contentHtml;
  }

  const md = await getPostData();

  return (
    <div className="h-full min-h-screen bg-white px-10 py-10 lg:px-48">
      <div
        className="lg:prose-xl prose-headings:text-black prose-p:text-black prose-a:text-blue-800 prose-a:underline"
        dangerouslySetInnerHTML={{ __html: md }}
      ></div>
    </div>
  );
};

export default Experience;
