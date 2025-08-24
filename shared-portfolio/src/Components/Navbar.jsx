import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-purple-700 text-white">
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-purple-300">Home</Link>
        <Link to="/about" className="hover:text-purple-300">About</Link>
        <Link to="/projects" className="hover:text-purple-300">Projects</Link>
      </div>
    </nav>
  );
}

export default Navbar;
