import Link from "next/link";
import { FaDoorOpen } from "react-icons/fa";

const DemoButton = ({ href }: { href: string }) => {
  return (
    <Link href={href} target="_blank">
      <div className="btn glass border-none bg-highlight text-white hover:scale-110 hover:bg-highlight">
        <FaDoorOpen />
        <p>Visit Page</p>
      </div>
    </Link>
  );
};

export default DemoButton;
