import CollapsibleList from "../islands/CollapsibleList.tsx";
import { PortfolioLinks } from "../components/PortfolioLinks.tsx";

export default function PortfolioPage() {
  const myData = [
    {
      title: "Relevant Coursework",
      content: [
        "Artifical Intelligence",
        "Machine Learning",
        "Data Science",
        "Database Systems",
        "Operating Systems",
      ],
    },
    {
      title: "Technical Interests",
      content: [
        "Programming Languages and Compilers",
        "Linux and Operating Systems",
        "DevOps",
        "System Administration",
      ],
    },
    {
      title: "Technical Skills",
      content: [
        "Python, C/C++, Java, Go, Lua, bash, SQL, Matlab",
        "Django, FastAPI, Python DS/ML libraries",
        "Nix/NixOS, Linux, Docker",
        "GitHub Actions, Vim",
      ],
    },
  ];

  const links = [
    {
      href: "https://www.github.com/TheJolman",
      content: "My Github",
    },
    {
      href: "https://www.linkedin.com/in/joshua-holman-685a39244/",
      content: "My Linkedin",
    },
    {
      href: "https://github.com/TheJolman/resume/blob/main/resume.pdf",
      content: "My Resume (PDF)",
    },
  ];
  return (
    <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <p class="font-bold mx-10 my-5">
        Hi there. I am a Computer Science student at CSU, Fullerton (Aug 2023 -
        Dec 2025 expected). I also work part-time as a math tutor. <br /> <br />
      </p>

      <PortfolioLinks links={links} />
      <CollapsibleList items={myData} />
    </div>
  );
}
