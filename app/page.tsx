import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import Description from "./components/Description";
import MainProject from "./components/MainProject";
import OtherProjectsSection from "./components/OtherProjectsSection";

const descriptions = [
  "A computer science student at the University of Toronto",
  "A full-stack developer",
];

const projects = [
  {
    title: "Thomp",
    description: `
      A full stack social media platform built using a Next.js and JavaScript
      frontend coupled with a dedicated Golang backend. The app features
      JWT-based server authentication and uses Supabase services for cloud database
      and storage hosting.
    `,
    highlightTags: ["NextJS", "Golang", "Supabase", "Auth"],
    tags: [
      "HTML",
      "CSS",
      "SQL",
      "PostgreSQL",
      "JavaScript",
      "ReactJS",
      "Web",
      "TailwindCSS",
      "GIT",
    ],
    sourceURL: "https://github.com/yong1le/thomp",
    demoURL: "https://thomp.vercel.app/home",
    image: "/images/thomp.gif",
    main: true,
  },
  {
    title: "Asian Christian Fellowship Club Website",
    description: `
      A landing page for a campus group at the University of Toronto Scarborough.
      The website is built on Next.js using TypeScript, and integrates with a content
      management system for creating and managing content on the website.
      `,
    highlightTags: ["NextJS", "Content Management", "TypeScript"],
    tags: ["HTML", "CSS", "JavaScript", "ReactJS", "TailwindCSS", "GIT", "Web"],
    sourceURL: "https://github.com/yong1le/utscacf-website",
    demoURL: "https://utscacf.vercel.app/home",
    image: "/images/acf.png",
    main: true,
  },
  {
    title: "Javan's Mall",
    description: `
      An E-commerce mobile application built with Java and Android Studio.
      Worked in a team of 6, utilizing the agile methodology for
      rapid and flexible development.
    `,
    highlightTags: ["Java", "Agile Development", "Testing", "Android"],
    tags: ["Mockito", "JUnit", "GIT", "Android", "Firebase"],
    sourceURL: "https://github.com/michaelz04/Mall-App",
    demoURL: "",
    image: "/images/mall.png",
    main: true,
  },
  {
    title: "College Coin",
    description: `A student loan marketplace app to promote affordable
                  education. Won a top 50 placement in Hack the Valley 7.`,
    highlightTags: [],
    tags: [
      "NextJS",
      "ReactJS",
      "JavaScript",
      "MongoDB",
      "HTML",
      "CSS",
      "TailwindCSS",
      "Web",
    ],
    sourceURL: "https://github.com/yong1le/college-coin",
    demoURL: "",
    image: "",
    main: false,
  },
  {
    title: "Battery Life Predictor",
    description: `A regression model trained in Python that predicts the remaining lifetime
    of a battery. Won 6th place in UTSC's Datathon.`,
    highlightTags: [""],
    tags: ["Python", "Pandas", "Matplotlib"],
    sourceURL: "",
    demoURL: "",
    image: "",
    main: false,
  },
  {
    title: "Real-time Messaging App",
    description: `Real-time messaging application implemented through a websocket
                  connection between frontend and backend.`,
    highlightTags: [""],
    tags: ["NodeJS", "JavaScript", "SQL", "HTML", "CSS"],
    sourceURL: "https://github.com/yong1le/chatapp",
    demoURL: "",
    image: "",
    main: false,
  },
  {
    title: "CSCB20 Messaging App",
    description: "Text messaging application for the final project of CSCB20.",
    highlightTags: [""],
    tags: ["Python", "Flask", "SQL", "HTML", "CSS"],
    sourceURL: "https://github.com/yong1le/chatapp/tree/cscb20",
    demoURL: "",
    image: "",
    main: false,
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Python",
  "Java",
  "C",
  "C++",
  "Bash",
  "Golang",
  "ReactJS",
  "NodeJS",
  "TailwindCSS",
  "Flask",
  "Pandas",
  "Matplotlib",
  "GIT",
  "Firebase",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "Android",
  "Web",
  "Auth",
  "Content Management"
];

const Home = () => {
  return (
    <div className="inset-0">
      <div className="flex h-screen items-center p-3 text-white sm:justify-center sm:p-0">
        <div>
          <p>Hi, my name is</p>
          <h1 className="py-4 text-3xl font-bold sm:text-6xl">Yong Le He</h1>
          <Description descriptions={descriptions} />
        </div>
      </div>

      <div className="rounded-[40px] bg-white px-10 py-10 text-black lg:px-48">
        <div className={`animate-pulse text-accent`}>
          <IoCaretDownOutline className="h-6 w-full" />
        </div>
        {projects
          .filter((e) => e.main)
          .map((e, i) => (
            <MainProject
              key={i}
              title={e.title}
              description={e.description}
              highlightTags={e.highlightTags}
              sourceURL={e.sourceURL}
              demoURL={e.demoURL}
              image={e.image}
              dir={i % 2 == 0 ? "LEFT" : "RIGHT"}
            />
          ))}
        <div className={`animate-pulse text-accent`}>
          <IoCaretUpOutline className="h-6 w-full" />
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center py-10 text-white">
        <h1 className="pb-3 text-xl font-bold sm:text-4xl">All Projects</h1>
        <p className="pb-3 text-center">Hint: Select a skill to query the projects!</p>
        <OtherProjectsSection skills={skills} projects={projects} />
      </div>
    </div>
  );
};

export default Home;
