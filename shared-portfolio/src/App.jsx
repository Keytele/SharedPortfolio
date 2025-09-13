// Import required libraries
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import "./App.css"

// Import components
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";


// Import pages
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;