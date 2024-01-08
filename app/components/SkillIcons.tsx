import {
  SiCss3,
  SiFirebase,
  SiFlask,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJunit5,
  SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaGolang, FaJava, FaAndroid, FaLock } from "react-icons/fa6";
import { RiSupabaseFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { GiQuickSlash } from "react-icons/gi";
import { GrTest } from "react-icons/gr";

const SkillIcons = ({ skill }: { skill: string }) => {
  let skillIcon;

  switch (skill) {
    case "NextJS":
      skillIcon = <SiNextdotjs />;
      break;
    case "Golang":
      skillIcon = <FaGolang />;
      break;
    case "Supabase":
      skillIcon = <RiSupabaseFill />;
      break;
    case "Auth":
      skillIcon = <FaLock />;
      break;
    case "Content Management":
      skillIcon = <MdManageAccounts />;
      break;
    case "JavaScript":
      skillIcon = <SiJavascript />;
      break;
    case "TypeScript":
      skillIcon = <SiTypescript />;
      break;
    case "HTML":
      skillIcon = <SiHtml5 />;
      break;
    case "CSS":
      skillIcon = <SiCss3 />;
      break;
    case "PostgreSQL":
      skillIcon = <SiPostgresql />;
      break;
    case "ReactJS":
      skillIcon = <SiReact />;
      break;
    case "Web":
      skillIcon = <HiOutlineStatusOnline />;
      break;
    case "TailwindCSS":
      skillIcon = <SiTailwindcss />;
      break;
    case "GIT":
      skillIcon = <SiGit />;
      break;
    case "Java":
      skillIcon = <FaJava />;
      break;
    case "Agile Development":
      skillIcon = <GiQuickSlash />;
      break;
    case "Testing":
      skillIcon = <GrTest />;
      break;
    case "Android":
      skillIcon = <FaAndroid />;
      break;
    case "JUnit":
      skillIcon = <SiJunit5 />;
      break;
    case "Firebase":
      skillIcon = <SiFirebase />;
      break;
    case "Python":
      skillIcon = <SiPython />;
      break;
    case "Pandas":
      skillIcon = <SiPandas />;
      break;
    case "Flask":
      skillIcon = <SiFlask />;
      break;
    case "NodeJS":
      skillIcon = <SiNodedotjs />;
      break;
    default:
      skillIcon = <></>;
  }

  return (
    <div className="flex flex-row gap-2">
      {skillIcon}
      {skill}
    </div>
  );
};

export default SkillIcons;
