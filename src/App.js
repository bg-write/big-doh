import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BigO from './components/BigO/BigO';
import Algorithms from './components/Algorithms/Algorithms';
import DataStructures from './components/DataStructures/DataStructures';
import TTT from './components/TTT/TTT';
import Footer from './components/Footer';
import NavBar from './components/Navbar';

function App() {
	return (
		<div className="App grid">
						<NavBar />
						<Route exact path="/" component={Home} />
						<Route exact path="/big-o" component={BigO} />
						<Route exact path="/algorithms" component={Algorithms} />
						<Route exact path="/data-structures" component={DataStructures} />
						<Route exact path="/ttt" component={TTT} />
						<Footer />
		</div>
	);
}

export default App;
