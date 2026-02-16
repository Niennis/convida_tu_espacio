'use client'

const Hero = () => {
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="bg-bannerImg bg-cover bg-repeat bg-bottom">
      <div className="w-full h-screen flex items-center justify-center flex-col bg-blackOverlay">
        <h1 className="text-white text-5xl font-display">Transforma tu espacio con la</h1>
        <h1 className="text-white text-5xl font-display mb-4">belleza de la naturaleza</h1>
        <h2 className="text-white text-2xl">Descubre nuestra selección de plantas y diseños ornamentales</h2>
        <h2 className="text-white text-2xl">para crear ambientes únicos y llenos de vida.</h2>

        <button
          onClick={scrollDown}
          className="mt-12 animate-bounce cursor-pointer"
          aria-label="Desplazar hacia abajo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Hero;
