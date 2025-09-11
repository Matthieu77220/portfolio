import React from 'react'

const projects = [
  {
    title: "Respire stats",
    description: "Application lourde codé en java et la framework java spring, permettant de classifier des données extraites d'un fichier Excel.",
  },
  {
    title: "Bibliothèque",
    description: "Site vitrine d'une bibliothèque codé en php et possèdant une base de données Mysql.",
  },
  {
    title: "Générateur de factures pdf",
    description: "Site permettant de générer un modèle de facture selon les informations entrez d'un utlisateur enregistrées en localStorage, codé en javascript.",
  },
  {
    title: "CRM pour courtier en prêt immbobilier",
    description: "Première version du développement d'un crm permettant de gérer des utilisateurs ainsi que des demandes. la partie client a été codée avec les langages de programmation Typescript, et les frameworks React et TailwindCSS avec une architecture Vite. La partie serveur a été codée avec une base de donnée Mysql, et le langage de programmation Python et une de ses frameworks: FastAPI",
    link: <a href="https://github.com/Matthieu77220/CRM_mvp" target="_blank">Cliqué ici pour voir mon repo github</a>
  }
]

function Projets({darkMode}) {
  return (
    <section id="projets" className="max-w-5xl mx-auto mb-32 px-4">
      <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-black'}`}>Mes Projets</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-black/80 to-purple-900/80 rounded-2xl shadow-xl p-6 text-white flex flex-col items-start hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm mb-4">{proj.description}</p>
            <a className="text-xl mb-4 underline">{proj.link}</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projets