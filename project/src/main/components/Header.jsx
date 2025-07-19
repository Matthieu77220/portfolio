import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-20 bg-gradient-to-r from-black/80 to-purple-900/80 backdrop-blur-md shadow-lg overflow-x-hidden">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-white tracking-wide">
            Mon Portfolio
          </span>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul
          className={`flex-col md:flex-row md:flex gap-8 absolute md:static top-full left-0 right-0 w-full md:w-auto bg-black/90 md:bg-transparent transition-all duration-300 ease-in-out ${
            open ? "flex" : "hidden"
          }`}
        >
          <li>
            <a
              href="#parcours"
              className="block px-6 py-3 md:p-0 text-white font-medium hover:text-purple-300 transition-colors duration-200"
            >
              Parcours
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block px-6 py-3 md:p-0 text-white font-medium hover:text-purple-300 transition-colors duration-200"
            >
              Compétences
            </a>
          </li>
          <li>
            <a
              href="#veille"
              className="block px-6 py-3 md:p-0 text-white font-medium hover:text-purple-300 transition-colors duration-200"
            >
              Veille
            </a>
          </li>
          <li>
            <a
              href="#projets"
              className="block px-6 py-3 md:p-0 text-white font-medium hover:text-purple-300 transition-colors duration-200"
            >
              Projets
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
