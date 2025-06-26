import React from 'react'

const parcours = [
  {
    titre: "Baccalauréat général",
    etablissement: "Lycée Clément Ader",
    annee: "2023",
    description: "Spécialité HGGSP(histoire-géographie-géopolitique-science politique), SES (sciences économiques et sociales)."
  },
  {
    titre: "L1 STAPS (LAS)",
    etablissement: "Université Sorbonne Paris Nord (IUT Bobigny)",
    annee: "2023 - 2024",
    description: "Sciences et Techniques des Activités Physiques et Sportives, Licence Accès Santé."
  },
  {
    titre: "Brevet de Technicien Supérieur (BTS) SIO-SLAM",
    etablissement: "IPSSI (Campus de Marne-la-Vallée)",
    annee: "2024 - 2026 (en cours d'obtention)",
    description: "Service Informatique aux Organisations, option Solutions Logicielles et Applications Métiers."
  },

  {
    titre:"Développeur stagiaire",
    etablissement: "Saint-Maure-Des-Fossés",
    annee: "28 avril 2025 - 25 juin 2025",
    description: "Développement d'un prototype de CRM pour courtier en prêt immobilier"
  }
]

function Parcours({darkMode}) {
  return (
    <section id ="parcours" className="max-w-4xl mx-auto mb-32 px-4">
      <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-black'}`}>Mon Parcours Scolaire</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {parcours.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-black/80 to-purple-900/80 rounded-2xl shadow-xl p-6 text-white flex flex-col items-start hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-xl font-semibold mb-2">{item.titre}</h3>
            <div className="text-purple-300 font-medium mb-1">{item.etablissement}</div>
            <div className="text-sm text-purple-400 mb-2">{item.annee}</div>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Parcours