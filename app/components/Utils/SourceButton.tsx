import Link from "next/link";
import { FaGitAlt } from "react-icons/fa";

const SourceButton = ({ href }: { href: string }) => {
  return (
    <Link href={href} target="_blank">
      <div
        className="flex w-[150px] flex-row items-center justify-center gap-2 rounded-xl border
        border-accent p-2 transition-all hover:scale-110 bg-accent text-white"
      >
        <FaGitAlt />
        <p>Source Code</p>
      </div>
    </Link>
  );
};

export default SourceButton;
