import React from 'react'

function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-20 bg-gradient-to-r from-black/80 to-purple-900/80 backdrop-blur-md shadow-lg">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo ou nom */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-white tracking-wide">Mon Portfoliot</span>
        </div>
        {/* Navigation */}
        <ul className="flex gap-8">
          <li>
            <a href="#parcours" className="text-white font-medium hover:text-purple-300 transition-colors duration-200">
              Parcours
            </a>
          </li>
          <li>
            <a href="#skills" className="text-white font-medium hover:text-purple-300 transition-colors duration-200">
              Compétences
            </a>
          </li>
          <li>
            <a href="#veille" className="text-white font-medium hover:text-purple-300 transition-colors duration-200">
              Veille
            </a>
          </li>
          <li>
            <a href="#projets" className="text-white font-medium hover:text-purple-300 transition-colors duration-200">
              Projets
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header