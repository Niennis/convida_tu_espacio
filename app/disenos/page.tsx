'use client'
import { useState, useEffect, useRef } from 'react'
import ProductCard from '../components/ui/ProductCard'
import { getAllDesigns } from '@/lib/data/disenos'

const allDesigns = getAllDesigns()

const DisenosPage = () => {
  const [visibleDesigns, setVisibleDesigns] = useState(8) // Cargar 8 inicialmente
  const [isLoading, setIsLoading] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && visibleDesigns < allDesigns.length && !isLoading) {
          setIsLoading(true)

          // Simular delay de carga
          setTimeout(() => {
            setVisibleDesigns((prev) => Math.min(prev + 4, allDesigns.length))
            setIsLoading(false)
          }, 500)
        }
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 0.1
      }
    )

    const sentinel = sentinelRef.current
    if (sentinel) {
      observer.observe(sentinel)
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel)
      }
    }
  }, [visibleDesigns, isLoading])

  return (
    <main className="min-h-screen pt-28 md:pt-32 pb-20">
      <div className="mx-20">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-fglight dark:text-fgdark mb-4">
            Diseños Ornamentales
          </h1>
          <p className="text-lg text-muted-light dark:text-muted-dark">
            Descubre nuestra colección exclusiva de diseños ornamentales para decoración interior
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-6 gap-y-10 items-start justify-items-center">
          {allDesigns.slice(0, visibleDesigns).map((design) => (
            <ProductCard
              key={design.id}
              label={design.label}
              description={design.description}
              img={design.img}
              href={`/disenos/${design.id}`}
            />
          ))}
        </div>

        {/* Sentinel para infinite scroll */}
        <div ref={sentinelRef} className="h-20 flex items-center justify-center mt-8">
          {isLoading && visibleDesigns < allDesigns.length && (
            <p className="text-muted-light dark:text-muted-dark animate-pulse">
              Cargando más diseños...
            </p>
          )}
          {visibleDesigns >= allDesigns.length && (
            <p className="text-muted-light dark:text-muted-dark">
              Has visto todos los diseños
            </p>
          )}
        </div>
      </div>
    </main>
  )
}

export default DisenosPage
