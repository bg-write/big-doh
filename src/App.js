import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
const Home = lazy(() => import('./components/Home'));
const BigO = lazy(() => import('./components/BigO/BigO'));
const Algorithms = lazy(() => import('./components/Algorithms/Algorithms'));
const DataStructures = lazy(() =>
	import('./components/DataStructures/DataStructures')
);
const TTT = lazy(() => import('./components/TTT/TTT'));
const Footer = lazy(() => import('./components/Footer'));
const Navbar = lazy(() => import('./components/Navbar'));

function App() {
	return (
		<Router>
			<Suspense fallback={<p>Loading...</p>}>
				<div className="App grid">
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route exact path="/big-o" component={BigO} />
					<Route exact path="/algorithms" component={Algorithms} />
					<Route exact path="/data-structures" component={DataStructures} />
					<Route exact path="/ttt" component={TTT} />
					<Footer />
				</div>
			</Suspense>
		</Router>
	);
}

export default App;
