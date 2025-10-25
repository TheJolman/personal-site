import { ProjectCard } from '../../components/ProjectCard'

export function Portfolio() {
  const projects = [
    {
      title: "Club Data API: api.acmcsuf.com",
      description:
        "API in development for club to manage data about board members, announcements, and events. Created CI pipeline and branch protection rules to enable safe collaboration with a team.",
      technologies: "Go, Gin, SQLite, OpenAPI, Nix, GitHub Actions",
      githubLink: "https://github.com/acmcsufoss/api.acmcsuf.com",
    },
    {
      title: "Playlist Rating Web App: Dumps or Fire",
      description:
        "Full-stack web application that rates playlists, albums and songs using popularity data from Spotify. Created CI/CD pipeline to enforce code quality and ensure production is up to date.",
      technologies:
        "Django, Python, Bootstrap, Spotify API, fly.io, GitHub Actions, Docker",
      githubLink: "https://github.com/thejolman/dumps-or-fire",
      liveLink: "",
    },
    {
      title: "Task Tracker CLI: Terminder",
      description:
        "Simple and fast CLI that keeps track of priorities. Uses file serialization and shortest string matching for easy use.",
      technologies: "C++, Cereal, Nix, pre-commit, GitHub Actions",
      githubLink: "https://github.com/TheJolman/terminder",
      liveLink: "",
    },
    {
      title: "MediaWiki AWS",
      description:
        "Terraform Infrastructure as Code (IaC) for deploying MediaWiki on AWS with proper configuration and security.",
      technologies: "Terraform, AWS",
      githubLink: "https://github.com/TheJolman/mediawiki-aws",
      liveLink: "",
    },
  ];

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
      href: "/resume",
      content: "My Resume",
    },
  ];

  return (
    <div className="max-w-screend-md mx-auto flex flex-col items-center justrify-center">

      <div className="flex justify-center">
        {links.map((link) => (
          <a href={link.href} className="link mx-1">
            {link.content}
          </a>
        ))}

      </div>

      <div className="max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}

        {myData.map((category) => (
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordian-2" defaultChecked />
            <div className="collapse-title font-semibold">{category.title}</div>
            <div className="collapse-content text-md ml-4"> {category.content.map((item) => (
              <li>{item}</li>
            ))}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
