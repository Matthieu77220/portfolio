import React, { useState } from 'react'
import Parcours from './components/Parcours'
import Skills from './components/Skills'
import VeilleTechno from './components/VeilleTechno'
import Header from './components/Header'
import Projets from './components/Projets'
import Footer from './components/Footer'

const MainPage = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`relative z-10 min-h-screen flex flex-col ${darkMode ? 'bg-black' : 'bg-white'}`}>
      {/* En-tête */}
      <Header />
      <main className="flex-1 pt-28">
        <Parcours darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <VeilleTechno darkMode={darkMode} />
        <Projets darkMode={darkMode} />
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </main>
    </div>
  )
}

export default MainPage