// Import required libraries
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import "./App.css";

// Import components
import Navbar from "./Components/Navbar.jsx";


// Import pages

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About Us</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
        </Routes>
      </Router>
  );
}

export default App;