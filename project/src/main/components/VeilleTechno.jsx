import React from 'react'

function VeilleTechno() {
  return (
    <section id="veille" className="max-w-4xl mx-auto mb-32 px-4">
      <div className="bg-gradient-to-br from-black/90 to-purple-900/80 rounded-3xl shadow-2xl p-10 text-white flex flex-col items-start min-h-[350px]">
        <h2 className="text-3xl font-bold mb-4 text-purple-300">Veille technologique : Zig</h2>
        <p className="mb-6 text-lg">
          Le langage <span className="font-semibold text-purple-400">Zig</span> est un langage de programmation moderne, performant et sécurisé, conçu pour remplacer C dans de nombreux cas d'usage.
        </p>
        {/* Ajoute ici tes éléments de veille, par exemple : */}
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold text-purple-400">Simplicité :</span> Syntaxe claire, compilation rapide, gestion manuelle de la mémoire sans garbage collector.
          </li>
          <li>
            <span className="font-semibold text-purple-400">Interopérabilité :</span> Peut utiliser directement du code C, idéal pour la migration ou l'intégration.
          </li>
          <li>
            <span className="font-semibold text-purple-400">Sécurité :</span> Détection des erreurs à la compilation, prévention des dépassements de tampon.
          </li>
          <li>
            <span className="font-semibold text-purple-400">Cas d'usage :</span> Systèmes embarqués, développement bas niveau, outils performants.
          </li>
        </ul>
        {/* Tu peux ajouter des liens, images, ou autres éléments ici */}
      </div>
    </section>
  )
}

export default VeilleTechno;