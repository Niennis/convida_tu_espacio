export default function ContactoPage() {
  return (
    <main className="min-h-screen pt-28 md:pt-32 pb-20">
      <div className="mx-6 md:mx-20">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-fglight dark:text-fgdark mb-4">
            Contacto
          </h1>
          <p className="text-lg text-muted-light dark:text-muted-dark">
            Para consultas o pedidos, contáctanos a través de los siguientes medios.
          </p>
        </div>

        <div className="max-w-2xl rounded-xl bg-card-light dark:bg-card-dark p-6 md:p-10 shadow-md">
          <div className="mb-8 rounded-lg bg-primary/10 dark:bg-primary/20 p-4">
            <p className="text-fglight dark:text-fgdark font-medium">
              Todas nuestras ventas se realizan exclusivamente a través de teléfono o correo electrónico. No contamos con tienda en línea por el momento.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Teléfono</p>
                <p className="text-lg font-medium text-fglight dark:text-fgdark">+1-555-123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Correo electrónico</p>
                <p className="text-lg font-medium text-fglight dark:text-fgdark">info@verde-vida.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
                <svg fill="currentColor" height="24" width="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M176,32H80A48.05,48.05,0,0,0,32,80v96a48.05,48.05,0,0,0,48,48h96a48.05,48.05,0,0,0,48-48V80A48.05,48.05,0,0,0,176,32Zm32,144a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V80A32,32,0,0,1,80,48h96a32,32,0,0,1,32,32ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm52-84a12,12,0,1,0,12,12A12,12,0,0,0,180,76Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-light dark:text-muted-dark">Dirección</p>
                <p className="text-lg font-medium text-fglight dark:text-fgdark">Calle Primavera 123, Ciudad Jardín</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
