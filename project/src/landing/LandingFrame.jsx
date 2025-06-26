import { useNavigate } from "react-router-dom"

function LandingFrame() {
  const navigate = useNavigate() 
  const handleClick = () => {
    navigate('/MainPage')
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="bg-black/60 rounded-3xl px-10 py-12 shadow-2xl backdrop-blur-md text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide drop-shadow-lg">
          Bienvenue sur mon Portfolio
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 font-medium drop-shadow">
          Découvrez mon profil
        </p>
        <button
          className="bg-gradient-to-r from-black to-purple-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-400 transition-all duration-200"
          onClick={handleClick}
        >
          Voir mon portfolio
        </button>
      </div>
    </div>
  )
}

export default LandingFrame