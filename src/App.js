import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BigO from './components/BigO';
import Algorithms from './components/Algorithms';
import DataStructures from './components/DataStructures';
import TTT from './components/TTT';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Contact />
      <BigO />
      <Algorithms />
      <DataStructures />
      <TTT />
      <Footer />
    </div>
  );
}

export default App;