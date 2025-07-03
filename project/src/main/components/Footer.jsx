import React from 'react'

function Footer({ darkMode, setDarkMode }) {
  return (
    <footer className="w-full bg-gradient-to-r from-black/80 to-purple-900/80 py-8 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        <div className="text-white text-lg font-semibold">
          © {new Date().getFullYear()} Mon Portfoliot
        </div>
        <div className="flex gap-6 items-center">
          <button
            onClick={() => setDarkMode(dm => !dm)}
            className="px-4 py-2 rounded-full bg-purple-700 text-white font-semibold shadow hover:bg-purple-500 transition"
          >
            {darkMode ? 'Mode clair' : 'Mode nuit'}
          </button>
          <a href='/portfolio/TableauDeSynthèse.xlsx'
            download
            className="text-purple-300 hover:text-white transition-colors duration-200"
          >
            Tableau de Synthèse
          </a>
          <a href='/portfolio/Mon-cv.pdf'
            download
            className="text-purple-300 hover:text-white transition-colors duration-200"
          >
            Mon CV
          </a>
          <a
            href="https://github.com/Matthieu77220"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/matthieu-dietrich-1841a1309/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer