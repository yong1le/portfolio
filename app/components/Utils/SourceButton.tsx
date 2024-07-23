import Link from "next/link";
import { FaGitAlt } from "react-icons/fa";

const SourceButton = ({ href }: { href: string }) => {
  return (
    <Link href={href} target="_blank">
      <div className="btn glass border-none bg-accent text-white hover:scale-110 hover:bg-accent">
        <FaGitAlt />
        <p>Source Code</p>
      </div>
    </Link>
  );
};

export default SourceButton;
