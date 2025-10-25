export function Portfolio() {
  const projects = [
    {
      title: "Club Data API: api.acmcsuf.com",
      description:
        "API in development for club to manage data about board members, announcements, and events. Created CI pipeline and branch protection rules to enable safe collaboration with a team.",
      technologies: "Go, Gin, SQLite, OpenAPI, Nix, GitHub Actions",
      githubLink: "https://github.com/acmcsufoss/api.acmcsuf.com",
      liveLink: "",
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

  return (
    <p className="mt-10">hiasfsadfasdfasdfasdfasfasf</p>
  )
}
