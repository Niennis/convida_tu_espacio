import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

interface ProductCardProps {
  label: string;
  description: string;
  img: string;
  href?: string;
}

const ProductCard = ({ label, description, img, href }: ProductCardProps) => {
  return (
    <div className="w-full max-w-[320px] min-h-[450px] rounded-lg shadow-md flex flex-col p-5 border-2 bg-card-light dark:bg-card-dark transition-shadow hover:shadow-lg">
      <div className="relative w-full h-[280px] mb-4 rounded-lg overflow-hidden">
        <Image
          src={img}
          alt={label}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-fglight dark:text-fgdark mb-2">{label}</h3>
      <p className="text-sm text-muted-light dark:text-muted-dark mb-4 flex-1 line-clamp-3">{description}</p>
      {href ? (
        <Link href={href}>
          <Button text="Ver más" onclick={() => {}} />
        </Link>
      ) : (
        <Button text="Ver más" onclick={() => {}} />
      )}
    </div>
  )
}

export default ProductCard
