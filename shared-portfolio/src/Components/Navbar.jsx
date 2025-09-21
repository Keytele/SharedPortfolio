import React from "react"
import { Link, useNavigate } from "react-router-dom";

const About_Menu_Items = [
  { label: "Aghi", path: "/about/Aghi"},
  { label: "Josh", path: "/about/Josh"}
];

function Navbar() {
  const navigate = useNavigate();
  const [aboutValue, setAboutValue] = React.useState("");

  const handleAboutChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
      setAboutValue("");
    }
  }

  return (
    <nav className="flex justify-between items-center p-4 bg-purple-700 text-white">
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-purple-300">Home</Link>

        <select aria-label="About menu" className="hover:text-purple-300" value={aboutValue} onChange={handleAboutChange}>
          <option value="" disabled>About</option>
          {About_Menu_Items.map((opt) => (
            <option key={opt.path} value={opt.path}>{opt.label}</option>
          ))}
        </select>

        <Link to="/projects" className="hover:text-purple-300">Projects</Link>
        <Link to="/contact" className="hover:text-purple-300">Contact</Link>
        <Link to="/Sandbox" className="hover:text-purple-300">Sandbox</Link>
      </div>
    </nav>
  );
}

export default Navbar;
