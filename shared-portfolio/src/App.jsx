// Import required libraries
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import React from "react";
import "./App.css"

// Import components
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";


// Import pages
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import AboutJosh from "./Pages/AboutJosh.jsx";
import AboutAghi from "./Pages/AboutAghi.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about/josh" element={<AboutJosh />} />
          <Route path="/about/aghi" element={<AboutAghi />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Navigate to="/about/josh" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;