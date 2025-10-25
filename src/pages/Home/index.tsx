export function Home() {
	const buttons = [
		{
			href: "/portfolio",
			content: "Portfolio"
		},
		{
			href: "/resume",
			content: "Resume"
		},
		{
			href: "/about",
			content: "About"
		},
		{
			href: "/tutoring",
			content: "Tutoring"
		},
	];


	return (
		<>
			<head>
				<title>Josh Holman - CS Student & Math Tutor</title>
			</head>

			<div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
				<div className="p-4 text-center">
					<h1 className="text-2xl font-bold mb-4">
						Hello! I'm Josh Holman
					</h1>
					<p className="mb-6">
						Computer Science Student & Software Developer
					</p>
				</div>

				<div className="w-full px-6 mb-6">
					<div className="rounded-lg p-6 border shadow-sm text-center mb-4">
						<p>
							Welcome to my personal website. Explore my portfolio, learn about
							my background, or get in touch about tutoring services.
						</p>
					</div>
					<div className="flex flex-col items-center rounded-lg p-6 border shadow-sm text-center gap-4">
						{buttons.map((button) => (
							<a href={button.href} className="btn btn-wide shadow-md border">{button.content}</a>
						))}
					</div>
				</div>

			</div>
		</>
	);
}

