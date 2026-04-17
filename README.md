# Convida tu Espacio

Sitio web de catálogo para un emprendimiento de plantas y diseños ornamentales. Permite a los visitantes explorar productos, conocer detalles de cada planta o diseño, y contactarse con el negocio para realizar pedidos.

**Demo en producción:** [convida-tu-espacio.vercel.app](https://convida-tu-espacio.vercel.app/)
**Repositorio:** [github.com/Niennis/convida_tu_espacio](https://github.com/Niennis/convida_tu_espacio)

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15 | Framework principal (App Router) |
| [React](https://react.dev/) | 19 | UI |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilos |
| [Vercel](https://vercel.com/) | — | Despliegue |

---

## Descripción del proyecto

**Convida tu Espacio** es un catálogo digital para un emprendimiento que vende plantas de interior y diseños ornamentales hechos a mano. El sitio muestra los productos disponibles con sus precios, descripciones y cuidados, y dirige a los clientes a contactar directamente por teléfono o correo para concretar la compra.

### Funcionalidades principales

- Página de inicio con hero, productos destacados, diseños y sección de contacto
- Catálogo de productos (plantas) con vista de detalle por producto
- Catálogo de diseños ornamentales con vista de detalle por diseño
- Modo oscuro / claro con persistencia en `localStorage`
- Navbar responsiva con menú hamburguesa en móvil
- Página de contacto con información del negocio
- Página "Quiénes Somos"

---

## Estructura de carpetas

```
convida-tu-espacio/
├── app/
│   ├── components/
│   │   └── ui/
│   │       ├── Button.jsx           # Componente de botón reutilizable
│   │       ├── Contact.tsx          # Sección de contacto (home)
│   │       ├── Designs.tsx          # Sección de diseños (home)
│   │       ├── FeaturedProducts.tsx # Productos destacados (home)
│   │       ├── Hero.tsx             # Banner principal
│   │       ├── Navbar.tsx           # Barra de navegación con dark mode
│   │       └── ProductCard.tsx      # Tarjeta de producto
│   ├── contacto/
│   │   └── page.tsx                # Página de contacto
│   ├── disenos/
│   │   ├── [id]/page.tsx           # Detalle de diseño
│   │   └── page.tsx                # Catálogo de diseños
│   ├── productos/
│   │   ├── [id]/page.tsx           # Detalle de producto
│   │   └── page.tsx                # Catálogo de productos
│   ├── quienes-somos/
│   │   └── page.tsx                # Página institucional
│   ├── globals.css                  # Estilos globales y variables CSS
│   ├── layout.tsx                   # Layout raíz (Navbar + fuentes)
│   └── page.tsx                     # Página de inicio
├── lib/
│   └── data/
│       ├── disenos.ts              # Datos estáticos de diseños
│       ├── productos.ts            # Datos estáticos de productos
│       └── types.ts                # Interfaces TypeScript (Product, Design)
├── public/
│   └── img/                        # Imágenes del sitio
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Instalación y uso local

**Requisitos:** Node.js 18+

```bash
# Clonar el repositorio
git clone https://github.com/Niennis/convida_tu_espacio.git
cd convida_tu_espacio/convida-tu-espacio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con Turbopack |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | Linter con ESLint |

---

## Despliegue

El sitio está desplegado en **Vercel** con despliegue continuo desde la rama principal del repositorio.

URL de producción: [https://convida-tu-espacio.vercel.app/](https://convida-tu-espacio.vercel.app/)
