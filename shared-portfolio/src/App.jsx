// Import required libraries
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import "./index.css"

// Import components
import Navbar from "./Components/Navbar.jsx";


// Import pages
import Home from "./Pages/home.jsx"


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<h1>About Us</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
        </Routes>
      </Router>

  );
}

export default App;