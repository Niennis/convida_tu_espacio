import { Design } from "./types"

const disenos: Design[] = [
  {
    id: 1,
    label: "Terrario Geométrico",
    description: "Terrario en contenedor de vidrio geométrico con suculentas variadas, piedras decorativas y musgo. Una pieza única que combina naturaleza y diseño moderno.",
    img: "/img/2251.avif",
    materiales: "Contenedor de vidrio geométrico, suculentas variadas, musgo preservado, piedras de río, arena decorativa.",
    cantidad: 4,
    precio: 38000,
  },
  {
    id: 2,
    label: "Jardín Vertical Mini",
    description: "Composición vertical con marco de madera y plantas vivas. Ideal para paredes pequeñas, aporta vida y color sin ocupar espacio en el suelo.",
    img: "/img/2251.avif",
    materiales: "Marco de madera reciclada, helechos mini, pothos, sustrato especial, sistema de riego integrado.",
    cantidad: 3,
    precio: 55000,
  },
  {
    id: 3,
    label: "Centro de Mesa Natural",
    description: "Arreglo ornamental para mesa con plantas preservadas y elementos naturales. Elegante y duradero, no requiere mantenimiento.",
    img: "/img/2251.avif",
    materiales: "Base de cerámica artesanal, plantas preservadas, musgo estabilizado, piñas decorativas, flores secas.",
    cantidad: 7,
    precio: 28000,
  },
  {
    id: 4,
    label: "Kokedama Colgante",
    description: "Esfera de musgo suspendida con planta viva en su interior. Arte japonés que transforma cualquier espacio en un jardín aéreo.",
    img: "/img/2251.avif",
    materiales: "Musgo natural, sustrato akadama, hilo de algodón, helecho o pothos vivo.",
    cantidad: 6,
    precio: 20000,
  },
  {
    id: 5,
    label: "Maceta Artesanal Pintada",
    description: "Maceta de cerámica pintada a mano con motivos botánicos, incluye planta suculenta. Cada pieza es única e irrepetible.",
    img: "/img/2251.avif",
    materiales: "Cerámica artesanal, pintura ecológica, suculenta seleccionada, sustrato con drenaje.",
    cantidad: 10,
    precio: 18000,
  },
  {
    id: 6,
    label: "Composición Zen",
    description: "Diseño minimalista inspirado en jardines japoneses. Arena rastrillada, piedras naturales y bonsái pequeño para crear un espacio de calma.",
    img: "/img/2251.avif",
    materiales: "Bandeja de bambú, arena blanca, piedras naturales, bonsái mini, rastrillo de madera.",
    cantidad: 5,
    precio: 42000,
  },
  {
    id: 7,
    label: "Guirnalda Botánica",
    description: "Guirnalda decorativa con eucalipto preservado y flores secas. Perfecta para marcos de puertas, espejos o cabeceras de cama.",
    img: "/img/2251.avif",
    materiales: "Eucalipto preservado, lavanda seca, flores de algodón, base de alambre forrado.",
    cantidad: 8,
    precio: 32000,
  },
  {
    id: 8,
    label: "Domo de Cristal",
    description: "Campana de cristal con composición de plantas preservadas y luces LED cálidas. Un elemento decorativo mágico para cualquier ambiente.",
    img: "/img/2251.avif",
    materiales: "Domo de vidrio soplado, base de madera noble, musgo preservado, flores secas, luces LED.",
    cantidad: 3,
    precio: 48000,
  },
]

export function getAllDesigns(): Design[] {
  return disenos
}

export function getDesignById(id: number): Design | undefined {
  return disenos.find((d) => d.id === id)
}

export function getFeaturedDesigns(count: number = 4): Design[] {
  return disenos.slice(0, count)
}
