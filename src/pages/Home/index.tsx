import { Navbar } from '../../components/Navbar';

export function Home() {
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
					<p className="font-bold mb-6">
						Computer Science Student & Software Developer
					</p>
				</div>

				<div className="w-full px-6 mb-6">
					<div className="rounded-lg p-6 border shadow-sm text-center">
						<p>
							Welcome to my personal website. Explore my portfolio, learn about
							my background, or get in touch about tutoring services.
						</p>
					</div>
				</div>

				<button className="btn btn-wide mb-4">Portfolio</button>
				<button className="btn btn-wide mb-4">Resume</button>
				<button className="btn btn-wide mb-4">About</button>
				<button className="btn btn-wide">Tutoring</button>
			</div>
		</>
	);
}

