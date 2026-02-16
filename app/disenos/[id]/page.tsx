import Image from "next/image"
import Link from "next/link"
import { getDesignById } from "@/lib/data/disenos"

export default async function DisenoDetalle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const design = getDesignById(Number(id))

  if (!design) {
    return (
      <main className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-fglight dark:text-fgdark mb-4">Diseño no encontrado</h1>
          <Link href="/disenos" className="text-primary hover:text-secondary transition-colors font-medium">
            Volver a diseños
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-28 md:pt-32 pb-20">
      <div className="mx-6 md:mx-20">
        <Link
          href="/disenos"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium mb-8"
        >
          &larr; Volver a diseños
        </Link>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="relative w-full md:w-1/2 h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-md">
            <Image
              src={design.img}
              alt={design.label}
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-fglight dark:text-fgdark">
              {design.label}
            </h1>

            <p className="text-2xl font-semibold text-primary">
              ${design.precio.toLocaleString('es-CL')}
            </p>

            <div>
              <h2 className="text-lg font-semibold text-fglight dark:text-fgdark mb-2">Descripción</h2>
              <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                {design.description}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-fglight dark:text-fgdark mb-2">Materiales</h2>
              <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                {design.materiales}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-fglight dark:text-fgdark mb-2">Disponibilidad</h2>
              <p className="text-muted-light dark:text-muted-dark">
                {design.cantidad} unidades disponibles
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
