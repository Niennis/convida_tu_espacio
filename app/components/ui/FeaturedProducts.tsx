'use client'
import Link from "next/link"
import ProductCard from "./ProductCard"
import { getFeaturedProducts } from "@/lib/data/productos"

const featured = getFeaturedProducts(4)

const FeaturedProducts = () => {
  return (
    <section className="mt-20">
      <div className="flex items-center justify-between mb-6 mx-20">

        <h2 className="text-2xl font-bold tracking-tight text-fglight dark:text-fgdark">Productos Destacados</h2>
        <Link className="text-sm font-medium text-primary hover:text-primary/90 transition-colors" href="/productos">Ver todos</Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-6 gap-y-10 items-start justify-items-center my-8 mx-20">
        {featured.map((product) => (
          <ProductCard
            key={product.id}
            label={product.label}
            description={product.description}
            img={product.img}
            href={`/productos/${product.id}`}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
