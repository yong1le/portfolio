import Link from "next/link";

const LinkedList = ({
  links,
  linkPrefix,
}: {
  links: string[];
  linkPrefix: string;
}) => {
  const transformWord = (word: string) => {
    return word
      .replaceAll(/[-_]/g, " ")
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1))
      .join(" ");
  };
  return (
    <ul>
      {links &&
        links.map((link, i) => (
          <li
            key={i}
            className="mt-10 leading-loose underline decoration-yellow-400 decoration-4 underline-offset-8 transition-all duration-500 hover:pl-10"
          >
            <Link href={`${linkPrefix}/${link}`} className="lg:text-2xl">
              {transformWord(link)}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default LinkedList;
