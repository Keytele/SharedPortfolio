// src/Components/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const ABOUT_MENU = [
  { label: "Aghi", path: "/about/aghi" },
  { label: "Josh", path: "/about/josh" }
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav
        aria-label="Primary"
        className="
          px-4 sm:px-6 lg:px-8
          text-white/90
          border-b border-white/10
          bg-white/5 supports-[backdrop-filter]:backdrop-blur-md
        "
      >
        <div className="flex h-14 justify-center max-w-full">
          <div className="flex items-center gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  "rounded-full px-4 py-2 transition",
                  "hover:bg-white/10",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
                  isActive ? "bg-white/20 text-white" : ""
                ].join(" ")
              }
            >
              Home
            </NavLink>

            {/* About dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen((s) => !s)}
                className="
                  inline-flex items-center gap-1
                  rounded-full px-4 py-2 transition
                  hover:bg-white/10
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                "
              >
                About
                <svg
                  className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                </svg>
              </button>

              {open && (
                <ul
                  role="menu"
                  className="
                    absolute left-0 mt-2 w-44 p-1
                    rounded-xl shadow-lg
                    border border-white/10
                    bg-white/10 text-white/90 backdrop-blur-md
                  "
                  onMouseLeave={() => setOpen(false)}
                >
                  {ABOUT_MENU.map((opt) => (
                    <li key={opt.path}>
                      <Link
                        to={opt.path}
                        role="menuitem"
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 hover:bg-white/10"
                      >
                        {opt.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                [
                  "rounded-full px-4 py-2 transition",
                  "hover:bg-white/10",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
                  isActive ? "bg-white/20 text-white" : ""
                ].join(" ")
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                [
                  "rounded-full px-4 py-2 transition",
                  "hover:bg-white/10",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
                  isActive ? "bg-white/20 text-white" : ""
                ].join(" ")
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
