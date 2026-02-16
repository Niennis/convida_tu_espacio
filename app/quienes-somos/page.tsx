import Image from "next/image"

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero image full width */}
      <div className="relative w-full h-[300px] md:h-[450px]">
        <Image
          src="/img/bg-plants.jpg"
          alt="Convida tu Espacio - Quiénes Somos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Quiénes Somos
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="mx-6 md:mx-20 py-12 md:py-16 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-fglight dark:text-fgdark mb-6">
          Convida tu Espacio
        </h2>

        <div className="space-y-5 text-muted-light dark:text-muted-dark leading-relaxed text-lg">
          <p>
            Somos un emprendimiento dedicado a llevar la naturaleza a tu hogar. Creemos que las plantas y los diseños ornamentales tienen el poder de transformar cualquier espacio, aportando frescura, calidez y bienestar.
          </p>

          <p>
            Nuestra pasión nació del amor por las plantas y el deseo de compartir esa conexión con la naturaleza. Cada producto que ofrecemos es cuidadosamente seleccionado, y cada diseño ornamental es elaborado a mano con materiales naturales de la mejor calidad.
          </p>

          <p>
            Trabajamos con variedades de plantas adaptadas a espacios interiores, asegurándonos de que cada una llegue en óptimas condiciones a tu hogar. Además, nuestros diseños ornamentales combinan creatividad y naturaleza para crear piezas únicas que embellecen cualquier rincón.
          </p>

          <p>
            Nos comprometemos a brindarte una atención personalizada. Todas nuestras ventas se realizan directamente por teléfono o correo electrónico, para poder asesorarte y ayudarte a encontrar la planta o el diseño perfecto para tu espacio.
          </p>
        </div>
      </div>
    </main>
  )
}
