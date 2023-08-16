import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <About />
    </div>
  );
}

export default App;
