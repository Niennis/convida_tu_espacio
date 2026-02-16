import { Product } from "./types"

const productos: Product[] = [
  {
    id: 1,
    label: "Monstera Deliciosa",
    description: "Planta tropical de grandes hojas perforadas, ideal para espacios amplios e iluminados. Su follaje exuberante aporta un toque selvático y moderno a cualquier ambiente.",
    img: "/img/2251.avif",
    cuidados: "Riego moderado 1-2 veces por semana. Luz indirecta brillante. Temperatura entre 18-27°C. Limpiar hojas con paño húmedo.",
    cantidad: 8,
    precio: 25000,
  },
  {
    id: 2,
    label: "Pothos Dorado",
    description: "Planta colgante de fácil cuidado con hojas verde y dorado. Perfecta para estantes, repisas o maceteros colgantes. Purifica el aire de forma natural.",
    img: "/img/2251.avif",
    cuidados: "Riego cuando el sustrato esté seco. Tolera poca luz. Temperatura entre 15-30°C. Podar para mantener forma compacta.",
    cantidad: 15,
    precio: 12000,
  },
  {
    id: 3,
    label: "Suculenta Echevería",
    description: "Pequeña suculenta en forma de roseta con hojas carnosas de tonos verdes y rosados. Ideal para escritorios y espacios pequeños.",
    img: "/img/2251.avif",
    cuidados: "Riego escaso, cada 10-15 días. Luz directa o indirecta brillante. Temperatura entre 10-30°C. Sustrato con buen drenaje.",
    cantidad: 20,
    precio: 8000,
  },
  {
    id: 4,
    label: "Ficus Lyrata",
    description: "Árbol de interior con hojas grandes en forma de violín. Elegante y escultórico, es la planta estrella de la decoración contemporánea.",
    img: "/img/2251.avif",
    cuidados: "Riego semanal. Luz indirecta brillante, evitar corrientes de aire. Temperatura entre 18-25°C. Rotar la maceta cada semana.",
    cantidad: 5,
    precio: 35000,
  },
  {
    id: 5,
    label: "Sansevieria",
    description: "Conocida como lengua de suegra, es una planta resistente de hojas verticales con bordes amarillos. Excelente purificadora de aire.",
    img: "/img/2251.avif",
    cuidados: "Riego cada 2-3 semanas. Tolera poca luz y luz directa. Temperatura entre 15-30°C. Muy resistente a la sequía.",
    cantidad: 12,
    precio: 15000,
  },
  {
    id: 6,
    label: "Helecho Boston",
    description: "Helecho frondoso de hojas arqueadas y delicadas. Aporta frescura y movimiento a cualquier rincón, ideal para baños y cocinas.",
    img: "/img/2251.avif",
    cuidados: "Riego frecuente, mantener sustrato húmedo. Luz indirecta. Temperatura entre 16-24°C. Alta humedad ambiental.",
    cantidad: 10,
    precio: 18000,
  },
  {
    id: 7,
    label: "Calathea Ornata",
    description: "Planta de interior con hojas ovaladas decoradas con líneas rosadas sobre fondo verde oscuro. Un verdadero arte natural.",
    img: "/img/2251.avif",
    cuidados: "Riego regular con agua filtrada. Luz indirecta media. Temperatura entre 18-24°C. Mantener alta humedad.",
    cantidad: 6,
    precio: 22000,
  },
  {
    id: 8,
    label: "Cactus San Pedro",
    description: "Cactus columnar de crecimiento vertical con costillas bien definidas. Robusto y decorativo, perfecto para estilos minimalistas.",
    img: "/img/2251.avif",
    cuidados: "Riego muy escaso, cada 3-4 semanas. Luz directa abundante. Temperatura entre 10-35°C. Sustrato arenoso.",
    cantidad: 9,
    precio: 14000,
  },
]

export function getAllProducts(): Product[] {
  return productos
}

export function getProductById(id: number): Product | undefined {
  return productos.find((p) => p.id === id)
}

export function getFeaturedProducts(count: number = 4): Product[] {
  return productos.slice(0, count)
}
