import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import BigO from './components/BigO/BigO';
import Algorithms from './components/Algorithms/Algorithms';
import DataStructures from './components/DataStructures/DataStructures';
import TTT from './components/TTT/TTT';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
const Home = lazy(() => import('./components/Home'));

function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
					<div className="App grid">
						<NavBar />
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
