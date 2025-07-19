function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-black/80 to-purple-900/80 backdrop-blur-md shadow-lg overflow-x-hidden">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-2xl font-extrabold text-white tracking-wide">
          Mon Portfolio
        </span>
      </nav>
    </header>
  );
}

export default Header;
