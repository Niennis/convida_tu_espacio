'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/disenos", label: "Diseños" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/contacto", label: "Contacto" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <nav
      className={`fixed left-1/2 top-0 z-50 mt-7 flex w-11/12 max-w-7xl -translate-x-1/2 flex-col items-center rounded-sm bg-bgdarks/80 text-fgdark p-3 backdrop-blur-lg md:rounded-full`}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={"/"} className="text-lg font-bold">
            LOGO Convida tu espacio
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {
            LINKS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={`relative px-3 py-2 rounded-md transition-colors ${
                  isActive(href)
                    ? "text-primary font-semibold"
                    : "hover:bg-primary/20 dark:hover:bg-primary/30"
                }`}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))
          }
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
          aria-label="Cambiar tema"
        >
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            hamburguesa
          </button>
        </div>
      </div>

      {
        isOpen && (
          <div className="flex md:hidden flex-col items-center justify-center gap-3 px-5 py-3">
            {
              LINKS.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive(href)
                      ? "text-primary font-semibold bg-primary/10"
                      : "hover:bg-primary/20 dark:hover:bg-primary/30"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))
            }
          </div>
        )
      }
    </nav>
  )
}

export default Navbar;