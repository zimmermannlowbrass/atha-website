import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Quilts from './components/Quilts/Quilts';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <About />
      <Quilts />
      <Contact />
    </div>
  );
}

export default App;
