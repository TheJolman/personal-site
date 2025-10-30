import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home/index';
import { Portfolio } from './pages/Portfolio/index';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Tutoring } from './pages/Tutoring';
import { NotFound } from './pages/_404';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Navbar />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/about" component={About} />
					<Route path="/resume" component={Resume} />
					<Route path="/tutoring" component={Tutoring} />
					<Route default component={NotFound} />
				</Router>
			</main>
			<Footer />
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
