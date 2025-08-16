// Import required libraries
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React from "react";
import "./App.css";
import { Provider } from "@/components/ui/provider"

// Import components
import Navbar from "./Components/Navbar.jsx";


// Import pages

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
      </Router>
    </React.StrictMode>
  )
}