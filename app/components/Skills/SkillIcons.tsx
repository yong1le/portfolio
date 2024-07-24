import {
  SiC,
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiJunit5,
  SiMongodb,
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
import { ImFileEmpty } from "react-icons/im";
import { BiSolidMobile } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { Skill } from "../../enums";
import React from "react";

const SkillIcons = ({ skill }: { skill: Skill }) => {
  let skillIcon: JSX.Element;

  switch (skill) {
    case Skill.NEXT_JS:
      skillIcon = <SiNextdotjs />;
      break;
    case Skill.GOLANG:
      skillIcon = <FaGolang />;
      break;
    case Skill.SUPABASE:
      skillIcon = <RiSupabaseFill />;
      break;
    case Skill.AUTH:
      skillIcon = <FaLock />;
      break;
    case Skill.CONTENT_MANAGEMENT:
      skillIcon = <MdManageAccounts />;
      break;
    case Skill.JAVASCRIPT:
      skillIcon = <SiJavascript />;
      break;
    case Skill.TYPESCRIPT:
      skillIcon = <SiTypescript />;
      break;
    case Skill.HTML:
      skillIcon = <SiHtml5 />;
      break;
    case Skill.CSS:
      skillIcon = <SiCss3 />;
      break;
    case Skill.POSTGRESQL:
      skillIcon = <SiPostgresql />;
      break;
    case Skill.REACT_JS:
      skillIcon = <SiReact />;
      break;
    case Skill.WEB:
      skillIcon = <HiOutlineStatusOnline />;
      break;
    case Skill.TAILWIND:
      skillIcon = <SiTailwindcss />;
      break;
    case Skill.GIT:
      skillIcon = <SiGit />;
      break;
    case Skill.JAVA:
      skillIcon = <FaJava />;
      break;
    case Skill.AGILE:
      skillIcon = <GiQuickSlash />;
      break;
    case Skill.TESTING:
      skillIcon = <GrTest />;
      break;
    case Skill.ANDROID:
      skillIcon = <FaAndroid />;
      break;
    case Skill.JUNIT:
      skillIcon = <SiJunit5 />;
      break;
    case Skill.FIREBASE:
      skillIcon = <SiFirebase />;
      break;
    case Skill.PYTHON:
      skillIcon = <SiPython />;
      break;
    case Skill.PANDAS:
      skillIcon = <SiPandas />;
      break;
    case Skill.FLASK:
      skillIcon = <SiFlask />;
      break;
    case Skill.NODE_JS:
      skillIcon = <SiNodedotjs />;
      break;
    case Skill.C:
      skillIcon = <SiC />;
      break;
    case Skill.CPP:
      skillIcon = <SiCplusplus />;
      break;
    case Skill.BASH:
      skillIcon = <SiGnubash />;
      break;
    case Skill.MONGODB:
      skillIcon = <SiMongodb />;
      break;
    case Skill.EXPRESS_JS:
      skillIcon = <SiExpress />;
      break;
    case Skill.MOBILE_DEVELOPMENT:
      skillIcon = <BiSolidMobile />;
      break;
    case Skill.REACT_NATIVE:
      skillIcon = <TbBrandReactNative />;
      break;
    default:
      skillIcon = <ImFileEmpty />;
  }

  return (
    <div className="flex flex-row items-center gap-2">
      {skillIcon}
      <p>{skill.valueOf()}</p>
    </div>
  );
};

export default SkillIcons;
