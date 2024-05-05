import './App.css';
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} /> {/* Assuming Home is the landing page */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

    </>
  );
}

export default App;
