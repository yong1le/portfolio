import Link from "next/link";
import { FaGitAlt } from "react-icons/fa";

const SourceButton = ({ href }: { href: string }) => {
  return (
    <Link href={href} target="_blank">
      <div className="btn glass btn-primary border-none bg-primary hover:scale-110">
        <FaGitAlt />
        <p>Source Code</p>
      </div>
    </Link>
  );
};

export default SourceButton;
