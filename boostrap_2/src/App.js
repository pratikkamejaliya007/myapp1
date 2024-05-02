import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Navbar from './Navbar';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Footer from './Footer';


function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Hero />
    <About />
    <Footer />
    </>
  );
}

export default App;
