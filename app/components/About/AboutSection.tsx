import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-48">
      <h1 className="pb-3 text-xl font-bold sm:text-4xl">About Me</h1>
      <p className="text-center xl:w-1/2">
        {`Hey there! I'm Yong Le, a computer science student at
        the University of Toronto with a passion for crafting seamless web
        applications. Beyond the code, I revel in the elegance of command line
        interfaces and have a particular fondness for `}
        <Link className="underline" href="https://neovim.io/" target="_blank">
          Neovim
        </Link>
        {`. When I'm not immersed in
        the digital realm, you'll find me hitting the gym or the badminton court.
        Let's connect and build something extraordinary together!`}
      </p>
    </div>
  );
};

export default AboutSection;
