import Link from "next/link";
import { FaDoorOpen } from "react-icons/fa";

const DemoButton = ({ href }: { href: string }) => {
  return (
    <Link href={href} target="_blank">
      <div
        className="flex w-[150px] flex-row items-center justify-center gap-2 rounded-xl border 
        border-highlight p-2 text-highlight transition-all hover:bg-highlight hover:text-white
        hover:scale-110"
      >
        <FaDoorOpen />
        <p>Visit Page</p>
      </div>
    </Link>
  );
};

export default DemoButton;
