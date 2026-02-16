'use client'
import Link from "next/link"
import ProductCard from "./ProductCard"
import { getFeaturedDesigns } from "@/lib/data/disenos"

const featured = getFeaturedDesigns(4)

const Designs = () => {
  return (
    <section className="mt-20">
      <div className="flex items-center justify-between mb-6 mx-20">

        <h2 className="text-2xl font-bold tracking-tight text-fglight dark:text-fgdark">Diseños Ornamentales</h2>
        <Link className="text-sm font-medium text-primary hover:text-primary/90 transition-colors" href="/disenos">Ver todos</Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-6 gap-y-10 items-start justify-items-center my-8 mx-20">
        {featured.map((design) => (
          <ProductCard
            key={design.id}
            label={design.label}
            description={design.description}
            img={design.img}
            href={`/disenos/${design.id}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Designs
