'use client'
import { useState, useEffect, useRef } from 'react'
import ProductCard from '../components/ui/ProductCard'
import { getAllProducts } from '@/lib/data/productos'

const allProducts = getAllProducts()

const ProductosPage = () => {
  const [visibleProducts, setVisibleProducts] = useState(8) // Cargar 8 inicialmente
  const [isLoading, setIsLoading] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && visibleProducts < allProducts.length && !isLoading) {
          setIsLoading(true)

          // Simular delay de carga
          setTimeout(() => {
            setVisibleProducts((prev) => Math.min(prev + 4, allProducts.length))
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

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current)
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current)
      }
    }
  }, [visibleProducts, isLoading])

  return (
    <main className="min-h-screen pt-28 md:pt-32 pb-20">
      <div className="mx-20">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-fglight dark:text-fgdark mb-4">
            Todos los Productos
          </h1>
          <p className="text-lg text-muted-light dark:text-muted-dark">
            Explora nuestra colección completa de plantas y diseños ornamentales
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-6 gap-y-10 items-start justify-items-center">
          {allProducts.slice(0, visibleProducts).map((product) => (
            <ProductCard
              key={product.id}
              label={product.label}
              description={product.description}
              img={product.img}
              href={`/productos/${product.id}`}
            />
          ))}
        </div>

        {/* Sentinel para infinite scroll */}
        <div ref={sentinelRef} className="h-20 flex items-center justify-center mt-8">
          {isLoading && visibleProducts < allProducts.length && (
            <p className="text-muted-light dark:text-muted-dark animate-pulse">
              Cargando más productos...
            </p>
          )}
          {visibleProducts >= allProducts.length && (
            <p className="text-muted-light dark:text-muted-dark">
              Has visto todos los productos
            </p>
          )}
        </div>
      </div>
    </main>
  )
}

export default ProductosPage
