// Import required libraries
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import "./App.css"

// Import components
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";


// Import pages
import Home from "./Pages/Home.jsx";
import About from "./Pages/AboutJosh.jsx";
import Projects from "./Pages/Projects.jsx";
import Sandbox from './Pages/Sandbox.jsx'
import AboutJosh from "./Pages/AboutJosh.jsx";


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/about/Josh" element={<AboutJosh />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;