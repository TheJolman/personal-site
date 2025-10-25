interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  liveLink?: string;
  githubLink: string;
}

export default function ProjectCard(
  { title, description, technologies, liveLink, githubLink }: ProjectCardProps,
) {
  return (
    <div className="card card-border bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className="text-sm italic">{technologies}</p>

        <div className="card-actions justify-end">
          {liveLink && (
            <a href={liveLink}>
              🌐 Live Demo
            </a>
          )

          }
          <a href={githubLink} className="btn btn-primary">
            📁 GitHub
          </a>
        </div>

      </div>

    </div>

  )
}
