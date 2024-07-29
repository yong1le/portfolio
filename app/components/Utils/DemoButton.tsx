import Link from "next/link";
import { FaDoorOpen } from "react-icons/fa";

const DemoButton = ({ href }: { href: string }) => {
  return (
    <Link href={href} target="_blank">
      <div className="btn glass btn-accent border-none bg-accent hover:scale-110 ">
        <FaDoorOpen />
        <p>Visit Page</p>
      </div>
    </Link>
  );
};

export default DemoButton;
