import React from 'react'

function VeilleTechno() {
  return (
    <section id="veille" className="max-w-4xl mx-auto mb-32 px-4">
      <div className="bg-gradient-to-br from-black/90 to-purple-900/80 rounded-3xl shadow-2xl p-10 text-white flex flex-col items-start min-h-[350px]">
        <h2 className="text-3xl font-bold mb-4 text-purple-300">Veille technologique : Three.js</h2>
        <p className="mb-6 text-lg">
          <span className="font-semibold text-purple-400">Three.js</span> est une bibliothèque JavaScript qui permet de créer et d'afficher des graphiques 3D dans le navigateur grâce à WebGL.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold text-purple-400">Accessibilité :</span> Rend la 3D accessible aux développeurs web sans connaissances approfondies en WebGL.
          </li>
          <li>
            <span className="font-semibold text-purple-400">Richesse :</span> Permet de créer des scènes, caméras, lumières, matériaux, animations et effets avancés.
          </li>
          <li>
            <span className="font-semibold text-purple-400">Communauté :</span> Large communauté, nombreux exemples et ressources, documentation complète.
          </li>
          <li>
            <span className="font-semibold text-purple-400">Cas d'usage :</span> Visualisations interactives, portfolios, jeux, expériences immersives, data visualisation.
          </li>
        </ul>
        <div className="mt-6">
          <a
            href="https://threejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 underline hover:text-purple-100"
          >
            Découvrir la documentation officielle de Three.js
          </a>
        </div>
      </div>
    </section>
  )
}

export default VeilleTechno