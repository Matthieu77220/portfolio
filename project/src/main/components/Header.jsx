function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-black/80 to-purple-900/80 backdrop-blur-md shadow-lg overflow-x-hidden">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-2xl font-extrabold text-white tracking-wide">
          Mon Portfolio
        </span>
          <div className="flex-auto flex-nowrap space-x-8 ml-159">
            <a
                href="/portfolio/Mon-cv-alternance.pdf"
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
        

      </nav>
    </header>
  );
}

export default Header;
