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
    title: "Java",
    description: "Langage de programmation orienté objet, utilisé pour développer des applications robustes et évolutives."
  },
  {
    title: "HTML & CSS",
    description: "Langages de balisage et de style utilisés pour créer des pages web et des interfaces utilisateur."
  },
  {
    title:'Tailwind CSS',
    description: "Framework CSS utilitaire pour créer des designs modernes et réactifs rapidement."
  },
  {
    title: "PHP",
    description: "Langage de script côté serveur, utilisé pour développer des applications web dynamiques."
  },
  {
    title: "MySQL",
    description: "Système de gestion de base de données relationnelle, utilisé pour stocker et gérer des données."
  },
  { 
    title: "Python",
    description: "Langage de programmation polyvalent, utilisé pour le développement web, l'analyse de données et l'intelligence artificielle."
  },
  {
    title: "FastAPI",
    description: "Framework web moderne pour Python, utilisé pour créer des API rapides et performantes." 
  },
  {
    title: "Typescript",
    description: "Superset de JavaScript qui ajoute des types statiques, facilitant le développement d'applications robustes."
  },
  {
    title: "Three.js",
    description: "Bibliothèque JavaScript pour créer des graphiques 3D interactifs dans le navigateur. (Débutant)"
  },
  {
    title: "Git",
    description: "Système de contrôle de version distribué, utilisé pour suivre les modifications du code et collaborer efficacement."
  }

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