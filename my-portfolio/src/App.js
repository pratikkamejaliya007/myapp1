import About from './About';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Skills from './Skill';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

function App() {
  return (
    <>
      <Navbar />      
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
