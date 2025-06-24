import React from 'react'

const skills = [
  {
    title: "JavaScript",
    description: "Langage de programmation pour le web, utilisé pour créer des applications interactives."
  },
  {
    title: "React",
    description: "Bibliothèque JavaScript pour construire des interfaces utilisateur modernes et dynamiques."
  },
  {
    title: "Node.js",
    description: "Environnement d'exécution pour JavaScript côté serveur, idéal pour les API et applications backend."
  }
  // Ajoute d'autres skills ici
]

function Skills({darkMode}) {
  return (
    <section id="skills" className="max-w-4xl mx-auto mb-32 px-4">
      <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-black'}`}>Mes Compétences</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-black/80 to-purple-900/80 rounded-2xl shadow-xl p-6 text-white flex flex-col items-start hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills