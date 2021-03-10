import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BigO from './components/BigO';
import Algorithms from './components/Algorithms';
import DataStructures from './components/DataStructures';
import TTT from './components/TTT/TTT';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className="App" class="grid">
			<Navbar />
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/big-o" component={BigO} />
			<Route exact path="/algorithms" component={Algorithms} />
			<Route exact path="/data-structures" component={DataStructures} />
			<Route exact path="/ttt" component={TTT} />
			<Footer />
		</div>
	);
}

export default App;
